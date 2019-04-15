import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherMapDemoComponent } from './switcher-map-demo.component';

describe('SwitcherMapDemoComponent', () => {
  let component: SwitcherMapDemoComponent;
  let fixture: ComponentFixture<SwitcherMapDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitcherMapDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitcherMapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
