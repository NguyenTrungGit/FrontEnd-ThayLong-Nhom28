import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
@Input() categoryId: any;
cateName:any;
  constructor() {}

  ngOnInit(): void {
    if(this.categoryId==='tatca'){
this.cateName=''
    }else if(this.categoryId==='rau'){
      this.cateName='Rau'
    }else if(this.categoryId==='cu'){
      this.cateName='Củ'
    }else if(this.categoryId==='qua'){
      this.cateName='Quả'
    }else if(this.categoryId==='nam'){
      this.cateName='Nấm'
    }else if(this.categoryId==='traicay'){
      this.cateName='Trái cây'
    }
  }

}
