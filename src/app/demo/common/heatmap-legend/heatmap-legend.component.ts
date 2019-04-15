import { Component, OnInit } from '@angular/core';
import { Config } from '../../config';
@Component({
  selector: 'app-heatmap-legend',
  templateUrl: './heatmap-legend.component.html',
  styleUrls: ['./heatmap-legend.component.css']
})
export class HeatmapLegendComponent implements OnInit {
  mapConfig: any;
  config: any;
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.config = this.defaultConfig;
  }
  private defaultConfig = {
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
  ngOnInit() {
  }

}
