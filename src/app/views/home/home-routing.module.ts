import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityOneComponent } from './ovas/activity-one/activity-one.component';
import { ActivityTwoComponent } from './ovas/activity-two/activity-two.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent,
    children: [
      { path: 'actividad1', component: ActivityOneComponent},
      { path: 'actividad2', component: ActivityTwoComponent},
      { path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
