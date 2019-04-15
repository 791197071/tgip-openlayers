import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomMapDemoComponent } from './zoom-map-demo.component';

describe('ZoomMapDemoComponent', () => {
  let component: ZoomMapDemoComponent;
  let fixture: ComponentFixture<ZoomMapDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomMapDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomMapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
