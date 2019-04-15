import { OnInit } from '@angular/core';
export declare class CompassComponent implements OnInit {
    constructor();
    private _config;
    /**
     * 样式参数
     * @param {any} config
     * @example
     *
     * private defaultConfig = {
      visible: 'block',
      background: '#000',
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
      image: {
        src: 'assets/compass.png'
      }
    };
     *
     */
    config: any;
    private defaultConfig;
    ngOnInit(): void;
}
