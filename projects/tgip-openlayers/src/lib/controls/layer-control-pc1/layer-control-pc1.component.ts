import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-layer-control-pc1',
  templateUrl: './layer-control-pc1.component.html',
  styleUrls: ['./layer-control-pc1.component.css']
})
export class LayerControlPc1Component implements OnInit {
  @Output() private outer = new EventEmitter<any>(); // 广播事件
  public mySwiper: SwiperConfigInterface = {};
  // @Input() config: any;
  mutex = false; // 互斥
  constructor() {
    this.config = this.defaultConfig;
  }
  private _config: any;
  get config(): any {
    return this._config;
  }
  /**
   * 样式参数
   * @param {any} config
   * @example
   * {
    size: {
      width:  auto , // 总宽度
      height:  auto  // 总高度
    },
    singleSize: {
      width:  50px ,
      height:  50px  // 图标大小
    },
    position: {
      top:  10px ,
      left:  10px  // 全局定位
    },
    style: {
      bgClass:  custom , // 整个背景样式
      singleSelectClass:  select , // 选中后样式
      singleUnselectClass:  unSelect , // 未选中样式
      checkbox:  assets/all.png ,
      basis: {
        float:  left ,
        liststyle:  none ,
        width:  135px ,
        height:  100px ,
        textalign:  center ,
        fontColor:  #ffffff ,
        fontSize:  24px ,
        padding:  10px ,
        borderRadius:  10PX,
        //  lineheight :  100px ,  // 基础样式
      },
      bg: {
        background:  #103c26 ,
        border:  1px solid #b1d4c2 ,
        boxShadow:  0 0 10px 0 rgba(16,60,38,.3),
      },
      select: {
        src:  assets/icon.png ,
        bgColor:  rgba(99,132,115,.3) ,
        fontColor:  #666666 ,
        fontSize:  24px ,
        borderRadio:  10px  // 选中样式
      },
      unselect: {
        src:  assets/icon.png ,
        bgColor:  none ,
        fontColor:  #ffffff ,
        fontSize:  24px ,
        borderRadio:  10px  // 未选中样式
      }
    },
    layers: [
      {
        title:  旅游公路 ,
        layerName:  tourismRoad ,
        visible: false, // 默认显示与否
        //  layer : object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src:  assets/icon.png,
        },
        unselect: {
          src:  assets/icon.png,
        }
      },
      {
        title:  景区 ,
        layerName:  tourismRoad ,
        visible: false, // 默认显示与否
        //  layer : object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src:  assets/icon.png,
        },
        unselect: {
          src:  assets/icon.png,
        }
      },
      {
        title:  乡村旅游点 ,
        layerName:  tourismRoad ,
        visible: false, // 默认显示与否
        //  layer : object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src:  assets/icon.png,
        },
        unselect: {
          src:  assets/icon.png,
        }
      },
      {
        title:  驿站 ,
        layerName:  tourismRoad ,
        visible: false, // 默认显示与否
        //  layer : object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src:  assets/icon.png,
        },
        unselect: {
          src:  assets/icon.png,
        }
      },
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

  // 默认图层参数
  private defaultConfig = {};

  // 点击事件
  fullscreenToggle(item: { title: any; visible: boolean }): void {
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
  }

  ngOnInit() {
    this.mySwiper = {
      // vertical
      // horizontal
      direction: 'horizontal',
      // 开启鼠标的抓手状态
      grabCursor: true,
      loop: false,
      slidesPerView: 'auto',
      // loopedSlides: 8,
      autoplay: false,
      speed: 1000
      // 切换效果为 coverflow
      // effect: 'coverflow',
      // coverflow 配置
    };
  }
}
