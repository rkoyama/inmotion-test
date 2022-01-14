import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'inmotion-test';
  private data:any = [];

  constructor(private http: HttpClient) { }

  getData(){
     const url ='/api/news/wp-json/wp/v2/posts';
     this.http.get(url).subscribe((response)=>{
       this.data = response;
       console.log(this.data);
     });
  }

  ngOnInit(){
    this.getData();
  }
}
