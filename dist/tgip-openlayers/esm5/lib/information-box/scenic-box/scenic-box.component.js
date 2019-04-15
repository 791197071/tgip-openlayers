/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import Overlay from 'ol/Overlay.js';
var ScenicBoxComponent = /** @class */ (function () {
    function ScenicBoxComponent() {
        this.mySwiper = {};
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    Object.defineProperty(ScenicBoxComponent.prototype, "setMap", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            console.log('已绑定 map 组件 实例');
            this.map = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScenicBoxComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._config = Object.assign({}, this.defaultConfig, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScenicBoxComponent.prototype, "sw", {
        get: /**
         * @return {?}
         */
        function () {
            return this._swiper;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._swiper = Object.assign({}, this.mySwiper, value);
            console.log(value);
            this.initSwiper();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScenicBoxComponent.prototype.initSwiper = /**
     * @return {?}
     */
    function () {
        this.mySwiper = this._swiper;
    };
    /**
     * @return {?}
     */
    ScenicBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        var self = this;
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
            var coordinate = evt.coordinate;
            // self.content.innerHTML = '';
            self.overlay.setPosition(coordinate);
        });
    };
    ScenicBoxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-scenic-box',
                    template: "<div id=\"popup\" class=\"ol-popup\" [style.background]=\"config.background\">\n  <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\"></a>\n  <div>\n    <div class=\"swiper-container\" [swiper]=\"mySwiper\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" *ngFor=\"let item of config.data\">\n          <img src=\"{{ item.src }}\" class=\"poimg\" />\n        </div>\n      </div>\n      <div class=\"swiper-pagination\"></div>\n      <div class=\"swiper-button-prev\"></div>\n      <div class=\"swiper-button-next\"></div>\n    </div>\n    <div>\n      <p\n        [style.color]=\"config.titleStyle.color\"\n        [style.font-size]=\"config.titleStyle.fontSize\"\n      >\n        {{ config.title }}\n      </p>\n      <p\n        class=\"starLevel\"\n        [style.width]=\"config.starLevel.width\"\n        [style.background]=\"config.starLevel.background\"\n        [ngStyle]=\"{\n          display: config.showGrade === 'false' ? 'none' : 'block'\n        }\"\n      >\n        {{ config.starLevel.name }}\n      </p>\n      <div\n        [ngStyle]=\"{\n          display: config.showDetails === 'false' ? 'none' : 'block'\n        }\"\n      >\n        <div\n          style=\"display: flex; margin: 10px 0px;\"\n          [style.color]=\"config.detailsStyle.color\"\n          [style.font-size]=\"config.detailsStyle.fontSize\"\n          *ngFor=\"let item of config.data1\"\n        >\n          <div class=\"listTitle\">{{ item.name }}\uFF1A</div>\n          <div class=\"listgrade\">{{ item.value }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"popup-content\"></div>\n</div>\n",
                    styles: [".ol-popup{position:absolute;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));padding:15px;border:1px solid #ccc;bottom:12px;left:-155px;width:280px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#fff;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#ccc;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;color:#fff;top:-15px;right:-15px;background:#0065b3;width:30px;height:30px;text-align:center;line-height:30px;border-radius:50%}.ol-popup-closer:after{content:'\u2716'}.poimg{width:100%;height:100%}.starLevel{border-radius:3px;height:24px;margin:5px auto;font-family:\u9ED1\u4F53;font-size:18px;color:#fff;text-align:center;line-height:24px;padding:0 5px}.listTitle{width:70px}.listgrade{width:260px}"]
                }] }
    ];
    /** @nocollapse */
    ScenicBoxComponent.ctorParameters = function () { return []; };
    ScenicBoxComponent.propDecorators = {
        setMap: [{ type: Input, args: ['map',] }],
        config: [{ type: Input, args: ['config',] }],
        sw: [{ type: Input, args: ['sw',] }]
    };
    return ScenicBoxComponent;
}());
export { ScenicBoxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmljLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW5mb3JtYXRpb24tYm94L3NjZW5pYy1ib3gvc2NlbmljLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFPcEM7SUFtQkU7UUFYTyxhQUFRLEdBQTBCLEVBQUUsQ0FBQzs7UUFrQ3BDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBdEJ6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUNELHNCQUNJLHNDQUFNOzs7OztRQURWLFVBQ1csS0FBSztZQUNkLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsT0FBTzthQUNSO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHNDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUNXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUpBO0lBU0Qsc0JBQUksa0NBQUU7Ozs7UUFBTjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQ08sS0FBVTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7T0FOQTs7OztJQU9ELHVDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7O0lBQ0QscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsZ0JBQWdCLEVBQUU7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHO2FBQ2Q7U0FDRixDQUFDLENBQUM7O1lBQ0csSUFBSSxHQUFHLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHOzs7Ozs7O2dCQU0xQixVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVU7WUFDakMsK0JBQStCO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckZGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsOG5EQUEwQzs7aUJBRTNDOzs7Ozt5QkFpQkUsS0FBSyxTQUFDLEtBQUs7eUJBY1gsS0FBSyxTQUFDLFFBQVE7cUJBV2QsS0FBSyxTQUFDLElBQUk7O0lBd0NiLHlCQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0FqRlksa0JBQWtCOzs7SUFFN0Isc0NBQTRDOztJQUM1QyxvQ0FBWTs7SUFDWixtQ0FBVzs7SUFDWCxxQ0FBYTs7SUFDYixtQ0FBVzs7SUFDWCxxQ0FBYTs7SUFDYix1Q0FBZTs7SUFDZixvQ0FBWTs7SUFDWixvQ0FBWTs7SUFDWixtQ0FBVzs7SUFDWCx1Q0FBZTs7Ozs7SUFZZixpQ0FBaUI7Ozs7O0lBRWpCLHFDQUFxQjs7Ozs7SUFVckIsMkNBQTJCOzs7OztJQUMzQixxQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBPdmVybGF5IGZyb20gJ29sL092ZXJsYXkuanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgeyB0b1N0cmluZ0hETVMgfSBmcm9tICdvbC9jb29yZGluYXRlLmpzJztcbmltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgeyBmcm9tTG9uTGF0LCB0b0xvbkxhdCB9IGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IE9TTSBmcm9tICdvbC9zb3VyY2UvT1NNLmpzJztcbmltcG9ydCB7IFN3aXBlckNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJ25neC1zd2lwZXItd3JhcHBlcic7XG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtc2NlbmljLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2VuaWMtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NlbmljLWJveC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NlbmljQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgbXlTd2lwZXI6IFN3aXBlckNvbmZpZ0ludGVyZmFjZSA9IHt9O1xuICBtYXJrZXI6IGFueTtcbiAgbGF5ZXI6IGFueTtcbiAgb3ZlcmxheTogYW55O1xuICBwb3B1cDogYW55O1xuICBjb250ZW50OiBhbnk7XG4gIGNvbnRhaW5lcjogYW55O1xuICBjbG9zZXI6IGFueTtcbiAgbGF5ZXJzOiBhbnk7XG4gIHRpdGxlOiBhbnk7XG4gIHN0YXJMZXZlbDogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuICBASW5wdXQoJ21hcCcpXG4gIHNldCBzZXRNYXAodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCflt7Lnu5HlrpogbWFwIOe7hOS7tiDlrp7kvosnKTtcbiAgICB0aGlzLm1hcCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgbWFwOiBhbnk7XG5cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cblxuICAvLyDpu5jorqTlm77lsYLlj4LmlbBcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge307XG4gIHByaXZhdGUgX3N3aXBlcjogYW55O1xuICBnZXQgc3coKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc3dpcGVyO1xuICB9XG4gIEBJbnB1dCgnc3cnKVxuICBzZXQgc3codmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3N3aXBlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubXlTd2lwZXIsIHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgdGhpcy5pbml0U3dpcGVyKCk7XG4gIH1cbiAgaW5pdFN3aXBlcigpIHtcbiAgICB0aGlzLm15U3dpcGVyID0gdGhpcy5fc3dpcGVyO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdFN3aXBlcigpO1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jb250ZW50Jyk7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbiAgICB0aGlzLmNsb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jbG9zZXInKTtcbiAgICB0aGlzLm92ZXJsYXkgPSBuZXcgT3ZlcmxheSh7XG4gICAgICBlbGVtZW50OiB0aGlzLmNvbnRhaW5lcixcbiAgICAgIGF1dG9QYW46IHRydWUsXG4gICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLmNsb3Nlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5vdmVybGF5LnNldFBvc2l0aW9uKHVuZGVmaW5lZCk7XG4gICAgICBzZWxmLmNsb3Nlci5ibHVyKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLm1hcC5hZGRPdmVybGF5KHRoaXMub3ZlcmxheSk7XG4gICAgdGhpcy5tYXAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gY29uc3QgY29vcmRpbmF0ZSA9IFsxMTguNzY0NTUwMDIwODc4MTMsIDMxLjg1MzgxNDc0MTc4NzM5Ml07XG4gICAgICAvLyBpZiAoZXZ0LmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGUpIHtcbiAgICAgIC8vICAgc2VsZi5vdmVybGF5LnNldFBvc2l0aW9uKGNvb3JkaW5hdGUpO1xuICAgICAgLy8gfVxuICAgICAgLy8gY29uc3QgY29vcmRpbmF0ZSA9IFsxMTguNzY0NTUwMDIwODc4MTMsIDMxLjg1MzgxNDc0MTc4NzM5Ml07XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gZXZ0LmNvb3JkaW5hdGU7XG4gICAgICAvLyBzZWxmLmNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBzZWxmLm92ZXJsYXkuc2V0UG9zaXRpb24oY29vcmRpbmF0ZSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19