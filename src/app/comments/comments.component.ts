import { Component, OnInit } from '@angular/core';

import { CommentBase } from '../shared/comment.model';
import { CommentService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  /*
  comments: CommentBase[] = [
    new CommentBase('This is a good one XD', 10),
    new CommentBase('Kinnada meh, it can be better', 4),
  ];
  */
 
  comments : CommentBase[];

  constructor(private slService: CommentService) { }

  ngOnInit() {
    this.comments = this.slService.getComments();
    this.slService.commentsChanged
      .subscribe(
        (comments: CommentBase[]) => {
          this.comments = comments;
        }
      );
  }

  onCommentAdded(comment: CommentBase) {
    this.comments.push(comment);
  }
}
