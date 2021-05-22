import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient ) { }

  newsApiURL = " give your api key";

  techApiURL = " give your api key";

  busniessApiURL = " give your api key";

  entertainmentApiURL = " give your api key";
  
  sportsApiURL =  " give your api key";


  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiURL);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiURL);
  }

  busniessNews():Observable<any>
  {
    return this._http.get(this.busniessApiURL);
  }

  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiURL);
  }

  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentApiURL);
  }






}
