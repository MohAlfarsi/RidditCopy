import { EventEmitter, Injectable } from '@angular/core';

import { Post } from './post.model';
import { CommentBase } from '../shared/comment.model';
import { CommentService } from '../comments/comments.service';

@Injectable()
export class PostService {

  postSelected = new EventEmitter<Post>();

  private posts: Post[] = [
    new Post(
      'I got to work late today',
      'Well, every one know that there are other things that more important than work somtimes and to each his...',
      [
        new CommentBase('All you need is to make a daily schedule and you will be fine', 7),
        new CommentBase('I get you man, some emergincy times we cant even think of the work itself', 10)
      ]),

    new Post('He fliped the table on me!!!',
      'Dud I didnt bleave it was possible before, but after this day I cant say there is any thing impossible',
      [
        new CommentBase('Come on man, dont make up things, are you looking for attention', 2),
        new CommentBase('are you serios, dud I cant imagen what would happen if he grabed you XD', 9)
      ])
  ];

  constructor(private slService: CommentService) {}

  getPosts() {
    return this.posts.slice();
  }

  addCommentToPost(comments: CommentBase[]) {
    this.slService.addComments(comments);
  }
}
