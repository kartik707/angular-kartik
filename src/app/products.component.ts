import {Component} from '@angular/core';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html'
})

export class ProductsComponent {
  ProductName = 'A Book';
  isDisabled = true;
  Products = ['Books','Trees','Cars','Bikes'];

  constructor(){
    // setTimeout(() =>
    // this.ProductName = 'A Tree'
    // ,3000)

    setTimeout(() =>
    this.isDisabled = false
    ,6000)
  }

  onProducts(){
    this.Products.push(this.ProductName);
  }

  onRemoveProduct(ProductName: string){
    this.Products = this.Products.filter(p => p !== ProductName);
  }

}