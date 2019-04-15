import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLayerComponent } from './line-layer.component';

describe('LineLayerComponent', () => {
  let component: LineLayerComponent;
  let fixture: ComponentFixture<LineLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
