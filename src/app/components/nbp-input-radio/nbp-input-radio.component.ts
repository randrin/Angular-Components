import { Component, EventEmitter, Injector, Input, OnInit, Output } from "@angular/core";
import { NbpBaseComponent } from "../nbp-base-component/nbp-base.component";
import * as uuid from "uuid";

@Component({
  selector: "nbp-input-radio",
  templateUrl: "./nbp-input-radio.component.html",
  styleUrls: ["./nbp-input-radio.component.scss"],
})
export class NbpInputRadioComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpRadioLabel: string;
  @Input() nbpRadioName: string;
  @Input() nbpRadioStyle: string;
  @Input() nbpRadioDisabled: boolean;
  @Input() nbpRadioValue: string;

  @Output()
  nbpRadioOutput: EventEmitter<string> = new EventEmitter<string>();

  nbpRadioModel: string;
  nbpRadio: string;
  nbpRadioInput: string;
  nbpInputRadioId: string;
  nbpRadioBackground: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpInputRadioId = "nbp-" + uuid.v4();
    this.nbpRadio = this.nbpGetRadioStyleClasse(this.nbpRadioStyle);
    this.nbpRadioInput = this.nbpGetRadioBorderClasse(this.nbpRadioStyle);
    this.nbpRadioBackground = this.nbpGetBackgroundClasse(this.nbpRadioStyle);
  }

  nbpRadioClick(event) {
    console.log("nbpRadioClick: ", event);
    this.nbpRadioOutput.emit(this.nbpRadioModel);
  }
}
