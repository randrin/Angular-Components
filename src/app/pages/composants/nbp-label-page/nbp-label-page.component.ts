import { Component, Injector, OnInit } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-label-page',
  templateUrl: './nbp-label-page.component.html',
  styleUrls: ['./nbp-label-page.component.scss']
})
export class NbpLabelPageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Labels Border Style with icon';
  title2 = 'Labels Border Style without icon';
  title3 = 'Labels Border Outline with icon';
  title4 = 'Labels Border Outline without icon';
  title5 = 'Labels Style with icon';
  title6 = 'Labels Style without icon';
  title7 = 'Labels Outline with icon';
  title8 = 'Labels Outline without icon';

  nbpLabels = [
    { name: 'Default Label', icon: '', style: this._style.DEFAULT, type: this._style.OUTLINE },
    { name: 'Default Label Icon', icon: 'nbp-icon-align-right', style: this._style.DEFAULT, type: this._style.OUTLINE },
    { name: 'Primary Label', icon: '', style: this._style.PRIMARY, type: this._style.OUTLINE },
    { name: 'Primary Label Icon', icon: 'nbp-icon-align-left', style: this._style.PRIMARY, type: this._style.OUTLINE },
    { name: 'Warning Label', icon: '', style: this._style.WARNING, type: this._style.OUTLINE },
    { name: 'Warning Label Icon', icon: 'nbp-icon-align-justify', style: this._style.WARNING, type: this._style.OUTLINE },
    { name: 'Success Label', icon: '', style: this._style.SUCCESS, type: this._style.OUTLINE },
    { name: 'Success Label Icon', icon: 'nbp-icon-user', style: this._style.SUCCESS, type: this._style.OUTLINE },
    { name: 'Black Label', icon: '', style: this._style.BLACK, type: this._style.OUTLINE },
    { name: 'Black Label Icon', icon: 'nbp-icon-baby', style: this._style.BLACK, type: this._style.OUTLINE },
    { name: 'Tomato Label', icon: '', style: this._style.TOMATO, type: this._style.OUTLINE },
    { name: 'Tomato Label Icon', icon: 'nbp-icon-angry', style: this._style.TOMATO, type: this._style.OUTLINE },
    { name: 'Danger Label', icon: '', style: this._style.DANGER, type: this._style.OUTLINE },
    { name: 'Danger Label Icon', icon: 'nbp-icon-archive', style: this._style.DANGER, type: this._style.OUTLINE },
    { name: 'Warm Gray Label', icon: '', style: this._style.SLIVER, type: this._style.OUTLINE },
    { name: 'Warm Gray Label Icon', icon: 'nbp-icon-adjust', style: this._style.SLIVER, type: this._style.OUTLINE },
    { name: 'Info Label', icon: '', style: this._style.INFO, type: this._style.OUTLINE },
    { name: 'Info Label Icon', icon: 'nbp-icon-american-sign-language-interpreting', style: this._style.INFO, type: this._style.OUTLINE },
    { name: 'Night Rider Label', icon: '', style: this._style.NIGHT_RIDER, type: this._style.OUTLINE },
    { name: 'Night Rider Label Icon', icon: 'nbp-icon-ambulance', style: this._style.NIGHT_RIDER, type: this._style.OUTLINE },
  ];

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
