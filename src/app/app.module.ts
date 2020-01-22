import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { CartComponent } from './cart/cart.component';
import { IngredientsListComponent } from './cart/ingredients-list/ingredients-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    ActiveDirective,
    CartComponent,
    IngredientsListComponent,
    CocktailEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
