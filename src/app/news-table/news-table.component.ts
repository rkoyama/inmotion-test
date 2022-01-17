import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { newsArticles, NewsService} from '../news.service';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})

export class NewsTableComponent implements OnInit {

  public articles = new MatTableDataSource<newsArticles>();
  newsColumns: string[] = ['id', 'slug', 'status', 'title', 'date'];

  getArticles() {
    this.NewsService.getNews()
      .subscribe(result => {
        this.articles.data = result as newsArticles[];
      })
    console.log(this.articles);
  }

  constructor(
    private NewsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }
}
