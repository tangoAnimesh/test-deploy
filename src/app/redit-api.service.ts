import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReditApiService implements OnInit {

  constructor(private http:HttpClient) { }

  public URL:string = "https://www.reddit.com/r/Angular2.json"
  // public URL:string = "https://jsonplaceholder.typicode.com/users"

  ngOnInit(): void {

  }
  
  get_API_Data(){
    return this.http.get(this.URL);
  }


}
