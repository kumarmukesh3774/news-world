import { Component, OnInit,Input } from '@angular/core';
import {NewsService}         from '../../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  providers:[NewsService]
})
export class NewsListComponent implements OnInit {
  
  @Input() newsDisplay = [];
 //newsDisplay = [];
 

  constructor(private newsService:NewsService) {
    this.newsDisplay=this.newsService.getNewsList();
   
   }

  ngOnInit() { 
  }
 
}
