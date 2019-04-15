/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import Overlay from 'ol/Overlay.js';
export class ScenicBoxComponent {
    constructor() {
        this.mySwiper = {};
        // 默认图层参数
        this.defaultConfig = {};
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
        this.map.on('click', function (evt) {
            // const coordinate = [118.76455002087813, 31.853814741787392];
            // if (evt.coordinate === coordinate) {
            //   self.overlay.setPosition(coordinate);
            // }
            // const coordinate = [118.76455002087813, 31.853814741787392];
            /** @type {?} */
            const coordinate = evt.coordinate;
            // self.content.innerHTML = '';
            self.overlay.setPosition(coordinate);
        });
    }
}
ScenicBoxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-scenic-box',
                template: "<div id=\"popup\" class=\"ol-popup\" [style.background]=\"config.background\">\n  <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\"></a>\n  <div>\n    <div class=\"swiper-container\" [swiper]=\"mySwiper\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" *ngFor=\"let item of config.data\">\n          <img src=\"{{ item.src }}\" class=\"poimg\" />\n        </div>\n      </div>\n      <div class=\"swiper-pagination\"></div>\n      <div class=\"swiper-button-prev\"></div>\n      <div class=\"swiper-button-next\"></div>\n    </div>\n    <div>\n      <p\n        [style.color]=\"config.titleStyle.color\"\n        [style.font-size]=\"config.titleStyle.fontSize\"\n      >\n        {{ config.title }}\n      </p>\n      <p\n        class=\"starLevel\"\n        [style.width]=\"config.starLevel.width\"\n        [style.background]=\"config.starLevel.background\"\n        [ngStyle]=\"{\n          display: config.showGrade === 'false' ? 'none' : 'block'\n        }\"\n      >\n        {{ config.starLevel.name }}\n      </p>\n      <div\n        [ngStyle]=\"{\n          display: config.showDetails === 'false' ? 'none' : 'block'\n        }\"\n      >\n        <div\n          style=\"display: flex; margin: 10px 0px;\"\n          [style.color]=\"config.detailsStyle.color\"\n          [style.font-size]=\"config.detailsStyle.fontSize\"\n          *ngFor=\"let item of config.data1\"\n        >\n          <div class=\"listTitle\">{{ item.name }}\uFF1A</div>\n          <div class=\"listgrade\">{{ item.value }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"popup-content\"></div>\n</div>\n",
                styles: [".ol-popup{position:absolute;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));padding:15px;border:1px solid #ccc;bottom:12px;left:-155px;width:280px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#fff;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#ccc;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;color:#fff;top:-15px;right:-15px;background:#0065b3;width:30px;height:30px;text-align:center;line-height:30px;border-radius:50%}.ol-popup-closer:after{content:'\u2716'}.poimg{width:100%;height:100%}.starLevel{border-radius:3px;height:24px;margin:5px auto;font-family:\u9ED1\u4F53;font-size:18px;color:#fff;text-align:center;line-height:24px;padding:0 5px}.listTitle{width:70px}.listgrade{width:260px}"]
            }] }
];
/** @nocollapse */
ScenicBoxComponent.ctorParameters = () => [];
ScenicBoxComponent.propDecorators = {
    setMap: [{ type: Input, args: ['map',] }],
    config: [{ type: Input, args: ['config',] }],
    sw: [{ type: Input, args: ['sw',] }]
};
if (false) {
    /** @type {?} */
    ScenicBoxComponent.prototype.mySwiper;
    /** @type {?} */
    ScenicBoxComponent.prototype.marker;
    /** @type {?} */
    ScenicBoxComponent.prototype.layer;
    /** @type {?} */
    ScenicBoxComponent.prototype.overlay;
    /** @type {?} */
    ScenicBoxComponent.prototype.popup;
    /** @type {?} */
    ScenicBoxComponent.prototype.content;
    /** @type {?} */
    ScenicBoxComponent.prototype.container;
    /** @type {?} */
    ScenicBoxComponent.prototype.closer;
    /** @type {?} */
    ScenicBoxComponent.prototype.layers;
    /** @type {?} */
    ScenicBoxComponent.prototype.title;
    /** @type {?} */
    ScenicBoxComponent.prototype.starLevel;
    /**
     * @type {?}
     * @private
     */
    ScenicBoxComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    ScenicBoxComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    ScenicBoxComponent.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    ScenicBoxComponent.prototype._swiper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmljLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW5mb3JtYXRpb24tYm94L3NjZW5pYy1ib3gvc2NlbmljLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFhcEMsTUFBTSxPQUFPLGtCQUFrQjtJQWE3QjtRQVhPLGFBQVEsR0FBMEIsRUFBRSxDQUFDOztRQWtDcEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUF0QnpCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUNELElBQ0ksTUFBTSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBSUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFDSSxNQUFNLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUtELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQ0ksRUFBRSxDQUFDLEtBQVU7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdkIsT0FBTyxFQUFFLElBQUk7WUFDYixnQkFBZ0IsRUFBRTtnQkFDaEIsUUFBUSxFQUFFLEdBQUc7YUFDZDtTQUNGLENBQUMsQ0FBQzs7Y0FDRyxJQUFJLEdBQUcsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUc7Ozs7Ozs7a0JBTTFCLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVTtZQUNqQywrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFyRkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw4bkRBQTBDOzthQUUzQzs7Ozs7cUJBaUJFLEtBQUssU0FBQyxLQUFLO3FCQWNYLEtBQUssU0FBQyxRQUFRO2lCQVdkLEtBQUssU0FBQyxJQUFJOzs7O0lBdkNYLHNDQUE0Qzs7SUFDNUMsb0NBQVk7O0lBQ1osbUNBQVc7O0lBQ1gscUNBQWE7O0lBQ2IsbUNBQVc7O0lBQ1gscUNBQWE7O0lBQ2IsdUNBQWU7O0lBQ2Ysb0NBQVk7O0lBQ1osb0NBQVk7O0lBQ1osbUNBQVc7O0lBQ1gsdUNBQWU7Ozs7O0lBWWYsaUNBQWlCOzs7OztJQUVqQixxQ0FBcUI7Ozs7O0lBVXJCLDJDQUEyQjs7Ozs7SUFDM0IscUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICdvbC9PdmVybGF5LmpzJztcbmltcG9ydCBWaWV3IGZyb20gJ29sL1ZpZXcuanMnO1xuaW1wb3J0IHsgdG9TdHJpbmdIRE1TIH0gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG5pbXBvcnQgVGlsZUxheWVyIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IHsgZnJvbUxvbkxhdCwgdG9Mb25MYXQgfSBmcm9tICdvbC9wcm9qLmpzJztcbmltcG9ydCBPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgeyBTd2lwZXJDb25maWdJbnRlcmZhY2UgfSBmcm9tICduZ3gtc3dpcGVyLXdyYXBwZXInO1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLXNjZW5pYy1ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NlbmljLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjZW5pYy1ib3guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjZW5pY0JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG15U3dpcGVyOiBTd2lwZXJDb25maWdJbnRlcmZhY2UgPSB7fTtcbiAgbWFya2VyOiBhbnk7XG4gIGxheWVyOiBhbnk7XG4gIG92ZXJsYXk6IGFueTtcbiAgcG9wdXA6IGFueTtcbiAgY29udGVudDogYW55O1xuICBjb250YWluZXI6IGFueTtcbiAgY2xvc2VyOiBhbnk7XG4gIGxheWVyczogYW55O1xuICB0aXRsZTogYW55O1xuICBzdGFyTGV2ZWw6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cbiAgQElucHV0KCdtYXAnKVxuICBzZXQgc2V0TWFwKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn5bey57uR5a6aIG1hcCDnu4Tku7Yg5a6e5L6LJyk7XG4gICAgdGhpcy5tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIG1hcDogYW55O1xuXG4gIHByaXZhdGUgX2NvbmZpZzogYW55O1xuICBnZXQgY29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBjb25maWcodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuICB9XG5cbiAgLy8g6buY6K6k5Zu+5bGC5Y+C5pWwXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHt9O1xuICBwcml2YXRlIF9zd2lwZXI6IGFueTtcbiAgZ2V0IHN3KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3aXBlcjtcbiAgfVxuICBASW5wdXQoJ3N3JylcbiAgc2V0IHN3KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9zd2lwZXIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm15U3dpcGVyLCB2YWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIHRoaXMuaW5pdFN3aXBlcigpO1xuICB9XG4gIGluaXRTd2lwZXIoKSB7XG4gICAgdGhpcy5teVN3aXBlciA9IHRoaXMuX3N3aXBlcjtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRTd2lwZXIoKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY29udGVudCcpO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XG4gICAgdGhpcy5jbG9zZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2xvc2VyJyk7XG4gICAgdGhpcy5vdmVybGF5ID0gbmV3IE92ZXJsYXkoe1xuICAgICAgZWxlbWVudDogdGhpcy5jb250YWluZXIsXG4gICAgICBhdXRvUGFuOiB0cnVlLFxuICAgICAgYXV0b1BhbkFuaW1hdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMjUwXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jbG9zZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYub3ZlcmxheS5zZXRQb3NpdGlvbih1bmRlZmluZWQpO1xuICAgICAgc2VsZi5jbG9zZXIuYmx1cigpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5tYXAuYWRkT3ZlcmxheSh0aGlzLm92ZXJsYXkpO1xuICAgIHRoaXMubWFwLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIGNvbnN0IGNvb3JkaW5hdGUgPSBbMTE4Ljc2NDU1MDAyMDg3ODEzLCAzMS44NTM4MTQ3NDE3ODczOTJdO1xuICAgICAgLy8gaWYgKGV2dC5jb29yZGluYXRlID09PSBjb29yZGluYXRlKSB7XG4gICAgICAvLyAgIHNlbGYub3ZlcmxheS5zZXRQb3NpdGlvbihjb29yZGluYXRlKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGNvbnN0IGNvb3JkaW5hdGUgPSBbMTE4Ljc2NDU1MDAyMDg3ODEzLCAzMS44NTM4MTQ3NDE3ODczOTJdO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGV2dC5jb29yZGluYXRlO1xuICAgICAgLy8gc2VsZi5jb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgc2VsZi5vdmVybGF5LnNldFBvc2l0aW9uKGNvb3JkaW5hdGUpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==