import { TestBed } from '@angular/core/testing';

import { WeatherApiServicesService } from './weather-api-services.service';

describe('WeatherApiServicesService', () => {
  let service: WeatherApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
