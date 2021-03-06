import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { Style, Circle, Fill, Stroke, Text, Icon } from 'ol/style';
@Component({
  selector: 'app-point-layer-demo',
  templateUrl: './point-layer-demo.component.html',
  styleUrls: ['./point-layer-demo.component.css']
})
export class PointLayerDemoComponent implements OnInit {
  constructor() {
    this.mapConfig = this._mapConfig;
  }
  mapConfig: any;
  private _mapConfig = Config.mapConfig;

  myPointData: Array<Object>;
  // 坐标字段及可见性
  pointConfig = {
    coordsField: 'point_geometry',
    visible: true
  };

  // 数据 wkt格式数据
  initData() {
    this.myPointData = [
      {
        point_geometry: 'point(118.76455002087813 31.853814741787392)',
        // coordinates: [119.11534205966268, 32.990513007535085],
        name: '东南大学'
      },
      {
        point_geometry: 'point(118.83646922977937 31.844534843864658)',
        // coordinates: [118.96258066308839, 33.00050674375958],
        name: '共农村'
      }
    ];
  }

  // 样式
  pointStyle(feature, resolution) {
    const styles = [];
    const style01 = new Style({
      image: new Icon({
        // [0.5,0.5]表示坐标对应符号中心，[0.5,1]表示坐标对应符号底部中间点
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        opacity: 1,
        src: 'assets/eatting.png' // 符号图片url
      }),
      text: new Text({
        textAlign: 'center', // 文本标注 对齐方式
        textBaseline: 'middle', // 文本基线为middle,
        font: 'bold 22px Arial', // 字体 字号 字体
        text: feature.get('name'), // 标注的内容
        fill: new Fill({
          color: 'rgba(255,0,0,0.9)' // 字体颜色
        }),
        // 字体外晕的颜色及宽度
        stroke: new Stroke({
          color: 'rgba(0,255,0,0.7)',
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

  ngOnInit() {
    this.initData();
  }
}
