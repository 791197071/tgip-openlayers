import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export interface MapConfigInterface {
    maxScale?: number;
    minScale?: number;
    extent?: Array<number>;
    defaultLevel?: number;
    baseMapUrl?: string;
    proj?: string;
}
export declare class MapComponent implements OnInit, OnChanges {
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
    setConfig: any;
    _visible: boolean;
    config: any;
    private hasInit;
    configUrl: string;
    private defaultConfig;
    map: any;
    xyzLayer: any;
    constructor();
    ngOnInit(): void;
    initMap(config: any): void;
    updateVisible(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
