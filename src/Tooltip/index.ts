import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledTooltip} from './styles';
import {TooltipPosition, TooltipStyle} from './types';

import {theme} from '../Theme';

export class PixelTooltip extends LitElement {
  @property({type: String})
  text = '';

  @property({type: String})
  position: TooltipPosition = 'top';

  @property({type: String, attribute: 'tooltip-style'})
  tooltipStyle: TooltipStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  static override styles = [StyledTooltip];

  private getBackgroundColor(): string {
    if (this.backgroundColor) return this.backgroundColor;
    return this.tooltipStyle === 'dark'
      ? theme.general.color.dark
      : theme.general.color.primary;
  }

  override render() {
    const contentClasses = classMap({
      'cp-tooltip-content': true,
      [this.position]: true,
    });

    const bgColor = this.getBackgroundColor();
    const contentStyles = styleMap({
      '--tooltip-bg': bgColor,
      '--tooltip-color': theme.general.color.fontLight,
      '--tooltip-border-color': theme.general.color.black,
    });

    return html`
      <div class="cp-tooltip-wrapper">
        <slot></slot>
        <div class="${contentClasses}" style="${contentStyles}" role="tooltip">
          ${this.text}
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-tooltip', PixelTooltip);
