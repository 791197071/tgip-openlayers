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
export class MapComponent {
    constructor() {
        this.hasInit = false;
        this.defaultConfig = null;
        this.config = this.defaultConfig;
        console.log('第一步', this.config);
    }
    /**
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
    set setConfig(value) {
        // 做处理
        if (!value) {
            return;
        }
        this.config = Object.assign({}, this.defaultConfig, value);
        console.log('第3步？', this.config, value);
        this.initMap(this.config);
        this.updateVisible();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @param {?} config
     * @return {?}
     */
    initMap(config) {
        console.log('地图初始化开始');
        if (this.hasInit) {
            console.log('地图已经初始化，配置变化不会自动同步');
            return;
        }
        this.hasInit = true;
        /** @type {?} */
        const mapParams = config;
        this.map = new Map({
            target: 'mapContainer',
            // controls: { zoom: false, roate: false, attribution: false },
            view: View.getViewByHmapserver(mapParams),
        });
        this.xyzLayer = TileXYZLayer.getTileXYZLayerByHmapserver(mapParams);
        this.map.addLayer(this.xyzLayer);
        this.map.showClickCoordinate = true;
    }
    /**
     * @return {?}
     */
    updateVisible() {
        this.map.removeLayer(this.xyzLayer);
        this.xyzLayer = TileXYZLayer.getTileXYZLayerByHmapserver(this.config);
        this.map.addLayer(this.xyzLayer);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log(changes);
    }
}
MapComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-map',
                template: "<div id=\"mapContainer\"></div>",
                styles: ["#mapContainer{width:100%;height:100%;right:0;position:absolute}"]
            }] }
];
/** @nocollapse */
MapComponent.ctorParameters = () => [];
MapComponent.propDecorators = {
    setConfig: [{ type: Input, args: ['config',] }],
    configUrl: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RnaXAtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9tYXAvbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFcEUsd0NBT0M7OztJQU5DLHNDQUFrQjs7SUFDbEIsc0NBQWtCOztJQUNsQixvQ0FBdUI7O0lBQ3ZCLDBDQUFzQjs7SUFDdEIsd0NBQW9COztJQUNwQixrQ0FBYzs7QUFTaEIsTUFBTSxPQUFPLFlBQVk7SUF5RXZCO1FBUlEsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUloQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUszQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXpCRCxJQUNJLFNBQVMsQ0FBQyxLQUFVO1FBQ3RCLE1BQU07UUFDTixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFnQkQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQVc7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztjQUNkLFNBQVMsR0FBRyxNQUFNO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDakIsTUFBTSxFQUFFLGNBQWM7O1lBRXRCLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1NBRTFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLDJCQUEyQixDQUN0RCxTQUFTLENBQ1YsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBNUhGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDJDQUFtQzs7YUFFcEM7Ozs7O3dCQW9ERSxLQUFLLFNBQUMsUUFBUTt3QkFnQmQsS0FBSzs7OztJQUpOLGdDQUFrQjs7SUFDbEIsOEJBQVk7Ozs7O0lBQ1osK0JBQXdCOztJQUV4QixpQ0FBMkI7Ozs7O0lBRTNCLHFDQUE2Qjs7SUFFN0IsMkJBQWdCOztJQUNoQixnQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9NYXAnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9WaWV3JztcbmltcG9ydCB7IFRpbGVYWVpMYXllciB9IGZyb20gJ2hhbmRzbWFwLW1hcC1jbGllbnQvb3BlbmxheWVycy9sYXllcic7XG5kZWNsYXJlIGxldCBIYW5kc01hcDtcbmV4cG9ydCBpbnRlcmZhY2UgTWFwQ29uZmlnSW50ZXJmYWNlIHtcbiAgbWF4U2NhbGU/OiBudW1iZXI7XG4gIG1pblNjYWxlPzogbnVtYmVyO1xuICBleHRlbnQ/OiBBcnJheTxudW1iZXI+O1xuICBkZWZhdWx0TGV2ZWw/OiBudW1iZXI7XG4gIGJhc2VNYXBVcmw/OiBzdHJpbmc7XG4gIHByb2o/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGdpcC1vbC1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiDlm77lsYLmoLflvI/lj4LmlbBcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZ1xuICAgKiBAZXhhbXBsZVxuICAgKnN0YXRpYyBtYXBDb25maWcgPSB7XG4gICAgIGNlbnRlclggOiAxMTguODAzOTMwMTAwNTI1LFxuICAgICBjZW50ZXJZIDogMzEuODQ4NDMxMjExMjYxNyxcbiAgICAgY25OYW1lIDogIOaxn+WugeW6leWbviAsXG4gICAgIGVuTmFtZSA6ICBqaWFuZ25pbmcgLFxuICAgICBleHRlbnRNYXhYIDogMTE5LjM2Njc4MzU3MzQyOCxcbiAgICAgZXh0ZW50TWF4WSA6IDMyLjMyMzMzMzc1NTYwNzksXG4gICAgIGV4dGVudE1pblggOiAxMTguMzI0NTc5NjUyODc0LFxuICAgICBleHRlbnRNaW5ZIDogMzEuNDc4MTQ5MjA2MzM3LFxuICAgICBpZCA6ICB0ZXN0ODg4ODg4ODg4ODg4OCAsXG4gICAgIG1heFpvb20gOiA3LFxuICAgICBtaW5ab29tIDogMyxcbiAgICAgem9vbSA6IDQsXG4gICAgIGNvb3JkaW5hdGVTeXN0aW1TcmlkIDogIEVQU0c6NDMyNiAsXG4gICAgIGJhY2tncm91bmRDb2xvciA6ICAjNTY4ODk5ICxcbiAgICAgYmFzZW1hcE1hcExheWVycyA6IFt7XG4gICAgICAgaWQgOiAgbW9sbGl0ICxcbiAgICAgICB2aXNpYmxlIDogdHJ1ZSxcbiAgICAgICBzb3VyY2VJZCA6ICBqaWFuZ25pbmdfYmcgLFxuICAgICAgIHNvdXJjZVBhcmEgOiB7XG4gICAgICAgICBjbk5hbWUgOiAg5rGf5a6B5YWo5Z+f5peF5ri4ICxcbiAgICAgICAgIGRlc2NyaWJlIDogIHRlc3QgLFxuICAgICAgICAgZ210Q3JlYXRlIDogMTU1NDI1NjcyMTAwMCxcbiAgICAgICAgIGdtdE1vZGlmaWVkIDogMTU1NDI1NjcyMTAwMCxcbiAgICAgICAgIGVuTmFtZSA6ICBqaWFuZ25pbmdfODggLFxuICAgICAgICAgaWQgOiAgNGRhMGQyMzE4YWM3YWE3MzkyMzNmZmU0MjE1ODdiNzAgLFxuICAgICAgICAgb3JpZ2luWCA6IC00MDAsXG4gICAgICAgICBvcmlnaW5ZIDogNDAwLFxuICAgICAgICAgb3ZlckFtYXAgOiAwLFxuICAgICAgICAgY29vcmRpbmF0ZVN5c3RpbVNyaWQgOiAgRVBTRzo0MzI2ICxcbiAgICAgICAgIHJlc29sdXRpb25zIDogWzAuMDAwOTUxNzg0NDAyMzMyMTEyMSwgMC4wMDA3MTM4MzgzMDE3NDkwODQxLCAwLjAwMDQ3NTg5MjIwMTE2NjA1NjA0LFxuICAgICAgICAgIDAuMDAwMzU2OTE5MTUwODc0NTQyMDYsIDAuMDAwMTc4NDU5NTc1NDM3MjcxMDMsIDAuMDAwMTE4OTczMDUwMjkxNTE0MDEsIDAuMDAwMDU5NDg2NTI1MTQ1NzU3MDA1LFxuICAgICAgICAgIDAuMDAwMDI5NzQzMjYyNTcyODc4NTAyXG4gICAgICAgIF0sXG4gICAgICAgICBzY2FsZXMgOiBbMTYwMDAwMCwgMTIwMDAwMCwgODAwMDAwLCA2MDAwMDAsIDMwMDAwMCwgMjAwMDAwLCAxMDAwMDAsIDUwMDAwXSxcbiAgICAgICAgIHRpbGVzaXplSGVpZ2h0IDogNTEyLFxuICAgICAgICAgdGlsZXNpemVXaWR0aCA6IDUxMixcbiAgICAgICAgIGRwaSA6IDE5MixcbiAgICAgICAgIHVybEFtYXAgOiAgICxcbiAgICAgICAgIHVybExlYWZsZXQgOiAgICxcbiAgICAgIH1cbiAgICB9XVxuICB9O1xufVxuXG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpXG4gIHNldCBzZXRDb25maWcodmFsdWU6IGFueSkge1xuICAgIC8vIOWBmuWkhOeQhlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcsIHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZygn56ysM+atpe+8nycsIHRoaXMuY29uZmlnLCB2YWx1ZSk7XG4gICAgdGhpcy5pbml0TWFwKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLnVwZGF0ZVZpc2libGUoKTtcbiAgfVxuXG4gIF92aXNpYmxlOiBib29sZWFuO1xuICBjb25maWc6IGFueTtcbiAgcHJpdmF0ZSBoYXNJbml0ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY29uZmlnVXJsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnID0gbnVsbDtcblxuICBwdWJsaWMgbWFwOiBhbnk7XG4gIHB1YmxpYyB4eXpMYXllcjogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgICBjb25zb2xlLmxvZygn56ys5LiA5q2lJywgdGhpcy5jb25maWcpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCfnrKzkuozmraXvvJ8nLCB0aGlzLmNvbmZpZyk7XG5cbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuaW5pdE1hcCh0aGlzLmNvbmZpZyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZ1VybCkge1xuICAgICAgdGhpcy5pbml0TWFwKHRoaXMuY29uZmlnVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCflnLDlm77phY3nva7kuLrnqbrvvIzor7fmo4Dmn6XphY3nva7vvIEnKTtcbiAgICB9XG4gIH1cblxuICBpbml0TWFwKGNvbmZpZzogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ+WcsOWbvuWIneWni+WMluW8gOWniycpO1xuICAgIGlmICh0aGlzLmhhc0luaXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCflnLDlm77lt7Lnu4/liJ3lp4vljJbvvIzphY3nva7lj5jljJbkuI3kvJroh6rliqjlkIzmraUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhc0luaXQgPSB0cnVlO1xuICAgIGNvbnN0IG1hcFBhcmFtcyA9IGNvbmZpZztcbiAgICB0aGlzLm1hcCA9IG5ldyBNYXAoe1xuICAgICAgdGFyZ2V0OiAnbWFwQ29udGFpbmVyJyxcbiAgICAgIC8vIGNvbnRyb2xzOiB7IHpvb206IGZhbHNlLCByb2F0ZTogZmFsc2UsIGF0dHJpYnV0aW9uOiBmYWxzZSB9LFxuICAgICAgdmlldzogVmlldy5nZXRWaWV3QnlIbWFwc2VydmVyKG1hcFBhcmFtcyksXG4gICAgICAvLyBpbnRlcmFjdGlvbnM6IHsgcGluY2hSb3RhdGU6IGZhbHNlIH1cbiAgICB9KTtcbiAgICB0aGlzLnh5ekxheWVyID0gVGlsZVhZWkxheWVyLmdldFRpbGVYWVpMYXllckJ5SG1hcHNlcnZlcihcbiAgICAgIG1hcFBhcmFtc1xuICAgICk7XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy54eXpMYXllcik7XG4gICAgdGhpcy5tYXAuc2hvd0NsaWNrQ29vcmRpbmF0ZSA9IHRydWU7XG4gIH1cbiAgdXBkYXRlVmlzaWJsZSgpIHtcbiAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLnh5ekxheWVyKTtcbiAgICB0aGlzLnh5ekxheWVyID0gVGlsZVhZWkxheWVyLmdldFRpbGVYWVpMYXllckJ5SG1hcHNlcnZlcih0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy54eXpMYXllcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coY2hhbmdlcyk7XG4gIH1cblxufVxuIl19