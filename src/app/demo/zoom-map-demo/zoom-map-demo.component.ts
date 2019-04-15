import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from '../config';
@Component({
  selector: 'app-zoom-map',
  templateUrl: './zoom-map-demo.component.html',
  styleUrls: ['./zoom-map-demo.component.css']
})
export class ZoomMapDemoComponent implements OnInit {
  config: any;
  mapConfig: any;
  constructor() {
    this.config = this.defaultConfig;
    // this.mapConfig = this._mapConfig;
  }
  private defaultConfig = {
    zoom: {
      maxZoom: 15,
      minZoom: 5
    },
    position: {
      top: '0px',
      bottom: '100px',
      right: '50px',
      left: '0px'
    },
    size: {
      width: '50px', // 总宽度
      height: '50px' // 总高度
    },
    // 放大按钮
    zoomIn: {
      enable: 'url(assets/enlarge.png)', // 正常图标
      disable: 'url(assets/enlarge_d.png)', // 禁用图标
      visible: true
    },
    // 缩小按钮
    zoomOut: {
      enable: 'url(assets/less.png)',
      disable: 'url(assets/less_d.png)',
      visible: true
    }
  };
  ngOnInit() {
    setTimeout(() => {
      this.mapConfig = Config.mapConfig;
    }, 2000);
  }
  // runParent(msg: string) {
  //   alert(msg);
  // }
}
