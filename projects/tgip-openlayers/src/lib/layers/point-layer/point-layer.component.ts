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
import { Map } from 'handsmap-map-client/openlayers/Map';
import { Style, Circle, Fill, Stroke, Icon } from 'ol/style';
import {
  TileXYZLayer,
  PointLayer,
  PolygonLayer,
  LineLayer,
  MixLayer,
  BaseLayer,
  BaseVectorLayer
} from 'handsmap-map-client/openlayers/layer';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-point-layer',
  templateUrl: './point-layer.component.html',
  styleUrls: ['./point-layer.component.css']
})
export class PointLayerComponent implements OnInit {
  constructor() {
    this._visible = this.visible;
    this._config = this.visible;
    this._state = this.stateConfig || {};
    this.initLayer();
  }

  /**
   * 线样式参数
   * @param {any} style
   * pointStyle(feature, resolution) {
    const styles = [];
    const style01 = new ol.style.Style({
      image: new ol.style.Icon({
        // [0.5,0.5]表示坐标对应符号中心，[0.5,1]表示坐标对应符号底部中间点
        anchor: [0.5, 0.5],
        anchorXUnits: fraction,
        anchorYUnits: fraction,
        opacity: 1,
        src: assets/eatting.png // 符号图片url
      }),
      text: new ol.style.Text({
        textAlign: center , // 文本标注 对齐方式
        textBaseline:  middle , // 文本基线为middle,
        font:  bold 22px Arial , // 字体 字号 字体
        text: feature.get( name ), // 标注的内容
        fill: new ol.style.Fill({
          color:  rgba(255,0,0,0.9)  // 字体颜色
        }),
        // 字体外晕的颜色及宽度
        stroke: new ol.style.Stroke({
          color:  rgba(0,255,0,0.7) ,
          width: 3
        }),
        offsetX: 0, // 偏移量 x 坐标（单位为像素）
        offsetY: -20, // 偏移量 y 坐标（单位为像素）
        rotation: 0 // 旋转 默认为0
      })
    });
    styles.push(style01);
    return styles;
  }
   */
  @Input('style')
  set setStyle(value: Function) {
    this.pointLayer.setStyle(value);
  }

  /**
   * 图层样式参数
   * @param {any} config
   * @example
   * {
    coordsField: point_geometry,
    visible: true
  };
   */
  @Input('config')
  set setConfig(value: object) {
    this._config = Object.assign({}, this.visible, value);
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
    // console.log('Input++++++++++++++++++++++++++++++++++++++++++++++++++');
    if (!value) {
      return;
    }
    console.log('已绑定 map 组件 实例');
    this._map = value;
    this._map.map.addLayer(this.pointLayer);
  }

  // 数据
  private _data: MapComponent;
  /**
   * 数据参数
   * @param {any} data
   * @example
   * [
    {
      point_geometry:  point(118.82266835594554 31.89450352498709) ,
      // coordinates: [119.11534205966268, 32.990513007535085],
      name:  东南大学，
    },
    {
      point_geometry:  point(118.96258066308839 33.00050674375958) ,
      // coordinates: [118.96258066308839, 33.00050674375958],
      name:  共农村，
    },
    {
      point_geometry:  point(119.007314529998 32.97385678049428) ,
      // coordinates: [119.007314529998, 32.97385678049428],
      name:  观音寺，
    },
    {
      point_geometry:  point(119.06394570193676 32.8291855513398) ,
      // coordinates: [119.06394570193676, 32.8291855513398],
      name:  金南镇，
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

    const coordFieldConfig = { wktField: this._state['coordsField'] };
    if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
      dataR = ServiceUtil.ConvertPointsll2tmerc(value, coordFieldConfig); // dataR
    }
    // 先清空，再增加
    this._data = value;
    this.pointLayer.clearFeatures();
    this.pointLayer.addFeatures(dataR, coordFieldConfig);
  }
  pointLayer: any;
  config: any;
  _state: any;
  _config: any;

  private visible: true;

  private stateConfig = {
    coordsField: 'point_geometry'
  };

  private _map: MapComponent;

  // 初始化图层只由一次
  initLayer() {
    this.pointLayer = new PointLayer({
      layerName: 'pointLayer',
      infoTemplate: '',
      dataList: [],
      coordsField: { x: 'coordinates', y: 'coordinates' }
    });
    // 默认样式问题
    const defaultStyle = new Style({
      image: new Icon({
        radius: 10,
        fill: new Fill({
          color: '#ff0000'
        }),
        stroke: new Stroke({
          color: '#ff0000',
          width: 2
        }),
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        opacity: 1,
        src: 'assets/eatting.png' // 符号图片url
      })
    });
    this.pointLayer.setStyle(defaultStyle);
  }
  updateVisible() {
    this.pointLayer.setVisible(this._visible);
  }
  // 配置选项

  ngOnInit() {
    // console.log('初始化++++++++++++++++++++++++++++++++++++++++++++++++++');
  }
}
