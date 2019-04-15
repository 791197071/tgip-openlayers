import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotBoxComponent } from './spot-box.component';

describe('SpotBoxComponent', () => {
  let component: SpotBoxComponent;
  let fixture: ComponentFixture<SpotBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
