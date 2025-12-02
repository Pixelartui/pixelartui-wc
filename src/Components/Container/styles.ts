import {css, unsafeCSS} from 'lit';
import {theme} from '../../Theme';

export const StyledContainer = css`
  .cp-container {
    --theme-color-primary: ${unsafeCSS(theme.general.color.primary)};
    --theme-color-secondary: ${unsafeCSS(theme.general.color.secondary)};
    --theme-color-tertiary: ${unsafeCSS(theme.general.color.tertiary)};
    --theme-color-disabled: ${unsafeCSS(theme.general.color.disabled)};
    --theme-color-dark: ${unsafeCSS(theme.general.color.dark)};
    --theme-color-light: ${unsafeCSS(theme.general.color.light)};
    --theme-color-black: ${unsafeCSS(theme.general.color.black)};
    --theme-color-white: ${unsafeCSS(theme.general.color.white)};
    --theme-font-color: ${unsafeCSS(theme.general.color.font)};
    --theme-font-color-light: ${unsafeCSS(theme.general.color.fontLight)};
    --theme-font-color-disabled: ${unsafeCSS(theme.general.color.fontDisabled)};
    font-family: 'Pixelify Sans';
    display: flex;
    width: fit-content;
  }

  .fullwidth {
    width: 100%;
  }
`;
