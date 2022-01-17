import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface newsArticles {
  id: string;
  slug: string;
  status: string;
  title: string;
  date: Date
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  // TODO: Add error validation
  constructor(private http: HttpClient) { }

  getNews(){
    const url ='https://wordpress.org/news/wp-json/wp/v2/posts?_fields=id,slug,status,title,date&per_page=20';
    return this.http.get<newsArticles[]>(url, {responseType: 'json'});
  }
}
