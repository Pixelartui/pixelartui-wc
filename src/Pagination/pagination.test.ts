import {html, fixture, expect} from '@open-wc/testing';

import {PixelPagination} from '.';
import '.';

describe('PixelPagination', () => {
  it('should render page buttons', async () => {
    const el: PixelPagination = await fixture(
      html`<pixel-pagination total-pages="5"></pixel-pagination>`
    );
    const buttons = el.shadowRoot!.querySelectorAll('.cp-pagination-btn');
    expect(buttons.length).to.equal(7); // prev + 5 pages + next
  });

  it('should highlight active page', async () => {
    const el: PixelPagination = await fixture(
      html`<pixel-pagination total-pages="5"></pixel-pagination>`
    );
    const activeBtn = el.shadowRoot!.querySelector('.cp-pagination-btn.active');
    expect(activeBtn).to.not.be.null;
    expect(activeBtn!.textContent!.trim()).to.equal('1');
  });

  it('should respect default-page', async () => {
    const el: PixelPagination = await fixture(
      html`<pixel-pagination
        total-pages="5"
        default-page="3"
      ></pixel-pagination>`
    );
    const activeBtn = el.shadowRoot!.querySelector('.cp-pagination-btn.active');
    expect(activeBtn!.textContent!.trim()).to.equal('3');
  });

  it('should change page on click', async () => {
    const el: PixelPagination = await fixture(
      html`<pixel-pagination total-pages="5"></pixel-pagination>`
    );
    const buttons = el.shadowRoot!.querySelectorAll('.cp-pagination-btn');
    (buttons[2] as HTMLButtonElement).click(); // click page 2
    await el.updateComplete;
    const activeBtn = el.shadowRoot!.querySelector('.cp-pagination-btn.active');
    expect(activeBtn!.textContent!.trim()).to.equal('2');
  });

  it('should dispatch page-change event', async () => {
    const el: PixelPagination = await fixture(
      html`<pixel-pagination total-pages="5"></pixel-pagination>`
    );
    let eventDetail: {page: number} | null = null;
    el.addEventListener('page-change', ((e: CustomEvent) => {
      eventDetail = e.detail;
    }) as EventListener);
    const buttons = el.shadowRoot!.querySelectorAll('.cp-pagination-btn');
    (buttons[3] as HTMLButtonElement).click(); // click page 3
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.page).to.equal(3);
  });

  it('should disable prev button on first page', async () => {
    const el: PixelPagination = await fixture(
      html`<pixel-pagination total-pages="5"></pixel-pagination>`
    );
    const prevBtn = el.shadowRoot!.querySelector(
      '.cp-pagination-btn'
    ) as HTMLButtonElement;
    expect(prevBtn.disabled).to.be.true;
  });

  it('should show ellipsis for many pages', async () => {
    const el: PixelPagination = await fixture(
      html`<pixel-pagination
        total-pages="20"
        default-page="10"
      ></pixel-pagination>`
    );
    const ellipses = el.shadowRoot!.querySelectorAll('.cp-pagination-ellipsis');
    expect(ellipses.length).to.be.greaterThan(0);
  });
});
