import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-alert-box-one',
  templateUrl: './nbp-alert-box-one.component.html',
  styleUrls: ['./nbp-alert-box-one.component.scss'],
})
export class NbpAlertBoxOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpAlertText: string;
  @Input() nbpClose: boolean;
  @Input() nbpAlertType: string;

  @Output() nbpClickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpAlertBoxType = this.nbpGetBorderClasse(this.nbpAlertType, this._type.COLOR);
    this.nbpAlertBoxBackground = this.nbpGetBackgroundClasse(this.nbpAlertType);
    this.nbpAlertBoxIcon = this.nbpGetIconClasse(this.nbpAlertType);
  }

  nbpOnClickClose() {
    this.nbpClickClose.emit(true);
  }
}
