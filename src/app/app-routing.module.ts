import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';

const routes:Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'products1',component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}