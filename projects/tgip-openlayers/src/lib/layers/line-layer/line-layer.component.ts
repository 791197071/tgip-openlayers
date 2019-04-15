import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';
import { Map } from 'handsmap-map-client/openlayers/Map';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
import {
  TileXYZLayer,
  PointLayer,
  PolygonLayer,
  LineLayer,
  MixLayer,
  BaseLayer,
  BaseVectorLayer
} from 'handsmap-map-client/openlayers/layer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-line-layer',
  templateUrl: './line-layer.component.html',
  styleUrls: ['./line-layer.component.css']
})
export class LineLayerComponent implements OnInit {
  constructor() {
    this._config = this.defaultConfig || {};
    this.initLayer();
  }
  /**
   * 线样式参数
   * @param {any} style
   * @example
   *   lineStyle(feature, resolution) {
    const styles = [];
    const style = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(255,0,0,0.6)',
        width: 5
      }),
      text: new ol.style.Text({
        textAlign: 'center', // 文本标注 对齐方式
        textBaseline: 'middle', // 文本基线为middle,
        font: 'bold 22px Arial', // 字体 字号 字体
        text: feature.get('name'), // 标注的内容
        fill: new ol.style.Fill({
          color: 'rgba(255,0,0,0.9)' // 字体颜色
        }),
        // 字体外晕的颜色及宽度
        stroke: new ol.style.Stroke({
          color: 'rgba(0,255,0,0.7)',
          width: 3
        }),
        offsetX: 0, // 偏移量 x 坐标（单位为像素）
        offsetY: -20, // 偏移量 y 坐标（单位为像素）
        rotation: 0 // 旋转 默认为0
      })
    });

    styles.push(style);
    return styles;
  }
   */
  @Input('style')
  set setStyle(value: Function) {
    this.lineLayer.setStyle(value);
  }

  /**
   * 图层样式参数
   * @param {any} config
   * @example
   * {
    coordsField: line_geometry,
    visible: true
  };
   */
  @Input('config')
  set setConfig(value: object) {
    this._config = Object.assign({}, this.defaultConfig, value);

  }

    // 更新 可见性
    @Input('visible')
    set setVisible(value: boolean) {
      this._visible = value;
      this.updateVisible();
    }
    _visible: boolean;

  /**
   * 地图参数
   * @param {any} map
   */
  @Input('map')
  set setMap(value: MapComponent) {
    if (!value) {
      return;
    }
    console.log('已绑定 map 组件 实例');
    this._map = value;
    this._map.map.addLayer(this.lineLayer);
  }
  private _data: MapComponent;
  /**
   * 数据参数
   * @param {any} data
   * @example
   * [
    {
      line_geometry:
          LINESTRING (119.1124867064557 32.98860943873043, 119.2048097934819 32.92721934478,119.20005087147024 32.99527192954675)  ,
      name:   淮胜信用社，
    },
    {
      line_geometry:
          LINESTRING (119.1124867064557 32.98860943873043, 119.2048097934819 32.92721934478,119.20005087147024 32.99527192954675)  ,
      name:   淮胜信用社，
    }
  ];
 */
  @Input('data')
  set setData(value: any) {
    // 做处理
    if (!value) {
      return;
    }
    let dataR = value;

    const coordFieldConfig = { wktField: this._config['coordsField'] };
    if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
      dataR = ServiceUtil.ConvertLinesll2tmerc(
        value,
        coordFieldConfig
      ); // dataR
    }
    // 先清空，再增加
    this._data = value;
    this.lineLayer.clearFeatures();
    this.lineLayer.addFeatures(dataR, coordFieldConfig);
  }

  lineLayer: any;
  _config: object;

  private defaultConfig = {
    coordsField: 'line_geometry',
    visible: true
  };

  private _map: MapComponent;

  // 初始化图层只由一次
  initLayer() {
    this.lineLayer = new LineLayer({
      layerName: 'lineLayer',
      infoTemplate: '',
      dataList: [],
      coordsField: { x: 'coordinates', y: 'coordinates' }
    });
    // 默认样式问题
    const defaultStyle = new Style({
      stroke: new Stroke({
        color: 'rgba(255,0,0,0.6)',
        width: 5
      })
    });
    this.lineLayer.setStyle(defaultStyle);
  }

  updateVisible() {
    this.lineLayer.setVisible(this._visible);
  }

  // 配置选项

  ngOnInit() {}
}
