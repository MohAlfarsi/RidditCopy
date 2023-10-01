import { CommentBase } from '../shared/comment.model';
import { EventEmitter } from '@angular/core';

export class CommentService {

    commentsChanged = new EventEmitter<CommentBase[]>();
  private comments: CommentBase[] = [
    new CommentBase('This post is not bad', 5),
    new CommentBase('Nah man I liked it I give you full mark', 10),
  ];

  getComments() {
    return this.comments.slice();
  }

  addComment(comment: CommentBase) {
    this.comments.push(comment);
    this.commentsChanged.emit(this.comments.slice());
  }

  addComments(comments: CommentBase[]) {
    // for (let comment of comments) {
    //   this.addComment(comment);
    // }
    this.comments.push(...comments);
    this.commentsChanged.emit(this.comments.slice());
  }
}
