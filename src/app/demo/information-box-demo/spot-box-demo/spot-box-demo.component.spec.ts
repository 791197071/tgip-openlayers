import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotBoxDemoComponent } from './spot-box-demo.component';

describe('SpotBoxDemoComponent', () => {
  let component: SpotBoxDemoComponent;
  let fixture: ComponentFixture<SpotBoxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotBoxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
