import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledTextArea} from './styles';
import {TextAreaType, TextAreaStyle} from './types';

import '../Box';
import {theme} from '../Theme';
import {getContrastColor} from '../helper';

export class PixelTextArea extends LitElement {
  @property({type: String, attribute: 'input-name'})
  inputName = '';

  @property({type: String, attribute: 'textarea-type'})
  textareaType: TextAreaType = 'main';

  @property({type: String, attribute: 'textarea-style'})
  textareaStyle: TextAreaStyle = 'dark';

  @property({type: String})
  label = '';

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

  static override styles = [StyledTextArea];

  private getTextareaBg(): string {
    if (this.disabled) return theme.general.color.disabled;
    if (this.customColor) return this.customColor;
    return theme.general.color.white;
  }

  private getTextareaFontColor(): string {
    const bgColor = this.customColor || theme.general.color.white;
    return getContrastColor(
      bgColor,
      theme.general.color.fontLight,
      theme.general.color.font
    );
  }

  private handleInput(e: Event) {
    const textarea = e.target as HTMLTextAreaElement;
    this.value = textarea.value;
    this.dispatchEvent(
      new CustomEvent('textarea-change', {
        bubbles: true,
        composed: true,
        detail: {value: textarea.value, originalEvent: e},
      })
    );
  }

  private renderLabel() {
    if (this.noLabel || !this.label) return nothing;
    return html`<label
      class="cp-textarea-label"
      for="cp-textarea-${this.inputName}"
      >${this.label}</label
    >`;
  }

  private renderHelperText() {
    if (!this.helperText) return nothing;
    return html`<div
      class="cp-textarea-helper"
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
    const containerClasses = classMap({
      'cp-textarea-container': true,
      fullwidth: this.fullwidth,
    });

    const wrapperClasses = classMap({
      'cp-textarea-wrapper': true,
      inline: this.textareaType === 'inline',
    });

    const textareaClasses = classMap({
      'cp-textarea-input': true,
      fullwidth: this.fullwidth,
    });

    const textareaStyles = styleMap({
      '--textarea-bg': this.getTextareaBg(),
      '--textarea-font-color': this.getTextareaFontColor(),
      '--textarea-placeholder-color': this.getTextareaFontColor(),
      '--textarea-disabled-bg': theme.general.color.disabled,
      '--textarea-width':
        this.width || theme.textArea.size.free?.width || '500px',
      '--textarea-height':
        this.height || theme.textArea.size.free?.height || '500px',
    });

    const boxCustomColor = this.error
      ? theme.general.color.error
      : this.customColor;

    return html`
      <div class="${containerClasses}">
        <div class="${wrapperClasses}">
          ${this.renderLabel()}
          <pixel-box
            ?fullwidth="${this.fullwidth}"
            ?error="${this.error}"
            ?disabled="${this.disabled}"
            boxStyle="${this.textareaStyle}"
            customColor="${boxCustomColor}"
          >
            <textarea
              class="${textareaClasses}"
              style="${textareaStyles}"
              id="cp-textarea-${this.inputName}"
              name="${this.inputName}"
              .value="${this.value}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @input="${this.handleInput}"
              aria-label="${this.label || this.inputName}"
              aria-invalid="${this.error}"
            ></textarea>
          </pixel-box>
        </div>
        ${this.renderHelperText()}
      </div>
    `;
  }
}

customElements.define('pixel-text-area', PixelTextArea);
