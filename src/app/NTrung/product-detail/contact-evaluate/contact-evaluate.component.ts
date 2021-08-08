import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CommentService } from 'src/app/Services/NTrung/comment.service';
@Component({
  selector: 'app-contact-evaluate',
  templateUrl: './contact-evaluate.component.html',
  styleUrls: ['./contact-evaluate.component.css'],
})
export class ContactEvaluateComponent implements OnInit {
  evaluateGroup: FormGroup = this._fb.group({
    fristName: [null, [Validators.required, Validators.minLength(2)]],
    phoneNum: [
      null,
      [Validators.required, Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')],
    ],
    email: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
    content: [null, Validators.required],
    rating: [null],
  });

  constructor(
    private _fb: FormBuilder,
    public commentService: CommentService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: any) {
    const comment = new Comment(
      form.value.fristName,
      form.value.email,
      form.value.phoneNum,
      form.value.content,
      form.value.rating
    );
    this.commentService.addComment(comment);
    this.evaluateGroup.reset();
  }
}
