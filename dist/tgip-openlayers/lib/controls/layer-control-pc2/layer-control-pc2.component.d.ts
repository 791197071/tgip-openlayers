import { OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
export declare class LayerControlPc2Component implements OnInit {
    /**
     * 输出参数
     * @param {any} outer
     */
    private outer;
    mySwiper: SwiperConfigInterface;
    mutex: boolean;
    constructor();
    private _config;
    /**
     * 图层样式参数
     * @param {any} config
     * @example
     *  {
      size: {
        width:  auto , // 总宽度
        height:  auto  // 总高度
      },
      singleSize: {
        width:  30px , // 图标大小
        height:  30px ,
        padding:  10px  // 图标外边距
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
          width:  120px , // 块宽度
          height:  50px , // 块高度
          textalign:  center ,
          fontColor:  #ffffff ,
          fontSize:  18px ,
          padding:  0px , // 块外边距
          borderRadius:  10PX,
          //  lineheight :  100px ,  // 基础样式
        },
        bg: {
          background:  #003887 ,
          border:  1px solid #b1d4c2 ,
          boxShadow:  0 0 10px 0 rgba(16,60,38,.3),
        },
        select: {
          src:  assets/icon.png ,
          bgColor:  #15305c ,
          fontColor:  #666666 ,
          borderRadio:  10px  // 选中样式
        },
        unselect: {
          src:  assets/icon.png ,
          bgColor:  none ,
          fontColor:  #ffffff ,
          borderRadio:  10px  // 未选中样式
        }
      },
      layers: []
    };
     */
    config: any;
    private defaultConfig;
    fullscreenToggle(item: {
        title: any;
        visible: boolean;
    }): void;
    ngOnInit(): void;
}
