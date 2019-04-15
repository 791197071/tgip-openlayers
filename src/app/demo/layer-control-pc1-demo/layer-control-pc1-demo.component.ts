import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { Style, Circle, Fill, Stroke, Text, Icon } from 'ol/style';
@Component({
  selector: 'app-layer-control-pc1-demo',
  templateUrl: './layer-control-pc1-demo.component.html',
  styleUrls: ['./layer-control-pc1-demo.component.css']
})
export class LayerControlPcDemoComponent implements OnInit {
  mapConfig: any;
  config: any;
  myPointData: Array<Object>;
  myLineData: Array<Object>;
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.config = this.defaultConfig;
  }
  pointConfig = {
    visible: true
  };
  lineConfig = {
    visible: true
  };

  private defaultConfig = {
    size: {
      width: 'auto', // 总宽度
      height: 'auto' // 总高度
    },
    singleSize: {
      width: '50px',
      height: '50px' // 图标大小
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
        width: '135px',
        height: '100px',
        textalign: 'center',
        fontColor: '#ffffff',
        fontSize: '24px',
        padding: '10px',
        borderRadius: '10PX'
        // 'lineheight': '100px',  // 基础样式
      },
      bg: {
        background: '#103c26',
        border: '1px solid #b1d4c2',
        boxShadow: '0 0 10px 0 rgba(16,60,38,.3)'
      },
      select: {
        src: 'assets/icon.png',
        bgColor: 'rgba(99,132,115,.3)',
        fontColor: '#666666',
        fontSize: '24px',
        borderRadio: '10px' // 选中样式
      },
      unselect: {
        src: 'assets/icon.png',
        bgColor: 'none',
        fontColor: '#ffffff',
        fontSize: '24px',
        borderRadio: '10px' // 未选中样式
      }
    },
    layers: [
      {
        title: '旅游公路',
        layerName: 'tourismRoad',
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
        title: '景区',
        layerName: 'tourismRoad',
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
        title: '乡村旅游点',
        layerName: 'tourismRoad',
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
        title: '驿站',
        layerName: 'tourismRoad',
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
        title: '观景台',
        layerName: 'tourismRoad',
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
  initData() {
    this.myPointData = [
      {
        point_geometry: 'point(118.8059526423796 31.844177924713783)',
        name: '淮胜信用社'
      }
    ];
    this.myLineData = [
      {
        line_geometry:
          'LINESTRING (118.89226759036607 31.867347926258052,118.83646922977937 31.844534843864658)',
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
  ngOnInit() {
    this.initData();
  }
  // 接收子组件传递过来的数据
  runParent(msg: string) {
    console.log(this.defaultConfig.layers[0].visible);
  }
}
