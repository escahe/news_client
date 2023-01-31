import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServicesService {

  constructor(private _http:HttpClient) { }

  apiUrl = "http://localhost:8080/news/top-headlines";

  topHeaders():Observable<any>{
    return this._http.get(this.apiUrl);
  }
}