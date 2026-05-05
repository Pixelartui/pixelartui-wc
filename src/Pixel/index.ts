import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledPixel} from './styles';

import {theme} from '../Theme';

export class PixelPixel extends LitElement {
  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @property({type: String})
  width = '5px';

  @property({type: String})
  height = '5px';

  static override styles = [StyledPixel];

  override render() {
    const pixelStyles = styleMap({
      width: this.width,
      height: this.height,
      'background-color':
        this.backgroundColor || theme.general.color.dark,
    });

    return html`<div class="cp-pixel" style="${pixelStyles}"></div>`;
  }
}

customElements.define('pixel-pixel', PixelPixel);
