import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { NbpBaseComponent } from '../../nbp-base-component/nbp-base.component';
import * as uuid from 'uuid';

@Component({
  selector: 'nbp-modal-one',
  templateUrl: './nbp-modal-one.component.html',
  styleUrls: ['./nbp-modal-one.component.scss']
})
export class NbpModalOneComponent extends NbpBaseComponent implements OnInit {
  @Input() nbpModalTitle: string;
  @Input() nbpModalContent: string;
  @Input() nbpModalSize: string;
  @Input() nbpModalPosition: string;
  @Input() nbpModalMode: string;
  @Input() nbpModalScroll: boolean;

  @Output() nbpOnSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() nbpOnClose: EventEmitter<any> = new EventEmitter<any>();

  modalSize: string;
  modalPosition: string
  modalType: string;
  nbpSizeAndPosition: string;
  nbpModalName: string;
  nbpModalStatic: string;
  modalTypes: string = 'modal-dialog-scrollable'


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  nbpSetUpComponent() {
    this.nbpModalName = 'a' + uuid.v4();
    this.modalSize = this.nbpGetSizeModalClasse(this.nbpModalSize);
    this.modalPosition = this.nbpGetnbpModalPosition(this.nbpModalPosition);
    this.nbpModalScrolls; 
    this.nbpModalStatic = this.nbpGetTypeModal(this.nbpModalMode)
    console.log('this.nbpModalName one: ', this.nbpModalName)
  }
 
  get nbpModalScrolls() {
    if (this.nbpModalScroll) {
      return this.nbpSizeAndPosition = this.modalPosition + this.nbpSeparator + this.modalSize + this.nbpSeparator + this.modalTypes
    }
    return this.nbpSizeAndPosition = this.modalPosition + this.nbpSeparator + this.modalSize
  }

  nbpOnSaved() {

  }

  nbpOnClosed() {

  }
}
