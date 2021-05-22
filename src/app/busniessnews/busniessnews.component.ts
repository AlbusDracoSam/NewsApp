import { Component, OnInit } from '@angular/core';

import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-busniessnews',
  templateUrl: './busniessnews.component.html',
  styleUrls: ['./busniessnews.component.css']
})
export class BusniessnewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  businessNewsDisplay:any = [];

  ngOnInit(): void {

    this._services.busniessNews().subscribe((result) =>{
        this.businessNewsDisplay = result.articles;
    });

  }

}
