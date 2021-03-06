import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { NbpBaseComponent } from "../../../nbp-base-component/nbp-base.component";
import * as uuid from "uuid";

@Component({
  selector: "nbp-input-date-two",
  templateUrl: "./nbp-input-date-two.component.html",
  styleUrls: ["./nbp-input-date-two.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NbpInputDateTwoComponent
  extends NbpBaseComponent
  implements OnInit {
  @Input() nbpDatePickerLabel: string;
  @Input() nbpDatePickerValue: string;
  @Input() nbpDatePickerLabelRequired: boolean;
  @Input() nbpDatePickerBorderType: string;
  @Input() nbpDatePickerName: string;
  @Input() nbpDatePickerMinDate: string;
  @Input() nbpDatePickerMaxDate: string;
  @Input() nbpDatePickerIcon: string;
  @Input() nbpDatePickerIconRequired: boolean;
  @Input() nbpDatePickerPlaceholder: string;
  @Input() nbpDatePickerErrorMessage: string;
  @Input() nbpDatePickerRequired: boolean;
  @Input() nbpDatePickerDisabled: boolean;

  @Output()
  nbpDatePickerModel: EventEmitter<object> = new EventEmitter<object>();

  nbpModel: string = "";
  nbpDatePicker: string;
  nbpDatePickerId: string;
  nbpErrorBorder: string = "";
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;

  singleDate: Date;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpDatePickerId = "nbp-" + uuid.v4();
    this.nbpBorderType = this.nbpGetTypeInputText(this.nbpDatePickerBorderType);
    this.nbpModel =
      this.nbpDatePickerValue === undefined ? "" : this.nbpDatePickerValue;
    this.nbpGetClasses();
    this.singleDate = new Date("10/10/1988");
    this.nbpModel = this.singleDate.toDateString();
  }

  nbpGetTypeInputText(nbpInput) {
    if (nbpInput === this._style.ROUNDED) {
      return this.nbpTypeInput.ROUNDED;
    }
  }

  nbpGetClasses() {
    console.log(this.nbpModel);
    this.nbpDatePicker =
      this.nbpBorderType +
      this.nbpSeparator +
      this.nbpErrorBorder +
      this.nbpSeparator +
      (this.nbpDatePickerDisabled
        ? "nbp-background-sliver nbp-cursor-not-allowed"
        : "");
    this.nbpDatePickerModel.emit({
      value: this.nbpModel,
      name: this.nbpDatePickerName,
    });
  }

  onChangeSingle(value: Date) {
    this.singleDate = value;
    console.log(this.singleDate);
  }

  nbpInputFocusOut() {
    console.log("this.nbpModel.length: ", this.nbpModel);
    console.log(this.nbpModel);
    if (this.nbpDatePickerRequired) {
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

  nbpInputKeyUp() {
    console.log("nbpInputFocusOut");
  }

  nbpInputBlur() {
    console.log("nbpInputBlur");
  }

  nbpInputFocus() {}
}
