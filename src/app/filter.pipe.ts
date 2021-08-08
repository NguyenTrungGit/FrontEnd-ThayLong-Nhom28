import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product.model';

@Pipe({
  name: 'filterList',
})
export class FilterPipe implements PipeTransform {
  transform(
    items: Product[],
    searchText: string,
    filterMetadata: any,
    ishow:boolean,
    ishiden:boolean,

  ): Product[] {

    if (!items) return [];
    if (!searchText) {
      filterMetadata.count = items.length-4 ;
      return items;
    }
    searchText = searchText.toLowerCase();
    let filteredItems = items.filter((it) => {
      return it.name.toLowerCase().includes(searchText);
    });


    if (filteredItems.length == 0) {

      filterMetadata.count = filteredItems.length ;
      console.log(filteredItems.length,"khong tru",filterMetadata.count);

    } else if (filteredItems.length == 1) {

      filterMetadata.count = filteredItems.length ;
      console.log("phai tru 1");

    } else if (filteredItems.length == 2) {

      filterMetadata.count = filteredItems.length ;
      console.log("phai tru 2");
      console.log(filterMetadata.length);

    } else if (filteredItems.length == 3) {

      filterMetadata.count = filteredItems.length ;
      console.log("phai tru 3");
    } else if (filteredItems.length == 4) {

      filterMetadata.count = filteredItems.length ;
      console.log("phai tru 4");
    } else if(filteredItems.length >4) {

      filterMetadata.count = filteredItems.length -4 ;
    }
    return filteredItems;
  }
}
