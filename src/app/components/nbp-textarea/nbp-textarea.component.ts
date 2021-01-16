import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "nbp-textarea",
  templateUrl: "./nbp-textarea.component.html",
  styleUrls: ["./nbp-textarea.component.scss"],
})
export class NbpTextareaComponent implements OnInit {
  @Input() nbpTextareaLabel: string;
  @Input() nbpTextareaLabelRequired: boolean;
  @Input() nbpTextareaRequired: boolean;
  @Input() nbpTextareaRows: number;
  @Input() nbpTextareaPlaceholder: string;
  @Input() nbpTextareaErrorMessage: string;
  @Input() nbpTextareaErrorlunghezzaMaxSup: string;
  @Input() nbpTextareaDisabled: boolean;
  @Input() maxlength: number = 50;

  @Output() nbpTextareaModel: EventEmitter<string> = new EventEmitter<string>();

  nbpModel: string = "";
  nbpTextarea: string;
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;
  nbpErrorLung: boolean = false;
  nbpErrorBorder: string = "";
  nbpSeparator: string = " ";

  nbpTextareaDefault = {
    rows: 8,
  };

  nbpBorder = {
    GENERIC: "nbp-border-color-default",
    POSITIVE: "nbp-border-color-success",
    PROMOTIONAL: "nbp-border-color-info",
    WARNING: "nbp-border-color-warning",
    ERROR: "nbp-border-color-danger",
  };

  constructor() {}

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
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpTextarea =
      this.nbpBorderType + this.nbpSeparator + this.nbpErrorBorder;
    this.nbpTextareaModel.emit(this.nbpModel);
  }

  nbpTextareaKeyUp() {
    if (this.nbpTextareaRequired) {
      this.nbpErrorBorder =
        this.nbpModel.length === 0 ? this.nbpBorder.ERROR : "";
      this.nbpErrorMessage = this.nbpModel.length === 0 ? true : false;
      this.nbpGetClasses();
    }
    if (this.nbpModel.length > this.maxlength) {
      this.nbpErrorBorder = this.nbpBorder.ERROR;
      this.nbpGetClasses();
    }
    this.nbpModel.length > 0
      ? (this.nbpErrorLung = true)
      : (this.nbpErrorLung = false);
  }

  nbpTextareaFocusOut() {
    if (this.nbpTextareaRequired) {
      this.nbpErrorMessage = this.nbpModel.length === 0 ? true : false;
      this.nbpErrorBorder =
        this.nbpModel.length === 0 ? this.nbpBorder.ERROR : "";
      this.nbpGetClasses();
    }
  }

  get verifica() {
    return this.nbpModel.length > this.maxlength;
  }

  getCountWord() {
    return this.nbpModel.length > this.maxlength
      ? this.nbpModel.length - this.maxlength
      : this.nbpModel.length - this.maxlength;
  }
}
