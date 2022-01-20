import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { newsArticles, NewsService } from '../news.service';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})

export class NewsTableComponent implements OnInit {

  public articles = new MatTableDataSource<newsArticles>();
  newsColumns: string[] = ['id', 'slug', 'status', 'title', 'date'];
  isLoading: any;

  getArticles() {
    this.NewsService.getNews()
      .subscribe(result => {
        this.isLoading = false;
        this.articles.data = result as newsArticles[];
      })
      console.log("articles: " + this.articles);
  }

  constructor(
    private NewsService: NewsService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getArticles();
  }
}
