import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Components';
  nbpTitle = 'Dividing Line Composant'; 
  nbpTitleCta = {
    title: 'Dividing Line Composant with Cta',
    cta: 'Edit Profil'
  }; 
}