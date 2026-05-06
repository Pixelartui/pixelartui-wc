import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledRadio} from './styles';
import {RadioType, RadioStyle} from './types';

import '../Box';
import {theme} from '../Theme';

export class PixelRadio extends LitElement {
  @property({type: String})
  name = '';

  @property({type: String})
  label = '';

  @property({type: String})
  value = '';

  @property({type: String, attribute: 'radio-type'})
  radioType: RadioType = 'main';

  @property({type: String, attribute: 'radio-style'})
  radioStyle: RadioStyle = 'dark';

  @property({type: Boolean})
  checked = false;

  @property({type: Boolean, attribute: 'no-label'})
  noLabel = false;

  @property({type: String, attribute: 'custom-color'})
  customColor = '';

  @property({type: Boolean})
  disabled = false;

  static override styles = [StyledRadio];

  private getDotColor(): string {
    if (this.customColor) return theme.general.color.white;
    return theme.general.color.primary;
  }

  private handleChange() {
    if (this.disabled) return;
    this.checked = true;
    this.dispatchEvent(
      new CustomEvent('radio-change', {
        bubbles: true,
        composed: true,
        detail: {checked: this.checked, name: this.name, value: this.value},
      })
    );
  }

  private renderLabel() {
    if (this.noLabel || !this.label) return nothing;
    return html`<label
      class="cp-radio-label"
      for="cp-radio-${this.name}-${this.value}"
      >${this.label}</label
    >`;
  }

  override render() {
    const containerClasses = classMap({
      'cp-radio-container': true,
      inline: this.radioType === 'inline',
    });

    const wrapperClasses = classMap({
      'cp-radio-wrapper': true,
      disabled: this.disabled,
    });

    const dotClasses = classMap({
      'cp-radio-dot': true,
      checked: this.checked,
    });

    const dotStyles = styleMap({
      '--dot-color': this.getDotColor(),
    });

    return html`
      <div class="${containerClasses}">
        ${this.renderLabel()}
        <div class="${wrapperClasses}">
          <pixel-box
            width="24"
            height="24"
            boxStyle="${this.radioStyle}"
            customColor="${this.disabled
              ? theme.general.color.disabled
              : this.customColor}"
          >
            <div
              style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: ${this.disabled ? theme.general.color.disabled : theme.general.color.white}"
            >
              <div class="${dotClasses}" style="${dotStyles}"></div>
            </div>
          </pixel-box>
          <input
            class="cp-radio-input"
            type="radio"
            name="${this.name}"
            id="cp-radio-${this.name}-${this.value}"
            value="${this.value}"
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

customElements.define('pixel-radio', PixelRadio);
