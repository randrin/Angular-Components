import { Component, EventEmitter, Injector, Input, OnInit, Output } from "@angular/core";
import { NbpBaseComponent } from "../../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-input-textarea-two",
  templateUrl: "./nbp-input-textarea-two.component.html",
  styleUrls: ["./nbp-input-textarea-two.component.scss"],
  preserveWhitespaces: true
})
export class NbpInputTextareaTwoComponent
  extends NbpBaseComponent
  implements OnInit {
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

  content = "Hallo, this is some content for you to view";

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {}

  onContentChange(response) {
    console.log(response);
    this.content = response.html;
    }
}
