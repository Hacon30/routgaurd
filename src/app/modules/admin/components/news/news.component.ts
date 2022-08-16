import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConnectService } from 'src/app/services/api-connect.service';
@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articlesFeed: any = [];
  iterableFeed: any = [];
  constructor(private apiService:ApiConnectService) { }

  ngOnInit(): void {
    this.apiService.getFeed().subscribe(data =>{
      console.log(data);

      this.articlesFeed =  data;
      this.iterableFeed = this.articlesFeed.articles
    })
  }

}
