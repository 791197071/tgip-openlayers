/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef, ViewChild, Output, EventEmitter } from '@angular/core';
export class ZoomMapComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
         * 输出参数
         */
        this.outer = new EventEmitter();
        this.defaultConfig = {
            position: {
                top: '0px',
                bottom: '100px',
                right: '0px',
                left: '0px'
            },
            size: {
                width: '50px',
                // 总宽度
                height: '50px' // 总高度
            },
            border: {
                zoomIn: '1px solid #1296db',
                zoomOut: '1px solid #1296db',
                disable: '1px solid #cdcdcd',
                radius: '5px',
                cursor: 'pointer',
                uncursor: 'no-drop '
            },
            // 放大按钮
            zoomIn: {
                enable: 'url(assets/enlarge.png)',
                // 正常图标
                disable: 'url(assets/enlarge_d.png)',
                // 禁用图标
                visible: true
            },
            bgStyle: {
                backgroundrepeat: 'no-repeat',
                backgroundposition: 'center',
                backgroundsize: '100% 100%'
            },
            // 缩小按钮
            zoomOut: {
                enable: 'url(assets/less.png)',
                disable: 'url(assets/less_d.png)',
                visible: true
            }
        };
        this.config = this.defaultConfig;
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
        console.log('已绑定 map 实例');
        this._map = value;
        this.initMap();
    }
    // 设置默认值
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
     * position: {
     * top: 0px,
     * bottom: 100px,
     * right: 0px,
     * left: 0px，
     * },
     * size: {
     * width:  50px ,
     * height:  50px，
     * },
     * border: {
     * zoomIn:  1px solid #1296db ,
     * zoomOut:  1px solid #1296db ,
     * disable:  1px solid #cdcdcd ,
     * radius:  5px ,
     * cursor:  pointer ,
     * uncursor:  no-drop，
     * },
     * zoomIn: {
     * enable:  url(assets/enlarge.png) no-repeat center / 70% 70% ,
     * disable:  url(assets/enlarge_d.png) no-repeat center / 70% 70% ,
     * visible: true
     * },
     * zoomOut: {
     * enable:  url(assets/less.png) no-repeat center / 70% 70% ,
     * disable:  url(assets/less_d.png) no-repeat center / 70% 70% ,
     * visible: true
     * }
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    changeZoom(data) {
        if (!this._map) {
            return;
        }
        this._map.zoomByDelta(data);
    }
    // 监听界面缩放比例
    /**
     * @return {?}
     */
    initMap() {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const view = this._map.getView();
        view.on('change:resolution', function (e) {
            /** @type {?} */
            const maxZoom = view.getMaxZoom();
            /** @type {?} */
            const minZoom = view.getMinZoom();
            if (view.getZoom() >= maxZoom) {
                self.config.zoomIn.visible = false;
            }
            if (view.getZoom() < maxZoom && view.getZoom() > minZoom) {
                self.config.zoomIn.visible = true;
                self.config.zoomOut.visible = true;
            }
            if (view.getZoom() <= minZoom) {
                self.config.zoomOut.visible = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ZoomMapComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-zoom',
                template: "<div\n  class=\"zoomMap\"\n  [style.bottom]=\"config.position.bottom\"\n  [style.right]=\"config.position.right\"\n>\n  <span\n    class=\"maxZoom\"\n    (click)=\"changeZoom(1)\"\n    [ngStyle]=\"{\n      'background-image':\n        config.zoomIn.visible === true\n          ? config.zoomIn.enable\n          : config.zoomIn.disable,\n      'background-repeat':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundrepeat\n          : config.bgStyle.backgroundrepeat,\n      'background-position':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundposition\n          : config.bgStyle.backgroundposition,\n      'background-size':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundsize\n          : config.bgStyle.backgroundsize,\n      border:\n        config.zoomIn.visible === true\n          ? config.border.zoomIn\n          : config.border.disable,\n      cursor:\n        config.zoomIn.visible === true\n          ? config.border.cursor\n          : config.border.uncursor\n    }\"\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.line-height]=\"config.size.height\"\n    [style.border]=\"config.border.zoomIn\"\n    [style.border-radius]=\"config.border.radius\"\n  ></span>\n  <span\n    class=\"minZoom\"\n    (click)=\"changeZoom(-1)\"\n    [ngStyle]=\"{\n      'background-image':\n        config.zoomOut.visible === true\n          ? config.zoomOut.enable\n          : config.zoomOut.disable,\n      'background-repeat':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundrepeat\n          : config.bgStyle.backgroundrepeat,\n      'background-position':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundposition\n          : config.bgStyle.backgroundposition,\n      'background-size':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundsize\n          : config.bgStyle.backgroundsize,\n      border:\n        config.zoomOut.visible === true\n          ? config.border.zoomOut\n          : config.border.disable,\n      cursor:\n        config.zoomOut.visible === true\n          ? config.border.cursor\n          : config.border.uncursor\n    }\"\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.line-height]=\"config.size.height\"\n    [style.border]=\"config.border.zoomOut\"\n    [style.border-radius]=\"config.border.radius\"\n  ></span>\n</div>\n",
                styles: [".zoomMap{position:absolute;z-index:1;cursor:pointer}.zoomMap span{display:block;text-align:center}.maxZoom{margin-bottom:10px}"]
            }] }
];
/** @nocollapse */
ZoomMapComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ZoomMapComponent.propDecorators = {
    outer: [{ type: Output }],
    map: [{ type: Input, args: ['map',] }],
    mapconfig: [{ type: ViewChild, args: ['myMap',] }],
    config: [{ type: Input, args: ['config',] }]
};
if (false) {
    /**
     * 输出参数
     * @type {?}
     * @private
     */
    ZoomMapComponent.prototype.outer;
    /**
     * @type {?}
     * @private
     */
    ZoomMapComponent.prototype._map;
    /**
     * @type {?}
     * @private
     */
    ZoomMapComponent.prototype._config;
    /** @type {?} */
    ZoomMapComponent.prototype.mapconfig;
    /**
     * @type {?}
     * @private
     */
    ZoomMapComponent.prototype.defaultConfig;
    /** @type {?} */
    ZoomMapComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3pvb20tbWFwL3pvb20tbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFxQjNCLFlBQW1CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1COzs7O1FBaEJyQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQWlFN0Msa0JBQWEsR0FBRztZQUN0QixRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTs7Z0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2FBQ3RCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxtQkFBbUI7Z0JBQzNCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixRQUFRLEVBQUUsVUFBVTthQUNyQjs7WUFFRCxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLHlCQUF5Qjs7Z0JBQ2pDLE9BQU8sRUFBRSwyQkFBMkI7O2dCQUNwQyxPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdCQUFnQixFQUFFLFdBQVc7Z0JBQzdCLGtCQUFrQixFQUFFLFFBQVE7Z0JBQzVCLGNBQWMsRUFBRSxXQUFXO2FBQzVCOztZQUVELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsc0JBQXNCO2dCQUM5QixPQUFPLEVBQUUsd0JBQXdCO2dCQUNqQyxPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0YsQ0FBQztRQXBGQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBYkQsSUFDSSxHQUFHLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFRRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9DRCxJQUNJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLE1BQU07UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUF1Q0QsVUFBVSxDQUFDLElBQUk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsT0FBTzs7Y0FDQyxJQUFJLEdBQUcsSUFBSTs7Y0FDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFTLENBQUM7O2tCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7a0JBQzNCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU8sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNwQztZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxFQUFFO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ0QsUUFBUSxLQUFJLENBQUM7OztZQTFJZCxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw2K0VBQXdDOzthQUV6Qzs7OztZQVhDLGlCQUFpQjs7O29CQWlCaEIsTUFBTTtrQkFLTixLQUFLLFNBQUMsS0FBSzt3QkFjWCxTQUFTLFNBQUMsT0FBTztxQkF3Q2pCLEtBQUssU0FBQyxRQUFROzs7Ozs7OztJQTNEZixpQ0FBcUQ7Ozs7O0lBY3JELGdDQUFrQjs7Ozs7SUFDbEIsbUNBQXFCOztJQUlyQixxQ0FBOEI7Ozs7O0lBOEM5Qix5Q0FvQ0U7O0lBckZVLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYXAvbWFwLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtem9vbScsXG4gIHRlbXBsYXRlVXJsOiAnLi96b29tLW1hcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3pvb20tbWFwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBab29tTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIOi+k+WHuuWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gb3V0ZXJcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIG91dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIC8qKlxuICAgKiDlnLDlm77lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IG1hcFxuICAgKi9cbiAgQElucHV0KCdtYXAnKVxuICBzZXQgbWFwKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCflt7Lnu5HlrpogbWFwIOWunuS+iycpO1xuICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIHRoaXMuaW5pdE1hcCgpO1xuICB9XG4gIHByaXZhdGUgX21hcDogYW55O1xuICBwcml2YXRlIF9jb25maWc6IGFueTtcbiAgY29uc3RydWN0b3IocHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG4gIEBWaWV3Q2hpbGQoJ215TWFwJykgbWFwY29uZmlnO1xuICAvLyDorr7nva7pu5jorqTlgLxcbiAgZ2V0IGNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgLyoqXG4gICAqIOWbvuWxguagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IDBweCxcbiAgICAgICAgYm90dG9tOiAxMDBweCxcbiAgICAgICAgcmlnaHQ6IDBweCxcbiAgICAgICAgbGVmdDogMHB477yMXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICAgIHdpZHRoOiAgNTBweCAsXG4gICAgICAgIGhlaWdodDogIDUwcHjvvIxcbiAgICB9LFxuICAgIGJvcmRlcjoge1xuICAgICAgICB6b29tSW46ICAxcHggc29saWQgIzEyOTZkYiAsXG4gICAgICAgIHpvb21PdXQ6ICAxcHggc29saWQgIzEyOTZkYiAsXG4gICAgICAgIGRpc2FibGU6ICAxcHggc29saWQgI2NkY2RjZCAsXG4gICAgICAgIHJhZGl1czogIDVweCAsXG4gICAgICAgIGN1cnNvcjogIHBvaW50ZXIgLFxuICAgICAgICB1bmN1cnNvcjogIG5vLWRyb3DvvIxcbiAgICB9LFxuICAgIHpvb21Jbjoge1xuICAgICAgICBlbmFibGU6ICB1cmwoYXNzZXRzL2VubGFyZ2UucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gNzAlIDcwJSAsXG4gICAgICAgIGRpc2FibGU6ICB1cmwoYXNzZXRzL2VubGFyZ2VfZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyA3MCUgNzAlICxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgem9vbU91dDoge1xuICAgICAgICBlbmFibGU6ICB1cmwoYXNzZXRzL2xlc3MucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gNzAlIDcwJSAsXG4gICAgICAgIGRpc2FibGU6ICB1cmwoYXNzZXRzL2xlc3NfZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyA3MCUgNzAlICxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbn07XG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBjb25maWcodmFsdWU6IGFueSkge1xuICAgIC8vIOWBmuWkhOeQhlxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge1xuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0b3A6ICcwcHgnLFxuICAgICAgYm90dG9tOiAnMTAwcHgnLFxuICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgbGVmdDogJzBweCdcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAnNTBweCcsIC8vIOaAu+WuveW6plxuICAgICAgaGVpZ2h0OiAnNTBweCcgLy8g5oC76auY5bqmXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIHpvb21JbjogJzFweCBzb2xpZCAjMTI5NmRiJyxcbiAgICAgIHpvb21PdXQ6ICcxcHggc29saWQgIzEyOTZkYicsXG4gICAgICBkaXNhYmxlOiAnMXB4IHNvbGlkICNjZGNkY2QnLFxuICAgICAgcmFkaXVzOiAnNXB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdW5jdXJzb3I6ICduby1kcm9wICdcbiAgICB9LFxuICAgIC8vIOaUvuWkp+aMiemSrlxuICAgIHpvb21Jbjoge1xuICAgICAgZW5hYmxlOiAndXJsKGFzc2V0cy9lbmxhcmdlLnBuZyknLCAvLyDmraPluLjlm77moIdcbiAgICAgIGRpc2FibGU6ICd1cmwoYXNzZXRzL2VubGFyZ2VfZC5wbmcpJywgLy8g56aB55So5Zu+5qCHXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSxcbiAgICBiZ1N0eWxlOiB7XG4gICAgICBiYWNrZ3JvdW5kcmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgIGJhY2tncm91bmRwb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kc2l6ZTogJzEwMCUgMTAwJSdcbiAgICB9LFxuICAgIC8vIOe8qeWwj+aMiemSrlxuICAgIHpvb21PdXQ6IHtcbiAgICAgIGVuYWJsZTogJ3VybChhc3NldHMvbGVzcy5wbmcpJyxcbiAgICAgIGRpc2FibGU6ICd1cmwoYXNzZXRzL2xlc3NfZC5wbmcpJyxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH07XG4gIGNoYW5nZVpvb20oZGF0YSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hcC56b29tQnlEZWx0YShkYXRhKTtcbiAgfVxuICAvLyDnm5HlkKznlYzpnaLnvKnmlL7mr5TkvotcbiAgaW5pdE1hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5fbWFwLmdldFZpZXcoKTtcbiAgICB2aWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0IG1heFpvb20gPSB2aWV3LmdldE1heFpvb20oKTtcbiAgICAgIGNvbnN0IG1pblpvb20gPSB2aWV3LmdldE1pblpvb20oKTtcbiAgICAgIGlmICh2aWV3LmdldFpvb20oKSA+PSBtYXhab29tKSB7XG4gICAgICAgIHNlbGYuY29uZmlnLnpvb21Jbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodmlldy5nZXRab29tKCkgPCBtYXhab29tICYmIHZpZXcuZ2V0Wm9vbSgpID4gbWluWm9vbSkge1xuICAgICAgICBzZWxmLmNvbmZpZy56b29tSW4udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHNlbGYuY29uZmlnLnpvb21PdXQudmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmlldy5nZXRab29tKCkgPD0gbWluWm9vbSkge1xuICAgICAgICBzZWxmLmNvbmZpZy56b29tT3V0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=