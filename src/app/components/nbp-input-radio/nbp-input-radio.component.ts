import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../nbp-base-component/nbp-base.component";

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
  @Input() nbpRadioChecked: boolean;

  nbpRadio: string;
  nbpRadioInput: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpRadio = this.nbpGetRadioStyleClasse(this.nbpRadioStyle);
  }

  nbpRadioClick(event) {
    console.log("nbpRadioClick: ", event);
  }
}
