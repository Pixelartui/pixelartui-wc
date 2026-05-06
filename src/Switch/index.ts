import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledSwitch} from './styles';
import {SwitchType, SwitchStyle} from './types';

import '../Box';
import {theme} from '../Theme';
import {getContrastColor} from '../helper';

export class PixelSwitch extends LitElement {
  @property({type: String})
  name = '';

  @property({type: String})
  label = '';

  @property({type: String, attribute: 'switch-type'})
  switchType: SwitchType = 'main';

  @property({type: String, attribute: 'switch-style'})
  switchStyle: SwitchStyle = 'dark';

  @property({type: Boolean})
  checked = false;

  @property({type: Boolean, attribute: 'no-label'})
  noLabel = false;

  @property({type: String, attribute: 'custom-color'})
  customColor = '';

  static override styles = [StyledSwitch];

  private getTrackColor(): string {
    if (this.checked) {
      return this.customColor || theme.general.color.primary;
    }
    return theme.general.color.disabled;
  }

  private getKnobBoxColor(): string {
    if (this.checked) {
      return this.customColor || '';
    }
    return theme.general.color.disabled;
  }

  private getKnobStyle(): SwitchStyle {
    if (!this.checked) return 'dark';
    const bgColor = this.customColor || theme.general.color.primary;
    return getContrastColor(bgColor, 'white', 'black') === 'white'
      ? 'light'
      : 'dark';
  }

  private handleChange() {
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent('switch-change', {
        bubbles: true,
        composed: true,
        detail: {checked: this.checked, name: this.name},
      })
    );
  }

  private renderLabel() {
    if (this.noLabel || !this.label) return nothing;
    return html`<label class="cp-switch-label" for="cp-switch-${this.name}"
      >${this.label}</label
    >`;
  }

  override render() {
    const containerClasses = classMap({
      'cp-switch-container': true,
      inline: this.switchType === 'inline',
    });

    const wrapperStyles = styleMap({
      '--switch-width': theme.switch.size.free?.width || '55px',
      '--switch-bg': this.getTrackColor(),
    });

    const knobClasses = classMap({
      'cp-switch-knob': true,
      checked: this.checked,
    });

    return html`
      <div class="${containerClasses}">
        ${this.renderLabel()}
        <pixel-box
          width="${theme.switch.size.free?.width || '55px'}"
          boxStyle="${this.switchStyle}"
          customColor="${this.getKnobBoxColor()}"
        >
          <div class="cp-switch-wrapper" style="${wrapperStyles}">
            <input
              class="cp-switch-input"
              type="checkbox"
              name="${this.name}"
              id="cp-switch-${this.name}"
              .checked="${this.checked}"
              @change="${this.handleChange}"
              aria-label="${this.label || this.name}"
              role="switch"
              aria-checked="${this.checked}"
            />
            <div class="${knobClasses}">
              <pixel-box
                width="26"
                height="26"
                boxStyle="${this.getKnobStyle()}"
                customColor="${this.getKnobBoxColor()}"
              >
                <div
                  style="width: 100%; height: 100%; background: ${this.getTrackColor()}"
                ></div>
              </pixel-box>
            </div>
          </div>
        </pixel-box>
      </div>
    `;
  }
}

customElements.define('pixel-switch', PixelSwitch);
