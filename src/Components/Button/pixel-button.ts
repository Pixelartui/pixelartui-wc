import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../Container/pixel-container.js';

@customElement('pixel-button')
export class PixelButton extends LitElement {
  override render() {
    return html`
      <pixel-container>
        <button>Click Me!</button>
      </pixel-container>
    `;
  }
}
