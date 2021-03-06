import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-feedback-one",
  templateUrl: "./nbp-feedback-one.component.html",
  styleUrls: ["./nbp-feedback-one.component.scss"],
})
export class NbpFeedbackOneComponent extends NbpBaseComponent implements OnInit {
  @Input() nbpTitle: string;
  @Input() nbpMessage: string;
  @Input() nbpFeedbackType: string;
  @Input() nbpFeedbackWithButtonContinueAndTryAgain: boolean;
  @Input() nbpFeedbackWithButtonOk: boolean
  // @Input() nbpFeedbackWithButtonTryAgain: boolean;

  nbpFeedback: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
    
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpFeedback = this.nbpGetColorFeedbackClasse(this.nbpFeedbackType);
    this.nbpSetUpModalButton()
  }

  nbpSetUpModalButton(){
    if(this.nbpFeedbackWithButtonContinueAndTryAgain === true && this.nbpFeedbackWithButtonOk === true ){
      this.nbpFeedbackWithButtonOk = false
    }
  }


  nbpClickContinue(){

  }

  nbpClickOk(){

  }

  nbpClickTryAgain(){

  }
}
