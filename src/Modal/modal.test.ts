import {html, fixture, expect} from '@open-wc/testing';

import {PixelModal} from '.';
import '.';

describe('PixelModal', () => {
  it('should not render when closed', async () => {
    const el: PixelModal = await fixture(
      html`<pixel-modal name="test">Content</pixel-modal>`
    );
    const backdrop = el.shadowRoot!.querySelector('.cp-modal-backdrop');
    expect(backdrop).to.be.null;
  });

  it('should render when open', async () => {
    const el: PixelModal = await fixture(
      html`<pixel-modal open name="test">Content</pixel-modal>`
    );
    const backdrop = el.shadowRoot!.querySelector('.cp-modal-backdrop');
    expect(backdrop).to.not.be.null;
  });

  it('should render header when provided', async () => {
    const el: PixelModal = await fixture(
      html`<pixel-modal open header="Test Header" name="test"
        >Content</pixel-modal
      >`
    );
    const header = el.shadowRoot!.querySelector('.cp-modal-header');
    expect(header).to.not.be.null;
    expect(header!.textContent).to.contain('Test Header');
  });

  it('should not render header when not provided', async () => {
    const el: PixelModal = await fixture(
      html`<pixel-modal open name="test">Content</pixel-modal>`
    );
    const header = el.shadowRoot!.querySelector('.cp-modal-header');
    expect(header).to.be.null;
  });

  it('should render action buttons when provided', async () => {
    const el: PixelModal = await fixture(
      html`<pixel-modal
        open
        name="test"
        .actionButtons=${{left: 'Cancel', right: 'OK'}}
        >Content</pixel-modal
      >`
    );
    const buttons = el.shadowRoot!.querySelectorAll('.cp-modal-action-btn');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.contain('Cancel');
    expect(buttons[1].textContent).to.contain('OK');
  });

  it('should dispatch modal-close on close button click', async () => {
    const el: PixelModal = await fixture(
      html`<pixel-modal open name="test">Content</pixel-modal>`
    );
    let closed = false;
    el.addEventListener('modal-close', () => {
      closed = true;
    });
    const closeBtn = el.shadowRoot!.querySelector('.cp-modal-close');
    (closeBtn as HTMLElement).click();
    expect(closed).to.be.true;
  });

  it('should have proper ARIA attributes', async () => {
    const el: PixelModal = await fixture(
      html`<pixel-modal open header="Dialog" name="test"
        >Content</pixel-modal
      >`
    );
    const backdrop = el.shadowRoot!.querySelector('.cp-modal-backdrop');
    expect(backdrop!.getAttribute('role')).to.equal('dialog');
    expect(backdrop!.getAttribute('aria-modal')).to.equal('true');
  });
});
