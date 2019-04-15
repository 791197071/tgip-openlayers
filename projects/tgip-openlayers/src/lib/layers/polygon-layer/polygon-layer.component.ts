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
import { Style, Circle, Fill, Stroke } from 'ol/style';
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
  selector: 'tgip-ol-polygon-layer',
  templateUrl: './polygon-layer.component.html',
  styleUrls: ['./polygon-layer.component.css']
})
export class PolygonLayerComponent implements OnInit {
  constructor() {
    this._config = this.defaultConfig || {};
    this.initLayer();
  }
  /**
   * 面样式参数
   * @param {any} style
   * polygonStyle(feature, resolution) {
    const styles = [];
     const styles = [];
    const style = new ol.style.Style({
      fill: new ol.style.Fill({
        color:  rgba(255,099,49,0.6),
      }),
      stroke: new ol.style.Stroke({
        color:  rgba(255,0,0,0.6) ,
        width: 3
      })
    });

    styles.push(style);
    return styles;
  }
   */
  @Input('style')
  set setStyle(value: Function) {
    this.polygonLayer.setStyle(value);
  }

  /**
   * 图层样式参数
   * @param {any} config
   * @example
   * {
    coordsField: polygon_geometry,
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
  // 地图组件
  @Input('map')
  set setMap(value: MapComponent) {
    if (!value) {
      return;
    }
    console.log('已绑定 map 组件 实例');
    this._map = value;
    this._map.map.addLayer(this.polygonLayer);
  }

  /**
   * 数据
   * @param {any} data
   * @example
   *  [
    {
      polygon_geometry:
         MULTIPOLYGON (((118.99089624905777 33.002410312564244,119.19100891964808 32.99527192954675,  +
         119.08964388079971 33.08283609456131))) ,
      name:  淮胜信用社，
    }
  ];
   */
  private _data: MapComponent;
  @Input('data')
  set setData(value: any) {
    // 做处理
    if (!value) {
      return;
    }
    let dataR = value;

    const coordFieldConfig = { wktField: this._config['coordsField'] };
    if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
      dataR = ServiceUtil.ConvertPolygonsll2tmerc()(
        value,
        coordFieldConfig
      ); // dataR
    }
    // 先清空，再增加
    this._data = value;
    this.polygonLayer.clearFeatures();
    this.polygonLayer.addFeatures(dataR, coordFieldConfig);
  }

  polygonLayer: any;
  _config: object;

  private defaultConfig = {
    coordsField: 'polygon_geometry',
    visible: true
  };

  private _map: MapComponent;

  // 初始化图层只由一次
  initLayer() {
    this.polygonLayer = new PolygonLayer({
      layerName: 'polygonLayer',
      infoTemplate: '',
      dataList: [],
      coordsField: { x: 'coordinates', y: 'coordinates' }
    });
    // 默认样式问题
    const defaultStyle = new Style({
      fill: new Fill({
        color: 'rgba(255,099,49,0.6)'
      }),
      stroke: new Stroke({
        color: 'rgba(255,0,0,0.6)',
        width: 3
      })
    });
    this.polygonLayer.setStyle(defaultStyle);
  }

  updateVisible() {
    this.polygonLayer.setVisible(this._visible);
  }

  // 配置选项

  ngOnInit() { }
}
