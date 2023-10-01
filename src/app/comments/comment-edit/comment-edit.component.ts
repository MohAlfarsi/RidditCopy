import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import { CommentBase } from '../../shared/comment.model';
import { CommentService } from '../comments.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})

export class CommentEditComponent {

  @ViewChild('rateInput', { static: false }) rateInputRef: ElementRef;
  @ViewChild('commentInput', { static: false }) commentInputRef: ElementRef;


  constructor(private slService: CommentService) { }

  ngOnInit() {
  }

  onAddComment() {
    const ingComment = this.commentInputRef.nativeElement.value;
    const ingRate = this.rateInputRef.nativeElement.value;
    const newComment = new CommentBase(ingComment, ingRate);
    this.slService.addComment(newComment);

  }


}
