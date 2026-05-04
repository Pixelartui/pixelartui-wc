import {html, fixture, expect} from '@open-wc/testing';

import {PixelTextInput} from '.';
import '.';

describe('PixelTextInput', () => {
  it('should render with default properties', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input input-name="test"></pixel-text-input>`
    );
    expect(el.inputName).to.equal('test');
    expect(el.inputType).to.equal('main');
    expect(el.disabled).to.equal(false);
    expect(el.error).to.equal(false);
  });

  it('should render a label when textLabel is set', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input
        input-name="test"
        text-label="Username"
      ></pixel-text-input>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label?.textContent).to.contain('Username');
  });

  it('should not render a label when no-label is set', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input
        input-name="test"
        text-label="Username"
        no-label
      ></pixel-text-input>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label).to.be.null;
  });

  it('should render helper text when provided', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input
        input-name="test"
        helper-text="Required field"
      ></pixel-text-input>`
    );
    const helper = el.shadowRoot?.querySelector('.cp-textinput-helper');
    expect(helper?.textContent).to.contain('Required field');
  });

  it('should handle disabled state', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input input-name="test" disabled></pixel-text-input>`
    );
    expect(el.disabled).to.equal(true);
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.disabled).to.equal(true);
  });

  it('should emit input-change event on input', async () => {
    let eventDetail: {value: string} | null = null;
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input
        input-name="test"
        @input-change="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-text-input>`
    );
    const input = el.shadowRoot?.querySelector('input');
    if (input) {
      input.value = 'hello';
      input.dispatchEvent(new Event('input', {bubbles: true}));
    }
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.value).to.equal('hello');
  });

  it('should accept placeholder attribute', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input
        input-name="test"
        placeholder="Enter text..."
      ></pixel-text-input>`
    );
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.placeholder).to.equal('Enter text...');
  });

  it('should accept custom-color attribute', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input
        input-name="test"
        custom-color="#05EB57"
      ></pixel-text-input>`
    );
    expect(el.customColor).to.equal('#05EB57');
  });

  it('should render with inline type', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input
        input-name="test"
        input-type="inline"
      ></pixel-text-input>`
    );
    expect(el.inputType).to.equal('inline');
    const wrapper = el.shadowRoot?.querySelector('.cp-textinput-wrapper');
    expect(wrapper?.classList.contains('inline')).to.equal(true);
  });

  it('should set aria-invalid when error is true', async () => {
    const el: PixelTextInput = await fixture(
      html`<pixel-text-input input-name="test" error></pixel-text-input>`
    );
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.getAttribute('aria-invalid')).to.equal('true');
  });
});
