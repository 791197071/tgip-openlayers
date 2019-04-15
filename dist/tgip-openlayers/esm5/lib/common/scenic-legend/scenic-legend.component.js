/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ScenicLegendComponent = /** @class */ (function () {
    function ScenicLegendComponent() {
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    Object.defineProperty(ScenicLegendComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        /**
         * 样式参数
         * @param {any} config
         * @example
         *
         * private defaultConfig = {
          openStyle: {
            size: {
              width: '50px', // 总宽度
              height: '50px' // 总高度
            },
            position: {
              top: '',
              bottom: '10px',
              right: '',
              left: '10px' // 全局定位
            },
            openImage: 'assets/show_map.png',
          },
          closeStyle: {
            size: {
              width: '50px', // 总宽度
              height: '50px' // 总高度
            },
            position: {
              top: '10px',
              bottom: '10px',
              right: '10px',
              left: '10px' // 全局定位
            },
            closeImage: 'assets/close.png',
          },
          title: '图例',
          gradestyle: {
            color: 'white',
            height: '20px',
            width: '50px'
          },
          numberstyle: {
            color: 'white',
            width: '50px',
            height: '20px'
          },
          Iconstyle: {
            color: 'white',
            width: '30px',
            height: '30px'
          },
          visible: 'block',
          background: '#000',
          border: '1px solid #fff',
          size: {
            width: '200px', // 总宽度
            height: 'auto' // 总高度
          },
          position: {
            top: '10px',
            bottom: '10px',
            right: '10px',
            left: '10px' // 全局定位
          },
          datas0: [
            {
              title: '景区等级',
              visible: 'true', // 显示
              type: 'colorType',
              color: 'white',
              titleStyle: {
                color: 'gray'
              },
              data: [{
                name: '5A',
                value: 'rgba(255,152,1,1)'
              }, {
                name: '4A',
                value: 'rgba(159,224,96,1)'
              }, {
                name: '3A',
                value: 'rgba(2,139,255,1)'
              }, {
                name: '2A',
                value: 'rgba(21,112,176,1)'
              }]
            }],
          datas1: [
            {
              title: 'A景区数量统计',
              visible: 'true', // 显示
              type: 'colorNum',
              color: 'white',
              titleStyle: {
                color: 'gray',
              },
              data: [{
                name: '30',
                value: 'rgba(255,152,1,1)'
              }, {
                name: '40',
                value: 'rgba(159,224,96,1)'
              }, {
                name: '50',
                value: 'rgba(2,139,255,1)'
              }, {
                name: '60',
                value: 'rgba(21,112,176,1)'
              }]
            }],
          datas2: [
            {
              title: 'B景区数量统计',
              visible: 'true', // 显示
              type: 'colorNum',
              color: 'white',
              titleStyle: {
                color: 'gray',
              },
              data: [{
                name: '30',
                src: 'assets/show_map.png',
              }, {
                name: '40',
                src: 'assets/show_map.png',
              }, {
                name: '50',
                src: 'assets/show_map.png',
              }, {
                name: '60',
                src: 'assets/show_map.png',
              }]
            }],
          datas5: [
            {
              title: 'B景区数量统计88',
              visible: 'true', // 显示
              type: 'colorNum',
              color: 'white',
              titleStyle: {
                color: 'gray',
              },
              data: [{
                name: '30',
                src: 'assets/show_map.png',
              }, {
                name: '40',
                src: 'assets/show_map.png',
              }, {
                name: '50',
                src: 'assets/show_map.png',
              }, {
                name: '60',
                src: 'assets/show_map.png',
              }]
            }]
        };
         *
         */
        set: /**
         * 样式参数
         * \@example
         *
         * private defaultConfig = {
         * openStyle: {
         * size: {
         * width: '50px', // 总宽度
         * height: '50px' // 总高度
         * },
         * position: {
         * top: '',
         * bottom: '10px',
         * right: '',
         * left: '10px' // 全局定位
         * },
         * openImage: 'assets/show_map.png',
         * },
         * closeStyle: {
         * size: {
         * width: '50px', // 总宽度
         * height: '50px' // 总高度
         * },
         * position: {
         * top: '10px',
         * bottom: '10px',
         * right: '10px',
         * left: '10px' // 全局定位
         * },
         * closeImage: 'assets/close.png',
         * },
         * title: '图例',
         * gradestyle: {
         * color: 'white',
         * height: '20px',
         * width: '50px'
         * },
         * numberstyle: {
         * color: 'white',
         * width: '50px',
         * height: '20px'
         * },
         * Iconstyle: {
         * color: 'white',
         * width: '30px',
         * height: '30px'
         * },
         * visible: 'block',
         * background: '#000',
         * border: '1px solid #fff',
         * size: {
         * width: '200px', // 总宽度
         * height: 'auto' // 总高度
         * },
         * position: {
         * top: '10px',
         * bottom: '10px',
         * right: '10px',
         * left: '10px' // 全局定位
         * },
         * datas0: [
         * {
         * title: '景区等级',
         * visible: 'true', // 显示
         * type: 'colorType',
         * color: 'white',
         * titleStyle: {
         * color: 'gray'
         * },
         * data: [{
         * name: '5A',
         * value: 'rgba(255,152,1,1)'
         * }, {
         * name: '4A',
         * value: 'rgba(159,224,96,1)'
         * }, {
         * name: '3A',
         * value: 'rgba(2,139,255,1)'
         * }, {
         * name: '2A',
         * value: 'rgba(21,112,176,1)'
         * }]
         * }],
         * datas1: [
         * {
         * title: 'A景区数量统计',
         * visible: 'true', // 显示
         * type: 'colorNum',
         * color: 'white',
         * titleStyle: {
         * color: 'gray',
         * },
         * data: [{
         * name: '30',
         * value: 'rgba(255,152,1,1)'
         * }, {
         * name: '40',
         * value: 'rgba(159,224,96,1)'
         * }, {
         * name: '50',
         * value: 'rgba(2,139,255,1)'
         * }, {
         * name: '60',
         * value: 'rgba(21,112,176,1)'
         * }]
         * }],
         * datas2: [
         * {
         * title: 'B景区数量统计',
         * visible: 'true', // 显示
         * type: 'colorNum',
         * color: 'white',
         * titleStyle: {
         * color: 'gray',
         * },
         * data: [{
         * name: '30',
         * src: 'assets/show_map.png',
         * }, {
         * name: '40',
         * src: 'assets/show_map.png',
         * }, {
         * name: '50',
         * src: 'assets/show_map.png',
         * }, {
         * name: '60',
         * src: 'assets/show_map.png',
         * }]
         * }],
         * datas5: [
         * {
         * title: 'B景区数量统计88',
         * visible: 'true', // 显示
         * type: 'colorNum',
         * color: 'white',
         * titleStyle: {
         * color: 'gray',
         * },
         * data: [{
         * name: '30',
         * src: 'assets/show_map.png',
         * }, {
         * name: '40',
         * src: 'assets/show_map.png',
         * }, {
         * name: '50',
         * src: 'assets/show_map.png',
         * }, {
         * name: '60',
         * src: 'assets/show_map.png',
         * }]
         * }]
         * };
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
    ScenicLegendComponent.prototype.show = 
    // 显示
    /**
     * @return {?}
     */
    function () {
        this.hide = false;
    };
    // 影藏
    // 影藏
    /**
     * @return {?}
     */
    ScenicLegendComponent.prototype.vanish = 
    // 影藏
    /**
     * @return {?}
     */
    function () {
        this.hide = true;
    };
    // mouseenter 移入
    // mouseenter 移入
    /**
     * @return {?}
     */
    ScenicLegendComponent.prototype.mouseenter = 
    // mouseenter 移入
    /**
     * @return {?}
     */
    function () {
        this.flag = true;
    };
    // mouseleave 移出
    // mouseleave 移出
    /**
     * @return {?}
     */
    ScenicLegendComponent.prototype.mouseleave = 
    // mouseleave 移出
    /**
     * @return {?}
     */
    function () {
        this.flag = false;
    };
    /**
     * @return {?}
     */
    ScenicLegendComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hide = false;
        this.flag = false;
    };
    ScenicLegendComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-scenic-legend',
                    template: "<div style=\"position: absolute\" [style.width]=\"config.openStyle.size.width\"\n  [style.height]=\"config.openStyle.size.height\" \n  [style.top]=\"config.openStyle.position.top\"\n  [style.left]=\"config.openStyle.position.left\" \n  [style.right]=\"config.openStyle.position.right\"\n  [style.bottom]=\"config.openStyle.position.bottom\"\n  (click)=\"vanish()\" [ngStyle]=\"{\n  display: hide === true ? 'none' : 'block'\n}\">\n  <img src=\"{{config.openStyle.openImage}}\" style=\"width: 100%;\" />\n</div>\n<div [ngStyle]=\"{\n  display: hide === false ? 'none' : 'block'\n}\">\n  <div (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\" style=\"position: absolute;padding: 0px;\"\n  [style.top]=\"config.openStyle.position.top\"\n  [style.left]=\"config.openStyle.position.left\" \n  [style.right]=\"config.openStyle.position.right\"\n  [style.bottom]=\"config.openStyle.position.bottom\">\n    <div (click)=\"show()\" style=\"width: 20px;  position: relative;  top: 5px;  right: 5px;  float: right;\" [ngStyle]=\"{\n    display: flag === false ? 'none' : 'block'\n  }\">\n      <img src=\"{{config.closeStyle.closeImage}}\" style=\"width: 100%;\" />\n    </div>\n    <div style=\"padding: 0px;\" [style.background]=\"config.background\" [style.width]=\"config.size.width\"\n      [style.height]=\"config.size.height\">\n      <div [style.border]=\"config.border\">\n        <div style=\"margin: 10px;\" [style.border-bottom]=\"config.border\" [style.color]=\"config.gradestyle.color\">\n          {{config.title}}\n        </div>\n        <!-- colorType -->\n        <div style=\"margin: 10px;\" [ngStyle]=\"{\n          display: config.datas0[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas0[0].titleStyle.color\">{{config.datas0[0].title}}</p>\n          <div *ngFor=\"let item of config.datas0[0].data; let i = index\" style=\"margin-bottom: 10px;\"\n            [style.height]=\"config.gradestyle.height\" [style.line-height]=\"config.gradestyle.height\">\n            <div style=\"border-radius: 5px;float: left;margin-right: 20px;\" [style.background]=\"item.value\"\n              [style.height]=\"config.gradestyle.height\" [style.width]=\"config.gradestyle.width\"></div>\n            <div [style.color]=\"config.datas1[0].color\" [style.height]=\"config.gradestyle.height\">{{item.name}}</div>\n          </div>\n        </div>\n        <!-- colorNum -->\n        <div style=\"margin: 10px;\"\n        [ngStyle]=\"{\n          display: config.datas1[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas1[0].titleStyle.color\">{{config.datas1[0].title}}</p>\n          <div style=\"margin-bottom: 10px;display: flex;\" [style.height]=\"config.numberstyle.height\"\n            [style.line-height]=\"config.numberstyle.height\">\n            <span *ngFor=\"let item of config.datas1[0].data; let i = index\" style=\"border-radius: 5px;float: left;\"\n              [style.background]=\"item.value\" [style.width]=\"config.numberstyle.width\"\n              [style.height]=\"config.numberstyle.height\"></span>\n          </div>\n          <div style=\"margin-bottom: 10px; display: flex;\" [style.height]=\"config.numberstyle.height\"\n            [style.line-height]=\"config.numberstyle.height\">\n            <span *ngFor=\"let item of config.datas1[0].data; let i = index\" style=\"  float: left; text-align: left\"\n              [style.color]=\"config.datas1[0].color\" [style.width]=\"config.numberstyle.width\"\n              [style.line-height]=\"config.numberstyle.height\">{{item.name}}</span>\n          </div>\n        </div>\n        <!-- iconType -->\n        <div style=\"margin: 10px; overflow: hidden;\"\n        [ngStyle]=\"{\n          display: config.datas2[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas1[0].titleStyle.color\">{{config.datas2[0].title}}</p>\n          <div style=\"width: 50%; float: left;\">\n            <div *ngFor=\"let item of config.datas2[0].data; let i = index\" style=\"margin-bottom: 10px; float: left;\"\n              [style.height]=\"config.Iconstyle.height\" [style.line-height]=\"config.Iconstyle.height\">\n              <span style=\" float: left;\"  [style.height]=\"config.Iconstyle.height\" [style.width]=\"config.Iconstyle.width\"> <img src=\"{{item.src}}\"\n                  style=\"width: 100%;\" /></span>\n              <span style=\"  float: left; text-align: center\" [style.color]=\"config.datas1[0].color\"\n                [style.width]=\"config.Iconstyle.width\"\n                [style.line-height]=\"config.Iconstyle.height\">{{item.name}}</span>\n            </div>\n          </div>\n          <div style=\"width: 50%; float: left;\">\n            <div *ngFor=\"let item of config.datas2[0].data; let i = index\" style=\"margin-bottom: 10px; float: left;\"\n              [style.height]=\"config.Iconstyle.height\" [style.line-height]=\"config.Iconstyle.height\">\n              <span style=\" float: left;\"  [style.height]=\"config.Iconstyle.height\" [style.width]=\"config.Iconstyle.width\"> <img src=\"{{item.src}}\"\n                  style=\"width: 100%;\" /></span>\n              <span style=\"  float: left; text-align: center\" [style.color]=\"config.datas1[0].color\"\n                [style.width]=\"config.Iconstyle.width\"\n                [style.line-height]=\"config.Iconstyle.height\">{{item.name}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ScenicLegendComponent.ctorParameters = function () { return []; };
    ScenicLegendComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }]
    };
    return ScenicLegendComponent;
}());
export { ScenicLegendComponent };
if (false) {
    /** @type {?} */
    ScenicLegendComponent.prototype.hide;
    /** @type {?} */
    ScenicLegendComponent.prototype.flag;
    /**
     * @type {?}
     * @private
     */
    ScenicLegendComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    ScenicLegendComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmljLWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NjZW5pYy1sZWdlbmQvc2NlbmljLWxlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBT0U7O1FBMEtRLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBekt6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUlELHNCQUFJLHlDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTJKRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDSCxVQUNXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQWhLQTtJQW9LRCxLQUFLOzs7OztJQUNMLG9DQUFJOzs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELEtBQUs7Ozs7O0lBQ0wsc0NBQU07Ozs7O0lBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsZ0JBQWdCOzs7OztJQUNoQiwwQ0FBVTs7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBRW5CLENBQUM7SUFDRCxnQkFBZ0I7Ozs7O0lBQ2hCLDBDQUFVOzs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O2dCQXZNRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDY4S0FBNkM7O2lCQUU5Qzs7Ozs7eUJBdUtFLEtBQUssU0FBQyxRQUFROztJQTZCakIsNEJBQUM7Q0FBQSxBQXpNRCxJQXlNQztTQW5NWSxxQkFBcUI7OztJQUloQyxxQ0FBVTs7SUFDVixxQ0FBVTs7Ozs7SUFDVix3Q0FBcUI7Ozs7O0lBcUtyQiw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLXNjZW5pYy1sZWdlbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NlbmljLWxlZ2VuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjZW5pYy1sZWdlbmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjZW5pY0xlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG4gIGhpZGU6IGFueTtcbiAgZmxhZzogYW55O1xuICBwcml2YXRlIF9jb25maWc6IGFueTtcbiAgZ2V0IGNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgLyoqXG4gICAqIOagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBvcGVuU3R5bGU6IHtcbiAgICAgIHNpemU6IHtcbiAgICAgICAgd2lkdGg6ICc1MHB4JywgLy8g5oC75a695bqmXG4gICAgICAgIGhlaWdodDogJzUwcHgnIC8vIOaAu+mrmOW6plxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogJycsXG4gICAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgICByaWdodDogJycsXG4gICAgICAgIGxlZnQ6ICcxMHB4JyAvLyDlhajlsYDlrprkvY1cbiAgICAgIH0sXG4gICAgICBvcGVuSW1hZ2U6ICdhc3NldHMvc2hvd19tYXAucG5nJyxcbiAgICB9LFxuICAgIGNsb3NlU3R5bGU6IHtcbiAgICAgIHNpemU6IHtcbiAgICAgICAgd2lkdGg6ICc1MHB4JywgLy8g5oC75a695bqmXG4gICAgICAgIGhlaWdodDogJzUwcHgnIC8vIOaAu+mrmOW6plxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgICBib3R0b206ICcxMHB4JyxcbiAgICAgICAgcmlnaHQ6ICcxMHB4JyxcbiAgICAgICAgbGVmdDogJzEwcHgnIC8vIOWFqOWxgOWumuS9jVxuICAgICAgfSxcbiAgICAgIGNsb3NlSW1hZ2U6ICdhc3NldHMvY2xvc2UucG5nJyxcbiAgICB9LFxuICAgIHRpdGxlOiAn5Zu+5L6LJyxcbiAgICBncmFkZXN0eWxlOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgd2lkdGg6ICc1MHB4J1xuICAgIH0sXG4gICAgbnVtYmVyc3R5bGU6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgd2lkdGg6ICc1MHB4JyxcbiAgICAgIGhlaWdodDogJzIwcHgnXG4gICAgfSxcbiAgICBJY29uc3R5bGU6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgd2lkdGg6ICczMHB4JyxcbiAgICAgIGhlaWdodDogJzMwcHgnXG4gICAgfSxcbiAgICB2aXNpYmxlOiAnYmxvY2snLFxuICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZicsXG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICcyMDBweCcsIC8vIOaAu+WuveW6plxuICAgICAgaGVpZ2h0OiAnYXV0bycgLy8g5oC76auY5bqmXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICBib3R0b206ICcxMHB4JyxcbiAgICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgICBsZWZ0OiAnMTBweCcgLy8g5YWo5bGA5a6a5L2NXG4gICAgfSxcbiAgICBkYXRhczA6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmma/ljLrnrYnnuqcnLFxuICAgICAgICB2aXNpYmxlOiAndHJ1ZScsIC8vIOaYvuekulxuICAgICAgICB0eXBlOiAnY29sb3JUeXBlJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRpdGxlU3R5bGU6IHtcbiAgICAgICAgICBjb2xvcjogJ2dyYXknXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgbmFtZTogJzVBJyxcbiAgICAgICAgICB2YWx1ZTogJ3JnYmEoMjU1LDE1MiwxLDEpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJzRBJyxcbiAgICAgICAgICB2YWx1ZTogJ3JnYmEoMTU5LDIyNCw5NiwxKSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICczQScsXG4gICAgICAgICAgdmFsdWU6ICdyZ2JhKDIsMTM5LDI1NSwxKSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICcyQScsXG4gICAgICAgICAgdmFsdWU6ICdyZ2JhKDIxLDExMiwxNzYsMSknXG4gICAgICAgIH1dXG4gICAgICB9XSxcbiAgICBkYXRhczE6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdB5pmv5Yy65pWw6YeP57uf6K6hJyxcbiAgICAgICAgdmlzaWJsZTogJ3RydWUnLCAvLyDmmL7npLpcbiAgICAgICAgdHlwZTogJ2NvbG9yTnVtJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRpdGxlU3R5bGU6IHtcbiAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgIG5hbWU6ICczMCcsXG4gICAgICAgICAgdmFsdWU6ICdyZ2JhKDI1NSwxNTIsMSwxKSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICc0MCcsXG4gICAgICAgICAgdmFsdWU6ICdyZ2JhKDE1OSwyMjQsOTYsMSknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnNTAnLFxuICAgICAgICAgIHZhbHVlOiAncmdiYSgyLDEzOSwyNTUsMSknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnNjAnLFxuICAgICAgICAgIHZhbHVlOiAncmdiYSgyMSwxMTIsMTc2LDEpJ1xuICAgICAgICB9XVxuICAgICAgfV0sXG4gICAgZGF0YXMyOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQuaZr+WMuuaVsOmHj+e7n+iuoScsXG4gICAgICAgIHZpc2libGU6ICd0cnVlJywgLy8g5pi+56S6XG4gICAgICAgIHR5cGU6ICdjb2xvck51bScsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0aXRsZVN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICBuYW1lOiAnMzAnLFxuICAgICAgICAgIHNyYzogJ2Fzc2V0cy9zaG93X21hcC5wbmcnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJzQwJyxcbiAgICAgICAgICBzcmM6ICdhc3NldHMvc2hvd19tYXAucG5nJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICc1MCcsXG4gICAgICAgICAgc3JjOiAnYXNzZXRzL3Nob3dfbWFwLnBuZycsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnNjAnLFxuICAgICAgICAgIHNyYzogJ2Fzc2V0cy9zaG93X21hcC5wbmcnLFxuICAgICAgICB9XVxuICAgICAgfV0sXG4gICAgZGF0YXM1OiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQuaZr+WMuuaVsOmHj+e7n+iuoTg4JyxcbiAgICAgICAgdmlzaWJsZTogJ3RydWUnLCAvLyDmmL7npLpcbiAgICAgICAgdHlwZTogJ2NvbG9yTnVtJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRpdGxlU3R5bGU6IHtcbiAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgIG5hbWU6ICczMCcsXG4gICAgICAgICAgc3JjOiAnYXNzZXRzL3Nob3dfbWFwLnBuZycsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAnNDAnLFxuICAgICAgICAgIHNyYzogJ2Fzc2V0cy9zaG93X21hcC5wbmcnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogJzUwJyxcbiAgICAgICAgICBzcmM6ICdhc3NldHMvc2hvd19tYXAucG5nJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6ICc2MCcsXG4gICAgICAgICAgc3JjOiAnYXNzZXRzL3Nob3dfbWFwLnBuZycsXG4gICAgICAgIH1dXG4gICAgICB9XVxuICB9O1xuICAgKlxuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgY29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgfVxuICAvLyDpu5jorqTlm77lsYLlj4LmlbBcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge307XG5cbiAgLy8g5pi+56S6XG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlID0gZmFsc2U7XG4gIH1cbiAgLy8g5b2x6JePXG4gIHZhbmlzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGUgPSB0cnVlO1xuICB9XG4gIC8vIG1vdXNlZW50ZXIg56e75YWlXG4gIG1vdXNlZW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5mbGFnID0gdHJ1ZTtcblxuICB9XG4gIC8vIG1vdXNlbGVhdmUg56e75Ye6XG4gIG1vdXNlbGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5oaWRlID0gZmFsc2U7XG4gICAgdGhpcy5mbGFnID0gZmFsc2U7XG4gIH1cblxufVxuIl19