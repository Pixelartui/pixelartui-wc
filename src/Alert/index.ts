import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledAlert} from './styles';
import {AlertVariant, AlertStyle} from './types';

import '../Box';
import {theme} from '../Theme';

const variantColorMap: Record<AlertVariant, string> = {
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

export class PixelAlert extends LitElement {
  @property({type: String})
  message = '';

  @property({type: String})
  variant: AlertVariant = 'info';

  @property({type: String})
  title = '';

  @property({type: Boolean})
  dismissible = false;

  @property({type: String, attribute: 'alert-style'})
  alertStyle: AlertStyle = 'dark';

  static override styles = [StyledAlert];

  private getVariantColor(): string {
    return variantColorMap[this.variant] || variantColorMap.info;
  }

  private handleDismiss() {
    this.dispatchEvent(
      new CustomEvent('alert-dismiss', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private renderTitle() {
    if (!this.title) return nothing;
    return html`<div class="cp-alert-title">${this.title}</div>`;
  }

  private renderDismissButton() {
    if (!this.dismissible) return nothing;
    return html`<button
      class="cp-alert-dismiss"
      @click="${this.handleDismiss}"
      aria-label="Dismiss alert"
      type="button"
    >
      x
    </button>`;
  }

  override render() {
    const variantColor = this.getVariantColor();

    const innerStyles = styleMap({
      '--alert-bg': `${variantColor}20`,
      '--alert-variant-color': variantColor,
      '--alert-message-color': theme.general.color.font,
    });

    return html`
      <pixel-box
        fullwidth
        boxStyle="${this.alertStyle}"
        customColor="${variantColor}"
      >
        <div class="cp-alert-inner" style="${innerStyles}" role="alert">
          <div class="cp-alert-content">
            ${this.renderTitle()}
            <div class="cp-alert-message">${this.message}</div>
          </div>
          ${this.renderDismissButton()}
        </div>
      </pixel-box>
    `;
  }
}

customElements.define('pixel-alert', PixelAlert);
