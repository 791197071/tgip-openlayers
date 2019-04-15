import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenDemoComponent } from './full-screen-demo.component';

describe('FullScreenDemoComponent', () => {
  let component: FullScreenDemoComponent;
  let fixture: ComponentFixture<FullScreenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
