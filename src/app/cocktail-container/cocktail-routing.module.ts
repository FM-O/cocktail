import { Route, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';


const COCKTAIL_ROUTE: Route[] = [
    { path: 'cocktails', component: CocktailContainerComponent, children: [
        { path: '', component: CocktailDetailsComponent },
        { path: 'new', component: CocktailEditComponent },
        { path: ':index', component: CocktailDetailsComponent },
        { path: ':index/edit', component: CocktailEditComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(COCKTAIL_ROUTE) ],
    exports: [ RouterModule ]
})

export class CocktailRoutingModule {}