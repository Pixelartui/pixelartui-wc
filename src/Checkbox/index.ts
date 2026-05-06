import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledCheckbox} from './styles';
import {CheckboxType, CheckboxStyle} from './types';

import '../Box';
import {theme} from '../Theme';

export class PixelCheckbox extends LitElement {
  @property({type: String})
  name = '';

  @property({type: String})
  label = '';

  @property({type: String, attribute: 'checkbox-type'})
  checkboxType: CheckboxType = 'main';

  @property({type: String, attribute: 'checkbox-style'})
  checkboxStyle: CheckboxStyle = 'dark';

  @property({type: Boolean})
  checked = false;

  @property({type: Boolean, attribute: 'no-label'})
  noLabel = false;

  @property({type: String, attribute: 'custom-color'})
  customColor = '';

  @property({type: Boolean})
  disabled = false;

  static override styles = [StyledCheckbox];

  private getBoxBgColor(): string {
    if (this.disabled) return theme.general.color.disabled;
    return theme.general.color.white;
  }

  private getCheckmarkColor(): string {
    if (this.customColor) return theme.general.color.white;
    return theme.general.color.primary;
  }

  private handleChange() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent('checkbox-change', {
        bubbles: true,
        composed: true,
        detail: {checked: this.checked, name: this.name},
      })
    );
  }

  private renderLabel() {
    if (this.noLabel || !this.label) return nothing;
    return html`<label
      class="cp-checkbox-label"
      for="cp-checkbox-${this.name}"
      >${this.label}</label
    >`;
  }

  override render() {
    const containerClasses = classMap({
      'cp-checkbox-container': true,
      inline: this.checkboxType === 'inline',
    });

    const wrapperClasses = classMap({
      'cp-checkbox-wrapper': true,
      disabled: this.disabled,
    });

    const checkmarkClasses = classMap({
      'cp-checkmark': true,
      checked: this.checked,
    });

    const checkmarkStyles = styleMap({
      '--checkmark-color': this.getCheckmarkColor(),
    });

    return html`
      <div class="${containerClasses}">
        ${this.renderLabel()}
        <div class="${wrapperClasses}">
          <pixel-box
            width="24"
            height="24"
            boxStyle="${this.checkboxStyle}"
            customColor="${this.disabled
              ? theme.general.color.disabled
              : this.customColor}"
          >
            <div
              style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: ${this.getBoxBgColor()}"
            >
              <div class="${checkmarkClasses}" style="${checkmarkStyles}"></div>
            </div>
          </pixel-box>
          <input
            class="cp-checkbox-input"
            type="checkbox"
            name="${this.name}"
            id="cp-checkbox-${this.name}"
            .checked="${this.checked}"
            ?disabled="${this.disabled}"
            @change="${this.handleChange}"
            aria-label="${this.label || this.name}"
          />
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-checkbox', PixelCheckbox);
