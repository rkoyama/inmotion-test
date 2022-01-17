import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getNews(){
    const url ='https://wordpress.org/news/wp-json/wp/v2/posts';
    return this.http.get<Response>(url);
  }
}
