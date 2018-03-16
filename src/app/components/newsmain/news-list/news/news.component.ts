import { Component, OnInit,Input } from '@angular/core';
import { NewsService } from '../../../../services/news.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	@Input() singleNews: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  // Add favourite movie to database
  addMovie(movie) {
/*   	this.newsService.addNews(movie).subscribe((res) =>{
  		
  	}, (error) =>{

  	}) */
  }
}
