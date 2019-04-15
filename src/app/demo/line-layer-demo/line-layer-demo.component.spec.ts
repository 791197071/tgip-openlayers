import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLayerDemoComponent } from './line-layer-demo.component';

describe('LineLayerDemoComponent', () => {
  let component: LineLayerDemoComponent;
  let fixture: ComponentFixture<LineLayerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineLayerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineLayerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
