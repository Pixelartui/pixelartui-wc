import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../Container/pixel-container.js';
let PixelButton = class PixelButton extends LitElement {
    render() {
        return html `
      <pixel-container>
        <button>Click Me!</button>
      </pixel-container>
    `;
    }
};
PixelButton = __decorate([
    customElement('pixel-button')
], PixelButton);
export { PixelButton };
//# sourceMappingURL=pixel-button.js.map