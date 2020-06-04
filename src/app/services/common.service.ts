import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public items:any;

  constructor(
    private http: HttpClient
  ) { }

  getItems(){
    return this.http.get("https://demo1282792.mockable.io/todolistitems");
  }
  
}
