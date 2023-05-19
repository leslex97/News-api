import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NewsItem } from '../domain/NewsItem';
import { UserInfoService } from '../services/user-info.service';
import { NgForm } from '@angular/forms';
import { NewsApiResponse } from '../domain/NewsApiResponse';
import { NewsApiClientService } from '../services/news-api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css'],
})
export class EditNewsComponent implements OnInit {
  newsItem: NewsItem;
  @ViewChild('headerElem', { static: true }) headerElem: ElementRef | undefined;
  @ViewChild('titleElem', { static: true }) titleElem: ElementRef | undefined;
  @ViewChild('contntElem', { static: true }) contentElem:
    | ElementRef
    | undefined;
  @ViewChild('createNewsForm', { static: true }) createNewsForm:
    | ElementRef
    | undefined;

  constructor(
    private userInfoService: UserInfoService,
    private newsApiClientService: NewsApiClientService,
    private router: Router){
    this.newsItem = new NewsItem();
    this.newsItem.setAuthor(
      this.userInfoService.getLoggedUserData().fullname()
    );
  }
  test() {
    this.newsItem.content = 'Wstawiona treść';
    console.log(this.newsItem);
  }

  ngOnInit(): void {}

  addNews(form: NgForm) {
    this.newsApiClientService.addNews(
      this.newsItem,
      (response: NewsApiResponse) => {
        this.router.navigate(['/news/list']);
      }
    );
  }
}
