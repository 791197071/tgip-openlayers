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
var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var ɵ0 = DEFAULT_SWIPER_CONFIG;
var TgipOpenlayersModule = /** @class */ (function () {
    function TgipOpenlayersModule() {
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
    return TgipOpenlayersModule;
}());
export { TgipOpenlayersModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGdpcC1vcGVubGF5ZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RnaXAtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi90Z2lwLW9wZW5sYXllcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztJQUczRSxxQkFBcUIsR0FBMEI7SUFDbkQsU0FBUyxFQUFFLFlBQVk7SUFDdkIsYUFBYSxFQUFFLE1BQU07Q0FDdEI7U0F3QmUscUJBQXFCO0FBdkJyQztJQUFBO0lBNkNvQyxDQUFDOztnQkE3Q3BDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsUUFBUSxJQUF1Qjt5QkFDaEM7cUJBQ0Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O0lBQ21DLDJCQUFDO0NBQUEsQUE3Q3JDLElBNkNxQztTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGdWxsU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9mdWxsLXNjcmVlbi9mdWxsLXNjcmVlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGdWxsRXh0ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9mdWxsLWV4dGVudC9mdWxsLWV4dGVudC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgU3dpcGVyTW9kdWxlIH0gZnJvbSAnbmd4LXN3aXBlci13cmFwcGVyJztcclxuaW1wb3J0IHsgU1dJUEVSX0NPTkZJRyB9IGZyb20gJ25neC1zd2lwZXItd3JhcHBlcic7XHJcbmltcG9ydCB7IFN3aXBlckNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJ25neC1zd2lwZXItd3JhcHBlcic7XHJcbmltcG9ydCB7IFN3aXRjaGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9zd2l0Y2hlci1tYXAvc3dpdGNoZXItbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFpvb21NYXBDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL3pvb20tbWFwL3pvb20tbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckNvbnRyb2xQYzFDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xheWVyLWNvbnRyb2wtcGMxL2xheWVyLWNvbnRyb2wtcGMxLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyQ29udHJvbFBjMkNvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGF5ZXItY29udHJvbC1wYzIvbGF5ZXItY29udHJvbC1wYzIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJDb250cm9sUGMzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sYXllci1jb250cm9sLXBjMy9sYXllci1jb250cm9sLXBjMy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb2ludExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGluZUxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGluZS1sYXllci9saW5lLWxheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvbHlnb25MYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzL3BvbHlnb24tbGF5ZXIvcG9seWdvbi1sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wYXNzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vY29tcGFzcy9jb21wYXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYXRtYXBMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi9oZWF0bWFwLWxlZ2VuZC9oZWF0bWFwLWxlZ2VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTY2VuaWNMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi9zY2VuaWMtbGVnZW5kL3NjZW5pYy1sZWdlbmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2NlbmljQm94Q29tcG9uZW50IH0gZnJvbSAnLi9pbmZvcm1hdGlvbi1ib3gvc2NlbmljLWJveC9zY2VuaWMtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNwb3RCb3hDb21wb25lbnQgfSBmcm9tICcuL2luZm9ybWF0aW9uLWJveC9zcG90LWJveC9zcG90LWJveC5jb21wb25lbnQnO1xyXG5cclxuXHJcbmNvbnN0IERFRkFVTFRfU1dJUEVSX0NPTkZJRzogU3dpcGVyQ29uZmlnSW50ZXJmYWNlID0ge1xyXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJ1xyXG59O1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRnVsbEV4dGVudENvbXBvbmVudCxcclxuICAgIEZ1bGxTY3JlZW5Db21wb25lbnQsXHJcbiAgICBTd2l0Y2hlck1hcENvbXBvbmVudCxcclxuICAgIFpvb21NYXBDb21wb25lbnQsXHJcbiAgICBNYXBDb21wb25lbnQsXHJcbiAgICBMYXllckNvbnRyb2xQYzFDb21wb25lbnQsXHJcbiAgICBMYXllckNvbnRyb2xQYzJDb21wb25lbnQsXHJcbiAgICBMYXllckNvbnRyb2xQYzNDb21wb25lbnQsXHJcbiAgICBQb2ludExheWVyQ29tcG9uZW50LFxyXG4gICAgTGluZUxheWVyQ29tcG9uZW50LFxyXG4gICAgUG9seWdvbkxheWVyQ29tcG9uZW50LFxyXG4gICAgQ29tcGFzc0NvbXBvbmVudCxcclxuICAgIEhlYXRtYXBMZWdlbmRDb21wb25lbnQsXHJcbiAgICBTY2VuaWNMZWdlbmRDb21wb25lbnQsXHJcbiAgICBTY2VuaWNCb3hDb21wb25lbnQsXHJcbiAgICBTcG90Qm94Q29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbU3dpcGVyTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogU1dJUEVSX0NPTkZJRyxcclxuICAgICAgdXNlVmFsdWU6IERFRkFVTFRfU1dJUEVSX0NPTkZJR1xyXG4gICAgfVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRnVsbEV4dGVudENvbXBvbmVudCxcclxuICAgIEZ1bGxTY3JlZW5Db21wb25lbnQsXHJcbiAgICBTd2l0Y2hlck1hcENvbXBvbmVudCxcclxuICAgIFpvb21NYXBDb21wb25lbnQsXHJcbiAgICBNYXBDb21wb25lbnQsXHJcbiAgICBMYXllckNvbnRyb2xQYzFDb21wb25lbnQsXHJcbiAgICBMYXllckNvbnRyb2xQYzJDb21wb25lbnQsXHJcbiAgICBMYXllckNvbnRyb2xQYzNDb21wb25lbnQsXHJcbiAgICBQb2ludExheWVyQ29tcG9uZW50LFxyXG4gICAgTGluZUxheWVyQ29tcG9uZW50LFxyXG4gICAgUG9seWdvbkxheWVyQ29tcG9uZW50LFxyXG4gICAgQ29tcGFzc0NvbXBvbmVudCxcclxuICAgIEhlYXRtYXBMZWdlbmRDb21wb25lbnQsXHJcbiAgICBTY2VuaWNMZWdlbmRDb21wb25lbnQsXHJcbiAgICBTY2VuaWNCb3hDb21wb25lbnQsXHJcbiAgICBTcG90Qm94Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGdpcE9wZW5sYXllcnNNb2R1bGUgeyB9XHJcbiJdfQ==