/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import Overlay from 'ol/Overlay.js';
export class SpotBoxComponent {
    constructor() {
        this.mySwiper = {};
        // 默认图层参数
        this.defaultConfig = {
            title: '苏A123456',
            titleStyle: {
                background: 'gainsboro',
                fontSize: '18px',
                color: '#000'
            },
            dataStyle: {
                fontSize: '16px',
                color: '#000'
            },
            data: [
                {
                    name: '车牌号码：苏A123456',
                },
                {
                    name: '车牌号码：苏A123456',
                },
                {
                    name: '车牌号码：苏A123456',
                },
                {
                    name: '车牌号码：苏A123456',
                },
                {
                    name: '车牌号码：苏A123456',
                },
                {
                    name: '车牌号码：苏A123456',
                }
            ]
        };
        this.config = this.defaultConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setMap(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this.map = value;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    get sw() {
        return this._swiper;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sw(value) {
        this._swiper = Object.assign({}, this.mySwiper, value);
        console.log(value);
        this.initSwiper();
    }
    /**
     * @return {?}
     */
    initSwiper() {
        this.mySwiper = this._swiper;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initSwiper();
        this.content = document.getElementById('popup-content');
        this.container = document.getElementById('popup');
        this.closer = document.getElementById('popup-closer');
        this.overlay = new Overlay({
            element: this.container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        });
        /** @type {?} */
        const self = this;
        this.closer.onclick = function () {
            self.overlay.setPosition(undefined);
            self.closer.blur();
            return false;
        };
        this.map.addOverlay(this.overlay);
        // const coordinate = [118.82210323395667, 31.79037236271944];
        // // self.content.innerHTML = '';
        // self.overlay.setPosition(coordinate);
        this.map.on('click', function (evt) {
            /** @type {?} */
            const coordinate = evt.coordinate;
            // self.content.innerHTML = '';
            self.overlay.setPosition(coordinate);
        });
    }
}
SpotBoxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-spot-box',
                template: "<div id=\"popup\" class=\"ol-popup\">\n  <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\"></a>\n  <div id=\"popup-content\">\n    <div>\n      <div\n        class=\"titleStyle\"\n        [style.background]=\"config.titleStyle.background\"\n        [style.color]=\"config.titleStyle.color\"\n        [style.font-size]=\"config.titleStyle.fontSize\"\n      >\n        {{ config.title }}\n      </div>\n      <div class=\"bodyStyle\">\n        <ul\n          style=\" padding: 0;width: 100%; height: 100%; overflow: hidden;\"\n          [style.color]=\"config.dataStyle.color\"\n          [style.font-size]=\"config.dataStyle.fontSize\"\n        >\n          <li *ngFor=\"let item of config.data\">\n            {{ item.name }}\n          </li>\n        </ul>\n      </div>\n      <div style=\" width: 220px;margin: 0 auto;margin-bottom: 15px;\">\n        <button class=\"footButton\">\u5F53\u65E5\u8F68\u8FF9</button>\n        <button class=\"footButton\">\u53D1\u9001\u6D88\u606F</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".ol-popup{position:absolute;background-color:#fff;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));border:1px solid #ccc;bottom:12px;left:-225px;width:450px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#fff;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#ccc;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;top:2px;right:8px}.ol-popup-closer:after{content:'\u2716'}.titleStyle{height:40px;line-height:40px;padding-left:20px}.bodyStyle{height:auto;background:#fff;margin:0 30px;overflow:hidden}.bodyStyle ul li{float:left;width:170px;list-style:none;margin:5px 12px}.footButton{width:80px;height:30px;outline:0;background:#fff;color:#21aa93;border:1px solid #21aa93;border-radius:5px;margin:0 15px;cursor:pointer}.footButton:active{background:#21aa93;color:#fff}"]
            }] }
];
/** @nocollapse */
SpotBoxComponent.ctorParameters = () => [];
SpotBoxComponent.propDecorators = {
    setMap: [{ type: Input, args: ['map',] }],
    config: [{ type: Input, args: ['config',] }],
    sw: [{ type: Input, args: ['sw',] }]
};
if (false) {
    /** @type {?} */
    SpotBoxComponent.prototype.mySwiper;
    /** @type {?} */
    SpotBoxComponent.prototype.marker;
    /** @type {?} */
    SpotBoxComponent.prototype.layer;
    /** @type {?} */
    SpotBoxComponent.prototype.overlay;
    /** @type {?} */
    SpotBoxComponent.prototype.popup;
    /** @type {?} */
    SpotBoxComponent.prototype.content;
    /** @type {?} */
    SpotBoxComponent.prototype.container;
    /** @type {?} */
    SpotBoxComponent.prototype.closer;
    /** @type {?} */
    SpotBoxComponent.prototype.layers;
    /** @type {?} */
    SpotBoxComponent.prototype.title;
    /** @type {?} */
    SpotBoxComponent.prototype.starLevel;
    /**
     * @type {?}
     * @private
     */
    SpotBoxComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    SpotBoxComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    SpotBoxComponent.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    SpotBoxComponent.prototype._swiper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2luZm9ybWF0aW9uLWJveC9zcG90LWJveC9zcG90LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFhcEMsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQjtRQVhPLGFBQVEsR0FBMEIsRUFBRSxDQUFDOztRQWtDcEMsa0JBQWEsR0FBRztZQUN0QixLQUFLLEVBQUUsVUFBVTtZQUNqQixVQUFVLEVBQUU7Z0JBQ1YsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxNQUFNO2dCQUNoQixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0QsSUFBSSxFQUFFO2dCQUNKO29CQUNFLElBQUksRUFBRSxlQUFlO2lCQUN0QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsZUFBZTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGVBQWU7aUJBQ3RCO2dCQUNEO29CQUNFLElBQUksRUFBRSxlQUFlO2lCQUN0QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsZUFBZTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGVBQWU7aUJBQ3RCO2FBQ0Y7U0FDRixDQUFDO1FBckRBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUNELElBQ0ksTUFBTSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztR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dXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBPdmVybGF5IGZyb20gJ29sL092ZXJsYXkuanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgeyB0b1N0cmluZ0hETVMgfSBmcm9tICdvbC9jb29yZGluYXRlLmpzJztcbmltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgeyBmcm9tTG9uTGF0LCB0b0xvbkxhdCB9IGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IE9TTSBmcm9tICdvbC9zb3VyY2UvT1NNLmpzJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJ25neC1zd2lwZXItd3JhcHBlcic7XG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtc3BvdC1ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BvdC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcG90LWJveC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3BvdEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG15U3dpcGVyOiBTd2lwZXJDb25maWdJbnRlcmZhY2UgPSB7fTtcbiAgbWFya2VyOiBhbnk7XG4gIGxheWVyOiBhbnk7XG4gIG92ZXJsYXk6IGFueTtcbiAgcG9wdXA6IGFueTtcbiAgY29udGVudDogYW55O1xuICBjb250YWluZXI6IGFueTtcbiAgY2xvc2VyOiBhbnk7XG4gIGxheWVyczogYW55O1xuICB0aXRsZTogYW55O1xuICBzdGFyTGV2ZWw6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cbiAgQElucHV0KCdtYXAnKVxuICBzZXQgc2V0TWFwKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn5bey57uR5a6aIG1hcCDnu4Tku7Yg5a6e5L6LJyk7XG4gICAgdGhpcy5tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIG1hcDogYW55O1xuXG4gIHByaXZhdGUgX2NvbmZpZzogYW55O1xuICBnZXQgY29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBjb25maWcodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuICB9XG5cbiAgLy8g6buY6K6k5Zu+5bGC5Y+C5pWwXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICB0aXRsZTogJ+iLj0ExMjM0NTYnLFxuICAgIHRpdGxlU3R5bGU6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdnYWluc2Jvcm8nLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGNvbG9yOiAnIzAwMCdcbiAgICB9LFxuICAgIGRhdGFTdHlsZToge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGNvbG9yOiAnIzAwMCdcbiAgICB9LFxuICAgIGRhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+i9pueJjOWPt+egge+8muiLj0ExMjM0NTYnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+i9pueJjOWPt+egge+8muiLj0ExMjM0NTYnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+i9pueJjOWPt+egge+8muiLj0ExMjM0NTYnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+i9pueJjOWPt+egge+8muiLj0ExMjM0NTYnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+i9pueJjOWPt+egge+8muiLj0ExMjM0NTYnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+i9pueJjOWPt+egge+8muiLj0ExMjM0NTYnLFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBwcml2YXRlIF9zd2lwZXI6IGFueTtcbiAgZ2V0IHN3KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3aXBlcjtcbiAgfVxuICBASW5wdXQoJ3N3JylcbiAgc2V0IHN3KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9zd2lwZXIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm15U3dpcGVyLCB2YWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIHRoaXMuaW5pdFN3aXBlcigpO1xuICB9XG4gIGluaXRTd2lwZXIoKSB7XG4gICAgdGhpcy5teVN3aXBlciA9IHRoaXMuX3N3aXBlcjtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRTd2lwZXIoKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY29udGVudCcpO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XG4gICAgdGhpcy5jbG9zZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2xvc2VyJyk7XG4gICAgdGhpcy5vdmVybGF5ID0gbmV3IE92ZXJsYXkoe1xuICAgICAgZWxlbWVudDogdGhpcy5jb250YWluZXIsXG4gICAgICBhdXRvUGFuOiB0cnVlLFxuICAgICAgYXV0b1BhbkFuaW1hdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMjUwXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jbG9zZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYub3ZlcmxheS5zZXRQb3NpdGlvbih1bmRlZmluZWQpO1xuICAgICAgc2VsZi5jbG9zZXIuYmx1cigpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5tYXAuYWRkT3ZlcmxheSh0aGlzLm92ZXJsYXkpO1xuXG4gICAgLy8gY29uc3QgY29vcmRpbmF0ZSA9IFsxMTguODIyMTAzMjMzOTU2NjcsIDMxLjc5MDM3MjM2MjcxOTQ0XTtcbiAgICAvLyAvLyBzZWxmLmNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gc2VsZi5vdmVybGF5LnNldFBvc2l0aW9uKGNvb3JkaW5hdGUpO1xuICAgIHRoaXMubWFwLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBldnQuY29vcmRpbmF0ZTtcbiAgICAgIC8vIHNlbGYuY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHNlbGYub3ZlcmxheS5zZXRQb3NpdGlvbihjb29yZGluYXRlKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=