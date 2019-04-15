/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Style, Fill, Stroke } from 'ol/style';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
import { PolygonLayer } from 'handsmap-map-client/openlayers/layer';
var PolygonLayerComponent = /** @class */ (function () {
    function PolygonLayerComponent() {
        this.defaultConfig = {
            coordsField: 'polygon_geometry',
            visible: true
        };
        this._config = this.defaultConfig || {};
        this.initLayer();
    }
    Object.defineProperty(PolygonLayerComponent.prototype, "setStyle", {
        /**
         * 面样式参数
         * @param {any} style
         * polygonStyle(feature, resolution) {
          const styles = [];
           const styles = [];
          const style = new ol.style.Style({
            fill: new ol.style.Fill({
              color:  rgba(255,099,49,0.6),
            }),
            stroke: new ol.style.Stroke({
              color:  rgba(255,0,0,0.6) ,
              width: 3
            })
          });
      
          styles.push(style);
          return styles;
        }
         */
        set: /**
         * 面样式参数
         * polygonStyle(feature, resolution) {
         * const styles = [];
         * const styles = [];
         * const style = new ol.style.Style({
         * fill: new ol.style.Fill({
         * color:  rgba(255,099,49,0.6),
         * }),
         * stroke: new ol.style.Stroke({
         * color:  rgba(255,0,0,0.6) ,
         * width: 3
         * })
         * });
         * styles.push(style);
         * return styles;
         * }
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.polygonLayer.setStyle(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonLayerComponent.prototype, "setConfig", {
        /**
         * 图层样式参数
         * @param {any} config
         * @example
         * {
          coordsField: polygon_geometry,
          visible: true
        };
         */
        set: /**
         * 图层样式参数
         * \@example
         * {
         * coordsField: polygon_geometry,
         * visible: true
         * };
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._config = Object.assign({}, this.defaultConfig, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonLayerComponent.prototype, "setVisible", {
        // 更新 可见性
        set: 
        // 更新 可见性
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visible = value;
            this.updateVisible();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonLayerComponent.prototype, "setMap", {
        // 地图组件
        set: 
        // 地图组件
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            console.log('已绑定 map 组件 实例');
            this._map = value;
            this._map.map.addLayer(this.polygonLayer);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonLayerComponent.prototype, "setData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // 做处理
            if (!value) {
                return;
            }
            /** @type {?} */
            var dataR = value;
            /** @type {?} */
            var coordFieldConfig = { wktField: this._config['coordsField'] };
            if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
                dataR = ServiceUtil.ConvertPolygonsll2tmerc()(value, coordFieldConfig); // dataR
            }
            // 先清空，再增加
            this._data = value;
            this.polygonLayer.clearFeatures();
            this.polygonLayer.addFeatures(dataR, coordFieldConfig);
        },
        enumerable: true,
        configurable: true
    });
    // 初始化图层只由一次
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    PolygonLayerComponent.prototype.initLayer = 
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    function () {
        this.polygonLayer = new PolygonLayer({
            layerName: 'polygonLayer',
            infoTemplate: '',
            dataList: [],
            coordsField: { x: 'coordinates', y: 'coordinates' }
        });
        // 默认样式问题
        /** @type {?} */
        var defaultStyle = new Style({
            fill: new Fill({
                color: 'rgba(255,099,49,0.6)'
            }),
            stroke: new Stroke({
                color: 'rgba(255,0,0,0.6)',
                width: 3
            })
        });
        this.polygonLayer.setStyle(defaultStyle);
    };
    /**
     * @return {?}
     */
    PolygonLayerComponent.prototype.updateVisible = /**
     * @return {?}
     */
    function () {
        this.polygonLayer.setVisible(this._visible);
    };
    // 配置选项
    // 配置选项
    /**
     * @return {?}
     */
    PolygonLayerComponent.prototype.ngOnInit = 
    // 配置选项
    /**
     * @return {?}
     */
    function () { };
    PolygonLayerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-polygon-layer',
                    template: "",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PolygonLayerComponent.ctorParameters = function () { return []; };
    PolygonLayerComponent.propDecorators = {
        setStyle: [{ type: Input, args: ['style',] }],
        setConfig: [{ type: Input, args: ['config',] }],
        setVisible: [{ type: Input, args: ['visible',] }],
        setMap: [{ type: Input, args: ['map',] }],
        setData: [{ type: Input, args: ['data',] }]
    };
    return PolygonLayerComponent;
}());
export { PolygonLayerComponent };
if (false) {
    /** @type {?} */
    PolygonLayerComponent.prototype._visible;
    /**
     * 数据
     * \@example
     *  [
     * {
     * polygon_geometry:
     * MULTIPOLYGON (((118.99089624905777 33.002410312564244,119.19100891964808 32.99527192954675,  +
     * 119.08964388079971 33.08283609456131))) ,
     * name:  淮胜信用社，
     * }
     * ];
     * @type {?}
     * @private
     */
    PolygonLayerComponent.prototype._data;
    /** @type {?} */
    PolygonLayerComponent.prototype.polygonLayer;
    /** @type {?} */
    PolygonLayerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    PolygonLayerComponent.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    PolygonLayerComponent.prototype._map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL3BvbHlnb24tbGF5ZXIvcG9seWdvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFHTCxZQUFZLEVBS2IsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QztJQU9FO1FBa0dRLGtCQUFhLEdBQUc7WUFDdEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFwR0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXFCRCxzQkFDSSwyQ0FBUTtRQXJCWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQW1CRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQ0gsVUFDYSxLQUFlO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBV0Qsc0JBQ0ksNENBQVM7UUFWYjs7Ozs7Ozs7V0FRRzs7Ozs7Ozs7Ozs7UUFDSCxVQUNjLEtBQWE7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFD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Ozs7SUFFaEIsOENBR0U7Ozs7O0lBRUYscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hcC9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlLCBDaXJjbGUsIEZpbGwsIFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9NYXAnO1xuaW1wb3J0IHsgU2VydmljZVV0aWwgfSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvdXRpbCc7XG5pbXBvcnQge1xuICBUaWxlWFlaTGF5ZXIsXG4gIFBvaW50TGF5ZXIsXG4gIFBvbHlnb25MYXllcixcbiAgTGluZUxheWVyLFxuICBNaXhMYXllcixcbiAgQmFzZUxheWVyLFxuICBCYXNlVmVjdG9yTGF5ZXJcbn0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL2xheWVyJztcbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1wb2x5Z29uLWxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvbHlnb24tbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb2x5Z29uLWxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb2x5Z29uTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWcgfHwge307XG4gICAgdGhpcy5pbml0TGF5ZXIoKTtcbiAgfVxuICAvKipcbiAgICog6Z2i5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBzdHlsZVxuICAgKiBwb2x5Z29uU3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuICAgICBjb25zdCBzdHlsZXMgPSBbXTtcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgIGNvbG9yOiAgcmdiYSgyNTUsMDk5LDQ5LDAuNiksXG4gICAgICB9KSxcbiAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgIGNvbG9yOiAgcmdiYSgyNTUsMCwwLDAuNikgLFxuICAgICAgICB3aWR0aDogM1xuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHN0eWxlcy5wdXNoKHN0eWxlKTtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG4gICAqL1xuICBASW5wdXQoJ3N0eWxlJylcbiAgc2V0IHNldFN0eWxlKHZhbHVlOiBGdW5jdGlvbikge1xuICAgIHRoaXMucG9seWdvbkxheWVyLnNldFN0eWxlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm77lsYLmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAgY29vcmRzRmllbGQ6IHBvbHlnb25fZ2VvbWV0cnksXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9O1xuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgc2V0Q29uZmlnKHZhbHVlOiBvYmplY3QpIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgfVxuICAvLyDmm7TmlrAg5Y+v6KeB5oCnXG4gIEBJbnB1dCgndmlzaWJsZScpXG4gIHNldCBzZXRWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmlzaWJsZSgpO1xuICB9XG4gIF92aXNpYmxlOiBib29sZWFuO1xuICAvLyDlnLDlm77nu4Tku7ZcbiAgQElucHV0KCdtYXAnKVxuICBzZXQgc2V0TWFwKHZhbHVlOiBNYXBDb21wb25lbnQpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCflt7Lnu5HlrpogbWFwIOe7hOS7tiDlrp7kvosnKTtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB0aGlzLl9tYXAubWFwLmFkZExheWVyKHRoaXMucG9seWdvbkxheWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDmja5cbiAgICogQHBhcmFtIHthbnl9IGRhdGFcbiAgICogQGV4YW1wbGVcbiAgICogIFtcbiAgICB7XG4gICAgICBwb2x5Z29uX2dlb21ldHJ5OlxuICAgICAgICAgTVVMVElQT0xZR09OICgoKDExOC45OTA4OTYyNDkwNTc3NyAzMy4wMDI0MTAzMTI1NjQyNDQsMTE5LjE5MTAwODkxOTY0ODA4IDMyLjk5NTI3MTkyOTU0Njc1LCAgK1xuICAgICAgICAgMTE5LjA4OTY0Mzg4MDc5OTcxIDMzLjA4MjgzNjA5NDU2MTMxKSkpICxcbiAgICAgIG5hbWU6ICDmt67og5zkv6HnlKjnpL7vvIxcbiAgICB9XG4gIF07XG4gICAqL1xuICBwcml2YXRlIF9kYXRhOiBNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBzZXREYXRhKHZhbHVlOiBhbnkpIHtcbiAgICAvLyDlgZrlpITnkIZcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkYXRhUiA9IHZhbHVlO1xuXG4gICAgY29uc3QgY29vcmRGaWVsZENvbmZpZyA9IHsgd2t0RmllbGQ6IHRoaXMuX2NvbmZpZ1snY29vcmRzRmllbGQnXSB9O1xuICAgIGlmICh0aGlzLl9tYXAuY29uZmlnLmNvb3JkaW5hdGVTeXN0aW1TcmlkID09PSAnRVBTRzozODU3Jykge1xuICAgICAgZGF0YVIgPSBTZXJ2aWNlVXRpbC5Db252ZXJ0UG9seWdvbnNsbDJ0bWVyYygpKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29vcmRGaWVsZENvbmZpZ1xuICAgICAgKTsgLy8gZGF0YVJcbiAgICB9XG4gICAgLy8g5YWI5riF56m677yM5YaN5aKe5YqgXG4gICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgIHRoaXMucG9seWdvbkxheWVyLmNsZWFyRmVhdHVyZXMoKTtcbiAgICB0aGlzLnBvbHlnb25MYXllci5hZGRGZWF0dXJlcyhkYXRhUiwgY29vcmRGaWVsZENvbmZpZyk7XG4gIH1cblxuICBwb2x5Z29uTGF5ZXI6IGFueTtcbiAgX2NvbmZpZzogb2JqZWN0O1xuXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBjb29yZHNGaWVsZDogJ3BvbHlnb25fZ2VvbWV0cnknLFxuICAgIHZpc2libGU6IHRydWVcbiAgfTtcblxuICBwcml2YXRlIF9tYXA6IE1hcENvbXBvbmVudDtcblxuICAvLyDliJ3lp4vljJblm77lsYLlj6rnlLHkuIDmrKFcbiAgaW5pdExheWVyKCkge1xuICAgIHRoaXMucG9seWdvbkxheWVyID0gbmV3IFBvbHlnb25MYXllcih7XG4gICAgICBsYXllck5hbWU6ICdwb2x5Z29uTGF5ZXInLFxuICAgICAgaW5mb1RlbXBsYXRlOiAnJyxcbiAgICAgIGRhdGFMaXN0OiBbXSxcbiAgICAgIGNvb3Jkc0ZpZWxkOiB7IHg6ICdjb29yZGluYXRlcycsIHk6ICdjb29yZGluYXRlcycgfVxuICAgIH0pO1xuICAgIC8vIOm7mOiupOagt+W8j+mXrumimFxuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IG5ldyBTdHlsZSh7XG4gICAgICBmaWxsOiBuZXcgRmlsbCh7XG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMDk5LDQ5LDAuNiknXG4gICAgICB9KSxcbiAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMCwwLDAuNiknLFxuICAgICAgICB3aWR0aDogM1xuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLnBvbHlnb25MYXllci5zZXRTdHlsZShkZWZhdWx0U3R5bGUpO1xuICB9XG5cbiAgdXBkYXRlVmlzaWJsZSgpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllci5zZXRWaXNpYmxlKHRoaXMuX3Zpc2libGUpO1xuICB9XG5cbiAgLy8g6YWN572u6YCJ6aG5XG5cbiAgbmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==