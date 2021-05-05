import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComposantsComponent } from "./pages/composants/composants.component";
import { NbpAlertBoxPageComponent } from "./pages/composants/nbp-alert-box-page/nbp-alert-box-page.component";
import { NbpBackgroundBoxPageComponent } from "./pages/composants/nbp-background-box-page/nbp-background-box-page.component";
import { NbpBadgePageComponent } from "./pages/composants/nbp-badge-page/nbp-badge-page.component";
import { NbpBreadcrumdPageComponent } from "./pages/composants/nbp-breadcrumd-page/nbp-breadcrumd-page.component";
import { NbpButtonPageComponent } from "./pages/composants/nbp-button-page/nbp-button-page.component";
import { NbpInputCheckboxPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-checkbox-page/nbp-input-checkbox-page.component";
import { NbpColorPageComponent } from "./pages/composants/nbp-color-page/nbp-color-page.component";
import { NbpDividingLinePageComponent } from "./pages/composants/nbp-dividing-line-page/nbp-dividing-line-page.component";
import { NbpFeedbackPageComponent } from "./pages/composants/nbp-feedback-page/nbp-feedback-page.component";
import { NbpHeaderPageComponent } from "./pages/composants/nbp-header-page/nbp-header-page.component";
import { NbpIconPageComponent } from "./pages/composants/nbp-icon-page/nbp-icon-page.component";
import { NbpInputTextPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-text-page/nbp-input-text-page.component";
import { NbpLinkPageComponent } from "./pages/composants/nbp-link-page/nbp-link-page.component";
import { NbpPanelTitlePageComponent } from "./pages/composants/nbp-panel-title-page/nbp-panel-title-page.component";
import { NbpInputRadioPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-radio-page/nbp-input-radio-page.component";
import { NbpTablePageComponent } from "./pages/composants/nbp-table-page/nbp-table-page.component";
import { NbpInputTextareaPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-textarea-page/nbp-input-textarea-page.component";
import { NbpTypographyPageComponent } from "./pages/composants/nbp-typography-page/nbp-typography-page.component";
import { ExamplesComponent } from "./pages/examples/examples.component";
import { HomeComponent } from "./pages/home/home.component";
import { NbpCardPageComponent } from "./pages/composants/nbp-card-page/nbp-card-page.component";
import { NbpInputSwitchPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-switch-page/nbp-input-switch-page.component";
import { NbpNotificationHeaderPageComponent } from "./pages/composants/nbp-notification-header-page/nbp-notification-header-page.component";
import { NbpInputSelectPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-select-page/nbp-input-select-page.component";
import { NbpInputDatePageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-date-page/nbp-input-date-page.component";
import { NbpUploadFilePageComponent } from "./pages/composants/nbp-upload-file-page/nbp-upload-file-page.component";
import { NbpTabbarPageComponent } from "./pages/composants/nbp-tabar-page/nbp-tab-bar-page.component";
import { NbpFilterFormPageComponent } from "./pages/composants/nbp-filter-form-page/nbp-filter-form-page.component";
import { NbpTooltipPageComponent } from "./pages/composants/nbp-tooltip-page/nbp-tooltip-page.component";
import { NbpInputPasswordPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-password-page/nbp-input-password-page.component";
import { NbpBoxePageComponent } from "./pages/composants/nbp-boxe-page/nbp-boxe-page.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RegisterComponent } from "./pages/auth/register/register.component";
import { ChangePasswordComponent } from "./pages/auth/change-password/change-password.component";
import { ChangeOldPassToNewPassComponent } from "./pages/auth/change-old-pass-to-new-pass/change-old-pass-to-new-pass.component";
import { NbpPatientComponent } from "./pages/nbp-patient/nbp-patient.component";
import { NbpProfileBoxPageComponent } from "./pages/composants/nbp-profile-box-page/nbp-profile-box-page.component";
import { NbpModalPageComponent } from "./pages/composants/nbp-modal-page/nbp-modal-page.component";
import { NbpInputNumberPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-number-page/nbp-input-number-page.component";
import { NbpLabelPageComponent } from "./pages/composants/nbp-label-page/nbp-label-page.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "manage-password", component: ChangePasswordComponent },
  {
    path: "change-old-password-to-new-password",
    component: ChangeOldPassToNewPassComponent,
  },
  { path: "patients", component: NbpPatientComponent },
  {
    path: "composants",
    component: ComposantsComponent,
    children: [
      { path: "breadcrumbs", component: NbpBreadcrumdPageComponent },
      { path: "colors", component: NbpColorPageComponent },
      { path: "input-textarea", component: NbpInputTextareaPageComponent },
      { path: "input-text", component: NbpInputTextPageComponent },
      { path: "input-number", component: NbpInputNumberPageComponent },
      { path: "input-password", component: NbpInputPasswordPageComponent },
      { path: "dividing-lines", component: NbpDividingLinePageComponent },
      { path: "feedbacks", component: NbpFeedbackPageComponent },
      { path: "background-boxes", component: NbpBackgroundBoxPageComponent },
      { path: "buttons", component: NbpButtonPageComponent },
      { path: "alert-boxes", component: NbpAlertBoxPageComponent },
      { path: "headers", component: NbpHeaderPageComponent },
      { path: "checkboxes", component: NbpInputCheckboxPageComponent },
      { path: "radios", component: NbpInputRadioPageComponent },
      { path: "tables", component: NbpTablePageComponent },
      { path: "icons", component: NbpIconPageComponent },
      { path: "badges", component: NbpBadgePageComponent },
      { path: "labels", component: NbpLabelPageComponent },
      { path: "typographies", component: NbpTypographyPageComponent },
      { path: "panel-titles", component: NbpPanelTitlePageComponent },
      { path: "links", component: NbpLinkPageComponent },
      { path: "cards", component: NbpCardPageComponent },
      { path: "boxes", component: NbpBoxePageComponent },
      { path: "modals", component: NbpModalPageComponent },
      { path: "input-switchs", component: NbpInputSwitchPageComponent },
      { path: "tooltips", component: NbpTooltipPageComponent },
      {
        path: "notification-header",
        component: NbpNotificationHeaderPageComponent,
      },
      {
        path: "input-select",
        component: NbpInputSelectPageComponent,
      },
      { path: "input-date", component: NbpInputDatePageComponent },
      { path: "upload-File", component: NbpUploadFilePageComponent },
      { path: "profiles", component: NbpProfileBoxPageComponent },
      {
        path: "tab-bar",
        component: NbpTabbarPageComponent,
        children: [
          { path: "dossiers", component: NbpModalPageComponent },
          { path: "setting", component: NbpTooltipPageComponent },
          { path: "links", component: NbpInputTextPageComponent },
          { path: "address", component: NbpInputPasswordPageComponent },
          { path: "login", component: NbpButtonPageComponent },
          { path: "disabled", component: NbpUploadFilePageComponent },
          { path: "calendar", component: NbpModalPageComponent },
          { path: "documents", component: NbpTooltipPageComponent },
          { path: "settingDoc", component: NbpInputTextPageComponent },
          { path: "usersAddress", component: NbpInputPasswordPageComponent },
          { path: "bussiness", component: NbpButtonPageComponent },
        ],
      },
      { path: "filter-Form", component: NbpFilterFormPageComponent },
    ],
  },
  { path: "examples", component: ExamplesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
