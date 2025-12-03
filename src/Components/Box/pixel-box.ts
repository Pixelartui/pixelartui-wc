import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {StyledBox} from './styles';

import '../../Components/Container/pixel-container.js';
import {adjust, isStringHexColor} from '../../helper';
import {theme} from '../../Theme';

export class PixelBox extends LitElement {
  /**
   * Custom width of the box.
   */
  @property({type: String})
  width = '';

  /**
   * Custom height of the box.
   */
  @property({type: String})
  height = '';

  /**
   * The fullwidth setting.
   */
  @property({type: Boolean})
  fullwidth = false;

  /**
   * The round shape setting.
   */
  @property({type: Boolean})
  round = false;

  /**
   * The error state setting.
   */
  @property({type: Boolean})
  error = false;

  /**
   * The disabled state setting.
   */
  @property({type: Boolean})
  disabled = false;

  /**
   * The box style setting.
   */
  @property()
  boxStyle = 'dark';

  /**
   * Custom color of the box.
   */
  @property()
  customColor = '';

  static override styles = [StyledBox];

  getBorderColor() {
    return this.boxStyle === 'dark'
      ? theme.general.color.black
      : theme.general.color.white;
  }

  getCustomColors() {
    if (this.disabled) {
      return {
        customSecondaryColor: adjust(theme.general.color.disabled, 40),
        customTertiaryColor: adjust(theme.general.color.disabled, -30),
      };
    }
    if (this.error) {
      return {
        customSecondaryColor: adjust(theme.general.color.error, 40),
        customTertiaryColor: adjust(theme.general.color.error, -30),
      };
    }
    if (this.customColor && isStringHexColor(this.customColor)) {
      return {
        customSecondaryColor: adjust(this.customColor, 40),
        customTertiaryColor: adjust(this.customColor, -30),
      };
    }

    return {
      customSecondaryColor: '',
      customTertiaryColor: '',
    };
  }

  sideFirst() {
    return html`<div
      style="background-color: ${this.getBorderColor()}"
      class="cp-box-side-first"
    ></div>`;
  }

  sideSecondLeft() {
    const {customSecondaryColor, customTertiaryColor} = this.getCustomColors();
    return html`
      <div
        style="border-color: ${this.getBorderColor()}"
        class="cp-box-side-second"
      >
        <div
          style="border-bottom-color: ${customTertiaryColor}; background-color: ${customSecondaryColor}"
          class="cp-box-side-second-inner-left"
        ></div>
      </div>
    `;
  }
  sideSecondRight() {
    const {customSecondaryColor, customTertiaryColor} = this.getCustomColors();

    return html`
      <div
        style="border-color: ${this.getBorderColor()}"
        class="cp-box-side-second"
      >
        <div
          style="border-top-color: ${customSecondaryColor}; background-color: ${customTertiaryColor}"
          class="cp-box-side-second-inner-right"
        ></div>
      </div>
    `;
  }

  leftSideWrapper() {
    if (this.round) {
      return html`
        <div class="cp-box-side-wrapper">
          ${this.sideRoundFirst()} ${this.sideRoundSecond()}
          ${this.sideRoundThird()}
        </div>
      `;
    }
    return html`
      <div class="cp-box-side-wrapper">
        ${this.sideFirst()} ${this.sideSecondLeft()}
      </div>
    `;
  }

  rightSideWrapper() {
    if (this.round) {
      return html`
        <div class="cp-box-side-wrapper">
          ${this.sideRoundThird()} ${this.sideRoundSecond(true)}
          ${this.sideRoundFirst()}
        </div>
      `;
    }
    return html`
      <div class="cp-box-side-wrapper">
        ${this.sideSecondRight()} ${this.sideFirst()}
      </div>
    `;
  }

  sideRoundThird() {
    const {customSecondaryColor, customTertiaryColor} = this.getCustomColors();

    return html`
      <div
        style="border-color: ${this.getBorderColor()}"
        class="cp-box-side-round-third"
      >
        <div
          style="border-top-color: ${customSecondaryColor}; border-bottom-color: ${customTertiaryColor};"
          class="cp-box-side-round-third-inner-left"
        ></div>
      </div>
    `;
  }

  sideInner(right = false) {
    const {customSecondaryColor, customTertiaryColor} = this.getCustomColors();

    if (right) {
      return html`<div
        style="border-top-color: ${customSecondaryColor}; background-color: ${customTertiaryColor};"
        class="cp-box-side-second-inner-right"
      ></div>`;
    }

    return html`<div
      style="border-bottom-color: ${customTertiaryColor}; background-color: ${customSecondaryColor};"
      class="cp-box-side-second-inner-left"
    ></div>`;
  }

  sideRoundSecond(right = false) {
    return html`
      <div
        style="border-color: ${this.getBorderColor()}"
        class="cp-box-side-round-second"
      >
        ${this.sideInner(right)}
      </div>
    `;
  }

  sideRoundFirst() {
    return html`
      <div
        style="background-color: ${this.getBorderColor()}"
        class="cp-box-side-round-first"
      ></div>
    `;
  }

  mainContent() {
    const {customSecondaryColor, customTertiaryColor} = this.getCustomColors();
    return html`
      <div style="border-color: ${this.getBorderColor()}" class="cp-box-outer">
        <div
          style="border-top-color: ${customSecondaryColor}; border-bottom-color: ${customTertiaryColor};"
          class="cp-box-content-inner"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }

  override render() {
    return html`
      <pixel-container fullwidth="${this.fullwidth}">
        <div
          style="width: ${this.width}px; height: ${this.height}px"
          class="cp-box-wrapper ${this.fullwidth ? 'fullwidth' : ''}"
        >
          ${this.leftSideWrapper()} ${this.mainContent()}
          ${this.rightSideWrapper()}
        </div>
      </pixel-container>
    `;
  }
}

customElements.define('pixel-box', PixelBox);

declare global {
  interface HTMLElementTagNameMap {
    'pixel-box': PixelBox;
  }
}
