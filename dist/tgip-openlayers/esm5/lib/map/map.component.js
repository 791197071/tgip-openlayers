/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Map } from 'handsmap-map-client/openlayers/Map';
import { View } from 'handsmap-map-client/openlayers/View';
import { TileXYZLayer } from 'handsmap-map-client/openlayers/layer';
/**
 * @record
 */
export function MapConfigInterface() { }
if (false) {
    /** @type {?|undefined} */
    MapConfigInterface.prototype.maxScale;
    /** @type {?|undefined} */
    MapConfigInterface.prototype.minScale;
    /** @type {?|undefined} */
    MapConfigInterface.prototype.extent;
    /** @type {?|undefined} */
    MapConfigInterface.prototype.defaultLevel;
    /** @type {?|undefined} */
    MapConfigInterface.prototype.baseMapUrl;
    /** @type {?|undefined} */
    MapConfigInterface.prototype.proj;
}
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.hasInit = false;
        this.defaultConfig = null;
        this.config = this.defaultConfig;
        console.log('第一步', this.config);
    }
    Object.defineProperty(MapComponent.prototype, "setConfig", {
        /**
         * 图层样式参数
         * @param {any} config
         * @example
         *static mapConfig = {
           centerX : 118.803930100525,
           centerY : 31.8484312112617,
           cnName :  江宁底图 ,
           enName :  jiangning ,
           extentMaxX : 119.366783573428,
           extentMaxY : 32.3233337556079,
           extentMinX : 118.324579652874,
           extentMinY : 31.478149206337,
           id :  test8888888888888 ,
           maxZoom : 7,
           minZoom : 3,
           zoom : 4,
           coordinateSystimSrid :  EPSG:4326 ,
           backgroundColor :  #568899 ,
           basemapMapLayers : [{
             id :  mollit ,
             visible : true,
             sourceId :  jiangning_bg ,
             sourcePara : {
               cnName :  江宁全域旅游 ,
               describe :  test ,
               gmtCreate : 1554256721000,
               gmtModified : 1554256721000,
               enName :  jiangning_88 ,
               id :  4da0d2318ac7aa739233ffe421587b70 ,
               originX : -400,
               originY : 400,
               overAmap : 0,
               coordinateSystimSrid :  EPSG:4326 ,
               resolutions : [0.0009517844023321121, 0.0007138383017490841, 0.00047589220116605604,
                0.00035691915087454206, 0.00017845957543727103, 0.00011897305029151401, 0.000059486525145757005,
                0.000029743262572878502
              ],
               scales : [1600000, 1200000, 800000, 600000, 300000, 200000, 100000, 50000],
               tilesizeHeight : 512,
               tilesizeWidth : 512,
               dpi : 192,
               urlAmap :   ,
               urlLeaflet :   ,
            }
          }]
        };
      }
      
         */
        set: /**
         * 图层样式参数
         * \@example
         * static mapConfig = {
         * centerX : 118.803930100525,
         * centerY : 31.8484312112617,
         * cnName :  江宁底图 ,
         * enName :  jiangning ,
         * extentMaxX : 119.366783573428,
         * extentMaxY : 32.3233337556079,
         * extentMinX : 118.324579652874,
         * extentMinY : 31.478149206337,
         * id :  test8888888888888 ,
         * maxZoom : 7,
         * minZoom : 3,
         * zoom : 4,
         * coordinateSystimSrid :  EPSG:4326 ,
         * backgroundColor :  #568899 ,
         * basemapMapLayers : [{
         * id :  mollit ,
         * visible : true,
         * sourceId :  jiangning_bg ,
         * sourcePara : {
         * cnName :  江宁全域旅游 ,
         * describe :  test ,
         * gmtCreate : 1554256721000,
         * gmtModified : 1554256721000,
         * enName :  jiangning_88 ,
         * id :  4da0d2318ac7aa739233ffe421587b70 ,
         * originX : -400,
         * originY : 400,
         * overAmap : 0,
         * coordinateSystimSrid :  EPSG:4326 ,
         * resolutions : [0.0009517844023321121, 0.0007138383017490841, 0.00047589220116605604,
         * 0.00035691915087454206, 0.00017845957543727103, 0.00011897305029151401, 0.000059486525145757005,
         * 0.000029743262572878502
         * ],
         * scales : [1600000, 1200000, 800000, 600000, 300000, 200000, 100000, 50000],
         * tilesizeHeight : 512,
         * tilesizeWidth : 512,
         * dpi : 192,
         * urlAmap :   ,
         * urlLeaflet :   ,
         * }
         * }]
         * };
         * }
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // 做处理
            if (!value) {
                return;
            }
            this.config = Object.assign({}, this.defaultConfig, value);
            console.log('第3步？', this.config, value);
            this.initMap(this.config);
            this.updateVisible();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('第二步？', this.config);
        if (this.config) {
            this.initMap(this.config);
        }
        else if (this.configUrl) {
            this.initMap(this.configUrl);
        }
        else {
            console.warn('地图配置为空，请检查配置！');
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    MapComponent.prototype.initMap = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        console.log('地图初始化开始');
        if (this.hasInit) {
            console.log('地图已经初始化，配置变化不会自动同步');
            return;
        }
        this.hasInit = true;
        /** @type {?} */
        var mapParams = config;
        this.map = new Map({
            target: 'mapContainer',
            // controls: { zoom: false, roate: false, attribution: false },
            view: View.getViewByHmapserver(mapParams),
        });
        this.xyzLayer = TileXYZLayer.getTileXYZLayerByHmapserver(mapParams);
        this.map.addLayer(this.xyzLayer);
        this.map.showClickCoordinate = true;
    };
    /**
     * @return {?}
     */
    MapComponent.prototype.updateVisible = /**
     * @return {?}
     */
    function () {
        this.map.removeLayer(this.xyzLayer);
        this.xyzLayer = TileXYZLayer.getTileXYZLayerByHmapserver(this.config);
        this.map.addLayer(this.xyzLayer);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log(changes);
    };
    MapComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tgip-ol-map',
                    template: "<div id=\"mapContainer\"></div>",
                    styles: ["#mapContainer{width:100%;height:100%;right:0;position:absolute}"]
                }] }
    ];
    /** @nocollapse */
    MapComponent.ctorParameters = function () { return []; };
    MapComponent.propDecorators = {
        setConfig: [{ type: Input, args: ['config',] }],
        configUrl: [{ type: Input }]
    };
    return MapComponent;
}());
export { MapComponent };
if (false) {
    /** @type {?} */
    MapComponent.prototype._visible;
    /** @type {?} */
    MapComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    MapComponent.prototype.hasInit;
    /** @type {?} */
    MapComponent.prototype.configUrl;
    /**
     * @type {?}
     * @private
     */
    MapComponent.prototype.defaultConfig;
    /** @type {?} */
    MapComponent.prototype.map;
    /** @type {?} */
    MapComponent.prototype.xyzLayer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RnaXAtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9tYXAvbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFcEUsd0NBT0M7OztJQU5DLHNDQUFrQjs7SUFDbEIsc0NBQWtCOztJQUNsQixvQ0FBdUI7O0lBQ3ZCLDBDQUFzQjs7SUFDdEIsd0NBQW9COztJQUNwQixrQ0FBYzs7QUFHaEI7SUErRUU7UUFSUSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSWhCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBSzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXpCRCxzQkFDSSxtQ0FBUztRQW5EYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQWlERzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQ0gsVUFDYyxLQUFVO1lBQ3RCLE1BQU07WUFDTixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQWdCRCwrQkFBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUVELDhCQUFPOzs7O0lBQVAsVUFBUSxNQUFXO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7WUFDZCxTQUFTLEdBQUcsTUFBTTtRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxjQUFjOztZQUV0QixJQUFJLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztTQUUxQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQywyQkFBMkIsQ0FDdEQsU0FBUyxDQUNWLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNELG9DQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsa0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Z0JBNUhGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDJDQUFtQzs7aUJBRXBDOzs7Ozs0QkFvREUsS0FBSyxTQUFDLFFBQVE7NEJBZ0JkLEtBQUs7O0lBcURSLG1CQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F4SFksWUFBWTs7O0lBK0R2QixnQ0FBa0I7O0lBQ2xCLDhCQUFZOzs7OztJQUNaLCtCQUF3Qjs7SUFFeEIsaUNBQTJCOzs7OztJQUUzQixxQ0FBNkI7O0lBRTdCLDJCQUFnQjs7SUFDaEIsZ0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvTWFwJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvVmlldyc7XG5pbXBvcnQgeyBUaWxlWFlaTGF5ZXIgfSBmcm9tICdoYW5kc21hcC1tYXAtY2xpZW50L29wZW5sYXllcnMvbGF5ZXInO1xuZGVjbGFyZSBsZXQgSGFuZHNNYXA7XG5leHBvcnQgaW50ZXJmYWNlIE1hcENvbmZpZ0ludGVyZmFjZSB7XG4gIG1heFNjYWxlPzogbnVtYmVyO1xuICBtaW5TY2FsZT86IG51bWJlcjtcbiAgZXh0ZW50PzogQXJyYXk8bnVtYmVyPjtcbiAgZGVmYXVsdExldmVsPzogbnVtYmVyO1xuICBiYXNlTWFwVXJsPzogc3RyaW5nO1xuICBwcm9qPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RnaXAtb2wtbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICog5Zu+5bGC5qC35byP5Y+C5pWwXG4gICAqIEBwYXJhbSB7YW55fSBjb25maWdcbiAgICogQGV4YW1wbGVcbiAgICpzdGF0aWMgbWFwQ29uZmlnID0ge1xuICAgICBjZW50ZXJYIDogMTE4LjgwMzkzMDEwMDUyNSxcbiAgICAgY2VudGVyWSA6IDMxLjg0ODQzMTIxMTI2MTcsXG4gICAgIGNuTmFtZSA6ICDmsZ/lroHlupXlm74gLFxuICAgICBlbk5hbWUgOiAgamlhbmduaW5nICxcbiAgICAgZXh0ZW50TWF4WCA6IDExOS4zNjY3ODM1NzM0MjgsXG4gICAgIGV4dGVudE1heFkgOiAzMi4zMjMzMzM3NTU2MDc5LFxuICAgICBleHRlbnRNaW5YIDogMTE4LjMyNDU3OTY1Mjg3NCxcbiAgICAgZXh0ZW50TWluWSA6IDMxLjQ3ODE0OTIwNjMzNyxcbiAgICAgaWQgOiAgdGVzdDg4ODg4ODg4ODg4ODggLFxuICAgICBtYXhab29tIDogNyxcbiAgICAgbWluWm9vbSA6IDMsXG4gICAgIHpvb20gOiA0LFxuICAgICBjb29yZGluYXRlU3lzdGltU3JpZCA6ICBFUFNHOjQzMjYgLFxuICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAgIzU2ODg5OSAsXG4gICAgIGJhc2VtYXBNYXBMYXllcnMgOiBbe1xuICAgICAgIGlkIDogIG1vbGxpdCAsXG4gICAgICAgdmlzaWJsZSA6IHRydWUsXG4gICAgICAgc291cmNlSWQgOiAgamlhbmduaW5nX2JnICxcbiAgICAgICBzb3VyY2VQYXJhIDoge1xuICAgICAgICAgY25OYW1lIDogIOaxn+WugeWFqOWfn+aXhea4uCAsXG4gICAgICAgICBkZXNjcmliZSA6ICB0ZXN0ICxcbiAgICAgICAgIGdtdENyZWF0ZSA6IDE1NTQyNTY3MjEwMDAsXG4gICAgICAgICBnbXRNb2RpZmllZCA6IDE1NTQyNTY3MjEwMDAsXG4gICAgICAgICBlbk5hbWUgOiAgamlhbmduaW5nXzg4ICxcbiAgICAgICAgIGlkIDogIDRkYTBkMjMxOGFjN2FhNzM5MjMzZmZlNDIxNTg3YjcwICxcbiAgICAgICAgIG9yaWdpblggOiAtNDAwLFxuICAgICAgICAgb3JpZ2luWSA6IDQwMCxcbiAgICAgICAgIG92ZXJBbWFwIDogMCxcbiAgICAgICAgIGNvb3JkaW5hdGVTeXN0aW1TcmlkIDogIEVQU0c6NDMyNiAsXG4gICAgICAgICByZXNvbHV0aW9ucyA6IFswLjAwMDk1MTc4NDQwMjMzMjExMjEsIDAuMDAwNzEzODM4MzAxNzQ5MDg0MSwgMC4wMDA0NzU4OTIyMDExNjYwNTYwNCxcbiAgICAgICAgICAwLjAwMDM1NjkxOTE1MDg3NDU0MjA2LCAwLjAwMDE3ODQ1OTU3NTQzNzI3MTAzLCAwLjAwMDExODk3MzA1MDI5MTUxNDAxLCAwLjAwMDA1OTQ4NjUyNTE0NTc1NzAwNSxcbiAgICAgICAgICAwLjAwMDAyOTc0MzI2MjU3Mjg3ODUwMlxuICAgICAgICBdLFxuICAgICAgICAgc2NhbGVzIDogWzE2MDAwMDAsIDEyMDAwMDAsIDgwMDAwMCwgNjAwMDAwLCAzMDAwMDAsIDIwMDAwMCwgMTAwMDAwLCA1MDAwMF0sXG4gICAgICAgICB0aWxlc2l6ZUhlaWdodCA6IDUxMixcbiAgICAgICAgIHRpbGVzaXplV2lkdGggOiA1MTIsXG4gICAgICAgICBkcGkgOiAxOTIsXG4gICAgICAgICB1cmxBbWFwIDogICAsXG4gICAgICAgICB1cmxMZWFmbGV0IDogICAsXG4gICAgICB9XG4gICAgfV1cbiAgfTtcbn1cblxuICAgKi9cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgc2V0Q29uZmlnKHZhbHVlOiBhbnkpIHtcbiAgICAvLyDlgZrlpITnkIZcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnLCB2YWx1ZSk7XG4gICAgY29uc29sZS5sb2coJ+esrDPmraXvvJ8nLCB0aGlzLmNvbmZpZywgdmFsdWUpO1xuICAgIHRoaXMuaW5pdE1hcCh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XG4gIH1cblxuICBfdmlzaWJsZTogYm9vbGVhbjtcbiAgY29uZmlnOiBhbnk7XG4gIHByaXZhdGUgaGFzSW5pdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbmZpZ1VybDogc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZyA9IG51bGw7XG5cbiAgcHVibGljIG1hcDogYW55O1xuICBwdWJsaWMgeHl6TGF5ZXI6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gICAgY29uc29sZS5sb2coJ+esrOS4gOatpScsIHRoaXMuY29uZmlnKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygn56ys5LqM5q2l77yfJywgdGhpcy5jb25maWcpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmluaXRNYXAodGhpcy5jb25maWcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWdVcmwpIHtcbiAgICAgIHRoaXMuaW5pdE1hcCh0aGlzLmNvbmZpZ1VybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2Fybign5Zyw5Zu+6YWN572u5Li656m677yM6K+35qOA5p+l6YWN572u77yBJyk7XG4gICAgfVxuICB9XG5cbiAgaW5pdE1hcChjb25maWc6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCflnLDlm77liJ3lp4vljJblvIDlp4snKTtcbiAgICBpZiAodGhpcy5oYXNJbml0KSB7XG4gICAgICBjb25zb2xlLmxvZygn5Zyw5Zu+5bey57uP5Yid5aeL5YyW77yM6YWN572u5Y+Y5YyW5LiN5Lya6Ieq5Yqo5ZCM5q2lJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oYXNJbml0ID0gdHJ1ZTtcbiAgICBjb25zdCBtYXBQYXJhbXMgPSBjb25maWc7XG4gICAgdGhpcy5tYXAgPSBuZXcgTWFwKHtcbiAgICAgIHRhcmdldDogJ21hcENvbnRhaW5lcicsXG4gICAgICAvLyBjb250cm9sczogeyB6b29tOiBmYWxzZSwgcm9hdGU6IGZhbHNlLCBhdHRyaWJ1dGlvbjogZmFsc2UgfSxcbiAgICAgIHZpZXc6IFZpZXcuZ2V0Vmlld0J5SG1hcHNlcnZlcihtYXBQYXJhbXMpLFxuICAgICAgLy8gaW50ZXJhY3Rpb25zOiB7IHBpbmNoUm90YXRlOiBmYWxzZSB9XG4gICAgfSk7XG4gICAgdGhpcy54eXpMYXllciA9IFRpbGVYWVpMYXllci5nZXRUaWxlWFlaTGF5ZXJCeUhtYXBzZXJ2ZXIoXG4gICAgICBtYXBQYXJhbXNcbiAgICApO1xuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMueHl6TGF5ZXIpO1xuICAgIHRoaXMubWFwLnNob3dDbGlja0Nvb3JkaW5hdGUgPSB0cnVlO1xuICB9XG4gIHVwZGF0ZVZpc2libGUoKSB7XG4gICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy54eXpMYXllcik7XG4gICAgdGhpcy54eXpMYXllciA9IFRpbGVYWVpMYXllci5nZXRUaWxlWFlaTGF5ZXJCeUhtYXBzZXJ2ZXIodGhpcy5jb25maWcpO1xuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMueHl6TGF5ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuICB9XG5cbn1cbiJdfQ==