/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { ProjThree } from 'handsmap-map-client/openlayers/ProjThree';
export class FullExtentComponent {
    constructor() {
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
    /**
     * 地图参数
     * @param {?} value
     * @return {?}
     */
    set map(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this._map = value;
    }
    /**
     * 样式参数
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        if (!value) {
            return;
        }
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    fullExtentToggle() {
        if (this._map) {
            /** @type {?} */
            let center = [this._map.config.centerX, this._map.config.centerY];
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
    }
}
FullExtentComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-full-extent',
                template: "<button (click)=\"fullExtentToggle()\"\n[style.width]=\"_config.size.width\"\n[style.height]=\"_config.size.height\"\n[style.bottom]=\"_config.position.bottom\"\n[style.right]=\"_config.position.right\"\nstyle=\"position:absolute;border: none;\"\n[style.background]=\"_config.icon\"\n[class]=\"_config.className\"\n></button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FullExtentComponent.ctorParameters = () => [];
FullExtentComponent.propDecorators = {
    map: [{ type: Input, args: ['map',] }],
    config: [{ type: Input, args: ['config',] }],
    configUrl: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1leHRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2Z1bGwtZXh0ZW50L2Z1bGwtZXh0ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQU9yRSxNQUFNLE9BQU8sbUJBQW1CO0lBb0U5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFqQlEsa0JBQWEsR0FBRzs7WUFFdEIsU0FBUyxFQUFFLEtBQUs7O1lBRWhCLElBQUksRUFBRSxzQkFBc0I7O1lBRTVCLFFBQVEsRUFBRTtnQkFDUixNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsTUFBTTthQUNkOztZQUVELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTs7Z0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQzNCO1NBQ0YsQ0FBQztRQUdBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBakVELElBQ0ksR0FBRyxDQUFDLEtBQW1CO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQU1ELElBQ0ksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBZ0RELFFBQVEsS0FBSSxDQUFDOzs7O0lBRU4sZ0JBQWdCO1FBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTs7Z0JBQ1QsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixLQUFLLFdBQVcsRUFBRTtnQkFDekQsTUFBTSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDN0IsVUFBVSxFQUFFLE1BQU07O2dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ2hDLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7WUEvRkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixtVkFBMkM7O2FBRTVDOzs7OztrQkFNRSxLQUFLLFNBQUMsS0FBSztxQkFhWCxLQUFLLFNBQUMsUUFBUTt3QkFTZCxLQUFLOzs7Ozs7O0lBZE4sbUNBQTJCOztJQVkzQixzQ0FBYTs7SUFFYix3Q0FBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QjNCLDRDQWVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYXAvbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvTWFwJztcbmltcG9ydCB7IFByb2pUaHJlZSB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9Qcm9qVGhyZWUnO1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLWZ1bGwtZXh0ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Z1bGwtZXh0ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZnVsbC1leHRlbnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxFeHRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICog5Zyw5Zu+5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBtYXBcbiAgICovXG4gIEBJbnB1dCgnbWFwJylcbiAgc2V0IG1hcCh2YWx1ZTogTWFwQ29tcG9uZW50KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn5bey57uR5a6aIG1hcCDnu4Tku7Yg5a6e5L6LJyk7XG4gICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfbWFwOiBNYXBDb21wb25lbnQ7XG4gIC8qKlxuICAgKiDmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgY29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuICB9XG4gIF9jb25maWc6IGFueTtcblxuICBASW5wdXQoKSBjb25maWdVcmw6IHN0cmluZztcbiAgLyoqXG4gICAqIOWbvuWxguagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqe1xuICAgIC8vIOagt+W8j+WQjVxuICAgIGNsYXNzTmFtZTogJ2J0bicsXG4gICAgLy8g5YWo5Zu+5oyJ6ZKuXG4gICAgaWNvbjogJy4vZnVsbC1leHRlbnQtb24uc3ZnJyxcbiAgICAvLyDmjqfliLbmmL7npLrkvY3nva7vvIxsZWZ0IHRvcCBib3R0b20gcmlnaHQgIC8v57ud5a+55a6a5L2NXG4gICAgcG9zaXRpb246IHtcbiAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgcmlnaHQ6ICcxMHB4J1xuICAgIH0sXG4gICAgLy8g5q+P5Liq5Zu+5qCH5aSn5bCPXG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6ICc1MHB4JywgLy8g5a695bqmMTAwcHhcbiAgICAgIGhlaWdodDogJzUwcHgnIC8vIOmrmOW6piAxMDBweFxuICAgIH1cbiAgfTtcbiAgICpcbiAgICovXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAvLyDmoLflvI/lkI1cbiAgICBjbGFzc05hbWU6ICdidG4nLFxuICAgIC8vIOWFqOWbvuaMiemSrlxuICAgIGljb246ICcuL2Z1bGwtZXh0ZW50LW9uLnN2ZycsXG4gICAgLy8g5o6n5Yi25pi+56S65L2N572u77yMbGVmdCB0b3AgYm90dG9tIHJpZ2h0ICAvL+e7neWvueWumuS9jVxuICAgIHBvc2l0aW9uOiB7XG4gICAgICBib3R0b206ICcxMHB4JyxcbiAgICAgIHJpZ2h0OiAnMTBweCdcbiAgICB9LFxuICAgIC8vIOavj+S4quWbvuagh+Wkp+Wwj1xuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAnNTBweCcsIC8vIOWuveW6pjEwMHB4XG4gICAgICBoZWlnaHQ6ICc1MHB4JyAvLyDpq5jluqYgMTAwcHhcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnIHx8IHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHB1YmxpYyBmdWxsRXh0ZW50VG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9tYXApIHtcbiAgICAgIGxldCBjZW50ZXIgPSBbdGhpcy5fbWFwLmNvbmZpZy5jZW50ZXJYLCB0aGlzLl9tYXAuY29uZmlnLmNlbnRlclldO1xuICAgICAgaWYgKHRoaXMuX21hcC5jb25maWcuY29vcmRpbmF0ZVN5c3RpbVNyaWQgPT09ICdFUFNHOjM4NTcnKSB7XG4gICAgICAgIGNlbnRlciA9IFByb2pUaHJlZS5sbDJ3ZWJtZXJjKGNlbnRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX21hcC5tYXAuYW5pbWF0aW9uUGFuWm9vbSh7XG4gICAgICAgIGNvb3JkaW5hdGU6IGNlbnRlciwgLy8gY3RybC5tYXBDZW50ZXIsXG4gICAgICAgIHpvb206IHRoaXMuX21hcC5jb25maWcuem9vbSB8fCAwLFxuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCfmsqHmnInkvKDlhaUgbWFwIOWunuS+i++8gScpO1xuICAgIH1cbiAgfVxufVxuIl19