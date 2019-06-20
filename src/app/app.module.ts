import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service'; 
import { HomeComponent } from './home.component';
import {AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ProductsComponent, ProductComponent, HomeComponent ],
  providers:    [ProductsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
//Commit It!!!!!
