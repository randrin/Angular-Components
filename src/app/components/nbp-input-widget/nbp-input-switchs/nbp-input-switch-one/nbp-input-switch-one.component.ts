import { Component, Injector, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { NbpBaseComponent } from "../../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-input-switch-one",
  templateUrl: "./nbp-input-switch-one.component.html",
  styleUrls: ["./nbp-input-switch-one.component.scss"],
})
export class NbpInputSwitchOneComponent
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
    return 'nbp-input-switch-one-' + this.nbpInputSwitchType.toLowerCase();
  }

  nbpInputSwitchClick(event) {
    this.nbpSwitch = event.target.checked;
    this.nbpInputSwitchOnClick.emit(event.target.checked);
  }
}
