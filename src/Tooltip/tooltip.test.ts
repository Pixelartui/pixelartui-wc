import {html, fixture, expect} from '@open-wc/testing';

import {PixelTooltip} from '.';
import '.';

describe('PixelTooltip', () => {
  it('should render with default properties', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Hello">
        <button>Hover me</button>
      </pixel-tooltip>`
    );
    expect(el.text).to.equal('Hello');
    expect(el.position).to.equal('top');
    expect(el.tooltipStyle).to.equal('dark');
  });

  it('should render tooltip text', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tooltip text">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    const content = el.shadowRoot?.querySelector('.cp-tooltip-content');
    expect(content?.textContent?.trim()).to.equal('Tooltip text');
  });

  it('should render slotted children', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip">
        <button>Click me</button>
      </pixel-tooltip>`
    );
    const slot = el.shadowRoot?.querySelector('slot');
    expect(slot).to.not.be.null;
  });

  it('should render with top position class', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip" position="top">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    const content = el.shadowRoot?.querySelector('.cp-tooltip-content');
    expect(content?.classList.contains('top')).to.equal(true);
  });

  it('should render with bottom position class', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip" position="bottom">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    const content = el.shadowRoot?.querySelector('.cp-tooltip-content');
    expect(content?.classList.contains('bottom')).to.equal(true);
  });

  it('should render with left position class', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip" position="left">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    const content = el.shadowRoot?.querySelector('.cp-tooltip-content');
    expect(content?.classList.contains('left')).to.equal(true);
  });

  it('should render with right position class', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip" position="right">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    const content = el.shadowRoot?.querySelector('.cp-tooltip-content');
    expect(content?.classList.contains('right')).to.equal(true);
  });

  it('should have role=tooltip on content', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    const content = el.shadowRoot?.querySelector('[role="tooltip"]');
    expect(content).to.not.be.null;
  });

  it('should be hidden by default', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    const content = el.shadowRoot?.querySelector(
      '.cp-tooltip-content'
    ) as HTMLElement;
    const computedStyle = window.getComputedStyle(content);
    expect(computedStyle.opacity).to.equal('0');
    expect(computedStyle.visibility).to.equal('hidden');
  });

  it('should accept custom background-color', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip" background-color="#ff5733">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    expect(el.backgroundColor).to.equal('#ff5733');
  });

  it('should accept tooltip-style attribute', async () => {
    const el: PixelTooltip = await fixture(
      html`<pixel-tooltip text="Tip" tooltip-style="light">
        <button>Hover</button>
      </pixel-tooltip>`
    );
    expect(el.tooltipStyle).to.equal('light');
  });
});
