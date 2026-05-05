import {html, fixture, expect} from '@open-wc/testing';

import {PixelSwitch} from '.';
import '.';

describe('PixelSwitch', () => {
  it('should render with default properties', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test"></pixel-switch>`
    );
    expect(el.name).to.equal('test');
    expect(el.switchType).to.equal('main');
    expect(el.checked).to.equal(false);
  });

  it('should render a label when provided', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test" label="Toggle Me"></pixel-switch>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label?.textContent).to.contain('Toggle Me');
  });

  it('should not render a label when no-label is set', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test" label="Toggle" no-label></pixel-switch>`
    );
    const label = el.shadowRoot?.querySelector('label');
    expect(label).to.be.null;
  });

  it('should accept checked attribute', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test" checked></pixel-switch>`
    );
    expect(el.checked).to.equal(true);
  });

  it('should toggle checked state on change', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test"></pixel-switch>`
    );
    expect(el.checked).to.equal(false);
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(el.checked).to.equal(true);
  });

  it('should emit switch-change event', async () => {
    let eventDetail: {checked: boolean; name: string} | null = null;
    const el: PixelSwitch = await fixture(
      html`<pixel-switch
        name="test"
        @switch-change="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-switch>`
    );
    const input = el.shadowRoot?.querySelector('input');
    input?.dispatchEvent(new Event('change', {bubbles: true}));
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.checked).to.equal(true);
    expect(eventDetail!.name).to.equal('test');
  });

  it('should render with inline type', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test" switch-type="inline"></pixel-switch>`
    );
    expect(el.switchType).to.equal('inline');
    const container = el.shadowRoot?.querySelector('.cp-switch-container');
    expect(container?.classList.contains('inline')).to.equal(true);
  });

  it('should accept custom-color attribute', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test" custom-color="#05EB57"></pixel-switch>`
    );
    expect(el.customColor).to.equal('#05EB57');
  });

  it('should have role=switch on the input', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test"></pixel-switch>`
    );
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.getAttribute('role')).to.equal('switch');
  });

  it('should apply checked class to knob when checked', async () => {
    const el: PixelSwitch = await fixture(
      html`<pixel-switch name="test" checked></pixel-switch>`
    );
    const knob = el.shadowRoot?.querySelector('.cp-switch-knob');
    expect(knob?.classList.contains('checked')).to.equal(true);
  });
});
