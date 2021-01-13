import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-box-one",
  templateUrl: "./nbp-box-one.component.html",
  styleUrls: ["./nbp-box-one.component.scss"],
})
export class NbpBoxOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpBoxTitle: string;
  @Input() nbpBoxDescription: string;
  @Input() nbpBoxDescriptionTruncate: number;
  @Input() nbpBoxCta: string;
  @Input() nbpBoxTitleCta: string;
  @Input() nbpBoxTypeCta: string;
  @Input() nbpBoxCtaRedirection: string;
  @Input() nbpBoxCtaTarget: boolean;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    // Default truncate description at 50
    this.nbpBoxDescriptionTruncate =
      this.nbpBoxDescriptionTruncate === undefined
        ? 50
        : this.nbpBoxDescriptionTruncate;
  }

  getNbpBoxDescription() {
    return this.nbpBoxDescription.length > this.nbpBoxDescriptionTruncate
      ? this.nbpBoxDescription.substr(0, this.nbpBoxDescriptionTruncate) +
          " ..."
      : this.nbpBoxDescription;
  }
}
