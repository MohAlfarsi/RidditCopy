import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() posts: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddToPost(){
    this.postService.addCommentToPost(this.posts.comments)
  }

}
