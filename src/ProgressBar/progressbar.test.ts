import {html, fixture, expect} from '@open-wc/testing';

import {PixelProgressBar} from '.';
import '.';

describe('PixelProgressBar', () => {
  it('should render with default properties', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="50"></pixel-progress-bar>`
    );
    expect(el.value).to.equal(50);
    expect(el.max).to.equal(100);
    expect(el.showValue).to.equal(false);
    expect(el.progressBarStyle).to.equal('dark');
  });

  it('should render with role=progressbar', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="50"></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track).to.not.be.null;
  });

  it('should set correct aria-valuenow', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="75"></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track?.getAttribute('aria-valuenow')).to.equal('75');
  });

  it('should set correct aria-valuemin and aria-valuemax', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="50"></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track?.getAttribute('aria-valuemin')).to.equal('0');
    expect(track?.getAttribute('aria-valuemax')).to.equal('100');
  });

  it('should render label when provided', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar
        value="50"
        label="Upload Progress"
      ></pixel-progress-bar>`
    );
    const label = el.shadowRoot?.querySelector('.cp-progress-bar-label');
    expect(label?.textContent).to.contain('Upload Progress');
  });

  it('should not render label when not provided', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="50"></pixel-progress-bar>`
    );
    const label = el.shadowRoot?.querySelector('.cp-progress-bar-label');
    expect(label).to.be.null;
  });

  it('should render value percentage when show-value is set', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="50" show-value></pixel-progress-bar>`
    );
    const valueEl = el.shadowRoot?.querySelector('.cp-progress-bar-value');
    expect(valueEl?.textContent?.trim()).to.equal('50%');
  });

  it('should not render value when show-value is not set', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="50"></pixel-progress-bar>`
    );
    const valueEl = el.shadowRoot?.querySelector('.cp-progress-bar-value');
    expect(valueEl).to.be.null;
  });

  it('should clamp value to 0 when negative', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="-10"></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track?.getAttribute('aria-valuenow')).to.equal('0');
  });

  it('should clamp value to max when exceeding max', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="150" max="100"></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track?.getAttribute('aria-valuenow')).to.equal('100');
  });

  it('should support custom max value', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="5" max="10"></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track?.getAttribute('aria-valuemax')).to.equal('10');
    expect(track?.getAttribute('aria-valuenow')).to.equal('5');
  });

  it('should use label as aria-label when provided', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar
        value="50"
        label="Download"
      ></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track?.getAttribute('aria-label')).to.equal('Download');
  });

  it('should use default aria-label when no label provided', async () => {
    const el: PixelProgressBar = await fixture(
      html`<pixel-progress-bar value="50"></pixel-progress-bar>`
    );
    const track = el.shadowRoot?.querySelector('[role="progressbar"]');
    expect(track?.getAttribute('aria-label')).to.equal('Progress');
  });
});
