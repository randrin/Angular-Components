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
  title3 = 'Badges Outline with icon';
  title4 = 'Badges Outline without icon';

  _style = NbpStyle;
  _model = new Model();

  nbpBadges = [
    { name: 'Default Badge', icon: '', style: this._style.DEFAULT, type: this._style.OUTLINE },
    { name: 'Default Badge Icon', icon: 'nbp-icon-align-right', style: this._style.DEFAULT, type: this._style.OUTLINE },
    { name: 'Primary Badge', icon: '', style: this._style.PRIMARY, type: this._style.OUTLINE },
    { name: 'Primary Badge Icon', icon: 'nbp-icon-align-left', style: this._style.PRIMARY, type: this._style.OUTLINE },
    { name: 'Warning Badge', icon: '', style: this._style.WARNING, type: this._style.OUTLINE },
    { name: 'Warning Badge Icon', icon: 'nbp-icon-align-justify', style: this._style.WARNING, type: this._style.OUTLINE },
    { name: 'Success Badge', icon: '', style: this._style.SUCCESS, type: this._style.OUTLINE },
    { name: 'Success Badge Icon', icon: 'nbp-icon-user', style: this._style.SUCCESS, type: this._style.OUTLINE },
    { name: 'Black Badge', icon: '', style: this._style.BLACK, type: this._style.OUTLINE },
    { name: 'Black Badge Icon', icon: 'nbp-icon-baby', style: this._style.BLACK, type: this._style.OUTLINE },
    { name: 'Tomato Badge', icon: '', style: this._style.TOMATO, type: this._style.OUTLINE },
    { name: 'Tomato Badge Icon', icon: 'nbp-icon-angry', style: this._style.TOMATO, type: this._style.OUTLINE },
    { name: 'Danger Badge', icon: '', style: this._style.DANGER, type: this._style.OUTLINE },
    { name: 'Danger Badge Icon', icon: 'nbp-icon-archive', style: this._style.DANGER, type: this._style.OUTLINE },
    { name: 'Warm Gray Badge', icon: '', style: this._style.SLIVER, type: this._style.OUTLINE },
    { name: 'Warm Gray Badge Icon', icon: 'nbp-icon-adjust', style: this._style.SLIVER, type: this._style.OUTLINE },
    { name: 'Info Badge', icon: '', style: this._style.INFO, type: this._style.OUTLINE },
    { name: 'Info Badge Icon', icon: 'nbp-icon-american-sign-language-interpreting', style: this._style.INFO, type: this._style.OUTLINE },
    { name: 'Night Rider Badge', icon: '', style: this._style.NIGHT_RIDER, type: this._style.OUTLINE },
    { name: 'Night Rider Badge Icon', icon: 'nbp-icon-ambulance', style: this._style.NIGHT_RIDER, type: this._style.OUTLINE },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
