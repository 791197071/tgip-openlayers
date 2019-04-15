/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Style, Stroke } from 'ol/style';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
import { LineLayer } from 'handsmap-map-client/openlayers/layer';
export class LineLayerComponent {
    constructor() {
        this.defaultConfig = {
            coordsField: 'line_geometry',
            visible: true
        };
        this._config = this.defaultConfig || {};
        this.initLayer();
    }
    /**
     * 线样式参数
     * \@example
     *   lineStyle(feature, resolution) {
     * const styles = [];
     * const style = new ol.style.Style({
     * stroke: new ol.style.Stroke({
     * color: 'rgba(255,0,0,0.6)',
     * width: 5
     * }),
     * text: new ol.style.Text({
     * textAlign: 'center', // 文本标注 对齐方式
     * textBaseline: 'middle', // 文本基线为middle,
     * font: 'bold 22px Arial', // 字体 字号 字体
     * text: feature.get('name'), // 标注的内容
     * fill: new ol.style.Fill({
     * color: 'rgba(255,0,0,0.9)' // 字体颜色
     * }),
     * // 字体外晕的颜色及宽度
     * stroke: new ol.style.Stroke({
     * color: 'rgba(0,255,0,0.7)',
     * width: 3
     * }),
     * offsetX: 0, // 偏移量 x 坐标（单位为像素）
     * offsetY: -20, // 偏移量 y 坐标（单位为像素）
     * rotation: 0 // 旋转 默认为0
     * })
     * });
     * styles.push(style);
     * return styles;
     * }
     * @param {?} value
     * @return {?}
     */
    set setStyle(value) {
        this.lineLayer.setStyle(value);
    }
    /**
     * 图层样式参数
     * \@example
     * {
     * coordsField: line_geometry,
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
    /**
     * 地图参数
     * @param {?} value
     * @return {?}
     */
    set setMap(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this._map = value;
        this._map.map.addLayer(this.lineLayer);
    }
    /**
     * 数据参数
     * \@example
     * [
     * {
     * line_geometry:
     * LINESTRING (119.1124867064557 32.98860943873043, 119.2048097934819 32.92721934478,119.20005087147024 32.99527192954675)  ,
     * name:   淮胜信用社，
     * },
     * {
     * line_geometry:
     * LINESTRING (119.1124867064557 32.98860943873043, 119.2048097934819 32.92721934478,119.20005087147024 32.99527192954675)  ,
     * name:   淮胜信用社，
     * }
     * ];
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
            dataR = ServiceUtil.ConvertLinesll2tmerc(value, coordFieldConfig); // dataR
        }
        // 先清空，再增加
        this._data = value;
        this.lineLayer.clearFeatures();
        this.lineLayer.addFeatures(dataR, coordFieldConfig);
    }
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    initLayer() {
        this.lineLayer = new LineLayer({
            layerName: 'lineLayer',
            infoTemplate: '',
            dataList: [],
            coordsField: { x: 'coordinates', y: 'coordinates' }
        });
        // 默认样式问题
        /** @type {?} */
        const defaultStyle = new Style({
            stroke: new Stroke({
                color: 'rgba(255,0,0,0.6)',
                width: 5
            })
        });
        this.lineLayer.setStyle(defaultStyle);
    }
    /**
     * @return {?}
     */
    updateVisible() {
        this.lineLayer.setVisible(this._visible);
    }
    // 配置选项
    /**
     * @return {?}
     */
    ngOnInit() { }
}
LineLayerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-line-layer',
                template: "",
                styles: [""]
            }] }
];
/** @nocollapse */
LineLayerComponent.ctorParameters = () => [];
LineLayerComponent.propDecorators = {
    setStyle: [{ type: Input, args: ['style',] }],
    setConfig: [{ type: Input, args: ['config',] }],
    setVisible: [{ type: Input, args: ['visible',] }],
    setMap: [{ type: Input, args: ['map',] }],
    setData: [{ type: Input, args: ['data',] }]
};
if (false) {
    /** @type {?} */
    LineLayerComponent.prototype._visible;
    /**
     * @type {?}
     * @private
     */
    LineLayerComponent.prototype._data;
    /** @type {?} */
    LineLayerComponent.prototype.lineLayer;
    /** @type {?} */
    LineLayerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    LineLayerComponent.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    LineLayerComponent.prototype._map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLEVBQVEsTUFBTSxVQUFVLENBQUM7QUFFN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFJTCxTQUFTLEVBSVYsTUFBTSxzQ0FBc0MsQ0FBQztBQVE5QyxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCO1FBeUhRLGtCQUFhLEdBQUc7WUFDdEIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBM0hBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUNELElBQ0ksUUFBUSxDQUFDLEtBQWU7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7SUFXRCxJQUNJLFNBQVMsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU5RCxDQUFDOzs7Ozs7SUFHQyxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFPSCxJQUNJLE1BQU0sQ0FBQyxLQUFtQjtRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkQsSUFDSSxPQUFPLENBQUMsS0FBVTtRQUNwQixNQUFNO1FBQ04sSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU87U0FDUjs7WUFDRyxLQUFLLEdBQUcsS0FBSzs7Y0FFWCxnQkFBZ0IsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2xFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEtBQUssV0FBVyxFQUFFO1lBQ3pELEtBQUssR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQ3RDLEtBQUssRUFDTCxnQkFBZ0IsQ0FDakIsQ0FBQyxDQUFDLFFBQVE7U0FDWjtRQUNELFVBQVU7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBYUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDN0IsU0FBUyxFQUFFLFdBQVc7WUFDdEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUU7U0FDcEQsQ0FBQyxDQUFDOzs7Y0FFRyxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQUM7WUFDN0IsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDO2dCQUNqQixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFJRCxRQUFRLEtBQUksQ0FBQzs7O1lBL0pkLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsWUFBMEM7O2FBRTNDOzs7Ozt1QkF3Q0UsS0FBSyxTQUFDLE9BQU87d0JBY2IsS0FBSyxTQUFDLFFBQVE7eUJBT1osS0FBSyxTQUFDLFNBQVM7cUJBV2pCLEtBQUssU0FBQyxLQUFLO3NCQTJCWCxLQUFLLFNBQUMsTUFBTTs7OztJQWpDWCxzQ0FBa0I7Ozs7O0lBZXBCLG1DQUE0Qjs7SUF1QzVCLHVDQUFlOztJQUNmLHFDQUFnQjs7Ozs7SUFFaEIsMkNBR0U7Ozs7O0lBRUYsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hcC9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlLCBDaXJjbGUsIEZpbGwsIFN0cm9rZSwgVGV4dCB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9NYXAnO1xuaW1wb3J0IHsgU2VydmljZVV0aWwgfSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvdXRpbCc7XG5pbXBvcnQge1xuICBUaWxlWFlaTGF5ZXIsXG4gIFBvaW50TGF5ZXIsXG4gIFBvbHlnb25MYXllcixcbiAgTGluZUxheWVyLFxuICBNaXhMYXllcixcbiAgQmFzZUxheWVyLFxuICBCYXNlVmVjdG9yTGF5ZXJcbn0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL2xheWVyJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLWxpbmUtbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluZS1sYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpbmUtbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpbmVMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmluaXRMYXllcigpO1xuICB9XG4gIC8qKlxuICAgKiDnur/moLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IHN0eWxlXG4gICAqIEBleGFtcGxlXG4gICAqICAgbGluZVN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICBjb25zdCBzdHlsZXMgPSBbXTtcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDAsMCwwLjYpJyxcbiAgICAgICAgd2lkdGg6IDVcbiAgICAgIH0pLFxuICAgICAgdGV4dDogbmV3IG9sLnN0eWxlLlRleHQoe1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLCAvLyDmlofmnKzmoIfms6gg5a+56b2Q5pa55byPXG4gICAgICAgIHRleHRCYXNlbGluZTogJ21pZGRsZScsIC8vIOaWh+acrOWfuue6v+S4um1pZGRsZSxcbiAgICAgICAgZm9udDogJ2JvbGQgMjJweCBBcmlhbCcsIC8vIOWtl+S9kyDlrZflj7cg5a2X5L2TXG4gICAgICAgIHRleHQ6IGZlYXR1cmUuZ2V0KCduYW1lJyksIC8vIOagh+azqOeahOWGheWuuVxuICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwwLDAsMC45KScgLy8g5a2X5L2T6aKc6ImyXG4gICAgICAgIH0pLFxuICAgICAgICAvLyDlrZfkvZPlpJbmmZXnmoTpopzoibLlj4rlrr3luqZcbiAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwyNTUsMCwwLjcpJyxcbiAgICAgICAgICB3aWR0aDogM1xuICAgICAgICB9KSxcbiAgICAgICAgb2Zmc2V0WDogMCwgLy8g5YGP56e76YePIHgg5Z2Q5qCH77yI5Y2V5L2N5Li65YOP57Sg77yJXG4gICAgICAgIG9mZnNldFk6IC0yMCwgLy8g5YGP56e76YePIHkg5Z2Q5qCH77yI5Y2V5L2N5Li65YOP57Sg77yJXG4gICAgICAgIHJvdGF0aW9uOiAwIC8vIOaXi+i9rCDpu5jorqTkuLowXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgc3R5bGVzLnB1c2goc3R5bGUpO1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbiAgICovXG4gIEBJbnB1dCgnc3R5bGUnKVxuICBzZXQgc2V0U3R5bGUodmFsdWU6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5saW5lTGF5ZXIuc2V0U3R5bGUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWbvuWxguagt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICBjb29yZHNGaWVsZDogbGluZV9nZW9tZXRyeSxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH07XG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBzZXRDb25maWcodmFsdWU6IG9iamVjdCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdENvbmZpZywgdmFsdWUpO1xuXG4gIH1cblxuICAgIC8vIOabtOaWsCDlj6/op4HmgKdcbiAgICBASW5wdXQoJ3Zpc2libGUnKVxuICAgIHNldCBzZXRWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2libGUoKTtcbiAgICB9XG4gICAgX3Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWcsOWbvuWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gbWFwXG4gICAqL1xuICBASW5wdXQoJ21hcCcpXG4gIHNldCBzZXRNYXAodmFsdWU6IE1hcENvbXBvbmVudCkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ+W3sue7keWumiBtYXAg57uE5Lu2IOWunuS+iycpO1xuICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIHRoaXMuX21hcC5tYXAuYWRkTGF5ZXIodGhpcy5saW5lTGF5ZXIpO1xuICB9XG4gIHByaXZhdGUgX2RhdGE6IE1hcENvbXBvbmVudDtcbiAgLyoqXG4gICAqIOaVsOaNruWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gZGF0YVxuICAgKiBAZXhhbXBsZVxuICAgKiBbXG4gICAge1xuICAgICAgbGluZV9nZW9tZXRyeTpcbiAgICAgICAgICBMSU5FU1RSSU5HICgxMTkuMTEyNDg2NzA2NDU1NyAzMi45ODg2MDk0Mzg3MzA0MywgMTE5LjIwNDgwOTc5MzQ4MTkgMzIuOTI3MjE5MzQ0NzgsMTE5LjIwMDA1MDg3MTQ3MDI0IDMyLjk5NTI3MTkyOTU0Njc1KSAgLFxuICAgICAgbmFtZTogICDmt67og5zkv6HnlKjnpL7vvIxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbmVfZ2VvbWV0cnk6XG4gICAgICAgICAgTElORVNUUklORyAoMTE5LjExMjQ4NjcwNjQ1NTcgMzIuOTg4NjA5NDM4NzMwNDMsIDExOS4yMDQ4MDk3OTM0ODE5IDMyLjkyNzIxOTM0NDc4LDExOS4yMDAwNTA4NzE0NzAyNCAzMi45OTUyNzE5Mjk1NDY3NSkgICxcbiAgICAgIG5hbWU6ICAg5reu6IOc5L+h55So56S+77yMXG4gICAgfVxuICBdO1xuICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBzZXREYXRhKHZhbHVlOiBhbnkpIHtcbiAgICAvLyDlgZrlpITnkIZcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkYXRhUiA9IHZhbHVlO1xuXG4gICAgY29uc3QgY29vcmRGaWVsZENvbmZpZyA9IHsgd2t0RmllbGQ6IHRoaXMuX2NvbmZpZ1snY29vcmRzRmllbGQnXSB9O1xuICAgIGlmICh0aGlzLl9tYXAuY29uZmlnLmNvb3JkaW5hdGVTeXN0aW1TcmlkID09PSAnRVBTRzozODU3Jykge1xuICAgICAgZGF0YVIgPSBTZXJ2aWNlVXRpbC5Db252ZXJ0TGluZXNsbDJ0bWVyYyhcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvb3JkRmllbGRDb25maWdcbiAgICAgICk7IC8vIGRhdGFSXG4gICAgfVxuICAgIC8vIOWFiOa4heepuu+8jOWGjeWinuWKoFxuICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICB0aGlzLmxpbmVMYXllci5jbGVhckZlYXR1cmVzKCk7XG4gICAgdGhpcy5saW5lTGF5ZXIuYWRkRmVhdHVyZXMoZGF0YVIsIGNvb3JkRmllbGRDb25maWcpO1xuICB9XG5cbiAgbGluZUxheWVyOiBhbnk7XG4gIF9jb25maWc6IG9iamVjdDtcblxuICBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7XG4gICAgY29vcmRzRmllbGQ6ICdsaW5lX2dlb21ldHJ5JyxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH07XG5cbiAgcHJpdmF0ZSBfbWFwOiBNYXBDb21wb25lbnQ7XG5cbiAgLy8g5Yid5aeL5YyW5Zu+5bGC5Y+q55Sx5LiA5qyhXG4gIGluaXRMYXllcigpIHtcbiAgICB0aGlzLmxpbmVMYXllciA9IG5ldyBMaW5lTGF5ZXIoe1xuICAgICAgbGF5ZXJOYW1lOiAnbGluZUxheWVyJyxcbiAgICAgIGluZm9UZW1wbGF0ZTogJycsXG4gICAgICBkYXRhTGlzdDogW10sXG4gICAgICBjb29yZHNGaWVsZDogeyB4OiAnY29vcmRpbmF0ZXMnLCB5OiAnY29vcmRpbmF0ZXMnIH1cbiAgICB9KTtcbiAgICAvLyDpu5jorqTmoLflvI/pl67pophcbiAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSBuZXcgU3R5bGUoe1xuICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwwLDAsMC42KScsXG4gICAgICAgIHdpZHRoOiA1XG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMubGluZUxheWVyLnNldFN0eWxlKGRlZmF1bHRTdHlsZSk7XG4gIH1cblxuICB1cGRhdGVWaXNpYmxlKCkge1xuICAgIHRoaXMubGluZUxheWVyLnNldFZpc2libGUodGhpcy5fdmlzaWJsZSk7XG4gIH1cblxuICAvLyDphY3nva7pgInpoblcblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=