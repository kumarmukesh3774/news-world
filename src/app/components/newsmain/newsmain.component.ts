import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsmain',
  templateUrl: './newsmain.component.html',
  styleUrls: ['./newsmain.component.css']
})
export class NewsmainComponent implements OnInit {
  public newsList =[];
  public normalFlag:boolean;
  constructor() { }

  ngOnInit() {
  }

    // Update news list based on search input
    setNewsList(event) {
      this.newsList = event.newsList;
      this.normalFlag=event.normalFlag;
     // alert(this.newsList);
    }

}
