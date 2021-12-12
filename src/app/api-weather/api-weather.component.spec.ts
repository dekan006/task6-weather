import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWeatherComponent } from './api-weather.component';

describe('ApiWeatherComponent', () => {
  let component: ApiWeatherComponent;
  let fixture: ComponentFixture<ApiWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
