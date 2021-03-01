import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
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
  @Input() nbpTableShowActions: boolean;

  @Output() nbpTableActions: EventEmitter<object> = new EventEmitter<object>();
  
  nbpDtOptions: DataTables.Settings = {};
  nbpTextAlign: string;
  nbpTableItem: object = {item: "", action: ""};
  
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
      pagingType: "full_numbers",
      responsive: true,
      language: {
        searchPlaceholder: "Seach element",
        emptyTable: "Empty data :)",
        paginate: {
          first: "<i class='fa fa-angle-double-left'></i> First",
          last: "Last <i class='fa fa-angle-double-right'></i>",
          next: "<i class='fa fa-angle-right'></i>",
          previous: "<i class='fa fa-angle-left'></i>",
        },
      },
    };
    this.nbpTextAlign = this.nbpGetTextAlignClasse(this.nbpTableTextAlignItem);
  }

  nbpObjectKeys(obj) {
    return Object.keys(obj).filter(element => element !== "permissions");
  }

  nbpOnValidateAction() {
    this.nbpTableActions.emit(this.nbpTableItem);
  }
}
