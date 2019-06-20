import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductsService} from './products.service'; 
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit, OnDestroy {
  ProductName = 'A Book';
  isDisabled = true;
  //Products = ['Books','Trees','Cars','Bikes'];
  Products = [];
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService){
    
    // setTimeout(() =>
    // this.ProductName = 'A Tree'
    // ,3000)

    setTimeout(() =>
    this.isDisabled = false
    ,6000)
  }

  ngOnInit(){
    this.Products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.Products = this.productsService.getProducts();
    });
  }

  ngOnDestroy(){
    this.productsSubscription.unsubscribe();
  }

  onProducts(){
    this.Products.push(this.ProductName);
  }

  onRemoveProduct(ProductName: string){
    this.Products = this.Products.filter(p => p !== ProductName);
  }

  onAddForm(form){  
    //console.log(form);
    if(form.valid){
      //this.Products.push(form.value.ProductName);
      this.productsService.addProducts(form.value.ProductName);
    }
  }

}