import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NewsService}  from './services/news.service';
import { AppComponent } from './app.component';
import { NewsmainComponent } from './components/newsmain/newsmain.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsListComponent } from './components/newsmain/news-list/news-list.component';
import { NewsComponent } from './components/newsmain/news-list/news/news.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
const routes :Routes = [
  {path: '', redirectTo:'/newsmain',pathMatch:'full'},
  {path: 'newsmain', component:NewsmainComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NewsmainComponent,
    FooterComponent,
    NewsListComponent,
    NewsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
 
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
