import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentItem } from '../domain/CommentItem';
import { UserInfoService } from '../services/user-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsApiClientService } from '../services/news-api-client.service';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  commentItem: CommentItem;

  constructor(
    private userInfoService: UserInfoService,
    private route: ActivatedRoute,
    private newsApiClientService: NewsApiClientService,
    private router: Router,

  ) {
    this.commentItem = new CommentItem();
    this.commentItem.setAuthor(
      this.userInfoService.getLoggedUserData().fullname()
    );
  }

  addComment() {
    this.newsApiClientService.addComment(this.commentItem, ()=>{
      this.router.navigate(['/news/list']);

      });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.commentItem.newsId = +params['newsId'];
    });
  }
  
}
