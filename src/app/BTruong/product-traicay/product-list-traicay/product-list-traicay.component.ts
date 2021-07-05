import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list-traicay',
  templateUrl: './product-list-traicay.component.html',
  styleUrls: ['./product-list-traicay.component.css'],
})
export class ProductListTraicayComponent implements OnInit {
  totalLenght:any;
  page:number =1;
  showport:any =[];
  public datas: Product[] = [];


category:any;


  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
    this.datas= this.datas.sort((low, high) => low.price - high.price);
  }
      getProducts() {
        this.productService.getProducts().subscribe((res: any) => {
       this.datas = res;
       this.datas= this.datas.filter(p=>p.category=='FR')
        });
      }
      sort(event: any) {
        switch (event.target.value) {
          case "":{
            this.getProducts();
            break;
          }
          case "Low":
            {
              this.datas = this.datas.sort((low, high) => low.price - high.price)
              break;
            }

          case "High":
            {
              this.datas= this.datas.sort((low, high) => high.price - low.price);
              break;
            }

          case "Name-a":
            {
              this.datas = this.datas.sort(function (low, high) {
                if (low.name < high.name) {
                  return -1;
                }
                else if (low.name > high.name) {
                  return 1;
                }
                else {
                  return 0;
                }
              })
              break;
            }
            case "N":
            {

              this.datas = this.datas.sort(function (low, high) {

                if (low.name < high.name) {
                  return 1;
                }
                else if (low.name > high.name) {
                  return -1;
                }
                else {
                  return 0;
                }
              })

              break;
            }

          default: {
            this.datas = this.datas.sort((low, high) => low.price - high.price);

            break;
          }

        }
        return this.datas;

      }



}
