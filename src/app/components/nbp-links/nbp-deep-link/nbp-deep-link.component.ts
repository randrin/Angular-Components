import { Component, Injector, Input, OnInit } from "@angular/core";
import {
  NbpTextTransformClasse,
  NbpColorClasse,
} from "src/assets/utils/nbp-commons/nbp-commons.classes";
import {
  NbpPipe,
  NbpStyle,
} from "src/assets/utils/nbp-commons/nbp-commons.enums";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-deep-link",
  templateUrl: "./nbp-deep-link.component.html",
  styleUrls: ["./nbp-deep-link.component.scss"],
})
export class NbpDeepLinkComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpDeepLinkName: string;
  @Input() nbpDeepLinkStyle: string;
  @Input() nbpDeepLinkTextTransform: string;
  @Input() nbpDeepLinkRedirection: string;
  @Input() nbpDeepLinkTarget: boolean;
  @Input() nbpDeepLinkPosition: string;


  constructor(injector: Injector) { super(injector); }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpColor = this.nbpGetColorClasse(this.nbpDeepLinkStyle);
    this.nbpTextTransform = this.nbpGetTextTransformClasse(
      this.nbpDeepLinkTextTransform
    );
    this.nbpDeepLinkPosition =
      this.nbpDeepLinkPosition === "" || this.nbpDeepLinkPosition === undefined
        ? this.nbpPosition.RIGHT
        : this.nbpPosition.LEFT;
    this.nbpTextTransform =
      this.nbpTextTransform + this.nbpSeparator + this.nbpDeepLinkPosition;
  }
}
