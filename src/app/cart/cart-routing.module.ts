import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CartComponent } from './cart.component';

const CART_ROUTE: Route[] = [
  { path: '', component: CartComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(CART_ROUTE) ],
  exports: [ RouterModule ]
})
export class CartRoutingModule { }
