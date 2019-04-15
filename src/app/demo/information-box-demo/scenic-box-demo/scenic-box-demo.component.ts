import { Component, OnInit } from '@angular/core';
import { Config } from '../../config';
import { Style, Circle, Fill, Stroke, Text, Icon } from 'ol/style';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-scenic-box-demo',
  templateUrl: './scenic-box-demo.component.html',
  styleUrls: ['./scenic-box-demo.component.css']
})
export class ScenicBoxDemoComponent implements OnInit {
  mapConfig: any;
  informationConfig: any;
  swiper: any;
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.informationConfig = this.defaultConfig;
    this.swiper = this.mySwiper;
  }
  pointConfig = {
    coordsField: 'point_geometry',
    visible: true
  };
  private mySwiper = {
    // 开启鼠标的抓手状态
    grabCursor: true,
    loop: false,
    autoplay: true,
    observer: true, //  必须有这个字段
    observeParents: true, // 必须有这个字段
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    navigationHide: true
  };
  private defaultConfig = {
    background: '#fff',
    title: '苏A123456',
    showGrade: 'true',
    showDetails: 'true',
    titleStyle: {
      fontSize: '18px',
      color: '#000'
    },
    starLevel: {
      name: 'AAA',
      width: '100px',
      background: '#0065b3'
    },
    data: [
      {
        src: 'assets/fen1.jpg',
      },
      {
        src: 'assets/fen1.jpg',
      }
    ],
    detailsStyle: {
      fontSize: '18px',
      color: '#000'
    },
    data1: [
      {
        name: '等级',
        value: 'AAAAAA'
      },
      {
        name: '电话',
        value: '0123456789'
      },
      {
        name: '地址',
        value: '南京市江宁区经济开发区'
      }
    ],
  };
  myPointData: Array<Object>;
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

  ngOnInit() {
    this.initData();

  }

}
