import { Component, OnInit,Input } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import {HeaderComponent} from '../../../header/header.component';
import { NgIf } from '@angular/common';
import {CommonService} from '../../../../services/common.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [CommonService]
})
export class NewsComponent implements OnInit {
  @Input() singleNews: any;
  @Input() normalFlag:boolean;

  
  public headerComponent:HeaderComponent;



  constructor(private newsService: NewsService,private commonService: CommonService) {
    //calling header Component from news Component
   // this.commonService.callFavourites(); 
   }

  ngOnInit() {
  }

  // Add favourite news
  addToFav(singleNews) {
   
 	this.newsService.addToFav(singleNews).subscribe((res) =>{
    alert("Added to Favourites");
      
  	}, (error) =>{
      alert("Error in  Adding Favourites");
        
  	}) 
  }
  deleteFavNews(singleNews){
    this.newsService.deleteFavNews(singleNews).subscribe((res) =>{
      alert("Removed from Favourites");  
     
  	}, (error) =>{
      alert("Error in  Removing Favourites");
        
  	}) } 
}
