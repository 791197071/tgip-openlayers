import { OnInit } from '@angular/core';
import { MapComponent } from '../../map/map.component';
export declare class LineLayerComponent implements OnInit {
    constructor();
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
    setStyle: Function;
    /**
     * 图层样式参数
     * @param {any} config
     * @example
     * {
      coordsField: line_geometry,
      visible: true
    };
     */
    setConfig: object;
    setVisible: boolean;
    _visible: boolean;
    /**
     * 地图参数
     * @param {any} map
     */
    setMap: MapComponent;
    private _data;
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
    setData: any;
    lineLayer: any;
    _config: object;
    private defaultConfig;
    private _map;
    initLayer(): void;
    updateVisible(): void;
    ngOnInit(): void;
}
