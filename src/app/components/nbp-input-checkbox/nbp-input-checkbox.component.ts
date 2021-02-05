import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-input-checkbox',
  templateUrl: './nbp-input-checkbox.component.html',
  styleUrls: ['./nbp-input-checkbox.component.scss']
})
export class NbpInputCheckboxComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpCheckBoxLabel: string;
  @Input() nbpCheckBoxName: string;
  @Input() nbpCheckBoxStyle: string;
  @Input() nbpCheckBoxDisabled: boolean;
  @Input() nbpCheckBoxChecked: boolean;

  @Output() nbpCheckBoxModel: EventEmitter<boolean> = new EventEmitter<boolean>();

  nbpCheckBoxOutput: boolean;
  nbpCheckBoxInput: string;
  nbpCheckBox: string;
  nbpCheckBoxIcon: string;
  nbpCheckBoxOpacity: string;
  nbpCheckBoxCursor: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpCheckBox = this.nbpGetCheckBoxStyleClasse(this.nbpCheckBoxStyle);
    this.nbpCheckBoxIcon = (this.nbpCheckBoxChecked === false || this.nbpCheckBoxChecked === undefined) ? this._displayClasse.NONE : '';
    this.nbpCheckBoxOpacity = this.nbpCheckBoxDisabled === true ? this._opacityClasse.OPACITY_02 : '';
    this.nbpCheckBoxCursor = this.nbpCheckBoxDisabled === true ? this._cursorClasse.NONE : '';
    this.nbpCheckBoxInput = this.nbpCheckBoxOpacity + this.nbpSeparator + this.nbpCheckBoxCursor;
  }

  nbpCheckBoxClick(event) {
    console.log('nbpCheckBoxClick: ', event)
    this.nbpCheckBoxModel.emit(this.nbpCheckBoxOutput);
  }
}
