import { Component, OnInit, Input, Renderer, ElementRef, Renderer2 } from '@angular/core';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import View from 'ol/View.js';
import { toStringHDMS } from 'ol/coordinate.js';
import TileLayer from 'ol/layer/Tile.js';
import { fromLonLat, toLonLat } from 'ol/proj.js';
import OSM from 'ol/source/OSM.js';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-spot-box',
  templateUrl: './spot-box.component.html',
  styleUrls: ['./spot-box.component.css']
})
export class SpotBoxComponent implements OnInit {

  public mySwiper: SwiperConfigInterface = {};
  marker: any;
  layer: any;
  overlay: any;
  popup: any;
  content: any;
  container: any;
  closer: any;
  layers: any;
  title: any;
  starLevel: any;
  constructor() {
    this.config = this.defaultConfig;
  }
  @Input('map')
  set setMap(value) {
    if (!value) {
      return;
    }
    console.log('已绑定 map 组件 实例');
    this.map = value;
  }
  private map: any;

  private _config: any;
  get config(): any {
    return this._config;
  }
  @Input('config')
  set config(value: any) {
    this._config = Object.assign({}, this.defaultConfig, value);
  }

  // 默认图层参数
  private defaultConfig = {
    title: '苏A123456',
    titleStyle: {
      background: 'gainsboro',
      fontSize: '18px',
      color: '#000'
    },
    dataStyle: {
      fontSize: '16px',
      color: '#000'
    },
    data: [
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      }
    ]
  };

  private _swiper: any;
  get sw(): any {
    return this._swiper;
  }
  @Input('sw')
  set sw(value: any) {
    this._swiper = Object.assign({}, this.mySwiper, value);
    console.log(value);
    this.initSwiper();
  }
  initSwiper() {
    this.mySwiper = this._swiper;
  }
  ngOnInit() {
    this.initSwiper();
    this.content = document.getElementById('popup-content');
    this.container = document.getElementById('popup');
    this.closer = document.getElementById('popup-closer');
    this.overlay = new Overlay({
      element: this.container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    const self = this;
    this.closer.onclick = function () {
      self.overlay.setPosition(undefined);
      self.closer.blur();
      return false;
    };
    this.map.addOverlay(this.overlay);

    // const coordinate = [118.82210323395667, 31.79037236271944];
    // // self.content.innerHTML = '';
    // self.overlay.setPosition(coordinate);
    this.map.on('click', function (evt) {
      const coordinate = evt.coordinate;
      // self.content.innerHTML = '';
      self.overlay.setPosition(coordinate);
    });
  }

}
