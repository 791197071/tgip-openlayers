import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlPc3DemoComponent } from './layer-control-pc3-demo.component';

describe('LayerControlPc3DemoComponent', () => {
  let component: LayerControlPc3DemoComponent;
  let fixture: ComponentFixture<LayerControlPc3DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerControlPc3DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerControlPc3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
