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
    NbpTextareaComponent
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
