import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { AppRoutingModule } from './app-routing.module';
import { CocktailModule } from './cocktail-container/cocktail.module';
import { SharedModule } from './shared/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CocktailModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
