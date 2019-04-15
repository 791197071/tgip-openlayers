import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenicLegendComponent } from './scenic-legend.component';

describe('ScenicLegendComponent', () => {
  let component: ScenicLegendComponent;
  let fixture: ComponentFixture<ScenicLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenicLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenicLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
