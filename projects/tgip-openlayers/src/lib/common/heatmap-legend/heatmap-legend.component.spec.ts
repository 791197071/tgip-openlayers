import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapLegendComponent } from './heatmap-legend.component';

describe('HeatmapLegendComponent', () => {
  let component: HeatmapLegendComponent;
  let fixture: ComponentFixture<HeatmapLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
