import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "../../../nbp-base-component/nbp-base.component";


@Component({
  selector: "nbp-input-textarea-one",
  templateUrl: "./nbp-input-textarea-one.component.html",
  styleUrls: ["./nbp-input-textarea-one.component.scss"],
})
export class NbpInputTextareaOneComponent extends NbpBaseComponent implements OnInit {
  @Input() nbpTextareaLabel: string;
  @Input() nbpTextareaLabelRequired: boolean;
  @Input() nbpTextareaValue: string;
  @Input() nbpTextareaName: string;
  @Input() nbpTextareaRequired: boolean;
  @Input() nbpTextareaRows: number;
  @Input() nbpTextareaPlaceholder: string;
  @Input() nbpTextareaErrorMessage: string;
  @Input() nbpTextareaErrorLengthMaxSup: string;
  @Input() nbpTextareaDisabled: boolean;
  @Input() nbpTextareaMaxLength: number;

  @Output() nbpTextareaModel: EventEmitter<object> = new EventEmitter<object>();

  nbpBorderType: string;
  nbpErrorMessage: boolean = false;
  nbpErrorMessageMaxLength: boolean = false;
  nbpErrorLength: boolean = false;
  nbpErrorBorder: string = "";
  nbpModel: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpTextareaRows =
      this.nbpTextareaRows === 0 || this.nbpTextareaRows === undefined
        ? this.nbpTextareaDefault.rows
        : this.nbpTextareaRows;
    // this.nbpTextareaRequired = this.nbpTextareaDisabled ? false : true;
    this.nbpModel = this.nbpTextareaValue === undefined ?  "" : this.nbpTextareaValue;
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpTextarea =
      this.nbpBorderType +
      this.nbpSeparator +
      this.nbpErrorBorder +
      this.nbpSeparator +
      (this.nbpTextareaDisabled ? this.nbpTypeInput.CURSOR : "");
  //  this.nbpTextareaModel.emit(this.nbpModel);
    this.nbpTextareaModel.emit({value: this.nbpModel, name: this.nbpTextareaName});
  }

  nbpTextareaKeyDown() {
    if (this.nbpTextareaRequired) {
      this.nbpErrorBorder =
        this.nbpModel.length === -1
          ? this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR)
          : "";
      this.nbpErrorMessageMaxLength =
        this.nbpModel.length >= this.nbpTextareaMaxLength ? true : false;
      this.nbpErrorMessage = this.nbpModel.length === -1 ? true : false;
      this.nbpGetClasses();
    }
    if (this.nbpModel.length >= this.nbpTextareaMaxLength) {
      this.nbpErrorBorder = this.nbpGetBorderClasse(
        this._alertType.ERROR,
        this._type.COLOR
      );
      this.nbpGetClasses();
    }
    this.nbpModel.length >= 0
      ? (this.nbpErrorLength = true)
      : (this.nbpErrorLength = false);
  }

  nbpTextareaFocusOut() {
    if (this.nbpTextareaRequired) {
      this.nbpErrorMessageMaxLength = false;
      this.nbpErrorMessage = this.nbpModel.length === 0 ? true : false;
      this.nbpErrorBorder =
        this.nbpModel.length === 0 ||
        this.nbpModel.length > this.nbpTextareaMaxLength
          ? this.nbpGetBorderClasse(this._alertType.ERROR, this._type.COLOR)
          : "";
      this.nbpGetClasses();
    }
  }

  nbpGetCountWord() {
    return this.nbpModel.length < this.nbpTextareaMaxLength
      ? this.nbpModel.length
      : this.nbpTextareaMaxLength;
  }

  nbpTextareaKeyUp(event) {
    if (event.keyCode === 8) {
      // event.keyCode === 8 means clean back touch in the keyboard
      if (this.nbpModel.length === this.nbpTextareaMaxLength - 1) {
        this.nbpErrorMessageMaxLength = false;
        this.nbpTextarea = "";
      }
    }
  }
}
