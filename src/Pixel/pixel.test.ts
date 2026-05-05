import {html, fixture, expect} from '@open-wc/testing';

import {PixelPixel} from '.';
import '.';

describe('PixelPixel', () => {
  it('should render a pixel div', async () => {
    const el: PixelPixel = await fixture(
      html`<pixel-pixel></pixel-pixel>`
    );
    const pixel = el.shadowRoot!.querySelector('.cp-pixel');
    expect(pixel).to.not.be.null;
  });

  it('should have default size', async () => {
    const el: PixelPixel = await fixture(
      html`<pixel-pixel></pixel-pixel>`
    );
    const pixel = el.shadowRoot!.querySelector('.cp-pixel') as HTMLElement;
    expect(pixel.style.width).to.equal('5px');
    expect(pixel.style.height).to.equal('5px');
  });

  it('should accept custom size', async () => {
    const el: PixelPixel = await fixture(
      html`<pixel-pixel width="20px" height="15px"></pixel-pixel>`
    );
    const pixel = el.shadowRoot!.querySelector('.cp-pixel') as HTMLElement;
    expect(pixel.style.width).to.equal('20px');
    expect(pixel.style.height).to.equal('15px');
  });

  it('should accept custom background color', async () => {
    const el: PixelPixel = await fixture(
      html`<pixel-pixel background-color="#ff0000"></pixel-pixel>`
    );
    const pixel = el.shadowRoot!.querySelector('.cp-pixel') as HTMLElement;
    expect(pixel.style.backgroundColor).to.equal('rgb(255, 0, 0)');
  });
});
