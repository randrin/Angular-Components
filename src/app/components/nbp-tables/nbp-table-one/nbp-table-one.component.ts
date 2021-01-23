import { Component, Injector, Input, OnInit } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';

@Component({
  selector: 'nbp-table-one',
  templateUrl: './nbp-table-one.component.html',
  styleUrls: ['./nbp-table-one.component.scss']
})
export class NbpTableOneComponent extends NbpBaseComponent implements OnInit {

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
    this.nbpDtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      language: {
        searchPlaceholder: "Seach element",
        emptyTable: "Empty data :)",
        paginate: {
          first: "<i class='fa fa-angle-double-left'></i> First",
          last: "Last <i class='fa fa-angle-double-right'></i>",
          next: "<i class='fa fa-angle-right'></i>",
          previous: "<i class='fa fa-angle-left'></i>",
        }
      },
    };
    this.nbpTextAlign = this.nbpGetTextAlignClasse(this.nbpTableTextAlignItem);
  }
}
