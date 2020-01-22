import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart:BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);

  addIngredients(ingredients:Ingredient[]):void {
    const currentValue = this.cart.value;

    if (currentValue && currentValue.length) {
      this.cart.next(currentValue.concat(ingredients));
    } else {
      this.cart.next(ingredients);
    }
  }

  constructor() { }
}
