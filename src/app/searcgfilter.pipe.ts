import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product.model';

@Pipe({
  name: 'searcgfilter'
})
export class SearcgfilterPipe implements PipeTransform {

  transform( search: Product[], searchValue:string): Product[] {
    if(!search || !searchValue){
      return search;
    }
    return search.filter(product=>
      product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}

