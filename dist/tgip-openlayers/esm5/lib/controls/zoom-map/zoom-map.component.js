/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectorRef, ViewChild, Output, EventEmitter } from '@angular/core';
var ZoomMapComponent = /** @class */ (function () {
    function ZoomMapComponent(changeDetectorRef) {
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
    Object.defineProperty(ZoomMapComponent.prototype, "map", {
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
            console.log('已绑定 map 实例');
            this._map = value;
            this.initMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomMapComponent.prototype, "config", {
        // 设置默认值
        get: 
        // 设置默认值
        /**
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
          position: {
              top: 0px,
              bottom: 100px,
              right: 0px,
              left: 0px，
          },
          size: {
              width:  50px ,
              height:  50px，
          },
          border: {
              zoomIn:  1px solid #1296db ,
              zoomOut:  1px solid #1296db ,
              disable:  1px solid #cdcdcd ,
              radius:  5px ,
              cursor:  pointer ,
              uncursor:  no-drop，
          },
          zoomIn: {
              enable:  url(assets/enlarge.png) no-repeat center / 70% 70% ,
              disable:  url(assets/enlarge_d.png) no-repeat center / 70% 70% ,
              visible: true
          },
          zoomOut: {
              enable:  url(assets/less.png) no-repeat center / 70% 70% ,
              disable:  url(assets/less_d.png) no-repeat center / 70% 70% ,
              visible: true
          }
      };
         */
        set: /**
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
        function (value) {
            // 做处理
            this._config = Object.assign({}, this.defaultConfig, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    ZoomMapComponent.prototype.changeZoom = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!this._map) {
            return;
        }
        this._map.zoomByDelta(data);
    };
    // 监听界面缩放比例
    // 监听界面缩放比例
    /**
     * @return {?}
     */
    ZoomMapComponent.prototype.initMap = 
    // 监听界面缩放比例
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var view = this._map.getView();
        view.on('change:resolution', function (e) {
            /** @type {?} */
            var maxZoom = view.getMaxZoom();
            /** @type {?} */
            var minZoom = view.getMinZoom();
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
    };
    /**
     * @return {?}
     */
    ZoomMapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ZoomMapComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-zoom',
                    template: "<div\n  class=\"zoomMap\"\n  [style.bottom]=\"config.position.bottom\"\n  [style.right]=\"config.position.right\"\n>\n  <span\n    class=\"maxZoom\"\n    (click)=\"changeZoom(1)\"\n    [ngStyle]=\"{\n      'background-image':\n        config.zoomIn.visible === true\n          ? config.zoomIn.enable\n          : config.zoomIn.disable,\n      'background-repeat':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundrepeat\n          : config.bgStyle.backgroundrepeat,\n      'background-position':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundposition\n          : config.bgStyle.backgroundposition,\n      'background-size':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundsize\n          : config.bgStyle.backgroundsize,\n      border:\n        config.zoomIn.visible === true\n          ? config.border.zoomIn\n          : config.border.disable,\n      cursor:\n        config.zoomIn.visible === true\n          ? config.border.cursor\n          : config.border.uncursor\n    }\"\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.line-height]=\"config.size.height\"\n    [style.border]=\"config.border.zoomIn\"\n    [style.border-radius]=\"config.border.radius\"\n  ></span>\n  <span\n    class=\"minZoom\"\n    (click)=\"changeZoom(-1)\"\n    [ngStyle]=\"{\n      'background-image':\n        config.zoomOut.visible === true\n          ? config.zoomOut.enable\n          : config.zoomOut.disable,\n      'background-repeat':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundrepeat\n          : config.bgStyle.backgroundrepeat,\n      'background-position':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundposition\n          : config.bgStyle.backgroundposition,\n      'background-size':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundsize\n          : config.bgStyle.backgroundsize,\n      border:\n        config.zoomOut.visible === true\n          ? config.border.zoomOut\n          : config.border.disable,\n      cursor:\n        config.zoomOut.visible === true\n          ? config.border.cursor\n          : config.border.uncursor\n    }\"\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.line-height]=\"config.size.height\"\n    [style.border]=\"config.border.zoomOut\"\n    [style.border-radius]=\"config.border.radius\"\n  ></span>\n</div>\n",
                    styles: [".zoomMap{position:absolute;z-index:1;cursor:pointer}.zoomMap span{display:block;text-align:center}.maxZoom{margin-bottom:10px}"]
                }] }
    ];
    /** @nocollapse */
    ZoomMapComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    ZoomMapComponent.propDecorators = {
        outer: [{ type: Output }],
        map: [{ type: Input, args: ['map',] }],
        mapconfig: [{ type: ViewChild, args: ['myMap',] }],
        config: [{ type: Input, args: ['config',] }]
    };
    return ZoomMapComponent;
}());
export { ZoomMapComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3pvb20tbWFwL3pvb20tbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBMkJFLDBCQUFtQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7OztRQWhCckMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFpRTdDLGtCQUFhLEdBQUc7WUFDdEIsUUFBUSxFQUFFO2dCQUNSLEdBQUcsRUFBRSxLQUFLO2dCQUNWLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU07O2dCQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTthQUN0QjtZQUNELE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsU0FBUztnQkFDakIsUUFBUSxFQUFFLFVBQVU7YUFDckI7O1lBRUQsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSx5QkFBeUI7O2dCQUNqQyxPQUFPLEVBQUUsMkJBQTJCOztnQkFDcEMsT0FBTyxFQUFFLElBQUk7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0IsRUFBRSxXQUFXO2dCQUM3QixrQkFBa0IsRUFBRSxRQUFRO2dCQUM1QixjQUFjLEVBQUUsV0FBVzthQUM1Qjs7WUFFRCxP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VSw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWFwL21hcC5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLXpvb20nLFxuICB0ZW1wbGF0ZVVybDogJy4vem9vbS1tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi96b29tLW1hcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgWm9vbU1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiDovpPlh7rlj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IG91dGVyXG4gICAqL1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBvdXRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAvKipcbiAgICog5Zyw5Zu+5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBtYXBcbiAgICovXG4gIEBJbnB1dCgnbWFwJylcbiAgc2V0IG1hcCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn5bey57uR5a6aIG1hcCDlrp7kvosnKTtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB0aGlzLmluaXRNYXAoKTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IGFueTtcbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuICBAVmlld0NoaWxkKCdteU1hcCcpIG1hcGNvbmZpZztcbiAgLy8g6K6+572u6buY6K6k5YC8XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKlxuICAgKiDlm77lsYLmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wOiAwcHgsXG4gICAgICAgIGJvdHRvbTogMTAwcHgsXG4gICAgICAgIHJpZ2h0OiAwcHgsXG4gICAgICAgIGxlZnQ6IDBweO+8jFxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgICB3aWR0aDogIDUwcHggLFxuICAgICAgICBoZWlnaHQ6ICA1MHB477yMXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgICAgem9vbUluOiAgMXB4IHNvbGlkICMxMjk2ZGIgLFxuICAgICAgICB6b29tT3V0OiAgMXB4IHNvbGlkICMxMjk2ZGIgLFxuICAgICAgICBkaXNhYmxlOiAgMXB4IHNvbGlkICNjZGNkY2QgLFxuICAgICAgICByYWRpdXM6ICA1cHggLFxuICAgICAgICBjdXJzb3I6ICBwb2ludGVyICxcbiAgICAgICAgdW5jdXJzb3I6ICBuby1kcm9w77yMXG4gICAgfSxcbiAgICB6b29tSW46IHtcbiAgICAgICAgZW5hYmxlOiAgdXJsKGFzc2V0cy9lbmxhcmdlLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIDcwJSA3MCUgLFxuICAgICAgICBkaXNhYmxlOiAgdXJsKGFzc2V0cy9lbmxhcmdlX2QucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gNzAlIDcwJSAsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LFxuICAgIHpvb21PdXQ6IHtcbiAgICAgICAgZW5hYmxlOiAgdXJsKGFzc2V0cy9sZXNzLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIDcwJSA3MCUgLFxuICAgICAgICBkaXNhYmxlOiAgdXJsKGFzc2V0cy9sZXNzX2QucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gNzAlIDcwJSAsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG59O1xuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgY29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICAvLyDlgZrlpITnkIZcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGJvdHRvbTogJzEwMHB4JyxcbiAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgIGxlZnQ6ICcwcHgnXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogJzUwcHgnLCAvLyDmgLvlrr3luqZcbiAgICAgIGhlaWdodDogJzUwcHgnIC8vIOaAu+mrmOW6plxuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICB6b29tSW46ICcxcHggc29saWQgIzEyOTZkYicsXG4gICAgICB6b29tT3V0OiAnMXB4IHNvbGlkICMxMjk2ZGInLFxuICAgICAgZGlzYWJsZTogJzFweCBzb2xpZCAjY2RjZGNkJyxcbiAgICAgIHJhZGl1czogJzVweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHVuY3Vyc29yOiAnbm8tZHJvcCAnXG4gICAgfSxcbiAgICAvLyDmlL7lpKfmjInpkq5cbiAgICB6b29tSW46IHtcbiAgICAgIGVuYWJsZTogJ3VybChhc3NldHMvZW5sYXJnZS5wbmcpJywgLy8g5q2j5bi45Zu+5qCHXG4gICAgICBkaXNhYmxlOiAndXJsKGFzc2V0cy9lbmxhcmdlX2QucG5nKScsIC8vIOemgeeUqOWbvuagh1xuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgYmdTdHlsZToge1xuICAgICAgYmFja2dyb3VuZHJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICBiYWNrZ3JvdW5kcG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZHNpemU6ICcxMDAlIDEwMCUnXG4gICAgfSxcbiAgICAvLyDnvKnlsI/mjInpkq5cbiAgICB6b29tT3V0OiB7XG4gICAgICBlbmFibGU6ICd1cmwoYXNzZXRzL2xlc3MucG5nKScsXG4gICAgICBkaXNhYmxlOiAndXJsKGFzc2V0cy9sZXNzX2QucG5nKScsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfVxuICB9O1xuICBjaGFuZ2Vab29tKGRhdGEpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX21hcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYXAuem9vbUJ5RGVsdGEoZGF0YSk7XG4gIH1cbiAgLy8g55uR5ZCs55WM6Z2i57yp5pS+5q+U5L6LXG4gIGluaXRNYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuX21hcC5nZXRWaWV3KCk7XG4gICAgdmlldy5vbignY2hhbmdlOnJlc29sdXRpb24nLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBtYXhab29tID0gdmlldy5nZXRNYXhab29tKCk7XG4gICAgICBjb25zdCBtaW5ab29tID0gdmlldy5nZXRNaW5ab29tKCk7XG4gICAgICBpZiAodmlldy5nZXRab29tKCkgPj0gbWF4Wm9vbSkge1xuICAgICAgICBzZWxmLmNvbmZpZy56b29tSW4udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHZpZXcuZ2V0Wm9vbSgpIDwgbWF4Wm9vbSAmJiB2aWV3LmdldFpvb20oKSA+IG1pblpvb20pIHtcbiAgICAgICAgc2VsZi5jb25maWcuem9vbUluLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBzZWxmLmNvbmZpZy56b29tT3V0LnZpc2libGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZpZXcuZ2V0Wm9vbSgpIDw9IG1pblpvb20pIHtcbiAgICAgICAgc2VsZi5jb25maWcuem9vbU91dC52aXNpYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19