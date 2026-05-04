import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledButton} from './styles';
import {ButtonSize, ButtonType, ButtonStyle} from './types';

import '../Box';
import {theme} from '../Theme';
import {
  isStringHexColor,
  getContrastColor,
  handleCustomColor,
} from '../helper';

const BUTTON_SIZES: Record<ButtonSize, {width: string; height: string}> = {
  small: {width: '60px', height: '30px'},
  medium: {width: '100px', height: '35px'},
  large: {width: '150px', height: '40px'},
};

export class PixelButton extends LitElement {
  @property({type: String})
  text = '';

  @property({type: String, attribute: 'button-size'})
  buttonSize: ButtonSize = 'medium';

  @property({type: String, attribute: 'button-type'})
  buttonType: ButtonType = 'main';

  @property({type: String, attribute: 'button-style'})
  buttonStyle: ButtonStyle = 'dark';

  @property({type: Boolean})
  fullwidth = false;

  @property({type: Boolean})
  round = false;

  @property({type: String, attribute: 'custom-color'})
  customColor = '';

  @property({type: Boolean})
  disabled = false;

  @property({type: String})
  width = '';

  @property({type: String})
  height = '';

  static override styles = [StyledButton];

  private getBoxWidth(): string {
    if (this.width) return this.width;
    return BUTTON_SIZES[this.buttonSize]?.width || BUTTON_SIZES.medium.width;
  }

  private getBoxHeight(): string {
    if (this.height) return this.height;
    return BUTTON_SIZES[this.buttonSize]?.height || BUTTON_SIZES.medium.height;
  }

  private getPrimaryColor(): string {
    if (this.disabled) return theme.general.color.disabled;
    if (this.customColor && isStringHexColor(this.customColor)) {
      return handleCustomColor(this.customColor).customPrimaryColor;
    }
    if (this.buttonType === 'outline') return 'transparent';
    return theme.general.color.primary;
  }

  private getHoverColor(): string {
    if (this.disabled) return theme.general.color.disabled;
    if (this.customColor && isStringHexColor(this.customColor)) {
      return handleCustomColor(this.customColor).customHover;
    }
    if (this.buttonType === 'outline') return '#96969669';
    return theme.general.color.primary;
  }

  private getFontColor(): string {
    if (this.disabled) return theme.general.color.fontLight;

    const bgColor =
      this.customColor && isStringHexColor(this.customColor)
        ? this.customColor
        : this.buttonType === 'outline'
          ? theme.general.color.primary
          : theme.general.color.primary;

    return getContrastColor(
      bgColor,
      theme.general.color.fontLight,
      theme.general.color.font
    );
  }

  private getBoxCustomColor(): string {
    if (this.disabled) return theme.general.color.disabled;
    if (this.customColor && isStringHexColor(this.customColor)) {
      return this.customColor;
    }
    if (this.buttonType === 'outline') return '';
    return '';
  }

  private handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(
      new CustomEvent('button-click', {
        bubbles: true,
        composed: true,
        detail: {originalEvent: e},
      })
    );
  }

  override render() {
    const buttonClasses = classMap({
      'cp-button': true,
      disabled: this.disabled,
      [`cp-button-size-${this.buttonSize}`]: true,
    });

    const buttonStyles = styleMap({
      '--button-bg': this.getPrimaryColor(),
      '--button-bg-hover': this.getHoverColor(),
      '--button-font-color': this.getFontColor(),
    });

    const boxCustomColor = this.getBoxCustomColor();

    return html`
      <pixel-box
        width="${this.getBoxWidth()}"
        height="${this.getBoxHeight()}"
        ?fullwidth="${this.fullwidth}"
        ?round="${this.round}"
        ?disabled="${this.disabled}"
        boxStyle="${this.buttonStyle}"
        customColor="${boxCustomColor}"
      >
        <button
          class="${buttonClasses}"
          style="${buttonStyles}"
          ?disabled="${this.disabled}"
          @click="${this.handleClick}"
          aria-disabled="${this.disabled}"
        >
          ${this.text}<slot></slot>
        </button>
      </pixel-box>
    `;
  }
}

customElements.define('pixel-button', PixelButton);
