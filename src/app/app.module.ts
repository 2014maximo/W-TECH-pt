import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from "./views/views.module";
import { HomeModule } from './views/home/home.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        HomeModule,
        ViewsModule
    ]
})
export class AppModule { }
