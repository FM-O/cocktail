import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[] = [ new Ingredient('lemon', 15) ];
  private subscription: Subscription;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.cart.subscribe((ingredients:Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
