/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class LayerControlPc3Component {
    constructor() {
        /**
         * 输出参数
         */
        this.outer = new EventEmitter(); // 广播事件
        // 广播事件
        this.mySwiper = {};
        this.mutex = false; // 互斥
        // 互斥
        this.flag = false;
        this.sum = 0;
        this.hide = false;
        this.defaultConfig = {
            size: {
                width: '50px',
                // 初始宽度
                height: '50px' // 初始高度
            },
            position: {
                top: '10px',
                left: '10px',
                // 全局定位
                right: '0px' // 全局定位
            },
            cmenuPosition: {
                top: '60px',
                left: '10px',
                // 展开全局定位
                right: '20px' // 展开全局定位
            },
            cmenutop: {
                // X样式
                width: '40px',
                height: '40px',
                border: '1px solid #005ab4',
                color: '#005ab4',
                right: '0px',
                top: '-40px',
                background: 'white',
                borderbottom: 'none',
                backgroundImg: 'url(assets/close_map.png)',
                backgroundrepeat: 'no-repeat',
                backgroundposition: 'center'
            },
            cmenubody: {
                width: 'auto',
                height: '300px',
                border: '1px solid #005ab4',
                background: 'white',
                borderbottom: 'none',
                borderradius: '5px 0px 0px 0px'
            },
            fontStyle: {
                width: '120px',
                fontSize: '18px'
            },
            singleSize: {
                width: '30px',
                // 图标大小
                height: '30px',
                padding: '10px' // 图标外边距
            },
            select: {
                width: '30px',
                height: '30px',
                src: 'url(assets/select.png)'
            },
            bgStyle: {
                backgroundrepeat: 'no-repeat',
                backgroundposition: 'center',
                backgroundsize: '100% 100%'
            },
            unselect: {
                src: 'url(assets/no_select.png)'
            },
            background: {
                backgroundsize: '100%'
            },
            layers: [
                {
                    title: '景区',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '乡村旅游区',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '新业态',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '餐饮',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '旅游酒店',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '主题住宿',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                }
            ]
        };
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
     * {
     * size: {
     * width:  50px , // 初始宽度
     * height:  50px  // 初始高度
     * },
     * position: {
     * top:  10px ,
     * left:  10px , // 全局定位
     * right:  0px  // 全局定位
     * },
     * cmenuPosition: {
     * top:  60px ,
     * left:  10px , // 展开全局定位
     * right:  20px  // 展开全局定位
     * },
     * cmenutop: {
     * // X样式
     * width:  40px ,
     * height:  40px ,
     * border:  1px solid #005ab4 ,
     * color:  #005ab4 ,
     * right:  0px ,
     * top:  -40px ,
     * background:  white ,
     * borderbottom:  none ,
     * backgroundImg:  url(assets/close_map.png) ,
     * backgroundrepeat:  no-repeat ,
     * backgroundposition:  center,
     * },
     * cmenubody: {
     * width:  auto ,
     * height:  300px ,
     * border:  1px solid #005ab4 ,
     * background:  white ,
     * borderbottom:  none ,
     * borderradius:  5px 0px 0px 0px,
     * },
     * fontStyle: {
     * width:  120px ,
     * fontSize:  18px,
     * },
     * singleSize: {
     * width:  30px , // 图标大小
     * height:  30px ,
     * padding:  10px  // 图标外边距
     * },
     * select: {
     * width:  30px ,
     * height:  30px ,
     * src:  url(assets/select.png) no-repeat center / 70% 70%,
     * },
     * unselect: {
     * src:  url(assets/no_select.png) no-repeat center / 70% 70%,
     * },
     * background: {
     * backgroundsize:  100%,
     * },
     * layers: [
     * {
     * title:  景区 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  乡村旅游区 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  新业态 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  餐饮 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  旅游酒店 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  主题住宿 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * }
     * ]
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    // 显示
    /**
     * @return {?}
     */
    show() {
        this.hide = true;
    }
    // 影藏
    /**
     * @return {?}
     */
    vanish() {
        this.hide = false;
    }
    // 点击事件，是否互斥
    /**
     * @param {?} item
     * @return {?}
     */
    showitem(item) {
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
        this.sum = 0;
        this.config.layers.forEach((value) => {
            if (value.visible === true) {
                this.sum++;
                if (this.sum === this.config.layers.length) {
                    this.flag = true;
                }
                else {
                    this.flag = false;
                }
            }
        });
    }
    // 全选
    /**
     * @return {?}
     */
    allitem() {
        this.flag = true;
        this.config.layers.forEach((value) => {
            value.visible = true;
        });
    }
    // 全不选
    /**
     * @return {?}
     */
    cancelitem() {
        this.flag = false;
        this.config.layers.forEach((value) => {
            value.visible = false;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mySwiper = {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            mousewheel: true
        };
    }
}
LayerControlPc3Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-layer-control-pc3',
                template: "<div\n  class=\"imgbox\"\n  style=\"position:absolute;overflow: hidden;\"\n  [style.top]=\"config.position.top\"\n  [style.right]=\"config.position.right\"\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  (click)=\"show()\"\n  [ngStyle]=\"{\n    display: hide === true ? 'none' : 'block'\n  }\"\n>\n  <svg>\n    <image\n      id=\"image0\"\n      width=\"50\"\n      height=\"50\"\n      x=\"0\"\n      y=\"0\"\n      href=\"data:image/png;base64,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\nm50AAAAASUVORK5CYII=\"\n    />\n  </svg>\n</div>\n\n<div\n  class=\"cmenu\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.cmenuPosition.top\"\n  [style.right]=\"config.cmenuPosition.right\"\n  [ngStyle]=\"{\n    display: hide === false ? 'none' : 'block'\n  }\"\n>\n  <div\n    class=\"cmenu-top\"\n    [style.top]=\"config.cmenutop.top\"\n    [style.right]=\"config.cmenutop.right\"\n    [style.background]=\"config.cmenutop.background\"\n    [style.border]=\"config.cmenutop.border\"\n    [style.width]=\"config.cmenutop.width\"\n    [style.height]=\"config.cmenutop.height\"\n    [style.border-bottom]=\"config.cmenutop.borderbottom\"\n    style=\"position: absolute; border-radius: 5px 5px 0 0;\n    z-index: 2;cursor: pointer;\"\n    (click)=\"vanish()\"\n  >\n    <span\n      [style.background]=\"config.cmenutop.backgroundImg\"\n      [style.background-repeat]=\"config.cmenutop.backgroundrepeat\"\n      [style.background-position]=\"config.cmenutop.backgroundposition\"\n      [style.width]=\"config.cmenutop.width\"\n      [style.height]=\"config.cmenutop.height\"\n      style=\"display: block;\"\n    ></span>\n  </div>\n  <div\n    class=\"cmenu-body\"\n    style=\" overflow: hidden; overflow-y: auto;\"\n    [style.width]=\"config.cmenubody.width\"\n    [style.max-height]=\"config.cmenubody.height\"\n    [style.border]=\"config.cmenubody.border\"\n    [style.border-radius]=\"config.cmenubody.borderradius\"\n    [style.border-bottom]=\"config.cmenubody.borderbottom\"\n    [style.background]=\"config.cmenubody.background\"\n  >\n    <div>\n      <div\n        *ngFor=\"let item of config.layers\"\n        style=\"display: flex; justify-content: space-between; margin: 10px 0px; list-style: none;overflow: hidden; \"\n        (click)=\"showitem(item)\"\n      >\n        <i\n          [style.width]=\"config.singleSize.width\"\n          [style.height]=\"config.singleSize.height\"\n          [style.background]=\"item.src\"\n          [style.background-size]=\"config.background.backgroundsize\"\n          style=\" float: left; padding: 5px 5px; margin: 0 10px;\"\n        ></i>\n        <span\n          style=\" float: left; padding: 5px 5px; overflow: hidden;\"\n          [style.line-height]=\"config.singleSize.height\"\n          [style.font-size]=\"config.fontStyle.fontSize\"\n          [style.width]=\"config.fontStyle.width\"\n        >\n          {{ item.title }}</span\n        >\n        <span\n          style=\" float: left;margin: 5px; cursor: pointer;background-size: 70% 70%;\"\n          [ngStyle]=\"{\n            'background-image':\n              item.visible === true ? config.select.src : config.unselect.src,\n              'background-repeat':\n              item.visible === true ? config.bgStyle.backgroundrepeat : config.bgStyle.backgroundrepeat,\n              'background-position':\n              item.visible === true ? config.bgStyle.backgroundposition : config.bgStyle.backgroundposition,\n              'background-size':\n              item.visible === true ? config.bgStyle.backgroundsize : config.bgStyle.backgroundsize\n          }\"\n          [style.width]=\"config.select.width\"\n          [style.height]=\"config.select.height\"\n        >\n        </span>\n      </div>\n    </div>\n  </div>\n  <div\n    style=\" border: 1px solid #005ab4;  border-radius: 0px 0px 5px 5px;  border-top: none;  height: 50px; background: white;\"\n  >\n    <div\n      class=\"all\"\n      (click)=\"allitem()\"\n      [ngStyle]=\"{\n        display: flag === true ? 'none' : 'block'\n      }\"\n    >\n      \u5168\u9009\n    </div>\n    <div\n      class=\"all\"\n      (click)=\"cancelitem()\"\n      [ngStyle]=\"{\n        display: flag === false ? 'none' : 'block'\n      }\"\n    >\n      \u53D6\u6D88\u5168\u9009\n    </div>\n  </div>\n</div>\n",
                styles: [".all{bottom:0;background:#005ab4;border-radius:4px;width:150px;height:30px;line-height:30px;text-align:center;left:50%;color:#fff;cursor:pointer;margin:0 auto;-webkit-transform:translate(0,20%);transform:translate(0,20%)}"]
            }] }
];
/** @nocollapse */
LayerControlPc3Component.ctorParameters = () => [];
LayerControlPc3Component.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};
if (false) {
    /**
     * 输出参数
     * @type {?}
     * @private
     */
    LayerControlPc3Component.prototype.outer;
    /** @type {?} */
    LayerControlPc3Component.prototype.mySwiper;
    /** @type {?} */
    LayerControlPc3Component.prototype.mutex;
    /** @type {?} */
    LayerControlPc3Component.prototype.flag;
    /** @type {?} */
    LayerControlPc3Component.prototype.self;
    /** @type {?} */
    LayerControlPc3Component.prototype.sum;
    /** @type {?} */
    LayerControlPc3Component.prototype.hide;
    /**
     * @type {?}
     * @private
     */
    LayerControlPc3Component.prototype._config;
    /**
     * @type {?}
     * @private
     */
    LayerControlPc3Component.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC1wYzMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2xheWVyLWNvbnRyb2wtcGMzL2xheWVyLWNvbnRyb2wtcGMzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sd0JBQXdCO0lBWW5DOzs7O1FBUGtCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDLENBQUMsT0FBTzs7UUFDbkQsYUFBUSxHQUEwQixFQUFFLENBQUM7UUFDNUMsVUFBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUs7O1FBQ3BCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFFYixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsU0FBSSxHQUFHLEtBQUssQ0FBQztRQTZHTCxrQkFBYSxHQUFHO1lBQ3RCLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTs7Z0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3ZCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLEdBQUcsRUFBRSxNQUFNO2dCQUNYLElBQUksRUFBRSxNQUFNOztnQkFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDckI7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsSUFBSSxFQUFFLE1BQU07O2dCQUNaLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUzthQUN4QjtZQUNELFFBQVEsRUFBRTs7Z0JBRVIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLG1CQUFtQjtnQkFDM0IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEdBQUcs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LElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXVDLEVBQUUsRUFBRTtZQUNyRSxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFO2dCQUNULEVBQUUsRUFBRSxtQkFBbUI7YUFDeEI7WUFDRCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO0lBQ0osQ0FBQzs7O1lBeFJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsNHJNQUFpRDs7YUFFbEQ7Ozs7O29CQU1FLE1BQU07cUJBNkdOLEtBQUssU0FBQyxRQUFROzs7Ozs7OztJQTdHZix5Q0FBa0Q7O0lBQ2xELDRDQUE0Qzs7SUFDNUMseUNBQWM7O0lBQ2Qsd0NBQWE7O0lBQ2Isd0NBQVU7O0lBQ1YsdUNBQVE7O0lBQ1Isd0NBQWE7Ozs7O0lBSWIsMkNBQXFCOzs7OztJQXlHckIsaURBOEZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJ25neC1zd2lwZXItd3JhcHBlcic7XG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtbGF5ZXItY29udHJvbC1wYzMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5ZXItY29udHJvbC1wYzMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXllci1jb250cm9sLXBjMy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJDb250cm9sUGMzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIOi+k+WHuuWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gb3V0ZXJcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIG91dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIOW5v+aSreS6i+S7tlxuICBwdWJsaWMgbXlTd2lwZXI6IFN3aXBlckNvbmZpZ0ludGVyZmFjZSA9IHt9O1xuICBtdXRleCA9IGZhbHNlOyAvLyDkupLmlqVcbiAgZmxhZyA9IGZhbHNlO1xuICBzZWxmOiBhbnk7XG4gIHN1bSA9IDA7XG4gIGhpZGUgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKlxuICAgKiDlm77lsYLmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICA1MHB4ICwgLy8g5Yid5aeL5a695bqmXG4gICAgICBoZWlnaHQ6ICA1MHB4ICAvLyDliJ3lp4vpq5jluqZcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICAxMHB4ICxcbiAgICAgIGxlZnQ6ICAxMHB4ICwgLy8g5YWo5bGA5a6a5L2NXG4gICAgICByaWdodDogIDBweCAgLy8g5YWo5bGA5a6a5L2NXG4gICAgfSxcbiAgICBjbWVudVBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICA2MHB4ICxcbiAgICAgIGxlZnQ6ICAxMHB4ICwgLy8g5bGV5byA5YWo5bGA5a6a5L2NXG4gICAgICByaWdodDogIDIwcHggIC8vIOWxleW8gOWFqOWxgOWumuS9jVxuICAgIH0sXG4gICAgY21lbnV0b3A6IHtcbiAgICAgIC8vIFjmoLflvI9cbiAgICAgIHdpZHRoOiAgNDBweCAsXG4gICAgICBoZWlnaHQ6ICA0MHB4ICxcbiAgICAgIGJvcmRlcjogIDFweCBzb2xpZCAjMDA1YWI0ICxcbiAgICAgIGNvbG9yOiAgIzAwNWFiNCAsXG4gICAgICByaWdodDogIDBweCAsXG4gICAgICB0b3A6ICAtNDBweCAsXG4gICAgICBiYWNrZ3JvdW5kOiAgd2hpdGUgLFxuICAgICAgYm9yZGVyYm90dG9tOiAgbm9uZSAsXG4gICAgICBiYWNrZ3JvdW5kSW1nOiAgdXJsKGFzc2V0cy9jbG9zZV9tYXAucG5nKSAsXG4gICAgICBiYWNrZ3JvdW5kcmVwZWF0OiAgbm8tcmVwZWF0ICxcbiAgICAgIGJhY2tncm91bmRwb3NpdGlvbjogIGNlbnRlcixcbiAgICB9LFxuICAgIGNtZW51Ym9keToge1xuICAgICAgd2lkdGg6ICBhdXRvICxcbiAgICAgIGhlaWdodDogIDMwMHB4ICxcbiAgICAgIGJvcmRlcjogIDFweCBzb2xpZCAjMDA1YWI0ICxcbiAgICAgIGJhY2tncm91bmQ6ICB3aGl0ZSAsXG4gICAgICBib3JkZXJib3R0b206ICBub25lICxcbiAgICAgIGJvcmRlcnJhZGl1czogIDVweCAwcHggMHB4IDBweCxcbiAgICB9LFxuICAgIGZvbnRTdHlsZToge1xuICAgICAgd2lkdGg6ICAxMjBweCAsXG4gICAgICBmb250U2l6ZTogIDE4cHgsXG4gICAgfSxcbiAgICBzaW5nbGVTaXplOiB7XG4gICAgICB3aWR0aDogIDMwcHggLCAvLyDlm77moIflpKflsI9cbiAgICAgIGhlaWdodDogIDMwcHggLFxuICAgICAgcGFkZGluZzogIDEwcHggIC8vIOWbvuagh+Wklui+uei3nVxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICB3aWR0aDogIDMwcHggLFxuICAgICAgaGVpZ2h0OiAgMzBweCAsXG4gICAgICBzcmM6ICB1cmwoYXNzZXRzL3NlbGVjdC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyA3MCUgNzAlLFxuICAgIH0sXG4gICAgdW5zZWxlY3Q6IHtcbiAgICAgIHNyYzogIHVybChhc3NldHMvbm9fc2VsZWN0LnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIDcwJSA3MCUsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBiYWNrZ3JvdW5kc2l6ZTogIDEwMCUsXG4gICAgfSxcbiAgICBsYXllcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDmma/ljLogLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAgdXJsKGFzc2V0cy9zaG93X21hcC5wbmcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDkuaHmnZHml4XmuLjljLogLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAgdXJsKGFzc2V0cy9zaG93X21hcC5wbmcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDmlrDkuJrmgIEgLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAgdXJsKGFzc2V0cy9zaG93X21hcC5wbmcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDppJDppa4gLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAgdXJsKGFzc2V0cy9zaG93X21hcC5wbmcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDml4XmuLjphZLlupcgLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAgdXJsKGFzc2V0cy9zaG93X21hcC5wbmcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICDkuLvpopjkvY/lrr8gLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAgdXJsKGFzc2V0cy9zaG93X21hcC5wbmcpLFxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgLy8g5YGa5aSE55CGXG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7XG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICc1MHB4JywgLy8g5Yid5aeL5a695bqmXG4gICAgICBoZWlnaHQ6ICc1MHB4JyAvLyDliJ3lp4vpq5jluqZcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICcxMHB4JyxcbiAgICAgIGxlZnQ6ICcxMHB4JywgLy8g5YWo5bGA5a6a5L2NXG4gICAgICByaWdodDogJzBweCcgLy8g5YWo5bGA5a6a5L2NXG4gICAgfSxcbiAgICBjbWVudVBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICc2MHB4JyxcbiAgICAgIGxlZnQ6ICcxMHB4JywgLy8g5bGV5byA5YWo5bGA5a6a5L2NXG4gICAgICByaWdodDogJzIwcHgnIC8vIOWxleW8gOWFqOWxgOWumuS9jVxuICAgIH0sXG4gICAgY21lbnV0b3A6IHtcbiAgICAgIC8vIFjmoLflvI9cbiAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA1YWI0JyxcbiAgICAgIGNvbG9yOiAnIzAwNWFiNCcsXG4gICAgICByaWdodDogJzBweCcsXG4gICAgICB0b3A6ICctNDBweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyYm90dG9tOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kSW1nOiAndXJsKGFzc2V0cy9jbG9zZV9tYXAucG5nKScsXG4gICAgICBiYWNrZ3JvdW5kcmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgIGJhY2tncm91bmRwb3NpdGlvbjogJ2NlbnRlcidcbiAgICB9LFxuICAgIGNtZW51Ym9keToge1xuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA1YWI0JyxcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICBib3JkZXJib3R0b206ICdub25lJyxcbiAgICAgIGJvcmRlcnJhZGl1czogJzVweCAwcHggMHB4IDBweCdcbiAgICB9LFxuICAgIGZvbnRTdHlsZToge1xuICAgICAgd2lkdGg6ICcxMjBweCcsXG4gICAgICBmb250U2l6ZTogJzE4cHgnXG4gICAgfSxcbiAgICBzaW5nbGVTaXplOiB7XG4gICAgICB3aWR0aDogJzMwcHgnLCAvLyDlm77moIflpKflsI9cbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgcGFkZGluZzogJzEwcHgnIC8vIOWbvuagh+Wklui+uei3nVxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICB3aWR0aDogJzMwcHgnLFxuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBzcmM6ICd1cmwoYXNzZXRzL3NlbGVjdC5wbmcpJ1xuICAgIH0sXG4gICAgYmdTdHlsZToge1xuICAgICAgYmFja2dyb3VuZHJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICBiYWNrZ3JvdW5kcG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZHNpemU6ICcxMDAlIDEwMCUnXG4gICAgfSxcbiAgICB1bnNlbGVjdDoge1xuICAgICAgc3JjOiAndXJsKGFzc2V0cy9ub19zZWxlY3QucG5nKSdcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGJhY2tncm91bmRzaXplOiAnMTAwJSdcbiAgICB9LFxuICAgIGxheWVyczogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aZr+WMuicsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBzcmM6ICd1cmwoYXNzZXRzL3Nob3dfbWFwLnBuZyknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S5oeadkeaXhea4uOWMuicsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBzcmM6ICd1cmwoYXNzZXRzL3Nob3dfbWFwLnBuZyknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aWsOS4muaAgScsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBzcmM6ICd1cmwoYXNzZXRzL3Nob3dfbWFwLnBuZyknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+mkkOmlricsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBzcmM6ICd1cmwoYXNzZXRzL3Nob3dfbWFwLnBuZyknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aXhea4uOmFkuW6lycsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBzcmM6ICd1cmwoYXNzZXRzL3Nob3dfbWFwLnBuZyknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S4u+mimOS9j+WuvycsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBzcmM6ICd1cmwoYXNzZXRzL3Nob3dfbWFwLnBuZyknXG4gICAgICB9XG4gICAgXVxuICB9O1xuICAvLyDmmL7npLpcbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGUgPSB0cnVlO1xuICB9XG4gIC8vIOW9seiXj1xuICB2YW5pc2goKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlID0gZmFsc2U7XG4gIH1cbiAgLy8g54K55Ye75LqL5Lu277yM5piv5ZCm5LqS5palXG4gIHNob3dpdGVtKGl0ZW06IHsgdGl0bGU6IGFueTsgdmlzaWJsZTogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy5vdXRlci5lbWl0KGl0ZW0pO1xuICAgIGlmICh0aGlzLm11dGV4ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNvbmZpZy5sYXllcnMuZm9yRWFjaCgodmFsdWU6IHsgdGl0bGU6IGFueTsgdmlzaWJsZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS50aXRsZSA9PT0gaXRlbS50aXRsZSkge1xuICAgICAgICAgIHZhbHVlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0udmlzaWJsZSA9ICFpdGVtLnZpc2libGU7XG4gICAgfVxuICAgIHRoaXMuc3VtID0gMDtcbiAgICB0aGlzLmNvbmZpZy5sYXllcnMuZm9yRWFjaCgodmFsdWU6IHsgdGl0bGU6IGFueTsgdmlzaWJsZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICBpZiAodmFsdWUudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnN1bSsrO1xuICAgICAgICBpZiAodGhpcy5zdW0gPT09IHRoaXMuY29uZmlnLmxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8g5YWo6YCJXG4gIGFsbGl0ZW0oKTogdm9pZCB7XG4gICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICB0aGlzLmNvbmZpZy5sYXllcnMuZm9yRWFjaCgodmFsdWU6IHsgdGl0bGU6IGFueTsgdmlzaWJsZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICB2YWx1ZS52aXNpYmxlID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICAvLyDlhajkuI3pgIlcbiAgY2FuY2VsaXRlbSgpOiB2b2lkIHtcbiAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpZy5sYXllcnMuZm9yRWFjaCgodmFsdWU6IHsgdGl0bGU6IGFueTsgdmlzaWJsZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICB2YWx1ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm15U3dpcGVyID0ge1xuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcbiAgICAgIH0sXG4gICAgICBtb3VzZXdoZWVsOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19