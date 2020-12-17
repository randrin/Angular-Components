export class Model {
  component = {
    NbpColorComponent: {
      colors: [
        {label: 'DEFAULT', name: 'Default', code: '#63666a'},
        {label: 'TOMATO', name: 'Tomato', code: '#d12420'},
        {label: 'WHITE', name: 'White', code: '#ffffff'},
        {label: 'BLACK', name: 'Black', code: '#000000'},
        {label: 'PRIMARY', name: 'Primary', code: '#1775be'},
        {label: 'SUCCESS', name: 'Success', code: '#258900'},
        {label: 'WARM_GRAY_20', name: 'Warm Gray 20', code: '#f3f2ef'},
        {label: 'WARNING', name: 'Warning', code: '#fa9600'},
        {label: 'DANGER', name: 'Danger', code: '#f55854'},
        {label: 'INFO', name: 'Info', code: '#0096c8'},
        {label: 'WHITE_SMOKE', name: 'White Smoke', code: '#f2f2f2'},
        {label: 'NIGHT_RIDER', name: 'Night Rider', code: '#323232'},
        {label: 'SLIVER', name: 'Sliver', code: '#e0e0e1'}
      ]
    },
    NbpButtonComponent: {
      label: 'Button',
      labelHover: 'Button Hover',
      cta: 'My Profil'
    },
    NbpDividingLineComponent: {
      nbpTitle: 'Dividing Line Composant',
      nbpTitleCtaReadOnly: {
        title: 'Dividing Line Composant with Cta read only',
        cta: {
          show: 'My Profil',
          hide: 'Edit Profil'
        }
      },
      nbpTitleCta: {
        title: 'Dividing Line Composant with Cta',
        cta: 'Edit Profil'
      }
    },
    NbpBackgroundBoxComponent: {
      title: 'Background Box Title',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    NbpAlertBoxComponent: {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    NbpFeedbackComponent: {
      title: 'Feedback Title',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    NbpCheckboxComponent: {
      label: 'Privacy Policy',
    },
    NbpInputTextComponent: {
      label1: 'First Name',
      label2: 'Last Name',
      name: 'firstName',
      value: 'Mario Rossi',
      required: 'true',
      requiredMessage: 'The first name is required',
      placeholder: 'Insert your name',
      icon1: 'fa fa-search',
      icon2: 'fa fa-user'
    },
    NbpTextareaComponent: {
      label1: 'Description First Name',
      label2: 'Description Last Name',
      rows: 8,
      name: 'description',
      required: 'true',
      requiredMessage: 'The description name is required',
      placeholder: 'Insert the description name',
    }
  }
}