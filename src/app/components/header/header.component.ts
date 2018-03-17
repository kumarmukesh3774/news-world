//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NewsService}         from '../../services/news.service';
import {NEWSAPI}    from '../../configs/api.config'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[NewsService]
})
export class HeaderComponent implements OnInit {

  searchInput:string="";
  private headers = new Headers({ 'Content-Type': 'application/json'});
   public newsList=[];
   @Output() successEmitter = new EventEmitter<any>();
   constructor(private newsService : NewsService) { }

   tech(){
    this.apiServiceCaller(NEWSAPI.techUrl);
   }
   sports(){
    this.apiServiceCaller(NEWSAPI.sportsUrl);
   }
   business(){
    this.apiServiceCaller(NEWSAPI.buisinessUrl);
   }
   favourites(){
    //this.apiServiceCaller(NEWSAPI.worldNewsUrl);
   }
   homePage(){
    this.apiServiceCaller(NEWSAPI.worldNewsUrl);
   }
   searchHandler(){
    this.apiServiceCaller(NEWSAPI.searchUrlPart1+this.searchInput+NEWSAPI.searchUrlPart2);
   } 

   apiServiceCaller(apiUrl){
    this.newsService.searchHandler(apiUrl).subscribe((res) =>{
      this.newsList = res.articles;
      //console.log(this.newsList[0]);
      //alert(this.newsList);
      this.successEmitter.emit({
        'newsList': this.newsList
      });
      }, (error) =>{
        console.log("Error Encoutered in fetching responseFrom API");
      })

   }
 

  ngOnInit() {
    this.homePage();
  }

}
