import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityOneComponent } from './ovas/activity-one/activity-one.component';
import { ActivityTwoComponent } from './ovas/activity-two/activity-two.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ActivityOneComponent,
    ActivityTwoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    ActivityOneComponent,
    ActivityTwoComponent
  ]
})
export class HomeModule { }
