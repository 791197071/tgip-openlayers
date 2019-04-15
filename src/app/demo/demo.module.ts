import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreenDemoComponent } from './full-screen-demo/full-screen-demo.component';
import { DemoRoutingModule } from '../demo/demo-routing.module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { LayerControlPcDemoComponent } from './layer-control-pc1-demo/layer-control-pc1-demo.component';
import { SwitcherMapDemoComponent } from './switcher-map-demo/switcher-map-demo.component';
import { ZoomMapDemoComponent } from './zoom-map-demo/zoom-map-demo.component';
import { MapDemoComponent } from './map-demo/map-demo.component';
import { LayerControlPc2DemoComponent } from './layer-control-pc2-demo/layer-control-pc2-demo.component';
import { LayerControlPc3DemoComponent } from './layer-control-pc3-demo/layer-control-pc3-demo.component';
import { FullExtentDemoComponent } from './full-extent-demo/full-extent-demo.component';
import { PointLayerDemoComponent } from './point-layer-demo/point-layer-demo.component';
import { LineLayerDemoComponent } from './line-layer-demo/line-layer-demo.component';
import { PolygonLayerDemoComponent } from './polygon-layer-demo/polygon-layer-demo.component';
import { CompassComponent } from './common/compass/compass.component';
import { HeatmapLegendComponent } from './common/heatmap-legend/heatmap-legend.component';
import { ScenicLegendComponent } from './common/scenic-legend/scenic-legend.component';
import { ScenicBoxDemoComponent } from './information-box-demo/scenic-box-demo/scenic-box-demo.component';
import { SpotBoxDemoComponent } from './information-box-demo/spot-box-demo/spot-box-demo.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    FullScreenDemoComponent,
    LayerControlPcDemoComponent,
    SwitcherMapDemoComponent,
    ZoomMapDemoComponent,
    MapDemoComponent,
    LayerControlPc2DemoComponent,
    LayerControlPc3DemoComponent,
    FullExtentDemoComponent,
    PointLayerDemoComponent,
    LineLayerDemoComponent,
    PolygonLayerDemoComponent,
    CompassComponent,
    HeatmapLegendComponent,
    ScenicLegendComponent,
    ScenicBoxDemoComponent,
    SpotBoxDemoComponent

  ],
  imports: [CommonModule, DemoRoutingModule, SwiperModule],
  // exports: [RouterModule, TgipOpenlayersModule]
})
export class DemoModule { }
