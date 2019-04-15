/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var LayerControlPc3Component = /** @class */ (function () {
    function LayerControlPc3Component() {
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
    Object.defineProperty(LayerControlPc3Component.prototype, "config", {
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
         * {
          size: {
            width:  50px , // 初始宽度
            height:  50px  // 初始高度
          },
          position: {
            top:  10px ,
            left:  10px , // 全局定位
            right:  0px  // 全局定位
          },
          cmenuPosition: {
            top:  60px ,
            left:  10px , // 展开全局定位
            right:  20px  // 展开全局定位
          },
          cmenutop: {
            // X样式
            width:  40px ,
            height:  40px ,
            border:  1px solid #005ab4 ,
            color:  #005ab4 ,
            right:  0px ,
            top:  -40px ,
            background:  white ,
            borderbottom:  none ,
            backgroundImg:  url(assets/close_map.png) ,
            backgroundrepeat:  no-repeat ,
            backgroundposition:  center,
          },
          cmenubody: {
            width:  auto ,
            height:  300px ,
            border:  1px solid #005ab4 ,
            background:  white ,
            borderbottom:  none ,
            borderradius:  5px 0px 0px 0px,
          },
          fontStyle: {
            width:  120px ,
            fontSize:  18px,
          },
          singleSize: {
            width:  30px , // 图标大小
            height:  30px ,
            padding:  10px  // 图标外边距
          },
          select: {
            width:  30px ,
            height:  30px ,
            src:  url(assets/select.png) no-repeat center / 70% 70%,
          },
          unselect: {
            src:  url(assets/no_select.png) no-repeat center / 70% 70%,
          },
          background: {
            backgroundsize:  100%,
          },
          layers: [
            {
              title:  景区 ,
              visible: false,
              src:  url(assets/show_map.png),
            },
            {
              title:  乡村旅游区 ,
              visible: false,
              src:  url(assets/show_map.png),
            },
            {
              title:  新业态 ,
              visible: false,
              src:  url(assets/show_map.png),
            },
            {
              title:  餐饮 ,
              visible: false,
              src:  url(assets/show_map.png),
            },
            {
              title:  旅游酒店 ,
              visible: false,
              src:  url(assets/show_map.png),
            },
            {
              title:  主题住宿 ,
              visible: false,
              src:  url(assets/show_map.png),
            }
          ]
        };
         */
        set: /**
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
        function (value) {
            // 做处理
            this._config = Object.assign({}, this.defaultConfig, value);
        },
        enumerable: true,
        configurable: true
    });
    // 显示
    // 显示
    /**
     * @return {?}
     */
    LayerControlPc3Component.prototype.show = 
    // 显示
    /**
     * @return {?}
     */
    function () {
        this.hide = true;
    };
    // 影藏
    // 影藏
    /**
     * @return {?}
     */
    LayerControlPc3Component.prototype.vanish = 
    // 影藏
    /**
     * @return {?}
     */
    function () {
        this.hide = false;
    };
    // 点击事件，是否互斥
    // 点击事件，是否互斥
    /**
     * @param {?} item
     * @return {?}
     */
    LayerControlPc3Component.prototype.showitem = 
    // 点击事件，是否互斥
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
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
        this.sum = 0;
        this.config.layers.forEach(function (value) {
            if (value.visible === true) {
                _this.sum++;
                if (_this.sum === _this.config.layers.length) {
                    _this.flag = true;
                }
                else {
                    _this.flag = false;
                }
            }
        });
    };
    // 全选
    // 全选
    /**
     * @return {?}
     */
    LayerControlPc3Component.prototype.allitem = 
    // 全选
    /**
     * @return {?}
     */
    function () {
        this.flag = true;
        this.config.layers.forEach(function (value) {
            value.visible = true;
        });
    };
    // 全不选
    // 全不选
    /**
     * @return {?}
     */
    LayerControlPc3Component.prototype.cancelitem = 
    // 全不选
    /**
     * @return {?}
     */
    function () {
        this.flag = false;
        this.config.layers.forEach(function (value) {
            value.visible = false;
        });
    };
    /**
     * @return {?}
     */
    LayerControlPc3Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.mySwiper = {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            mousewheel: true
        };
    };
    LayerControlPc3Component.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-layer-control-pc3',
                    template: "<div\n  class=\"imgbox\"\n  style=\"position:absolute;overflow: hidden;\"\n  [style.top]=\"config.position.top\"\n  [style.right]=\"config.position.right\"\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  (click)=\"show()\"\n  [ngStyle]=\"{\n    display: hide === true ? 'none' : 'block'\n  }\"\n>\n  <svg>\n    <image\n      id=\"image0\"\n      width=\"50\"\n      height=\"50\"\n      x=\"0\"\n      y=\"0\"\n      href=\"data:image/png;base64,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\nm50AAAAASUVORK5CYII=\"\n    />\n  </svg>\n</div>\n\n<div\n  class=\"cmenu\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.cmenuPosition.top\"\n  [style.right]=\"config.cmenuPosition.right\"\n  [ngStyle]=\"{\n    display: hide === false ? 'none' : 'block'\n  }\"\n>\n  <div\n    class=\"cmenu-top\"\n    [style.top]=\"config.cmenutop.top\"\n    [style.right]=\"config.cmenutop.right\"\n    [style.background]=\"config.cmenutop.background\"\n    [style.border]=\"config.cmenutop.border\"\n    [style.width]=\"config.cmenutop.width\"\n    [style.height]=\"config.cmenutop.height\"\n    [style.border-bottom]=\"config.cmenutop.borderbottom\"\n    style=\"position: absolute; border-radius: 5px 5px 0 0;\n    z-index: 2;cursor: pointer;\"\n    (click)=\"vanish()\"\n  >\n    <span\n      [style.background]=\"config.cmenutop.backgroundImg\"\n      [style.background-repeat]=\"config.cmenutop.backgroundrepeat\"\n      [style.background-position]=\"config.cmenutop.backgroundposition\"\n      [style.width]=\"config.cmenutop.width\"\n      [style.height]=\"config.cmenutop.height\"\n      style=\"display: block;\"\n    ></span>\n  </div>\n  <div\n    class=\"cmenu-body\"\n    style=\" overflow: hidden; overflow-y: auto;\"\n    [style.width]=\"config.cmenubody.width\"\n    [style.max-height]=\"config.cmenubody.height\"\n    [style.border]=\"config.cmenubody.border\"\n    [style.border-radius]=\"config.cmenubody.borderradius\"\n    [style.border-bottom]=\"config.cmenubody.borderbottom\"\n    [style.background]=\"config.cmenubody.background\"\n  >\n    <div>\n      <div\n        *ngFor=\"let item of config.layers\"\n        style=\"display: flex; justify-content: space-between; margin: 10px 0px; list-style: none;overflow: hidden; \"\n        (click)=\"showitem(item)\"\n      >\n        <i\n          [style.width]=\"config.singleSize.width\"\n          [style.height]=\"config.singleSize.height\"\n          [style.background]=\"item.src\"\n          [style.background-size]=\"config.background.backgroundsize\"\n          style=\" float: left; padding: 5px 5px; margin: 0 10px;\"\n        ></i>\n        <span\n          style=\" float: left; padding: 5px 5px; overflow: hidden;\"\n          [style.line-height]=\"config.singleSize.height\"\n          [style.font-size]=\"config.fontStyle.fontSize\"\n          [style.width]=\"config.fontStyle.width\"\n        >\n          {{ item.title }}</span\n        >\n        <span\n          style=\" float: left;margin: 5px; cursor: pointer;background-size: 70% 70%;\"\n          [ngStyle]=\"{\n            'background-image':\n              item.visible === true ? config.select.src : config.unselect.src,\n              'background-repeat':\n              item.visible === true ? config.bgStyle.backgroundrepeat : config.bgStyle.backgroundrepeat,\n              'background-position':\n              item.visible === true ? config.bgStyle.backgroundposition : config.bgStyle.backgroundposition,\n              'background-size':\n              item.visible === true ? config.bgStyle.backgroundsize : config.bgStyle.backgroundsize\n          }\"\n          [style.width]=\"config.select.width\"\n          [style.height]=\"config.select.height\"\n        >\n        </span>\n      </div>\n    </div>\n  </div>\n  <div\n    style=\" border: 1px solid #005ab4;  border-radius: 0px 0px 5px 5px;  border-top: none;  height: 50px; background: white;\"\n  >\n    <div\n      class=\"all\"\n      (click)=\"allitem()\"\n      [ngStyle]=\"{\n        display: flag === true ? 'none' : 'block'\n      }\"\n    >\n      \u5168\u9009\n    </div>\n    <div\n      class=\"all\"\n      (click)=\"cancelitem()\"\n      [ngStyle]=\"{\n        display: flag === false ? 'none' : 'block'\n      }\"\n    >\n      \u53D6\u6D88\u5168\u9009\n    </div>\n  </div>\n</div>\n",
                    styles: [".all{bottom:0;background:#005ab4;border-radius:4px;width:150px;height:30px;line-height:30px;text-align:center;left:50%;color:#fff;cursor:pointer;margin:0 auto;-webkit-transform:translate(0,20%);transform:translate(0,20%)}"]
                }] }
    ];
    /** @nocollapse */
    LayerControlPc3Component.ctorParameters = function () { return []; };
    LayerControlPc3Component.propDecorators = {
        outer: [{ type: Output }],
        config: [{ type: Input, args: ['config',] }]
    };
    return LayerControlPc3Component;
}());
export { LayerControlPc3Component };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udHJvbC1wYzMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2xheWVyLWNvbnRyb2wtcGMzL2xheWVyLWNvbnRyb2wtcGMzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQWtCRTs7OztRQVBrQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQyxDQUFDLE9BQU87O1FBQ25ELGFBQVEsR0FBMEIsRUFBRSxDQUFDO1FBQzVDLFVBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLOztRQUNwQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWIsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFNBQUksR0FBRyxLQUFLLENBQUM7UUE2R0wsa0JBQWEsR0FBRztZQUN0QixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU07O2dCQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTzthQUN2QjtZQUNELFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUUsTUFBTTtnQkFDWCxJQUFJLEVBQUUsTUFBTTs7Z0JBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3JCO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLEdBQUcsRUFBRSxNQUFNO2dCQUNYLElBQUksRUFBRSxNQUFNOztnQkFDWixLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7YUFDeEI7WUFDRCxRQUFRLEVBQUU7O2dCQUVSLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxtQkFBbUI7Z0JBQzNCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQUUsS0FBSztnQkFDWixHQUFHLEVBQUUsT0FBTztnQkFDWixV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QUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQXVDO1lBQ2pFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU07Ozs7O0lBQ04sNkNBQVU7Ozs7O0lBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF1QztZQUNqRSxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsU0FBUyxFQUFFLFVBQVU7WUFDckIsYUFBYSxFQUFFLE1BQU07WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxFQUFFLG1CQUFtQjthQUN4QjtZQUNELFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDSixDQUFDOztnQkF4UkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw0ck1BQWlEOztpQkFFbEQ7Ozs7O3dCQU1FLE1BQU07eUJBNkdOLEtBQUssU0FBQyxRQUFROztJQWlLakIsK0JBQUM7Q0FBQSxBQXpSRCxJQXlSQztTQW5SWSx3QkFBd0I7Ozs7Ozs7SUFLbkMseUNBQWtEOztJQUNsRCw0Q0FBNEM7O0lBQzVDLHlDQUFjOztJQUNkLHdDQUFhOztJQUNiLHdDQUFVOztJQUNWLHVDQUFROztJQUNSLHdDQUFhOzs7OztJQUliLDJDQUFxQjs7Ozs7SUF5R3JCLGlEQThGRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTd2lwZXJDb25maWdJbnRlcmZhY2UgfSBmcm9tICduZ3gtc3dpcGVyLXdyYXBwZXInO1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLWxheWVyLWNvbnRyb2wtcGMzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheWVyLWNvbnRyb2wtcGMzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5ZXItY29udHJvbC1wYzMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExheWVyQ29udHJvbFBjM0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiDovpPlh7rlj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IG91dGVyXG4gICAqL1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBvdXRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyDlub/mkq3kuovku7ZcbiAgcHVibGljIG15U3dpcGVyOiBTd2lwZXJDb25maWdJbnRlcmZhY2UgPSB7fTtcbiAgbXV0ZXggPSBmYWxzZTsgLy8g5LqS5palXG4gIGZsYWcgPSBmYWxzZTtcbiAgc2VsZjogYW55O1xuICBzdW0gPSAwO1xuICBoaWRlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG4gIHByaXZhdGUgX2NvbmZpZzogYW55O1xuICBnZXQgY29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICAvKipcbiAgICog5Zu+5bGC5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAgNTBweCAsIC8vIOWIneWni+WuveW6plxuICAgICAgaGVpZ2h0OiAgNTBweCAgLy8g5Yid5aeL6auY5bqmXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAgMTBweCAsXG4gICAgICBsZWZ0OiAgMTBweCAsIC8vIOWFqOWxgOWumuS9jVxuICAgICAgcmlnaHQ6ICAwcHggIC8vIOWFqOWxgOWumuS9jVxuICAgIH0sXG4gICAgY21lbnVQb3NpdGlvbjoge1xuICAgICAgdG9wOiAgNjBweCAsXG4gICAgICBsZWZ0OiAgMTBweCAsIC8vIOWxleW8gOWFqOWxgOWumuS9jVxuICAgICAgcmlnaHQ6ICAyMHB4ICAvLyDlsZXlvIDlhajlsYDlrprkvY1cbiAgICB9LFxuICAgIGNtZW51dG9wOiB7XG4gICAgICAvLyBY5qC35byPXG4gICAgICB3aWR0aDogIDQwcHggLFxuICAgICAgaGVpZ2h0OiAgNDBweCAsXG4gICAgICBib3JkZXI6ICAxcHggc29saWQgIzAwNWFiNCAsXG4gICAgICBjb2xvcjogICMwMDVhYjQgLFxuICAgICAgcmlnaHQ6ICAwcHggLFxuICAgICAgdG9wOiAgLTQwcHggLFxuICAgICAgYmFja2dyb3VuZDogIHdoaXRlICxcbiAgICAgIGJvcmRlcmJvdHRvbTogIG5vbmUgLFxuICAgICAgYmFja2dyb3VuZEltZzogIHVybChhc3NldHMvY2xvc2VfbWFwLnBuZykgLFxuICAgICAgYmFja2dyb3VuZHJlcGVhdDogIG5vLXJlcGVhdCAsXG4gICAgICBiYWNrZ3JvdW5kcG9zaXRpb246ICBjZW50ZXIsXG4gICAgfSxcbiAgICBjbWVudWJvZHk6IHtcbiAgICAgIHdpZHRoOiAgYXV0byAsXG4gICAgICBoZWlnaHQ6ICAzMDBweCAsXG4gICAgICBib3JkZXI6ICAxcHggc29saWQgIzAwNWFiNCAsXG4gICAgICBiYWNrZ3JvdW5kOiAgd2hpdGUgLFxuICAgICAgYm9yZGVyYm90dG9tOiAgbm9uZSAsXG4gICAgICBib3JkZXJyYWRpdXM6ICA1cHggMHB4IDBweCAwcHgsXG4gICAgfSxcbiAgICBmb250U3R5bGU6IHtcbiAgICAgIHdpZHRoOiAgMTIwcHggLFxuICAgICAgZm9udFNpemU6ICAxOHB4LFxuICAgIH0sXG4gICAgc2luZ2xlU2l6ZToge1xuICAgICAgd2lkdGg6ICAzMHB4ICwgLy8g5Zu+5qCH5aSn5bCPXG4gICAgICBoZWlnaHQ6ICAzMHB4ICxcbiAgICAgIHBhZGRpbmc6ICAxMHB4ICAvLyDlm77moIflpJbovrnot51cbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgd2lkdGg6ICAzMHB4ICxcbiAgICAgIGhlaWdodDogIDMwcHggLFxuICAgICAgc3JjOiAgdXJsKGFzc2V0cy9zZWxlY3QucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gNzAlIDcwJSxcbiAgICB9LFxuICAgIHVuc2VsZWN0OiB7XG4gICAgICBzcmM6ICB1cmwoYXNzZXRzL25vX3NlbGVjdC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyA3MCUgNzAlLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgYmFja2dyb3VuZHNpemU6ICAxMDAlLFxuICAgIH0sXG4gICAgbGF5ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAg5pmv5Yy6ICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNyYzogIHVybChhc3NldHMvc2hvd19tYXAucG5nKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAg5Lmh5p2R5peF5ri45Yy6ICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNyYzogIHVybChhc3NldHMvc2hvd19tYXAucG5nKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAg5paw5Lia5oCBICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNyYzogIHVybChhc3NldHMvc2hvd19tYXAucG5nKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAg6aSQ6aWuICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNyYzogIHVybChhc3NldHMvc2hvd19tYXAucG5nKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAg5peF5ri46YWS5bqXICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNyYzogIHVybChhc3NldHMvc2hvd19tYXAucG5nKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAg5Li76aKY5L2P5a6/ICxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNyYzogIHVybChhc3NldHMvc2hvd19tYXAucG5nKSxcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBjb25maWcodmFsdWU6IGFueSkge1xuICAgIC8vIOWBmuWkhOeQhlxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge1xuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAnNTBweCcsIC8vIOWIneWni+WuveW6plxuICAgICAgaGVpZ2h0OiAnNTBweCcgLy8g5Yid5aeL6auY5bqmXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICBsZWZ0OiAnMTBweCcsIC8vIOWFqOWxgOWumuS9jVxuICAgICAgcmlnaHQ6ICcwcHgnIC8vIOWFqOWxgOWumuS9jVxuICAgIH0sXG4gICAgY21lbnVQb3NpdGlvbjoge1xuICAgICAgdG9wOiAnNjBweCcsXG4gICAgICBsZWZ0OiAnMTBweCcsIC8vIOWxleW8gOWFqOWxgOWumuS9jVxuICAgICAgcmlnaHQ6ICcyMHB4JyAvLyDlsZXlvIDlhajlsYDlrprkvY1cbiAgICB9LFxuICAgIGNtZW51dG9wOiB7XG4gICAgICAvLyBY5qC35byPXG4gICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzAwNWFiNCcsXG4gICAgICBjb2xvcjogJyMwMDVhYjQnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgdG9wOiAnLTQwcHgnLFxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgIGJvcmRlcmJvdHRvbTogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZEltZzogJ3VybChhc3NldHMvY2xvc2VfbWFwLnBuZyknLFxuICAgICAgYmFja2dyb3VuZHJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICBiYWNrZ3JvdW5kcG9zaXRpb246ICdjZW50ZXInXG4gICAgfSxcbiAgICBjbWVudWJvZHk6IHtcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzAwNWFiNCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyYm90dG9tOiAnbm9uZScsXG4gICAgICBib3JkZXJyYWRpdXM6ICc1cHggMHB4IDBweCAwcHgnXG4gICAgfSxcbiAgICBmb250U3R5bGU6IHtcbiAgICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgICAgZm9udFNpemU6ICcxOHB4J1xuICAgIH0sXG4gICAgc2luZ2xlU2l6ZToge1xuICAgICAgd2lkdGg6ICczMHB4JywgLy8g5Zu+5qCH5aSn5bCPXG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyAvLyDlm77moIflpJbovrnot51cbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgd2lkdGg6ICczMHB4JyxcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgc3JjOiAndXJsKGFzc2V0cy9zZWxlY3QucG5nKSdcbiAgICB9LFxuICAgIGJnU3R5bGU6IHtcbiAgICAgIGJhY2tncm91bmRyZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgYmFja2dyb3VuZHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmRzaXplOiAnMTAwJSAxMDAlJ1xuICAgIH0sXG4gICAgdW5zZWxlY3Q6IHtcbiAgICAgIHNyYzogJ3VybChhc3NldHMvbm9fc2VsZWN0LnBuZyknXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBiYWNrZ3JvdW5kc2l6ZTogJzEwMCUnXG4gICAgfSxcbiAgICBsYXllcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmma/ljLonLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAndXJsKGFzc2V0cy9zaG93X21hcC5wbmcpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuaHmnZHml4XmuLjljLonLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAndXJsKGFzc2V0cy9zaG93X21hcC5wbmcpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmlrDkuJrmgIEnLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAndXJsKGFzc2V0cy9zaG93X21hcC5wbmcpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfppJDppa4nLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAndXJsKGFzc2V0cy9zaG93X21hcC5wbmcpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfml4XmuLjphZLlupcnLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAndXJsKGFzc2V0cy9zaG93X21hcC5wbmcpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuLvpopjkvY/lrr8nLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc3JjOiAndXJsKGFzc2V0cy9zaG93X21hcC5wbmcpJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgLy8g5pi+56S6XG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlID0gdHJ1ZTtcbiAgfVxuICAvLyDlvbHol49cbiAgdmFuaXNoKCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xuICB9XG4gIC8vIOeCueWHu+S6i+S7tu+8jOaYr+WQpuS6kuaWpVxuICBzaG93aXRlbShpdGVtOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMub3V0ZXIuZW1pdChpdGVtKTtcbiAgICBpZiAodGhpcy5tdXRleCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jb25maWcubGF5ZXJzLmZvckVhY2goKHZhbHVlOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUudGl0bGUgPT09IGl0ZW0udGl0bGUpIHtcbiAgICAgICAgICB2YWx1ZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnZpc2libGUgPSAhaXRlbS52aXNpYmxlO1xuICAgIH1cbiAgICB0aGlzLnN1bSA9IDA7XG4gICAgdGhpcy5jb25maWcubGF5ZXJzLmZvckVhY2goKHZhbHVlOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5zdW0rKztcbiAgICAgICAgaWYgKHRoaXMuc3VtID09PSB0aGlzLmNvbmZpZy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIOWFqOmAiVxuICBhbGxpdGVtKCk6IHZvaWQge1xuICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gICAgdGhpcy5jb25maWcubGF5ZXJzLmZvckVhY2goKHZhbHVlOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgdmFsdWUudmlzaWJsZSA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8g5YWo5LiN6YCJXG4gIGNhbmNlbGl0ZW0oKTogdm9pZCB7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gICAgdGhpcy5jb25maWcubGF5ZXJzLmZvckVhY2goKHZhbHVlOiB7IHRpdGxlOiBhbnk7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgdmFsdWUudmlzaWJsZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5teVN3aXBlciA9IHtcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXG4gICAgICB9LFxuICAgICAgbW91c2V3aGVlbDogdHJ1ZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==