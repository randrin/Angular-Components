import { Component, Injector, Input, OnInit } from "@angular/core";
import { NbpBaseComponent } from "../nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-cookie-one",
  templateUrl: "./nbp-cookie-one.component.html",
  styleUrls: ["./nbp-cookie-one.component.scss"],
})
export class NbpCookieOneComponent extends NbpBaseComponent implements OnInit {
  
  @Input() nbpCookieText: string;
  @Input() nbpCookieTextLink: string;
  @Input() nbpCookieRedirectionLink: string;
  @Input() nbpCookieTextButton: string;

  constructor(injector: Injector) {
    super(injector);
  }

  nbpCookieClose: boolean = true;

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  // Functions
  nbpSetUpComponent() {}

  nbpCookieOnClose() {
    this.nbpCookieClose = false;
  }
}
