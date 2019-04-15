import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenicBoxComponent } from './scenic-box.component';

describe('ScenicBoxComponent', () => {
  let component: ScenicBoxComponent;
  let fixture: ComponentFixture<ScenicBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenicBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
