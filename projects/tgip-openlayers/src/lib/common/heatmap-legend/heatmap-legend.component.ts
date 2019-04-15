import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-heatmap-legend',
  templateUrl: './heatmap-legend.component.html',
  styleUrls: ['./heatmap-legend.component.css']
})
export class HeatmapLegendComponent implements OnInit {
  constructor() {
    this.config = this.defaultConfig;
  }
  private _config: any;
  get config(): any {
    return this._config;
  }
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
  @Input('config')
  set config(value: any) {
    this._config = Object.assign({}, this.defaultConfig, value);
  }
  // 默认图层参数
  private defaultConfig = {};
  ngOnInit() {
  }

}
