import {html, fixture, expect} from '@open-wc/testing';

import {PixelButton} from '.';
import '.';

describe('PixelButton', () => {
  it('should render with default properties', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button text="Click Me"></pixel-button>`
    );
    expect(el.text).to.equal('Click Me');
    expect(el.buttonSize).to.equal('medium');
    expect(el.buttonType).to.equal('main');
    expect(el.disabled).to.equal(false);
  });

  it('should render button text', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button text="Test Button"></pixel-button>`
    );
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.textContent?.trim()).to.contain('Test Button');
  });

  it('should render slotted content', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button>Slot Content</pixel-button>`
    );
    const slot = el.shadowRoot?.querySelector('slot');
    const assignedNodes = slot?.assignedNodes();
    expect(assignedNodes?.[0]?.textContent).to.contain('Slot Content');
  });

  it('should accept button-size attribute', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button text="Small" button-size="small"></pixel-button>`
    );
    expect(el.buttonSize).to.equal('small');
  });

  it('should accept button-type attribute', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button text="Outline" button-type="outline"></pixel-button>`
    );
    expect(el.buttonType).to.equal('outline');
  });

  it('should handle disabled state', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button text="Disabled" disabled></pixel-button>`
    );
    expect(el.disabled).to.equal(true);
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.disabled).to.equal(true);
  });

  it('should not emit button-click when disabled', async () => {
    let clicked = false;
    const el: PixelButton = await fixture(
      html`<pixel-button
        text="Disabled"
        disabled
        @button-click="${() => {
          clicked = true;
        }}"
      ></pixel-button>`
    );
    const button = el.shadowRoot?.querySelector('button');
    button?.click();
    expect(clicked).to.equal(false);
  });

  it('should emit button-click when clicked', async () => {
    let clicked = false;
    const el: PixelButton = await fixture(
      html`<pixel-button
        text="Click"
        @button-click="${() => {
          clicked = true;
        }}"
      ></pixel-button>`
    );
    const button = el.shadowRoot?.querySelector('button');
    button?.click();
    expect(clicked).to.equal(true);
  });

  it('should accept custom-color attribute', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button
        text="Custom"
        custom-color="#05EB57"
      ></pixel-button>`
    );
    expect(el.customColor).to.equal('#05EB57');
  });

  it('should accept round attribute', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button text="Round" round></pixel-button>`
    );
    expect(el.round).to.equal(true);
  });

  it('should accept fullwidth attribute', async () => {
    const el: PixelButton = await fixture(
      html`<pixel-button text="Full" fullwidth></pixel-button>`
    );
    expect(el.fullwidth).to.equal(true);
  });
});
