import { html, fixture, expect } from '@open-wc/testing';
import '../../../dist/Components/Container/pixel-container';
describe('Component', () => {
    it('should renders child correctly', async () => {
        var _a, _b;
        const child = 'This is a child';
        const el = await fixture(html ` <pixel-container>${child}</pixel-container> `);
        expect((_b = (_a = el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot')) === null || _b === void 0 ? void 0 : _b.assignedNodes()[0].textContent).to.contain(child);
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
//# sourceMappingURL=container.test.js.map