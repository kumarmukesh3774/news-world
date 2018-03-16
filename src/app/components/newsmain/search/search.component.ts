import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NewsService}         from '../../../services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[NewsService]
})
export class SearchComponent implements OnInit {
   searchInput:string="";
 private headers = new Headers({ 'Content-Type': 'application/json'});
  public newsList=[];
  @Output() successEmitter = new EventEmitter<any>();
  constructor(private newsService : NewsService) { }


  searchHandler(){
    this.newsService.searchHandler(this.searchInput).subscribe((res) =>{
      this.newsList = res.results;
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
  }

}
