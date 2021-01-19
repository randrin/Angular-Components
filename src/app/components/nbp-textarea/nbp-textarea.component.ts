import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../nbp-base-component/nbp-base.component';

@Component({
  selector: "nbp-textarea",
  templateUrl: "./nbp-textarea.component.html",
  styleUrls: ["./nbp-textarea.component.scss"],
})
export class NbpTextareaComponent extends NbpBaseComponent implements OnInit {

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
  nbpErrorBorder: string = '';

  nbpTextareaDefault = {
    rows: 8
  }
  // nbpBorder = {
  //   GENERIC: 'nbp-border-color-default',
  //   POSITIVE: 'nbp-border-color-success',
  //   PROMOTIONAL: 'nbp-border-color-info',
  //   WARNING: 'nbp-border-color-warning',
  //   ERROR: 'nbp-border-color-danger'
  // }

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
    this.nbpTextareaRequired = this.nbpTextareaDisabled ? false : true;
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpTextarea =
      this.nbpBorderType + this.nbpSeparator + this.nbpErrorBorder;
    this.nbpTextareaModel.emit(this.nbpModel);
  }

  nbpTextareaKeyUp() {
    if (this.nbpTextareaRequired) {
      this.nbpErrorBorder = (this.nbpModel.length === 0) ? this.nbpGetBorderColorClasse(this._alertType.ERROR) : '';
      this.nbpErrorMessage = (this.nbpModel.length === 0) ? true : false;
      this.nbpGetClasses();
    }
    if(this.nbpModel.length > this.maxlength){
      this.nbpErrorBorder = this.nbpGetBorderColorClasse(this._alertType.ERROR);
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
        this.nbpModel.length === 0 || (this.nbpModel.length > this.maxlength) ? this.nbpGetBorderColorClasse(this._alertType.ERROR) : "";
      this.nbpGetClasses();
    }
  }

  get verified() {
    return this.nbpModel.length > this.maxlength;
  }

  nbpGetCountWord() {
    return this.nbpModel.length <= this.maxlength
      ? this.nbpModel.length
      : 0;
  }

  nbpTextareaKeyPress() {
    if (this.nbpModel.length > this.maxlength) {
      this.nbpModel = this.nbpModel.slice(0, this.maxlength);
    }
  }
}
