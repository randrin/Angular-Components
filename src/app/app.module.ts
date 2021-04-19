import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DpDatePickerModule } from "ng2-date-picker";
import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { NgxDatePickerModule } from '@ngx-tiny/date-picker';
import { NgxQuillEditorModule } from '@ngx-tiny/quill-editor';
import { DropdownListModule } from "ngx-dropdown-list";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NbpDividingLineOneComponent } from "./components/nbp-dividing-lines/nbp-dividing-line-one/nbp-dividing-line-one.component";
import { NbpBackgroundBoxComponent } from "./components/nbp-background-box/nbp-background-box.component";
import { NbpButtonComponent } from "./components/nbp-button/nbp-button.component";
import { NbpAlertBoxOneComponent } from "./components/nbp-alert-boxes/nbp-alert-box-one/nbp-alert-box-one.component";
import { NbpScrollTopComponent } from "./components/nbp-scroll-top/nbp-scroll-top.component";
import { NbpFeedbackOneComponent } from "./components/nbp-feedbacks/nbp-feedback-one/nbp-feedback-one.component";
import { NbpInputTextComponent } from "./components/nbp-input-widget/nbp-input-text/nbp-input-text.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbpTextareaOneComponent } from "./components/nbp-textareas/nbp-textarea-one/nbp-textarea-one.component";
import { HomeComponent } from "./pages/home/home.component";
import { ComposantsComponent } from "./pages/composants/composants.component";
import { NbpTextareaPageComponent } from "./pages/composants/nbp-textarea-page/nbp-textarea-page.component";
import { NbpInputTextPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-text-page/nbp-input-text-page.component";
import { NbpAlertBoxPageComponent } from "./pages/composants/nbp-alert-box-page/nbp-alert-box-page.component";
import { NbpBackgroundBoxPageComponent } from "./pages/composants/nbp-background-box-page/nbp-background-box-page.component";
import { NbpButtonPageComponent } from "./pages/composants/nbp-button-page/nbp-button-page.component";
import { NbpDividingLinePageComponent } from "./pages/composants/nbp-dividing-line-page/nbp-dividing-line-page.component";
import { NbpFeedbackPageComponent } from "./pages/composants/nbp-feedback-page/nbp-feedback-page.component";
import { NbpHeaderOneComponent } from "./components/nbp-headers/nbp-header-one/nbp-header-one.component";
import { NbpFooterOneComponent } from "./components/nbp-footers/nbp-footer-one/nbp-footer-one.component";
import { NbpNavbarComponent } from "./components/nbp-navbar/nbp-navbar.component";
import { NbpBreadcrumbOneComponent } from "./components/nbp-breadcrumbs/nbp-breadcrumb-one/nbp-breadcrumb-one.component";
import { NbpBreadcrumbTwoComponent } from "./components/nbp-breadcrumbs/nbp-breadcrumb-two/nbp-breadcrumb-two.component";
import { NbpHeaderPageComponent } from "./pages/composants/nbp-header-page/nbp-header-page.component";
import { NbpInputCheckboxComponent } from "./components/nbp-input-widget/nbp-input-checkbox/nbp-input-checkbox.component";
import { NbpInputCheckboxPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-checkbox-page/nbp-input-checkbox-page.component";
import { NbpColorComponent } from "./components/nbp-color/nbp-color.component";
import { NbpColorPageComponent } from "./pages/composants/nbp-color-page/nbp-color-page.component";
import { NbpTableOneComponent } from "./components/nbp-tables/nbp-table-one/nbp-table-one.component";
import { ExamplesComponent } from "./pages/examples/examples.component";
import { NbpTablePageComponent } from "./pages/composants/nbp-table-page/nbp-table-page.component";
import { NbpSortDirective } from "./directive/nbp-sort.directive";
import { DataTablesModule } from "angular-datatables";
import { NbpBreadcrumdPageComponent } from "./pages/composants/nbp-breadcrumd-page/nbp-breadcrumd-page.component";
import { NbpTableTwoComponent } from "./components/nbp-tables/nbp-table-two/nbp-table-two.component";
import { NbpBadgeOneComponent } from "./components/nbp-badges/nbp-badge-one/nbp-badge-one.component";
import { NbpIconComponent } from "./components/nbp-icon/nbp-icon.component";
import { NbpIconPageComponent } from "./pages/composants/nbp-icon-page/nbp-icon-page.component";
import { NbpBadgePageComponent } from "./pages/composants/nbp-badge-page/nbp-badge-page.component";
import { NbpTypographyPageComponent } from "./pages/composants/nbp-typography-page/nbp-typography-page.component";
import { NbpPanelTitleOneComponent } from "./components/nbp-panel-titles/nbp-panel-title-one/nbp-panel-title-one.component";
import { NbpPanelTitlePageComponent } from "./pages/composants/nbp-panel-title-page/nbp-panel-title-page.component";
import { NbpInputRadioComponent } from "./components/nbp-input-widget/nbp-input-radio/nbp-input-radio.component";
import { NbpInputRadioPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-radio-page/nbp-input-radio-page.component";
import { NbpBreadcrumdThreeComponent } from "./components/nbp-breadcrumbs/nbp-breadcrumb-three/nbp-breadcrumd-three.component";
import { NbpAlertBoxTwoComponent } from "./components/nbp-alert-boxes/nbp-alert-box-two/nbp-alert-box-two.component";
import { NbpArrowLinkComponent } from "./components/nbp-links/nbp-arrow-link/nbp-arrow-link.component";
import { NbpDeepLinkComponent } from "./components/nbp-links/nbp-deep-link/nbp-deep-link.component";
import { NbpLinkPageComponent } from "./pages/composants/nbp-link-page/nbp-link-page.component";
import { NbpAlertBoxThreeComponent } from "./components/nbp-alert-boxes/nbp-alert-box-three/nbp-alert-box-three.component";
import { NbpPanelTitleTwoComponent } from "./components/nbp-panel-titles/nbp-panel-title-two/nbp-panel-title-two.component";
import { NbpBaseComponent } from "./components/nbp-base-component/nbp-base.component";
import { NbpCookieOneComponent } from "./components/nbp-cookies/nbp-cookie-one.component";
import { NbpDividingLineTwoComponent } from "./components/nbp-dividing-lines/nbp-dividing-line-two/nbp-dividing-line-two.component";
import { NbpCardOneComponent } from "./components/nbp-cards/nbp-card-one/nbp-card-one.component";
import { NbpCardPageComponent } from "./pages/composants/nbp-card-page/nbp-card-page.component";
import { NbpModalOneComponent } from "./components/nbp-modals/nbp-modal-one/nbp-modal-one.component";
import { NbpAlertBoxFourthComponent } from "./components/nbp-alert-boxes/nbp-alert-box-fourth/nbp-alert-box-fourth.component";
import { NbpAlertBoxFiveComponent } from "./components/nbp-alert-boxes/nbp-alert-box-five/nbp-alert-box-five.component";
import { NbpInputSwitchOneComponent } from "./components/nbp-input-widget/nbp-input-switchs/nbp-input-switch-one/nbp-input-switch-one.component";
import { NbpInputSwitchTwoComponent } from "./components/nbp-input-widget/nbp-input-switchs/nbp-input-switch-two/nbp-input-switch-two.component";
import { NbpInputSwitchPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-switch-page/nbp-input-switch-page.component";
import { NbpPanelTitleThreeComponent } from "./components/nbp-panel-titles/nbp-panel-title-three/nbp-panel-title-three.component";
import { NbpPanelTitleFourthComponent } from "./components/nbp-panel-titles/nbp-panel-title-fourth/nbp-panel-title-fourth.component";
import { NbpDropdownListOneComponent } from "./components/nbp-dropdown-lists/nbp-dropdown-list-one/nbp-dropdown-list-one.component";
import { NbpDatePickerOneComponent } from "./components/nbp-date-pickers/nbp-date-picker-one/nbp-date-picker-one.component";
import { NbpNotificationHeaderComponent } from "./components/nbp-notification-header/nbp-notification-header.component";
import { NbpTabbarComponent } from "./components/nbp-tab-bars/nbp-tab-bar/nbp-tab-bar.component";
import { NbpUploadFileComponent } from "./components/nbp-upload-file/nbp-upload-file.component";
import { NbpTooltipPageComponent } from "./pages/composants/nbp-tooltip-page/nbp-tooltip-page.component";
import { NbpNotificationHeaderPageComponent } from "./pages/composants/nbp-notification-header-page/nbp-notification-header-page.component";
import { NbpDropDownListPageComponent } from "./pages/composants/nbp-drop-down-list-page/nbp-drop-down-list-page.component";
import { NbpDatePickerPageComponent } from "./pages/composants/nbp-date-picker-page/nbp-date-picker-page.component";
import { NbpUploadFilePageComponent } from "./pages/composants/nbp-upload-file-page/nbp-upload-file-page.component";
import { NbpTabbarPageComponent } from "./pages/composants/nbp-tabar-page/nbp-tab-bar-page.component";
import { NbpFilterFormPageComponent } from "./pages/composants/nbp-filter-form-page/nbp-filter-form-page.component";
import { NbpPanelTitleFiveComponent } from "./components/nbp-panel-titles/nbp-panel-title-five/nbp-panel-title-five.component";
import { NbpBadgeTwoComponent } from "./components/nbp-badges/nbp-badge-two/nbp-badge-two.component";
import { TooltipModule } from "ng2-tooltip-directive";
import { NbpTooltipComponent } from "./components/nbp-tooltip/nbp-tooltip.component";

import { NbpInputPasswordComponent } from "./components/nbp-input-widget/nbp-input-password/nbp-input-password.component";
import { NbpInputPasswordPageComponent } from "./pages/composants/nbp-input-widget-page/nbp-input-password-page/nbp-input-password-page.component";
import { NbpDividingLineThreeComponent } from "./components/nbp-dividing-lines/nbp-dividing-line-three/nbp-dividing-line-three.component";
import { NbpDividingLineFourthComponent } from "./components/nbp-dividing-lines/nbp-dividing-line-fourth/nbp-dividing-line-fourth.component";
import { NbpBoxeOneComponent } from "./components/nbp-boxes/nbp-boxe-one/nbp-boxe-one.component";
import { NbpBoxePageComponent } from "./pages/composants/nbp-boxe-page/nbp-boxe-page.component";
import { NbpTabBarTwoComponent } from "./components/nbp-tab-bars/nbp-tab-bar-two/nbp-tab-bar-two.component";
import { NbpTabBarThreeComponent } from "./components/nbp-tab-bars/nbp-tab-bar-three/nbp-tab-bar-three.component";
import { NbpTabBarFourComponent } from "./components/nbp-tab-bars/nbp-tab-bar-four/nbp-tab-bar-four.component";
import { NbpTabBarFiveComponent } from "./components/nbp-tab-bars/nbp-tab-bar-five/nbp-tab-bar-five.component";

import { NbpInputSwitchThreeComponent } from "./components/nbp-input-widget/nbp-input-switchs/nbp-input-switch-three/nbp-input-switch-three.component";
import { NbpInputSwitchFourthComponent } from "./components/nbp-input-widget/nbp-input-switchs/nbp-input-switch-fourth/nbp-input-switch-fourth.component";
import { NbpAuthService } from "./services/nbp-auth.service";
import { NbpLoginOneComponent } from "./components/nbp-logins/nbp-login-one/nbp-login-one.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RegisterComponent } from "./pages/auth/register/register.component";
import { NbpLocalStorage } from "./utils/nbp-local-storage";
import { NbpUserService } from "./services/nbp-user.service";
import { ChangePasswordComponent } from "./pages/auth/change-password/change-password.component";
import { ChangeOldPassToNewPassComponent } from "./pages/auth/change-old-pass-to-new-pass/change-old-pass-to-new-pass.component";
import { NbpPatientComponent } from "./pages/nbp-patient/nbp-patient.component";
import { NbpDividingLineFiveComponent } from "./components/nbp-dividing-lines/nbp-dividing-line-five/nbp-dividing-line-five.component";
import { NbpProfileBoxOneComponent } from "./components/nbp-profile-boxes/nbp-profile-box-one/nbp-profile-box-one.component";
import { NbpProfileBoxPageComponent } from "./pages/composants/nbp-profile-box-page/nbp-profile-box-page.component";
import { NbpFeedbackTwoComponent } from "./components/nbp-feedbacks/nbp-feedback-two/nbp-feedback-two.component";
import { NbpPatientService } from "./services/nbp-patients.service";
import { NbpModalPageComponent } from "./pages/composants/nbp-modal-page/nbp-modal-page.component";
import { NbpModalThreeComponent } from "./components/nbp-modals/nbp-modal-three/nbp-modal-three.component";
import { NbpModalTwoComponent } from "./components/nbp-modals/nbp-modal-two/nbp-modal-two.component";
import { NbpDropdownListTwoComponent } from "./components/nbp-dropdown-lists/nbp-dropdown-list-two/nbp-dropdown-list-two.component";
import { NbpDatePickerTwoComponent } from "./components/nbp-date-pickers/nbp-date-picker-two/nbp-date-picker-two.component";
import { NbpTextareaTwoComponent } from './components/nbp-textareas/nbp-textarea-two/nbp-textarea-two.component';
import { NbpInputNumberComponent } from './components/nbp-input-widget/nbp-input-number/nbp-input-number.component';
import { NbpInputNumberPageComponent } from './pages/composants/nbp-input-widget-page/nbp-input-number-page/nbp-input-number-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NbpBaseComponent,
    NbpDividingLineOneComponent,
    NbpBackgroundBoxComponent,
    NbpButtonComponent,
    NbpAlertBoxOneComponent,
    NbpScrollTopComponent,
    NbpFeedbackOneComponent,
    NbpInputTextComponent,
    NbpTextareaOneComponent,
    HomeComponent,
    ComposantsComponent,
    NbpTextareaPageComponent,
    NbpInputTextPageComponent,
    NbpAlertBoxPageComponent,
    NbpBackgroundBoxPageComponent,
    NbpButtonPageComponent,
    NbpDividingLinePageComponent,
    NbpFeedbackPageComponent,
    NbpHeaderOneComponent,
    NbpFooterOneComponent,
    NbpNavbarComponent,
    NbpBreadcrumbOneComponent,
    NbpBreadcrumbTwoComponent,
    NbpHeaderPageComponent,
    NbpInputCheckboxComponent,
    NbpInputCheckboxPageComponent,
    NbpColorComponent,
    NbpColorPageComponent,
    NbpTableOneComponent,
    ExamplesComponent,
    NbpTablePageComponent,
    NbpSortDirective,
    NbpBreadcrumdPageComponent,
    NbpTableTwoComponent,
    NbpBadgeOneComponent,
    NbpIconComponent,
    NbpIconPageComponent,
    NbpBadgePageComponent,
    NbpTypographyPageComponent,
    NbpPanelTitleOneComponent,
    NbpPanelTitlePageComponent,
    NbpInputRadioComponent,
    NbpInputRadioPageComponent,
    NbpBreadcrumdThreeComponent,
    NbpAlertBoxTwoComponent,
    NbpArrowLinkComponent,
    NbpDeepLinkComponent,
    NbpLinkPageComponent,
    NbpAlertBoxThreeComponent,
    NbpPanelTitleTwoComponent,
    NbpCookieOneComponent,
    NbpDividingLineTwoComponent,
    NbpCardOneComponent,
    NbpCardPageComponent,
    NbpModalPageComponent,
    NbpModalOneComponent,
    NbpModalTwoComponent,
    NbpModalThreeComponent,
    NbpAlertBoxFourthComponent,
    NbpAlertBoxFiveComponent,
    NbpInputSwitchOneComponent,
    NbpInputSwitchTwoComponent,
    NbpInputSwitchPageComponent,
    NbpPanelTitleThreeComponent,
    NbpPanelTitleFourthComponent,
    NbpDropdownListOneComponent,
    NbpDatePickerOneComponent,
    NbpNotificationHeaderComponent,
    NbpTabbarComponent,
    NbpUploadFileComponent,
    NbpTooltipPageComponent,
    NbpTooltipComponent,
    NbpNotificationHeaderPageComponent,
    NbpDropDownListPageComponent,
    NbpDatePickerPageComponent,
    NbpUploadFilePageComponent,
    NbpTabbarPageComponent,
    NbpFilterFormPageComponent,
    NbpPanelTitleFiveComponent,
    NbpBadgeTwoComponent,
    NbpInputPasswordComponent,
    NbpInputPasswordPageComponent,
    NbpDividingLineThreeComponent,
    NbpDividingLineFourthComponent,
    NbpBoxeOneComponent,
    NbpBoxePageComponent,
    NbpTabBarTwoComponent,
    NbpTabBarThreeComponent,
    NbpTabBarFourComponent,
    NbpTabBarFiveComponent,
    NbpInputSwitchThreeComponent,
    NbpInputSwitchFourthComponent,
    NbpLoginOneComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ChangeOldPassToNewPassComponent,
    NbpPatientComponent,
    NbpDividingLineFiveComponent,
    NbpProfileBoxOneComponent,
    NbpProfileBoxPageComponent,
    NbpFeedbackTwoComponent,
    NbpDropdownListTwoComponent,
    NbpDatePickerTwoComponent,
    NbpTextareaTwoComponent,
    NbpInputNumberComponent,
    NbpInputNumberPageComponent,
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    DataTablesModule,
    DropdownListModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule,
    NgxDatePickerModule,
    NgxQuillEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    NbpAuthService,
    NbpUserService,
    NbpPatientService,
    NbpLocalStorage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
