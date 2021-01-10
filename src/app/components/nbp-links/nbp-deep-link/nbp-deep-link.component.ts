import { Component, Input, OnInit } from "@angular/core";
import {
  NbpTextTransformClasse,
  NbpColorClasse,
} from "src/assets/utils/nbp-commons/nbp-commons.classes";
import {
  NbpPipe,
  NbpStyle,
} from "src/assets/utils/nbp-commons/nbp-commons.enums";

@Component({
  selector: "nbp-deep-link",
  templateUrl: "./nbp-deep-link.component.html",
  styleUrls: ["./nbp-deep-link.component.scss"],
})
export class NbpDeepLinkComponent implements OnInit {

  @Input() nbpDeepLinkName: string;
  @Input() nbpDeepLinkStyle: string;
  @Input() nbpDeepLinkTextTransform: string;
  @Input() nbpDeepLinkRedirection: string;
  @Input() nbpDeepLinkTarget: boolean;
  @Input() nbpDeepLinkPosition: string;

  _style = NbpStyle;
  _pipe = NbpPipe;

  _textTransformClasse = NbpTextTransformClasse;
  _colorClasse = NbpColorClasse;

  nbpColor: string;
  nbpTextTransform: string;

  constructor() {}

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpColor = this.nbpGetColorClass(this.nbpDeepLinkStyle);
    this.nbpTextTransform = this.nbpGetTextTransform(
      this.nbpDeepLinkTextTransform
    );
  }

  nbpGetColorClass(nbpInput) {
    switch (nbpInput) {
      case this._style.DEFAULT:
        return this._colorClasse.DEFAULT;
        break;
      case this._style.PRIMARY:
        return this._colorClasse.PRIMARY;
        break;
      case this._style.DANGER:
        return this._colorClasse.DANGER;
        break;
      case this._style.WARNING:
        return this._colorClasse.WARNING;
        break;
      case this._style.INFO:
        return this._colorClasse.INFO;
        break;
      case this._style.TOMATO:
        return this._colorClasse.TOMATO;
        break;
      case this._style.WHITE:
        return this._colorClasse.WHITE;
        break;
      case this._style.SUCCESS:
        return this._colorClasse.SUCCESS;
        break;
      default:
        return this._colorClasse.DEFAULT;
        break;
    }
  }

  nbpGetTextTransform(nbpInput) {
    switch (nbpInput) {
      case this._pipe.LOWERCASE:
        return this._textTransformClasse.LOWERCASE;
        break;
      case this._pipe.UPPERCASE:
        return this._textTransformClasse.UPPERCASE;
        break;
      default:
        return this._textTransformClasse.UPPERCASE;
        break;
    }
  }
}
