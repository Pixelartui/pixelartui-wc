import {html, fixture, expect} from '@open-wc/testing';

import {PixelTabs} from '.';
import '.';
import {TabItem} from './types';

const defaultTabs: TabItem[] = [
  {label: 'Tab 1', content: 'Content for Tab 1'},
  {label: 'Tab 2', content: 'Content for Tab 2'},
  {label: 'Tab 3', content: 'Content for Tab 3'},
];

describe('PixelTabs', () => {
  it('should render tabs', async () => {
    const el: PixelTabs = await fixture(
      html`<pixel-tabs .tabs="${defaultTabs}"></pixel-tabs>`
    );
    const buttons = el.shadowRoot!.querySelectorAll('.cp-tab');
    expect(buttons.length).to.equal(3);
  });

  it('should show first tab content by default', async () => {
    const el: PixelTabs = await fixture(
      html`<pixel-tabs .tabs="${defaultTabs}"></pixel-tabs>`
    );
    const panel = el.shadowRoot!.querySelector('.cp-tab-panel');
    expect(panel!.textContent).to.contain('Content for Tab 1');
  });

  it('should switch tabs on click', async () => {
    const el: PixelTabs = await fixture(
      html`<pixel-tabs .tabs="${defaultTabs}"></pixel-tabs>`
    );
    const buttons = el.shadowRoot!.querySelectorAll('.cp-tab');
    (buttons[1] as HTMLButtonElement).click();
    await el.updateComplete;
    const panel = el.shadowRoot!.querySelector('.cp-tab-panel');
    expect(panel!.textContent).to.contain('Content for Tab 2');
  });

  it('should respect default-active-index', async () => {
    const el: PixelTabs = await fixture(
      html`<pixel-tabs
        .tabs="${defaultTabs}"
        default-active-index="2"
      ></pixel-tabs>`
    );
    const panel = el.shadowRoot!.querySelector('.cp-tab-panel');
    expect(panel!.textContent).to.contain('Content for Tab 3');
  });

  it('should not switch to disabled tab', async () => {
    const tabs: TabItem[] = [
      {label: 'Tab 1', content: 'Content 1'},
      {label: 'Tab 2', content: 'Content 2', disabled: true},
    ];
    const el: PixelTabs = await fixture(
      html`<pixel-tabs .tabs="${tabs}"></pixel-tabs>`
    );
    const buttons = el.shadowRoot!.querySelectorAll('.cp-tab');
    (buttons[1] as HTMLButtonElement).click();
    await el.updateComplete;
    const panel = el.shadowRoot!.querySelector('.cp-tab-panel');
    expect(panel!.textContent).to.contain('Content 1');
  });

  it('should dispatch tab-change event', async () => {
    const el: PixelTabs = await fixture(
      html`<pixel-tabs .tabs="${defaultTabs}"></pixel-tabs>`
    );
    let eventDetail: {index: number} | null = null;
    el.addEventListener('tab-change', ((e: CustomEvent) => {
      eventDetail = e.detail;
    }) as EventListener);
    const buttons = el.shadowRoot!.querySelectorAll('.cp-tab');
    (buttons[2] as HTMLButtonElement).click();
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.index).to.equal(2);
  });

  it('should set aria-selected on active tab', async () => {
    const el: PixelTabs = await fixture(
      html`<pixel-tabs .tabs="${defaultTabs}"></pixel-tabs>`
    );
    const buttons = el.shadowRoot!.querySelectorAll('.cp-tab');
    expect(buttons[0].getAttribute('aria-selected')).to.equal('true');
    expect(buttons[1].getAttribute('aria-selected')).to.equal('false');
  });
});
