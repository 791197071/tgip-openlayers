/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var CompassComponent = /** @class */ (function () {
    function CompassComponent() {
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    Object.defineProperty(CompassComponent.prototype, "config", {
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
          visible: 'block',
          background: '#000',
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
          image: {
            src: 'assets/compass.png'
          }
        };
         *
         */
        set: /**
         * 样式参数
         * \@example
         *
         * private defaultConfig = {
         * visible: 'block',
         * background: '#000',
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
         * image: {
         * src: 'assets/compass.png'
         * }
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
    CompassComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CompassComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-compass',
                    template: "<div style=\"position: absolute\" [style.width]=\"config.size.width\" [style.height]=\"config.size.height\"\n  [style.background]=\"config.background\" [style.display]=\"config.visible\" [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\" [style.right]=\"config.position.right\" [style.bottom]=\"config.position.bottom\">\n  <img src=\"{{config.image.src }}\" style=\"width: 100%;\" />\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CompassComponent.ctorParameters = function () { return []; };
    CompassComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }]
    };
    return CompassComponent;
}());
export { CompassComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompassComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    CompassComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBhc3MvY29tcGFzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBUUU7O1FBb0NRLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBbkN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUVELHNCQUFJLG9DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXVCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDSCxVQUNXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQTVCQTs7OztJQStCRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw4YUFBdUM7O2lCQUV4Qzs7Ozs7eUJBa0NFLEtBQUssU0FBQyxRQUFROztJQVNqQix1QkFBQztDQUFBLEFBaERELElBZ0RDO1NBMUNZLGdCQUFnQjs7Ozs7O0lBSzNCLG1DQUFxQjs7Ozs7SUFpQ3JCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtY29tcGFzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wYXNzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGFzcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKlxuICAgKiDmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7XG4gICAgdmlzaWJsZTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICc1MHB4JywgLy8g5oC75a695bqmXG4gICAgICBoZWlnaHQ6ICc1MHB4JyAvLyDmgLvpq5jluqZcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICcxMHB4JyxcbiAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgcmlnaHQ6ICcxMHB4JyxcbiAgICAgIGxlZnQ6ICcxMHB4JyAvLyDlhajlsYDlrprkvY1cbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICBzcmM6ICdhc3NldHMvY29tcGFzcy5wbmcnXG4gICAgfVxuICB9O1xuICAgKlxuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgY29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgfVxuICAvLyDpu5jorqTlm77lsYLlj4LmlbBcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge307XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==