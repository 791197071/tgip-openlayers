import { NgModule } from '@angular/core';
import { FullScreenComponent } from './controls/full-screen/full-screen.component';
import { FullExtentComponent } from './controls/full-extent/full-extent.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwitcherMapComponent } from './controls/switcher-map/switcher-map.component';
import { ZoomMapComponent } from './controls/zoom-map/zoom-map.component';
import { MapComponent } from './map/map.component';
import { LayerControlPc1Component } from './controls/layer-control-pc1/layer-control-pc1.component';
import { LayerControlPc2Component } from './controls/layer-control-pc2/layer-control-pc2.component';
import { LayerControlPc3Component } from './controls/layer-control-pc3/layer-control-pc3.component';
import { PointLayerComponent } from './layers/point-layer/point-layer.component';
import { LineLayerComponent } from './layers/line-layer/line-layer.component';
import { PolygonLayerComponent } from './layers/polygon-layer/polygon-layer.component';
import { CompassComponent } from './common/compass/compass.component';
import { HeatmapLegendComponent } from './common/heatmap-legend/heatmap-legend.component';
import { ScenicLegendComponent } from './common/scenic-legend/scenic-legend.component';
import { ScenicBoxComponent } from './information-box/scenic-box/scenic-box.component';
import { SpotBoxComponent } from './information-box/spot-box/spot-box.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
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
      useValue: DEFAULT_SWIPER_CONFIG
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
})
export class TgipOpenlayersModule { }
