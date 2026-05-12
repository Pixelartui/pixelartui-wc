import {LitElement, html, nothing} from 'lit';
import {property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledSelect} from './styles';
import {SelectOption, SelectStyle, SelectType} from './types';

import '../Box';
import {theme} from '../Theme';
import {adjust} from '../helper';

export class PixelSelect extends LitElement {
  @property({type: Array})
  options: SelectOption[] = [];

  @property({type: String})
  display = '';

  @property({type: String, attribute: 'select-name'})
  selectName = '';

  @property({type: String, attribute: 'select-label'})
  selectLabel = '';

  @property({type: Boolean, attribute: 'no-label'})
  noLabel = false;

  @property({type: String, attribute: 'select-type'})
  selectType: SelectType = 'main';

  @property({type: String, attribute: 'select-style'})
  selectStyle: SelectStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @property({type: Boolean})
  disabled = false;

  @property({type: Boolean})
  error = false;

  @state()
  private openDropdown = false;

  @state()
  private selectedValue: string | null = null;

  @state()
  private currentDisplay = '';

  private initialized = false;

  static override styles = [StyledSelect];

  override willUpdate() {
    if (!this.initialized) {
      this.currentDisplay = this.display;
      this.initialized = true;
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this._handleClickOutside = this._handleClickOutside.bind(this);
    document.addEventListener('click', this._handleClickOutside);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleClickOutside);
  }

  private _handleClickOutside(e: Event) {
    const path = e.composedPath();
    if (!path.includes(this)) {
      this.openDropdown = false;
    }
  }

  private toggleDropdown() {
    if (this.disabled) return;
    this.openDropdown = !this.openDropdown;
  }

  private handleOptionClick(option: SelectOption) {
    this.selectedValue = option.value;
    this.currentDisplay = option.label;
    this.openDropdown = false;
    this.dispatchEvent(
      new CustomEvent('select-change', {
        bubbles: true,
        composed: true,
        detail: {value: option.value, label: option.label},
      })
    );
  }

  private renderIcon() {
    const iconClasses = classMap({
      'cp-select-icon': true,
      open: this.openDropdown,
    });
    const pixelClass = classMap({
      'cp-select-icon-pixel': true,
      disabled: !!this.disabled,
    });

    return html`
      <div class="${iconClasses}">
        <div class="cp-select-icon-row">
          <div class="${pixelClass}"></div>
          <div class="${pixelClass}"></div>
          <div class="${pixelClass}"></div>
        </div>
        <div class="cp-select-icon-row">
          <div class="${pixelClass}"></div>
          <div class="${pixelClass}"></div>
        </div>
        <div class="cp-select-icon-row">
          <div class="${pixelClass}"></div>
        </div>
      </div>
    `;
  }

  override render() {
    const bgColor = this.backgroundColor || theme.general.color.white;
    const borderColor =
      this.selectStyle === 'dark'
        ? theme.general.color.dark
        : theme.general.color.white;

    const containerStyles = styleMap({
      '--select-bg': this.disabled
        ? theme.general.color.disabled
        : this.backgroundColor || theme.general.color.white,
      '--select-border-color': borderColor,
      '--select-font-color': theme.general.color.font,
      '--select-disabled-bg': theme.general.color.disabled,
      '--select-disabled-color': theme.general.color.fontDisabled,
      '--select-icon-color': this.disabled
        ? theme.general.color.disabled
        : theme.general.color.dark,
      '--select-hover-bg': this.backgroundColor
        ? adjust(this.backgroundColor, 40)
        : theme.general.color.light,
      '--select-selected-bg': this.backgroundColor
        ? adjust(bgColor, 40)
        : adjust(theme.general.color.primary, 40),
    });

    const containerClasses = classMap({
      'cp-select-container': true,
      inline: this.selectType === 'inline',
      disabled: !!this.disabled,
    });

    const displayClasses = classMap({
      'cp-select-display': true,
      disabled: !!this.disabled,
    });

    const dropdownClasses = classMap({
      'cp-select-dropdown': true,
      open: this.openDropdown,
    });

    return html`
      <div class="${containerClasses}" style="${containerStyles}">
        ${!this.noLabel && this.selectLabel
          ? html`<label class="cp-select-label">${this.selectLabel}</label>`
          : nothing}
        <div class="cp-select-wrapper" @click="${this.toggleDropdown}">
          <pixel-box
            fullwidth
            boxStyle="${this.selectStyle}"
            ?disabled="${this.disabled}"
            ?error="${this.error}"
            customColor="${this.backgroundColor}"
          >
            <div class="${displayClasses}" role="combobox" aria-expanded="${this.openDropdown}" aria-haspopup="listbox">
              <span class="cp-select-display-text">${this.currentDisplay}</span>
              ${this.renderIcon()}
            </div>
          </pixel-box>
          <div class="${dropdownClasses}">
            <div class="cp-select-options" role="listbox">
              ${this.options.map((option) => {
                const optionClasses = classMap({
                  'cp-select-option': true,
                  selected: this.selectedValue === option.value,
                });
                return html`
                  <div
                    class="${optionClasses}"
                    role="option"
                    aria-selected="${this.selectedValue === option.value}"
                    @click="${(e: Event) => {
                      e.stopPropagation();
                      this.handleOptionClick(option);
                    }}"
                  >
                    ${option.label}
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-select', PixelSelect);
