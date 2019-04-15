/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FullScreenComponent } from './controls/full-screen/full-screen.component';
import { FullExtentComponent } from './controls/full-extent/full-extent.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
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
/** @type {?} */
const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
const ɵ0 = DEFAULT_SWIPER_CONFIG;
export class TgipOpenlayersModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGdpcC1vcGVubGF5ZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RnaXAtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi90Z2lwLW9wZW5sYXllcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztNQUczRSxxQkFBcUIsR0FBMEI7SUFDbkQsU0FBUyxFQUFFLFlBQVk7SUFDdkIsYUFBYSxFQUFFLE1BQU07Q0FDdEI7V0F3QmUscUJBQXFCO0FBc0JyQyxNQUFNLE9BQU8sb0JBQW9COzs7WUE3Q2hDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsUUFBUSxJQUF1QjtxQkFDaEM7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIscUJBQXFCO29CQUNyQixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZ1bGxTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2Z1bGwtc2NyZWVuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZ1bGxFeHRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2Z1bGwtZXh0ZW50L2Z1bGwtZXh0ZW50LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBTd2lwZXJNb2R1bGUgfSBmcm9tICduZ3gtc3dpcGVyLXdyYXBwZXInO1xyXG5pbXBvcnQgeyBTV0lQRVJfQ09ORklHIH0gZnJvbSAnbmd4LXN3aXBlci13cmFwcGVyJztcclxuaW1wb3J0IHsgU3dpcGVyQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnbmd4LXN3aXBlci13cmFwcGVyJztcclxuaW1wb3J0IHsgU3dpdGNoZXJNYXBDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL3N3aXRjaGVyLW1hcC9zd2l0Y2hlci1tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgWm9vbU1hcENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvem9vbS1tYXAvem9vbS1tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAvbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyQ29udHJvbFBjMUNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGF5ZXItY29udHJvbC1wYzEvbGF5ZXItY29udHJvbC1wYzEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJDb250cm9sUGMyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sYXllci1jb250cm9sLXBjMi9sYXllci1jb250cm9sLXBjMi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckNvbnRyb2xQYzNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xheWVyLWNvbnRyb2wtcGMzL2xheWVyLWNvbnRyb2wtcGMzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvaW50TGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy9wb2ludC1sYXllci9wb2ludC1sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaW5lTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy9saW5lLWxheWVyL2xpbmUtbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9seWdvbkxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvcG9seWdvbi1sYXllci9wb2x5Z29uLWxheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBhc3NDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi9jb21wYXNzL2NvbXBhc3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhdG1hcExlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uL2hlYXRtYXAtbGVnZW5kL2hlYXRtYXAtbGVnZW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNjZW5pY0xlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uL3NjZW5pYy1sZWdlbmQvc2NlbmljLWxlZ2VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTY2VuaWNCb3hDb21wb25lbnQgfSBmcm9tICcuL2luZm9ybWF0aW9uLWJveC9zY2VuaWMtYm94L3NjZW5pYy1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3BvdEJveENvbXBvbmVudCB9IGZyb20gJy4vaW5mb3JtYXRpb24tYm94L3Nwb3QtYm94L3Nwb3QtYm94LmNvbXBvbmVudCc7XHJcblxyXG5cclxuY29uc3QgREVGQVVMVF9TV0lQRVJfQ09ORklHOiBTd2lwZXJDb25maWdJbnRlcmZhY2UgPSB7XHJcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgc2xpZGVzUGVyVmlldzogJ2F1dG8nXHJcbn07XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBGdWxsRXh0ZW50Q29tcG9uZW50LFxyXG4gICAgRnVsbFNjcmVlbkNvbXBvbmVudCxcclxuICAgIFN3aXRjaGVyTWFwQ29tcG9uZW50LFxyXG4gICAgWm9vbU1hcENvbXBvbmVudCxcclxuICAgIE1hcENvbXBvbmVudCxcclxuICAgIExheWVyQ29udHJvbFBjMUNvbXBvbmVudCxcclxuICAgIExheWVyQ29udHJvbFBjMkNvbXBvbmVudCxcclxuICAgIExheWVyQ29udHJvbFBjM0NvbXBvbmVudCxcclxuICAgIFBvaW50TGF5ZXJDb21wb25lbnQsXHJcbiAgICBMaW5lTGF5ZXJDb21wb25lbnQsXHJcbiAgICBQb2x5Z29uTGF5ZXJDb21wb25lbnQsXHJcbiAgICBDb21wYXNzQ29tcG9uZW50LFxyXG4gICAgSGVhdG1hcExlZ2VuZENvbXBvbmVudCxcclxuICAgIFNjZW5pY0xlZ2VuZENvbXBvbmVudCxcclxuICAgIFNjZW5pY0JveENvbXBvbmVudCxcclxuICAgIFNwb3RCb3hDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtTd2lwZXJNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBTV0lQRVJfQ09ORklHLFxyXG4gICAgICB1c2VWYWx1ZTogREVGQVVMVF9TV0lQRVJfQ09ORklHXHJcbiAgICB9XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBGdWxsRXh0ZW50Q29tcG9uZW50LFxyXG4gICAgRnVsbFNjcmVlbkNvbXBvbmVudCxcclxuICAgIFN3aXRjaGVyTWFwQ29tcG9uZW50LFxyXG4gICAgWm9vbU1hcENvbXBvbmVudCxcclxuICAgIE1hcENvbXBvbmVudCxcclxuICAgIExheWVyQ29udHJvbFBjMUNvbXBvbmVudCxcclxuICAgIExheWVyQ29udHJvbFBjMkNvbXBvbmVudCxcclxuICAgIExheWVyQ29udHJvbFBjM0NvbXBvbmVudCxcclxuICAgIFBvaW50TGF5ZXJDb21wb25lbnQsXHJcbiAgICBMaW5lTGF5ZXJDb21wb25lbnQsXHJcbiAgICBQb2x5Z29uTGF5ZXJDb21wb25lbnQsXHJcbiAgICBDb21wYXNzQ29tcG9uZW50LFxyXG4gICAgSGVhdG1hcExlZ2VuZENvbXBvbmVudCxcclxuICAgIFNjZW5pY0xlZ2VuZENvbXBvbmVudCxcclxuICAgIFNjZW5pY0JveENvbXBvbmVudCxcclxuICAgIFNwb3RCb3hDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZ2lwT3BlbmxheWVyc01vZHVsZSB7IH1cclxuIl19