import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledCard} from './styles';
import {CardStyle} from './types';

import {theme} from '../Theme';

export class PixelCard extends LitElement {
  @property({type: String})
  cardTitle = '';

  @property({type: String, attribute: 'card-style'})
  cardStyle: CardStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @property({type: Boolean, attribute: 'show-footer'})
  showFooter = false;

  static override styles = [StyledCard];

  private renderHeader() {
    if (!this.cardTitle) return nothing;
    return html`<div class="cp-card-header">${this.cardTitle}</div>`;
  }

  private renderFooter() {
    if (!this.showFooter) return nothing;
    return html`<div class="cp-card-footer">
      <slot name="footer"></slot>
    </div>`;
  }

  override render() {
    const isLight = this.cardStyle === 'light';
    const containerStyles = styleMap({
      '--card-border-color': isLight
        ? theme.general.color.white
        : theme.general.color.dark,
      '--card-bg':
        this.backgroundColor || theme.general.color.white,
      '--card-text-color': theme.general.color.font,
    });

    return html`
      <div class="cp-card-container" style="${containerStyles}">
        ${this.renderHeader()}
        <div class="cp-card-body">
          <slot></slot>
        </div>
        ${this.renderFooter()}
      </div>
    `;
  }
}

customElements.define('pixel-card', PixelCard);
