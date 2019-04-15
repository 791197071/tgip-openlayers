/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter } from '@angular/core';
export class LayerControlPc1Component {
    // 互斥
    constructor() {
        this.outer = new EventEmitter(); // 广播事件
        // 广播事件
        this.mySwiper = {};
        // @Input() config: any;
        this.mutex = false; // 互斥
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数
     * \@example
     * {
     * size: {
     * width:  auto , // 总宽度
     * height:  auto  // 总高度
     * },
     * singleSize: {
     * width:  50px ,
     * height:  50px  // 图标大小
     * },
     * position: {
     * top:  10px ,
     * left:  10px  // 全局定位
     * },
     * style: {
     * bgClass:  custom , // 整个背景样式
     * singleSelectClass:  select , // 选中后样式
     * singleUnselectClass:  unSelect , // 未选中样式
     * checkbox:  assets/all.png ,
     * basis: {
     * float:  left ,
     * liststyle:  none ,
     * width:  135px ,
     * height:  100px ,
     * textalign:  center ,
     * fontColor:  #ffffff ,
     * fontSize:  24px ,
     * padding:  10px ,
     * borderRadius:  10PX,
     * //  lineheight :  100px ,  // 基础样式
     * },
     * bg: {
     * background:  #103c26 ,
     * border:  1px solid #b1d4c2 ,
     * boxShadow:  0 0 10px 0 rgba(16,60,38,.3),
     * },
     * select: {
     * src:  assets/icon.png ,
     * bgColor:  rgba(99,132,115,.3) ,
     * fontColor:  #666666 ,
     * fontSize:  24px ,
     * borderRadio:  10px  // 选中样式
     * },
     * unselect: {
     * src:  assets/icon.png ,
     * bgColor:  none ,
     * fontColor:  #ffffff ,
     * fontSize:  24px ,
     * borderRadio:  10px  // 未选中样式
     * }
     * },
     * layers: [
     * {
     * title:  旅游公路 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * {
     * title:  景区 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * {
     * title:  乡村旅游点 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * {
     * title:  驿站 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * ]
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
        // this._config = DefaultOptionsUtil.preProcOptions(this.defaultConfig, value);
        // this._config = value;
    }
    // 点击事件
    /**
     * @param {?} item
     * @return {?}
     */
    fullscreenToggle(item) {
        this.outer.emit(item);
        if (this.mutex === true) {
            this.config.layers.forEach((value) => {
                if (value.title === item.title) {
                    value.visible = true;
                }
                else {
                    value.visible = false;
                }
            });
        }
        else {
            item.visible = !item.visible;
        }
    }
    /**
     * @return {?}
     */
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
LayerControlPc1Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-layer-control-pc1',
                template: "<div\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  [class]=\"config.style.bgClass\"\n  [style.background]=\"config.style.bg.background\"\n  [style.border]=\"config.style.bg.border\"\n  [style.color]=\"config.style.basis.fontColor\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\"\n>\n  <span>\n    <ul [style.padding]=\"0\" [style.margin]=\"0\">\n      <swiper [config]=\"mySwiper\" class=\"swiper-container\">\n        <li\n          *ngFor=\"let item of config.layers; let i = index\"\n          class=\"swiper-slide\"\n          (click)=\"fullscreenToggle(item)\"\n          [style.list-style]=\"config.style.basis.liststyle\"\n          [style.font-size]=\"config.style.basis.fontSize\"\n          [style.float]=\"config.style.basis.float\"\n          [style.width]=\"config.style.basis.width\"\n          [style.height]=\"config.style.basis.height\"\n          [style.text-align]=\"config.style.basis.textalign\"\n          [style.padding]=\"config.style.basis.padding\"\n          style=\"cursor:pointer\"\n        >\n          <div\n            [ngStyle]=\"{\n              background:\n                item.visible === true\n                  ? config.style.select.bgColor\n                  : config.style.unselect.bgColor\n            }\"\n            style=\"width:100%;height:100%\"\n            [style.border-radius]=\"config.style.basis.borderRadius\"\n          >\n            <i [ngStyle]=\"{ display: 'block' }\">\n              <img\n                src=\"{{ item.select.src }}\"\n                [style.width]=\"config.singleSize.width\"\n                [style.height]=\"config.singleSize.height\"\n              />\n            </i>\n            <span [style.line-height]=\"config.style.basis.lineheight\">\n              {{ item.title }}</span\n            >\n          </div>\n        </li>\n      </swiper>\n    </ul>\n  </span>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LayerControlPc1Component.ctorParameters = () => [];
LayerControlPc1Component.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayerControlPc1Component.prototype.outer;
    /** @type {?} */
    LayerControlPc1Component.prototype.mySwiper;
    /** @type {?} */
    LayerControlPc1Component.prototype.mutex;
    /**
     * @type {?}
     * @private
     */
    LayerControlPc1Component.prototype._config;
    /**
     * @type {?}
     * @private
     */
    LayerControlPc1Component.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC1wYzEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2xheWVyLWNvbnRyb2wtcGMxL2xheWVyLWNvbnRyb2wtcGMxLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNLE9BQU8sd0JBQXdCOztJQUtuQztRQUprQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQyxDQUFDLE9BQU87O1FBQ25ELGFBQVEsR0FBMEIsRUFBRSxDQUFDOztRQUU1QyxVQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSzs7UUEySFosa0JBQWEsR0FBRyxFQUFFLENBQUM7UUF6SHpCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJHRCxJQUNJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLE1BQU07UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUQsK0VBQStFO1FBQy9FLHdCQUF3QjtJQUMxQixDQUFDOzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxJQUFzQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXVDLEVBQUUsRUFBRTtnQkFDckUsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQzlCLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDdkI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRzs7O1lBR2QsU0FBUyxFQUFFLFlBQVk7O1lBRXZCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsYUFBYSxFQUFFLE1BQU07O1lBRXJCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLElBQUk7WUFDWCxrQkFBa0I7WUFDbEIsdUJBQXVCO1lBQ3ZCLGVBQWU7U0FDaEIsQ0FBQztJQUNKLENBQUM7OztZQXZLRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLHU3REFBaUQ7O2FBRWxEOzs7OztvQkFFRSxNQUFNO3FCQXFITixLQUFLLFNBQUMsUUFBUTs7Ozs7OztJQXJIZix5Q0FBa0Q7O0lBQ2xELDRDQUE0Qzs7SUFFNUMseUNBQWM7Ozs7O0lBSWQsMkNBQXFCOzs7OztJQXVIckIsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE91dHB1dCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJ25neC1zd2lwZXItd3JhcHBlcic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1sYXllci1jb250cm9sLXBjMScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXllci1jb250cm9sLXBjMS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xheWVyLWNvbnRyb2wtcGMxLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMYXllckNvbnRyb2xQYzFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBvdXRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyDlub/mkq3kuovku7ZcbiAgcHVibGljIG15U3dpcGVyOiBTd2lwZXJDb25maWdJbnRlcmZhY2UgPSB7fTtcbiAgLy8gQElucHV0KCkgY29uZmlnOiBhbnk7XG4gIG11dGV4ID0gZmFsc2U7IC8vIOS6kuaWpVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuICBwcml2YXRlIF9jb25maWc6IGFueTtcbiAgZ2V0IGNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgLyoqXG4gICAqIOagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogIGF1dG8gLCAvLyDmgLvlrr3luqZcbiAgICAgIGhlaWdodDogIGF1dG8gIC8vIOaAu+mrmOW6plxuICAgIH0sXG4gICAgc2luZ2xlU2l6ZToge1xuICAgICAgd2lkdGg6ICA1MHB4ICxcbiAgICAgIGhlaWdodDogIDUwcHggIC8vIOWbvuagh+Wkp+Wwj1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHRvcDogIDEwcHggLFxuICAgICAgbGVmdDogIDEwcHggIC8vIOWFqOWxgOWumuS9jVxuICAgIH0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGJnQ2xhc3M6ICBjdXN0b20gLCAvLyDmlbTkuKrog4zmma/moLflvI9cbiAgICAgIHNpbmdsZVNlbGVjdENsYXNzOiAgc2VsZWN0ICwgLy8g6YCJ5Lit5ZCO5qC35byPXG4gICAgICBzaW5nbGVVbnNlbGVjdENsYXNzOiAgdW5TZWxlY3QgLCAvLyDmnKrpgInkuK3moLflvI9cbiAgICAgIGNoZWNrYm94OiAgYXNzZXRzL2FsbC5wbmcgLFxuICAgICAgYmFzaXM6IHtcbiAgICAgICAgZmxvYXQ6ICBsZWZ0ICxcbiAgICAgICAgbGlzdHN0eWxlOiAgbm9uZSAsXG4gICAgICAgIHdpZHRoOiAgMTM1cHggLFxuICAgICAgICBoZWlnaHQ6ICAxMDBweCAsXG4gICAgICAgIHRleHRhbGlnbjogIGNlbnRlciAsXG4gICAgICAgIGZvbnRDb2xvcjogICNmZmZmZmYgLFxuICAgICAgICBmb250U2l6ZTogIDI0cHggLFxuICAgICAgICBwYWRkaW5nOiAgMTBweCAsXG4gICAgICAgIGJvcmRlclJhZGl1czogIDEwUFgsXG4gICAgICAgIC8vICBsaW5laGVpZ2h0IDogIDEwMHB4ICwgIC8vIOWfuuehgOagt+W8j1xuICAgICAgfSxcbiAgICAgIGJnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICAjMTAzYzI2ICxcbiAgICAgICAgYm9yZGVyOiAgMXB4IHNvbGlkICNiMWQ0YzIgLFxuICAgICAgICBib3hTaGFkb3c6ICAwIDAgMTBweCAwIHJnYmEoMTYsNjAsMzgsLjMpLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBzcmM6ICBhc3NldHMvaWNvbi5wbmcgLFxuICAgICAgICBiZ0NvbG9yOiAgcmdiYSg5OSwxMzIsMTE1LC4zKSAsXG4gICAgICAgIGZvbnRDb2xvcjogICM2NjY2NjYgLFxuICAgICAgICBmb250U2l6ZTogIDI0cHggLFxuICAgICAgICBib3JkZXJSYWRpbzogIDEwcHggIC8vIOmAieS4reagt+W8j1xuICAgICAgfSxcbiAgICAgIHVuc2VsZWN0OiB7XG4gICAgICAgIHNyYzogIGFzc2V0cy9pY29uLnBuZyAsXG4gICAgICAgIGJnQ29sb3I6ICBub25lICxcbiAgICAgICAgZm9udENvbG9yOiAgI2ZmZmZmZiAsXG4gICAgICAgIGZvbnRTaXplOiAgMjRweCAsXG4gICAgICAgIGJvcmRlclJhZGlvOiAgMTBweCAgLy8g5pyq6YCJ5Lit5qC35byPXG4gICAgICB9XG4gICAgfSxcbiAgICBsYXllcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDml4XmuLjlhazot68gLFxuICAgICAgICBsYXllck5hbWU6ICB0b3VyaXNtUm9hZCAsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLCAvLyDpu5jorqTmmL7npLrkuI7lkKZcbiAgICAgICAgLy8gIGxheWVyIDogb2JqZWN0LCAvLyDlm77lsYLlr7nosaHvvIzlj6/ku6XpgJrov4flr7nosaHmnaXmjqfliLYg5pi+56S65LiO5ZCmXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHNyYzogIGFzc2V0cy9pY29uLnBuZyxcbiAgICAgICAgfSxcbiAgICAgICAgdW5zZWxlY3Q6IHtcbiAgICAgICAgICBzcmM6ICBhc3NldHMvaWNvbi5wbmcsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAg5pmv5Yy6ICxcbiAgICAgICAgbGF5ZXJOYW1lOiAgdG91cmlzbVJvYWQgLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSwgLy8g6buY6K6k5pi+56S65LiO5ZCmXG4gICAgICAgIC8vICBsYXllciA6IG9iamVjdCwgLy8g5Zu+5bGC5a+56LGh77yM5Y+v5Lul6YCa6L+H5a+56LGh5p2l5o6n5Yi2IOaYvuekuuS4juWQplxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBzcmM6ICBhc3NldHMvaWNvbi5wbmcsXG4gICAgICAgIH0sXG4gICAgICAgIHVuc2VsZWN0OiB7XG4gICAgICAgICAgc3JjOiAgYXNzZXRzL2ljb24ucG5nLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogIOS5oeadkeaXhea4uOeCuSAsXG4gICAgICAgIGxheWVyTmFtZTogIHRvdXJpc21Sb2FkICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsIC8vIOm7mOiupOaYvuekuuS4juWQplxuICAgICAgICAvLyAgbGF5ZXIgOiBvYmplY3QsIC8vIOWbvuWxguWvueixoe+8jOWPr+S7pemAmui/h+WvueixoeadpeaOp+WItiDmmL7npLrkuI7lkKZcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgc3JjOiAgYXNzZXRzL2ljb24ucG5nLFxuICAgICAgICB9LFxuICAgICAgICB1bnNlbGVjdDoge1xuICAgICAgICAgIHNyYzogIGFzc2V0cy9pY29uLnBuZyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDpqb/nq5kgLFxuICAgICAgICBsYXllck5hbWU6ICB0b3VyaXNtUm9hZCAsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLCAvLyDpu5jorqTmmL7npLrkuI7lkKZcbiAgICAgICAgLy8gIGxheWVyIDogb2JqZWN0LCAvLyDlm77lsYLlr7nosaHvvIzlj6/ku6XpgJrov4flr7nosaHmnaXmjqfliLYg5pi+56S65LiO5ZCmXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHNyYzogIGFzc2V0cy9pY29uLnBuZyxcbiAgICAgICAgfSxcbiAgICAgICAgdW5zZWxlY3Q6IHtcbiAgICAgICAgICBzcmM6ICBhc3NldHMvaWNvbi5wbmcsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgXVxuICB9O1xuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgY29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICAvLyDlgZrlpITnkIZcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgICAvLyB0aGlzLl9jb25maWcgPSBEZWZhdWx0T3B0aW9uc1V0aWwucHJlUHJvY09wdGlvbnModGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gICAgLy8gdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gIH1cblxuICAvLyDpu5jorqTlm77lsYLlj4LmlbBcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge307XG5cbiAgLy8g54K55Ye75LqL5Lu2XG4gIGZ1bGxzY3JlZW5Ub2dnbGUoaXRlbTogeyB0aXRsZTogYW55OyB2aXNpYmxlOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLm91dGVyLmVtaXQoaXRlbSk7XG4gICAgaWYgKHRoaXMubXV0ZXggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY29uZmlnLmxheWVycy5mb3JFYWNoKCh2YWx1ZTogeyB0aXRsZTogYW55OyB2aXNpYmxlOiBib29sZWFuIH0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLnRpdGxlID09PSBpdGVtLnRpdGxlKSB7XG4gICAgICAgICAgdmFsdWUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS52aXNpYmxlID0gIWl0ZW0udmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm15U3dpcGVyID0ge1xuICAgICAgLy8gdmVydGljYWxcbiAgICAgIC8vIGhvcml6b250YWxcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgLy8g5byA5ZCv6byg5qCH55qE5oqT5omL54q25oCBXG4gICAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAvLyBsb29wZWRTbGlkZXM6IDgsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBzcGVlZDogMTAwMFxuICAgICAgLy8g5YiH5o2i5pWI5p6c5Li6IGNvdmVyZmxvd1xuICAgICAgLy8gZWZmZWN0OiAnY292ZXJmbG93JyxcbiAgICAgIC8vIGNvdmVyZmxvdyDphY3nva5cbiAgICB9O1xuICB9XG59XG4iXX0=