import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlPc1Component } from './layer-control-pc1.component';

describe('LayerControlPc1Component', () => {
  let component: LayerControlPc1Component;
  let fixture: ComponentFixture<LayerControlPc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerControlPc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerControlPc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
