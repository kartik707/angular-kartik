import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: '../product/product.component.html',
  styleUrls: ['../product/product.component.css']
})

export class ProductComponent {

 @Input()  ProductName: string;
 @Output() productClicked = new EventEmitter();

 onClick(){
   this.productClicked.emit();
 }

}