import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NewsService, newsDetails } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  //public newsDetail: newsDetails | undefined;
  newsDetail: any;
  isLoading:any;

  constructor(
    private NewsService: NewsService,
    private route: ActivatedRoute
  ) { }

  getDetails(id: string) {
    this.NewsService.getNewsDetails(id)
      .subscribe(result => {
        this.isLoading = false;
        this.newsDetail = result as newsDetails;
        console.log("data ", this.newsDetail[0]);
      })
  }

  ngOnInit(): void {
    this.isLoading = true;
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = String(routeParams.get('id'));
    this.getDetails(articleIdFromRoute);
  }
}
