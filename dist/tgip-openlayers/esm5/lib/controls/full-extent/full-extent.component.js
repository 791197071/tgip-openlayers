/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { ProjThree } from 'handsmap-map-client/openlayers/ProjThree';
var FullExtentComponent = /** @class */ (function () {
    function FullExtentComponent() {
        /**
         * 图层样式参数
         * \@example
         *
         * {
         * // 样式名
         * className: 'btn',
         * // 全图按钮
         * icon: './full-extent-on.svg',
         * // 控制显示位置，left top bottom right  //绝对定位
         * position: {
         * bottom: '10px',
         * right: '10px'
         * },
         * // 每个图标大小
         * size: {
         * width: '50px', // 宽度100px
         * height: '50px' // 高度 100px
         * }
         * };
         *
         */
        this.defaultConfig = {
            // 样式名
            className: 'btn',
            // 全图按钮
            icon: './full-extent-on.svg',
            // 控制显示位置，left top bottom right  //绝对定位
            position: {
                bottom: '10px',
                right: '10px'
            },
            // 每个图标大小
            size: {
                width: '50px',
                // 宽度100px
                height: '50px' // 高度 100px
            }
        };
        this._config = this.defaultConfig || {};
    }
    Object.defineProperty(FullExtentComponent.prototype, "map", {
        /**
         * 地图参数
         * @param {any} map
         */
        set: /**
         * 地图参数
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            console.log('已绑定 map 组件 实例');
            this._map = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullExtentComponent.prototype, "config", {
        /**
         * 样式参数
         * @param {any} config
         */
        set: /**
         * 样式参数
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._config = Object.assign({}, this.defaultConfig, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FullExtentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FullExtentComponent.prototype.fullExtentToggle = /**
     * @return {?}
     */
    function () {
        if (this._map) {
            /** @type {?} */
            var center = [this._map.config.centerX, this._map.config.centerY];
            if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
                center = ProjThree.ll2webmerc(center);
            }
            this._map.map.animationPanZoom({
                coordinate: center,
                // ctrl.mapCenter,
                zoom: this._map.config.zoom || 0,
                duration: 400
            });
        }
        else {
            console.warn('没有传入 map 实例！');
        }
    };
    FullExtentComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-full-extent',
                    template: "<button (click)=\"fullExtentToggle()\"\n[style.width]=\"_config.size.width\"\n[style.height]=\"_config.size.height\"\n[style.bottom]=\"_config.position.bottom\"\n[style.right]=\"_config.position.right\"\nstyle=\"position:absolute;border: none;\"\n[style.background]=\"_config.icon\"\n[class]=\"_config.className\"\n></button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FullExtentComponent.ctorParameters = function () { return []; };
    FullExtentComponent.propDecorators = {
        map: [{ type: Input, args: ['map',] }],
        config: [{ type: Input, args: ['config',] }],
        configUrl: [{ type: Input }]
    };
    return FullExtentComponent;
}());
export { FullExtentComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullExtentComponent.prototype._map;
    /** @type {?} */
    FullExtentComponent.prototype._config;
    /** @type {?} */
    FullExtentComponent.prototype.configUrl;
    /**
     * 图层样式参数
     * \@example
     *
     * {
     * // 样式名
     * className: 'btn',
     * // 全图按钮
     * icon: './full-extent-on.svg',
     * // 控制显示位置，left top bottom right  //绝对定位
     * position: {
     * bottom: '10px',
     * right: '10px'
     * },
     * // 每个图标大小
     * size: {
     * width: '50px', // 宽度100px
     * height: '50px' // 高度 100px
     * }
     * };
     *
     * @type {?}
     * @private
     */
    FullExtentComponent.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1leHRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2Z1bGwtZXh0ZW50L2Z1bGwtZXh0ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRTtJQTBFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFqQlEsa0JBQWEsR0FBRzs7WUFFdEIsU0FBUyxFQUFFLEtBQUs7O1lBRWhCLElBQUksRUFBRSxzQkFBc0I7O1lBRTVCLFFBQVEsRUFBRTtnQkFDUixNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsTUFBTTthQUNkOztZQUVELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTs7Z0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQzNCO1NBQ0YsQ0FBQztRQUdBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQWpFRCxzQkFDSSxvQ0FBRztRQUxQOzs7V0FHRzs7Ozs7O1FBQ0gsVUFDUSxLQUFtQjtZQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE9BQU87YUFDUjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSx1Q0FBTTtRQUxWOzs7V0FHRzs7Ozs7O1FBQ0gsVUFDVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBOzs7O0lBZ0RELHNDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFFTiw4Q0FBZ0I7OztJQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTs7Z0JBQ1QsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixLQUFLLFdBQVcsRUFBRTtnQkFDekQsTUFBTSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDN0IsVUFBVSxFQUFFLE1BQU07O2dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ2hDLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkEvRkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixtVkFBMkM7O2lCQUU1Qzs7Ozs7c0JBTUUsS0FBSyxTQUFDLEtBQUs7eUJBYVgsS0FBSyxTQUFDLFFBQVE7NEJBU2QsS0FBSzs7SUErRFIsMEJBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQTFGWSxtQkFBbUI7Ozs7OztJQWE5QixtQ0FBMkI7O0lBWTNCLHNDQUFhOztJQUViLHdDQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCM0IsNENBZUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hcC9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9NYXAnO1xuaW1wb3J0IHsgUHJvalRocmVlIH0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL1Byb2pUaHJlZSc7XG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtZnVsbC1leHRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZnVsbC1leHRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mdWxsLWV4dGVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRnVsbEV4dGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiDlnLDlm77lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IG1hcFxuICAgKi9cbiAgQElucHV0KCdtYXAnKVxuICBzZXQgbWFwKHZhbHVlOiBNYXBDb21wb25lbnQpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCflt7Lnu5HlrpogbWFwIOe7hOS7tiDlrp7kvosnKTtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IE1hcENvbXBvbmVudDtcbiAgLyoqXG4gICAqIOagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnXG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBjb25maWcodmFsdWU6IGFueSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgX2NvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgpIGNvbmZpZ1VybDogc3RyaW5nO1xuICAvKipcbiAgICog5Zu+5bGC5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICp7XG4gICAgLy8g5qC35byP5ZCNXG4gICAgY2xhc3NOYW1lOiAnYnRuJyxcbiAgICAvLyDlhajlm77mjInpkq5cbiAgICBpY29uOiAnLi9mdWxsLWV4dGVudC1vbi5zdmcnLFxuICAgIC8vIOaOp+WItuaYvuekuuS9jee9ru+8jGxlZnQgdG9wIGJvdHRvbSByaWdodCAgLy/nu53lr7nlrprkvY1cbiAgICBwb3NpdGlvbjoge1xuICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICByaWdodDogJzEwcHgnXG4gICAgfSxcbiAgICAvLyDmr4/kuKrlm77moIflpKflsI9cbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogJzUwcHgnLCAvLyDlrr3luqYxMDBweFxuICAgICAgaGVpZ2h0OiAnNTBweCcgLy8g6auY5bqmIDEwMHB4XG4gICAgfVxuICB9O1xuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge1xuICAgIC8vIOagt+W8j+WQjVxuICAgIGNsYXNzTmFtZTogJ2J0bicsXG4gICAgLy8g5YWo5Zu+5oyJ6ZKuXG4gICAgaWNvbjogJy4vZnVsbC1leHRlbnQtb24uc3ZnJyxcbiAgICAvLyDmjqfliLbmmL7npLrkvY3nva7vvIxsZWZ0IHRvcCBib3R0b20gcmlnaHQgIC8v57ud5a+55a6a5L2NXG4gICAgcG9zaXRpb246IHtcbiAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgcmlnaHQ6ICcxMHB4J1xuICAgIH0sXG4gICAgLy8g5q+P5Liq5Zu+5qCH5aSn5bCPXG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICc1MHB4JywgLy8g5a695bqmMTAwcHhcbiAgICAgIGhlaWdodDogJzUwcHgnIC8vIOmrmOW6piAxMDBweFxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWcgfHwge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIGZ1bGxFeHRlbnRUb2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgbGV0IGNlbnRlciA9IFt0aGlzLl9tYXAuY29uZmlnLmNlbnRlclgsIHRoaXMuX21hcC5jb25maWcuY2VudGVyWV07XG4gICAgICBpZiAodGhpcy5fbWFwLmNvbmZpZy5jb29yZGluYXRlU3lzdGltU3JpZCA9PT0gJ0VQU0c6Mzg1NycpIHtcbiAgICAgICAgY2VudGVyID0gUHJvalRocmVlLmxsMndlYm1lcmMoY2VudGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbWFwLm1hcC5hbmltYXRpb25QYW5ab29tKHtcbiAgICAgICAgY29vcmRpbmF0ZTogY2VudGVyLCAvLyBjdHJsLm1hcENlbnRlcixcbiAgICAgICAgem9vbTogdGhpcy5fbWFwLmNvbmZpZy56b29tIHx8IDAsXG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+ayoeacieS8oOWFpSBtYXAg5a6e5L6L77yBJyk7XG4gICAgfVxuICB9XG59XG4iXX0=