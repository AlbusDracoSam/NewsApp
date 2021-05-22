import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient ) { }

  newsApiURL = " https://newsapi.org/v2/top-headlines?country=in&apiKey=4137403d35b748b5b278d1a903885d82";

  techApiURL = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4137403d35b748b5b278d1a903885d82";

  busniessApiURL = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4137403d35b748b5b278d1a903885d82";

  entertainmentApiURL = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4137403d35b748b5b278d1a903885d82";
  
  sportsApiURL =  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4137403d35b748b5b278d1a903885d82";


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
