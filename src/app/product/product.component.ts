import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: '../product/product.component.html',
  styleUrls: ['../product/product.component.css']
})

export class ProductComponent {

 @Input()  ProductName: string;

}