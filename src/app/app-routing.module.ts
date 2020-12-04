import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposantsComponent } from './pages/composants/composants.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'composants', component: ComposantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
