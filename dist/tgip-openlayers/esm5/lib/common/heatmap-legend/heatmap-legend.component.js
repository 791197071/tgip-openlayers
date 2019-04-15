/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var HeatmapLegendComponent = /** @class */ (function () {
    function HeatmapLegendComponent() {
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    Object.defineProperty(HeatmapLegendComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        /**
         * 样式参数1
         * @param {any} config
         * @example   *
         * {
          visible: 'block',
          color: '#fff',
          size: {
            width: '100px', // 总宽度
            height: '25px' // 总高度
          },
          position: {
            top: '',
            bottom: '10px',
            right: '',
            left: '10px' // 全局定位
          },
          datas: [
            {
              title: '舒适',
              background: 'rgba(0, 172, 0,1)',
            },
            {
              title: '较舒适',
              background: '#0000FF',
            },
            {
              title: '一般',
              background: '#FFFF00',
            },
            {
              title: '拥挤',
              background: '#00FFFF',
            }
          ]
        };
         *
         */
        set: /**
         * 样式参数1
         * \@example *
         * {
         * visible: 'block',
         * color: '#fff',
         * size: {
         * width: '100px', // 总宽度
         * height: '25px' // 总高度
         * },
         * position: {
         * top: '',
         * bottom: '10px',
         * right: '',
         * left: '10px' // 全局定位
         * },
         * datas: [
         * {
         * title: '舒适',
         * background: 'rgba(0, 172, 0,1)',
         * },
         * {
         * title: '较舒适',
         * background: '#0000FF',
         * },
         * {
         * title: '一般',
         * background: '#FFFF00',
         * },
         * {
         * title: '拥挤',
         * background: '#00FFFF',
         * }
         * ]
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
    /**
     * @return {?}
     */
    HeatmapLegendComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HeatmapLegendComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-heatmap-legend',
                    template: "<div style=\"position: absolute;\" [style.display]=\"config.visible\" [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\" [style.right]=\"config.position.right\" [style.bottom]=\"config.position.bottom\">\n\n  <div style=\"display: flex;\">\n    <div *ngFor=\"let item of config.datas; let i = index\">\n      <div style=\"border: 2px solid #fff; text-align: center\" [style.background]=\"item.background\"\n        [style.width]=\"config.size.width\" [style.line-height]=\"config.size.height\" [style.height]=\"config.size.height\"\n        [style.color]=\"config.color\">\n        {{item.title}}</div>\n    </div>\n  </div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    HeatmapLegendComponent.ctorParameters = function () { return []; };
    HeatmapLegendComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }]
    };
    return HeatmapLegendComponent;
}());
export { HeatmapLegendComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeatmapLegendComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    HeatmapLegendComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdG1hcC1sZWdlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9oZWF0bWFwLWxlZ2VuZC9oZWF0bWFwLWxlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBT0U7O1FBa0RRLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBakR6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUVELHNCQUFJLDBDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBcUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQ0gsVUFDVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0ExQ0E7Ozs7SUE2Q0QseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsZ3FCQUE4Qzs7aUJBRS9DOzs7Ozt5QkErQ0UsS0FBSyxTQUFDLFFBQVE7O0lBU2pCLDZCQUFDO0NBQUEsQUE3REQsSUE2REM7U0F2RFksc0JBQXNCOzs7Ozs7SUFJakMseUNBQXFCOzs7OztJQStDckIsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1oZWF0bWFwLWxlZ2VuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWF0bWFwLWxlZ2VuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYXRtYXAtbGVnZW5kLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWF0bWFwTGVnZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKlxuICAgKiDmoLflvI/lj4LmlbAxXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGUgICAqXG4gICAqIHtcbiAgICB2aXNpYmxlOiAnYmxvY2snLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICcxMDBweCcsIC8vIOaAu+WuveW6plxuICAgICAgaGVpZ2h0OiAnMjVweCcgLy8g5oC76auY5bqmXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAnJyxcbiAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgcmlnaHQ6ICcnLFxuICAgICAgbGVmdDogJzEwcHgnIC8vIOWFqOWxgOWumuS9jVxuICAgIH0sXG4gICAgZGF0YXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfoiJLpgIInLFxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAxNzIsIDAsMSknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfovoPoiJLpgIInLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMDBGRicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S4gOiIrCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjRkZGRjAwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5oul5oykJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMEZGRkYnLFxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgICpcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgLy8g6buY6K6k5Zu+5bGC5Y+C5pWwXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHt9O1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=