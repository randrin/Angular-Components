import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposantsComponent } from './pages/composants/composants.component';
import { NbpAlertBoxPageComponent } from './pages/composants/nbp-alert-box-page/nbp-alert-box-page.component';
import { NbpBackgroundBoxPageComponent } from './pages/composants/nbp-background-box-page/nbp-background-box-page.component';
import { NbpButtonPageComponent } from './pages/composants/nbp-button-page/nbp-button-page.component';
import { NbpDividingLinePageComponent } from './pages/composants/nbp-dividing-line-page/nbp-dividing-line-page.component';
import { NbpFeedbackPageComponent } from './pages/composants/nbp-feedback-page/nbp-feedback-page.component';
import { NbpInputTextPageComponent } from './pages/composants/nbp-input-text-page/nbp-input-text-page.component';
import { NbpTextareaPageComponent } from './pages/composants/nbp-textarea-page/nbp-textarea-page.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'composants', component: ComposantsComponent,
    children: [
      { path: 'textarea', component: NbpTextareaPageComponent },
      { path: 'input-text', component: NbpInputTextPageComponent },
      { path: 'dividing-line', component: NbpDividingLinePageComponent },
      { path: 'feedback', component: NbpFeedbackPageComponent },
      { path: 'background-box', component: NbpBackgroundBoxPageComponent },
      { path: 'button', component: NbpButtonPageComponent },
      { path: 'alert-box', component: NbpAlertBoxPageComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
