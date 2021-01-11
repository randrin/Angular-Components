import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-badge-page',
  templateUrl: './nbp-badge-page.component.html',
  styleUrls: ['./nbp-badge-page.component.scss']
})
export class NbpBadgePageComponent implements OnInit {

  title1 = 'Badges Style with icon';
  title2 = 'Badges Style without icon';

  _style = NbpStyle;
  _model = new Model();

  nbpBadges = [
    { name: 'Default Badge', icon: '', style: this._style.DEFAULT },
    { name: 'Default Badge Icon', icon: 'nbp-icon-align-right', style: this._style.DEFAULT },
    { name: 'Primary Badge', icon: '', style: this._style.PRIMARY },
    { name: 'Primary Badge Icon', icon: 'nbp-icon-align-left', style: this._style.PRIMARY },
    { name: 'Warning Badge', icon: '', style: this._style.WARNING },
    { name: 'Warning Badge Icon', icon: 'nbp-icon-align-justify', style: this._style.WARNING },
    { name: 'Success Badge', icon: '', style: this._style.SUCCESS },
    { name: 'Success Badge Icon', icon: 'nbp-icon-user', style: this._style.SUCCESS },
    { name: 'Black Badge', icon: '', style: this._style.BLACK },
    { name: 'Black Badge Icon', icon: 'nbp-icon-baby', style: this._style.BLACK },
    { name: 'Tomato Badge', icon: '', style: this._style.TOMATO },
    { name: 'Tomato Badge Icon', icon: 'nbp-icon-angry', style: this._style.TOMATO },
    { name: 'Danger Badge', icon: '', style: this._style.DANGER },
    { name: 'Danger Badge Icon', icon: 'nbp-icon-archive', style: this._style.DANGER },
    { name: 'Warm Gray Badge', icon: '', style: this._style.SLIVER },
    { name: 'Warm Gray Badge Icon', icon: 'nbp-icon-adjust', style: this._style.SLIVER },
    { name: 'Info Badge', icon: '', style: this._style.INFO },
    { name: 'Info Badge Icon', icon: 'nbp-icon-american-sign-language-interpreting', style: this._style.INFO },
    { name: 'Night Rider Badge', icon: '', style: this._style.NIGHT_RIDER },
    { name: 'Night Rider Badge Icon', icon: 'nbp-icon-ambulance', style: this._style.NIGHT_RIDER },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
