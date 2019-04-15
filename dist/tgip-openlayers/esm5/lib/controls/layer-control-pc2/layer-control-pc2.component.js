/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var LayerControlPc2Component = /** @class */ (function () {
    function LayerControlPc2Component() {
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
    Object.defineProperty(LayerControlPc2Component.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        /**
        * 图层样式参数
        * @param {any} config
        * @example
        *  {
         size: {
           width:  auto , // 总宽度
           height:  auto  // 总高度
         },
         singleSize: {
           width:  30px , // 图标大小
           height:  30px ,
           padding:  10px  // 图标外边距
         },
         position: {
           top:  10px ,
           left:  10px  // 全局定位
         },
         style: {
           bgClass:  custom , // 整个背景样式
           singleSelectClass:  select , // 选中后样式
           singleUnselectClass:  unSelect , // 未选中样式
           checkbox:  assets/all.png ,
           basis: {
             float:  left ,
             liststyle:  none ,
             width:  120px , // 块宽度
             height:  50px , // 块高度
             textalign:  center ,
             fontColor:  #ffffff ,
             fontSize:  18px ,
             padding:  0px , // 块外边距
             borderRadius:  10PX,
             //  lineheight :  100px ,  // 基础样式
           },
           bg: {
             background:  #003887 ,
             border:  1px solid #b1d4c2 ,
             boxShadow:  0 0 10px 0 rgba(16,60,38,.3),
           },
           select: {
             src:  assets/icon.png ,
             bgColor:  #15305c ,
             fontColor:  #666666 ,
             borderRadio:  10px  // 选中样式
           },
           unselect: {
             src:  assets/icon.png ,
             bgColor:  none ,
             fontColor:  #ffffff ,
             borderRadio:  10px  // 未选中样式
           }
         },
         layers: []
       };
        */
        set: /**
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
        function (value) {
            // 做处理
            this._config = Object.assign({}, this.defaultConfig, value);
        },
        enumerable: true,
        configurable: true
    });
    // 点击事件
    // 点击事件
    /**
     * @param {?} item
     * @return {?}
     */
    LayerControlPc2Component.prototype.fullscreenToggle = 
    // 点击事件
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.outer.emit(item);
        if (this.mutex === true) {
            this.config.layers.forEach(function (value) {
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
    };
    /**
     * @return {?}
     */
    LayerControlPc2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    LayerControlPc2Component.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-layer-control-pc2',
                    template: "<div\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  [class]=\"config.style.bgClass\"\n  [style.background]=\"config.style.bg.background\"\n  [style.border]=\"config.style.bg.border\"\n  [style.color]=\"config.style.basis.fontColor\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\"\n>\n  <span>\n    <ul [style.padding]=\"0\" [style.margin]=\"0\">\n      <swiper [config]=\"mySwiper\" class=\"swiper-container\">\n        <li\n          *ngFor=\"let item of config.layers; let i = index\"\n          class=\"swiper-slide\"\n          (click)=\"fullscreenToggle(item)\"\n          [style.list-style]=\"config.style.basis.liststyle\"\n          [style.font-size]=\"config.style.basis.fontSize\"\n          [style.float]=\"config.style.basis.float\"\n          [style.width]=\"config.style.basis.width\"\n          [style.height]=\"config.style.basis.height\"\n          [style.text-align]=\"config.style.basis.textalign\"\n          [style.padding]=\"config.style.basis.padding\"\n          style=\"cursor:pointer; border: 1px solid #325b9e; border-left: none\"\n        >\n          <div\n            [ngStyle]=\"{\n              background:\n                item.visible === true\n                  ? config.style.select.bgColor\n                  : config.style.unselect.bgColor\n            }\"\n            style=\"width:100%;height:100%\"\n            [style.border-radius]=\"config.style.basis.borderRadius\"\n            [style.line-height]=\"config.style.basis.height\"\n          >\n            <i\n              [ngStyle]=\"{ float: 'left' }\"\n              [style.width]=\"config.singleSize.width\"\n              [style.height]=\"config.singleSize.height\"\n              [style.padding]=\"config.singleSize.padding\"\n            >\n              <img\n                src=\"{{ item.select.src }}\"\n                [style.width]=\"config.singleSize.width\"\n                [style.height]=\"config.singleSize.height\"\n              />\n            </i>\n            <span [style.line-height]=\"config.style.basis.lineheight\">\n              {{ item.title }}</span\n            >\n          </div>\n        </li>\n      </swiper>\n    </ul>\n  </span>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LayerControlPc2Component.ctorParameters = function () { return []; };
    LayerControlPc2Component.propDecorators = {
        outer: [{ type: Output }],
        config: [{ type: Input, args: ['config',] }]
    };
    return LayerControlPc2Component;
}());
export { LayerControlPc2Component };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC1wYzIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2xheWVyLWNvbnRyb2wtcGMyL2xheWVyLWNvbnRyb2wtcGMyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBR0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQWVFOzs7O1FBSmtCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDLENBQUMsT0FBTzs7UUFDbkQsYUFBUSxHQUEwQixFQUFFLENBQUM7O1FBRTVDLFVBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLOztRQXNFWixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQXBFekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQkFBSSw0Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXVERTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUNILFVBQ1csS0FBVTtZQUNuQixNQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQTdEQTtJQWdFRCxPQUFPOzs7Ozs7SUFDUCxtREFBZ0I7Ozs7OztJQUFoQixVQUFpQixJQUFzQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQXVDO2dCQUNqRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDOUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUc7OztZQUdkLFNBQVMsRUFBRSxZQUFZOztZQUV2QixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLGFBQWEsRUFBRSxNQUFNOztZQUVyQixRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxJQUFJO1lBQ1gsa0JBQWtCO1lBQ2xCLHVCQUF1QjtZQUN2QixlQUFlO1NBQ2hCLENBQUM7SUFDSixDQUFDOztnQkFySEYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQywrdUVBQWlEOztpQkFFbEQ7Ozs7O3dCQU1FLE1BQU07eUJBbUVOLEtBQUssU0FBQyxRQUFROztJQXdDakIsK0JBQUM7Q0FBQSxBQXRIRCxJQXNIQztTQWhIWSx3QkFBd0I7Ozs7Ozs7SUFLbkMseUNBQWtEOztJQUNsRCw0Q0FBNEM7O0lBRTVDLHlDQUFjOzs7OztJQUlkLDJDQUFxQjs7Ozs7SUFrRXJCLGlEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTd2lwZXJDb25maWdJbnRlcmZhY2UgfSBmcm9tICduZ3gtc3dpcGVyLXdyYXBwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtbGF5ZXItY29udHJvbC1wYzInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5ZXItY29udHJvbC1wYzIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXllci1jb250cm9sLXBjMi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJDb250cm9sUGMyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIOi+k+WHuuWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gb3V0ZXJcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIG91dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIOW5v+aSreS6i+S7tlxuICBwdWJsaWMgbXlTd2lwZXI6IFN3aXBlckNvbmZpZ0ludGVyZmFjZSA9IHt9O1xuICAvLyBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgbXV0ZXggPSBmYWxzZTsgLy8g5LqS5palXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG4gIHByaXZhdGUgX2NvbmZpZzogYW55O1xuICBnZXQgY29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICAgLyoqXG4gICAqIOWbvuWxguagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnXG4gICAqIEBleGFtcGxlXG4gICAqICB7XG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICBhdXRvICwgLy8g5oC75a695bqmXG4gICAgICBoZWlnaHQ6ICBhdXRvICAvLyDmgLvpq5jluqZcbiAgICB9LFxuICAgIHNpbmdsZVNpemU6IHtcbiAgICAgIHdpZHRoOiAgMzBweCAsIC8vIOWbvuagh+Wkp+Wwj1xuICAgICAgaGVpZ2h0OiAgMzBweCAsXG4gICAgICBwYWRkaW5nOiAgMTBweCAgLy8g5Zu+5qCH5aSW6L656LedXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAgMTBweCAsXG4gICAgICBsZWZ0OiAgMTBweCAgLy8g5YWo5bGA5a6a5L2NXG4gICAgfSxcbiAgICBzdHlsZToge1xuICAgICAgYmdDbGFzczogIGN1c3RvbSAsIC8vIOaVtOS4quiDjOaZr+agt+W8j1xuICAgICAgc2luZ2xlU2VsZWN0Q2xhc3M6ICBzZWxlY3QgLCAvLyDpgInkuK3lkI7moLflvI9cbiAgICAgIHNpbmdsZVVuc2VsZWN0Q2xhc3M6ICB1blNlbGVjdCAsIC8vIOacqumAieS4reagt+W8j1xuICAgICAgY2hlY2tib3g6ICBhc3NldHMvYWxsLnBuZyAsXG4gICAgICBiYXNpczoge1xuICAgICAgICBmbG9hdDogIGxlZnQgLFxuICAgICAgICBsaXN0c3R5bGU6ICBub25lICxcbiAgICAgICAgd2lkdGg6ICAxMjBweCAsIC8vIOWdl+WuveW6plxuICAgICAgICBoZWlnaHQ6ICA1MHB4ICwgLy8g5Z2X6auY5bqmXG4gICAgICAgIHRleHRhbGlnbjogIGNlbnRlciAsXG4gICAgICAgIGZvbnRDb2xvcjogICNmZmZmZmYgLFxuICAgICAgICBmb250U2l6ZTogIDE4cHggLFxuICAgICAgICBwYWRkaW5nOiAgMHB4ICwgLy8g5Z2X5aSW6L656LedXG4gICAgICAgIGJvcmRlclJhZGl1czogIDEwUFgsXG4gICAgICAgIC8vICBsaW5laGVpZ2h0IDogIDEwMHB4ICwgIC8vIOWfuuehgOagt+W8j1xuICAgICAgfSxcbiAgICAgIGJnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICAjMDAzODg3ICxcbiAgICAgICAgYm9yZGVyOiAgMXB4IHNvbGlkICNiMWQ0YzIgLFxuICAgICAgICBib3hTaGFkb3c6ICAwIDAgMTBweCAwIHJnYmEoMTYsNjAsMzgsLjMpLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBzcmM6ICBhc3NldHMvaWNvbi5wbmcgLFxuICAgICAgICBiZ0NvbG9yOiAgIzE1MzA1YyAsXG4gICAgICAgIGZvbnRDb2xvcjogICM2NjY2NjYgLFxuICAgICAgICBib3JkZXJSYWRpbzogIDEwcHggIC8vIOmAieS4reagt+W8j1xuICAgICAgfSxcbiAgICAgIHVuc2VsZWN0OiB7XG4gICAgICAgIHNyYzogIGFzc2V0cy9pY29uLnBuZyAsXG4gICAgICAgIGJnQ29sb3I6ICBub25lICxcbiAgICAgICAgZm9udENvbG9yOiAgI2ZmZmZmZiAsXG4gICAgICAgIGJvcmRlclJhZGlvOiAgMTBweCAgLy8g5pyq6YCJ5Lit5qC35byPXG4gICAgICB9XG4gICAgfSxcbiAgICBsYXllcnM6IFtdXG4gIH07XG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBjb25maWcodmFsdWU6IGFueSkge1xuICAgIC8vIOWBmuWkhOeQhlxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuICB9XG4gIC8vIOWbvuWxguWPguaVsFxuICBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7fTtcbiAgLy8g54K55Ye75LqL5Lu2XG4gIGZ1bGxzY3JlZW5Ub2dnbGUoaXRlbTogeyB0aXRsZTogYW55OyB2aXNpYmxlOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLm91dGVyLmVtaXQoaXRlbSk7XG4gICAgaWYgKHRoaXMubXV0ZXggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY29uZmlnLmxheWVycy5mb3JFYWNoKCh2YWx1ZTogeyB0aXRsZTogYW55OyB2aXNpYmxlOiBib29sZWFuIH0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLnRpdGxlID09PSBpdGVtLnRpdGxlKSB7XG4gICAgICAgICAgdmFsdWUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS52aXNpYmxlID0gIWl0ZW0udmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm15U3dpcGVyID0ge1xuICAgICAgLy8gdmVydGljYWxcbiAgICAgIC8vIGhvcml6b250YWxcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgLy8g5byA5ZCv6byg5qCH55qE5oqT5omL54q25oCBXG4gICAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAvLyBsb29wZWRTbGlkZXM6IDgsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBzcGVlZDogMTAwMFxuICAgICAgLy8g5YiH5o2i5pWI5p6c5Li6IGNvdmVyZmxvd1xuICAgICAgLy8gZWZmZWN0OiAnY292ZXJmbG93JyxcbiAgICAgIC8vIGNvdmVyZmxvdyDphY3nva5cbiAgICB9O1xuICB9XG59XG4iXX0=