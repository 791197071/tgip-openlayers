import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlPc2Component } from './layer-control-pc2.component';

describe('LayerControlPc2Component', () => {
  let component: LayerControlPc2Component;
  let fixture: ComponentFixture<LayerControlPc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerControlPc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerControlPc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
