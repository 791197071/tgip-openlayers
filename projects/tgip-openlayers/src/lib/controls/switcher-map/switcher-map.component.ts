import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-switcher-map',
  templateUrl: './switcher-map.component.html',
  styleUrls: ['./switcher-map.component.css']
})
export class SwitcherMapComponent implements OnInit {
  /**
   * 输出参数
   * @param {any} outer
   */
  @Output() private outer = new EventEmitter<any>();
  flag: boolean;
  constructor() {
    this.config = this.defaultConfig;
  }

  private _config: any;
  get config(): any {
    return this._config;
  }
  /**
   * 图层样式参数
   * @param {any} config
   * @example
   * {
    backgroundSize: {
      backgroundSize:  100% 100%,
    },
    selectFontBgColor: {
      bg:  #3385FF ,
      border:  1px solid #3385FF,
    },
    unselectFontBgColor: {
      bg:  none ,
      border:  1px solid,
    },
    size: {
      width:  auto , // 总宽度
      height:  100px , // 总高度
      background:  #fff,
    },
    imgSize: {
      width:  80px , // 总宽度
      height:  80px  // 总高度
    },
    position: {
      top:  0px ,
      bottom:  100px ,
      right:  0px,
    },
    fontStyle: {
      bottom:  0 ,
      right:  0 ,
      color:  #fff ,
      fontSize:  12px,
    },
    baseMap: [
      {
        src:  url(assets/map.png) ,
        title:  地图 ,
        visible: false,
        isdisplay: true,
        layer: {}
      },
      {
        src:  url(assets/map.png) ,
        title:  地球 ,
        visible: false,
        isdisplay: true,
        layer: {}
      },
      {
        src:  url(assets/map.png) ,
        title:  全景 ,
        visible: false,
        isdisplay: true,
        layer: {}
      },
      {
        src:  url(assets/map.png) ,
        title:  卫星 ,
        visible: false,
        isdisplay: true,
        layer: {}
      }
    ]
  };
   */
  @Input('config')
  set config(value: any) {
    // 做处理
    this._config = Object.assign({}, this.defaultConfig, value);
    // this._config = DefaultOptionsUtil.preProcOptions(this.defaultConfig, value);
    // this._config = value;
  }

  private defaultConfig = {
    backgroundSize: {
      backgroundSize: '100% 100%'
    },
    selectFontBgColor: {
      bg: '#3385FF',
      border: '1px solid #3385FF'
    },
    unselectFontBgColor: {
      bg: 'none',
      border: '1px solid'
    },
    size: {
      width: 'auto', // 总宽度
      height: '100px', // 总高度
      background: '#fff'
    },
    imgSize: {
      width: '80px', // 总宽度
      height: '80px' // 总高度
    },
    position: {
      top: '0px',
      bottom: '100px',
      right: '0px'
    },
    fontStyle: {
      bottom: '0',
      right: '0',
      color: '#fff',
      fontSize: '12px'
    },
    baseMap: [
      {
        src: 'url(assets/map.png)',
        title: '地图',
        visible: false,
        isdisplay: true,
        layer: {}
      },
      {
        src: 'url(assets/map.png)',
        title: '地球',
        visible: false,
        isdisplay: true,
        layer: {}
      },
      {
        src: 'url(assets/map.png)',
        title: '全景',
        visible: false,
        isdisplay: true,
        layer: {}
      },
      {
        src: 'url(assets/map.png)',
        title: '卫星',
        visible: false,
        isdisplay: true,
        layer: {}
      }
    ]
  };
  // 点击选中
  fullscreenToggle(item: { title: any; visible: boolean }): void {
    this.outer.emit(item);
    this.flag = true;
    this.config.baseMap.forEach((value: { title: any; visible: boolean }) => {
      if (value.title === item.title) {
        value.visible = true;
      } else {
        value.visible = false;
      }
    });
  }
  // 鼠标移入
  mouseenter(): void {
    this.config.baseMap.forEach(
      (value: { visible: any; isdisplay: boolean }) => {
        value.isdisplay = true;
      }
    );
  }
  // 鼠标移出
  mouseleave(): void {
    if (this.flag) {
      this.config.baseMap.forEach(
        (value: { visible: any; isdisplay: boolean }) => {
          if (value.visible === true) {
            value.isdisplay = true;
          } else {
            value.isdisplay = false;
          }
        }
      );
    }
  }
  ngOnInit() {}
}
