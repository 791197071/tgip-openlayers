import { OnInit } from '@angular/core';
import { MapComponent } from '../../map/map.component';
export declare class PolygonLayerComponent implements OnInit {
    constructor();
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
    setStyle: Function;
    /**
     * 图层样式参数
     * @param {any} config
     * @example
     * {
      coordsField: polygon_geometry,
      visible: true
    };
     */
    setConfig: object;
    setVisible: boolean;
    _visible: boolean;
    setMap: MapComponent;
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
    private _data;
    setData: any;
    polygonLayer: any;
    _config: object;
    private defaultConfig;
    private _map;
    initLayer(): void;
    updateVisible(): void;
    ngOnInit(): void;
}
