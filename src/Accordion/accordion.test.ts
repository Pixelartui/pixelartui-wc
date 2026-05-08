import {html, fixture, expect} from '@open-wc/testing';

import {PixelAccordion} from '.';
import '.';

const items = [
  {title: 'Section 1', content: 'Content 1'},
  {title: 'Section 2', content: 'Content 2'},
  {title: 'Section 3', content: 'Content 3', disabled: true},
];

describe('PixelAccordion', () => {
  it('should render with default properties', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    expect(el.allowMultiple).to.equal(false);
    expect(el.accordionStyle).to.equal('dark');
  });

  it('should render all item titles', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    expect(headers?.length).to.equal(3);
    expect(headers?.[0].textContent).to.contain('Section 1');
    expect(headers?.[1].textContent).to.contain('Section 2');
    expect(headers?.[2].textContent).to.contain('Section 3');
  });

  it('should have panels closed by default', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const panels = el.shadowRoot?.querySelectorAll('.cp-accordion-panel');
    panels?.forEach((panel) => {
      expect(panel.classList.contains('open')).to.equal(false);
    });
  });

  it('should open panel on header click', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    (headers?.[0] as HTMLElement)?.click();
    await el.updateComplete;
    const panels = el.shadowRoot?.querySelectorAll('.cp-accordion-panel');
    expect(panels?.[0].classList.contains('open')).to.equal(true);
  });

  it('should close open panel on second click', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    (headers?.[0] as HTMLElement)?.click();
    await el.updateComplete;
    (headers?.[0] as HTMLElement)?.click();
    await el.updateComplete;
    const panels = el.shadowRoot?.querySelectorAll('.cp-accordion-panel');
    expect(panels?.[0].classList.contains('open')).to.equal(false);
  });

  it('should close previous panel when opening another in single mode', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    (headers?.[0] as HTMLElement)?.click();
    await el.updateComplete;
    (headers?.[1] as HTMLElement)?.click();
    await el.updateComplete;
    const panels = el.shadowRoot?.querySelectorAll('.cp-accordion-panel');
    expect(panels?.[0].classList.contains('open')).to.equal(false);
    expect(panels?.[1].classList.contains('open')).to.equal(true);
  });

  it('should allow multiple panels when allow-multiple is set', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion
        .items="${items}"
        allow-multiple
      ></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    (headers?.[0] as HTMLElement)?.click();
    await el.updateComplete;
    (headers?.[1] as HTMLElement)?.click();
    await el.updateComplete;
    const panels = el.shadowRoot?.querySelectorAll('.cp-accordion-panel');
    expect(panels?.[0].classList.contains('open')).to.equal(true);
    expect(panels?.[1].classList.contains('open')).to.equal(true);
  });

  it('should not open disabled item', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    (headers?.[2] as HTMLElement)?.click();
    await el.updateComplete;
    const panels = el.shadowRoot?.querySelectorAll('.cp-accordion-panel');
    expect(panels?.[2].classList.contains('open')).to.equal(false);
  });

  it('should render with defaultOpenIndexes', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion
        .items="${items}"
        .defaultOpenIndexes="${[0]}"
      ></pixel-accordion>`
    );
    const panels = el.shadowRoot?.querySelectorAll('.cp-accordion-panel');
    expect(panels?.[0].classList.contains('open')).to.equal(true);
    expect(panels?.[1].classList.contains('open')).to.equal(false);
  });

  it('should emit accordion-change on toggle', async () => {
    let eventDetail: {openIndexes: number[]} | null = null;
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion
        .items="${items}"
        @accordion-change="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    (headers?.[0] as HTMLElement)?.click();
    await el.updateComplete;
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.openIndexes).to.deep.equal([0]);
  });

  it('should set aria-expanded correctly', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    expect(headers?.[0].getAttribute('aria-expanded')).to.equal('false');
    (headers?.[0] as HTMLElement)?.click();
    await el.updateComplete;
    expect(headers?.[0].getAttribute('aria-expanded')).to.equal('true');
  });

  it('should set aria-disabled on disabled items', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const headers = el.shadowRoot?.querySelectorAll('.cp-accordion-header');
    expect(headers?.[2].getAttribute('aria-disabled')).to.equal('true');
  });

  it('should render panels with role=region', async () => {
    const el: PixelAccordion = await fixture(
      html`<pixel-accordion .items="${items}"></pixel-accordion>`
    );
    const regions = el.shadowRoot?.querySelectorAll('[role="region"]');
    expect(regions?.length).to.equal(items.length);
  });
});
