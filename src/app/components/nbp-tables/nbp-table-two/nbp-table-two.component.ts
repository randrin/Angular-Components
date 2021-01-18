import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpTextAlignClasse } from 'src/assets/utils/nbp-commons/nbp-commons.classes';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-table-two',
  templateUrl: './nbp-table-two.component.html',
  styleUrls: ['./nbp-table-two.component.scss']
})
export class NbpTableTwoComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpTableHeaders: Array<any> = [];
  @Input() nbpTableBodies: Array<any> = [];
  @Input() nbpTableTextAlignItem: string;


  nbpDtOptions: DataTables.Settings = {};
  nbpTextAlign: string;
  
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    console.log('nbpTableHeaders: ', this.nbpTableHeaders)
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpTextAlign = this.nbpGetTextAlignStyle(this.nbpTableTextAlignItem);
  }

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
