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
  @Input() maxlength: number;

  @Output() nbpTextareaModel: EventEmitter<string> = new EventEmitter<string>();

  nbpModel: string = "";
  nbpTextarea: string;
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;
  nbpErrorLung: boolean = false;
  nbpErrorBorder: string = '';

  nbpTextareaDefault = {
    rows: 8,
  };

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

  nbpTextareaKeyDown() {
    if (this.nbpTextareaRequired) {
      this.nbpErrorBorder = (this.nbpModel.length === -1) ? this.nbpGetBorderClasse(this._alertType.ERROR, "color") : '';
      this.nbpErrorMessage = (this.nbpModel.length === -1) ? true : false;
      this.nbpGetClasses();
    }
    if(this.nbpModel.length >= this.maxlength){
      this.nbpErrorMessage= true;
      this.nbpErrorBorder = this.nbpGetBorderClasse(this._alertType.ERROR, "color");
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
        this.nbpModel.length === 0 || (this.nbpModel.length > this.maxlength) ? this.nbpGetBorderClasse(this._alertType.ERROR, "color") : "";
      this.nbpGetClasses();
    }
  }

  get verified() {
    return this.nbpModel.length > this.maxlength;
  }

  nbpGetCountWord() {
    return this.nbpModel.length < this.maxlength
      ? this.nbpModel.length
      : this.maxlength;
  }  
}
