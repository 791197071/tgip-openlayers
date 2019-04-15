import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { MapComponent } from '../../map/map.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-zoom',
  templateUrl: './zoom-map.component.html',
  styleUrls: ['./zoom-map.component.css']
})
export class ZoomMapComponent implements OnInit {
  /**
   * 输出参数
   * @param {any} outer
   */
  @Output() private outer = new EventEmitter<string>();
  /**
   * 地图参数
   * @param {any} map
   */
  @Input('map')
  set map(value: any) {
    if (!value) {
      return;
    }
    console.log('已绑定 map 实例');
    this._map = value;
    this.initMap();
  }
  private _map: any;
  private _config: any;
  constructor(public changeDetectorRef: ChangeDetectorRef) {
    this.config = this.defaultConfig;
  }
  @ViewChild('myMap') mapconfig;
  // 设置默认值
  get config(): any {
    return this._config;
  }
  /**
   * 图层样式参数
   * @param {any} config
   * @example
   * {
    position: {
        top: 0px,
        bottom: 100px,
        right: 0px,
        left: 0px，
    },
    size: {
        width:  50px ,
        height:  50px，
    },
    border: {
        zoomIn:  1px solid #1296db ,
        zoomOut:  1px solid #1296db ,
        disable:  1px solid #cdcdcd ,
        radius:  5px ,
        cursor:  pointer ,
        uncursor:  no-drop，
    },
    zoomIn: {
        enable:  url(assets/enlarge.png) no-repeat center / 70% 70% ,
        disable:  url(assets/enlarge_d.png) no-repeat center / 70% 70% ,
        visible: true
    },
    zoomOut: {
        enable:  url(assets/less.png) no-repeat center / 70% 70% ,
        disable:  url(assets/less_d.png) no-repeat center / 70% 70% ,
        visible: true
    }
};
   */
  @Input('config')
  set config(value: any) {
    // 做处理
    this._config = Object.assign({}, this.defaultConfig, value);
  }

  private defaultConfig = {
    position: {
      top: '0px',
      bottom: '100px',
      right: '0px',
      left: '0px'
    },
    size: {
      width: '50px', // 总宽度
      height: '50px' // 总高度
    },
    border: {
      zoomIn: '1px solid #1296db',
      zoomOut: '1px solid #1296db',
      disable: '1px solid #cdcdcd',
      radius: '5px',
      cursor: 'pointer',
      uncursor: 'no-drop '
    },
    // 放大按钮
    zoomIn: {
      enable: 'url(assets/enlarge.png)', // 正常图标
      disable: 'url(assets/enlarge_d.png)', // 禁用图标
      visible: true
    },
    bgStyle: {
      backgroundrepeat: 'no-repeat',
      backgroundposition: 'center',
      backgroundsize: '100% 100%'
    },
    // 缩小按钮
    zoomOut: {
      enable: 'url(assets/less.png)',
      disable: 'url(assets/less_d.png)',
      visible: true
    }
  };
  changeZoom(data): void {
    if (!this._map) {
      return;
    }
    this._map.zoomByDelta(data);
  }
  // 监听界面缩放比例
  initMap(): void {
    const self = this;
    const view = this._map.getView();
    view.on('change:resolution', function(e) {
      const maxZoom = view.getMaxZoom();
      const minZoom = view.getMinZoom();
      if (view.getZoom() >= maxZoom) {
        self.config.zoomIn.visible = false;
      }
      if (view.getZoom() < maxZoom && view.getZoom() > minZoom) {
        self.config.zoomIn.visible = true;
        self.config.zoomOut.visible = true;
      }
      if (view.getZoom() <= minZoom) {
        self.config.zoomOut.visible = false;
      }
    });
  }
  ngOnInit() {}
}
