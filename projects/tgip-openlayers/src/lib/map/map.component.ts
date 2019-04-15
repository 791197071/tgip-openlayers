import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Map } from 'handsmap-map-client/openlayers/Map';
import { View } from 'handsmap-map-client/openlayers/View';
import { TileXYZLayer } from 'handsmap-map-client/openlayers/layer';
declare let HandsMap;
export interface MapConfigInterface {
  maxScale?: number;
  minScale?: number;
  extent?: Array<number>;
  defaultLevel?: number;
  baseMapUrl?: string;
  proj?: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  /**
   * 图层样式参数
   * @param {any} config
   * @example
   *static mapConfig = {
     centerX : 118.803930100525,
     centerY : 31.8484312112617,
     cnName :  江宁底图 ,
     enName :  jiangning ,
     extentMaxX : 119.366783573428,
     extentMaxY : 32.3233337556079,
     extentMinX : 118.324579652874,
     extentMinY : 31.478149206337,
     id :  test8888888888888 ,
     maxZoom : 7,
     minZoom : 3,
     zoom : 4,
     coordinateSystimSrid :  EPSG:4326 ,
     backgroundColor :  #568899 ,
     basemapMapLayers : [{
       id :  mollit ,
       visible : true,
       sourceId :  jiangning_bg ,
       sourcePara : {
         cnName :  江宁全域旅游 ,
         describe :  test ,
         gmtCreate : 1554256721000,
         gmtModified : 1554256721000,
         enName :  jiangning_88 ,
         id :  4da0d2318ac7aa739233ffe421587b70 ,
         originX : -400,
         originY : 400,
         overAmap : 0,
         coordinateSystimSrid :  EPSG:4326 ,
         resolutions : [0.0009517844023321121, 0.0007138383017490841, 0.00047589220116605604,
          0.00035691915087454206, 0.00017845957543727103, 0.00011897305029151401, 0.000059486525145757005,
          0.000029743262572878502
        ],
         scales : [1600000, 1200000, 800000, 600000, 300000, 200000, 100000, 50000],
         tilesizeHeight : 512,
         tilesizeWidth : 512,
         dpi : 192,
         urlAmap :   ,
         urlLeaflet :   ,
      }
    }]
  };
}

   */
  @Input('config')
  set setConfig(value: any) {
    // 做处理
    if (!value) {
      return;
    }
    this.config = Object.assign({}, this.defaultConfig, value);
    console.log('第3步？', this.config, value);
    this.initMap(this.config);
    this.updateVisible();
  }

  _visible: boolean;
  config: any;
  private hasInit = false;

  @Input() configUrl: string;

  private defaultConfig = null;

  public map: any;
  public xyzLayer: any;
  constructor() {
    this.config = this.defaultConfig;
    console.log('第一步', this.config);
  }
  ngOnInit() {
    console.log('第二步？', this.config);

    if (this.config) {
      this.initMap(this.config);
    } else if (this.configUrl) {
      this.initMap(this.configUrl);
    } else {
      console.warn('地图配置为空，请检查配置！');
    }
  }

  initMap(config: any) {
    console.log('地图初始化开始');
    if (this.hasInit) {
      console.log('地图已经初始化，配置变化不会自动同步');
      return;
    }

    this.hasInit = true;
    const mapParams = config;
    this.map = new Map({
      target: 'mapContainer',
      // controls: { zoom: false, roate: false, attribution: false },
      view: View.getViewByHmapserver(mapParams),
      // interactions: { pinchRotate: false }
    });
    this.xyzLayer = TileXYZLayer.getTileXYZLayerByHmapserver(
      mapParams
    );
    this.map.addLayer(this.xyzLayer);
    this.map.showClickCoordinate = true;
  }
  updateVisible() {
    this.map.removeLayer(this.xyzLayer);
    this.xyzLayer = TileXYZLayer.getTileXYZLayerByHmapserver(this.config);
    this.map.addLayer(this.xyzLayer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
