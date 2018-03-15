import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NEWSAPI} from '../configs/api.config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(private http : Http) { }

  searchHandler(searchInput){


      return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&include_adult=false&query=batman")
       .map(data => data.json(),
     (error: any)=>this.handleError(error));
     }
     private handleError(error: Response){
       return Observable.throw(error.statusText);
    
  }


  addNews(news) {
/*     return this.http.post(App.apiUrl+"movies", movie, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error)); */
  }


}


  
