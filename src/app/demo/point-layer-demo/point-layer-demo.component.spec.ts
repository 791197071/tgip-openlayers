import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointLayerDemoComponent } from './point-layer-demo.component';

describe('PointLayerDemoComponent', () => {
  let component: PointLayerDemoComponent;
  let fixture: ComponentFixture<PointLayerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointLayerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointLayerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
