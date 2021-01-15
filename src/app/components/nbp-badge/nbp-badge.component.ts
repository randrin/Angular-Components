import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-badge',
  templateUrl: './nbp-badge.component.html',
  styleUrls: ['./nbp-badge.component.scss']
})
export class NbpBadgeComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpBadgeName: string;
  @Input() nbpBadgeIcon: string;
  @Input() nbpBadgeStyle: string;
  @Input() nbpBadgeType: string;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    // Only the outline is accepted, otherwise nothing.
    this.nbpBadgeType = this.nbpBadgeType === this._style.OUTLINE ? this.nbpBadgeType : undefined;
    this.nbpBadge = this.nbpBadgeType === undefined ? this.nbpGetBadgeClasse(this.nbpBadgeStyle) : this.nbpGetBadgeOutlineClasse(this.nbpBadgeStyle);
  }
}
