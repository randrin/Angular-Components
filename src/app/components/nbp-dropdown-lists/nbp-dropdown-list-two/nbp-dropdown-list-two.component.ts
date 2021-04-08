import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";
import * as uuid from "uuid";

@Component({
  selector: "nbp-dropdown-list-two",
  templateUrl: "./nbp-dropdown-list-two.component.html",
  styleUrls: ["./nbp-dropdown-list-two.component.scss"],
})
export class NbpDropdownListTwoComponent
  extends NbpBaseComponent
  implements OnInit {
  @Input() nbpDropDownListItems: Array<object>;
  @Input() nbpDropDownListSelectedItems: Array<object>;
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

  nbpDropDownListModels: Array<object> = [];
  nbpDropDownListModelsClone: Array<object> = [];
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
    this.nbpDropDownListId = "nbp" + uuid.v4();
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
    console.log(this.nbpDropDownListModel);
    this.nbpDropDownList =
      this.nbpBorderType +
      this.nbpSeparator +
      this.nbpErrorBorder +
      this.nbpSeparator +
      (this.nbpDropDownListDisabled
        ? "nbp-background-sliver nbp-cursor-not-allowed"
        : "");
    this.nbpDropDownListModel.emit({
      value: this.nbpDropDownListModels,
      name: this.nbpDropDownListName,
    });
  }

  nbpInputFocusOut() {
    console.log("nbpInputFocusOut: ", this.nbpDropDownListModels);
    console.log(this.nbpDropDownListModels);
    if (this.nbpDropDownListRequired) {
      this.nbpErrorMessage =
        this.nbpDropDownListModels === undefined || this.nbpDropDownListModels.length === 0
          ? true
          : false;
      this.nbpErrorBorder =
        this.nbpDropDownListModels === undefined || this.nbpDropDownListModels.length === 0
          ? this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR)
          : "";
      this.nbpGetClasses();
    }
  }

  onItemSelect(item: any) {
    console.log("onItemSelect: ", item)
    this.nbpDropDownListModels.push(item);
  }
  
  onSelectAll(items: []) {
    items.forEach(element => {
      this.nbpDropDownListModels.push(element);
    });
    console.log("onSelectAll: ", this.nbpDropDownListModels);
  }

  nbpInputBlur() {
    console.log("nbpInputBlur: ")
  }

  nbpInputFocus() {
    console.log("nbpInputFocus: ")
  }
}
