import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from '../config';
@Component({
  selector: 'app-switcher-map',
  templateUrl: './switcher-map-demo.component.html',
  styleUrls: ['./switcher-map-demo.component.css']
})
export class SwitcherMapDemoComponent implements OnInit {
  mapConfig: any;
  visible: any;
  constructor() {
    this.mapConfig = Config.mapConfig;
  }
  // 接收子组件传递过来的数据
  runParent(msg: any) {
    console.log(msg);
    if (msg.title === '地图') {
      this.mapConfig = Config.mapConfig;
    }
    if (msg.title === '地球') {
      this.mapConfig = {
        'centerX': 118.803930100525,
        'centerY': 31.8484312112617,
        'cnName': '江宁底图',
        'enName': 'jiangning',
        'extentMaxX': 122.41363694771411,
        'extentMaxY': 35.19822888,
        'extentMinX': 116.4205949555266,
        'extentMinY': 30.05113416022,
        'gmtCreate': 13146754,
        'gmtModified': 13146754,
        'id': 'test8888888888888',
        'maxZoom': 19,
        'minZoom': 2,
        'zoom': 8,
        'projectId': 'test99',
        'coordinateSystimSrid': 'EPSG:4326',
        'backgroundColor': '#568899',
        'basemapMapLayers': [{
          'id': 'mollit',
          'visible': true,
          'sourceId': 'jiangning_bg',
          'sourcePara': {
            'cnName': '江苏省天地图--底图',
            'describe': 'test',
            'gmtCreate': 1554256721000,
            'gmtModified': 1554256721000,
            'enName': 'jiangning_88',
            'id': '4da0d2318ac7aa739233ffe421587b70',
            'originX': -180,
            'originY': 90,
            'overAmap': 0,
            'coordinateSystimSrid': 'EPSG:4326',
            'resolutions': [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.000010728836059570312, 0.000005364418029785156],
            'tilesizeHeight': 256,
            'tilesizeWidth': 256,
            'dpi': 96,
            'urlAmap': '',
            'urlLeaflet': '',
            'urlMapbox': '',
            'urlOl': 'http://t{1-7}.tianditu.gov.cn/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=43ba9a0dc98a08b9d8ae7c9bab87d31e',
            'range': 'MULTIPOLYGON(((118.802166 32.125528,118.829632 32.135413,118.873577 32.135413,118.896236 32.131924,118.940182 32.108662,118.940182 32.091212,118.949108 32.081322,118.941555 32.067358,118.936062 32.056302,118.928509 32.0499,118.918209 32.036513,118.909283 32.026035,118.901729 32.024289,118.887997 32.019049,118.871517 32.014392,118.851604 32.012645,118.834438 32.014392,118.817272 32.023707,118.798046 32.036513,118.795986 32.060375,118.790493 32.073177,118.785686 32.088885,118.785 32.102264,118.788433 32.109825,118.789806 32.117386,118.802166 32.125528)))'
          }
        }]
      };
    }
  }

  ngOnInit() { }
}
