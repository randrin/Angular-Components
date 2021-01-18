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
  @Input() nbpCheckBoxChecked: boolean = false;

  @Output() nbpCheckBoxModel: EventEmitter<boolean> = new EventEmitter<boolean>();

  nbpModel: boolean;
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
    this.nbpCheckBox = this.nbpGetCheckBoxStyle(this.nbpCheckBoxStyle);
    this.nbpCheckBoxIcon = (this.nbpCheckBoxChecked == false || this.nbpCheckBoxChecked === undefined) ? this._displayClasse.NONE : '';
    this.nbpCheckBoxOpacity = this.nbpCheckBoxDisabled == true ? this._opacityClasse.OPACITY_02 : '';
    this.nbpCheckBoxCursor = this.nbpCheckBoxDisabled == true ? this._cursorClasse.NONE : '';
    this.nbpCheckBoxInput = this.nbpCheckBoxOpacity + this.nbpSeparator + this.nbpCheckBoxCursor;
  }

  nbpCheckBoxClick(event) {
    console.log('nbpCheckBoxClick: ', event)
    this.nbpCheckBoxModel.emit(this.nbpModel);
  }

  nbpGetCheckBoxStyle(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._checkBoxStyleClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._checkBoxStyleClasse.PRIMARY;
        break;
      case this._style.INFO:
        return this._checkBoxStyleClasse.INFO;
        break;
      case this._style.SUCCESS:
        return this._checkBoxStyleClasse.SUCCESS;
        break;
      case this._style.WARNING:
        return this._checkBoxStyleClasse.WARNING;
        break;
      case this._style.DANGER:
        return this._checkBoxStyleClasse.DANGER;
        break;
      default:
        return this._checkBoxStyleClasse.DEFAULT;
        break;
    }
  }
}
