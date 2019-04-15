import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonLayerDemoComponent } from './polygon-layer-demo.component';

describe('PolygonLayerDemoComponent', () => {
  let component: PolygonLayerDemoComponent;
  let fixture: ComponentFixture<PolygonLayerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonLayerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonLayerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
