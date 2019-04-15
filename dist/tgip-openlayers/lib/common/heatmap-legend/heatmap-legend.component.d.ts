import { OnInit } from '@angular/core';
export declare class HeatmapLegendComponent implements OnInit {
    constructor();
    private _config;
    /**
     * 样式参数1
     * @param {any} config
     * @example   *
     * {
      visible: 'block',
      color: '#fff',
      size: {
        width: '100px', // 总宽度
        height: '25px' // 总高度
      },
      position: {
        top: '',
        bottom: '10px',
        right: '',
        left: '10px' // 全局定位
      },
      datas: [
        {
          title: '舒适',
          background: 'rgba(0, 172, 0,1)',
        },
        {
          title: '较舒适',
          background: '#0000FF',
        },
        {
          title: '一般',
          background: '#FFFF00',
        },
        {
          title: '拥挤',
          background: '#00FFFF',
        }
      ]
    };
     *
     */
    config: any;
    private defaultConfig;
    ngOnInit(): void;
}
