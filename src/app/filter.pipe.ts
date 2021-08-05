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

    if (filteredItems.length == 1) {

      filterMetadata.count = filteredItems.length - 1;
      console.log("phai tru 1");

    } else if (filteredItems.length == 2) {

      filterMetadata.count = filteredItems.length - 2;
      console.log("phai tru 2");
    } else if (filteredItems.length == 3) {

      filterMetadata.count = filteredItems.length - 3;
      console.log("phai tru 3");
    } else if (filteredItems.length == 4) {

      filterMetadata.count = filteredItems.length - 4;
      console.log("phai tru 4");
    } else if(filteredItems.length >4) {

      filterMetadata.count = filteredItems.length -4 ;
    }
    return filteredItems;
  }
}
