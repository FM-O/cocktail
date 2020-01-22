import { Route, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { CartComponent } from './cart/cart.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

const APP_ROUTE: Route[] = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
    { path: 'cocktails', component: CocktailContainerComponent, children: [
        { path: '', component: CocktailDetailsComponent },
        { path: 'new', component: CocktailEditComponent },
        { path: ':index', component: CocktailDetailsComponent },
        { path: ':index/edit', component: CocktailEditComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTE) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}