import {html, fixture, expect} from '@open-wc/testing';

import {PixelAlert} from '.';
import '.';

describe('PixelAlert', () => {
  it('should render with default properties', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test alert"></pixel-alert>`
    );
    expect(el.message).to.equal('Test alert');
    expect(el.variant).to.equal('info');
    expect(el.dismissible).to.equal(false);
    expect(el.alertStyle).to.equal('dark');
  });

  it('should render alert message', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Hello world"></pixel-alert>`
    );
    const messageEl = el.shadowRoot?.querySelector('.cp-alert-message');
    expect(messageEl?.textContent?.trim()).to.equal('Hello world');
  });

  it('should render title when provided', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert
        message="Test"
        title="Alert Title"
      ></pixel-alert>`
    );
    const titleEl = el.shadowRoot?.querySelector('.cp-alert-title');
    expect(titleEl?.textContent?.trim()).to.equal('Alert Title');
  });

  it('should not render title when not provided', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test"></pixel-alert>`
    );
    const titleEl = el.shadowRoot?.querySelector('.cp-alert-title');
    expect(titleEl).to.be.null;
  });

  it('should render with success variant', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test" variant="success"></pixel-alert>`
    );
    expect(el.variant).to.equal('success');
  });

  it('should render with error variant', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test" variant="error"></pixel-alert>`
    );
    expect(el.variant).to.equal('error');
  });

  it('should render with warning variant', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test" variant="warning"></pixel-alert>`
    );
    expect(el.variant).to.equal('warning');
  });

  it('should render dismiss button when dismissible', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test" dismissible></pixel-alert>`
    );
    const dismissBtn = el.shadowRoot?.querySelector('.cp-alert-dismiss');
    expect(dismissBtn).to.not.be.null;
    expect(dismissBtn?.getAttribute('aria-label')).to.equal('Dismiss alert');
  });

  it('should not render dismiss button when not dismissible', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test"></pixel-alert>`
    );
    const dismissBtn = el.shadowRoot?.querySelector('.cp-alert-dismiss');
    expect(dismissBtn).to.be.null;
  });

  it('should emit alert-dismiss event when dismiss is clicked', async () => {
    let dismissed = false;
    const el: PixelAlert = await fixture(
      html`<pixel-alert
        message="Test"
        dismissible
        @alert-dismiss="${() => {
          dismissed = true;
        }}"
      ></pixel-alert>`
    );
    const dismissBtn =
      el.shadowRoot?.querySelector<HTMLButtonElement>('.cp-alert-dismiss');
    dismissBtn?.click();
    expect(dismissed).to.equal(true);
  });

  it('should have role=alert', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert message="Test"></pixel-alert>`
    );
    const alertEl = el.shadowRoot?.querySelector('[role="alert"]');
    expect(alertEl).to.not.be.null;
  });

  it('should render with light style', async () => {
    const el: PixelAlert = await fixture(
      html`<pixel-alert
        message="Test"
        alert-style="light"
      ></pixel-alert>`
    );
    expect(el.alertStyle).to.equal('light');
  });
});
