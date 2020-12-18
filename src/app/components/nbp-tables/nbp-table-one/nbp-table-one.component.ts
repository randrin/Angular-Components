import { Component, Input, OnInit } from '@angular/core';
import { NbpTextAlignClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-table-one',
  templateUrl: './nbp-table-one.component.html',
  styleUrls: ['./nbp-table-one.component.scss']
})
export class NbpTableOneComponent implements OnInit {

  @Input() nbpTableHeaders: Array<any> = [];
  @Input() nbpTableBodies: Array<any> = [];
  @Input() nbpTableTextAlignItem: string;

  _style = NbpStyle;
  _textAlignClasse = NbpTextAlignClasse;

  nbpDtOptions: DataTables.Settings = {};
  nbpTextAlign: string;
  nbpSeparator: string = ' ';

  constructor() { }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    console.log('nbpTableHeaders: ', this.nbpTableHeaders)
  }

  nbpSetUpComponent() {
    this.nbpDtOptions = {
      pagingType: 'full_numbers',
    };
    this.nbpTextAlign = this.nbpGetTextAlignStyle(this.nbpTableTextAlignItem);
  }

  // Functions
  nbpGetTextAlignStyle(nbpInput) {
    switch (nbpInput) {
      case this._style.LEFT:
        return this._textAlignClasse.LEFT;
        break;
      case this._style.CENTER:
        return this._textAlignClasse.CENTER;
        break;
      case this._style.RIGHT:
        return this._textAlignClasse.RIGHT;
        break;
      default:
        return this._textAlignClasse.LEFT;
        break;
    }
  }
}
