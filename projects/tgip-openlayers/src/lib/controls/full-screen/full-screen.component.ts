
import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnDestroy,
  OnChanges
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tgip-ol-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit, OnDestroy, OnChanges {

  @Input() configUrl: string;

  private subscription: Subscription;
  private _config: any;
  get config(): any {
    return this._config;
  }
   /**
   * 样式参数
   * @param {any} config
   */
  @Input('config')
  set config(value: any) {
    // 做处理
    this._config = Object.assign({}, this.defaultConfig, value);
  }
  private defaultConfig = {
    // 样式名
    className: 'btn',
    // 全图按钮
    fullscreen: {
      on: './fullScreen-on.svg',
      off: './fullScreen-off.svg',
      icon: ''
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
    // this.config.fullscreen.src = this.sanitizer.bypassSecurityTrustStyle(`url(\'${this.config.fullscreen.src}\')`)
  }

  ngOnInit() {
    this.subscription = fromEvent(document, 'fullscreenchange').subscribe(
      event => {
        console.log(event);
        const isNotFullscreen =
          !document['fullscreenElement'] && // alternative standard method
          !document['mozFullScreenElement'] &&
          !document['webkitFullscreenElement'] &&
          !document['msFullscreenElement'];
        console.log(isNotFullscreen);

        if (isNotFullscreen) {
          this.config.fullscreen.icon = `url(\'${this.config.fullscreen.on}\')`;
        } else {
          this.config.fullscreen.icon = `url(\'${
            this.config.fullscreen.off
          }\')`;
        }
        console.log(this.config.fullscreen.icon);
      }
    );
    this.config.fullscreen.icon = `url(\'${this.config.fullscreen.on}\')`;
  }
  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.config.icon = `url(\'${this.config.fullscreen.src}\')`;
  }

  /**
   * 是当前元素 全屏 还是document ele全屏？
   */
  public fullscreenToggle(elem: any = document.documentElement): void {
    if (
      !document['fullscreenElement'] && // alternative standard method
      !document['mozFullScreenElement'] &&
      !document['webkitFullscreenElement'] &&
      !document['msFullscreenElement']
    ) {
      // current working methods

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element['ALLOW_KEYBOARD_INPUT']);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document['msExitFullscreen']) {
        document['msExitFullscreen']();
      } else if (document['mozCancelFullScreen']) {
        document['mozCancelFullScreen']();
      } else if (document['webkitExitFullscreen']) {
        document['webkitExitFullscreen']();
      }
    }
  }
}
