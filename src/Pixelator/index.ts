import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledPixelator} from './styles';
import {PixelData} from './types';

export class PixelPixelator extends LitElement {
  @property({type: Number, attribute: 'pixel-per-row'})
  pixelPerRow = 10;

  @property({type: Number, attribute: 'pixel-per-col'})
  pixelPerCol = 10;

  @property({type: Number, attribute: 'pixel-size'})
  pixelSize = 10;

  @property({type: Boolean})
  showgrid = false;

  @property({type: Object})
  pixels: PixelData = {};

  static override styles = [StyledPixelator];

  private renderGrid() {
    if (!this.showgrid) return '';

    const gridStyles = styleMap({
      width: `${this.pixelPerRow * this.pixelSize}px`,
      height: `${this.pixelPerCol * this.pixelSize}px`,
      'grid-template-columns': `repeat(${this.pixelPerRow}, ${this.pixelSize}px)`,
      'grid-template-rows': `repeat(${this.pixelPerCol}, ${this.pixelSize}px)`,
    });

    const totalCells = this.pixelPerRow * this.pixelPerCol;
    const cells = [];
    for (let i = 0; i < totalCells; i++) {
      const row = Math.floor(i / this.pixelPerRow);
      const col = i % this.pixelPerRow;
      const isLight = (row + col) % 2 === 0;
      cells.push(html`<div
        class="${classMap({
          'cp-pixelator-grid': true,
          light: isLight,
          dark: !isLight,
        })}"
      ></div>`);
    }

    return html`
      <div class="cp-pixelator-grid-wrapper" style="${gridStyles}">
        ${cells}
      </div>
    `;
  }

  override render() {
    const containerStyles = styleMap({
      width: `${this.pixelPerRow * this.pixelSize}px`,
      height: `${this.pixelPerCol * this.pixelSize}px`,
    });

    const pixelWrapperStyles = styleMap({
      'grid-template-columns': `repeat(${this.pixelPerRow}, ${this.pixelSize}px)`,
      'grid-template-rows': `repeat(${this.pixelPerCol}, ${this.pixelSize}px)`,
    });

    const totalCells = this.pixelPerRow * this.pixelPerCol;
    const pixelCells = [];
    for (let i = 0; i < totalCells; i++) {
      const color = this.pixels[i]?.color || 'transparent';
      pixelCells.push(html`<div
        class="cp-pixelator-pixel"
        style="${styleMap({
          width: `${this.pixelSize}px`,
          height: `${this.pixelSize}px`,
          'background-color': color,
        })}"
      ></div>`);
    }

    return html`
      <div class="cp-pixelator-container" style="${containerStyles}">
        ${this.renderGrid()}
        <div class="cp-pixelator-pixel-wrapper" style="${pixelWrapperStyles}">
          ${pixelCells}
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-pixelator', PixelPixelator);
