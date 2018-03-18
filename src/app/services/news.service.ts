import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NEWSAPI} from '../configs/api.config';
import {App}  from '../configs/app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  public newsList:any=[];
  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});
  searchHandler(apiUrl){
    //alert(apiUrl);
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


  addToFav(singleNews) {
    //alert(singleNews.title);
     return this.http.post(App.apiUrl1+"articles", singleNews, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error)); 
  }

  getFavNews() {
    return this.http.get(App.apiUrl1+"newsList")
    .map(data => data.json(),
    (err) => {
      console.log("error encountered");
    });
  }

  deleteFavNews(singleNews){
    return this.http.delete(App.apiUrl1+"articles/"+singleNews.id, {headers: this.headers});
} 


}


  
