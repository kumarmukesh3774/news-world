import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class CommonService {
  public flag:boolean=false;
  constructor() { }
  invokeEvent: Subject<any> = new Subject(); 

  callFavourites() { 
    this.flag=true;
    this.invokeEvent.next(this.flag);      
  }


}
