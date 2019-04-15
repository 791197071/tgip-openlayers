import { OnInit, ChangeDetectorRef } from '@angular/core';
export declare class ZoomMapComponent implements OnInit {
    changeDetectorRef: ChangeDetectorRef;
    /**
     * 输出参数
     * @param {any} outer
     */
    private outer;
    /**
     * 地图参数
     * @param {any} map
     */
    map: any;
    private _map;
    private _config;
    constructor(changeDetectorRef: ChangeDetectorRef);
    mapconfig: any;
    /**
       * 图层样式参数
       * @param {any} config
       * @example
       * {
        position: {
            top: 0px,
            bottom: 100px,
            right: 0px,
            left: 0px，
        },
        size: {
            width:  50px ,
            height:  50px，
        },
        border: {
            zoomIn:  1px solid #1296db ,
            zoomOut:  1px solid #1296db ,
            disable:  1px solid #cdcdcd ,
            radius:  5px ,
            cursor:  pointer ,
            uncursor:  no-drop，
        },
        zoomIn: {
            enable:  url(assets/enlarge.png) no-repeat center / 70% 70% ,
            disable:  url(assets/enlarge_d.png) no-repeat center / 70% 70% ,
            visible: true
        },
        zoomOut: {
            enable:  url(assets/less.png) no-repeat center / 70% 70% ,
            disable:  url(assets/less_d.png) no-repeat center / 70% 70% ,
            visible: true
        }
    };
       */
    config: any;
    private defaultConfig;
    changeZoom(data: any): void;
    initMap(): void;
    ngOnInit(): void;
}
