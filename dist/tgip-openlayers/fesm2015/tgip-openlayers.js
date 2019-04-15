import { fromEvent } from 'rxjs';
import { Map } from 'handsmap-map-client/openlayers/Map';
import { View } from 'handsmap-map-client/openlayers/View';
import { ProjThree } from 'handsmap-map-client/openlayers/ProjThree';
import { SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { Style, Fill, Stroke, Icon } from 'ol/style';
import { ServiceUtil } from 'handsmap-map-client/openlayers/util';
import { TileXYZLayer, PointLayer, LineLayer, PolygonLayer } from 'handsmap-map-client/openlayers/layer';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, NgModule } from '@angular/core';
import Overlay from 'ol/Overlay.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullScreenComponent {
    constructor() {
        this.defaultConfig = {
            // 样式名
            className: 'btn',
            // 全图按钮
            fullscreen: {
                on: './fullScreen-on.svg',
                off: './fullScreen-off.svg',
                icon: ''
            },
            // 控制显示位置，left top bottom right  //绝对定位
            position: {
                top: '10px',
                right: '10px'
            },
            // 每个图标大小
            size: {
                width: '50px',
                // 宽度100px
                height: '50px' // 高度 100px
            }
        };
        this.config = this.defaultConfig;
        // this.config.fullscreen.src = this.sanitizer.bypassSecurityTrustStyle(`url(\'${this.config.fullscreen.src}\')`)
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = fromEvent(document, 'fullscreenchange').subscribe(event => {
            console.log(event);
            /** @type {?} */
            const isNotFullscreen = !document['fullscreenElement'] && // alternative standard method
                !document['mozFullScreenElement'] &&
                !document['webkitFullscreenElement'] &&
                !document['msFullscreenElement'];
            console.log(isNotFullscreen);
            if (isNotFullscreen) {
                this.config.fullscreen.icon = `url(\'${this.config.fullscreen.on}\')`;
            }
            else {
                this.config.fullscreen.icon = `url(\'${this.config.fullscreen.off}\')`;
            }
            console.log(this.config.fullscreen.icon);
        });
        this.config.fullscreen.icon = `url(\'${this.config.fullscreen.on}\')`;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // tslint:disable-next-line:no-unused-expression
        this.subscription && this.subscription.unsubscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.config.icon = `url(\'${this.config.fullscreen.src}\')`;
    }
    /**
     * 是当前元素 全屏 还是document ele全屏？
     * @param {?=} elem
     * @return {?}
     */
    fullscreenToggle(elem = document.documentElement) {
        if (!document['fullscreenElement'] && // alternative standard method
            !document['mozFullScreenElement'] &&
            !document['webkitFullscreenElement'] &&
            !document['msFullscreenElement']) {
            // current working methods
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
            else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            }
            else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element['ALLOW_KEYBOARD_INPUT']);
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document['msExitFullscreen']) {
                document['msExitFullscreen']();
            }
            else if (document['mozCancelFullScreen']) {
                document['mozCancelFullScreen']();
            }
            else if (document['webkitExitFullscreen']) {
                document['webkitExitFullscreen']();
            }
        }
    }
}
FullScreenComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-full-screen',
                template: "<button (click)=\"fullscreenToggle()\" \n[style.width]=\"config.size.width\" \n[style.height]=\"config.size.height\"\n[style.top]=\"config.position.top\"\n[style.right]=\"config.position.right\"\nstyle=\"position:absolute;\"\n[style.background]=\"config.fullscreen.icon\"\n[class]=\"config.className\"\n>\u5168\u5C4F</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FullScreenComponent.ctorParameters = () => [];
FullScreenComponent.propDecorators = {
    configUrl: [{ type: Input }],
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MapComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullExtentComponent {
    constructor() {
        /**
         * 图层样式参数
         * \@example
         *
         * {
         * // 样式名
         * className: 'btn',
         * // 全图按钮
         * icon: './full-extent-on.svg',
         * // 控制显示位置，left top bottom right  //绝对定位
         * position: {
         * bottom: '10px',
         * right: '10px'
         * },
         * // 每个图标大小
         * size: {
         * width: '50px', // 宽度100px
         * height: '50px' // 高度 100px
         * }
         * };
         *
         */
        this.defaultConfig = {
            // 样式名
            className: 'btn',
            // 全图按钮
            icon: './full-extent-on.svg',
            // 控制显示位置，left top bottom right  //绝对定位
            position: {
                bottom: '10px',
                right: '10px'
            },
            // 每个图标大小
            size: {
                width: '50px',
                // 宽度100px
                height: '50px' // 高度 100px
            }
        };
        this._config = this.defaultConfig || {};
    }
    /**
     * 地图参数
     * @param {?} value
     * @return {?}
     */
    set map(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this._map = value;
    }
    /**
     * 样式参数
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        if (!value) {
            return;
        }
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    fullExtentToggle() {
        if (this._map) {
            /** @type {?} */
            let center = [this._map.config.centerX, this._map.config.centerY];
            if (this._map.config.coordinateSystimSrid === 'EPSG:3857') {
                center = ProjThree.ll2webmerc(center);
            }
            this._map.map.animationPanZoom({
                coordinate: center,
                // ctrl.mapCenter,
                zoom: this._map.config.zoom || 0,
                duration: 400
            });
        }
        else {
            console.warn('没有传入 map 实例！');
        }
    }
}
FullExtentComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-full-extent',
                template: "<button (click)=\"fullExtentToggle()\"\n[style.width]=\"_config.size.width\"\n[style.height]=\"_config.size.height\"\n[style.bottom]=\"_config.position.bottom\"\n[style.right]=\"_config.position.right\"\nstyle=\"position:absolute;border: none;\"\n[style.background]=\"_config.icon\"\n[class]=\"_config.className\"\n></button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FullExtentComponent.ctorParameters = () => [];
