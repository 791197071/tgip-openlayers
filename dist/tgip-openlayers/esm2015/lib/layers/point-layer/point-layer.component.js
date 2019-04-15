/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Style, Fill, Stroke, Icon } from 'ol/style';
import { PointLayer } from 'handsmap-map-client/openlayers/layer';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
export class PointLayerComponent {
    constructor() {
        this.stateConfig = {
            coordsField: 'point_geometry'
        };
        this._visible = this.visible;
        this._config = this.visible;
        this._state = this.stateConfig || {};
        this.initLayer();
    }
    /**
     * 线样式参数
     * pointStyle(feature, resolution) {
     * const styles = [];
     * const style01 = new ol.style.Style({
     * image: new ol.style.Icon({
     * // [0.5,0.5]表示坐标对应符号中心，[0.5,1]表示坐标对应符号底部中间点
     * anchor: [0.5, 0.5],
     * anchorXUnits: fraction,
     * anchorYUnits: fraction,
     * opacity: 1,
     * src: assets/eatting.png // 符号图片url
     * }),
     * text: new ol.style.Text({
     * textAlign: center , // 文本标注 对齐方式
     * textBaseline:  middle , // 文本基线为middle,
     * font:  bold 22px Arial , // 字体 字号 字体
     * text: feature.get( name ), // 标注的内容
     * fill: new ol.style.Fill({
     * color:  rgba(255,0,0,0.9)  // 字体颜色
     * }),
     * // 字体外晕的颜色及宽度
     * stroke: new ol.style.Stroke({
     * color:  rgba(0,255,0,0.7) ,
     * width: 3
     * }),
     * offsetX: 0, // 偏移量 x 坐标（单位为像素）
     * offsetY: -20, // 偏移量 y 坐标（单位为像素）
     * rotation: 0 // 旋转 默认为0
     * })
     * });
     * styles.push(style01);
     * return styles;
     * }
     * @param {?} value
     * @return {?}
     */
    set setStyle(value) {
        this.pointLayer.setStyle(value);
    }
    /**
     * 图层样式参数
     * \@example
     * {
     * coordsField: point_geometry,
     * visible: true
     * };
     * @param {?} value
     * @return {?}
     */
    set setConfig(value) {
        this._config = Object.assign({}, this.visible, value);
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
        // console.log('Input++++++++++++++++++++++++++++++++++++++++++++++++++');
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this._map = value;
        this._map.map.addLayer(this.pointLayer);
    }
    /**
     * 数据参数
     * \@example
     * [
     * {
     * point_geometry:  point(118.82266835594554 31.89450352498709) ,
     * // coordinates: [119.11534205966268, 32.990513007535085],
     * name:  东南大学，
     * },
     * {
     * point_geometry:  point(118.96258066308839 33.00050674375958) ,
     * // coordinates: [118.96258066308839, 33.00050674375958],
     * name:  共农村，
     * },
     * {
     * point_geometry:  point(119.007314529998 32.97385678049428) ,
     * // coordinates: [119.007314529998, 32.97385678049428],
     * name:  观音寺，
     * },
     * {
     * point_geometry:  point(119.06394570193676 32.8291855513398) ,
     * // coordinates: [119.06394570193676, 32.8291855513398],
     * name:  金南镇，
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
        const coordFieldConfig = { wktField: this._state['coordsField'] };
        if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
            dataR = ServiceUtil.ConvertPointsll2tmerc(value, coordFieldConfig); // dataR
        }
        // 先清空，再增加
        this._data = value;
        this.pointLayer.clearFeatures();
        this.pointLayer.addFeatures(dataR, coordFieldConfig);
    }
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    initLayer() {
        this.pointLayer = new PointLayer({
            layerName: 'pointLayer',
            infoTemplate: '',
            dataList: [],
            coordsField: { x: 'coordinates', y: 'coordinates' }
        });
        // 默认样式问题
        /** @type {?} */
        const defaultStyle = new Style({
            image: new Icon({
                radius: 10,
                fill: new Fill({
                    color: '#ff0000'
                }),
                stroke: new Stroke({
                    color: '#ff0000',
                    width: 2
                }),
                anchor: [0.5, 0.5],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                opacity: 1,
                src: 'assets/eatting.png' // 符号图片url
            })
        });
        this.pointLayer.setStyle(defaultStyle);
    }
    /**
     * @return {?}
     */
    updateVisible() {
        this.pointLayer.setVisible(this._visible);
    }
    // 配置选项
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('初始化++++++++++++++++++++++++++++++++++++++++++++++++++');
    }
}
PointLayerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-point-layer',
                template: "",
                styles: [""]
            }] }
];
/** @nocollapse */
PointLayerComponent.ctorParameters = () => [];
PointLayerComponent.propDecorators = {
    setStyle: [{ type: Input, args: ['style',] }],
    setConfig: [{ type: Input, args: ['config',] }],
    setVisible: [{ type: Input, args: ['visible',] }],
    setMap: [{ type: Input, args: ['map',] }],
    setData: [{ type: Input, args: ['data',] }]
};
if (false) {
    /** @type {?} */
    PointLayerComponent.prototype._visible;
    /**
     * @type {?}
     * @private
     */
    PointLayerComponent.prototype._data;
    /** @type {?} */
    PointLayerComponent.prototype.pointLayer;
    /** @type {?} */
    PointLayerComponent.prototype.config;
    /** @type {?} */
    PointLayerComponent.prototype._state;
    /** @type {?} */
    PointLayerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    PointLayerComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    PointLayerComponent.prototype.stateConfig;
    /**
     * @type {?}
     * @private
     */
    PointLayerComponent.prototype._map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9wb2ludC1sYXllci9wb2ludC1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsS0FBSyxFQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzdELE9BQU8sRUFFTCxVQUFVLEVBTVgsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFRbEUsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QjtRQXlJUSxnQkFBVyxHQUFHO1lBQ3BCLFdBQVcsRUFBRSxnQkFBZ0I7U0FDOUIsQ0FBQztRQTFJQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0NELElBQ0ksUUFBUSxDQUFDLEtBQWU7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7SUFXRCxJQUNJLFNBQVMsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxF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QUFTO3FCQVdmLEtBQUssU0FBQyxLQUFLO3NCQXdDWCxLQUFLLFNBQUMsTUFBTTs7OztJQTlDYix1Q0FBa0I7Ozs7O0lBa0JsQixvQ0FBNEI7O0lBNkM1Qix5Q0FBZ0I7O0lBQ2hCLHFDQUFZOztJQUNaLHFDQUFZOztJQUNaLHNDQUFhOzs7OztJQUViLHNDQUFzQjs7Ozs7SUFFdEIsMENBRUU7Ozs7O0lBRUYsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hcC9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9NYXAnO1xuaW1wb3J0IHsgU3R5bGUsIENpcmNsZSwgRmlsbCwgU3Ryb2tlLCBJY29uIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHtcbiAgVGlsZVhZWkxheWVyLFxuICBQb2ludExheWVyLFxuICBQb2x5Z29uTGF5ZXIsXG4gIExpbmVMYXllcixcbiAgTWl4TGF5ZXIsXG4gIEJhc2VMYXllcixcbiAgQmFzZVZlY3RvckxheWVyXG59IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9sYXllcic7XG5pbXBvcnQgeyBTZXJ2aWNlVXRpbCB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Z2lwLW9sLXBvaW50LWxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvaW50LWxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9pbnQtbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBvaW50TGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdGhpcy52aXNpYmxlO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMudmlzaWJsZTtcbiAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuc3RhdGVDb25maWcgfHwge307XG4gICAgdGhpcy5pbml0TGF5ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnur/moLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IHN0eWxlXG4gICAqIHBvaW50U3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuICAgIGNvbnN0IHN0eWxlMDEgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5JY29uKHtcbiAgICAgICAgLy8gWzAuNSwwLjVd6KGo56S65Z2Q5qCH5a+55bqU56ym5Y+35Lit5b+D77yMWzAuNSwxXeihqOekuuWdkOagh+WvueW6lOespuWPt+W6lemDqOS4remXtOeCuVxuICAgICAgICBhbmNob3I6IFswLjUsIDAuNV0sXG4gICAgICAgIGFuY2hvclhVbml0czogZnJhY3Rpb24sXG4gICAgICAgIGFuY2hvcllVbml0czogZnJhY3Rpb24sXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHNyYzogYXNzZXRzL2VhdHRpbmcucG5nIC8vIOespuWPt+WbvueJh3VybFxuICAgICAgfSksXG4gICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgIHRleHRBbGlnbjogY2VudGVyICwgLy8g5paH5pys5qCH5rOoIOWvuem9kOaWueW8j1xuICAgICAgICB0ZXh0QmFzZWxpbmU6ICBtaWRkbGUgLCAvLyDmlofmnKzln7rnur/kuLptaWRkbGUsXG4gICAgICAgIGZvbnQ6ICBib2xkIDIycHggQXJpYWwgLCAvLyDlrZfkvZMg5a2X5Y+3IOWtl+S9k1xuICAgICAgICB0ZXh0OiBmZWF0dXJlLmdldCggbmFtZSApLCAvLyDmoIfms6jnmoTlhoXlrrlcbiAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgIGNvbG9yOiAgcmdiYSgyNTUsMCwwLDAuOSkgIC8vIOWtl+S9k+minOiJslxuICAgICAgICB9KSxcbiAgICAgICAgLy8g5a2X5L2T5aSW5pmV55qE6aKc6Imy5Y+K5a695bqmXG4gICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgY29sb3I6ICByZ2JhKDAsMjU1LDAsMC43KSAsXG4gICAgICAgICAgd2lkdGg6IDNcbiAgICAgICAgfSksXG4gICAgICAgIG9mZnNldFg6IDAsIC8vIOWBj+enu+mHjyB4IOWdkOagh++8iOWNleS9jeS4uuWDj+e0oO+8iVxuICAgICAgICBvZmZzZXRZOiAtMjAsIC8vIOWBj+enu+mHjyB5IOWdkOagh++8iOWNleS9jeS4uuWDj+e0oO+8iVxuICAgICAgICByb3RhdGlvbjogMCAvLyDml4vovawg6buY6K6k5Li6MFxuICAgICAgfSlcbiAgICB9KTtcbiAgICBzdHlsZXMucHVzaChzdHlsZTAxKTtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG4gICAqL1xuICBASW5wdXQoJ3N0eWxlJylcbiAgc2V0IHNldFN0eWxlKHZhbHVlOiBGdW5jdGlvbikge1xuICAgIHRoaXMucG9pbnRMYXllci5zZXRTdHlsZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICog5Zu+5bGC5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgIGNvb3Jkc0ZpZWxkOiBwb2ludF9nZW9tZXRyeSxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH07XG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBzZXRDb25maWcodmFsdWU6IG9iamVjdCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudmlzaWJsZSwgdmFsdWUpO1xuICB9XG4gIC8vIOabtOaWsCDlj6/op4HmgKdcbiAgQElucHV0KCd2aXNpYmxlJylcbiAgc2V0IHNldFZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XG4gIH1cbiAgX3Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWcsOWbvuWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gbWFwXG4gICAqL1xuICBASW5wdXQoJ21hcCcpXG4gIHNldCBzZXRNYXAodmFsdWU6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdJbnB1dCsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrJyk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn5bey57uR5a6aIG1hcCDnu4Tku7Yg5a6e5L6LJyk7XG4gICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgdGhpcy5fbWFwLm1hcC5hZGRMYXllcih0aGlzLnBvaW50TGF5ZXIpO1xuICB9XG5cbiAgLy8g5pWw5o2uXG4gIHByaXZhdGUgX2RhdGE6IE1hcENvbXBvbmVudDtcbiAgLyoqXG4gICAqIOaVsOaNruWPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gZGF0YVxuICAgKiBAZXhhbXBsZVxuICAgKiBbXG4gICAge1xuICAgICAgcG9pbnRfZ2VvbWV0cnk6ICBwb2ludCgxMTguODIyNjY4MzU1OTQ1NTQgMzEuODk0NTAzNTI0OTg3MDkpICxcbiAgICAgIC8vIGNvb3JkaW5hdGVzOiBbMTE5LjExNTM0MjA1OTY2MjY4LCAzMi45OTA1MTMwMDc1MzUwODVdLFxuICAgICAgbmFtZTogIOS4nOWNl+Wkp+Wtpu+8jFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRfZ2VvbWV0cnk6ICBwb2ludCgxMTguOTYyNTgwNjYzMDg4MzkgMzMuMDAwNTA2NzQzNzU5NTgpICxcbiAgICAgIC8vIGNvb3JkaW5hdGVzOiBbMTE4Ljk2MjU4MDY2MzA4ODM5LCAzMy4wMDA1MDY3NDM3NTk1OF0sXG4gICAgICBuYW1lOiAg5YWx5Yac5p2R77yMXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludF9nZW9tZXRyeTogIHBvaW50KDExOS4wMDczMTQ1Mjk5OTggMzIuOTczODU2NzgwNDk0MjgpICxcbiAgICAgIC8vIGNvb3JkaW5hdGVzOiBbMTE5LjAwNzMxNDUyOTk5OCwgMzIuOTczODU2NzgwNDk0MjhdLFxuICAgICAgbmFtZTogIOingumfs+Wvuu+8jFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRfZ2VvbWV0cnk6ICBwb2ludCgxMTkuMDYzOTQ1NzAxOTM2NzYgMzIuODI5MTg1NTUxMzM5OCkgLFxuICAgICAgLy8gY29vcmRpbmF0ZXM6IFsxMTkuMDYzOTQ1NzAxOTM2NzYsIDMyLjgyOTE4NTU1MTMzOThdLFxuICAgICAgbmFtZTogIOmHkeWNl+mVh++8jFxuICAgIH1cbiAgXTtcbiAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgc2V0RGF0YSh2YWx1ZTogYW55KSB7XG4gICAgLy8g5YGa5aSE55CGXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZGF0YVIgPSB2YWx1ZTtcblxuICAgIGNvbnN0IGNvb3JkRmllbGRDb25maWcgPSB7IHdrdEZpZWxkOiB0aGlzLl9zdGF0ZVsnY29vcmRzRmllbGQnXSB9O1xuICAgIGlmICh0aGlzLl9tYXAuY29uZmlnLmNvb3JkaW5hdGVTeXN0aW1TcmlkID09PSAnRVBTRzozODU3Jykge1xuICAgICAgZGF0YVIgPSBTZXJ2aWNlVXRpbC5Db252ZXJ0UG9pbnRzbGwydG1lcmModmFsdWUsIGNvb3JkRmllbGRDb25maWcpOyAvLyBkYXRhUlxuICAgIH1cbiAgICAvLyDlhYjmuIXnqbrvvIzlho3lop7liqBcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgdGhpcy5wb2ludExheWVyLmNsZWFyRmVhdHVyZXMoKTtcbiAgICB0aGlzLnBvaW50TGF5ZXIuYWRkRmVhdHVyZXMoZGF0YVIsIGNvb3JkRmllbGRDb25maWcpO1xuICB9XG4gIHBvaW50TGF5ZXI6IGFueTtcbiAgY29uZmlnOiBhbnk7XG4gIF9zdGF0ZTogYW55O1xuICBfY29uZmlnOiBhbnk7XG5cbiAgcHJpdmF0ZSB2aXNpYmxlOiB0cnVlO1xuXG4gIHByaXZhdGUgc3RhdGVDb25maWcgPSB7XG4gICAgY29vcmRzRmllbGQ6ICdwb2ludF9nZW9tZXRyeSdcbiAgfTtcblxuICBwcml2YXRlIF9tYXA6IE1hcENvbXBvbmVudDtcblxuICAvLyDliJ3lp4vljJblm77lsYLlj6rnlLHkuIDmrKFcbiAgaW5pdExheWVyKCkge1xuICAgIHRoaXMucG9pbnRMYXllciA9IG5ldyBQb2ludExheWVyKHtcbiAgICAgIGxheWVyTmFtZTogJ3BvaW50TGF5ZXInLFxuICAgICAgaW5mb1RlbXBsYXRlOiAnJyxcbiAgICAgIGRhdGFMaXN0OiBbXSxcbiAgICAgIGNvb3Jkc0ZpZWxkOiB7IHg6ICdjb29yZGluYXRlcycsIHk6ICdjb29yZGluYXRlcycgfVxuICAgIH0pO1xuICAgIC8vIOm7mOiupOagt+W8j+mXrumimFxuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IG5ldyBTdHlsZSh7XG4gICAgICBpbWFnZTogbmV3IEljb24oe1xuICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICBmaWxsOiBuZXcgRmlsbCh7XG4gICAgICAgICAgY29sb3I6ICcjZmYwMDAwJ1xuICAgICAgICB9KSxcbiAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnLFxuICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgIH0pLFxuICAgICAgICBhbmNob3I6IFswLjUsIDAuNV0sXG4gICAgICAgIGFuY2hvclhVbml0czogJ2ZyYWN0aW9uJyxcbiAgICAgICAgYW5jaG9yWVVuaXRzOiAnZnJhY3Rpb24nLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzcmM6ICdhc3NldHMvZWF0dGluZy5wbmcnIC8vIOespuWPt+WbvueJh3VybFxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLnBvaW50TGF5ZXIuc2V0U3R5bGUoZGVmYXVsdFN0eWxlKTtcbiAgfVxuICB1cGRhdGVWaXNpYmxlKCkge1xuICAgIHRoaXMucG9pbnRMYXllci5zZXRWaXNpYmxlKHRoaXMuX3Zpc2libGUpO1xuICB9XG4gIC8vIOmFjee9rumAiemhuVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCfliJ3lp4vljJYrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKycpO1xuICB9XG59XG4iXX0=