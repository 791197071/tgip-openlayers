import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Config } from '../config';
import { Style, Circle, Fill, Stroke, Text, Icon } from 'ol/style';
@Component({
  selector: 'app-layer-control-pc3',
  templateUrl: './layer-control-pc3-demo.component.html',
  styleUrls: ['./layer-control-pc3-demo.component.css']
})
export class LayerControlPc3DemoComponent implements OnInit {
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.config = this.defaultConfig;
  }
  mapConfig: any;
  config: any;
  myPointData: Array<Object>;
  pointConfig = {
    visible: true
  };
  private defaultConfig = {
    select: {
      width: '30px',
      height: '30px',
      src: 'url(assets/select.png)'
    },
    unselect: {
      src: 'url(assets/no_select.png)'
    },
    layers: [
      {
        title: '景区',
        visible: true,
        src: 'url(assets/show_map.png)'
      },
      {
        title: '乡村旅游区',
        visible: false,
        src: 'url(assets/show_map.png)'
      },
      {
        title: '新业态',
        visible: false,
        src: 'url(assets/show_map.png)'
      },
      {
        title: '餐饮',
        visible: false,
        src: 'url(assets/show_map.png)'
      },
      {
        title: '旅游酒店',
        visible: false,
        src: 'url(assets/show_map.png)'
      },
      {
        title: '主题住宿',
        visible: false,
        src: 'url(assets/show_map.png)'
      }
    ]
  };
  initData() {
    this.myPointData = [
      {
        point_geometry: 'point(118.80613110195503 31.84447535733951)',
        name: '淮胜信用社'
      }
    ];
  }
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
          color: 'rgba(255,255,0,0.9)' // 字体颜色
        }),
        // 字体外晕的颜色及宽度
        stroke: new Stroke({
          color: 'rgba(0,0,205,0.9)',
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
  runParent(msg: string) {
    console.log(this.defaultConfig.layers[0].visible);
  }
}
