import { Component,OnInit } from '@angular/core';
import { WeatherApiServicesService } from "../service/weather-api-services.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  constructor(private _services:WeatherApiServicesService){}
  weatherDisplay:any = [];

  ngOnInit(): void{
    this._services.weather().subscribe((result)=>{
      this.weatherDisplay = result;
    })
  }
}
