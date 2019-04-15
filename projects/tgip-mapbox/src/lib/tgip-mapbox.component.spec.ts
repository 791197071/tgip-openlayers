import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgipMapboxComponent } from './tgip-mapbox.component';

describe('TgipMapboxComponent', () => {
  let component: TgipMapboxComponent;
  let fixture: ComponentFixture<TgipMapboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgipMapboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgipMapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
