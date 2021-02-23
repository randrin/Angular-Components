import { Component, EventEmitter, Injector, Input, OnInit, Output } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";
import * as uuid from 'uuid';

@Component({
  selector: "nbp-table-one",
  templateUrl: "./nbp-table-one.component.html",
  styleUrls: ["./nbp-table-one.component.scss", '../../nbp-modal/nbp-modal-one/nbp-modal-one.component.scss'],
})
export class NbpTableOneComponent extends NbpBaseComponent implements OnInit {
  @Input() nbpTableHeaders: Array<any> = [];
  @Input() nbpTableBodies: Array<any> = [];
  @Input() nbpTableTextAlignItem: string;
  @Input() nbpTableShowActions: boolean;

  @Output() nbpTableActions: EventEmitter<object> = new EventEmitter<object>();

  nbpDtOptions: DataTables.Settings = {};
  nbpTextAlign: string;
  modalName: string;
  nbpModalStatic: string = 'static';
  nbpTableItem: object = {item: "", action: ""};
  nbpTableTextHeader: string = "";
  nbpTableTextBody: string = "";

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    console.log("nbpTableHeaders: ", this.nbpTableHeaders);
    const obj = this.nbpTableBodies[0];
  }

  // Functions
  nbpSetUpComponent() {
    this.modalName = 'nbp' + uuid.v4();
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
    return Object.keys(obj);
  }

  nbpOnClickAction(item, action) {
    this.nbpTableItem = {
      item,
      action
    };
    if (action === 'delete') {
      this.nbpBackground = this.nbpGetBackgroundClasse(this._style.DANGER);
      this.nbpTableTextHeader = "Delete Confirmation"
      this.nbpTableTextBody = "Are you sure you want to delete " + item.userName + " ?"
    }
    if (action === 'permission') {
      this.nbpBackground = this.nbpGetBackgroundClasse(this._style.PRIMARY);
      this.nbpTableTextHeader = "Permission Confirmation"
      this.nbpTableTextBody = "Are you sure you want to activate / disabled " + item.userName + " ?"
    }
  }

  nbpOnValidateAction() {
    this.nbpTableActions.emit(this.nbpTableItem);
  }
}
