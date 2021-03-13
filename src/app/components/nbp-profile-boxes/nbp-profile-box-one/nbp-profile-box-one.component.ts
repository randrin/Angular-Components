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
  selector: "nbp-profile-box-one",
  templateUrl: "./nbp-profile-box-one.component.html",
  styleUrls: ["./nbp-profile-box-one.component.scss"],
})
export class NbpProfileBoxOneComponent
  extends NbpBaseComponent
  implements OnInit {
  @Input() nbpProfileImageUrl: string;
  @Input() nbpProfileTitle: string;
  @Input() nbpProfileSubtitle: string;
  @Input() nbpProfileFooter: string;
  @Input() nbpProfileBtnView: string;
  @Input() nbpProfileBtnUpdate: string;
  @Input() nbpProfileBtnExit: string;

  @Output()
  nbpProfileBtnOnClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  // Functions
  nbpProfileOnClickBtn(event) {
    this.nbpProfileBtnOnClick.emit(event);
  }
}
