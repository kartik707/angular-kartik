import {Component} from '@angular/core';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html'
})

export class ProductsComponent {
  ProductName = 'A Book';
  isDisabled = false;

  constructor(){
    setTimeout(() =>
    this.ProductName = 'A Tree'
    ,3000)

    setTimeout(() =>
    this.isDisabled = true
    ,6000)
  }
}