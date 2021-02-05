import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-card-one",
  templateUrl: "./nbp-card-one.component.html",
  styleUrls: ["./nbp-card-one.component.scss"],
})
export class NbpCardOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpCardTitle: string;
  @Input() nbpCardDescription: string;
  @Input() nbpCardDescriptionTruncate: number;
  @Input() nbpCardCta: string;
  @Input() nbpCardTitleCta: string;
  @Input() nbpCardTypeCta: string;
  @Input() nbpCardCtaRedirection: string;
  @Input() nbpCardCtaTarget: boolean;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    // Default truncate description at 50
    this.nbpCardDescriptionTruncate =
      this.nbpCardDescriptionTruncate === undefined
        ? 50
        : this.nbpCardDescriptionTruncate;
  }

  getNbpCardDescription() {
    return this.nbpCardDescription.length > this.nbpCardDescriptionTruncate
      ? this.nbpCardDescription.substr(0, this.nbpCardDescriptionTruncate) +
          " ..."
      : this.nbpCardDescription;
  }
}
