import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent implements OnInit {

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
  @Input('config')
  set config(value: any) {
    this._config = Object.assign({}, this.defaultConfig, value);
  }
  // 默认图层参数
  private defaultConfig = {};
  ngOnInit() {
  }

}
