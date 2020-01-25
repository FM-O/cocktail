import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [HeaderComponent, CommonModule]
})
export class SharedModule {}