import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "../nbp-base-component/nbp-base.component";
import * as uuid from "uuid";

@Component({
  selector: "nbp-nbp-dropdown-list",
  templateUrl: "./nbp-dropdown-list.component.html",
  styleUrls: ["./nbp-dropdown-list.component.scss"],
})
export class NbpDropdownListComponent
  extends NbpBaseComponent
  implements OnInit {
  @Input() nbpDropDownListLItems: Array<object>;
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
    this.nbpDropDownListId = "nbp" + uuid.v4();
    this.nbpBorderType = this.nbpGetTypeInputText(this.nbpDropDownListBorderType);
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
    console.log(this.nbpModel);
    this.nbpDropDownList =
      this.nbpBorderType + this.nbpSeparator + this.nbpErrorBorder + this.nbpSeparator + (this.nbpDropDownListDisabled ? "nbp-background-sliver nbp-cursor-not-allowed" : "");
    this.nbpDropDownListModel.emit({
      value: this.nbpModel,
      name: this.nbpDropDownListName,
    });
  }

  nbpInputFocusOut() {
    console.log("this.nbpModel.length: ", this.nbpModel);
    console.log(this.nbpModel);
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

  onChange(event) {
    console.log("NbpDropdownListComponent: ", event);
    this.nbpModel = event;
    this.nbpInputFocusOut();
  }
}
