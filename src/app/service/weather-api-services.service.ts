import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiServicesService {
  constructor(private _http:HttpClient) { }

  apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=1c36ac9c1c550a8bcad1ce51fe5977e3&units=metric&lang=es&id=3687925";

  weather():Observable<any>{
    return this._http.get(this.apiUrl);
  }
}
