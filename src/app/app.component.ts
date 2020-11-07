import { Component } from '@angular/core';
import { NbpStyle } from '../assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  _style = NbpStyle;
  
  title = 'Angular Components';
  nbpTitle = 'Dividing Line Composant'; 
  nbpTitleCta = {
    title: 'Dividing Line Composant with Cta',
    cta: 'Edit Profil'
  }; 
  nbpTitleCtaReadOnly = {
    title: 'Dividing Line Composant with Cta read only',
    cta: 'My Profil'
  };
}