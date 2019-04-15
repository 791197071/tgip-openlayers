import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';

@Component({
  selector: 'app-polygon-layer-demo',
  templateUrl: './polygon-layer-demo.component.html',
  styleUrls: ['./polygon-layer-demo.component.css']
})
export class PolygonLayerDemoComponent implements OnInit {
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.initData();
  }
  mapConfig: any;
  myPolygonData: Array<Object>;
  // 坐标字段及可见性

  polygonConfig = {
    coordsField: 'polygon_geometry',
    visible: true
  };

  // 数据 wkt格式数据
  initData() {
    this.myPolygonData = [
      {
        polygon_geometry:
          'MULTIPOLYGON (((118.76455002087813 31.853814741787392,118.83646922977937 31.844534843864658,' +
          '118.77293762092368 31.827759643773554)))',
        name: '淮胜信用社'
      }
    ];
  }

  // 样式
  polygonStyle(feature, resolution) {
    const styles = [];
    const style = new Style({
      fill: new Fill({
        color: 'rgba(255,099,49,0.6)'
      }),
      stroke: new Stroke({
        color: 'rgba(255,0,0,0.6)',
        width: 3
      })
    });

    styles.push(style);
    return styles;
  }

  ngOnInit() {}
}
