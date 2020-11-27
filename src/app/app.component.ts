import { Component } from '@angular/core';
import { NbpAlertType, NbpFontSize, NbpPipe, NbpSize, NbpStyle } from '../assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  _style = NbpStyle;
  _fontSize = NbpFontSize;
  _pipe = NbpPipe;
  _size = NbpSize;
  _alert = NbpAlertType;

  nbpShowPrimaryButtons: boolean;
  nbpAlertClose: boolean;

  title = 'Angular Components';

  component = {
    NbpButtonComponent: {
      label: 'Button',
      cta: 'My Profil'
    },
    NbpDividingLineComponent: {
      nbpTitle: 'Dividing Line Composant',
      nbpTitleCtaReadOnly: {
        title: 'Dividing Line Composant with Cta read only',
        cta: {
          show: 'My Profil',
          hide: 'Edit Profil'
        }
      },
      nbpTitleCta: {
        title: 'Dividing Line Composant with Cta',
        cta: 'Edit Profil'
      }
    },
    NbpBackgroundBoxComponent: {
      title: 'Background Box Title',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    NbpAlertBoxComponent: {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }
  }


  nbpOnClickCta(event) {
    console.log('{nbpOnClickCta}: ', event);
    this.nbpShowPrimaryButtons = event;
  }

  nbpOnClickClose(event) {
    console.log('{nbpOnClickClose}: ', this.nbpAlertClose);
    this.nbpAlertClose = event;
  }
}