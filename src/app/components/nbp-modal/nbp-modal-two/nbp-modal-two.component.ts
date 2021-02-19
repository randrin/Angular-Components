import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';
import * as uuid from 'uuid';

@Component({
  selector: 'nbp-modal-two',
  templateUrl: './nbp-modal-two.component.html',
  styleUrls: ['./nbp-modal-two.component.scss']
})
export class NbpModalTwoComponent extends NbpBaseComponent implements OnInit {

  @Input() nbpModalTitle: string;
  @Input() nbpModalButtonTitle: string;
  @Input() nbpModalContent: string; 
  @Input() nbpModalSize: string;
  @Input() nbpModalPosition: string;
  @Input() nbpModalStaticMode: boolean;
  @Input() nbpModalScroll: boolean;

  @Output() nbpOnSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() nbpOnClose: EventEmitter<any> = new EventEmitter<any>();

  modalSize: string;
  modalPosition: string
  modalSizePosition: string;
  modalName: string;
  modalTypes: string = 'modal-dialog-scrollable';
  nbpModalStatic: string = 'static'

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void { 
    this.nbpSetUpComponent();
  }
  
  nbpSetUpComponent() {
    this.modalName = 'nbp'+ uuid.v4(); 
    this.modalSize = this.nbpGetSizeModalClasse(this.nbpModalSize);
    this.modalPosition = this.nbpGetModalPositionClasse(this.nbpModalPosition);
    this.nbpModalScrolls;
    this.nbpModalStaticModes;
  }

  get nbpModalScrolls() {
    if (this.nbpModalScroll) {
      return this.modalSizePosition = this.modalPosition + this.nbpSeparator + this.modalSize + this.nbpSeparator + this.modalTypes
    }
    return this.modalSizePosition = this.modalPosition + this.nbpSeparator + this.modalSize
  }

  get nbpModalStaticModes() {
    if (this.nbpModalStaticMode) {
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

