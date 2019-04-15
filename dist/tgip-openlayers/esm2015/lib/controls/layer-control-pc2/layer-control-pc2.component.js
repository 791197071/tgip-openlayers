/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class LayerControlPc2Component {
    // 互斥
    constructor() {
        /**
         * 输出参数
         */
        this.outer = new EventEmitter(); // 广播事件
        // 广播事件
        this.mySwiper = {};
        // @Input() config: any;
        this.mutex = false; // 互斥
        // 图层参数
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
     * 图层样式参数
     * \@example
     *  {
     * size: {
     * width:  auto , // 总宽度
     * height:  auto  // 总高度
     * },
     * singleSize: {
     * width:  30px , // 图标大小
     * height:  30px ,
     * padding:  10px  // 图标外边距
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
     * width:  120px , // 块宽度
     * height:  50px , // 块高度
     * textalign:  center ,
     * fontColor:  #ffffff ,
     * fontSize:  18px ,
     * padding:  0px , // 块外边距
     * borderRadius:  10PX,
     * //  lineheight :  100px ,  // 基础样式
     * },
     * bg: {
     * background:  #003887 ,
     * border:  1px solid #b1d4c2 ,
     * boxShadow:  0 0 10px 0 rgba(16,60,38,.3),
     * },
     * select: {
     * src:  assets/icon.png ,
     * bgColor:  #15305c ,
     * fontColor:  #666666 ,
     * borderRadio:  10px  // 选中样式
     * },
     * unselect: {
     * src:  assets/icon.png ,
     * bgColor:  none ,
     * fontColor:  #ffffff ,
     * borderRadio:  10px  // 未选中样式
     * }
     * },
     * layers: []
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
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
LayerControlPc2Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-layer-control-pc2',
                template: "<div\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  [class]=\"config.style.bgClass\"\n  [style.background]=\"config.style.bg.background\"\n  [style.border]=\"config.style.bg.border\"\n  [style.color]=\"config.style.basis.fontColor\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\"\n>\n  <span>\n    <ul [style.padding]=\"0\" [style.margin]=\"0\">\n      <swiper [config]=\"mySwiper\" class=\"swiper-container\">\n        <li\n          *ngFor=\"let item of config.layers; let i = index\"\n          class=\"swiper-slide\"\n          (click)=\"fullscreenToggle(item)\"\n          [style.list-style]=\"config.style.basis.liststyle\"\n          [style.font-size]=\"config.style.basis.fontSize\"\n          [style.float]=\"config.style.basis.float\"\n          [style.width]=\"config.style.basis.width\"\n          [style.height]=\"config.style.basis.height\"\n          [style.text-align]=\"config.style.basis.textalign\"\n          [style.padding]=\"config.style.basis.padding\"\n          style=\"cursor:pointer; border: 1px solid #325b9e; border-left: none\"\n        >\n          <div\n            [ngStyle]=\"{\n              background:\n                item.visible === true\n                  ? config.style.select.bgColor\n                  : config.style.unselect.bgColor\n            }\"\n            style=\"width:100%;height:100%\"\n            [style.border-radius]=\"config.style.basis.borderRadius\"\n            [style.line-height]=\"config.style.basis.height\"\n          >\n            <i\n              [ngStyle]=\"{ float: 'left' }\"\n              [style.width]=\"config.singleSize.width\"\n              [style.height]=\"config.singleSize.height\"\n              [style.padding]=\"config.singleSize.padding\"\n            >\n              <img\n                src=\"{{ item.select.src }}\"\n                [style.width]=\"config.singleSize.width\"\n                [style.height]=\"config.singleSize.height\"\n              />\n            </i>\n            <span [style.line-height]=\"config.style.basis.lineheight\">\n              {{ item.title }}</span\n            >\n          </div>\n        </li>\n      </swiper>\n    </ul>\n  </span>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LayerControlPc2Component.ctorParameters = () => [];
LayerControlPc2Component.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};
if (false) {
    /**
     * 输出参数
     * @type {?}
     * @private
     */
    LayerControlPc2Component.prototype.outer;
    /** @type {?} */
    LayerControlPc2Component.prototype.mySwiper;
    /** @type {?} */
    LayerControlPc2Component.prototype.mutex;
    /**
     * @type {?}
     * @private
     */
    LayerControlPc2Component.prototype._config;
    /**
     * @type {?}
     * @private
     */
    LayerControlPc2Component.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC1wYzIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2xheWVyLWNvbnRyb2wtcGMyL2xheWVyLWNvbnRyb2wtcGMyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBR0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNLE9BQU8sd0JBQXdCOztJQVNuQzs7OztRQUprQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQyxDQUFDLE9BQU87O1FBQ25ELGFBQVEsR0FBMEIsRUFBRSxDQUFDOztRQUU1QyxVQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSzs7UUFzRVosa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFwRXpCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5REQsSUFDSSxNQUFNLENBQUMsS0FBVTtRQUNuQixNQUFNO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUlELGdCQUFnQixDQUFDLElBQXNDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBdUMsRUFBRSxFQUFFO2dCQUNyRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDOUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHOzs7WUFHZCxTQUFTLEVBQUUsWUFBWTs7WUFFdkIsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxhQUFhLEVBQUUsTUFBTTs7WUFFckIsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsSUFBSTtZQUNYLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIsZUFBZTtTQUNoQixDQUFDO0lBQ0osQ0FBQzs7O1lBckhGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsK3VFQUFpRDs7YUFFbEQ7Ozs7O29CQU1FLE1BQU07cUJBbUVOLEtBQUssU0FBQyxRQUFROzs7Ozs7OztJQW5FZix5Q0FBa0Q7O0lBQ2xELDRDQUE0Qzs7SUFFNUMseUNBQWM7Ozs7O0lBSWQsMkNBQXFCOzs7OztJQWtFckIsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJ25neC1zd2lwZXItd3JhcHBlcic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1sYXllci1jb250cm9sLXBjMicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXllci1jb250cm9sLXBjMi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xheWVyLWNvbnRyb2wtcGMyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMYXllckNvbnRyb2xQYzJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICog6L6T5Ye65Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBvdXRlclxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgb3V0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTsgLy8g5bm/5pKt5LqL5Lu2XG4gIHB1YmxpYyBteVN3aXBlcjogU3dpcGVyQ29uZmlnSW50ZXJmYWNlID0ge307XG4gIC8vIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICBtdXRleCA9IGZhbHNlOyAvLyDkupLmlqVcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gICAvKipcbiAgICog5Zu+5bGC5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICogIHtcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogIGF1dG8gLCAvLyDmgLvlrr3luqZcbiAgICAgIGhlaWdodDogIGF1dG8gIC8vIOaAu+mrmOW6plxuICAgIH0sXG4gICAgc2luZ2xlU2l6ZToge1xuICAgICAgd2lkdGg6ICAzMHB4ICwgLy8g5Zu+5qCH5aSn5bCPXG4gICAgICBoZWlnaHQ6ICAzMHB4ICxcbiAgICAgIHBhZGRpbmc6ICAxMHB4ICAvLyDlm77moIflpJbovrnot51cbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICAxMHB4ICxcbiAgICAgIGxlZnQ6ICAxMHB4ICAvLyDlhajlsYDlrprkvY1cbiAgICB9LFxuICAgIHN0eWxlOiB7XG4gICAgICBiZ0NsYXNzOiAgY3VzdG9tICwgLy8g5pW05Liq6IOM5pmv5qC35byPXG4gICAgICBzaW5nbGVTZWxlY3RDbGFzczogIHNlbGVjdCAsIC8vIOmAieS4reWQjuagt+W8j1xuICAgICAgc2luZ2xlVW5zZWxlY3RDbGFzczogIHVuU2VsZWN0ICwgLy8g5pyq6YCJ5Lit5qC35byPXG4gICAgICBjaGVja2JveDogIGFzc2V0cy9hbGwucG5nICxcbiAgICAgIGJhc2lzOiB7XG4gICAgICAgIGZsb2F0OiAgbGVmdCAsXG4gICAgICAgIGxpc3RzdHlsZTogIG5vbmUgLFxuICAgICAgICB3aWR0aDogIDEyMHB4ICwgLy8g5Z2X5a695bqmXG4gICAgICAgIGhlaWdodDogIDUwcHggLCAvLyDlnZfpq5jluqZcbiAgICAgICAgdGV4dGFsaWduOiAgY2VudGVyICxcbiAgICAgICAgZm9udENvbG9yOiAgI2ZmZmZmZiAsXG4gICAgICAgIGZvbnRTaXplOiAgMThweCAsXG4gICAgICAgIHBhZGRpbmc6ICAwcHggLCAvLyDlnZflpJbovrnot51cbiAgICAgICAgYm9yZGVyUmFkaXVzOiAgMTBQWCxcbiAgICAgICAgLy8gIGxpbmVoZWlnaHQgOiAgMTAwcHggLCAgLy8g5Z+656GA5qC35byPXG4gICAgICB9LFxuICAgICAgYmc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogICMwMDM4ODcgLFxuICAgICAgICBib3JkZXI6ICAxcHggc29saWQgI2IxZDRjMiAsXG4gICAgICAgIGJveFNoYWRvdzogIDAgMCAxMHB4IDAgcmdiYSgxNiw2MCwzOCwuMyksXG4gICAgICB9LFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIHNyYzogIGFzc2V0cy9pY29uLnBuZyAsXG4gICAgICAgIGJnQ29sb3I6ICAjMTUzMDVjICxcbiAgICAgICAgZm9udENvbG9yOiAgIzY2NjY2NiAsXG4gICAgICAgIGJvcmRlclJhZGlvOiAgMTBweCAgLy8g6YCJ5Lit5qC35byPXG4gICAgICB9LFxuICAgICAgdW5zZWxlY3Q6IHtcbiAgICAgICAgc3JjOiAgYXNzZXRzL2ljb24ucG5nICxcbiAgICAgICAgYmdDb2xvcjogIG5vbmUgLFxuICAgICAgICBmb250Q29sb3I6ICAjZmZmZmZmICxcbiAgICAgICAgYm9yZGVyUmFkaW86ICAxMHB4ICAvLyDmnKrpgInkuK3moLflvI9cbiAgICAgIH1cbiAgICB9LFxuICAgIGxheWVyczogW11cbiAgfTtcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgLy8g5YGa5aSE55CGXG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgLy8g5Zu+5bGC5Y+C5pWwXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHt9O1xuICAvLyDngrnlh7vkuovku7ZcbiAgZnVsbHNjcmVlblRvZ2dsZShpdGVtOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMub3V0ZXIuZW1pdChpdGVtKTtcbiAgICBpZiAodGhpcy5tdXRleCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jb25maWcubGF5ZXJzLmZvckVhY2goKHZhbHVlOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUudGl0bGUgPT09IGl0ZW0udGl0bGUpIHtcbiAgICAgICAgICB2YWx1ZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnZpc2libGUgPSAhaXRlbS52aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubXlTd2lwZXIgPSB7XG4gICAgICAvLyB2ZXJ0aWNhbFxuICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAvLyDlvIDlkK/pvKDmoIfnmoTmipPmiYvnirbmgIFcbiAgICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgIC8vIGxvb3BlZFNsaWRlczogOCxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIHNwZWVkOiAxMDAwXG4gICAgICAvLyDliIfmjaLmlYjmnpzkuLogY292ZXJmbG93XG4gICAgICAvLyBlZmZlY3Q6ICdjb3ZlcmZsb3cnLFxuICAgICAgLy8gY292ZXJmbG93IOmFjee9rlxuICAgIH07XG4gIH1cbn1cbiJdfQ==