import { Subject } from 'rxjs'; 

export class ProductsService {
  
  private products = ['A Book'];
  productsUpdated = new Subject();

  addProducts(ProductName: string){
       this.products.push(ProductName);
       this.productsUpdated.next();
  }

  getProducts(){
       return [...this.products];
  }

  deleteProduct(ProductName: string){
    this.products = this.products.filter(p => p !== ProductName); 
    this.productsUpdated.next();
  }

}