import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { CocktailRoutingModule } from './cocktail-routing.module';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
    declarations: [
        CocktailsListComponent,
        CocktailDetailsComponent,
        CocktailContainerComponent,
        CocktailEditComponent,
        FilterPipe,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CocktailRoutingModule,
        SharedModule
    ],
    providers: [],
    exports: []
})
export class CocktailModule {}