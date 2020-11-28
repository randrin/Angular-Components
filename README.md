# AngularComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.2.

## Description Components

## 1. NbpDividingLineComponent
The component accepts the following parameters:
1. `nbpTitle`: The title text in the middle of lines
2. `nbpColorTitle`: The color of the lines left and right (See section colors)
3. `nbpColorStyle`: The color of title text in the middle of lines
4. `nbpCta`: Boolean, show or no the cta (call to action) in end of line
5. `nbpCtaReadOnly`: Boolean, the cta is clickable or no
6. `nbpCtaTextShow`: The text to show in cta
7. `nbpCtaTextHide`: The text to show when clicking in cta (nbpCtaReadOnly is true in this case)
8. `nbpOnClickCta`: Event emitter to show/hide cta (in this case, nbpCtaReadOnly will be true)

## 2. NbpBackgroundBoxComponent
The component accepts the following parameters:
1. `nbpTitle`: The title text in the top of box
2. `nbpTitlePosition`: The position of title (left, center, right)
3. `nbpSubTitle`: The text content in the box
4. `nbpBackgroundStyle`: The background color of the box
5. `nbpFontSize`: The font size of the content box
6. `nbpTextTransform`: The text transform of title (Lowercase - default or uppercase)
7. `nbpColorStyle`: The color of the content box

## 3. NbpButtonComponent
The component accepts the following parameters:
1. `nbpLabel`: The text to display in button
2. `nbpColorStyle`: The color button (DEFAULT, PRIMARY, DANGER,...)
3. `nbpStyleType`: The style type of button (ROUNDED, OUTLINE)
4. `nbpSize`: The button size (SM, MD, LG)
5. `nbpDisabled`: Boolean, default is false, the button is read only or no

## 4. NbpAlertBoxComponent
The component accepts the following parameters:
1. `nbpText`: The text to display in alert
2. `nbpClose`: Boolean, default is false, it is possibile to close alert or no
3. `nbpAlertType`: The type of alert (DEFAULT, SUCCESS, INFO, WARNING, DANGER)
4. `nbpColorStyle`: The color text in allert (DEFAULT, PRIMARY, DANGER,...)
4. `nbpClickClose`: Event emitter to close modal (in this case, nbpClose will be true)



Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
