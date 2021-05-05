import { Component, OnInit, Injector } from "@angular/core";
import { NbpBaseComponent } from "src/app/components/nbp-base-component/nbp-base.component";

@Component({
  selector: "nbp-badge-page",
  templateUrl: "./nbp-badge-page.component.html",
  styleUrls: ["./nbp-badge-page.component.scss"],
})
export class NbpBadgePageComponent extends NbpBaseComponent implements OnInit {
  title1 = "Badges One Border Style";
  title2 = "Badges One Border Style with icon";
  title3 = "Badges One Border Outline";
  title4 = "Badges One Border Outline with icon";
  title5 = "Badges Two Border Style";
  title6 = "Badges Two Border Style with icon";
  title7 = "Badges Two Border Outline";
  title8 = "Badges Two Border Outline with icon";

  nbpBadges = [
    { number: 1, icon: "nbp-icon-calendar-alt", style: this._style.DEFAULT, type: this._style.OUTLINE },
    { number: 2, style: this._style.DEFAULT, type: this._style.OUTLINE },
    { number: 3, icon:"nbp-icon-bullhorn", style: this._style.PRIMARY, type: this._style.OUTLINE },
    { number: 4, style: this._style.PRIMARY, type: this._style.OUTLINE },
    { number: 5, icon: "nbp-icon-address-card", style: this._style.WARNING, type: this._style.OUTLINE },
    { number: 6, style: this._style.WARNING, type: this._style.OUTLINE },
    { number: 7, icon: "nbp-icon-cart-plus", style: this._style.SUCCESS, type: this._style.OUTLINE },
    { number: 8, style: this._style.SUCCESS, type: this._style.OUTLINE },
    { number: 9, icon: "nbp-icon-address-card", style: this._style.BLACK, type: this._style.OUTLINE },
    { number: 10, style: this._style.BLACK, type: this._style.OUTLINE },
    { number: 11, style: this._style.TOMATO, type: this._style.OUTLINE },
    { number: 13, style: this._style.DANGER, type: this._style.OUTLINE },
    { number: 15, style: this._style.SLIVER, type: this._style.OUTLINE },
    { number: 17, style: this._style.INFO, type: this._style.OUTLINE },
    { number: 19, style: this._style.NIGHT_RIDER, type: this._style.OUTLINE },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}
}
