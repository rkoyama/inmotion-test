import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsTableComponent implements OnInit {

  public articles:any = [];

  getArticles() {
    this.NewsService.getNews()
      .subscribe((data: Response) => this.articles = data);
  }

  constructor(
    private NewsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }
}
