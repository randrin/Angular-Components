import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbpCheckBoxStyleClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
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
  @Input() nbpCheckBoxDisabled: boolean = false;
  @Input() nbpCheckBoxChecked: boolean = false;

  @Output() nbpCheckBoxModel: EventEmitter<boolean> = new EventEmitter<boolean>();

  _style = NbpStyle;
  _checkBoxStyleClasse = NbpCheckBoxStyleClasse;

  nbpModel: boolean;
  nbpSeparator: string = ' ';
  nbpCheckBox: string;
  nbpCheckBoxIcon: string;
  nbpCheckBoxOpacity: string;

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpCheckBox = this.nbpGetCheckBoxStyle(this.nbpCheckBoxStyle);
    this.nbpCheckBoxIcon = this.nbpCheckBoxChecked == false ? 'nbp-display-none' : '';
    this.nbpCheckBoxOpacity = this.nbpCheckBoxDisabled == false ? 'nbp-opacity-02' : '';
  }

  // Functions

  nbpCheckBoxClick() {
    debugger
    // if(this.nbpModel === undefined) {
    //   this.nbpModel = true; // When clicking in first time
    // }
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
