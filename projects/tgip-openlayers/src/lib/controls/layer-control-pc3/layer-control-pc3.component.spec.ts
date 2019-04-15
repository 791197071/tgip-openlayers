import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlPc3Component } from './layer-control-pc3.component';

describe('LayerControlPc3Component', () => {
  let component: LayerControlPc3Component;
  let fixture: ComponentFixture<LayerControlPc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerControlPc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerControlPc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
