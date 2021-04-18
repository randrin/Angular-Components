import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";
import * as uuid from 'uuid';

@Component({
  selector: "nbp-profile-box-one",
  templateUrl: "./nbp-profile-box-one.component.html",
  styleUrls: ["./nbp-profile-box-one.component.scss", "../../nbp-modals/nbp-modal-two/nbp-modal-two.component.scss"],
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

  modalName: string;
  nbpModalStatic: string = 'static';
  nbpTableTextHeader: string = "";
  nbpTableTextBody: string = "";
  nbpModalSizePosition: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.modalName = 'nbp' + uuid.v4();
    this.nbpModalSizePosition = this.nbpGetModalPositionClasse(this._position.CENTER) + this.nbpSeparator + this.nbpGetSizeModalClasse(this._size.MD);
    this.nbpTableTextHeader = "Logout Confirmation"
    this.nbpTableTextBody = "Are you sure you want to leave Nbp System ?"
  }

  nbpProfileOnClickBtn(event) {
    this.nbpProfileBtnOnClick.emit(event);
  }

}
