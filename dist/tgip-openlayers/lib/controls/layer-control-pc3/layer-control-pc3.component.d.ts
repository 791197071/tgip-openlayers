import { OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
export declare class LayerControlPc3Component implements OnInit {
    /**
     * 输出参数
     * @param {any} outer
     */
    private outer;
    mySwiper: SwiperConfigInterface;
    mutex: boolean;
    flag: boolean;
    self: any;
    sum: number;
    hide: boolean;
    constructor();
    private _config;
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
    config: any;
    private defaultConfig;
    show(): void;
    vanish(): void;
    showitem(item: {
        title: any;
        visible: boolean;
    }): void;
    allitem(): void;
    cancelitem(): void;
    ngOnInit(): void;
}
