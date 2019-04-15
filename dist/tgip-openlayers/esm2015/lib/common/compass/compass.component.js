/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class CompassComponent {
    constructor() {
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
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CompassComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-compass',
                template: "<div style=\"position: absolute\" [style.width]=\"config.size.width\" [style.height]=\"config.size.height\"\n  [style.background]=\"config.background\" [style.display]=\"config.visible\" [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\" [style.right]=\"config.position.right\" [style.bottom]=\"config.position.bottom\">\n  <img src=\"{{config.image.src }}\" style=\"width: 100%;\" />\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
CompassComponent.ctorParameters = () => [];
CompassComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBhc3MvY29tcGFzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0I7O1FBb0NRLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBbkN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCRCxJQUNJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBR0QsUUFBUTtJQUNSLENBQUM7OztZQTlDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDhhQUF1Qzs7YUFFeEM7Ozs7O3FCQWtDRSxLQUFLLFNBQUMsUUFBUTs7Ozs7OztJQTVCZixtQ0FBcUI7Ozs7O0lBaUNyQix5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLWNvbXBhc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGFzcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBhc3MuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG4gIHByaXZhdGUgX2NvbmZpZzogYW55O1xuICBnZXQgY29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICAvKipcbiAgICog5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge1xuICAgIHZpc2libGU6ICdibG9jaycsXG4gICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAnNTBweCcsIC8vIOaAu+WuveW6plxuICAgICAgaGVpZ2h0OiAnNTBweCcgLy8g5oC76auY5bqmXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICBib3R0b206ICcxMHB4JyxcbiAgICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgICBsZWZ0OiAnMTBweCcgLy8g5YWo5bGA5a6a5L2NXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgc3JjOiAnYXNzZXRzL2NvbXBhc3MucG5nJ1xuICAgIH1cbiAgfTtcbiAgICpcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgLy8g6buY6K6k5Zu+5bGC5Y+C5pWwXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHt9O1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=