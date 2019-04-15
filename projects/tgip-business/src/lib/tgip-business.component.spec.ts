import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgipBusinessComponent } from './tgip-business.component';

describe('TgipBusinessComponent', () => {
  let component: TgipBusinessComponent;
  let fixture: ComponentFixture<TgipBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgipBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgipBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
