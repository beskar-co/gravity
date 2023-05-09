import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

import defaultColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const theme = create({
  base: 'light',
  brandTitle: 'Gravity | Beskar Labs Design System',
  brandUrl: 'https://www.beskar.co/',
  brandImage:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAQAAAChSU5wAAAAy0lEQVR42o2UURHDIBAFVwISkBAJkVAJSKiD4qB1QB1EQiRUAhKQcP3oQGgCHPf+MrNzZHkD1OPYkUYSAUtnHk0kJ2JakB1CgvBsYZuKCcsZchOQsJ+xOIUJ67yMjhhLKp8DbpA7EZ+xUKANbTzpt68Wb1UsIgSg6kVQoezAUP2stssW346iw6u7Dge3fMioQicHa16rzMXBG1Ehd3VgSAT8MEf5fH2J8+WqxkxX+eRgnYK2kal+GoVYVCj02j2WYfu38+k8eK//d+sLrNhTOZmY6zUAAAAASUVORK5CYII=',
  brandTarget: '_self',

  appBg: defaultColors.white,
  appBorderColor: defaultColors.neutral[200],
  appBorderRadius: 0,
  appContentBg: defaultColors.neutral[50],

  barBg: defaultColors.neutral[50],
  barSelectedColor: defaultColors.black,
  barTextColor: defaultColors.black,

  booleanBg: defaultColors.neutral[200],
  booleanSelectedBg: defaultColors.neutral[300],

  buttonBg: defaultColors.neutral[200],
  buttonBorder: defaultColors.neutral[300],

  colorPrimary: defaultColors.black,
  colorSecondary: defaultColors.black,

  fontBase: defaultTheme.fontFamily.sans.join(', '),
  fontCode: defaultTheme.fontFamily.mono.join(', '),

  // gridCellSize: 8,

  inputBg: defaultColors.white,
  inputBorder: defaultColors.neutral[200],
  inputBorderRadius: 4,
  inputTextColor: defaultColors.black,

  textColor: defaultColors.black,
  textInverseColor: defaultColors.neutral[100],
  textMutedColor: defaultColors.neutral[500],
});

addons.setConfig({
  theme,
});
