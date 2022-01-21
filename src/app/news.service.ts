import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export interface newsArticles {
  id: string;
  slug: string;
  status: string;
  title: string;
  date: Date;
}

export interface newsDetails {
  title: string;
  date: Date;
  link: string;
  content: string;
}

const URL = "https://wordpress.org/news/wp-json/wp/v2/posts";

@Injectable({
  providedIn: 'any'
})

export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getNews(){
    let newsParams = new HttpParams().append("_fields","id,slug,status,title,date")
                                     .append("per_page",20);
    return this.http.get<newsArticles[]>(URL, {params: newsParams})
      .pipe(
        catchError((error => {
          console.log('Error: ' + error);
          return throwError(() => new Error(error));
        })
      ))
  }

  getNewsDetails(id: string){
    console.log("id: " + id);
    let detailsParams = new HttpParams().append("include[]", id)
                                        .append("_fields", "title,date,link,content")
    return this.http.get<newsDetails>(URL, {params: detailsParams})
      .pipe(
        catchError((error => {
          console.log('Error: ' + error);
          return throwError(() => new Error(error));
        }))
      )
  }
}
