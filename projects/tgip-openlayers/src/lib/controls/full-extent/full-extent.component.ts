import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Map } from 'handsmap-map-client/openlayers/Map';
import { ProjThree } from 'handsmap-map-client/openlayers/ProjThree';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-full-extent',
  templateUrl: './full-extent.component.html',
  styleUrls: ['./full-extent.component.css']
})
export class FullExtentComponent implements OnInit {
  /**
   * 地图参数
   * @param {any} map
   */
  @Input('map')
  set map(value: MapComponent) {
    if (!value) {
      return;
    }
    console.log('已绑定 map 组件 实例');
    this._map = value;
  }
  private _map: MapComponent;
  /**
   * 样式参数
   * @param {any} config
   */
  @Input('config')
  set config(value: any) {
    if (!value) {
      return;
    }
    this._config = Object.assign({}, this.defaultConfig, value);
  }
  _config: any;

  @Input() configUrl: string;
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
  private defaultConfig = {
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

  constructor() {
    this._config = this.defaultConfig || {};
  }

  ngOnInit() {}

  public fullExtentToggle() {
    if (this._map) {
      let center = [this._map.config.centerX, this._map.config.centerY];
      if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
        center = ProjThree.ll2webmerc(center);
      }

      this._map.map.animationPanZoom({
        coordinate: center, // ctrl.mapCenter,
        zoom: this._map.config.zoom || 0,
        duration: 400
      });
    } else {
      console.warn('没有传入 map 实例！');
    }
  }
}
