import { Component, OnInit, Injector } from '@angular/core';
import { NbpBaseComponent } from 'src/app/components/nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-badge-page',
  templateUrl: './nbp-badge-page.component.html',
  styleUrls: ['./nbp-badge-page.component.scss']
})
export class NbpBadgePageComponent extends NbpBaseComponent implements OnInit {

  title1 = 'Badges Border Style with icon';
  title2 = 'Badges Border Style without icon';
  title3 = 'Badges Border Outline with icon';
  title4 = 'Badges Border Outline without icon';
  title5 = 'Badges Style with icon';
  title6 = 'Badges Style without icon';
  title7 = 'Badges Outline with icon';
  title8 = 'Badges Outline without icon';


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

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
