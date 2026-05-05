import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledProgressBar} from './styles';
import {ProgressBarStyle} from './types';

import {theme} from '../Theme';

export class PixelProgressBar extends LitElement {
  @property({type: Number})
  value = 0;

  @property({type: Number})
  max = 100;

  @property({type: String})
  label = '';

  @property({type: Boolean, attribute: 'show-value'})
  showValue = false;

  @property({type: String, attribute: 'progress-bar-style'})
  progressBarStyle: ProgressBarStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @property({type: String, attribute: 'fill-color'})
  fillColor = '';

  static override styles = [StyledProgressBar];

  private getClampedValue(): number {
    return Math.min(Math.max(this.value, 0), this.max);
  }

  private getPercentage(): number {
    return (this.getClampedValue() / this.max) * 100;
  }

  private renderLabel() {
    if (!this.label) return nothing;
    return html`<div class="cp-progress-bar-label">${this.label}</div>`;
  }

  private renderValue() {
    if (!this.showValue) return nothing;
    return html`<div class="cp-progress-bar-value">
      ${Math.round(this.getPercentage())}%
    </div>`;
  }

  override render() {
    const isLight = this.progressBarStyle === 'light';
    const borderColor = isLight
      ? theme.general.color.white
      : theme.general.color.dark;
    const labelColor = isLight
      ? theme.general.color.fontLight
      : theme.general.color.font;

    const containerStyles = styleMap({
      '--progress-bar-label-color': labelColor,
      '--progress-bar-value-color': labelColor,
      '--progress-bar-border-color': borderColor,
      '--progress-bar-bg':
        this.backgroundColor || theme.general.color.light,
      '--progress-bar-fill-color':
        this.fillColor || theme.general.color.primary,
    });

    const fillStyles = styleMap({
      width: `${this.getPercentage()}%`,
    });

    return html`
      <div class="cp-progress-bar-container" style="${containerStyles}">
        ${this.renderLabel()}
        <div
          class="cp-progress-bar-track"
          role="progressbar"
          aria-valuenow="${this.getClampedValue()}"
          aria-valuemin="0"
          aria-valuemax="${this.max}"
          aria-label="${this.label || 'Progress'}"
        >
          <div class="cp-progress-bar-fill" style="${fillStyles}"></div>
        </div>
        ${this.renderValue()}
      </div>
    `;
  }
}

customElements.define('pixel-progress-bar', PixelProgressBar);
