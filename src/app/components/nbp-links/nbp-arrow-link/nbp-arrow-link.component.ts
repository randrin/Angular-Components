import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-arrow-link",
  templateUrl: "./nbp-arrow-link.component.html",
  styleUrls: ["./nbp-arrow-link.component.scss"],
})
export class NbpArrowLinkComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpArrowLinkName: string;
  @Input() nbpArrowLinkStyle: string;
  @Input() nbpArrowLinkTextTransform: string;
  @Input() nbpArrowLinkRedirection: string;
  @Input() nbpArrowLinkTarget: boolean;
  @Input() nbpArrowLinkPosition: string;


  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpColor = this.nbpGetColorClasse(this.nbpArrowLinkStyle);
    this.nbpTextTransform = this.nbpGetTextTransformClasse(
      this.nbpArrowLinkTextTransform
    );
    this.nbpArrowLinkPosition =
      this.nbpArrowLinkPosition === "" ||
        this.nbpArrowLinkPosition === undefined
        ? this._style.RIGHT
        : this.nbpArrowLinkPosition;
  }
}
