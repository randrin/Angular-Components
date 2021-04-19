import { Component, Injector, OnInit } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-input-number-page",
  templateUrl: "./nbp-input-number-page.component.html",
  styleUrls: ["./nbp-input-number-page.component.scss"],
})
export class NbpInputNumberPageComponent
  extends NbpBaseComponent
  implements OnInit {
  title = "Input Number Page";

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  // Functions
  nbpInputModel(event) {
    this.nbpModel = event;
  }
}
