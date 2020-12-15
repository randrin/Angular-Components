import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbpCheckBoxStyleClasse, NbpCursorClasse, NbpDisplayClasse, NbpOpacityClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-checkbox',
  templateUrl: './nbp-checkbox.component.html',
  styleUrls: ['./nbp-checkbox.component.scss']
})
export class NbpCheckboxComponent implements OnInit {

  @Input() nbpCheckBoxLabel: string;
  @Input() nbpCheckBoxName: string;
  @Input() nbpCheckBoxStyle: string;
  @Input() nbpCheckBoxDisabled: boolean;
  @Input() nbpCheckBoxChecked: boolean;

  @Output() nbpCheckBoxModel: EventEmitter<boolean> = new EventEmitter<boolean>();

  _style = NbpStyle;
  _checkBoxStyleClasse = NbpCheckBoxStyleClasse;
  _displayClasse = NbpDisplayClasse;
  _opacityClasse = NbpOpacityClasse;
  _cursorClasse = NbpCursorClasse;

  nbpModel: boolean;
  nbpCheckBoxInput: string;
  nbpSeparator: string = ' ';
  nbpCheckBox: string;
  nbpCheckBoxIcon: string;
  nbpCheckBoxOpacity: string;
  nbpCheckBoxCursor: string;

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpCheckBox = this.nbpGetCheckBoxStyle(this.nbpCheckBoxStyle);
    this.nbpCheckBoxIcon = (this.nbpCheckBoxChecked == false || this.nbpCheckBoxChecked === undefined) ? this._displayClasse.NONE : '';
    this.nbpCheckBoxOpacity = this.nbpCheckBoxDisabled == true ? this._opacityClasse.OPACITY_02 : '';
    this.nbpCheckBoxCursor = this.nbpCheckBoxDisabled == true ? this._cursorClasse.NONE : '';
    this.nbpCheckBoxInput = this.nbpCheckBoxOpacity + this.nbpSeparator + this.nbpCheckBoxCursor;
  }

  // Functions
  nbpCheckBoxClick() {
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
