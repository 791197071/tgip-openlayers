import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';
@Component({
  selector: 'app-line-layer-demo',
  templateUrl: './line-layer-demo.component.html',
  styleUrls: ['./line-layer-demo.component.css']
})
export class LineLayerDemoComponent implements OnInit {
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.initData();
  }
  mapConfig: any;
  myLineData: Array<Object>;
  // 坐标字段及可见性

  lineConfig = {
    coordsField: 'line_geometry',
    visible: true
  };

  // 数据 wkt格式数据
  initData() {
    this.myLineData = [
      {
        line_geometry:
          'LINESTRING (118.76455002087813 31.853814741787392,118.83646922977937 31.844534843864658)',
        name: '淮胜信用社'
      }
    ];
  }

  // 样式
  lineStyle(feature, resolution) {
    const styles = [];
    const style = new Style({
      stroke: new Stroke({
        color: 'rgba(255,0,0,0.6)',
        width: 5
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

    styles.push(style);
    return styles;
  }

  ngOnInit() {}
}
