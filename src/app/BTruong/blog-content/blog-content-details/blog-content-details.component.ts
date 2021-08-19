import { Component, Input, OnInit,SimpleChange,SimpleChanges } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { Comment } from 'src/app/model/comment.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CommentService } from 'src/app/Services/NTrung/comment.service';


@Component({
  selector: 'app-blog-content-details',
  templateUrl: './blog-content-details.component.html',
  styleUrls: ['./blog-content-details.component.css']
})

export class BlogContentDetailsComponent implements OnInit {
@Input()idInput:any;
 id:any;
 blogInfor?:Blog

  constructor(private productService: ProductService, private _fb: FormBuilder,
    public commentService: CommentService) { }

  ngOnInit(): void {
    this.id= this.idInput;
    this.getBlog();

  }
  ngOnChanges(changes:SimpleChange):void{
    this.id= this.idInput;
    this.getBlog();

  }
  getBlog() {
    this.productService.getBlog().subscribe((res) => {
      this.blogInfor = res.find((n) => n.id === this.id);
    });
  }
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
}
