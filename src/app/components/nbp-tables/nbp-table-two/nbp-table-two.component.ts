import { Component, Injector, Input, OnInit } from '@angular/core';
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
    this.nbpTextAlign = this.nbpGetTextAlignClasse(this.nbpTableTextAlignItem);
  }

}
