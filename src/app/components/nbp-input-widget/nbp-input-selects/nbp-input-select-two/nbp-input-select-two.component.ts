import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "../../../nbp-base-component/nbp-base.component";
import * as uuid from "uuid";

@Component({
  selector: "nbp-input-select-two",
  templateUrl: "./nbp-input-select-two.component.html",
  styleUrls: ["./nbp-input-select-two.component.scss"],
})
export class NbpInputSelectTwoComponent
  extends NbpBaseComponent
  implements OnInit {
  @Input() nbpDropDownListItems: Array<object>;
  @Input() nbpDropDownListSelectedItems: Array<object> = [];
  @Input() nbpDropDownListLabel: string;
  @Input() nbpDropDownListLabelRequired: boolean;
  @Input() nbpDropDownListBorderType: string;
  @Input() nbpDropDownListName: string;
  @Input() nbpDropDownListMinDate: string;
  @Input() nbpDropDownListMaxDate: string;
  @Input() nbpDropDownListItemsShowLimit: number = 3;
  @Input() nbpDropDownListIcon: string;
  @Input() nbpDropDownListIconRequired: boolean;
  @Input() nbpDropDownListPlaceholder: string;
  @Input() nbpDropDownListErrorMessage: string;
  @Input() nbpDropDownListRequired: boolean;
  @Input() nbpDropDownListDisabled: boolean;
  @Input() nbpDropDownListFilterItems: boolean;
  @Input() nbpDropDownListSingleSelection: boolean;
  @Input() nbpDropDownListEnableCheckAll: boolean;

  @Output()
  nbpDropDownListModel: EventEmitter<object> = new EventEmitter<object>();

  nbpDropDownList: string;
  nbpDropDownListSettings = {};
  nbpDropDownListId: string;
  nbpErrorBorder: string = "";
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;

  constructor(injector: Injector) {
    super(injector);
  }

  selectedItems = [];

  ngOnInit(): void {
    this.nbpSetUpComponent();

    this.nbpDropDownListSettings = {
      singleSelection: this.nbpDropDownListSingleSelection,
      enableCheckAll: this.nbpDropDownListEnableCheckAll,
      defaultOpen: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: this.nbpDropDownListItemsShowLimit,
      allowSearchFilter: this.nbpDropDownListFilterItems
    };

  }

  // Functions
  nbpSetUpComponent() {
    this.nbpDropDownListId = "nbp-" + uuid.v4();
    this.nbpBorderType = this.nbpGetTypeInputText(
      this.nbpDropDownListBorderType
    );
    this.nbpGetClasses();
  }

  nbpGetTypeInputText(nbpInput) {
    if (nbpInput === this._style.ROUNDED) {
      return this.nbpTypeInput.ROUNDED;
    }
  }

  nbpGetClasses() {
    this.nbpDropDownList =
      this.nbpBorderType +
      this.nbpSeparator +
      this.nbpErrorBorder +
      this.nbpSeparator +
      (this.nbpDropDownListDisabled
        ? "nbp-background-sliver nbp-cursor-not-allowed"
        : "");
    this.nbpDropDownListModel.emit({
      value: this.nbpDropDownListSelectedItems,
      name: this.nbpDropDownListName,
    });
  }

  nbpInputFocusOut() {
    if (this.nbpDropDownListRequired) {
      this.nbpErrorMessage =
        this.nbpDropDownListSelectedItems === undefined || this.nbpDropDownListSelectedItems.length === 0
          ? true
          : false;
      this.nbpErrorBorder =
        this.nbpDropDownListSelectedItems === undefined || this.nbpDropDownListSelectedItems.length === 0
          ? this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR)
          : "";
      this.nbpGetClasses();
    }
  }

  nbpOnItemSelect(item: any) {
    this.nbpDropDownListSelectedItems.filter(element => element !== item.item_id)
  }
  
  nbpOnSelectAll(items: []) {
    items.forEach(element => {
      this.nbpDropDownListSelectedItems.push(element);
    });
  }
}
