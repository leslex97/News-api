import { Injectable } from '@angular/core';
import { NewsItem } from '../domain/NewsItem';
import { HttpClient } from '@angular/common/http';
import { RestConfig } from './rest-config';
import { CommentItem } from '../domain/CommentItem';
import { NewsApiResponse } from '../domain/NewsApiResponse';

@Injectable({
  providedIn: 'root',
})
export class NewsApiClientService {
  constructor(private http: HttpClient) {}

  prepareTestData(): Array<NewsItem> {
    let newsList: Array<NewsItem> = new Array<NewsItem>();
    var news = [];
    for (let i = 1; i <= 10; i++) {
      news[i] = new NewsItem();
      news[i].id = i;
      news[i].header = `News ${i}`;
      news[i].title = `Tytuł ${i}`;
      news[i].author = `Autor ${i}`;
      news[i].content = `Zawartość ${i}`;
      newsList.push(news[i]);
    }

    return newsList;
  }
  getNewsListTest(callback: Function) {
    callback(this.prepareTestData());
  }

  getNewsList(callback: Function) {
    this.http
      .get<Array<NewsItem>>(`${RestConfig.apiUrl}/news/list`)
      .subscribe((data: Array<NewsItem>) => {
        callback(data);
      });
  }

  getCommentsList(newsID: Number, callback: Function) {
    this.http
      .get<Array<CommentItem>>(
        `${RestConfig.apiUrl}/news/commentsList/${newsID}`
      )
      .subscribe((data: Array<CommentItem>) => {
        console.log(data);
        callback(data);
      });
  }

  addNews(newsItem: NewsItem, callback: Function) {
    this.http
      .post<NewsApiResponse>(`${RestConfig.apiUrl}/news/add/`, newsItem)
      .subscribe((data: NewsApiResponse) => {
        callback(data);
      });
  }

  addComment(commentItem: CommentItem, callback: Function) {
    this.http.post<NewsApiResponse>(`${RestConfig.apiUrl}/comments/add/`, commentItem).subscribe((data: NewsApiResponse) => {
    callback(data);
    
    });
    }

    deleteComment(commentItem: CommentItem, callback: Function) {
      this.http.delete<NewsApiResponse>(`${RestConfig.apiUrl}/comments/remove/${commentItem.id}`).subscribe((data: NewsApiResponse) => {
      callback(data);
      });
      }

}
