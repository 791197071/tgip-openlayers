import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlPc2DemoComponent } from './layer-control-pc2-demo.component';

describe('LayerControlPc2DemoComponent', () => {
  let component: LayerControlPc2DemoComponent;
  let fixture: ComponentFixture<LayerControlPc2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerControlPc2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerControlPc2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
