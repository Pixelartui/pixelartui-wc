import {html, fixture, expect} from '@open-wc/testing';

import {PixelBadge} from '.';
import '.';

describe('PixelBadge', () => {
  it('should render with default properties', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Test"></pixel-badge>`
    );
    expect(el.text).to.equal('Test');
    expect(el.badgeSize).to.equal('medium');
    expect(el.variant).to.equal('primary');
    expect(el.badgeStyle).to.equal('dark');
    expect(el.dismissible).to.equal(false);
  });

  it('should render the badge text', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Hello"></pixel-badge>`
    );
    const textEl = el.shadowRoot?.querySelector('.cp-badge-text');
    expect(textEl?.textContent?.trim()).to.equal('Hello');
  });

  it('should render with small size', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Small" badge-size="small"></pixel-badge>`
    );
    expect(el.badgeSize).to.equal('small');
    const wrapper = el.shadowRoot?.querySelector('.cp-badge-wrapper');
    expect(wrapper?.classList.contains('small')).to.equal(true);
    const textEl = el.shadowRoot?.querySelector('.cp-badge-text');
    expect(textEl?.classList.contains('small')).to.equal(true);
  });

  it('should render with large size', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Large" badge-size="large"></pixel-badge>`
    );
    expect(el.badgeSize).to.equal('large');
    const wrapper = el.shadowRoot?.querySelector('.cp-badge-wrapper');
    expect(wrapper?.classList.contains('large')).to.equal(true);
  });

  it('should render with success variant', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Success" variant="success"></pixel-badge>`
    );
    expect(el.variant).to.equal('success');
  });

  it('should render with error variant', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Error" variant="error"></pixel-badge>`
    );
    expect(el.variant).to.equal('error');
  });

  it('should render with warning variant', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Warning" variant="warning"></pixel-badge>`
    );
    expect(el.variant).to.equal('warning');
  });

  it('should render with info variant', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Info" variant="info"></pixel-badge>`
    );
    expect(el.variant).to.equal('info');
  });

  it('should not render dismiss button when dismissible is false', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Test"></pixel-badge>`
    );
    const dismissBtn = el.shadowRoot?.querySelector('.cp-badge-dismiss');
    expect(dismissBtn).to.be.null;
  });

  it('should render dismiss button when dismissible is true', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge text="Test" dismissible></pixel-badge>`
    );
    const dismissBtn = el.shadowRoot?.querySelector('.cp-badge-dismiss');
    expect(dismissBtn).to.not.be.null;
    expect(dismissBtn?.getAttribute('aria-label')).to.equal('Dismiss badge');
  });

  it('should emit badge-dismiss event when dismiss button is clicked', async () => {
    let dismissed = false;
    const el: PixelBadge = await fixture(
      html`<pixel-badge
        text="Test"
        dismissible
        @badge-dismiss="${() => {
          dismissed = true;
        }}"
      ></pixel-badge>`
    );
    const dismissBtn =
      el.shadowRoot?.querySelector<HTMLButtonElement>('.cp-badge-dismiss');
    dismissBtn?.click();
    expect(dismissed).to.equal(true);
  });

  it('should render with light style', async () => {
    const el: PixelBadge = await fixture(
      html`<pixel-badge
        text="Light"
        badge-style="light"
      ></pixel-badge>`
    );
    expect(el.badgeStyle).to.equal('light');
  });
});
