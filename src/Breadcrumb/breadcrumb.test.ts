import {html, fixture, expect} from '@open-wc/testing';

import {PixelBreadcrumb} from '.';
import '.';

const items = [
  {label: 'Home', href: '/'},
  {label: 'Products', href: '/products'},
  {label: 'Current Page'},
];

describe('PixelBreadcrumb', () => {
  it('should render with default properties', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    expect(el.separator).to.equal('>');
    expect(el.breadcrumbStyle).to.equal('dark');
  });

  it('should render all breadcrumb items', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    const itemEls = el.shadowRoot?.querySelectorAll('.cp-breadcrumb-item');
    expect(itemEls?.length).to.equal(3);
  });

  it('should render links for non-last items with href', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    const links = el.shadowRoot?.querySelectorAll('.cp-breadcrumb-link');
    expect(links?.length).to.equal(2);
    expect(links?.[0].getAttribute('href')).to.equal('/');
  });

  it('should render last item without a link', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    const lastItem = el.shadowRoot?.querySelectorAll('.cp-breadcrumb-item');
    const last = lastItem?.[lastItem.length - 1];
    expect(last?.querySelector('a')).to.be.null;
    expect(last?.classList.contains('last')).to.equal(true);
  });

  it('should render default separator', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    const separators = el.shadowRoot?.querySelectorAll(
      '.cp-breadcrumb-separator'
    );
    expect(separators?.length).to.equal(2);
    expect(separators?.[0].textContent).to.equal('>');
  });

  it('should render custom separator', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb
        .items="${items}"
        separator="/"
      ></pixel-breadcrumb>`
    );
    const separators = el.shadowRoot?.querySelectorAll(
      '.cp-breadcrumb-separator'
    );
    expect(separators?.[0].textContent).to.equal('/');
  });

  it('should render aria-label on nav', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    const nav = el.shadowRoot?.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).to.equal('Breadcrumb');
  });

  it('should render aria-current on last item', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    const current = el.shadowRoot?.querySelector('[aria-current="page"]');
    expect(current).to.not.be.null;
    expect(current?.textContent).to.equal('Current Page');
  });

  it('should render separators with aria-hidden', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb .items="${items}"></pixel-breadcrumb>`
    );
    const separators = el.shadowRoot?.querySelectorAll(
      '.cp-breadcrumb-separator'
    );
    separators?.forEach((sep) => {
      expect(sep.getAttribute('aria-hidden')).to.equal('true');
    });
  });

  it('should render button for items without href', async () => {
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb
        .items="${[{label: 'Home'}, {label: 'Current'}]}"
      ></pixel-breadcrumb>`
    );
    const button = el.shadowRoot?.querySelector('.cp-breadcrumb-button');
    expect(button).to.not.be.null;
  });

  it('should emit breadcrumb-click on button click', async () => {
    let eventDetail: {index: number} | null = null;
    const el: PixelBreadcrumb = await fixture(
      html`<pixel-breadcrumb
        .items="${[{label: 'Home'}, {label: 'Current'}]}"
        @breadcrumb-click="${(e: CustomEvent) => {
          eventDetail = e.detail;
        }}"
      ></pixel-breadcrumb>`
    );
    const button =
      el.shadowRoot?.querySelector<HTMLButtonElement>('.cp-breadcrumb-button');
    button?.click();
    expect(eventDetail).to.not.be.null;
    expect(eventDetail!.index).to.equal(0);
  });
});
