import { Component, EventEmitter, Injector, Input, OnInit, Output } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-toggle-button-two",
  templateUrl: "./nbp-toggle-button-two.component.html",
  styleUrls: ["./nbp-toggle-button-two.component.scss"],
})
export class NbpToggleButtonTwoComponent
  extends NbpBaseComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  @Input() nbpToggleButtonName: string;
  @Input() nbpToggleButtonType: string;
  @Input() nbpToggleButtonChecked: boolean;
  @Input() nbpToggleButtonDisabled: boolean;

  @Output() nbpToogleButtonOnClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpBackground = this.nbpGetBackgroundClasse(this.nbpToggleButtonType);
    this.nbpBorder = this.nbpGetBorderClasse(this.nbpToggleButtonType, this._border.BORDER)
  }

    // Functions
    nbpGetToggleType() {
      return 'nbp-toggle-button-two-' + this.nbpToggleButtonType.toLowerCase();
    }
  
    nbpToggleButtonClick(event) {
      this.nbpToogleButtonOnClick.emit(event.target.checked);
    }
}
