/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import Overlay from 'ol/Overlay.js';
var SpotBoxComponent = /** @class */ (function () {
    function SpotBoxComponent() {
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
    Object.defineProperty(SpotBoxComponent.prototype, "setMap", {
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
    Object.defineProperty(SpotBoxComponent.prototype, "config", {
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
    Object.defineProperty(SpotBoxComponent.prototype, "sw", {
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
    SpotBoxComponent.prototype.initSwiper = /**
     * @return {?}
     */
    function () {
        this.mySwiper = this._swiper;
    };
    /**
     * @return {?}
     */
    SpotBoxComponent.prototype.ngOnInit = /**
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
        // const coordinate = [118.82210323395667, 31.79037236271944];
        // // self.content.innerHTML = '';
        // self.overlay.setPosition(coordinate);
        this.map.on('click', function (evt) {
            /** @type {?} */
            var coordinate = evt.coordinate;
            // self.content.innerHTML = '';
            self.overlay.setPosition(coordinate);
        });
    };
    SpotBoxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-spot-box',
                    template: "<div id=\"popup\" class=\"ol-popup\">\n  <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\"></a>\n  <div id=\"popup-content\">\n    <div>\n      <div\n        class=\"titleStyle\"\n        [style.background]=\"config.titleStyle.background\"\n        [style.color]=\"config.titleStyle.color\"\n        [style.font-size]=\"config.titleStyle.fontSize\"\n      >\n        {{ config.title }}\n      </div>\n      <div class=\"bodyStyle\">\n        <ul\n          style=\" padding: 0;width: 100%; height: 100%; overflow: hidden;\"\n          [style.color]=\"config.dataStyle.color\"\n          [style.font-size]=\"config.dataStyle.fontSize\"\n        >\n          <li *ngFor=\"let item of config.data\">\n            {{ item.name }}\n          </li>\n        </ul>\n      </div>\n      <div style=\" width: 220px;margin: 0 auto;margin-bottom: 15px;\">\n        <button class=\"footButton\">\u5F53\u65E5\u8F68\u8FF9</button>\n        <button class=\"footButton\">\u53D1\u9001\u6D88\u606F</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".ol-popup{position:absolute;background-color:#fff;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));border:1px solid #ccc;bottom:12px;left:-225px;width:450px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#fff;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#ccc;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;top:2px;right:8px}.ol-popup-closer:after{content:'\u2716'}.titleStyle{height:40px;line-height:40px;padding-left:20px}.bodyStyle{height:auto;background:#fff;margin:0 30px;overflow:hidden}.bodyStyle ul li{float:left;width:170px;list-style:none;margin:5px 12px}.footButton{width:80px;height:30px;outline:0;background:#fff;color:#21aa93;border:1px solid #21aa93;border-radius:5px;margin:0 15px;cursor:pointer}.footButton:active{background:#21aa93;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    SpotBoxComponent.ctorParameters = function () { return []; };
    SpotBoxComponent.propDecorators = {
        setMap: [{ type: Input, args: ['map',] }],
        config: [{ type: Input, args: ['config',] }],
        sw: [{ type: Input, args: ['sw',] }]
    };
    return SpotBoxComponent;
}());
export { SpotBoxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2luZm9ybWF0aW9uLWJveC9zcG90LWJveC9zcG90LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFPcEM7SUFtQkU7UUFYTyxhQUFRLEdBQTBCLEVBQUUsQ0FBQzs7UUFrQ3BDLGtCQUFhLEdBQUc7WUFDdEIsS0FBSyxFQUFFLFVBQVU7WUFDakIsVUFBVSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNELElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsZUFBZTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGVBQWU7aUJBQ3RCO2dCQUNEO29CQUNFLElBQUksRUFBRSxlQUFlO2lCQUN0QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsZUFBZTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGVBQWU7aUJBQ3RCO2dCQUNEO29CQUNFLElBQUksRUFBRSxlQUFlO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQztRQXJEQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUNELHNCQUNJLG9DQUFNOzs7OztRQURWLFVBQ1csS0FBSztZQUNkLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsT0FBTzthQUNSO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLG9DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUNXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUpBO0lBeUNELHNCQUFJLGdDQUFFOzs7O1FBQU47WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUNPLEtBQVU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQzs7O09BTkE7Ozs7SUFPRCxxQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN2QixPQUFPLEVBQUUsSUFBSTtZQUNiLGdCQUFnQixFQUFFO2dCQUNoQixRQUFRLEVBQUUsR0FBRzthQUNkO1NBQ0YsQ0FBQyxDQUFDOztZQUNHLElBQUksR0FBRyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsOERBQThEO1FBQzlELGtDQUFrQztRQUNsQyx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRzs7Z0JBQzFCLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVTtZQUNqQywrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFwSEYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixnaUNBQXdDOztpQkFFekM7Ozs7O3lCQWlCRSxLQUFLLFNBQUMsS0FBSzt5QkFjWCxLQUFLLFNBQUMsUUFBUTtxQkEyQ2QsS0FBSyxTQUFDLElBQUk7O0lBdUNiLHVCQUFDO0NBQUEsQUF0SEQsSUFzSEM7U0FoSFksZ0JBQWdCOzs7SUFFM0Isb0NBQTRDOztJQUM1QyxrQ0FBWTs7SUFDWixpQ0FBVzs7SUFDWCxtQ0FBYTs7SUFDYixpQ0FBVzs7SUFDWCxtQ0FBYTs7SUFDYixxQ0FBZTs7SUFDZixrQ0FBWTs7SUFDWixrQ0FBWTs7SUFDWixpQ0FBVzs7SUFDWCxxQ0FBZTs7Ozs7SUFZZiwrQkFBaUI7Ozs7O0lBRWpCLG1DQUFxQjs7Ozs7SUFVckIseUNBK0JFOzs7OztJQUVGLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgUmVuZGVyZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnb2wvT3ZlcmxheS5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3LmpzJztcbmltcG9ydCB7IHRvU3RyaW5nSERNUyB9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuaW1wb3J0IFRpbGVMYXllciBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCB7IGZyb21Mb25MYXQsIHRvTG9uTGF0IH0gZnJvbSAnb2wvcHJvai5qcyc7XG5pbXBvcnQgT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IHsgU3dpcGVyQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnbmd4LXN3aXBlci13cmFwcGVyJztcbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1zcG90LWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcG90LWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Nwb3QtYm94LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcG90Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgbXlTd2lwZXI6IFN3aXBlckNvbmZpZ0ludGVyZmFjZSA9IHt9O1xuICBtYXJrZXI6IGFueTtcbiAgbGF5ZXI6IGFueTtcbiAgb3ZlcmxheTogYW55O1xuICBwb3B1cDogYW55O1xuICBjb250ZW50OiBhbnk7XG4gIGNvbnRhaW5lcjogYW55O1xuICBjbG9zZXI6IGFueTtcbiAgbGF5ZXJzOiBhbnk7XG4gIHRpdGxlOiBhbnk7XG4gIHN0YXJMZXZlbDogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuICBASW5wdXQoJ21hcCcpXG4gIHNldCBzZXRNYXAodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCflt7Lnu5HlrpogbWFwIOe7hOS7tiDlrp7kvosnKTtcbiAgICB0aGlzLm1hcCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgbWFwOiBhbnk7XG5cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IGNvbmZpZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cblxuICAvLyDpu5jorqTlm77lsYLlj4LmlbBcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0ge1xuICAgIHRpdGxlOiAn6IuPQTEyMzQ1NicsXG4gICAgdGl0bGVTdHlsZToge1xuICAgICAgYmFja2dyb3VuZDogJ2dhaW5zYm9ybycsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgY29sb3I6ICcjMDAwJ1xuICAgIH0sXG4gICAgZGF0YVN0eWxlOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgY29sb3I6ICcjMDAwJ1xuICAgIH0sXG4gICAgZGF0YTogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAn6L2m54mM5Y+356CB77ya6IuPQTEyMzQ1NicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn6L2m54mM5Y+356CB77ya6IuPQTEyMzQ1NicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn6L2m54mM5Y+356CB77ya6IuPQTEyMzQ1NicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn6L2m54mM5Y+356CB77ya6IuPQTEyMzQ1NicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn6L2m54mM5Y+356CB77ya6IuPQTEyMzQ1NicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn6L2m54mM5Y+356CB77ya6IuPQTEyMzQ1NicsXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHByaXZhdGUgX3N3aXBlcjogYW55O1xuICBnZXQgc3coKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc3dpcGVyO1xuICB9XG4gIEBJbnB1dCgnc3cnKVxuICBzZXQgc3codmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3N3aXBlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubXlTd2lwZXIsIHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgdGhpcy5pbml0U3dpcGVyKCk7XG4gIH1cbiAgaW5pdFN3aXBlcigpIHtcbiAgICB0aGlzLm15U3dpcGVyID0gdGhpcy5fc3dpcGVyO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdFN3aXBlcigpO1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jb250ZW50Jyk7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbiAgICB0aGlzLmNsb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jbG9zZXInKTtcbiAgICB0aGlzLm92ZXJsYXkgPSBuZXcgT3ZlcmxheSh7XG4gICAgICBlbGVtZW50OiB0aGlzLmNvbnRhaW5lcixcbiAgICAgIGF1dG9QYW46IHRydWUsXG4gICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLmNsb3Nlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5vdmVybGF5LnNldFBvc2l0aW9uKHVuZGVmaW5lZCk7XG4gICAgICBzZWxmLmNsb3Nlci5ibHVyKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLm1hcC5hZGRPdmVybGF5KHRoaXMub3ZlcmxheSk7XG5cbiAgICAvLyBjb25zdCBjb29yZGluYXRlID0gWzExOC44MjIxMDMyMzM5NTY2NywgMzEuNzkwMzcyMzYyNzE5NDRdO1xuICAgIC8vIC8vIHNlbGYuY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBzZWxmLm92ZXJsYXkuc2V0UG9zaXRpb24oY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5tYXAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGV2dC5jb29yZGluYXRlO1xuICAgICAgLy8gc2VsZi5jb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgc2VsZi5vdmVybGF5LnNldFBvc2l0aW9uKGNvb3JkaW5hdGUpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==