import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlPcDemoComponent } from './layer-control-pc1-demo.component';

describe('LayerControlPcDemoComponent', () => {
  let component: LayerControlPcDemoComponent;
  let fixture: ComponentFixture<LayerControlPcDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerControlPcDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerControlPcDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
