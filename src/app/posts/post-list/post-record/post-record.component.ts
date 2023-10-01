import { Component, OnInit, Input} from '@angular/core';

import { Post } from '../../post.model'
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-record',
  templateUrl: './post-record.component.html',
  styleUrls: ['./post-record.component.css']
})
export class PostRecordComponent  implements OnInit {

  @Input() posts: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {
    
  }

  onSelected() {
    this.postService.postSelected.emit(this.posts);
  }

}
