import { OnInit } from '@angular/core';
import { MapComponent } from '../../map/map.component';
export declare class FullExtentComponent implements OnInit {
    /**
     * 地图参数
     * @param {any} map
     */
    map: MapComponent;
    private _map;
    /**
     * 样式参数
     * @param {any} config
     */
    config: any;
    _config: any;
    configUrl: string;
    /**
     * 图层样式参数
     * @param {any} config
     * @example
     *
     *{
      // 样式名
      className: 'btn',
      // 全图按钮
      icon: './full-extent-on.svg',
      // 控制显示位置，left top bottom right  //绝对定位
      position: {
        bottom: '10px',
        right: '10px'
      },
      // 每个图标大小
      size: {
        width: '50px', // 宽度100px
        height: '50px' // 高度 100px
      }
    };
     *
     */
    private defaultConfig;
    constructor();
    ngOnInit(): void;
    fullExtentToggle(): void;
}
