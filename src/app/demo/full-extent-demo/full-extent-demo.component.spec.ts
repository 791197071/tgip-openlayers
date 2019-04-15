import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullExtentDemoComponent } from './full-extent-demo.component';

describe('FullExtentDemoComponent', () => {
  let component: FullExtentDemoComponent;
  let fixture: ComponentFixture<FullExtentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullExtentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullExtentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
