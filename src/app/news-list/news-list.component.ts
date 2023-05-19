import { Component, OnInit } from '@angular/core';
import { NewsApiClientService } from '../services/news-api-client.service';
import { NewsItem } from '../domain/NewsItem';
import { CommentItem } from '../domain/CommentItem';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  newsItemsList: Array<NewsItem> = new Array<NewsItem>();
  commentItemsList: Array<CommentItem> = new Array<CommentItem>();
  constructor(private newsApiClientService: NewsApiClientService) {}
  ngOnInit(): void {
    this.newsApiClientService.getNewsList((newsItemsList: Array<NewsItem>) => {
      this.newsItemsList = newsItemsList;
    });
  }

  showDetails(newsItem: NewsItem) {
    this.newsApiClientService.getCommentsList(
      newsItem.id,
      (commentItemsList: Array<CommentItem>) => {
        this.commentItemsList = commentItemsList;
        if (this.commentItemsList.length == 0) {
          let empty = new CommentItem();
          empty.newsId = newsItem.id;
          empty.isEmpty = true;
          empty.content =
            'Ten artykuł nie ma jescze komentarzy. Dodaj piewszy !';
          commentItemsList.push(empty);
        }
      }
    );
  }

  deleteComment(commentItem: CommentItem) {
    this.newsApiClientService.deleteComment(commentItem, () => {
      this.newsApiClientService.getCommentsList(
        commentItem.newsId,
        (commentItemsList: Array<CommentItem>) => {
          this.commentItemsList = commentItemsList;
        }
      );
    });
  }
}
