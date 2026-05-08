import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledSlider} from './styles';
import {SliderType, SliderStyle} from './types';

import {theme} from '../Theme';

export class PixelSlider extends LitElement {
  @property({type: String})
  name = '';

  @property({type: String})
  label = '';

  @property({type: String, attribute: 'slider-type'})
  sliderType: SliderType = 'main';

  @property({type: String, attribute: 'slider-style'})
  sliderStyle: SliderStyle = 'dark';

  @property({type: Number})
  min = 0;

  @property({type: Number})
  max = 100;

  @property({type: Number})
  step = 1;

  @property({type: Number})
  value = 0;

  @property({type: Boolean, attribute: 'no-label'})
  noLabel = false;

  @property({type: Boolean, attribute: 'show-value'})
  showValue = true;

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @property({type: Boolean})
  disabled = false;

  static override styles = [StyledSlider];

  private getFillPercentage(): number {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  private getSliderColor(): string {
    if (this.disabled) return theme.general.color.disabled;
    return this.backgroundColor || theme.general.color.primary;
  }

  private handleInput(e: Event) {
    if (this.disabled) return;
    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);
    this.dispatchEvent(
      new CustomEvent('slider-change', {
        bubbles: true,
        composed: true,
        detail: {value: this.value, originalEvent: e},
      })
    );
  }

  private renderLabel() {
    if (this.noLabel || !this.label) return nothing;
    return html`<label
      class="cp-slider-label"
      for="cp-slider-${this.name}"
      >${this.label}</label
    >`;
  }

  private renderValue() {
    if (!this.showValue) return nothing;
    return html`<div class="cp-slider-value">${this.value}</div>`;
  }

  override render() {
    const containerClasses = classMap({
      'cp-slider-container': true,
      [this.sliderType]: true,
    });

    const wrapperClasses = classMap({
      'cp-slider-wrapper': true,
      disabled: this.disabled,
    });

    const fillPercentage = this.getFillPercentage();
    const sliderColor = this.getSliderColor();
    const isLight = this.sliderStyle === 'light';

    const trackStyles = styleMap({
      '--slider-color': sliderColor,
      '--slider-border-color': theme.general.color.black,
      '--slider-label-color': isLight
        ? theme.general.color.fontLight
        : theme.general.color.font,
    });

    const fillStyles = styleMap({
      width: `${fillPercentage}%`,
    });

    const thumbStyles = styleMap({
      left: `calc(${fillPercentage}% - 8px)`,
    });

    return html`
      <div class="${containerClasses}" style="${trackStyles}">
        ${this.renderLabel()}
        <div class="${wrapperClasses}">
          <div class="cp-slider-track">
            <div class="cp-slider-fill" style="${fillStyles}"></div>
            <div class="cp-slider-thumb" style="${thumbStyles}"></div>
          </div>
          <input
            class="cp-slider-input"
            type="range"
            name="${this.name}"
            id="cp-slider-${this.name}"
            min="${this.min}"
            max="${this.max}"
            step="${this.step}"
            .value="${String(this.value)}"
            ?disabled="${this.disabled}"
            @input="${this.handleInput}"
          />
          ${this.renderValue()}
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-slider', PixelSlider);
