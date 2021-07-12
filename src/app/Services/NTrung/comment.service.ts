import { Injectable } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  listComment: Comment[] = [
    new Comment("1","Nguyễn","Trung","Nguyentrunglk9@gmail.com","0339551554","nam","5","Sản phẩm tốt, đạt chất lượng của Global GAP"),
    new Comment("2","Nguyễn","Hương","Nguyentrunglk9@gmail.com","0339551554","nam","5","Sản phẩm tốt, đạt chất lượng của Global GAP"),
    new Comment("3","Trần","Phú","Nguyentrunglk9@gmail.com","0339551554","nam","5","Sản phẩm tốt, đạt chất lượng của Global GAP"),
    new Comment("4","Nguyễn","Vỹ","Nguyentrunglk9@gmail.com","0339551554","nam","5","Sản phẩm tốt, đạt chất lượng của Global GAP"),
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
