import {html, fixture, expect} from '@open-wc/testing';

import {PixelTextArea} from '.';
import '.';

describe('PixelTextArea', () => {
  it('should render with default properties', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area input-name="test"></pixel-text-area>`
    );
    expect(el.inputName).to.equal('test');
    expect(el.textareaType).to.equal('main');
    expect(el.disabled).to.equal(false);
    expect(el.error).to.equal(false);
  });

  it('should render a label when provided', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area
        input-name="test"
        label="Notes"
      ></pixel-text-area>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label?.textContent).to.contain('Notes');
  });

  it('should not render a label when no-label is set', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area
        input-name="test"
        label="Notes"
        no-label
      ></pixel-text-area>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label).to.be.null;
  });

  it('should render helper text when provided', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area
        input-name="test"
        helper-text="Required field"
      ></pixel-text-area>`
    );
    const helper = el.shadowRoot?.querySelector('.cp-textarea-helper');
    expect(helper?.textContent).to.contain('Required field');
  });

  it('should handle disabled state', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area input-name="test" disabled></pixel-text-area>`
    );
    expect(el.disabled).to.equal(true);
    const textarea = el.shadowRoot?.querySelector('textarea');
    expect(textarea?.disabled).to.equal(true);
  });

  it('should emit textarea-change event on input', async () => {
    let eventDetail: {value: string} | null = null;
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area
        input-name="test"
        @textarea-change="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-text-area>`
    );
    const textarea = el.shadowRoot?.querySelector('textarea');
    if (textarea) {
      textarea.value = 'hello world';
      textarea.dispatchEvent(new Event('input', {bubbles: true}));
    }
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.value).to.equal('hello world');
  });

  it('should accept placeholder attribute', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area
        input-name="test"
        placeholder="Write here..."
      ></pixel-text-area>`
    );
    const textarea = el.shadowRoot?.querySelector('textarea');
    expect(textarea?.placeholder).to.equal('Write here...');
  });

  it('should set aria-invalid when error is true', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area input-name="test" error></pixel-text-area>`
    );
    const textarea = el.shadowRoot?.querySelector('textarea');
    expect(textarea?.getAttribute('aria-invalid')).to.equal('true');
  });

  it('should render with inline type', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area
        input-name="test"
        textarea-type="inline"
      ></pixel-text-area>`
    );
    const wrapper = el.shadowRoot?.querySelector('.cp-textarea-wrapper');
    expect(wrapper?.classList.contains('inline')).to.equal(true);
  });

  it('should accept custom-color attribute', async () => {
    const el: PixelTextArea = await fixture(
      html`<pixel-text-area
        input-name="test"
        custom-color="#b13737"
      ></pixel-text-area>`
    );
    expect(el.customColor).to.equal('#b13737');
  });
});
