import {html, fixture, expect} from '@open-wc/testing';

import {PixelContainer} from './pixel-container';
import '../Container/pixel-container';

describe('Component', () => {
  it('should renders child correctly', async () => {
    const child = 'This is a child';
    const el: PixelContainer = await fixture(
      html` <pixel-container>${child}</pixel-container> `
    );
    expect(
      el.shadowRoot?.querySelector('slot')?.assignedNodes()[0].textContent
    ).to.contain(child);
  });

  //   it('increases the counter on button click', async () => {
  //     const el: MyElement = await fixture(html` <my-element></my-element> `);
  //     el.shadowRoot!.querySelector('button')!.click();

  //     expect(el.counter).to.equal(6);
  //   });

  //   it('can override the title via attribute', async () => {
  //     const el: MyElement = await fixture(html` <my-element title="attribute title"></my-element> `);

  //     expect(el.title).to.equal('attribute title');
  //   });

  //   it('passes the a11y audit', async () => {
  //     const el: MyElement = await fixture(html` <my-element></my-element> `);

  //     await expect(el).shadowDom.to.be.accessible();
  //   });
});
