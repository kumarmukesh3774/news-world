import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsmain',
  templateUrl: './newsmain.component.html',
  styleUrls: ['./newsmain.component.css']
})
export class NewsmainComponent implements OnInit {
  public news =[];
  constructor() { }

  ngOnInit() {
  }

    // Update news list based on search input
    setNewsList(event) {
      this.news = event.newsList;
    }

}
