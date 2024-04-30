import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './views/intro/intro.component';
import { HomeComponent } from './views/home/home.component';
import { ActivityOneComponent } from './views/home/ovas/activity-one/activity-one.component';

const routes: Routes = [
  { path: '', component: IntroComponent }, // Initial component
  {
    path: 'intro', component: IntroComponent
  },
  {
    path: 'home',
    loadChildren: () =>
      import(
        './views/home/home.module'
      ).then((m) => m.HomeModule)
    }
 // Home component with lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
