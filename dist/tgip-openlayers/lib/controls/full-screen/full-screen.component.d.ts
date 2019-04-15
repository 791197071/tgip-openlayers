import { OnInit, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
export declare class FullScreenComponent implements OnInit, OnDestroy, OnChanges {
    configUrl: string;
    private subscription;
    private _config;
    /**
    * 样式参数
    * @param {any} config
    */
    config: any;
    private defaultConfig;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * 是当前元素 全屏 还是document ele全屏？
     */
    fullscreenToggle(elem?: any): void;
}
