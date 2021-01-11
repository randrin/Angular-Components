import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-alert-box-one',
  templateUrl: './nbp-alert-box-one.component.html',
  styleUrls: ['./nbp-alert-box-one.component.scss'],
})
export class NbpAlertBoxOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpText: string;
  @Input() nbpClose: boolean;
  @Input() nbpAlertType: string;

  @Output() nbpClickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  nbpAlertBoxType: string;
  nbpAlertBoxIcon: string;
  nbpAlertBoxBackground: string;

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpAlertBoxType = this.nbpGetBorderColorClasse(this.nbpAlertType);
    this.nbpAlertBoxBackground = this.nbpGetBackgroundClasse(this.nbpAlertType);
    this.nbpAlertBoxIcon = this.nbpGetIconClasse(this.nbpAlertType);
  }

  nbpOnClickClose() {
    this.nbpClickClose.emit(true);
  }
}