FullExtentComponent.propDecorators = {
    map: [{ type: Input, args: ['map',] }],
    config: [{ type: Input, args: ['config',] }],
    configUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwitcherMapComponent {
    constructor() {
        /**
         * 输出参数
         */
        this.outer = new EventEmitter();
        this.defaultConfig = {
            backgroundSize: {
                backgroundSize: '100% 100%'
            },
            selectFontBgColor: {
                bg: '#3385FF',
                border: '1px solid #3385FF'
            },
            unselectFontBgColor: {
                bg: 'none',
                border: '1px solid'
            },
            size: {
                width: 'auto',
                // 总宽度
                height: '100px',
                // 总高度
                background: '#fff'
            },
            imgSize: {
                width: '80px',
                // 总宽度
                height: '80px' // 总高度
            },
            position: {
                top: '0px',
                bottom: '100px',
                right: '0px'
            },
            fontStyle: {
                bottom: '0',
                right: '0',
                color: '#fff',
                fontSize: '12px'
            },
            baseMap: [
                {
                    src: 'url(assets/map.png)',
                    title: '地图',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                },
                {
                    src: 'url(assets/map.png)',
                    title: '地球',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                },
                {
                    src: 'url(assets/map.png)',
                    title: '全景',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                },
                {
                    src: 'url(assets/map.png)',
                    title: '卫星',
                    visible: false,
                    isdisplay: true,
                    layer: {}
                }
            ]
        };
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 图层样式参数
     * \@example
     * {
     * backgroundSize: {
     * backgroundSize:  100% 100%,
     * },
     * selectFontBgColor: {
     * bg:  #3385FF ,
     * border:  1px solid #3385FF,
     * },
     * unselectFontBgColor: {
     * bg:  none ,
     * border:  1px solid,
     * },
     * size: {
     * width:  auto , // 总宽度
     * height:  100px , // 总高度
     * background:  #fff,
     * },
     * imgSize: {
     * width:  80px , // 总宽度
     * height:  80px  // 总高度
     * },
     * position: {
     * top:  0px ,
     * bottom:  100px ,
     * right:  0px,
     * },
     * fontStyle: {
     * bottom:  0 ,
     * right:  0 ,
     * color:  #fff ,
     * fontSize:  12px,
     * },
     * baseMap: [
     * {
     * src:  url(assets/map.png) ,
     * title:  地图 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * },
     * {
     * src:  url(assets/map.png) ,
     * title:  地球 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * },
     * {
     * src:  url(assets/map.png) ,
     * title:  全景 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * },
     * {
     * src:  url(assets/map.png) ,
     * title:  卫星 ,
     * visible: false,
     * isdisplay: true,
     * layer: {}
     * }
     * ]
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
        // this._config = DefaultOptionsUtil.preProcOptions(this.defaultConfig, value);
        // this._config = value;
    }
    // 点击选中
    /**
     * @param {?} item
     * @return {?}
     */
    fullscreenToggle(item) {
        this.outer.emit(item);
        this.flag = true;
        this.config.baseMap.forEach((value) => {
            if (value.title === item.title) {
                value.visible = true;
            }
            else {
                value.visible = false;
            }
        });
    }
    // 鼠标移入
    /**
     * @return {?}
     */
    mouseenter() {
        this.config.baseMap.forEach((value) => {
            value.isdisplay = true;
        });
    }
    // 鼠标移出
    /**
     * @return {?}
     */
    mouseleave() {
        if (this.flag) {
            this.config.baseMap.forEach((value) => {
                if (value.visible === true) {
                    value.isdisplay = true;
                }
                else {
                    value.isdisplay = false;
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SwitcherMapComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-switcher-map',
                template: "<div\n  id=\"mapType-wrapper\"\n  style=\"position:absolute; z-index: 1;\"\n  [style.bottom]=\"config.position.bottom\"\n  [style.right]=\"config.position.right\"\n>\n  <div\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.background]=\"config.size.background\"\n    (mouseenter)=\"mouseenter()\"\n    (mouseleave)=\"mouseleave()\"\n  >\n    <div\n      [style.background]=\"item.src\"\n      [style.background-size]=\"config.backgroundSize.backgroundSize\"\n      style=\"float:left;background-size: 100% 100%; margin: 10px 10px; position: relative;border: 1px solid;\"\n      *ngFor=\"let item of config.baseMap; let i = index\"\n      [style.width]=\"config.imgSize.width\"\n      [ngStyle]=\"{\n        border:\n          item.visible === false\n            ? config.unselectFontBgColor.border\n            : config.selectFontBgColor.border,\n        display: item.isdisplay === true ? 'block' : 'none'\n      }\"\n      (click)=\"fullscreenToggle(item)\"\n      [style.height]=\"config.imgSize.height\"\n    >\n      <span\n        style=\"position: absolute;\n      display: inline-block;\n      padding: 3px 3px 2px 4px;   \n      border-top-left-radius: 2px;\"\n        [style.bottom]=\"config.fontStyle.bottom\"\n        [style.right]=\"config.fontStyle.right\"\n        [style.color]=\"config.fontStyle.color\"\n        [style.font-size]=\"config.fontStyle.fontSize\"\n        [ngStyle]=\"{\n          background:\n            item.visible === false\n              ? config.unselectFontBgColor.bg\n              : config.selectFontBgColor.bg\n        }\"\n      >\n        {{ item.title }}</span\n      >\n    </div>\n  </div>\n</div>\n",
                styles: ["#mapType-wrapper{position:absolute;bottom:100px;right:0;z-index:1}#mapType{height:100px;width:auto;cursor:pointer;background-color:red}#mapType .mapTypeCard{height:60px;width:86px;position:absolute;border-radius:2px;top:10px;box-sizing:border-box;border:1px solid rgba(153,153,153,.42);background:url(//webmap1.bdimg.com/wolfman/static/common/images/new/shadow_6bf0ecd.png) 0 0/86px 240px no-repeat}#mapType .mapTypeCard.active,#mapType .mapTypeCard:hover{border:1px solid #3385ff}#mapType .mapTypeCard.active span,#mapType .mapTypeCard:hover span{background-color:#3385ff}#mapType .switch-box{visibility:hidden;position:absolute;width:100%;height:20px;line-height:22px;color:#fff;background:rgba(0,0,0,.5)}#mapType .normal .switch-box p{margin-left:20px}#mapType .switch-box p{display:inline-block;margin-left:25px}#mapType .mapTypeCard span{position:absolute;bottom:0;right:0;display:inline-block;padding:3px 3px 2px 4px;font-size:12px;height:12px;line-height:12px;color:#fff;border-top-left-radius:2px}#mapType .mapTypeCard{background-image:url(//webmap1.bdimg.com/wolfman/static/common/images/new/maptype_8a68f95.png)}#mapType .normal{z-index:1;background-position:0 0;right:202px}#mapType .earth{background-position:0 -181px;right:106px}#mapType .panorama{z-index:3;right:10px;background-image:url(//webmap1.bdimg.com/wolfman/static/common/images/new/maptype_8a68f95.png);background-position:0 -121px;border-left:1px solid rgba(153,153,153,.6)}"]
            }] }
];
/** @nocollapse */
SwitcherMapComponent.ctorParameters = () => [];
SwitcherMapComponent.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ZoomMapComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
         * 输出参数
         */
        this.outer = new EventEmitter();
        this.defaultConfig = {
            position: {
                top: '0px',
                bottom: '100px',
                right: '0px',
                left: '0px'
            },
            size: {
                width: '50px',
                // 总宽度
                height: '50px' // 总高度
            },
            border: {
                zoomIn: '1px solid #1296db',
                zoomOut: '1px solid #1296db',
                disable: '1px solid #cdcdcd',
                radius: '5px',
                cursor: 'pointer',
                uncursor: 'no-drop '
            },
            // 放大按钮
            zoomIn: {
                enable: 'url(assets/enlarge.png)',
                // 正常图标
                disable: 'url(assets/enlarge_d.png)',
                // 禁用图标
                visible: true
            },
            bgStyle: {
                backgroundrepeat: 'no-repeat',
                backgroundposition: 'center',
                backgroundsize: '100% 100%'
            },
            // 缩小按钮
            zoomOut: {
                enable: 'url(assets/less.png)',
                disable: 'url(assets/less_d.png)',
                visible: true
            }
        };
        this.config = this.defaultConfig;
    }
    /**
     * 地图参数
     * @param {?} value
     * @return {?}
     */
    set map(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 实例');
        this._map = value;
        this.initMap();
    }
    // 设置默认值
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 图层样式参数
     * \@example
     * {
     * position: {
     * top: 0px,
     * bottom: 100px,
     * right: 0px,
     * left: 0px，
     * },
     * size: {
     * width:  50px ,
     * height:  50px，
     * },
     * border: {
     * zoomIn:  1px solid #1296db ,
     * zoomOut:  1px solid #1296db ,
     * disable:  1px solid #cdcdcd ,
     * radius:  5px ,
     * cursor:  pointer ,
     * uncursor:  no-drop，
     * },
     * zoomIn: {
     * enable:  url(assets/enlarge.png) no-repeat center / 70% 70% ,
     * disable:  url(assets/enlarge_d.png) no-repeat center / 70% 70% ,
     * visible: true
     * },
     * zoomOut: {
     * enable:  url(assets/less.png) no-repeat center / 70% 70% ,
     * disable:  url(assets/less_d.png) no-repeat center / 70% 70% ,
     * visible: true
     * }
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    changeZoom(data) {
        if (!this._map) {
            return;
        }
        this._map.zoomByDelta(data);
    }
    // 监听界面缩放比例
    /**
     * @return {?}
     */
    initMap() {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const view = this._map.getView();
        view.on('change:resolution', function (e) {
            /** @type {?} */
            const maxZoom = view.getMaxZoom();
            /** @type {?} */
            const minZoom = view.getMinZoom();
            if (view.getZoom() >= maxZoom) {
                self.config.zoomIn.visible = false;
            }
            if (view.getZoom() < maxZoom && view.getZoom() > minZoom) {
                self.config.zoomIn.visible = true;
                self.config.zoomOut.visible = true;
            }
            if (view.getZoom() <= minZoom) {
                self.config.zoomOut.visible = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ZoomMapComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-zoom',
                template: "<div\n  class=\"zoomMap\"\n  [style.bottom]=\"config.position.bottom\"\n  [style.right]=\"config.position.right\"\n>\n  <span\n    class=\"maxZoom\"\n    (click)=\"changeZoom(1)\"\n    [ngStyle]=\"{\n      'background-image':\n        config.zoomIn.visible === true\n          ? config.zoomIn.enable\n          : config.zoomIn.disable,\n      'background-repeat':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundrepeat\n          : config.bgStyle.backgroundrepeat,\n      'background-position':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundposition\n          : config.bgStyle.backgroundposition,\n      'background-size':\n        config.zoomIn.visible === true\n          ? config.bgStyle.backgroundsize\n          : config.bgStyle.backgroundsize,\n      border:\n        config.zoomIn.visible === true\n          ? config.border.zoomIn\n          : config.border.disable,\n      cursor:\n        config.zoomIn.visible === true\n          ? config.border.cursor\n          : config.border.uncursor\n    }\"\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.line-height]=\"config.size.height\"\n    [style.border]=\"config.border.zoomIn\"\n    [style.border-radius]=\"config.border.radius\"\n  ></span>\n  <span\n    class=\"minZoom\"\n    (click)=\"changeZoom(-1)\"\n    [ngStyle]=\"{\n      'background-image':\n        config.zoomOut.visible === true\n          ? config.zoomOut.enable\n          : config.zoomOut.disable,\n      'background-repeat':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundrepeat\n          : config.bgStyle.backgroundrepeat,\n      'background-position':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundposition\n          : config.bgStyle.backgroundposition,\n      'background-size':\n        config.zoomOut.visible === true\n          ? config.bgStyle.backgroundsize\n          : config.bgStyle.backgroundsize,\n      border:\n        config.zoomOut.visible === true\n          ? config.border.zoomOut\n          : config.border.disable,\n      cursor:\n        config.zoomOut.visible === true\n          ? config.border.cursor\n          : config.border.uncursor\n    }\"\n    [style.width]=\"config.size.width\"\n    [style.height]=\"config.size.height\"\n    [style.line-height]=\"config.size.height\"\n    [style.border]=\"config.border.zoomOut\"\n    [style.border-radius]=\"config.border.radius\"\n  ></span>\n</div>\n",
                styles: [".zoomMap{position:absolute;z-index:1;cursor:pointer}.zoomMap span{display:block;text-align:center}.maxZoom{margin-bottom:10px}"]
            }] }
];
/** @nocollapse */
ZoomMapComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ZoomMapComponent.propDecorators = {
    outer: [{ type: Output }],
    map: [{ type: Input, args: ['map',] }],
    mapconfig: [{ type: ViewChild, args: ['myMap',] }],
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerControlPc1Component {
    // 互斥
    constructor() {
        this.outer = new EventEmitter(); // 广播事件
        // 广播事件
        this.mySwiper = {};
        // @Input() config: any;
        this.mutex = false; // 互斥
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数
     * \@example
     * {
     * size: {
     * width:  auto , // 总宽度
     * height:  auto  // 总高度
     * },
     * singleSize: {
     * width:  50px ,
     * height:  50px  // 图标大小
     * },
     * position: {
     * top:  10px ,
     * left:  10px  // 全局定位
     * },
     * style: {
     * bgClass:  custom , // 整个背景样式
     * singleSelectClass:  select , // 选中后样式
     * singleUnselectClass:  unSelect , // 未选中样式
     * checkbox:  assets/all.png ,
     * basis: {
     * float:  left ,
     * liststyle:  none ,
     * width:  135px ,
     * height:  100px ,
     * textalign:  center ,
     * fontColor:  #ffffff ,
     * fontSize:  24px ,
     * padding:  10px ,
     * borderRadius:  10PX,
     * //  lineheight :  100px ,  // 基础样式
     * },
     * bg: {
     * background:  #103c26 ,
     * border:  1px solid #b1d4c2 ,
     * boxShadow:  0 0 10px 0 rgba(16,60,38,.3),
     * },
     * select: {
     * src:  assets/icon.png ,
     * bgColor:  rgba(99,132,115,.3) ,
     * fontColor:  #666666 ,
     * fontSize:  24px ,
     * borderRadio:  10px  // 选中样式
     * },
     * unselect: {
     * src:  assets/icon.png ,
     * bgColor:  none ,
     * fontColor:  #ffffff ,
     * fontSize:  24px ,
     * borderRadio:  10px  // 未选中样式
     * }
     * },
     * layers: [
     * {
     * title:  旅游公路 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * {
     * title:  景区 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * {
     * title:  乡村旅游点 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * {
     * title:  驿站 ,
     * layerName:  tourismRoad ,
     * visible: false, // 默认显示与否
     * //  layer : object, // 图层对象，可以通过对象来控制 显示与否
     * select: {
     * src:  assets/icon.png,
     * },
     * unselect: {
     * src:  assets/icon.png,
     * }
     * },
     * ]
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
        // this._config = DefaultOptionsUtil.preProcOptions(this.defaultConfig, value);
        // this._config = value;
    }
    // 点击事件
    /**
     * @param {?} item
     * @return {?}
     */
    fullscreenToggle(item) {
        this.outer.emit(item);
        if (this.mutex === true) {
            this.config.layers.forEach((value) => {
                if (value.title === item.title) {
                    value.visible = true;
                }
                else {
                    value.visible = false;
                }
            });
        }
        else {
            item.visible = !item.visible;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mySwiper = {
            // vertical
            // horizontal
            direction: 'horizontal',
            // 开启鼠标的抓手状态
            grabCursor: true,
            loop: false,
            slidesPerView: 'auto',
            // loopedSlides: 8,
            autoplay: false,
            speed: 1000
            // 切换效果为 coverflow
            // effect: 'coverflow',
            // coverflow 配置
        };
    }
}
LayerControlPc1Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-layer-control-pc1',
                template: "<div\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  [class]=\"config.style.bgClass\"\n  [style.background]=\"config.style.bg.background\"\n  [style.border]=\"config.style.bg.border\"\n  [style.color]=\"config.style.basis.fontColor\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\"\n>\n  <span>\n    <ul [style.padding]=\"0\" [style.margin]=\"0\">\n      <swiper [config]=\"mySwiper\" class=\"swiper-container\">\n        <li\n          *ngFor=\"let item of config.layers; let i = index\"\n          class=\"swiper-slide\"\n          (click)=\"fullscreenToggle(item)\"\n          [style.list-style]=\"config.style.basis.liststyle\"\n          [style.font-size]=\"config.style.basis.fontSize\"\n          [style.float]=\"config.style.basis.float\"\n          [style.width]=\"config.style.basis.width\"\n          [style.height]=\"config.style.basis.height\"\n          [style.text-align]=\"config.style.basis.textalign\"\n          [style.padding]=\"config.style.basis.padding\"\n          style=\"cursor:pointer\"\n        >\n          <div\n            [ngStyle]=\"{\n              background:\n                item.visible === true\n                  ? config.style.select.bgColor\n                  : config.style.unselect.bgColor\n            }\"\n            style=\"width:100%;height:100%\"\n            [style.border-radius]=\"config.style.basis.borderRadius\"\n          >\n            <i [ngStyle]=\"{ display: 'block' }\">\n              <img\n                src=\"{{ item.select.src }}\"\n                [style.width]=\"config.singleSize.width\"\n                [style.height]=\"config.singleSize.height\"\n              />\n            </i>\n            <span [style.line-height]=\"config.style.basis.lineheight\">\n              {{ item.title }}</span\n            >\n          </div>\n        </li>\n      </swiper>\n    </ul>\n  </span>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LayerControlPc1Component.ctorParameters = () => [];
LayerControlPc1Component.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerControlPc2Component {
    // 互斥
    constructor() {
        /**
         * 输出参数
         */
        this.outer = new EventEmitter(); // 广播事件
        // 广播事件
        this.mySwiper = {};
        // @Input() config: any;
        this.mutex = false; // 互斥
        // 图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 图层样式参数
     * \@example
     *  {
     * size: {
     * width:  auto , // 总宽度
     * height:  auto  // 总高度
     * },
     * singleSize: {
     * width:  30px , // 图标大小
     * height:  30px ,
     * padding:  10px  // 图标外边距
     * },
     * position: {
     * top:  10px ,
     * left:  10px  // 全局定位
     * },
     * style: {
     * bgClass:  custom , // 整个背景样式
     * singleSelectClass:  select , // 选中后样式
     * singleUnselectClass:  unSelect , // 未选中样式
     * checkbox:  assets/all.png ,
     * basis: {
     * float:  left ,
     * liststyle:  none ,
     * width:  120px , // 块宽度
     * height:  50px , // 块高度
     * textalign:  center ,
     * fontColor:  #ffffff ,
     * fontSize:  18px ,
     * padding:  0px , // 块外边距
     * borderRadius:  10PX,
     * //  lineheight :  100px ,  // 基础样式
     * },
     * bg: {
     * background:  #003887 ,
     * border:  1px solid #b1d4c2 ,
     * boxShadow:  0 0 10px 0 rgba(16,60,38,.3),
     * },
     * select: {
     * src:  assets/icon.png ,
     * bgColor:  #15305c ,
     * fontColor:  #666666 ,
     * borderRadio:  10px  // 选中样式
     * },
     * unselect: {
     * src:  assets/icon.png ,
     * bgColor:  none ,
     * fontColor:  #ffffff ,
     * borderRadio:  10px  // 未选中样式
     * }
     * },
     * layers: []
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    // 点击事件
    /**
     * @param {?} item
     * @return {?}
     */
    fullscreenToggle(item) {
        this.outer.emit(item);
        if (this.mutex === true) {
            this.config.layers.forEach((value) => {
                if (value.title === item.title) {
                    value.visible = true;
                }
                else {
                    value.visible = false;
                }
            });
        }
        else {
            item.visible = !item.visible;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mySwiper = {
            // vertical
            // horizontal
            direction: 'horizontal',
            // 开启鼠标的抓手状态
            grabCursor: true,
            loop: false,
            slidesPerView: 'auto',
            // loopedSlides: 8,
            autoplay: false,
            speed: 1000
            // 切换效果为 coverflow
            // effect: 'coverflow',
            // coverflow 配置
        };
    }
}
LayerControlPc2Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-layer-control-pc2',
                template: "<div\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  [class]=\"config.style.bgClass\"\n  [style.background]=\"config.style.bg.background\"\n  [style.border]=\"config.style.bg.border\"\n  [style.color]=\"config.style.basis.fontColor\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\"\n>\n  <span>\n    <ul [style.padding]=\"0\" [style.margin]=\"0\">\n      <swiper [config]=\"mySwiper\" class=\"swiper-container\">\n        <li\n          *ngFor=\"let item of config.layers; let i = index\"\n          class=\"swiper-slide\"\n          (click)=\"fullscreenToggle(item)\"\n          [style.list-style]=\"config.style.basis.liststyle\"\n          [style.font-size]=\"config.style.basis.fontSize\"\n          [style.float]=\"config.style.basis.float\"\n          [style.width]=\"config.style.basis.width\"\n          [style.height]=\"config.style.basis.height\"\n          [style.text-align]=\"config.style.basis.textalign\"\n          [style.padding]=\"config.style.basis.padding\"\n          style=\"cursor:pointer; border: 1px solid #325b9e; border-left: none\"\n        >\n          <div\n            [ngStyle]=\"{\n              background:\n                item.visible === true\n                  ? config.style.select.bgColor\n                  : config.style.unselect.bgColor\n            }\"\n            style=\"width:100%;height:100%\"\n            [style.border-radius]=\"config.style.basis.borderRadius\"\n            [style.line-height]=\"config.style.basis.height\"\n          >\n            <i\n              [ngStyle]=\"{ float: 'left' }\"\n              [style.width]=\"config.singleSize.width\"\n              [style.height]=\"config.singleSize.height\"\n              [style.padding]=\"config.singleSize.padding\"\n            >\n              <img\n                src=\"{{ item.select.src }}\"\n                [style.width]=\"config.singleSize.width\"\n                [style.height]=\"config.singleSize.height\"\n              />\n            </i>\n            <span [style.line-height]=\"config.style.basis.lineheight\">\n              {{ item.title }}</span\n            >\n          </div>\n        </li>\n      </swiper>\n    </ul>\n  </span>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LayerControlPc2Component.ctorParameters = () => [];
LayerControlPc2Component.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerControlPc3Component {
    constructor() {
        /**
         * 输出参数
         */
        this.outer = new EventEmitter(); // 广播事件
        // 广播事件
        this.mySwiper = {};
        this.mutex = false; // 互斥
        // 互斥
        this.flag = false;
        this.sum = 0;
        this.hide = false;
        this.defaultConfig = {
            size: {
                width: '50px',
                // 初始宽度
                height: '50px' // 初始高度
            },
            position: {
                top: '10px',
                left: '10px',
                // 全局定位
                right: '0px' // 全局定位
            },
            cmenuPosition: {
                top: '60px',
                left: '10px',
                // 展开全局定位
                right: '20px' // 展开全局定位
            },
            cmenutop: {
                // X样式
                width: '40px',
                height: '40px',
                border: '1px solid #005ab4',
                color: '#005ab4',
                right: '0px',
                top: '-40px',
                background: 'white',
                borderbottom: 'none',
                backgroundImg: 'url(assets/close_map.png)',
                backgroundrepeat: 'no-repeat',
                backgroundposition: 'center'
            },
            cmenubody: {
                width: 'auto',
                height: '300px',
                border: '1px solid #005ab4',
                background: 'white',
                borderbottom: 'none',
                borderradius: '5px 0px 0px 0px'
            },
            fontStyle: {
                width: '120px',
                fontSize: '18px'
            },
            singleSize: {
                width: '30px',
                // 图标大小
                height: '30px',
                padding: '10px' // 图标外边距
            },
            select: {
                width: '30px',
                height: '30px',
                src: 'url(assets/select.png)'
            },
            bgStyle: {
                backgroundrepeat: 'no-repeat',
                backgroundposition: 'center',
                backgroundsize: '100% 100%'
            },
            unselect: {
                src: 'url(assets/no_select.png)'
            },
            background: {
                backgroundsize: '100%'
            },
            layers: [
                {
                    title: '景区',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '乡村旅游区',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '新业态',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '餐饮',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '旅游酒店',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                },
                {
                    title: '主题住宿',
                    visible: false,
                    src: 'url(assets/show_map.png)'
                }
            ]
        };
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 图层样式参数
     * \@example
     * {
     * size: {
     * width:  50px , // 初始宽度
     * height:  50px  // 初始高度
     * },
     * position: {
     * top:  10px ,
     * left:  10px , // 全局定位
     * right:  0px  // 全局定位
     * },
     * cmenuPosition: {
     * top:  60px ,
     * left:  10px , // 展开全局定位
     * right:  20px  // 展开全局定位
     * },
     * cmenutop: {
     * // X样式
     * width:  40px ,
     * height:  40px ,
     * border:  1px solid #005ab4 ,
     * color:  #005ab4 ,
     * right:  0px ,
     * top:  -40px ,
     * background:  white ,
     * borderbottom:  none ,
     * backgroundImg:  url(assets/close_map.png) ,
     * backgroundrepeat:  no-repeat ,
     * backgroundposition:  center,
     * },
     * cmenubody: {
     * width:  auto ,
     * height:  300px ,
     * border:  1px solid #005ab4 ,
     * background:  white ,
     * borderbottom:  none ,
     * borderradius:  5px 0px 0px 0px,
     * },
     * fontStyle: {
     * width:  120px ,
     * fontSize:  18px,
     * },
     * singleSize: {
     * width:  30px , // 图标大小
     * height:  30px ,
     * padding:  10px  // 图标外边距
     * },
     * select: {
     * width:  30px ,
     * height:  30px ,
     * src:  url(assets/select.png) no-repeat center / 70% 70%,
     * },
     * unselect: {
     * src:  url(assets/no_select.png) no-repeat center / 70% 70%,
     * },
     * background: {
     * backgroundsize:  100%,
     * },
     * layers: [
     * {
     * title:  景区 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  乡村旅游区 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  新业态 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  餐饮 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  旅游酒店 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * },
     * {
     * title:  主题住宿 ,
     * visible: false,
     * src:  url(assets/show_map.png),
     * }
     * ]
     * };
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        // 做处理
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    // 显示
    /**
     * @return {?}
     */
    show() {
        this.hide = true;
    }
    // 影藏
    /**
     * @return {?}
     */
    vanish() {
        this.hide = false;
    }
    // 点击事件，是否互斥
    /**
     * @param {?} item
     * @return {?}
     */
    showitem(item) {
        this.outer.emit(item);
        if (this.mutex === true) {
            this.config.layers.forEach((value) => {
                if (value.title === item.title) {
                    value.visible = true;
                }
                else {
                    value.visible = false;
                }
            });
        }
        else {
            item.visible = !item.visible;
        }
        this.sum = 0;
        this.config.layers.forEach((value) => {
            if (value.visible === true) {
                this.sum++;
                if (this.sum === this.config.layers.length) {
                    this.flag = true;
                }
                else {
                    this.flag = false;
                }
            }
        });
    }
    // 全选
    /**
     * @return {?}
     */
    allitem() {
        this.flag = true;
        this.config.layers.forEach((value) => {
            value.visible = true;
        });
    }
    // 全不选
    /**
     * @return {?}
     */
    cancelitem() {
        this.flag = false;
        this.config.layers.forEach((value) => {
            value.visible = false;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mySwiper = {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            mousewheel: true
        };
    }
}
LayerControlPc3Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-layer-control-pc3',
                template: "<div\n  class=\"imgbox\"\n  style=\"position:absolute;overflow: hidden;\"\n  [style.top]=\"config.position.top\"\n  [style.right]=\"config.position.right\"\n  [style.width]=\"config.size.width\"\n  [style.height]=\"config.size.height\"\n  (click)=\"show()\"\n  [ngStyle]=\"{\n    display: hide === true ? 'none' : 'block'\n  }\"\n>\n  <svg>\n    <image\n      id=\"image0\"\n      width=\"50\"\n      height=\"50\"\n      x=\"0\"\n      y=\"0\"\n      href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACIlBMVEX///8A//8AgIAAgP8A\nVaoAqv8AgL8AZswAgKoAbbYAYL8AccYAXbkAar8AYrEAW7YAVaoAVaoAZrsAabQAXrwAZrMAYbYA\ncaoAX7IAWrUAWrQAWrUAY6oAYJ8AWrQ7gMWRt97A1uy70+uNtd0yesIGXbVdls/M3vD////E2O1X\nks0EXLUXaLp/rNno8Pjk7fd7qdgVZ7qhwuP5+/34+vygweMDW7RTj8zC1+1Wkc1ChMfg6vXi7PY1\nfMNuodTz9/tAg8Y2fMO50er3+fyPtt4WaLq+1Ov6+/2Xu+Aba7snc78CW7TD2O38/f6fwOIgbr0U\nZrkJX7aHsdv+/v5sn9MIX7ZGh8jI2+79/f6mxeQmcr9jmtHV4/L7/P13p9fs8vnm7vdxo9UKYLZL\nisrN3vCuyucsdsAMYbdzpNXl7vfu9Prp8Ph2ptZQjcu1z+nr8vmlxOQze8OCrtrq8fhlm9Hd6fUO\nY7gebbz1+PxtoNRfl8/Z5vPv9PqArNkRZbkqdcDU4/I5fsRZk87y9vuKs9ywy+fG2u5OjMoBWrSY\nvOB+q9kQZLhSj8zO3/C30Ok+gsYNYrd1pdaIstzw9fqDrtoSZblMi8rJ3O+nxuUwecKFsNu91Osj\ncL6Uud/2+fze6fVIiMnP3/AYabsFXbWjw+PS4fFblM5Ni8qSuN4cbLw6f8WyzeicvuG0zug8gMUt\nd8GVut8hb700e8OryOba5/SGsNsie78SAAAAHnRSTlMAAQICAwMEBQYHCAkLDA0OBgkPERMUFQkr\nrejuEgji/EkAAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+MDHRMYD7UTrv8AAAKJSURBVEjHY2AAAkYo\nYMIJYCoYIADEZGZmYWXDC1hZmJlhmkAaWNjYOTg5ufAATk4OdjYWZogeoA42dk5uHl4+fjyAj5eH\nm5OdjRmkBaRDQJBXSFhEVAwPEBURFuIVFADrYWRkYRfnk5CUkiMApCQl+MTZWUBamNk4eSWkCWkA\nAWkJXk6gNUAt7NxCksTokJOTFOJmB2lh4eCRIegqqNtkeDhYQFo4eUWI0yEnJ8LLCdLCJssnSqwW\nUT5ZNkYGJjYufjFitYjxc7ExUU+LvIKikrIK8VpU1dQ1wEBTS5soLTq6ehpwoG9gSFCLipGxBgow\nMVXBp8XM3EIDC9C01MalxcpaAwewscWhxQ6XDg17B1wOc3TCqsHZxRWP9+XdMDS4e3ji9r6rl7ec\nnIMPigZfP3+gTEAgdi1BwRo2IaFycmHhcA0RkVHAmI2O0YiNw6olHqQoITFJTi45BaIjNU1OLj0j\nE8TMwqol2QasLjsnXU4uNy/fuqAQ6KKiLLBgsSV2v6iWlILl4w3KIALlChVgAevKQJwhpl1VDVZT\nU1snJ1dv6g7mNKhp4wwxr8ZQOe+mBrC65pbWYDCjrb1DriNKB7uWTqAnu7rlOnp6EWHc1y8nN2Fi\ngkbwJKxaskFqJk+ZKic3bTokTmbMBEbWrBoQOx+rln6Ik+wnAbNI2Gzj+M45cnL+c+eBBecvwO6X\nDvOFYPkK5UVycouBAmlLYsECS5eZ4U5jyyFOcl6xUk5u1WpIAGgmE8jIYZA0ZrwGmtvWriOiuHCY\njUiUBeuJK2HkVvVBnLdhI5oEvnJs0+b4LVtdMYTJLi3JKMbJqSzIqJLIqPjIqF7JqMRJbyqQ0SAh\np9lDRuOK5CYcAPLjJAZ/NnpnAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTI5VDExOjI0OjE1\nKzA4OjAwNDsjIQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0yOVQxMToyNDoxNSswODowMEVm\nm50AAAAASUVORK5CYII=\"\n    />\n  </svg>\n</div>\n\n<div\n  class=\"cmenu\"\n  style=\"position:absolute;\"\n  [style.top]=\"config.cmenuPosition.top\"\n  [style.right]=\"config.cmenuPosition.right\"\n  [ngStyle]=\"{\n    display: hide === false ? 'none' : 'block'\n  }\"\n>\n  <div\n    class=\"cmenu-top\"\n    [style.top]=\"config.cmenutop.top\"\n    [style.right]=\"config.cmenutop.right\"\n    [style.background]=\"config.cmenutop.background\"\n    [style.border]=\"config.cmenutop.border\"\n    [style.width]=\"config.cmenutop.width\"\n    [style.height]=\"config.cmenutop.height\"\n    [style.border-bottom]=\"config.cmenutop.borderbottom\"\n    style=\"position: absolute; border-radius: 5px 5px 0 0;\n    z-index: 2;cursor: pointer;\"\n    (click)=\"vanish()\"\n  >\n    <span\n      [style.background]=\"config.cmenutop.backgroundImg\"\n      [style.background-repeat]=\"config.cmenutop.backgroundrepeat\"\n      [style.background-position]=\"config.cmenutop.backgroundposition\"\n      [style.width]=\"config.cmenutop.width\"\n      [style.height]=\"config.cmenutop.height\"\n      style=\"display: block;\"\n    ></span>\n  </div>\n  <div\n    class=\"cmenu-body\"\n    style=\" overflow: hidden; overflow-y: auto;\"\n    [style.width]=\"config.cmenubody.width\"\n    [style.max-height]=\"config.cmenubody.height\"\n    [style.border]=\"config.cmenubody.border\"\n    [style.border-radius]=\"config.cmenubody.borderradius\"\n    [style.border-bottom]=\"config.cmenubody.borderbottom\"\n    [style.background]=\"config.cmenubody.background\"\n  >\n    <div>\n      <div\n        *ngFor=\"let item of config.layers\"\n        style=\"display: flex; justify-content: space-between; margin: 10px 0px; list-style: none;overflow: hidden; \"\n        (click)=\"showitem(item)\"\n      >\n        <i\n          [style.width]=\"config.singleSize.width\"\n          [style.height]=\"config.singleSize.height\"\n          [style.background]=\"item.src\"\n          [style.background-size]=\"config.background.backgroundsize\"\n          style=\" float: left; padding: 5px 5px; margin: 0 10px;\"\n        ></i>\n        <span\n          style=\" float: left; padding: 5px 5px; overflow: hidden;\"\n          [style.line-height]=\"config.singleSize.height\"\n          [style.font-size]=\"config.fontStyle.fontSize\"\n          [style.width]=\"config.fontStyle.width\"\n        >\n          {{ item.title }}</span\n        >\n        <span\n          style=\" float: left;margin: 5px; cursor: pointer;background-size: 70% 70%;\"\n          [ngStyle]=\"{\n            'background-image':\n              item.visible === true ? config.select.src : config.unselect.src,\n              'background-repeat':\n              item.visible === true ? config.bgStyle.backgroundrepeat : config.bgStyle.backgroundrepeat,\n              'background-position':\n              item.visible === true ? config.bgStyle.backgroundposition : config.bgStyle.backgroundposition,\n              'background-size':\n              item.visible === true ? config.bgStyle.backgroundsize : config.bgStyle.backgroundsize\n          }\"\n          [style.width]=\"config.select.width\"\n          [style.height]=\"config.select.height\"\n        >\n        </span>\n      </div>\n    </div>\n  </div>\n  <div\n    style=\" border: 1px solid #005ab4;  border-radius: 0px 0px 5px 5px;  border-top: none;  height: 50px; background: white;\"\n  >\n    <div\n      class=\"all\"\n      (click)=\"allitem()\"\n      [ngStyle]=\"{\n        display: flag === true ? 'none' : 'block'\n      }\"\n    >\n      \u5168\u9009\n    </div>\n    <div\n      class=\"all\"\n      (click)=\"cancelitem()\"\n      [ngStyle]=\"{\n        display: flag === false ? 'none' : 'block'\n      }\"\n    >\n      \u53D6\u6D88\u5168\u9009\n    </div>\n  </div>\n</div>\n",
                styles: [".all{bottom:0;background:#005ab4;border-radius:4px;width:150px;height:30px;line-height:30px;text-align:center;left:50%;color:#fff;cursor:pointer;margin:0 auto;-webkit-transform:translate(0,20%);transform:translate(0,20%)}"]
            }] }
];
/** @nocollapse */
LayerControlPc3Component.ctorParameters = () => [];
LayerControlPc3Component.propDecorators = {
    outer: [{ type: Output }],
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PointLayerComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LineLayerComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PolygonLayerComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompassComponent {
    constructor() {
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数
     * \@example
     *
     * private defaultConfig = {
     * visible: 'block',
     * background: '#000',
     * size: {
     * width: '50px', // 总宽度
     * height: '50px' // 总高度
     * },
     * position: {
     * top: '10px',
     * bottom: '10px',
     * right: '10px',
     * left: '10px' // 全局定位
     * },
     * image: {
     * src: 'assets/compass.png'
     * }
     * };
     *
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CompassComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-compass',
                template: "<div style=\"position: absolute\" [style.width]=\"config.size.width\" [style.height]=\"config.size.height\"\n  [style.background]=\"config.background\" [style.display]=\"config.visible\" [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\" [style.right]=\"config.position.right\" [style.bottom]=\"config.position.bottom\">\n  <img src=\"{{config.image.src }}\" style=\"width: 100%;\" />\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
CompassComponent.ctorParameters = () => [];
CompassComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeatmapLegendComponent {
    constructor() {
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数1
     * \@example *
     * {
     * visible: 'block',
     * color: '#fff',
     * size: {
     * width: '100px', // 总宽度
     * height: '25px' // 总高度
     * },
     * position: {
     * top: '',
     * bottom: '10px',
     * right: '',
     * left: '10px' // 全局定位
     * },
     * datas: [
     * {
     * title: '舒适',
     * background: 'rgba(0, 172, 0,1)',
     * },
     * {
     * title: '较舒适',
     * background: '#0000FF',
     * },
     * {
     * title: '一般',
     * background: '#FFFF00',
     * },
     * {
     * title: '拥挤',
     * background: '#00FFFF',
     * }
     * ]
     * };
     *
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeatmapLegendComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-heatmap-legend',
                template: "<div style=\"position: absolute;\" [style.display]=\"config.visible\" [style.top]=\"config.position.top\"\n  [style.left]=\"config.position.left\" [style.right]=\"config.position.right\" [style.bottom]=\"config.position.bottom\">\n\n  <div style=\"display: flex;\">\n    <div *ngFor=\"let item of config.datas; let i = index\">\n      <div style=\"border: 2px solid #fff; text-align: center\" [style.background]=\"item.background\"\n        [style.width]=\"config.size.width\" [style.line-height]=\"config.size.height\" [style.height]=\"config.size.height\"\n        [style.color]=\"config.color\">\n        {{item.title}}</div>\n    </div>\n  </div>\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
HeatmapLegendComponent.ctorParameters = () => [];
HeatmapLegendComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScenicLegendComponent {
    constructor() {
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * 样式参数
     * \@example
     *
     * private defaultConfig = {
     * openStyle: {
     * size: {
     * width: '50px', // 总宽度
     * height: '50px' // 总高度
     * },
     * position: {
     * top: '',
     * bottom: '10px',
     * right: '',
     * left: '10px' // 全局定位
     * },
     * openImage: 'assets/show_map.png',
     * },
     * closeStyle: {
     * size: {
     * width: '50px', // 总宽度
     * height: '50px' // 总高度
     * },
     * position: {
     * top: '10px',
     * bottom: '10px',
     * right: '10px',
     * left: '10px' // 全局定位
     * },
     * closeImage: 'assets/close.png',
     * },
     * title: '图例',
     * gradestyle: {
     * color: 'white',
     * height: '20px',
     * width: '50px'
     * },
     * numberstyle: {
     * color: 'white',
     * width: '50px',
     * height: '20px'
     * },
     * Iconstyle: {
     * color: 'white',
     * width: '30px',
     * height: '30px'
     * },
     * visible: 'block',
     * background: '#000',
     * border: '1px solid #fff',
     * size: {
     * width: '200px', // 总宽度
     * height: 'auto' // 总高度
     * },
     * position: {
     * top: '10px',
     * bottom: '10px',
     * right: '10px',
     * left: '10px' // 全局定位
     * },
     * datas0: [
     * {
     * title: '景区等级',
     * visible: 'true', // 显示
     * type: 'colorType',
     * color: 'white',
     * titleStyle: {
     * color: 'gray'
     * },
     * data: [{
     * name: '5A',
     * value: 'rgba(255,152,1,1)'
     * }, {
     * name: '4A',
     * value: 'rgba(159,224,96,1)'
     * }, {
     * name: '3A',
     * value: 'rgba(2,139,255,1)'
     * }, {
     * name: '2A',
     * value: 'rgba(21,112,176,1)'
     * }]
     * }],
     * datas1: [
     * {
     * title: 'A景区数量统计',
     * visible: 'true', // 显示
     * type: 'colorNum',
     * color: 'white',
     * titleStyle: {
     * color: 'gray',
     * },
     * data: [{
     * name: '30',
     * value: 'rgba(255,152,1,1)'
     * }, {
     * name: '40',
     * value: 'rgba(159,224,96,1)'
     * }, {
     * name: '50',
     * value: 'rgba(2,139,255,1)'
     * }, {
     * name: '60',
     * value: 'rgba(21,112,176,1)'
     * }]
     * }],
     * datas2: [
     * {
     * title: 'B景区数量统计',
     * visible: 'true', // 显示
     * type: 'colorNum',
     * color: 'white',
     * titleStyle: {
     * color: 'gray',
     * },
     * data: [{
     * name: '30',
     * src: 'assets/show_map.png',
     * }, {
     * name: '40',
     * src: 'assets/show_map.png',
     * }, {
     * name: '50',
     * src: 'assets/show_map.png',
     * }, {
     * name: '60',
     * src: 'assets/show_map.png',
     * }]
     * }],
     * datas5: [
     * {
     * title: 'B景区数量统计88',
     * visible: 'true', // 显示
     * type: 'colorNum',
     * color: 'white',
     * titleStyle: {
     * color: 'gray',
     * },
     * data: [{
     * name: '30',
     * src: 'assets/show_map.png',
     * }, {
     * name: '40',
     * src: 'assets/show_map.png',
     * }, {
     * name: '50',
     * src: 'assets/show_map.png',
     * }, {
     * name: '60',
     * src: 'assets/show_map.png',
     * }]
     * }]
     * };
     *
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    // 显示
    /**
     * @return {?}
     */
    show() {
        this.hide = false;
    }
    // 影藏
    /**
     * @return {?}
     */
    vanish() {
        this.hide = true;
    }
    // mouseenter 移入
    /**
     * @return {?}
     */
    mouseenter() {
        this.flag = true;
    }
    // mouseleave 移出
    /**
     * @return {?}
     */
    mouseleave() {
        this.flag = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hide = false;
        this.flag = false;
    }
}
ScenicLegendComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-scenic-legend',
                template: "<div style=\"position: absolute\" [style.width]=\"config.openStyle.size.width\"\n  [style.height]=\"config.openStyle.size.height\" \n  [style.top]=\"config.openStyle.position.top\"\n  [style.left]=\"config.openStyle.position.left\" \n  [style.right]=\"config.openStyle.position.right\"\n  [style.bottom]=\"config.openStyle.position.bottom\"\n  (click)=\"vanish()\" [ngStyle]=\"{\n  display: hide === true ? 'none' : 'block'\n}\">\n  <img src=\"{{config.openStyle.openImage}}\" style=\"width: 100%;\" />\n</div>\n<div [ngStyle]=\"{\n  display: hide === false ? 'none' : 'block'\n}\">\n  <div (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\" style=\"position: absolute;padding: 0px;\"\n  [style.top]=\"config.openStyle.position.top\"\n  [style.left]=\"config.openStyle.position.left\" \n  [style.right]=\"config.openStyle.position.right\"\n  [style.bottom]=\"config.openStyle.position.bottom\">\n    <div (click)=\"show()\" style=\"width: 20px;  position: relative;  top: 5px;  right: 5px;  float: right;\" [ngStyle]=\"{\n    display: flag === false ? 'none' : 'block'\n  }\">\n      <img src=\"{{config.closeStyle.closeImage}}\" style=\"width: 100%;\" />\n    </div>\n    <div style=\"padding: 0px;\" [style.background]=\"config.background\" [style.width]=\"config.size.width\"\n      [style.height]=\"config.size.height\">\n      <div [style.border]=\"config.border\">\n        <div style=\"margin: 10px;\" [style.border-bottom]=\"config.border\" [style.color]=\"config.gradestyle.color\">\n          {{config.title}}\n        </div>\n        <!-- colorType -->\n        <div style=\"margin: 10px;\" [ngStyle]=\"{\n          display: config.datas0[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas0[0].titleStyle.color\">{{config.datas0[0].title}}</p>\n          <div *ngFor=\"let item of config.datas0[0].data; let i = index\" style=\"margin-bottom: 10px;\"\n            [style.height]=\"config.gradestyle.height\" [style.line-height]=\"config.gradestyle.height\">\n            <div style=\"border-radius: 5px;float: left;margin-right: 20px;\" [style.background]=\"item.value\"\n              [style.height]=\"config.gradestyle.height\" [style.width]=\"config.gradestyle.width\"></div>\n            <div [style.color]=\"config.datas1[0].color\" [style.height]=\"config.gradestyle.height\">{{item.name}}</div>\n          </div>\n        </div>\n        <!-- colorNum -->\n        <div style=\"margin: 10px;\"\n        [ngStyle]=\"{\n          display: config.datas1[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas1[0].titleStyle.color\">{{config.datas1[0].title}}</p>\n          <div style=\"margin-bottom: 10px;display: flex;\" [style.height]=\"config.numberstyle.height\"\n            [style.line-height]=\"config.numberstyle.height\">\n            <span *ngFor=\"let item of config.datas1[0].data; let i = index\" style=\"border-radius: 5px;float: left;\"\n              [style.background]=\"item.value\" [style.width]=\"config.numberstyle.width\"\n              [style.height]=\"config.numberstyle.height\"></span>\n          </div>\n          <div style=\"margin-bottom: 10px; display: flex;\" [style.height]=\"config.numberstyle.height\"\n            [style.line-height]=\"config.numberstyle.height\">\n            <span *ngFor=\"let item of config.datas1[0].data; let i = index\" style=\"  float: left; text-align: left\"\n              [style.color]=\"config.datas1[0].color\" [style.width]=\"config.numberstyle.width\"\n              [style.line-height]=\"config.numberstyle.height\">{{item.name}}</span>\n          </div>\n        </div>\n        <!-- iconType -->\n        <div style=\"margin: 10px; overflow: hidden;\"\n        [ngStyle]=\"{\n          display: config.datas2[0].visible === 'false' ? 'none' : 'block'\n        }\">\n          <p [style.color]=\"config.datas1[0].titleStyle.color\">{{config.datas2[0].title}}</p>\n          <div style=\"width: 50%; float: left;\">\n            <div *ngFor=\"let item of config.datas2[0].data; let i = index\" style=\"margin-bottom: 10px; float: left;\"\n              [style.height]=\"config.Iconstyle.height\" [style.line-height]=\"config.Iconstyle.height\">\n              <span style=\" float: left;\"  [style.height]=\"config.Iconstyle.height\" [style.width]=\"config.Iconstyle.width\"> <img src=\"{{item.src}}\"\n                  style=\"width: 100%;\" /></span>\n              <span style=\"  float: left; text-align: center\" [style.color]=\"config.datas1[0].color\"\n                [style.width]=\"config.Iconstyle.width\"\n                [style.line-height]=\"config.Iconstyle.height\">{{item.name}}</span>\n            </div>\n          </div>\n          <div style=\"width: 50%; float: left;\">\n            <div *ngFor=\"let item of config.datas2[0].data; let i = index\" style=\"margin-bottom: 10px; float: left;\"\n              [style.height]=\"config.Iconstyle.height\" [style.line-height]=\"config.Iconstyle.height\">\n              <span style=\" float: left;\"  [style.height]=\"config.Iconstyle.height\" [style.width]=\"config.Iconstyle.width\"> <img src=\"{{item.src}}\"\n                  style=\"width: 100%;\" /></span>\n              <span style=\"  float: left; text-align: center\" [style.color]=\"config.datas1[0].color\"\n                [style.width]=\"config.Iconstyle.width\"\n                [style.line-height]=\"config.Iconstyle.height\">{{item.name}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ScenicLegendComponent.ctorParameters = () => [];
ScenicLegendComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScenicBoxComponent {
    constructor() {
        this.mySwiper = {};
        // 默认图层参数
        this.defaultConfig = {};
        this.config = this.defaultConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setMap(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this.map = value;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    get sw() {
        return this._swiper;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sw(value) {
        this._swiper = Object.assign({}, this.mySwiper, value);
        console.log(value);
        this.initSwiper();
    }
    /**
     * @return {?}
     */
    initSwiper() {
        this.mySwiper = this._swiper;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        const self = this;
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
            const coordinate = evt.coordinate;
            // self.content.innerHTML = '';
            self.overlay.setPosition(coordinate);
        });
    }
}
ScenicBoxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-scenic-box',
                template: "<div id=\"popup\" class=\"ol-popup\" [style.background]=\"config.background\">\n  <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\"></a>\n  <div>\n    <div class=\"swiper-container\" [swiper]=\"mySwiper\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" *ngFor=\"let item of config.data\">\n          <img src=\"{{ item.src }}\" class=\"poimg\" />\n        </div>\n      </div>\n      <div class=\"swiper-pagination\"></div>\n      <div class=\"swiper-button-prev\"></div>\n      <div class=\"swiper-button-next\"></div>\n    </div>\n    <div>\n      <p\n        [style.color]=\"config.titleStyle.color\"\n        [style.font-size]=\"config.titleStyle.fontSize\"\n      >\n        {{ config.title }}\n      </p>\n      <p\n        class=\"starLevel\"\n        [style.width]=\"config.starLevel.width\"\n        [style.background]=\"config.starLevel.background\"\n        [ngStyle]=\"{\n          display: config.showGrade === 'false' ? 'none' : 'block'\n        }\"\n      >\n        {{ config.starLevel.name }}\n      </p>\n      <div\n        [ngStyle]=\"{\n          display: config.showDetails === 'false' ? 'none' : 'block'\n        }\"\n      >\n        <div\n          style=\"display: flex; margin: 10px 0px;\"\n          [style.color]=\"config.detailsStyle.color\"\n          [style.font-size]=\"config.detailsStyle.fontSize\"\n          *ngFor=\"let item of config.data1\"\n        >\n          <div class=\"listTitle\">{{ item.name }}\uFF1A</div>\n          <div class=\"listgrade\">{{ item.value }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"popup-content\"></div>\n</div>\n",
                styles: [".ol-popup{position:absolute;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));padding:15px;border:1px solid #ccc;bottom:12px;left:-155px;width:280px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#fff;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#ccc;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;color:#fff;top:-15px;right:-15px;background:#0065b3;width:30px;height:30px;text-align:center;line-height:30px;border-radius:50%}.ol-popup-closer:after{content:'\u2716'}.poimg{width:100%;height:100%}.starLevel{border-radius:3px;height:24px;margin:5px auto;font-family:\u9ED1\u4F53;font-size:18px;color:#fff;text-align:center;line-height:24px;padding:0 5px}.listTitle{width:70px}.listgrade{width:260px}"]
            }] }
];
/** @nocollapse */
ScenicBoxComponent.ctorParameters = () => [];
ScenicBoxComponent.propDecorators = {
    setMap: [{ type: Input, args: ['map',] }],
    config: [{ type: Input, args: ['config',] }],
    sw: [{ type: Input, args: ['sw',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpotBoxComponent {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set setMap(value) {
        if (!value) {
            return;
        }
        console.log('已绑定 map 组件 实例');
        this.map = value;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        this._config = Object.assign({}, this.defaultConfig, value);
    }
    /**
     * @return {?}
     */
    get sw() {
        return this._swiper;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sw(value) {
        this._swiper = Object.assign({}, this.mySwiper, value);
        console.log(value);
        this.initSwiper();
    }
    /**
     * @return {?}
     */
    initSwiper() {
        this.mySwiper = this._swiper;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        const self = this;
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
            const coordinate = evt.coordinate;
            // self.content.innerHTML = '';
            self.overlay.setPosition(coordinate);
        });
    }
}
SpotBoxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tgip-ol-spot-box',
                template: "<div id=\"popup\" class=\"ol-popup\">\n  <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\"></a>\n  <div id=\"popup-content\">\n    <div>\n      <div\n        class=\"titleStyle\"\n        [style.background]=\"config.titleStyle.background\"\n        [style.color]=\"config.titleStyle.color\"\n        [style.font-size]=\"config.titleStyle.fontSize\"\n      >\n        {{ config.title }}\n      </div>\n      <div class=\"bodyStyle\">\n        <ul\n          style=\" padding: 0;width: 100%; height: 100%; overflow: hidden;\"\n          [style.color]=\"config.dataStyle.color\"\n          [style.font-size]=\"config.dataStyle.fontSize\"\n        >\n          <li *ngFor=\"let item of config.data\">\n            {{ item.name }}\n          </li>\n        </ul>\n      </div>\n      <div style=\" width: 220px;margin: 0 auto;margin-bottom: 15px;\">\n        <button class=\"footButton\">\u5F53\u65E5\u8F68\u8FF9</button>\n        <button class=\"footButton\">\u53D1\u9001\u6D88\u606F</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".ol-popup{position:absolute;background-color:#fff;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));border:1px solid #ccc;bottom:12px;left:-225px;width:450px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#fff;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#ccc;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;top:2px;right:8px}.ol-popup-closer:after{content:'\u2716'}.titleStyle{height:40px;line-height:40px;padding-left:20px}.bodyStyle{height:auto;background:#fff;margin:0 30px;overflow:hidden}.bodyStyle ul li{float:left;width:170px;list-style:none;margin:5px 12px}.footButton{width:80px;height:30px;outline:0;background:#fff;color:#21aa93;border:1px solid #21aa93;border-radius:5px;margin:0 15px;cursor:pointer}.footButton:active{background:#21aa93;color:#fff}"]
            }] }
];
/** @nocollapse */
SpotBoxComponent.ctorParameters = () => [];
SpotBoxComponent.propDecorators = {
    setMap: [{ type: Input, args: ['map',] }],
    config: [{ type: Input, args: ['config',] }],
    sw: [{ type: Input, args: ['sw',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
const ɵ0 = DEFAULT_SWIPER_CONFIG;
class TgipOpenlayersModule {
}
TgipOpenlayersModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FullExtentComponent,
                    FullScreenComponent,
                    SwitcherMapComponent,
                    ZoomMapComponent,
                    MapComponent,
                    LayerControlPc1Component,
                    LayerControlPc2Component,
                    LayerControlPc3Component,
                    PointLayerComponent,
                    LineLayerComponent,
                    PolygonLayerComponent,
                    CompassComponent,
                    HeatmapLegendComponent,
                    ScenicLegendComponent,
                    ScenicBoxComponent,
                    SpotBoxComponent
                ],
                imports: [SwiperModule],
                providers: [
                    {
                        provide: SWIPER_CONFIG,
                        useValue: ɵ0
                    }
                ],
                exports: [
                    FullExtentComponent,
                    FullScreenComponent,
                    SwitcherMapComponent,
                    ZoomMapComponent,
                    MapComponent,
                    LayerControlPc1Component,
                    LayerControlPc2Component,
                    LayerControlPc3Component,
                    PointLayerComponent,
                    LineLayerComponent,
                    PolygonLayerComponent,
                    CompassComponent,
                    HeatmapLegendComponent,
                    ScenicLegendComponent,
                    ScenicBoxComponent,
                    SpotBoxComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TgipOpenlayersModule, FullScreenComponent, SwitcherMapComponent, ZoomMapComponent, FullExtentComponent, MapComponent, LayerControlPc1Component, LayerControlPc2Component, LayerControlPc3Component, PointLayerComponent, LineLayerComponent, PolygonLayerComponent, CompassComponent, HeatmapLegendComponent, ScenicLegendComponent, ScenicBoxComponent, SpotBoxComponent };

//# sourceMappingURL=tgip-openlayers.js.map