import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails:BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  initCocktails():void {
    this.http.get<Cocktail[]>('https://cocktails-b96c9.firebaseio.com/cocktails.json')
    .subscribe((cocktails:Cocktail[]) => {
      this.cocktails.next(cocktails);
    })
  }

  getCocktail(index:number):Observable<Cocktail> {
    return this.cocktails.pipe(
      filter((cocktails:Cocktail[]) => cocktails !== null),
      map((cocktails: Cocktail[]) => cocktails[index])
    );
  }

  addCocktail(cocktail:Cocktail):void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push(new Cocktail(cocktail.name, cocktail.image, cocktail.desc, cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))));
    this.cocktails.next(cocktails);
  }

  editCocktail(editCocktail:Cocktail):void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map(c => c.name).indexOf(editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
    this.save();
  }

  save():void {
    this.http.put('https://cocktails-b96c9.firebaseio.com/cocktails.json', this.cocktails.value)
    .subscribe()
  }

  constructor(private http:HttpClient) {
    this.initCocktails();
  }
}
