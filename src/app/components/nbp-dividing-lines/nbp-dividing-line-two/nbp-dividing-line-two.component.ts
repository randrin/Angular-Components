import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-dividing-line-two",
  templateUrl: "./nbp-dividing-line-two.component.html",
  styleUrls: ["./nbp-dividing-line-two.component.scss"],
})
export class NbpDividingLineTwoComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpTitle: string;
  @Input() nbpUppercaseTitle: string;
  @Input() nbpColorStyle: string;

  constructor(injector: Injector) {
    super(injector);
  }

  nbpDividingLine: string;
  nbpDividingLineColorTitle: string;

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpDividingLineColorTitle =
      this.nbpGetColorClasse(this.nbpColorStyle) +
      this.nbpSeparator +
      this.nbpGetTextTransformClasse(this.nbpUppercaseTitle);
    this.nbpDividingLine =
      this.nbpGetColorClasse(this.nbpColorStyle) +
      this.nbpSeparator +
      this.nbpGetBorderColorClasse(this.nbpColorStyle);
  }
}
