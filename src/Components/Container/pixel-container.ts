import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {StyledContainer} from './styles';

export class PixelContainer extends LitElement {
  @property({type: Boolean})
  fullwidth = false;

  @property({attribute: false})
  handleclick = (e: Event) => {
    console.log(e);
  };

  static override styles = [StyledContainer];

  private handleClick(e: Event) {
    this.handleclick(e);
  }

  override render() {
    return html`
      <div
        @click="${this.handleClick}"
        class="cp-container ${this.fullwidth ? 'fullwidth' : ''}"
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('pixel-container', PixelContainer);

declare global {
  interface HTMLElementTagNameMap {
    'pixel-container': PixelContainer;
  }
}
