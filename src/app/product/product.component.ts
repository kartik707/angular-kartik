import {Component, Input, EventEmitter, Output} from '@angular/core';
import {ProductsService} from '../products.service'; 

@Component({
  selector: 'app-product',
  templateUrl: '../product/product.component.html',
  styleUrls: ['../product/product.component.css']
})

export class ProductComponent {

 @Input()  ProductName: string;
 @Output() productClicked = new EventEmitter();
 constructor(private productsService: ProductsService){

 }

 onClick(){
   //this.productClicked.emit();
   this.productsService.deleteProduct(this.ProductName);
 }

}