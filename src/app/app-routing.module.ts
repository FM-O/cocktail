import { Route, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const APP_ROUTE: Route[] = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    { path: 'cart', loadChildren: './cart/cart.module#CartModule' }
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTE) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}