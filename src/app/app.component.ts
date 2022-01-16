import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'inmotion-test';
  private data:any = [];
  public articles:any =[];

  constructor(private http: HttpClient) { }

  getNews(){
     const url ='https://wordpress.org/news/wp-json/wp/v2/posts';
     this.http.get(url).subscribe((response)=>{
       this.data = response;
       this.articles = this.data;
       console.log(this.data);
     });
  }

  ngOnInit(){
    this.getNews();
  }
}
