import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledTextInput} from './styles';
import {InputType, InputStyle} from './types';

import '../Box';
import {theme} from '../Theme';
import {getContrastColor} from '../helper';

export class PixelTextInput extends LitElement {
  @property({type: String, attribute: 'input-name'})
  inputName = '';

  @property({type: String, attribute: 'input-type'})
  inputType: InputType = 'main';

  @property({type: String, attribute: 'input-style'})
  inputStyle: InputStyle = 'dark';

  @property({type: String, attribute: 'text-label'})
  textLabel = '';

  @property({type: String})
  placeholder = '';

  @property({type: String, attribute: 'custom-color'})
  customColor = '';

  @property({type: Boolean, attribute: 'no-label'})
  noLabel = false;

  @property({type: Boolean})
  error = false;

  @property({type: String, attribute: 'helper-text'})
  helperText = '';

  @property({type: Boolean})
  disabled = false;

  @property({type: String})
  value = '';

  @property({type: String})
  width = '';

  @property({type: String})
  height = '';

  @property({type: Boolean})
  fullwidth = false;

  static override styles = [StyledTextInput];

  private getInputWidth(): string {
    return this.width || theme.textInput.size.free?.width || '200px';
  }

  private getInputHeight(): string {
    return this.height || theme.textInput.size.free?.height || '45px';
  }

  private getInputBg(): string {
    if (this.disabled) return theme.general.color.disabled;
    if (this.customColor) return this.customColor;
    return theme.general.color.white;
  }

  private getInputFontColor(): string {
    const bgColor = this.customColor || theme.general.color.white;
    const fontConfig = theme.textInput.color.main?.normal?.font;
    if (!fontConfig) return theme.general.color.font;
    return getContrastColor(bgColor, fontConfig.bright, fontConfig.dark);
  }

  private handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(
      new CustomEvent('input-change', {
        bubbles: true,
        composed: true,
        detail: {value: input.value, originalEvent: e},
      })
    );
  }

  private renderLabel() {
    if (this.noLabel || !this.textLabel) return nothing;
    return html`<label class="cp-textinput-label" for="${this.inputName}"
      >${this.textLabel}</label
    >`;
  }

  private renderHelperText() {
    if (!this.helperText) return nothing;
    return html`<div
      class="cp-textinput-helper"
      style="${styleMap({
        '--helper-text-color': this.error
          ? theme.general.color.error
          : theme.general.color.font,
      })}"
    >
      ${this.helperText}
    </div>`;
  }

  override render() {
    const wrapperClasses = classMap({
      'cp-textinput-wrapper': true,
      inline: this.inputType === 'inline',
    });

    const inputStyles = styleMap({
      '--input-bg': this.getInputBg(),
      '--input-font-color': this.getInputFontColor(),
      '--input-placeholder-color': this.getInputFontColor(),
      '--input-disabled-bg': theme.general.color.disabled,
      '--input-font-size': theme.textInput.size.free?.fontSize || '20px',
    });

    const boxCustomColor = this.error
      ? theme.general.color.error
      : this.customColor;

    return html`
      <div class="${wrapperClasses}">
        ${this.renderLabel()}
        <pixel-box
          width="${this.getInputWidth()}"
          height="${this.getInputHeight()}"
          ?fullwidth="${this.fullwidth}"
          ?error="${this.error}"
          ?disabled="${this.disabled}"
          boxStyle="${this.inputStyle}"
          customColor="${boxCustomColor}"
        >
          <input
            class="cp-textinput-input"
            style="${inputStyles}"
            id="${this.inputName}"
            name="${this.inputName}"
            .value="${this.value}"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            @input="${this.handleInput}"
            aria-label="${this.textLabel || this.inputName}"
            aria-invalid="${this.error}"
          />
        </pixel-box>
        ${this.inputType !== 'inline' ? this.renderHelperText() : nothing}
      </div>
      ${this.inputType === 'inline' ? this.renderHelperText() : nothing}
    `;
  }
}

customElements.define('pixel-text-input', PixelTextInput);
