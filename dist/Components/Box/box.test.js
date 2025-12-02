import { html, fixture, expect } from '@open-wc/testing';
import '../../../dist/Components/Box/pixel-box';
describe('Component', () => {
    it('should renders child correctly', async () => {
        var _a, _b;
        const child = 'This is a child box';
        const el = await fixture(html ` <pixel-box>${child}</pixel-box> `);
        expect((_b = (_a = el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot')) === null || _b === void 0 ? void 0 : _b.assignedNodes()[0].textContent).to.contain(child);
    });
});
//# sourceMappingURL=box.test.js.map