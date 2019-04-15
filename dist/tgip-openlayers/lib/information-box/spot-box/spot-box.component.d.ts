import { OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
export declare class SpotBoxComponent implements OnInit {
    mySwiper: SwiperConfigInterface;
    marker: any;
    layer: any;
    overlay: any;
    popup: any;
    content: any;
    container: any;
    closer: any;
    layers: any;
    title: any;
    starLevel: any;
    constructor();
    setMap: any;
    private map;
    private _config;
    config: any;
    private defaultConfig;
    private _swiper;
    sw: any;
    initSwiper(): void;
    ngOnInit(): void;
}
