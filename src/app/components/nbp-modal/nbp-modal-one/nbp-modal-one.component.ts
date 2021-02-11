import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';
import * as uuid from 'uuid';

@Component({
  selector: 'nbp-modal-one',
  templateUrl: './nbp-modal-one.component.html',
  styleUrls: ['./nbp-modal-one.component.scss']
})
export class NbpModalOneComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpModalType: string;
  @Input() nbpModalButtonTitle: string;
  @Input() nbpModalTitle: string;
  @Input() nbpModalContent: string;
  @Input() nbpModalSize: string;
  @Input() nbpModalPosition: string;
  @Input() nbpStaticModalMode: boolean;
  @Input() nbpModalScroll: boolean;

  @Output() nbpOnSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() nbpOnClose: EventEmitter<any> = new EventEmitter<any>();

  modalSize: string;
  modalPosition: string
  modalType: string;
  nbpSizeAndPosition: string;
  nbpModalName: string;
  modalTypes: string = 'modal-dialog-scrollable';
  nbpModalStatic: string = 'static';


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpModalName = 'nbp' + uuid.v4();
    this.modalSize = this.nbpGetSizeModalClasse(this.nbpModalSize);
    this.nbpBackground = this.nbpGetBackgroundClasse(this.nbpModalType) + this.nbpSeparator + this.nbpGetBorderClasse(this.nbpModalType, this._border.BORDER);
    this.modalPosition = this.nbpGetModalPositionClasse(this.nbpModalPosition);
    this.nbpModalScrolls;
    this.nbpModalStaticModes;
  }

  get nbpModalScrolls() {
    if (this.nbpModalScroll) {
      return this.nbpSizeAndPosition = this.modalPosition + this.nbpSeparator + this.modalSize + this.nbpSeparator + this.modalTypes;
    }
    return this.nbpSizeAndPosition = this.modalPosition + this.nbpSeparator + this.modalSize;
  }

  get nbpModalStaticModes() {
    if (this.nbpStaticModalMode) {
      return this.nbpModalStatic;
    }
    return this.nbpModalStatic = 'undefined'
  }

  nbpHandleOnSaved() {
    this.nbpOnSave.emit();
  }

  nbpHandleOnClosed() {
    this.nbpOnClose.emit();
  }
}
