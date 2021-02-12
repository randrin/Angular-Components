import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-input-switch-three",
  templateUrl: "./nbp-input-switch-three.component.html",
  styleUrls: ["./nbp-input-switch-three.component.scss"],
})
export class NbpInputSwitchThreeComponent
  extends NbpBaseComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  @Input() nbpInputSwitchName: string;
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
      this._border.BORDER
    );
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
