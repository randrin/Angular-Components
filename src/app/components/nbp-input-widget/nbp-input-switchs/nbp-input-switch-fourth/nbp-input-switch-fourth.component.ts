import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "../../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-input-switch-fourth",
  templateUrl: "./nbp-input-switch-fourth.component.html",
  styleUrls: ["./nbp-input-switch-fourth.component.scss"],
})
export class NbpInputSwitchFourthComponent
  extends NbpBaseComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  @Input() nbpInputSwitchName: string;
  @Input() nbpInputSwitchSize: string;
  @Input() nbpInputSwitchType: string;
  @Input() nbpInputSwitchChecked: boolean;
  @Input() nbpInputSwitchDisabled: boolean;

  @Output()
  nbpInputSwitchOnClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpSwitch = this.nbpInputSwitchChecked ? Boolean(true) : Boolean(false); 
    this.nbpBackground = this.nbpGetBackgroundClasse(this.nbpInputSwitchType);
    this.nbpBorder = this.nbpGetBorderClasse(
      this.nbpInputSwitchType,
      this._type.BORDER
    );
    this.nbpBorder = this.nbpBorder + this.nbpSeparator + this.nbpGetSizeClasse(this.nbpInputSwitchSize, this._type.SWITCH);
  }

  // Functions
  nbpGetSwitchType() {
    return "nbp-input-switch-one-" + this.nbpInputSwitchType.toLowerCase();
  }

  nbpInputSwitchClick(event) {
    this.nbpSwitch = event.target.checked;
    this.nbpInputSwitchOnClick.emit(event.target.checked);
  }
}
