import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbpDividingLineComponent } from './components/nbp-dividing-line/nbp-dividing-line.component';
import { NbpBackgroundBoxComponent } from './components/nbp-background-box/nbp-background-box.component';
import { NbpButtonComponent } from './components/nbp-button/nbp-button.component';
import { NbpAlertBoxComponent } from './components/nbp-alert-box/nbp-alert-box.component';
import { NbpScrollTopComponent } from './components/nbp-scroll-top/nbp-scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NbpDividingLineComponent,
    NbpBackgroundBoxComponent,
    NbpButtonComponent,
    NbpAlertBoxComponent,
    NbpScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
