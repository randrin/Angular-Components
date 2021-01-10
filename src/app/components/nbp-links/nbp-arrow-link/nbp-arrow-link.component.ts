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
  selector: "nbp-arrow-link",
  templateUrl: "./nbp-arrow-link.component.html",
  styleUrls: ["./nbp-arrow-link.component.scss"],
})
export class NbpArrowLinkComponent implements OnInit {
  @Input() nbpArrowLinkName: string;
  @Input() nbpArrowLinkStyle: string;
  @Input() nbpArrowLinkTextTransform: string;
  @Input() nbpArrowLinkRedirection: string;
  @Input() nbpArrowLinkTarget: boolean;
  @Input() nbpArrowLinkPosition: string;

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
    this.nbpColor = this.nbpGetColorClass(this.nbpArrowLinkStyle);
    this.nbpTextTransform = this.nbpGetTextTransform(
      this.nbpArrowLinkTextTransform
    );
    this.nbpArrowLinkPosition =
      this.nbpArrowLinkPosition === "" ||
      this.nbpArrowLinkPosition === undefined
        ? this._style.RIGHT
        : this.nbpArrowLinkPosition;
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
      case this._style.BLACK:
        return this._colorClasse.BLACK;
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
