import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenicBoxDemoComponent } from './scenic-box-demo.component';

describe('ScenicBoxDemoComponent', () => {
  let component: ScenicBoxDemoComponent;
  let fixture: ComponentFixture<ScenicBoxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenicBoxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenicBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
