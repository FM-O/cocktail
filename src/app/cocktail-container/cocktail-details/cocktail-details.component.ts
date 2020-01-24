import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail:Cocktail;
  public index:number;

  constructor(private activatedRoute:ActivatedRoute, private cocktailService:CocktailService, private cartService:CartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      if (params.index) {
        this.index = params.index;
      } else {
        this.index = 0;
      }
      this.cocktailService.getCocktail(this.index).subscribe((cocktail:Cocktail) => {
        this.cocktail = cocktail;
      });
    });
  }

  getUrl():string[] {
    return ['/cocktails', this.index + '', 'edit'];
  }

  addToCart(ingredients:Ingredient[]):void {
    this.cartService.addIngredients(ingredients);
  }

}
