import { CommentBase } from "../shared/comment.model";

export class Post {
    public title: String;
    public description: string;
    public comments: CommentBase[];

    constructor(title: string, desc: string, comments: CommentBase[]){
        this.title = title;
        this.description = desc;
        this.comments = comments;
    }
}