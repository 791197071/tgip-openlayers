import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from '../config';
import { Style, Circle, Fill, Stroke, Text, Icon } from 'ol/style';
// declare let HandsMap, ol;
@Component({
  selector: 'app-layer-control-pc2-demo',
  templateUrl: './layer-control-pc2-demo.component.html',
  styleUrls: ['./layer-control-pc2-demo.component.css']
})
export class LayerControlPc2DemoComponent implements OnInit {
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
    size: {
      width: 'auto', // 总宽度
      height: 'auto' // 总高度
    },
    singleSize: {
      width: '30px', // 图标大小
      height: '30px',
      padding: '10px' // 图标外边距
    },
    position: {
      top: '10px',
      left: '10px' // 全局定位
    },
    style: {
      bgClass: 'custom', // 整个背景样式
      singleSelectClass: 'select', // 选中后样式
      singleUnselectClass: 'unSelect', // 未选中样式
      checkbox: 'assets/all.png',
      basis: {
        float: 'left',
        liststyle: 'none',
        width: '120px', // 块宽度
        height: '50px', // 块高度
        textalign: 'center',
        fontColor: '#ffffff',
        fontSize: '18px',
        padding: '0px', // 块外边距
        borderRadius: '10PX'
        // 'lineheight': '100px',  // 基础样式
      },
      bg: {
        background: '#003887',
        border: '1px solid #b1d4c2',
        boxShadow: '0 0 10px 0 rgba(16,60,38,.3)'
      },
      select: {
        src: 'assets/icon.png',
        bgColor: '#15305c',
        fontColor: '#666666',
        borderRadio: '10px' // 选中样式
      },
      unselect: {
        src: 'assets/icon.png',
        bgColor: 'none',
        fontColor: '#ffffff',
        borderRadio: '10px' // 未选中样式
      }
    },
    layers: [
      {
        title: '游',
        visible: true, // 默认显示与否
        layer: {}, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '食',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '住',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '行',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '购',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      }
    ]
  };

  // 数据 wkt格式数据
  initData() {
    this.myPointData = [
      {
        point_geometry: 'point(118.8059526423796 31.844177924713783)',
        name: '淮胜信用社'
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
  // 接收子组件传递过来的数据
  runParent(msg: string) {
    console.log(this.defaultConfig.layers[0].visible);
  }
}
