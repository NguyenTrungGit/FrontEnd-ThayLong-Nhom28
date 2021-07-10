import { Injectable } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  listComment: Comment[] = [];
  constructor() {}

  getComment() {
    return this.listComment;
  }

  getCommentById(id: string) {
    return this.listComment.find((n) => n.id === id);
  }

  addComment(comment: Comment) {
    this.listComment.push(comment);
  }

  updateComment(id: string, updateField: Partial<Comment>) {
    const comment = this.getCommentById(id);
    Object.assign(comment, updateField);
  }

  deleteComment(id: string) {
    const commentIndex = this.listComment.findIndex((n) => n.id === id);
    if (commentIndex == -1) return;
    this.listComment.splice(commentIndex, 1);
  }
}
