import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails:BehaviorSubject<Cocktail[]> = new BehaviorSubject([
      new Cocktail('Mojito', 'https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg', 'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.'),
      new Cocktail('Margarita', 'https://static.750g.com/images/600-600/5479d3dd25b24c4da9882350171a6b12/margarita.jpeg', "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila"),    
      new Cocktail('Sour', 'https://www.culinaryhill.com/wp-content/uploads/2018/11/whiskey-sour-cocktail-SQ-04-Culinary-Hill.png', "Traduit de l'anglais-Un sour est une famille traditionnelle de boissons mélangées. La Margarita et le sidecar sont des exemples courants. Les Sours appartiennent à l'une des anciennes familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks."),
    ]);

  public cocktail:BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  selectCocktail(index:number):void {
    this.cocktail.next(this.cocktails.value[index]);
  }

  constructor() { }
}
