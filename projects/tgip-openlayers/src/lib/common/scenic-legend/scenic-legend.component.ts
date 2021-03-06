import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-scenic-legend',
  templateUrl: './scenic-legend.component.html',
  styleUrls: ['./scenic-legend.component.css']
})
export class ScenicLegendComponent implements OnInit {
  constructor() {
    this.config = this.defaultConfig;
  }
  hide: any;
  flag: any;
  private _config: any;
  get config(): any {
    return this._config;
  }
  /**
   * 样式参数
   * @param {any} config
   * @example
   *
   * private defaultConfig = {
    openStyle: {
      size: {
        width: '50px', // 总宽度
        height: '50px' // 总高度
      },
      position: {
        top: '',
        bottom: '10px',
        right: '',
        left: '10px' // 全局定位
      },
      openImage: 'assets/show_map.png',
    },
    closeStyle: {
      size: {
        width: '50px', // 总宽度
        height: '50px' // 总高度
      },
      position: {
        top: '10px',
        bottom: '10px',
        right: '10px',
        left: '10px' // 全局定位
      },
      closeImage: 'assets/close.png',
    },
    title: '图例',
    gradestyle: {
      color: 'white',
      height: '20px',
      width: '50px'
    },
    numberstyle: {
      color: 'white',
      width: '50px',
      height: '20px'
    },
    Iconstyle: {
      color: 'white',
      width: '30px',
      height: '30px'
    },
    visible: 'block',
    background: '#000',
    border: '1px solid #fff',
    size: {
      width: '200px', // 总宽度
      height: 'auto' // 总高度
    },
    position: {
      top: '10px',
      bottom: '10px',
      right: '10px',
      left: '10px' // 全局定位
    },
    datas0: [
      {
        title: '景区等级',
        visible: 'true', // 显示
        type: 'colorType',
        color: 'white',
        titleStyle: {
          color: 'gray'
        },
        data: [{
          name: '5A',
          value: 'rgba(255,152,1,1)'
        }, {
          name: '4A',
          value: 'rgba(159,224,96,1)'
        }, {
          name: '3A',
          value: 'rgba(2,139,255,1)'
        }, {
          name: '2A',
          value: 'rgba(21,112,176,1)'
        }]
      }],
    datas1: [
      {
        title: 'A景区数量统计',
        visible: 'true', // 显示
        type: 'colorNum',
        color: 'white',
        titleStyle: {
          color: 'gray',
        },
        data: [{
          name: '30',
          value: 'rgba(255,152,1,1)'
        }, {
          name: '40',
          value: 'rgba(159,224,96,1)'
        }, {
          name: '50',
          value: 'rgba(2,139,255,1)'
        }, {
          name: '60',
          value: 'rgba(21,112,176,1)'
        }]
      }],
    datas2: [
      {
        title: 'B景区数量统计',
        visible: 'true', // 显示
        type: 'colorNum',
        color: 'white',
        titleStyle: {
          color: 'gray',
        },
        data: [{
          name: '30',
          src: 'assets/show_map.png',
        }, {
          name: '40',
          src: 'assets/show_map.png',
        }, {
          name: '50',
          src: 'assets/show_map.png',
        }, {
          name: '60',
          src: 'assets/show_map.png',
        }]
      }],
    datas5: [
      {
        title: 'B景区数量统计88',
        visible: 'true', // 显示
        type: 'colorNum',
        color: 'white',
        titleStyle: {
          color: 'gray',
        },
        data: [{
          name: '30',
          src: 'assets/show_map.png',
        }, {
          name: '40',
          src: 'assets/show_map.png',
        }, {
          name: '50',
          src: 'assets/show_map.png',
        }, {
          name: '60',
          src: 'assets/show_map.png',
        }]
      }]
  };
   *
   */
  @Input('config')
  set config(value: any) {
    this._config = Object.assign({}, this.defaultConfig, value);
  }
  // 默认图层参数
  private defaultConfig = {};

  // 显示
  show(): void {
    this.hide = false;
  }
  // 影藏
  vanish(): void {
    this.hide = true;
  }
  // mouseenter 移入
  mouseenter(): void {
    this.flag = true;

  }
  // mouseleave 移出
  mouseleave(): void {
    this.flag = false;
  }
  ngOnInit() {
    this.hide = false;
    this.flag = false;
  }

}
