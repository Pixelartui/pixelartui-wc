import {html, fixture, expect} from '@open-wc/testing';

import {PixelCheckbox} from '.';
import '.';

describe('PixelCheckbox', () => {
  it('should render with default properties', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox name="test"></pixel-checkbox>`
    );
    expect(el.name).to.equal('test');
    expect(el.checkboxType).to.equal('main');
    expect(el.checked).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should render a label when provided', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox name="test" label="Accept terms"></pixel-checkbox>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label?.textContent).to.contain('Accept terms');
  });

  it('should not render a label when no-label is set', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox
        name="test"
        label="Accept"
        no-label
      ></pixel-checkbox>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label).to.be.null;
  });

  it('should accept checked attribute', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox name="test" checked></pixel-checkbox>`
    );
    expect(el.checked).to.equal(true);
    const checkmark = el.shadowRoot?.querySelector('.cp-checkmark');
    expect(checkmark?.classList.contains('checked')).to.equal(true);
  });

  it('should toggle checked state on change', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox name="test"></pixel-checkbox>`
    );
    expect(el.checked).to.equal(false);
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(el.checked).to.equal(true);
  });

  it('should emit checkbox-change event', async () => {
    let eventDetail: {checked: boolean; name: string} | null = null;
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox
        name="test"
        @checkbox-change="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-checkbox>`
    );
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.checked).to.equal(true);
    expect(eventDetail!.name).to.equal('test');
  });

  it('should not toggle when disabled', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox name="test" disabled></pixel-checkbox>`
    );
    expect(el.checked).to.equal(false);
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(el.checked).to.equal(false);
  });

  it('should render with inline type', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox
        name="test"
        checkbox-type="inline"
      ></pixel-checkbox>`
    );
    const container = el.shadowRoot?.querySelector('.cp-checkbox-container');
    expect(container?.classList.contains('inline')).to.equal(true);
  });

  it('should accept custom-color attribute', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox
        name="test"
        custom-color="#05EB57"
      ></pixel-checkbox>`
    );
    expect(el.customColor).to.equal('#05EB57');
  });

  it('should have disabled class on wrapper when disabled', async () => {
    const el: PixelCheckbox = await fixture(
      html`<pixel-checkbox name="test" disabled></pixel-checkbox>`
    );
    const wrapper = el.shadowRoot?.querySelector('.cp-checkbox-wrapper');
    expect(wrapper?.classList.contains('disabled')).to.equal(true);
  });
});
