import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbpDividingLineComponent } from './components/nbp-dividing-line/nbp-dividing-line.component';
import { NbpBackgroundBoxComponent } from './components/nbp-background-box/nbp-background-box.component';
import { NbpButtonComponent } from './components/nbp-button/nbp-button.component';
import { NbpAlertBoxComponent } from './components/nbp-alert-box/nbp-alert-box.component';
import { NbpScrollTopComponent } from './components/nbp-scroll-top/nbp-scroll-top.component';
import { NbpFeedbackComponent } from './components/nbp-feedback/nbp-feedback.component';
import { NbpInputTextComponent } from './components/nbp-input-text/nbp-input-text.component';
import { FormsModule } from '@angular/forms';
import { NbpTextareaComponent } from './components/nbp-textarea/nbp-textarea.component';
import { HomeComponent } from './pages/home/home.component';
import { ComposantsComponent } from './pages/composants/composants.component';
import { NbpTextareaPageComponent } from './pages/composants/nbp-textarea-page/nbp-textarea-page.component';
import { NbpInputTextPageComponent } from './pages/composants/nbp-input-text-page/nbp-input-text-page.component';
import { NbpAlertBoxPageComponent } from './pages/composants/nbp-alert-box-page/nbp-alert-box-page.component';
import { NbpBackgroundBoxPageComponent } from './pages/composants/nbp-background-box-page/nbp-background-box-page.component';
import { NbpButtonPageComponent } from './pages/composants/nbp-button-page/nbp-button-page.component';
import { NbpDividingLinePageComponent } from './pages/composants/nbp-dividing-line-page/nbp-dividing-line-page.component';
import { NbpFeedbackPageComponent } from './pages/composants/nbp-feedback-page/nbp-feedback-page.component';
import { NbpHeaderOneComponent } from './components/nbp-header-one/nbp-header-one.component';
import { NbpFooterOneComponent } from './components/nbp-footer-one/nbp-footer-one.component';
import { NbpNavbarComponent } from './components/nbp-navbar/nbp-navbar.component';
import { NbpBreadcrumbComponent } from './components/nbp-breadcrumb/nbp-breadcrumb.component';
import { NbpHeaderPageComponent } from './pages/composants/nbp-header-page/nbp-header-page.component';
import { NbpCheckboxComponent } from './components/nbp-checkbox/nbp-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NbpDividingLineComponent,
    NbpBackgroundBoxComponent,
    NbpButtonComponent,
    NbpAlertBoxComponent,
    NbpScrollTopComponent,
    NbpFeedbackComponent,
    NbpInputTextComponent,
    NbpTextareaComponent,
    HomeComponent,
    ComposantsComponent,
    NbpTextareaPageComponent,
    NbpInputTextPageComponent,
    NbpAlertBoxPageComponent,
    NbpBackgroundBoxPageComponent,
    NbpButtonPageComponent,
    NbpDividingLinePageComponent,
    NbpFeedbackPageComponent,
    NbpHeaderOneComponent,
    NbpFooterOneComponent,
    NbpNavbarComponent,
    NbpBreadcrumbComponent,
    NbpHeaderPageComponent,
    NbpCheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
