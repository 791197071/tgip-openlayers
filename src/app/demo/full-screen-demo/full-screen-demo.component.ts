import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Config } from '../config';
@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen-demo.component.html',
  styleUrls: ['./full-screen-demo.component.css']
})
export class FullScreenDemoComponent implements OnInit {
  public mySwiper: SwiperConfigInterface = {};
  mapConfig: any;
  @Input() config: any;
  mutex = false; // 互斥
  private defaultConfig = {
    // 样式名
    className: 'btn',
    // 全图按钮
    fullscreen: {
      on: 'assets/icon.png',
      off: 'assets/icon.png',
      icon: 'assets/icon.png',
    },
    // 控制显示位置，left top bottom right  //绝对定位
    position: {
      top: '10px',
      right: '10px'
    },
    // 每个图标大小
    size: {
      width: '50px', // 宽度100px
      height: '50px' // 高度 100px
    }
  };
  constructor() {
    this.config = this.defaultConfig;
    this.mapConfig = Config.mapConfig;
    // this.config.fullscreen.src = this.sanitizer.bypassSecurityTrustStyle(`url(\'${this.config.fullscreen.src}\')`)
  }
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
