import {html, fixture, expect} from '@open-wc/testing';

import {PixelSlider} from '.';
import '.';

describe('PixelSlider', () => {
  it('should render with default properties', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider name="test" label="Test"></pixel-slider>`
    );
    expect(el.name).to.equal('test');
    expect(el.label).to.equal('Test');
    expect(el.min).to.equal(0);
    expect(el.max).to.equal(100);
    expect(el.step).to.equal(1);
    expect(el.value).to.equal(0);
    expect(el.disabled).to.equal(false);
    expect(el.showValue).to.equal(true);
    expect(el.sliderType).to.equal('main');
  });

  it('should render correct name and id on input', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider name="volume" label="Volume"></pixel-slider>`
    );
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.getAttribute('name')).to.equal('volume');
    expect(input?.getAttribute('id')).to.equal('cp-slider-volume');
  });

  it('should render label', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider name="test" label="Volume"></pixel-slider>`
    );
    const label = el.shadowRoot?.querySelector('.cp-slider-label');
    expect(label?.textContent?.trim()).to.equal('Volume');
  });

  it('should not render label when no-label is set', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider name="test" label="Volume" no-label></pixel-slider>`
    );
    const label = el.shadowRoot?.querySelector('.cp-slider-label');
    expect(label).to.be.null;
  });

  it('should render correct min, max, step on input', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider
        name="test"
        label="Test"
        min="10"
        max="50"
        step="5"
      ></pixel-slider>`
    );
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.getAttribute('min')).to.equal('10');
    expect(input?.getAttribute('max')).to.equal('50');
    expect(input?.getAttribute('step')).to.equal('5');
  });

  it('should display current value when show-value is true', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider name="test" label="Test" value="75"></pixel-slider>`
    );
    const valueEl = el.shadowRoot?.querySelector('.cp-slider-value');
    expect(valueEl?.textContent?.trim()).to.equal('75');
  });

  it('should not display value when show-value is false', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider
        name="test"
        label="Test"
        value="50"
        .showValue="${false}"
      ></pixel-slider>`
    );
    const valueEl = el.shadowRoot?.querySelector('.cp-slider-value');
    expect(valueEl).to.be.null;
  });

  it('should emit slider-change on input', async () => {
    let eventDetail: {value: number} | null = null;
    const el: PixelSlider = await fixture(
      html`<pixel-slider
        name="test"
        label="Test"
        @slider-change="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-slider>`
    );
    const input = el.shadowRoot?.querySelector('input');
    if (input) {
      input.value = '75';
      input.dispatchEvent(new Event('input', {bubbles: true}));
    }
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.value).to.equal(75);
  });

  it('should render as disabled', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider name="test" label="Test" disabled></pixel-slider>`
    );
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.disabled).to.equal(true);
    const wrapper = el.shadowRoot?.querySelector('.cp-slider-wrapper');
    expect(wrapper?.classList.contains('disabled')).to.equal(true);
  });

  it('should render with inline type', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider
        name="test"
        label="Test"
        slider-type="inline"
      ></pixel-slider>`
    );
    const container = el.shadowRoot?.querySelector('.cp-slider-container');
    expect(container?.classList.contains('inline')).to.equal(true);
  });

  it('should accept background-color', async () => {
    const el: PixelSlider = await fixture(
      html`<pixel-slider
        name="test"
        label="Test"
        background-color="#05EB57"
      ></pixel-slider>`
    );
    expect(el.backgroundColor).to.equal('#05EB57');
  });
});
