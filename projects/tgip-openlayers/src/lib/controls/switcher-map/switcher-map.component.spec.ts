import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherMapComponent } from './switcher-map.component';

describe('SwitcherMapComponent', () => {
  let component: SwitcherMapComponent;
  let fixture: ComponentFixture<SwitcherMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitcherMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitcherMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
