/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Style, Fill, Stroke, Icon } from 'ol/style';
import { PointLayer } from 'handsmap-map-client/openlayers/layer';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
var PointLayerComponent = /** @class */ (function () {
    function PointLayerComponent() {
        this.stateConfig = {
            coordsField: 'point_geometry'
        };
        this._visible = this.visible;
        this._config = this.visible;
        this._state = this.stateConfig || {};
        this.initLayer();
    }
    Object.defineProperty(PointLayerComponent.prototype, "setStyle", {
        /**
         * 线样式参数
         * @param {any} style
         * pointStyle(feature, resolution) {
          const styles = [];
          const style01 = new ol.style.Style({
            image: new ol.style.Icon({
              // [0.5,0.5]表示坐标对应符号中心，[0.5,1]表示坐标对应符号底部中间点
              anchor: [0.5, 0.5],
              anchorXUnits: fraction,
              anchorYUnits: fraction,
              opacity: 1,
              src: assets/eatting.png // 符号图片url
            }),
            text: new ol.style.Text({
              textAlign: center , // 文本标注 对齐方式
              textBaseline:  middle , // 文本基线为middle,
              font:  bold 22px Arial , // 字体 字号 字体
              text: feature.get( name ), // 标注的内容
              fill: new ol.style.Fill({
                color:  rgba(255,0,0,0.9)  // 字体颜色
              }),
              // 字体外晕的颜色及宽度
              stroke: new ol.style.Stroke({
                color:  rgba(0,255,0,0.7) ,
                width: 3
              }),
              offsetX: 0, // 偏移量 x 坐标（单位为像素）
              offsetY: -20, // 偏移量 y 坐标（单位为像素）
              rotation: 0 // 旋转 默认为0
            })
          });
          styles.push(style01);
          return styles;
        }
         */
        set: /**
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
        function (value) {
            this.pointLayer.setStyle(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointLayerComponent.prototype, "setConfig", {
        /**
         * 图层样式参数
         * @param {any} config
         * @example
         * {
          coordsField: point_geometry,
          visible: true
        };
         */
        set: /**
         * 图层样式参数
         * \@example
         * {
         * coordsField: point_geometry,
         * visible: true
         * };
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._config = Object.assign({}, this.visible, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointLayerComponent.prototype, "setVisible", {
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
    Object.defineProperty(PointLayerComponent.prototype, "setMap", {
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
            // console.log('Input++++++++++++++++++++++++++++++++++++++++++++++++++');
            if (!value) {
                return;
            }
            console.log('已绑定 map 组件 实例');
            this._map = value;
            this._map.map.addLayer(this.pointLayer);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointLayerComponent.prototype, "setData", {
        /**
         * 数据参数
         * @param {any} data
         * @example
         * [
          {
            point_geometry:  point(118.82266835594554 31.89450352498709) ,
            // coordinates: [119.11534205966268, 32.990513007535085],
            name:  东南大学，
          },
          {
            point_geometry:  point(118.96258066308839 33.00050674375958) ,
            // coordinates: [118.96258066308839, 33.00050674375958],
            name:  共农村，
          },
          {
            point_geometry:  point(119.007314529998 32.97385678049428) ,
            // coordinates: [119.007314529998, 32.97385678049428],
            name:  观音寺，
          },
          {
            point_geometry:  point(119.06394570193676 32.8291855513398) ,
            // coordinates: [119.06394570193676, 32.8291855513398],
            name:  金南镇，
          }
        ];
       */
        set: /**
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
        function (value) {
            // 做处理
            if (!value) {
                return;
            }
            /** @type {?} */
            var dataR = value;
            /** @type {?} */
            var coordFieldConfig = { wktField: this._state['coordsField'] };
            if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
                dataR = ServiceUtil.ConvertPointsll2tmerc(value, coordFieldConfig); // dataR
            }
            // 先清空，再增加
            this._data = value;
            this.pointLayer.clearFeatures();
            this.pointLayer.addFeatures(dataR, coordFieldConfig);
        },
        enumerable: true,
        configurable: true
    });
    // 初始化图层只由一次
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    PointLayerComponent.prototype.initLayer = 
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    function () {
        this.pointLayer = new PointLayer({
            layerName: 'pointLayer',
            infoTemplate: '',
            dataList: [],
            coordsField: { x: 'coordinates', y: 'coordinates' }
        });
        // 默认样式问题
        /** @type {?} */
        var defaultStyle = new Style({
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
    };
    /**
     * @return {?}
     */
    PointLayerComponent.prototype.updateVisible = /**
     * @return {?}
     */
    function () {
        this.pointLayer.setVisible(this._visible);
    };
    // 配置选项
    // 配置选项
    /**
     * @return {?}
     */
    PointLayerComponent.prototype.ngOnInit = 
    // 配置选项
    /**
     * @return {?}
     */
    function () {
        // console.log('初始化++++++++++++++++++++++++++++++++++++++++++++++++++');
    };
    PointLayerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-point-layer',
                    template: "",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PointLayerComponent.ctorParameters = function () { return []; };
    PointLayerComponent.propDecorators = {
        setStyle: [{ type: Input, args: ['style',] }],
        setConfig: [{ type: Input, args: ['config',] }],
        setVisible: [{ type: Input, args: ['visible',] }],
        setMap: [{ type: Input, args: ['map',] }],
        setData: [{ type: Input, args: ['data',] }]
    };
    return PointLayerComponent;
}());
export { PointLayerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGdpcC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9wb2ludC1sYXllci9wb2ludC1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsS0FBSyxFQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzdELE9BQU8sRUFFTCxVQUFVLEVBTVgsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbEU7SUFPRTtRQXlJUSxnQkFBVyxHQUFHO1lBQ3BCLFdBQVcsRUFBRSxnQkFBZ0I7U0FDOUIsQ0FBQztRQTFJQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFzQ0Qsc0JBQ0kseUNBQVE7UUFyQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBbUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUNILFVBQ2EsS0FBZTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVdELHNCQUNJLDBDQUFTO1FBVmI7Ozs7Ozs7O1dBUUc7Ozs7Ozs7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QUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxPQUFPOzs7OztJQUVQLHNDQUFROzs7OztJQUFSO1FBQ0Usd0VBQXdFO0lBQzFFLENBQUM7O2dCQXpMRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFlBQTJDOztpQkFFNUM7Ozs7OzJCQTZDRSxLQUFLLFNBQUMsT0FBTzs0QkFjYixLQUFLLFNBQUMsUUFBUTs2QkFLZCxLQUFLLFNBQUMsU0FBUzt5QkFXZixLQUFLLFNBQUMsS0FBSzswQkF3Q1gsS0FBSyxTQUFDLE1BQU07O0lBa0VmLDBCQUFDO0NBQUEsQUExTEQsSUEwTEM7U0FwTFksbUJBQW1COzs7SUFvRTlCLHVDQUFrQjs7Ozs7SUFrQmxCLG9DQUE0Qjs7SUE2QzVCLHlDQUFnQjs7SUFDaEIscUNBQVk7O0lBQ1oscUNBQVk7O0lBQ1osc0NBQWE7Ozs7O0lBRWIsc0NBQXNCOzs7OztJQUV0QiwwQ0FFRTs7Ozs7SUFFRixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWFwL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL01hcCc7XG5pbXBvcnQgeyBTdHlsZSwgQ2lyY2xlLCBGaWxsLCBTdHJva2UsIEljb24gfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQge1xuICBUaWxlWFlaTGF5ZXIsXG4gIFBvaW50TGF5ZXIsXG4gIFBvbHlnb25MYXllcixcbiAgTGluZUxheWVyLFxuICBNaXhMYXllcixcbiAgQmFzZUxheWVyLFxuICBCYXNlVmVjdG9yTGF5ZXJcbn0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL2xheWVyJztcbmltcG9ydCB7IFNlcnZpY2VVdGlsIH0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtcG9pbnQtbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9pbnQtbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb2ludC1sYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9pbnRMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Zpc2libGUgPSB0aGlzLnZpc2libGU7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy52aXNpYmxlO1xuICAgIHRoaXMuX3N0YXRlID0gdGhpcy5zdGF0ZUNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmluaXRMYXllcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOe6v+agt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gc3R5bGVcbiAgICogcG9pbnRTdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gW107XG4gICAgY29uc3Qgc3R5bGUwMSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkljb24oe1xuICAgICAgICAvLyBbMC41LDAuNV3ooajnpLrlnZDmoIflr7nlupTnrKblj7fkuK3lv4PvvIxbMC41LDFd6KGo56S65Z2Q5qCH5a+55bqU56ym5Y+35bqV6YOo5Lit6Ze054K5XG4gICAgICAgIGFuY2hvcjogWzAuNSwgMC41XSxcbiAgICAgICAgYW5jaG9yWFVuaXRzOiBmcmFjdGlvbixcbiAgICAgICAgYW5jaG9yWVVuaXRzOiBmcmFjdGlvbixcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgc3JjOiBhc3NldHMvZWF0dGluZy5wbmcgLy8g56ym5Y+35Zu+54mHdXJsXG4gICAgICB9KSxcbiAgICAgIHRleHQ6IG5ldyBvbC5zdHlsZS5UZXh0KHtcbiAgICAgICAgdGV4dEFsaWduOiBjZW50ZXIgLCAvLyDmlofmnKzmoIfms6gg5a+56b2Q5pa55byPXG4gICAgICAgIHRleHRCYXNlbGluZTogIG1pZGRsZSAsIC8vIOaWh+acrOWfuue6v+S4um1pZGRsZSxcbiAgICAgICAgZm9udDogIGJvbGQgMjJweCBBcmlhbCAsIC8vIOWtl+S9kyDlrZflj7cg5a2X5L2TXG4gICAgICAgIHRleHQ6IGZlYXR1cmUuZ2V0KCBuYW1lICksIC8vIOagh+azqOeahOWGheWuuVxuICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgY29sb3I6ICByZ2JhKDI1NSwwLDAsMC45KSAgLy8g5a2X5L2T6aKc6ImyXG4gICAgICAgIH0pLFxuICAgICAgICAvLyDlrZfkvZPlpJbmmZXnmoTpopzoibLlj4rlrr3luqZcbiAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICBjb2xvcjogIHJnYmEoMCwyNTUsMCwwLjcpICxcbiAgICAgICAgICB3aWR0aDogM1xuICAgICAgICB9KSxcbiAgICAgICAgb2Zmc2V0WDogMCwgLy8g5YGP56e76YePIHgg5Z2Q5qCH77yI5Y2V5L2N5Li65YOP57Sg77yJXG4gICAgICAgIG9mZnNldFk6IC0yMCwgLy8g5YGP56e76YePIHkg5Z2Q5qCH77yI5Y2V5L2N5Li65YOP57Sg77yJXG4gICAgICAgIHJvdGF0aW9uOiAwIC8vIOaXi+i9rCDpu5jorqTkuLowXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHN0eWxlcy5wdXNoKHN0eWxlMDEpO1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbiAgICovXG4gIEBJbnB1dCgnc3R5bGUnKVxuICBzZXQgc2V0U3R5bGUodmFsdWU6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5wb2ludExheWVyLnNldFN0eWxlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm77lsYLmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAgY29vcmRzRmllbGQ6IHBvaW50X2dlb21ldHJ5LFxuICAgIHZpc2libGU6IHRydWVcbiAgfTtcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IHNldENvbmZpZyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy52aXNpYmxlLCB2YWx1ZSk7XG4gIH1cbiAgLy8g5pu05pawIOWPr+ingeaAp1xuICBASW5wdXQoJ3Zpc2libGUnKVxuICBzZXQgc2V0VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZpc2libGUoKTtcbiAgfVxuICBfdmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICog5Zyw5Zu+5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBtYXBcbiAgICovXG4gIEBJbnB1dCgnbWFwJylcbiAgc2V0IHNldE1hcCh2YWx1ZTogTWFwQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0lucHV0KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysnKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCflt7Lnu5HlrpogbWFwIOe7hOS7tiDlrp7kvosnKTtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB0aGlzLl9tYXAubWFwLmFkZExheWVyKHRoaXMucG9pbnRMYXllcik7XG4gIH1cblxuICAvLyDmlbDmja5cbiAgcHJpdmF0ZSBfZGF0YTogTWFwQ29tcG9uZW50O1xuICAvKipcbiAgICog5pWw5o2u5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhXG4gICAqIEBleGFtcGxlXG4gICAqIFtcbiAgICB7XG4gICAgICBwb2ludF9nZW9tZXRyeTogIHBvaW50KDExOC44MjI2NjgzNTU5NDU1NCAzMS44OTQ1MDM1MjQ5ODcwOSkgLFxuICAgICAgLy8gY29vcmRpbmF0ZXM6IFsxMTkuMTE1MzQyMDU5NjYyNjgsIDMyLjk5MDUxMzAwNzUzNTA4NV0sXG4gICAgICBuYW1lOiAg5Lic5Y2X5aSn5a2m77yMXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludF9nZW9tZXRyeTogIHBvaW50KDExOC45NjI1ODA2NjMwODgzOSAzMy4wMDA1MDY3NDM3NTk1OCkgLFxuICAgICAgLy8gY29vcmRpbmF0ZXM6IFsxMTguOTYyNTgwNjYzMDg4MzksIDMzLjAwMDUwNjc0Mzc1OTU4XSxcbiAgICAgIG5hbWU6ICDlhbHlhpzmnZHvvIxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50X2dlb21ldHJ5OiAgcG9pbnQoMTE5LjAwNzMxNDUyOTk5OCAzMi45NzM4NTY3ODA0OTQyOCkgLFxuICAgICAgLy8gY29vcmRpbmF0ZXM6IFsxMTkuMDA3MzE0NTI5OTk4LCAzMi45NzM4NTY3ODA0OTQyOF0sXG4gICAgICBuYW1lOiAg6KeC6Z+z5a+677yMXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludF9nZW9tZXRyeTogIHBvaW50KDExOS4wNjM5NDU3MDE5MzY3NiAzMi44MjkxODU1NTEzMzk4KSAsXG4gICAgICAvLyBjb29yZGluYXRlczogWzExOS4wNjM5NDU3MDE5MzY3NiwgMzIuODI5MTg1NTUxMzM5OF0sXG4gICAgICBuYW1lOiAg6YeR5Y2X6ZWH77yMXG4gICAgfVxuICBdO1xuICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBzZXREYXRhKHZhbHVlOiBhbnkpIHtcbiAgICAvLyDlgZrlpITnkIZcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkYXRhUiA9IHZhbHVlO1xuXG4gICAgY29uc3QgY29vcmRGaWVsZENvbmZpZyA9IHsgd2t0RmllbGQ6IHRoaXMuX3N0YXRlWydjb29yZHNGaWVsZCddIH07XG4gICAgaWYgKHRoaXMuX21hcC5jb25maWcuY29vcmRpbmF0ZVN5c3RpbVNyaWQgPT09ICdFUFNHOjM4NTcnKSB7XG4gICAgICBkYXRhUiA9IFNlcnZpY2VVdGlsLkNvbnZlcnRQb2ludHNsbDJ0bWVyYyh2YWx1ZSwgY29vcmRGaWVsZENvbmZpZyk7IC8vIGRhdGFSXG4gICAgfVxuICAgIC8vIOWFiOa4heepuu+8jOWGjeWinuWKoFxuICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICB0aGlzLnBvaW50TGF5ZXIuY2xlYXJGZWF0dXJlcygpO1xuICAgIHRoaXMucG9pbnRMYXllci5hZGRGZWF0dXJlcyhkYXRhUiwgY29vcmRGaWVsZENvbmZpZyk7XG4gIH1cbiAgcG9pbnRMYXllcjogYW55O1xuICBjb25maWc6IGFueTtcbiAgX3N0YXRlOiBhbnk7XG4gIF9jb25maWc6IGFueTtcblxuICBwcml2YXRlIHZpc2libGU6IHRydWU7XG5cbiAgcHJpdmF0ZSBzdGF0ZUNvbmZpZyA9IHtcbiAgICBjb29yZHNGaWVsZDogJ3BvaW50X2dlb21ldHJ5J1xuICB9O1xuXG4gIHByaXZhdGUgX21hcDogTWFwQ29tcG9uZW50O1xuXG4gIC8vIOWIneWni+WMluWbvuWxguWPqueUseS4gOasoVxuICBpbml0TGF5ZXIoKSB7XG4gICAgdGhpcy5wb2ludExheWVyID0gbmV3IFBvaW50TGF5ZXIoe1xuICAgICAgbGF5ZXJOYW1lOiAncG9pbnRMYXllcicsXG4gICAgICBpbmZvVGVtcGxhdGU6ICcnLFxuICAgICAgZGF0YUxpc3Q6IFtdLFxuICAgICAgY29vcmRzRmllbGQ6IHsgeDogJ2Nvb3JkaW5hdGVzJywgeTogJ2Nvb3JkaW5hdGVzJyB9XG4gICAgfSk7XG4gICAgLy8g6buY6K6k5qC35byP6Zeu6aKYXG4gICAgY29uc3QgZGVmYXVsdFN0eWxlID0gbmV3IFN0eWxlKHtcbiAgICAgIGltYWdlOiBuZXcgSWNvbih7XG4gICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgIGZpbGw6IG5ldyBGaWxsKHtcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnXG4gICAgICAgIH0pLFxuICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgIGNvbG9yOiAnI2ZmMDAwMCcsXG4gICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgfSksXG4gICAgICAgIGFuY2hvcjogWzAuNSwgMC41XSxcbiAgICAgICAgYW5jaG9yWFVuaXRzOiAnZnJhY3Rpb24nLFxuICAgICAgICBhbmNob3JZVW5pdHM6ICdmcmFjdGlvbicsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHNyYzogJ2Fzc2V0cy9lYXR0aW5nLnBuZycgLy8g56ym5Y+35Zu+54mHdXJsXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMucG9pbnRMYXllci5zZXRTdHlsZShkZWZhdWx0U3R5bGUpO1xuICB9XG4gIHVwZGF0ZVZpc2libGUoKSB7XG4gICAgdGhpcy5wb2ludExheWVyLnNldFZpc2libGUodGhpcy5fdmlzaWJsZSk7XG4gIH1cbiAgLy8g6YWN572u6YCJ6aG5XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ+WIneWni+WMlisrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrJyk7XG4gIH1cbn1cbiJdfQ==