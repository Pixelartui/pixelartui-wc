import {html, fixture, expect} from '@open-wc/testing';

import {PixelRadio} from '.';
import '.';

describe('PixelRadio', () => {
  it('should render with default properties', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio name="test" value="v1"></pixel-radio>`
    );
    expect(el.name).to.equal('test');
    expect(el.value).to.equal('v1');
    expect(el.radioType).to.equal('main');
    expect(el.checked).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should render a label when provided', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio
        name="test"
        value="v1"
        label="Option A"
      ></pixel-radio>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label?.textContent).to.contain('Option A');
  });

  it('should not render a label when no-label is set', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio
        name="test"
        value="v1"
        label="Option"
        no-label
      ></pixel-radio>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label).to.be.null;
  });

  it('should accept checked attribute', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio name="test" value="v1" checked></pixel-radio>`
    );
    expect(el.checked).to.equal(true);
    const dot = el.shadowRoot?.querySelector('.cp-radio-dot');
    expect(dot?.classList.contains('checked')).to.equal(true);
  });

  it('should set checked on change', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio name="test" value="v1"></pixel-radio>`
    );
    expect(el.checked).to.equal(false);
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(el.checked).to.equal(true);
  });

  it('should emit radio-change event', async () => {
    let eventDetail: {checked: boolean; name: string; value: string} | null =
      null;
    const el: PixelRadio = await fixture(
      html`<pixel-radio
        name="test"
        value="v1"
        @radio-change="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-radio>`
    );
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.checked).to.equal(true);
    expect(eventDetail!.name).to.equal('test');
    expect(eventDetail!.value).to.equal('v1');
  });

  it('should not change when disabled', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio name="test" value="v1" disabled></pixel-radio>`
    );
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(el.checked).to.equal(false);
  });

  it('should render with inline type', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio
        name="test"
        value="v1"
        radio-type="inline"
      ></pixel-radio>`
    );
    const container = el.shadowRoot?.querySelector('.cp-radio-container');
    expect(container?.classList.contains('inline')).to.equal(true);
  });

  it('should accept custom-color attribute', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio
        name="test"
        value="v1"
        custom-color="#05EB57"
      ></pixel-radio>`
    );
    expect(el.customColor).to.equal('#05EB57');
  });

  it('should use radio input type', async () => {
    const el: PixelRadio = await fixture(
      html`<pixel-radio name="test" value="v1"></pixel-radio>`
    );
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.type).to.equal('radio');
  });
});
