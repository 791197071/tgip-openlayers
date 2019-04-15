import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgipCommonComponent } from './tgip-common.component';

describe('TgipCommonComponent', () => {
  let component: TgipCommonComponent;
  let fixture: ComponentFixture<TgipCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgipCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgipCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
