import {html, fixture, expect} from '@open-wc/testing';

import {PixelPixelator} from '.';
import '.';
import {PixelData} from './types';

describe('PixelPixelator', () => {
  it('should render pixel grid', async () => {
    const el: PixelPixelator = await fixture(
      html`<pixel-pixelator
        pixel-per-row="3"
        pixel-per-col="3"
        pixel-size="10"
      ></pixel-pixelator>`
    );
    const pixels = el.shadowRoot!.querySelectorAll('.cp-pixelator-pixel');
    expect(pixels.length).to.equal(9);
  });

  it('should render with correct container size', async () => {
    const el: PixelPixelator = await fixture(
      html`<pixel-pixelator
        pixel-per-row="5"
        pixel-per-col="4"
        pixel-size="10"
      ></pixel-pixelator>`
    );
    const container = el.shadowRoot!.querySelector(
      '.cp-pixelator-container'
    ) as HTMLElement;
    expect(container.style.width).to.equal('50px');
    expect(container.style.height).to.equal('40px');
  });

  it('should render grid overlay when showgrid is set', async () => {
    const el: PixelPixelator = await fixture(
      html`<pixel-pixelator
        pixel-per-row="3"
        pixel-per-col="3"
        pixel-size="10"
        showgrid
      ></pixel-pixelator>`
    );
    const gridWrapper = el.shadowRoot!.querySelector(
      '.cp-pixelator-grid-wrapper'
    );
    expect(gridWrapper).to.not.be.null;
    const gridCells = el.shadowRoot!.querySelectorAll('.cp-pixelator-grid');
    expect(gridCells.length).to.equal(9);
  });

  it('should not render grid overlay by default', async () => {
    const el: PixelPixelator = await fixture(
      html`<pixel-pixelator
        pixel-per-row="3"
        pixel-per-col="3"
      ></pixel-pixelator>`
    );
    const gridWrapper = el.shadowRoot!.querySelector(
      '.cp-pixelator-grid-wrapper'
    );
    expect(gridWrapper).to.be.null;
  });

  it('should apply pixel colors from data', async () => {
    const pixels: PixelData = {
      0: {color: '#ff0000'},
      1: {color: '#00ff00'},
    };
    const el: PixelPixelator = await fixture(
      html`<pixel-pixelator
        pixel-per-row="2"
        pixel-per-col="1"
        pixel-size="10"
        .pixels="${pixels}"
      ></pixel-pixelator>`
    );
    const pixelEls = el.shadowRoot!.querySelectorAll('.cp-pixelator-pixel');
    expect((pixelEls[0] as HTMLElement).style.backgroundColor).to.equal(
      'rgb(255, 0, 0)'
    );
    expect((pixelEls[1] as HTMLElement).style.backgroundColor).to.equal(
      'rgb(0, 255, 0)'
    );
  });
});
