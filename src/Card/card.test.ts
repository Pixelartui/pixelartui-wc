import {html, fixture, expect} from '@open-wc/testing';

import {PixelCard} from '.';
import '.';

describe('PixelCard', () => {
  it('should render with default properties', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card><p>Content</p></pixel-card>`
    );
    expect(el.cardTitle).to.equal('');
    expect(el.cardStyle).to.equal('dark');
    expect(el.showFooter).to.equal(false);
  });

  it('should render slotted body content', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card><p>Card content</p></pixel-card>`
    );
    const body = el.shadowRoot?.querySelector('.cp-card-body');
    expect(body).to.not.be.null;
    const slot = body?.querySelector('slot:not([name])');
    expect(slot).to.not.be.null;
  });

  it('should render title when cardTitle is set', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card .cardTitle="${'Card Title'}">
        <p>Content</p>
      </pixel-card>`
    );
    const header = el.shadowRoot?.querySelector('.cp-card-header');
    expect(header).to.not.be.null;
    expect(header?.textContent?.trim()).to.equal('Card Title');
  });

  it('should not render header when cardTitle is not set', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card><p>Content</p></pixel-card>`
    );
    const header = el.shadowRoot?.querySelector('.cp-card-header');
    expect(header).to.be.null;
  });

  it('should render footer when show-footer is set', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card show-footer>
        <p>Content</p>
        <span slot="footer">Footer text</span>
      </pixel-card>`
    );
    const footer = el.shadowRoot?.querySelector('.cp-card-footer');
    expect(footer).to.not.be.null;
  });

  it('should not render footer when show-footer is not set', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card><p>Content</p></pixel-card>`
    );
    const footer = el.shadowRoot?.querySelector('.cp-card-footer');
    expect(footer).to.be.null;
  });

  it('should render body section', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card><p>Content</p></pixel-card>`
    );
    const body = el.shadowRoot?.querySelector('.cp-card-body');
    expect(body).to.not.be.null;
  });

  it('should render with title, body, and footer together', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card .cardTitle="${'Title'}" show-footer>
        <p>Body</p>
        <span slot="footer">Footer</span>
      </pixel-card>`
    );
    const header = el.shadowRoot?.querySelector('.cp-card-header');
    const body = el.shadowRoot?.querySelector('.cp-card-body');
    const footer = el.shadowRoot?.querySelector('.cp-card-footer');
    expect(header).to.not.be.null;
    expect(body).to.not.be.null;
    expect(footer).to.not.be.null;
  });

  it('should accept background-color attribute', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card background-color="#05EB57">
        <p>Content</p>
      </pixel-card>`
    );
    expect(el.backgroundColor).to.equal('#05EB57');
  });

  it('should accept card-style attribute', async () => {
    const el: PixelCard = await fixture(
      html`<pixel-card card-style="light">
        <p>Content</p>
      </pixel-card>`
    );
    expect(el.cardStyle).to.equal('light');
  });
});
