import { OnInit } from '@angular/core';
import { MapComponent } from '../../map/map.component';
export declare class PointLayerComponent implements OnInit {
    constructor();
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
    setStyle: Function;
    /**
     * 图层样式参数
     * @param {any} config
     * @example
     * {
      coordsField: point_geometry,
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
    setData: any;
    pointLayer: any;
    config: any;
    _state: any;
    _config: any;
    private visible;
    private stateConfig;
    private _map;
    initLayer(): void;
    updateVisible(): void;
    ngOnInit(): void;
}
