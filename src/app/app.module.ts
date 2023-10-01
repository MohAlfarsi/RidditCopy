import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostRecordComponent } from './posts/post-list/post-record/post-record.component';

import { PostsDescComponent } from './posts-desc/posts-desc.component';

import { CommentsComponent } from './comments/comments.component';
import { CommentEditComponent } from './comments/comment-edit/comment-edit.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { CommentService } from './comments/comments.service';

import { LogInComponent } from './header/log-in/log-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    PostsComponent,
    PostDetailComponent,
    PostListComponent,
    PostEditComponent,
    PostRecordComponent,

    PostsDescComponent,

    CommentsComponent,
    CommentEditComponent,

    DropdownDirective,

    LogInComponent,
    SignUpComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
