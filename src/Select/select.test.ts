import {html, fixture, expect} from '@open-wc/testing';

import {PixelSelect} from '.';
import '.';
import {SelectOption} from './types';

const defaultOptions: SelectOption[] = [
  {label: 'Option 1', value: 'opt1'},
  {label: 'Option 2', value: 'opt2'},
  {label: 'Option 3', value: 'opt3'},
];

describe('PixelSelect', () => {
  it('should render with display text', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Select one"
      ></pixel-select>`
    );
    const displayText =
      el.shadowRoot!.querySelector('.cp-select-display-text');
    expect(displayText!.textContent).to.contain('Select one');
  });

  it('should render label when provided', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Pick"
        select-label="My Label"
      ></pixel-select>`
    );
    const label = el.shadowRoot!.querySelector('.cp-select-label');
    expect(label).to.not.be.null;
    expect(label!.textContent).to.contain('My Label');
  });

  it('should hide label when no-label is set', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Pick"
        select-label="Hidden"
        no-label
      ></pixel-select>`
    );
    const label = el.shadowRoot!.querySelector('.cp-select-label');
    expect(label).to.be.null;
  });

  it('should open dropdown on click', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Pick"
      ></pixel-select>`
    );
    const wrapper = el.shadowRoot!.querySelector('.cp-select-wrapper');
    (wrapper as HTMLElement).click();
    await el.updateComplete;
    const dropdown = el.shadowRoot!.querySelector('.cp-select-dropdown');
    expect(dropdown!.classList.contains('open')).to.be.true;
  });

  it('should not open dropdown when disabled', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Pick"
        disabled
      ></pixel-select>`
    );
    const wrapper = el.shadowRoot!.querySelector('.cp-select-wrapper');
    (wrapper as HTMLElement).click();
    await el.updateComplete;
    const dropdown = el.shadowRoot!.querySelector('.cp-select-dropdown');
    expect(dropdown!.classList.contains('open')).to.be.false;
  });

  it('should select option and update display', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Pick"
      ></pixel-select>`
    );
    const wrapper = el.shadowRoot!.querySelector('.cp-select-wrapper');
    (wrapper as HTMLElement).click();
    await el.updateComplete;

    const options = el.shadowRoot!.querySelectorAll('.cp-select-option');
    (options[1] as HTMLElement).click();
    await el.updateComplete;

    const displayText =
      el.shadowRoot!.querySelector('.cp-select-display-text');
    expect(displayText!.textContent).to.contain('Option 2');
  });

  it('should dispatch select-change event', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Pick"
      ></pixel-select>`
    );
    let eventDetail: {value: string; label: string} | null = null;
    el.addEventListener('select-change', ((e: CustomEvent) => {
      eventDetail = e.detail;
    }) as EventListener);

    const wrapper = el.shadowRoot!.querySelector('.cp-select-wrapper');
    (wrapper as HTMLElement).click();
    await el.updateComplete;

    const options = el.shadowRoot!.querySelectorAll('.cp-select-option');
    (options[2] as HTMLElement).click();
    await el.updateComplete;

    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.value).to.equal('opt3');
    expect(eventDetail!.label).to.equal('Option 3');
  });

  it('should render pixel arrow icon', async () => {
    const el: PixelSelect = await fixture(
      html`<pixel-select
        .options="${defaultOptions}"
        display="Pick"
      ></pixel-select>`
    );
    const icon = el.shadowRoot!.querySelector('.cp-select-icon');
    expect(icon).to.not.be.null;
    const pixels = el.shadowRoot!.querySelectorAll('.cp-select-icon-pixel');
    expect(pixels.length).to.equal(6);
  });
});
