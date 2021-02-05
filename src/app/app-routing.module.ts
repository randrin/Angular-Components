import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposantsComponent } from './pages/composants/composants.component';
import { NbpAlertBoxPageComponent } from './pages/composants/nbp-alert-box-page/nbp-alert-box-page.component';
import { NbpBackgroundBoxPageComponent } from './pages/composants/nbp-background-box-page/nbp-background-box-page.component';
import { NbpBadgePageComponent } from './pages/composants/nbp-badge-page/nbp-badge-page.component';
import { NbpBreadcrumdPageComponent } from './pages/composants/nbp-breadcrumd-page/nbp-breadcrumd-page.component';
import { NbpButtonPageComponent } from './pages/composants/nbp-button-page/nbp-button-page.component';
import { NbpInputCheckboxPageComponent } from './pages/composants/nbp-input-checkbox-page/nbp-input-checkbox-page.component';
import { NbpColorPageComponent } from './pages/composants/nbp-color-page/nbp-color-page.component';
import { NbpDividingLinePageComponent } from './pages/composants/nbp-dividing-line-page/nbp-dividing-line-page.component';
import { NbpFeedbackPageComponent } from './pages/composants/nbp-feedback-page/nbp-feedback-page.component';
import { NbpHeaderPageComponent } from './pages/composants/nbp-header-page/nbp-header-page.component';
import { NbpIconPageComponent } from './pages/composants/nbp-icon-page/nbp-icon-page.component';
import { NbpInputTextPageComponent } from './pages/composants/nbp-input-text-page/nbp-input-text-page.component';
import { NbpLinkPageComponent } from './pages/composants/nbp-link-page/nbp-link-page.component';
import { NbpPanelTitlePageComponent } from './pages/composants/nbp-panel-title-page/nbp-panel-title-page.component';
import { NbpInputRadioPageComponent } from './pages/composants/nbp-input-radio-page/nbp-input-radio-page.component';
import { NbpTablePageComponent } from './pages/composants/nbp-table-page/nbp-table-page.component';
import { NbpTextareaPageComponent } from './pages/composants/nbp-textarea-page/nbp-textarea-page.component';
import { NbpTypographyPageComponent } from './pages/composants/nbp-typography-page/nbp-typography-page.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { HomeComponent } from './pages/home/home.component';
import { NbpBoxPageComponent } from './pages/composants/nbp-box-page/nbp-box-page.component';
import { NbpModalPageComponent } from './pages/composants/nbp-modal-page/nbp-modal-page.component';
import { NbpInputSwitchPageComponent } from './pages/composants/nbp-input-switch-page/nbp-input-switch-page.component';
import { NbpNotificationHeaderPageComponent } from './pages/composants/nbp-notification-header-page/nbp-notification-header-page.component';
import { NbpComboDropDownListPageComponent } from './pages/composants/nbp-combo-drop-down-list-page/nbp-combo-drop-down-list-page.component';
import { NbpDatePickerPageComponent } from './pages/composants/nbp-date-picker-page/nbp-date-picker-page.component';
import { NbpUploadFilePageComponent } from './pages/composants/nbp-upload-file-page/nbp-upload-file-page.component';
import { NbpTabarPageComponent } from './pages/composants/nbp-tabar-page/nbp-tabar-page.component';
import { NbpFilterFormPageComponent } from './pages/composants/nbp-filter-form-page/nbp-filter-form-page.component';
import { NbpTooltipPageComponent } from './pages/composants/nbp-tooltip-page/nbp-tooltip-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'composants', component: ComposantsComponent,
    children: [
      { path: 'breadcrumbs', component: NbpBreadcrumdPageComponent },
      { path: 'colors', component: NbpColorPageComponent },
      { path: 'textareas', component: NbpTextareaPageComponent },
      { path: 'input-text', component: NbpInputTextPageComponent },
      { path: 'dividing-lines', component: NbpDividingLinePageComponent },
      { path: 'feedbacks', component: NbpFeedbackPageComponent },
      { path: 'background-boxes', component: NbpBackgroundBoxPageComponent },
      { path: 'buttons', component: NbpButtonPageComponent },
      { path: 'alert-boxes', component: NbpAlertBoxPageComponent },
      { path: 'headers', component: NbpHeaderPageComponent },
      { path: 'checkboxes', component: NbpInputCheckboxPageComponent },
      { path: 'radios', component: NbpInputRadioPageComponent },
      { path: 'tables', component: NbpTablePageComponent },
      { path: 'icons', component: NbpIconPageComponent },
      { path: 'badges', component: NbpBadgePageComponent },
      { path: 'typographies', component: NbpTypographyPageComponent },
      { path: 'panel-titles', component: NbpPanelTitlePageComponent },
      { path: 'links', component: NbpLinkPageComponent },
      { path: 'boxes', component: NbpBoxPageComponent },
      { path: 'modals', component: NbpModalPageComponent },
      { path: 'input-switchs', component: NbpInputSwitchPageComponent },
      { path: 'tooltips', component: NbpTooltipPageComponent },
      { path: 'notification-Header', component: NbpNotificationHeaderPageComponent },
      { path: 'comboDropDownList', component: NbpComboDropDownListPageComponent },
      { path: 'date-Picker', component: NbpDatePickerPageComponent },
      { path: 'upload-File', component: NbpUploadFilePageComponent },
      { path: 'tabar', component: NbpTabarPageComponent },
      { path: 'filter-Form', component: NbpFilterFormPageComponent },
    ]
  },
  { path: 'examples', component: ExamplesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: false,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
