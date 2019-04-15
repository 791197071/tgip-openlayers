/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MapComponent } from '../../map/map.component';
import { Style, Stroke } from 'ol/style';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
import { LineLayer } from 'handsmap-map-client/openlayers/layer';
var LineLayerComponent = /** @class */ (function () {
    function LineLayerComponent() {
        this.defaultConfig = {
            coordsField: 'line_geometry',
            visible: true
        };
        this._config = this.defaultConfig || {};
        this.initLayer();
    }
    Object.defineProperty(LineLayerComponent.prototype, "setStyle", {
        /**
         * 线样式参数
         * @param {any} style
         * @example
         *   lineStyle(feature, resolution) {
          const styles = [];
          const style = new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'rgba(255,0,0,0.6)',
              width: 5
            }),
            text: new ol.style.Text({
              textAlign: 'center', // 文本标注 对齐方式
              textBaseline: 'middle', // 文本基线为middle,
              font: 'bold 22px Arial', // 字体 字号 字体
              text: feature.get('name'), // 标注的内容
              fill: new ol.style.Fill({
                color: 'rgba(255,0,0,0.9)' // 字体颜色
              }),
              // 字体外晕的颜色及宽度
              stroke: new ol.style.Stroke({
                color: 'rgba(0,255,0,0.7)',
                width: 3
              }),
              offsetX: 0, // 偏移量 x 坐标（单位为像素）
              offsetY: -20, // 偏移量 y 坐标（单位为像素）
              rotation: 0 // 旋转 默认为0
            })
          });
      
          styles.push(style);
          return styles;
        }
         */
        set: /**
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
        function (value) {
            this.lineLayer.setStyle(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineLayerComponent.prototype, "setConfig", {
        /**
         * 图层样式参数
         * @param {any} config
         * @example
         * {
          coordsField: line_geometry,
          visible: true
        };
         */
        set: /**
         * 图层样式参数
         * \@example
         * {
         * coordsField: line_geometry,
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
    Object.defineProperty(LineLayerComponent.prototype, "setVisible", {
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
    Object.defineProperty(LineLayerComponent.prototype, "setMap", {
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
            console.log('已绑定 map 组件 实例');
            this._map = value;
            this._map.map.addLayer(this.lineLayer);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineLayerComponent.prototype, "setData", {
        /**
         * 数据参数
         * @param {any} data
         * @example
         * [
          {
            line_geometry:
                LINESTRING (119.1124867064557 32.98860943873043, 119.2048097934819 32.92721934478,119.20005087147024 32.99527192954675)  ,
            name:   淮胜信用社，
          },
          {
            line_geometry:
                LINESTRING (119.1124867064557 32.98860943873043, 119.2048097934819 32.92721934478,119.20005087147024 32.99527192954675)  ,
            name:   淮胜信用社，
          }
        ];
       */
        set: /**
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
                dataR = ServiceUtil.ConvertLinesll2tmerc(value, coordFieldConfig); // dataR
            }
            // 先清空，再增加
            this._data = value;
            this.lineLayer.clearFeatures();
            this.lineLayer.addFeatures(dataR, coordFieldConfig);
        },
        enumerable: true,
        configurable: true
    });
    // 初始化图层只由一次
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    LineLayerComponent.prototype.initLayer = 
    // 初始化图层只由一次
    /**
     * @return {?}
     */
    function () {
        this.lineLayer = new LineLayer({
            layerName: 'lineLayer',
            infoTemplate: '',
            dataList: [],
            coordsField: { x: 'coordinates', y: 'coordinates' }
        });
        // 默认样式问题
        /** @type {?} */
        var defaultStyle = new Style({
            stroke: new Stroke({
                color: 'rgba(255,0,0,0.6)',
                width: 5
            })
        });
        this.lineLayer.setStyle(defaultStyle);
    };
    /**
     * @return {?}
     */
    LineLayerComponent.prototype.updateVisible = /**
     * @return {?}
     */
    function () {
        this.lineLayer.setVisible(this._visible);
    };
    // 配置选项
    // 配置选项
    /**
     * @return {?}
     */
    LineLayerComponent.prototype.ngOnInit = 
    // 配置选项
    /**
     * @return {?}
     */
    function () { };
    LineLayerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-line-layer',
                    template: "",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LineLayerComponent.ctorParameters = function () { return []; };
    LineLayerComponent.propDecorators = {
        setStyle: [{ type: Input, args: ['style',] }],
        setConfig: [{ type: Input, args: ['config',] }],
        setVisible: [{ type: Input, args: ['visible',] }],
        setMap: [{ type: Input, args: ['map',] }],
        setData: [{ type: Input, args: ['data',] }]
    };
    return LineLayerComponent;
}());
export { LineLayerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Z2lwLW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLEVBQVEsTUFBTSxVQUFVLENBQUM7QUFFN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFJTCxTQUFTLEVBSVYsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QztJQU9FO1FBeUhRLGtCQUFhLEdBQUc7WUFDdEIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBM0hBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFtQ0Qsc0JBQ0ksd0NBQVE7UUFuQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQWlDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDSCxVQUNhLEtBQWU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFXRCxzQkFDSSx5Q0FBUztRQVZiOzs7Ozs7OztXQVFHOzs7Ozs7Ozs7OztRQUNILFVBQ2MsS0FBYTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxD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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWFwL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGUsIENpcmNsZSwgRmlsbCwgU3Ryb2tlLCBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnaGFuZHNtYXAtbWFwLWNsaWVudC9vcGVubGF5ZXJzL01hcCc7XG5pbXBvcnQgeyBTZXJ2aWNlVXRpbCB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy91dGlsJztcbmltcG9ydCB7XG4gIFRpbGVYWVpMYXllcixcbiAgUG9pbnRMYXllcixcbiAgUG9seWdvbkxheWVyLFxuICBMaW5lTGF5ZXIsXG4gIE1peExheWVyLFxuICBCYXNlTGF5ZXIsXG4gIEJhc2VWZWN0b3JMYXllclxufSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvbGF5ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtbGluZS1sYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5lLWxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGluZS1sYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGluZUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnIHx8IHt9O1xuICAgIHRoaXMuaW5pdExheWVyKCk7XG4gIH1cbiAgLyoqXG4gICAqIOe6v+agt+W8j+WPguaVsFxuICAgKiBAcGFyYW0ge2FueX0gc3R5bGVcbiAgICogQGV4YW1wbGVcbiAgICogICBsaW5lU3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuICAgIGNvbnN0IHN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMCwwLDAuNiknLFxuICAgICAgICB3aWR0aDogNVxuICAgICAgfSksXG4gICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIOaWh+acrOagh+azqCDlr7npvZDmlrnlvI9cbiAgICAgICAgdGV4dEJhc2VsaW5lOiAnbWlkZGxlJywgLy8g5paH5pys5Z+657q/5Li6bWlkZGxlLFxuICAgICAgICBmb250OiAnYm9sZCAyMnB4IEFyaWFsJywgLy8g5a2X5L2TIOWtl+WPtyDlrZfkvZNcbiAgICAgICAgdGV4dDogZmVhdHVyZS5nZXQoJ25hbWUnKSwgLy8g5qCH5rOo55qE5YaF5a65XG4gICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDAsMCwwLjkpJyAvLyDlrZfkvZPpopzoibJcbiAgICAgICAgfSksXG4gICAgICAgIC8vIOWtl+S9k+WkluaZleeahOminOiJsuWPiuWuveW6plxuICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgwLDI1NSwwLDAuNyknLFxuICAgICAgICAgIHdpZHRoOiAzXG4gICAgICAgIH0pLFxuICAgICAgICBvZmZzZXRYOiAwLCAvLyDlgY/np7vph48geCDlnZDmoIfvvIjljZXkvY3kuLrlg4/ntKDvvIlcbiAgICAgICAgb2Zmc2V0WTogLTIwLCAvLyDlgY/np7vph48geSDlnZDmoIfvvIjljZXkvY3kuLrlg4/ntKDvvIlcbiAgICAgICAgcm90YXRpb246IDAgLy8g5peL6L2sIOm7mOiupOS4ujBcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBzdHlsZXMucHVzaChzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuICAgKi9cbiAgQElucHV0KCdzdHlsZScpXG4gIHNldCBzZXRTdHlsZSh2YWx1ZTogRnVuY3Rpb24pIHtcbiAgICB0aGlzLmxpbmVMYXllci5zZXRTdHlsZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICog5Zu+5bGC5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgIGNvb3Jkc0ZpZWxkOiBsaW5lX2dlb21ldHJ5LFxuICAgIHZpc2libGU6IHRydWVcbiAgfTtcbiAgICovXG4gIEBJbnB1dCgnY29uZmlnJylcbiAgc2V0IHNldENvbmZpZyh2YWx1ZTogb2JqZWN0KSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG5cbiAgfVxuXG4gICAgLy8g5pu05pawIOWPr+ingeaAp1xuICAgIEBJbnB1dCgndmlzaWJsZScpXG4gICAgc2V0IHNldFZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZSgpO1xuICAgIH1cbiAgICBfdmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICog5Zyw5Zu+5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBtYXBcbiAgICovXG4gIEBJbnB1dCgnbWFwJylcbiAgc2V0IHNldE1hcCh2YWx1ZTogTWFwQ29tcG9uZW50KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn5bey57uR5a6aIG1hcCDnu4Tku7Yg5a6e5L6LJyk7XG4gICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgdGhpcy5fbWFwLm1hcC5hZGRMYXllcih0aGlzLmxpbmVMYXllcik7XG4gIH1cbiAgcHJpdmF0ZSBfZGF0YTogTWFwQ29tcG9uZW50O1xuICAvKipcbiAgICog5pWw5o2u5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhXG4gICAqIEBleGFtcGxlXG4gICAqIFtcbiAgICB7XG4gICAgICBsaW5lX2dlb21ldHJ5OlxuICAgICAgICAgIExJTkVTVFJJTkcgKDExOS4xMTI0ODY3MDY0NTU3IDMyLjk4ODYwOTQzODczMDQzLCAxMTkuMjA0ODA5NzkzNDgxOSAzMi45MjcyMTkzNDQ3OCwxMTkuMjAwMDUwODcxNDcwMjQgMzIuOTk1MjcxOTI5NTQ2NzUpICAsXG4gICAgICBuYW1lOiAgIOa3ruiDnOS/oeeUqOekvu+8jFxuICAgIH0sXG4gICAge1xuICAgICAgbGluZV9nZW9tZXRyeTpcbiAgICAgICAgICBMSU5FU1RSSU5HICgxMTkuMTEyNDg2NzA2NDU1NyAzMi45ODg2MDk0Mzg3MzA0MywgMTE5LjIwNDgwOTc5MzQ4MTkgMzIuOTI3MjE5MzQ0NzgsMTE5LjIwMDA1MDg3MTQ3MDI0IDMyLjk5NTI3MTkyOTU0Njc1KSAgLFxuICAgICAgbmFtZTogICDmt67og5zkv6HnlKjnpL7vvIxcbiAgICB9XG4gIF07XG4gKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IHNldERhdGEodmFsdWU6IGFueSkge1xuICAgIC8vIOWBmuWkhOeQhlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGRhdGFSID0gdmFsdWU7XG5cbiAgICBjb25zdCBjb29yZEZpZWxkQ29uZmlnID0geyB3a3RGaWVsZDogdGhpcy5fY29uZmlnWydjb29yZHNGaWVsZCddIH07XG4gICAgaWYgKHRoaXMuX21hcC5jb25maWcuY29vcmRpbmF0ZVN5c3RpbVNyaWQgPT09ICdFUFNHOjM4NTcnKSB7XG4gICAgICBkYXRhUiA9IFNlcnZpY2VVdGlsLkNvbnZlcnRMaW5lc2xsMnRtZXJjKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29vcmRGaWVsZENvbmZpZ1xuICAgICAgKTsgLy8gZGF0YVJcbiAgICB9XG4gICAgLy8g5YWI5riF56m677yM5YaN5aKe5YqgXG4gICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgIHRoaXMubGluZUxheWVyLmNsZWFyRmVhdHVyZXMoKTtcbiAgICB0aGlzLmxpbmVMYXllci5hZGRGZWF0dXJlcyhkYXRhUiwgY29vcmRGaWVsZENvbmZpZyk7XG4gIH1cblxuICBsaW5lTGF5ZXI6IGFueTtcbiAgX2NvbmZpZzogb2JqZWN0O1xuXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBjb29yZHNGaWVsZDogJ2xpbmVfZ2VvbWV0cnknLFxuICAgIHZpc2libGU6IHRydWVcbiAgfTtcblxuICBwcml2YXRlIF9tYXA6IE1hcENvbXBvbmVudDtcblxuICAvLyDliJ3lp4vljJblm77lsYLlj6rnlLHkuIDmrKFcbiAgaW5pdExheWVyKCkge1xuICAgIHRoaXMubGluZUxheWVyID0gbmV3IExpbmVMYXllcih7XG4gICAgICBsYXllck5hbWU6ICdsaW5lTGF5ZXInLFxuICAgICAgaW5mb1RlbXBsYXRlOiAnJyxcbiAgICAgIGRhdGFMaXN0OiBbXSxcbiAgICAgIGNvb3Jkc0ZpZWxkOiB7IHg6ICdjb29yZGluYXRlcycsIHk6ICdjb29yZGluYXRlcycgfVxuICAgIH0pO1xuICAgIC8vIOm7mOiupOagt+W8j+mXrumimFxuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IG5ldyBTdHlsZSh7XG4gICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDAsMCwwLjYpJyxcbiAgICAgICAgd2lkdGg6IDVcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgdGhpcy5saW5lTGF5ZXIuc2V0U3R5bGUoZGVmYXVsdFN0eWxlKTtcbiAgfVxuXG4gIHVwZGF0ZVZpc2libGUoKSB7XG4gICAgdGhpcy5saW5lTGF5ZXIuc2V0VmlzaWJsZSh0aGlzLl92aXNpYmxlKTtcbiAgfVxuXG4gIC8vIOmFjee9rumAiemhuVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==