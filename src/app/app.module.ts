import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsApiServicesService } from "./service/news-api-services.service";
import { WeatherComponent } from './weather/weather.component';
import { WeatherApiServicesService } from './service/weather-api-services.service';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiServicesService,WeatherApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
