import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenDemoComponent } from './full-screen-demo/full-screen-demo.component';
import { FullExtentDemoComponent } from './full-extent-demo/full-extent-demo.component';
import { SwitcherMapDemoComponent } from './switcher-map-demo/switcher-map-demo.component';
import { ZoomMapDemoComponent } from './zoom-map-demo/zoom-map-demo.component';
import { TgipOpenlayersModule } from 'tgip-openlayers';
import { MapDemoComponent } from './map-demo/map-demo.component';
import { LayerControlPcDemoComponent } from './layer-control-pc1-demo/layer-control-pc1-demo.component';
import { LayerControlPc2DemoComponent } from './layer-control-pc2-demo/layer-control-pc2-demo.component';
import { LayerControlPc3DemoComponent } from './layer-control-pc3-demo/layer-control-pc3-demo.component';
import { PointLayerDemoComponent } from './point-layer-demo/point-layer-demo.component';
import { LineLayerDemoComponent } from './line-layer-demo/line-layer-demo.component';
import { PolygonLayerDemoComponent } from './polygon-layer-demo/polygon-layer-demo.component';
import { CompassComponent } from './common/compass/compass.component';
import { HeatmapLegendComponent } from './common/heatmap-legend/heatmap-legend.component';
import { ScenicLegendComponent } from './common/scenic-legend/scenic-legend.component';
import { ScenicBoxDemoComponent } from './information-box-demo/scenic-box-demo/scenic-box-demo.component';
import { SpotBoxDemoComponent } from './information-box-demo/spot-box-demo/spot-box-demo.component';
const routes: Routes = [
  {
    path: 'map',
    component: MapDemoComponent
  },
  {
    path: 'full-screen',
    component: FullScreenDemoComponent
  },
  {
    path: 'full-extent',
    component: FullExtentDemoComponent
  },
  {
    path: 'switcher-map',
    component: SwitcherMapDemoComponent
  },
  {
    path: 'zoom-map',
    component: ZoomMapDemoComponent
  },
  {
    path: 'layer-control-pc1',
    component: LayerControlPcDemoComponent
  },
  {
    path: 'layer-control-pc2',
    component: LayerControlPc2DemoComponent
  },
  {
    path: 'layer-control-pc3',
    component: LayerControlPc3DemoComponent
  },
  {
    path: 'point-layer',
    component: PointLayerDemoComponent
  },
  {
    path: 'line-layer',
    component: LineLayerDemoComponent
  },
  {
    path: 'polygon-layer',
    component: PolygonLayerDemoComponent
  },
  {
    path: 'polygon-layer',
    component: PolygonLayerDemoComponent
  },
  {
    path: 'compass',
    component: CompassComponent
  },
  {
    path: 'heatmap-legend',
    component: HeatmapLegendComponent
  },
  {
    path: 'scenic-legend',
    component: ScenicLegendComponent
  },
  {
    path: 'scenic-box',
    component: ScenicBoxDemoComponent
  },
  {
    path: 'spot-box',
    component: SpotBoxDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TgipOpenlayersModule]
})
export class DemoRoutingModule {}
