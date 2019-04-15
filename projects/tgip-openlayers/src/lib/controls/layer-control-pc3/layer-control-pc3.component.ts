import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-layer-control-pc3',
  templateUrl: './layer-control-pc3.component.html',
  styleUrls: ['./layer-control-pc3.component.css']
})
export class LayerControlPc3Component implements OnInit {
  /**
   * 输出参数
   * @param {any} outer
   */
  @Output() private outer = new EventEmitter<any>(); // 广播事件
  public mySwiper: SwiperConfigInterface = {};
  mutex = false; // 互斥
  flag = false;
  self: any;
  sum = 0;
  hide = false;
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
    size: {
      width:  50px , // 初始宽度
      height:  50px  // 初始高度
    },
    position: {
      top:  10px ,
      left:  10px , // 全局定位
      right:  0px  // 全局定位
    },
    cmenuPosition: {
      top:  60px ,
      left:  10px , // 展开全局定位
      right:  20px  // 展开全局定位
    },
    cmenutop: {
      // X样式
      width:  40px ,
      height:  40px ,
      border:  1px solid #005ab4 ,
      color:  #005ab4 ,
      right:  0px ,
      top:  -40px ,
      background:  white ,
      borderbottom:  none ,
      backgroundImg:  url(assets/close_map.png) ,
      backgroundrepeat:  no-repeat ,
      backgroundposition:  center,
    },
    cmenubody: {
      width:  auto ,
      height:  300px ,
      border:  1px solid #005ab4 ,
      background:  white ,
      borderbottom:  none ,
      borderradius:  5px 0px 0px 0px,
    },
    fontStyle: {
      width:  120px ,
      fontSize:  18px,
    },
    singleSize: {
      width:  30px , // 图标大小
      height:  30px ,
      padding:  10px  // 图标外边距
    },
    select: {
      width:  30px ,
      height:  30px ,
      src:  url(assets/select.png) no-repeat center / 70% 70%,
    },
    unselect: {
      src:  url(assets/no_select.png) no-repeat center / 70% 70%,
    },
    background: {
      backgroundsize:  100%,
    },
    layers: [
      {
        title:  景区 ,
        visible: false,
        src:  url(assets/show_map.png),
      },
      {
        title:  乡村旅游区 ,
        visible: false,
        src:  url(assets/show_map.png),
      },
      {
        title:  新业态 ,
        visible: false,
        src:  url(assets/show_map.png),
      },
      {
        title:  餐饮 ,
        visible: false,
        src:  url(assets/show_map.png),
      },
      {
        title:  旅游酒店 ,
        visible: false,
        src:  url(assets/show_map.png),
      },
      {
        title:  主题住宿 ,
        visible: false,
        src:  url(assets/show_map.png),
      }
    ]
  };
   */
  @Input('config')
  set config(value: any) {
    // 做处理
    this._config = Object.assign({}, this.defaultConfig, value);
  }

  private defaultConfig = {
    size: {
      width: '50px', // 初始宽度
      height: '50px' // 初始高度
    },
    position: {
      top: '10px',
      left: '10px', // 全局定位
      right: '0px' // 全局定位
    },
    cmenuPosition: {
      top: '60px',
      left: '10px', // 展开全局定位
      right: '20px' // 展开全局定位
    },
    cmenutop: {
      // X样式
      width: '40px',
      height: '40px',
      border: '1px solid #005ab4',
      color: '#005ab4',
      right: '0px',
      top: '-40px',
      background: 'white',
      borderbottom: 'none',
      backgroundImg: 'url(assets/close_map.png)',
      backgroundrepeat: 'no-repeat',
      backgroundposition: 'center'
    },
    cmenubody: {
      width: 'auto',
      height: '300px',
      border: '1px solid #005ab4',
      background: 'white',
      borderbottom: 'none',
      borderradius: '5px 0px 0px 0px'
    },
    fontStyle: {
      width: '120px',
      fontSize: '18px'
    },
    singleSize: {
      width: '30px', // 图标大小
      height: '30px',
      padding: '10px' // 图标外边距
    },
    select: {
      width: '30px',
      height: '30px',
      src: 'url(assets/select.png)'
    },
    bgStyle: {
      backgroundrepeat: 'no-repeat',
      backgroundposition: 'center',
      backgroundsize: '100% 100%'
    },
    unselect: {
      src: 'url(assets/no_select.png)'
    },
    background: {
      backgroundsize: '100%'
    },
    layers: [
      {
        title: '景区',
        visible: false,
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
  // 显示
  show(): void {
    this.hide = true;
  }
  // 影藏
  vanish(): void {
    this.hide = false;
  }
  // 点击事件，是否互斥
  showitem(item: { title: any; visible: boolean }): void {
    this.outer.emit(item);
    if (this.mutex === true) {
      this.config.layers.forEach((value: { title: any; visible: boolean }) => {
        if (value.title === item.title) {
          value.visible = true;
        } else {
          value.visible = false;
        }
      });
    } else {
      item.visible = !item.visible;
    }
    this.sum = 0;
    this.config.layers.forEach((value: { title: any; visible: boolean }) => {
      if (value.visible === true) {
        this.sum++;
        if (this.sum === this.config.layers.length) {
          this.flag = true;
        } else {
          this.flag = false;
        }
      }
    });
  }
  // 全选
  allitem(): void {
    this.flag = true;
    this.config.layers.forEach((value: { title: any; visible: boolean }) => {
      value.visible = true;
    });
  }
  // 全不选
  cancelitem(): void {
    this.flag = false;
    this.config.layers.forEach((value: { title: any; visible: boolean }) => {
      value.visible = false;
    });
  }

  ngOnInit() {
    this.mySwiper = {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      mousewheel: true
    };
  }
}
