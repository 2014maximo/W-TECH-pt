import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    IntroComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule
  ],
  exports:[
    IntroComponent
  ]
})
export class ViewsModule { }
