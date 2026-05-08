import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledBadge} from './styles';
import {BadgeSize, BadgeStyle, BadgeVariant} from './types';

import '../Box';
import {theme} from '../Theme';

const variantColorMap: Record<string, string> = {
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

export class PixelBadge extends LitElement {
  @property({type: String})
  text = '';

  @property({type: String, attribute: 'badge-size'})
  badgeSize: BadgeSize = 'medium';

  @property({type: String})
  variant: BadgeVariant = 'primary';

  @property({type: String, attribute: 'badge-style'})
  badgeStyle: BadgeStyle = 'dark';

  @property({type: Boolean})
  dismissible = false;

  static override styles = [StyledBadge];

  private getVariantColor(): string {
    return variantColorMap[this.variant] || theme.general.color.primary;
  }

  private handleDismiss() {
    this.dispatchEvent(
      new CustomEvent('badge-dismiss', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private renderDismissButton() {
    if (!this.dismissible) return nothing;

    const classes = classMap({
      'cp-badge-dismiss': true,
      [this.badgeSize]: true,
    });

    return html`<button
      class="${classes}"
      @click="${this.handleDismiss}"
      aria-label="Dismiss badge"
    >
      &times;
    </button>`;
  }

  override render() {
    const wrapperClasses = classMap({
      'cp-badge-wrapper': true,
      [this.badgeSize]: true,
    });

    const textClasses = classMap({
      'cp-badge-text': true,
      [this.badgeSize]: true,
    });

    const textStyles = styleMap({
      '--badge-text-color': this.getVariantColor(),
    });

    return html`
      <div class="${wrapperClasses}">
        <pixel-box
          boxStyle="${this.badgeStyle}"
          customColor="${this.getVariantColor()}"
          round
        >
          <span class="${textClasses}" style="${textStyles}">
            ${this.text}
          </span>
        </pixel-box>
        ${this.renderDismissButton()}
      </div>
    `;
  }
}

customElements.define('pixel-badge', PixelBadge);
