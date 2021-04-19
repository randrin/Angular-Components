import { Component, EventEmitter, Injector, Input, OnInit, Output } from "@angular/core";
import { NbpBaseComponent } from "../../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-input-switch-two",
  templateUrl: "./nbp-input-switch-two.component.html",
  styleUrls: ["./nbp-input-switch-two.component.scss"],
})
export class NbpInputSwitchTwoComponent
  extends NbpBaseComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  @Input() nbpInputSwitchName: string;
  @Input() nbpInputSwitchType: string;
  @Input() nbpInputSwitchChecked: boolean;
  @Input() nbpInputSwitchDisabled: boolean;

  @Output() nbpInputSwitchOnClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpBackground = this.nbpGetBackgroundClasse(this.nbpInputSwitchType);
    this.nbpBorder = this.nbpGetBorderClasse(this.nbpInputSwitchType, this._type.BORDER)
  }

    // Functions
    nbpGetSwitchType() {
      return 'nbp-input-switch-two-' + this.nbpInputSwitchType.toLowerCase();
    }
  
    nbpInputSwitchClick(event) {
      this.nbpInputSwitchOnClick.emit(event.target.checked);
    }
}
