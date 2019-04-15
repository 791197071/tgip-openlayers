import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MapComponent } from 'tgip-openlayers';
import { Config } from '../config';
@Component({
  selector: 'app-map',
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.css']
})
export class MapDemoComponent implements OnInit {
  public mySwiper: SwiperConfigInterface = {};
  @Input() config: any;
  mutex = false; // 互斥
  constructor() {
    this.config = this.defaultConfig;
  }

  @ViewChild('myMap')
  myMap;

  private mapConfig: any;
  private fullExtentConfig = {
    icon:
      'url(http://192.168.8.203:8080/jn-webgis-map/assets/pages/big_screen/web/full.png)',
    size: {
      width: '150px', // 宽度100px
      height: '150px' // 高度 100px
    }
  };

  private defaultConfig = {
    size: {
      width: 'auto', // 总宽度
      height: 'auto' // 总高度
    },
    singleSize: {
      width: '50px',
      height: '50px' // 图标大小
    },
    position: {
      top: '10px',
      left: '10px' // 全局定位
    },
    style: {
      bgClass: 'custom', // 整个背景样式
      singleSelectClass: 'select', // 选中后样式
      singleUnselectClass: 'unSelect', // 未选中样式
      checkbox: 'assets/all.png',
      basis: {
        float: 'left',
        liststyle: 'none',
        width: '135px',
        height: '100px',
        textalign: 'center',
        fontColor: '#ffffff',
        fontSize: '24px',
        padding: '10px',
        borderRadius: '10PX'
        // 'lineheight': '100px',  // 基础样式
      },
      bg: {
        background: '#103c26',
        border: '1px solid #b1d4c2',
        boxShadow: '0 0 10px 0 rgba(16,60,38,.3)'
      },
      select: {
        src: 'assets/icon.png',
        bgColor: 'rgba(99,132,115,.3)',
        fontColor: '#666666',
        fontSize: '24px',
        borderRadio: '10px' // 选中样式
      },
      unselect: {
        src: 'assets/icon.png',
        bgColor: 'none',
        fontColor: '#ffffff',
        fontSize: '24px',
        borderRadio: '10px' // 未选中样式
      }
    },
    layers: [
      {
        title: '旅游公路',
        layerName: 'tourismRoad',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '景区',
        layerName: 'tourismRoad',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '乡村旅游点',
        layerName: 'tourismRoad',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '驿站',
        layerName: 'tourismRoad',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      },
      {
        title: '观景台',
        layerName: 'tourismRoad',
        visible: false, // 默认显示与否
        // 'layer': object, // 图层对象，可以通过对象来控制 显示与否
        select: {
          src: 'assets/icon.png'
        },
        unselect: {
          src: 'assets/icon.png'
        }
      }
    ]
  };
  fullscreenToggle(item: { title: any; visible: boolean }): void {
    if (this.mutex === true) {
      this.config.layers.forEach((value: { title: any; visible: boolean }) => {
        if (value.title === item.title) {
          value.visible = true;
        } else {
          value.visible = false;
        }
      });
    } else {
      item.visible = !item.visible;
    }
  }

  ngOnInit() {
    console.log('2s后初始化底图');

    setTimeout(() => {
      this.mapConfig = Config.mapConfig;
    }, 2000);
    setTimeout(() => {
      this.myMap.map.zoomByDelta(1);
    }, 4000);
    this.mySwiper = {
      // vertical
      // horizontal
      direction: 'horizontal',
      // 开启鼠标的抓手状态
      grabCursor: true,
      loop: false,
      slidesPerView: 'auto',
      // loopedSlides: 8,
      autoplay: false,
      speed: 1000
      // 切换效果为 coverflow
      // effect: 'coverflow',
      // coverflow 配置
    };
  }
}
