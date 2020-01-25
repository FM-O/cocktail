import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent, IngredientsListComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
