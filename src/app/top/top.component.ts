import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from "../service/news-api-services.service";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit{

  constructor(private _services:NewsApiServicesService){}

  topDisplay:any = [];

  ngOnInit(): void {
    this._services.topHeaders().subscribe((result)=> {
      this.topDisplay = result.articles;
    })
  }

}