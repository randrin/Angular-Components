import { Component, Injector, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-toggle-button-one",
  templateUrl: "./nbp-toggle-button-one.component.html",
  styleUrls: ["./nbp-toggle-button-one.component.scss"],
})
export class NbpToggleButtonOneComponent
  extends NbpBaseComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  @Input() nbpToggleButtonName: string;
  @Input() nbpToggleButtonType: string;
  @Input() nbpToggleButtonChecked: true;

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
    return 'nbp-toggle-button-' + this.nbpToggleButtonType.toLowerCase();
  }

  nbpToggleButtonClick(event) {
    this.nbpToogleButtonOnClick.emit(event.target.checked);
  }
}
