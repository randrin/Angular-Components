import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import * as uuid from "uuid";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-dropdown-list-one",
  templateUrl: "./nbp-dropdown-list-one.component.html",
  styleUrls: ["./nbp-dropdown-list-one.component.scss"],
})
export class NbpDropdownListOneComponent
  extends NbpBaseComponent
  implements OnInit {
  @Input() nbpDropDownListItems: Array<object>;
  @Input() nbpDropDownListLabel: string;
  @Input() nbpDropDownListValue: string;
  @Input() nbpDropDownListLabelRequired: boolean;
  @Input() nbpDropDownListBorderType: string;
  @Input() nbpDropDownListName: string;
  @Input() nbpDropDownListMinDate: string;
  @Input() nbpDropDownListMaxDate: string;
  @Input() nbpDropDownListIcon: string;
  @Input() nbpDropDownListIconRequired: boolean;
  @Input() nbpDropDownListPlaceholder: string;
  @Input() nbpDropDownListErrorMessage: string;
  @Input() nbpDropDownListRequired: boolean;
  @Input() nbpDropDownListDisabled: boolean;
  @Input() nbpDropDownListFilterItems: boolean;

  @Output()
  nbpDropDownListModel: EventEmitter<object> = new EventEmitter<object>();

  nbpModel: string = "";
  nbpDropDownList: string;
  nbpDropDownListId: string;
  nbpErrorBorder: string = "";
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpDropDownListId = "nbp-" + uuid.v4();
    this.nbpBorderType = this.nbpGetTypeInputText(
      this.nbpDropDownListBorderType
    );
    this.nbpModel =
      this.nbpDropDownListValue === undefined ? "" : this.nbpDropDownListValue;
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
      value: this.nbpModel,
      name: this.nbpDropDownListName,
    });
  }

  nbpInputFocusOut() {
    if (this.nbpDropDownListRequired) {
      this.nbpErrorMessage =
        this.nbpModel === undefined || this.nbpModel.length === 0
          ? true
          : false;
      this.nbpErrorBorder =
        this.nbpModel === undefined || this.nbpModel.length === 0
          ? this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR)
          : "";
      this.nbpGetClasses();
    }
  }

  nbpOnChange(event) {
    this.nbpModel = event;
    this.nbpInputFocusOut();
  }
}
