import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

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

  constructor(private http: HttpClient) { }

  getNews(){
    const url ="https://wordpress.org/news/wp-json/wp/v2/posts";
    let params = new HttpParams().append("_fields","id,slug,status,title,date")
                                 .append("per_page",20);
    return this.http.get<newsArticles[]>(url, {params: params})
      .pipe(
        catchError((error => {
          console.log('Error: ' + error);
          return throwError(() => new Error(error));
        })
      ))
  }
}
