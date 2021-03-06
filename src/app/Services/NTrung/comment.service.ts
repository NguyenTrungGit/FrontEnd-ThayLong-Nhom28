import { Injectable } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  listComment: Comment[] = [
    new Comment(
      'Trung',
      'Nguyentrunglk9@gmail.com',
      '0339551554',
      'Sản phẩm tốt, đạt chất lượng của Global GAP',
      5
    ),
    new Comment(
      'Hương',
      'Nguyentrunglk9@gmail.com',
      '0339551554',
      'Sản phẩm tốt, đạt chất lượng của Global GAP Sản phẩm tốt, đạt chất lượng của Global GAP Sản phẩm tốt, đạt chất lượng của Global GAP Sản phẩm tốt, đạt chất lượng của Global GAP Sản phẩm tốt, đạt chất lượng của Global GAP Sản phẩm tốt, đạt chất lượng của Global GAP',
      5
    ),
  ];
  constructor() {}

  getComments() {
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
