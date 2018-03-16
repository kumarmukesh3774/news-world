import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NewsService}  from './services/news.service';
import { AppComponent } from './app.component';
import { NewsmainComponent } from './components/newsmain/newsmain.component';
import { SportsComponent } from './components/newsmain/sports/sports.component';
import { HomeComponent } from './components/newsmain/home/home.component';
import { BusinessComponent } from './components/newsmain/business/business.component';
import { SearchComponent } from './components/newsmain/search/search.component';
import { TechComponent } from './components/newsmain/tech/tech.component';
import { FavouritesComponent } from './components/newsmain/favourites/favourites.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsListComponent } from './components/newsmain/news-list/news-list.component';
import { NewsComponent } from './components/newsmain/news-list/news/news.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
const routes :Routes = [
  {path: '', redirectTo:'/newsmain',pathMatch:'full'},
  {path: 'newsmain', component:NewsmainComponent},
  {path: 'favourite', component:FavouritesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsmainComponent,
    SportsComponent,
    HomeComponent,
    BusinessComponent,
    SearchComponent,
    TechComponent,
    FavouritesComponent,
    AboutUsComponent,
    FooterComponent,
    NewsListComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
