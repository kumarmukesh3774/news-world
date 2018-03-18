//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NewsService}         from '../../services/news.service';
import {CommonService}         from '../../services/common.service';

import {NEWSAPI}    from '../../configs/api.config'
import {App}        from '../../configs/app.config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[NewsService,CommonService]
})
export class HeaderComponent implements OnInit {

  searchInput:string="";
  //to handle buttons in favourite list
  public normalFlag:boolean;
  commonService:CommonService;
  private headers = new Headers({ 'Content-Type': 'application/json'});
   public newsList=[];
   @Output() successEmitter = new EventEmitter<any>();
   constructor(private newsService : NewsService,commonService:CommonService) { 
/*     this.commonService.invokeEvent.subscribe(flag => {
      if(flag == true){
       this.favourites(); 
     }
    }); */ 

   }
//technical news handler
   tech(){
    this.normalFlag=true;
    this.apiServiceCaller(NEWSAPI.techUrl);
   }
   //sports news handler
   sports(){
    this.normalFlag=true;
    this.apiServiceCaller(NEWSAPI.sportsUrl);
   }
   //business news handler
   business(){
    this.normalFlag=true;
    this.apiServiceCaller(NEWSAPI.buisinessUrl);
   }
   //favourite news handler
   public favourites(){
    this.normalFlag=false;
     //console.log("calledd");
     
    this.apiServiceCaller(App.apiUrl1+"db");
   }
   //top world news handler
   homePage(){
    this.normalFlag=true;
    this.apiServiceCaller(NEWSAPI.worldNewsUrl);
   }
   //search news handler
   searchHandler(){
     //to handle buttons in favourite list
    this.normalFlag=true;
    this.apiServiceCaller(NEWSAPI.searchUrlPart1+this.searchInput+NEWSAPI.searchUrlPart2);
   } 

   apiServiceCaller(apiUrl){
    this.newsService.searchHandler(apiUrl).subscribe((res) =>{
      this.newsList = res.articles;
      //console.log(this.newsList[0]);
      //alert(this.newsList);
      this.successEmitter.emit({
        'newsList': this.newsList,
        'normalFlag':this.normalFlag
      });
      }, (error) =>{
        console.log("Error Encoutered in fetching responseFrom API");
      })

   }
 

  ngOnInit() {
    //first time loading homepage
    this.homePage();
  }

}
