import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NEWSAPI} from '../configs/api.config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  public newsList:any=[];
  constructor(private http : Http) { }

  searchHandler(apiUrl){


      this.newsList= this.http.get(apiUrl)
       .map(data => data.json(),
     (error: any)=>this.handleError(error));
     return this.newsList;
     }
     private handleError(error: Response){
       return Observable.throw(error.statusText);
    
  }
  getNewsList(){
      return this.newsList;

  }


  addNews(news) {
/*     return this.http.post(App.apiUrl+"movies", movie, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error)); */
  }


}


  
