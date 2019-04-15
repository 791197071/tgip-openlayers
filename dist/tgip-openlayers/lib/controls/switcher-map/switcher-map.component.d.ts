import { OnInit } from '@angular/core';
export declare class SwitcherMapComponent implements OnInit {
    /**
     * 输出参数
     * @param {any} outer
     */
    private outer;
    flag: boolean;
    constructor();
    private _config;
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
    config: any;
    private defaultConfig;
    fullscreenToggle(item: {
        title: any;
        visible: boolean;
    }): void;
    mouseenter(): void;
    mouseleave(): void;
    ngOnInit(): void;
}
