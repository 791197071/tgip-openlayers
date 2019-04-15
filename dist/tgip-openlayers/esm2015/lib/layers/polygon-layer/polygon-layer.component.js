/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Style, Fill, Stroke } from 'ol/style';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
import { PolygonLayer } from 'handsmap-map-client/openlayers/layer';
export class PolygonLayerComponent {
    constructor() {
        this.defaultConfig = {
            coordsField: 'polygon_geometry',
            visible: true
        };
        this._config = this.defaultConfig || {};
        this.initLayer();
    }
    /**
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
    set setStyle(value) {
        this.polygonLayer.setStyle(value);
    }
    /**
     * 图层样式参数
     * \@example
     * {
     * coordsField: polygon_geometry,
     * visible: true
     * };
     * @param {?} value
     * @return {?}
     */
    set setConfig(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    // 更新 可见性
    /**
     * @param {?} value
     * @return {?}
     */
    set setVisible(value) {
        this._visible = value;
        this.updateVisible();
    }
    // 地图组件
    /**
     * @param {?} value
     * @return {?}
     */
    set setMap(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this._map = value;
        this._map.map.addLayer(this.polygonLayer);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setData(value) {
        // 做处理
        if (!value) {
            return;
        }
        /** @type {?} */
        let dataR = value;
        /** @type {?} */
        const coordFieldConfig = { wktField: this._config['coordsField'] };
        if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
            dataR = ServiceUtil.ConvertPolygonsll2tmerc()(value, coordFieldConfig); // dataR
        }
        // 先清空，再增加
        this._data = value;
        this.polygonLayer.clearFeatures();
        this.polygonLayer.addFeatures(dataR, coordFieldConfig);
    }
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    initLayer() {
        this.polygonLayer = new PolygonLayer({
            layerName: 'polygonLayer',
            infoTemplate: '',
            dataList: [],
            coordsField: { x: 'coordinates', y: 'coordinates' }
        });
        // 默认样式问题
        /** @type {?} */
        const defaultStyle = new Style({
            fill: new Fill({
                color: 'rgba(255,099,49,0.6)'
            }),
            stroke: new Stroke({
                color: 'rgba(255,0,0,0.6)',
                width: 3
            })
        });
        this.polygonLayer.setStyle(defaultStyle);
    }
    /**
     * @return {?}
     */
    updateVisible() {
        this.polygonLayer.setVisible(this._visible);
    }
    // 配置选项
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PolygonLayerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-polygon-layer',
                template: "",
                styles: [""]
            }] }
];
/** @nocollapse */
PolygonLayerComponent.ctorParameters = () => [];
PolygonLayerComponent.propDecorators = {
    setStyle: [{ type: Input, args: ['style',] }],
    setConfig: [{ type: Input, args: ['config',] }],
    setVisible: [{ type: Input, args: ['visible',] }],
    setMap: [{ type: Input, args: ['map',] }],
    setData: [{ type: Input, args: ['data',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL3BvbHlnb24tbGF5ZXIvcG9seWdvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFHTCxZQUFZLEVBS2IsTUFBTSxzQ0FBc0MsQ0FBQztBQU85QyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDO1FBa0dRLGtCQUFhLEdBQUc7WUFDdEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFwR0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJELElBQ0ksUUFBUSxDQUFDLEtBQWU7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7SUFXRCxJQUNJLFNBQVMsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFHRCxJQUNJLE1BQU0sQ0FBQyxLQUFtQjtRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBZ0JELElBQ0ksT0FBTyxDQUFDLEtBQVU7UUFDcEIsTUFBTTtRQUNOLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7O1lBQ0csS0FBSyxHQUFHLEtBQUs7O2NBRVgsZ0JBQWdCLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNsRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixLQUFLLFdBQVcsRUFBRTtZQUN6RCxLQUFLLEdBQUcsV0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQzNDLEtBQUssRUFDTCxnQkFBZ0IsQ0FDakIsQ0FBQyxDQUFDLFFBQVE7U0FDWjtRQUNELFVBQVU7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBYUQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDbkMsU0FBUyxFQUFFLGNBQWM7WUFDekIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUU7U0FDcEQsQ0FBQyxDQUFDOzs7Y0FFRyxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQUM7WUFDN0IsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDO2dCQUNiLEtBQUssRUFBRSxzQkFBc0I7YUFDOUIsQ0FBQztZQUNGLE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztnQkFDakIsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBSUQsUUFBUSxLQUFLLENBQUM7OztZQTNJZixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFlBQTZDOzthQUU5Qzs7Ozs7dUJBMEJFLEtBQUssU0FBQyxPQUFPO3dCQWNiLEtBQUssU0FBQyxRQUFRO3lCQUtkLEtBQUssU0FBQyxTQUFTO3FCQU9mLEtBQUssU0FBQyxLQUFLO3NCQXdCWCxLQUFLLFNBQUMsTUFBTTs7OztJQTFCYix5Q0FBa0I7Ozs7Ozs7Ozs7Ozs7OztJQXlCbEIsc0NBQTRCOztJQXNCNUIsNkNBQWtCOztJQUNsQix3Q0FBZ0I7Ozs7O0lBRWhCLDhDQUdFOzs7OztJQUVGLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYXAvbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHlsZSwgQ2lyY2xlLCBGaWxsLCBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvTWFwJztcbmltcG9ydCB7IFNlcnZpY2VVdGlsIH0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL3V0aWwnO1xuaW1wb3J0IHtcbiAgVGlsZVhZWkxheWVyLFxuICBQb2ludExheWVyLFxuICBQb2x5Z29uTGF5ZXIsXG4gIExpbmVMYXllcixcbiAgTWl4TGF5ZXIsXG4gIEJhc2VMYXllcixcbiAgQmFzZVZlY3RvckxheWVyXG59IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9sYXllcic7XG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtcG9seWdvbi1sYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2x5Z29uLWxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9seWdvbi1sYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9seWdvbkxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnIHx8IHt9O1xuICAgIHRoaXMuaW5pdExheWVyKCk7XG4gIH1cbiAgLyoqXG4gICAqIOmdouagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gc3R5bGVcbiAgICogcG9seWdvblN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICBjb25zdCBzdHlsZXMgPSBbXTtcbiAgICAgY29uc3Qgc3R5bGVzID0gW107XG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICBjb2xvcjogIHJnYmEoMjU1LDA5OSw0OSwwLjYpLFxuICAgICAgfSksXG4gICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICBjb2xvcjogIHJnYmEoMjU1LDAsMCwwLjYpICxcbiAgICAgICAgd2lkdGg6IDNcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBzdHlsZXMucHVzaChzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuICAgKi9cbiAgQElucHV0KCdzdHlsZScpXG4gIHNldCBzZXRTdHlsZSh2YWx1ZTogRnVuY3Rpb24pIHtcbiAgICB0aGlzLnBvbHlnb25MYXllci5zZXRTdHlsZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICog5Zu+5bGC5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgIGNvb3Jkc0ZpZWxkOiBwb2x5Z29uX2dlb21ldHJ5LFxuICAgIHZpc2libGU6IHRydWVcbiAgfTtcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IHNldENvbmZpZyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgLy8g5pu05pawIOWPr+ingeaAp1xuICBASW5wdXQoJ3Zpc2libGUnKVxuICBzZXQgc2V0VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZpc2libGUoKTtcbiAgfVxuICBfdmlzaWJsZTogYm9vbGVhbjtcbiAgLy8g5Zyw5Zu+57uE5Lu2XG4gIEBJbnB1dCgnbWFwJylcbiAgc2V0IHNldE1hcCh2YWx1ZTogTWFwQ29tcG9uZW50KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn5bey57uR5a6aIG1hcCDnu4Tku7Yg5a6e5L6LJyk7XG4gICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgdGhpcy5fbWFwLm1hcC5hZGRMYXllcih0aGlzLnBvbHlnb25MYXllcik7XG4gIH1cblxuICAvKipcbiAgICog5pWw5o2uXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhXG4gICAqIEBleGFtcGxlXG4gICAqICBbXG4gICAge1xuICAgICAgcG9seWdvbl9nZW9tZXRyeTpcbiAgICAgICAgIE1VTFRJUE9MWUdPTiAoKCgxMTguOTkwODk2MjQ5MDU3NzcgMzMuMDAyNDEwMzEyNTY0MjQ0LDExOS4xOTEwMDg5MTk2NDgwOCAzMi45OTUyNzE5Mjk1NDY3NSwgICtcbiAgICAgICAgIDExOS4wODk2NDM4ODA3OTk3MSAzMy4wODI4MzYwOTQ1NjEzMSkpKSAsXG4gICAgICBuYW1lOiAg5reu6IOc5L+h55So56S+77yMXG4gICAgfVxuICBdO1xuICAgKi9cbiAgcHJpdmF0ZSBfZGF0YTogTWFwQ29tcG9uZW50O1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgc2V0RGF0YSh2YWx1ZTogYW55KSB7XG4gICAgLy8g5YGa5aSE55CGXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZGF0YVIgPSB2YWx1ZTtcblxuICAgIGNvbnN0IGNvb3JkRmllbGRDb25maWcgPSB7IHdrdEZpZWxkOiB0aGlzLl9jb25maWdbJ2Nvb3Jkc0ZpZWxkJ10gfTtcbiAgICBpZiAodGhpcy5fbWFwLmNvbmZpZy5jb29yZGluYXRlU3lzdGltU3JpZCA9PT0gJ0VQU0c6Mzg1NycpIHtcbiAgICAgIGRhdGFSID0gU2VydmljZVV0aWwuQ29udmVydFBvbHlnb25zbGwydG1lcmMoKShcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvb3JkRmllbGRDb25maWdcbiAgICAgICk7IC8vIGRhdGFSXG4gICAgfVxuICAgIC8vIOWFiOa4heepuu+8jOWGjeWinuWKoFxuICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICB0aGlzLnBvbHlnb25MYXllci5jbGVhckZlYXR1cmVzKCk7XG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkRmVhdHVyZXMoZGF0YVIsIGNvb3JkRmllbGRDb25maWcpO1xuICB9XG5cbiAgcG9seWdvbkxheWVyOiBhbnk7XG4gIF9jb25maWc6IG9iamVjdDtcblxuICBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7XG4gICAgY29vcmRzRmllbGQ6ICdwb2x5Z29uX2dlb21ldHJ5JyxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH07XG5cbiAgcHJpdmF0ZSBfbWFwOiBNYXBDb21wb25lbnQ7XG5cbiAgLy8g5Yid5aeL5YyW5Zu+5bGC5Y+q55Sx5LiA5qyhXG4gIGluaXRMYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IG5ldyBQb2x5Z29uTGF5ZXIoe1xuICAgICAgbGF5ZXJOYW1lOiAncG9seWdvbkxheWVyJyxcbiAgICAgIGluZm9UZW1wbGF0ZTogJycsXG4gICAgICBkYXRhTGlzdDogW10sXG4gICAgICBjb29yZHNGaWVsZDogeyB4OiAnY29vcmRpbmF0ZXMnLCB5OiAnY29vcmRpbmF0ZXMnIH1cbiAgICB9KTtcbiAgICAvLyDpu5jorqTmoLflvI/pl67pophcbiAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSBuZXcgU3R5bGUoe1xuICAgICAgZmlsbDogbmV3IEZpbGwoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDA5OSw0OSwwLjYpJ1xuICAgICAgfSksXG4gICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDAsMCwwLjYpJyxcbiAgICAgICAgd2lkdGg6IDNcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIuc2V0U3R5bGUoZGVmYXVsdFN0eWxlKTtcbiAgfVxuXG4gIHVwZGF0ZVZpc2libGUoKSB7XG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIuc2V0VmlzaWJsZSh0aGlzLl92aXNpYmxlKTtcbiAgfVxuXG4gIC8vIOmFjee9rumAiemhuVxuXG4gIG5nT25Jbml0KCkgeyB9XG59XG4iXX0=