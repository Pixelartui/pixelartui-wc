import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { StyledContainer } from './styles';
export class PixelContainer extends LitElement {
    constructor() {
        super(...arguments);
        this.fullwidth = false;
        this.handleclick = (e) => {
            console.log(e);
        };
    }
    handleClick(e) {
        this.handleclick(e);
    }
    render() {
        return html `
      <div
        @click="${this.handleClick}"
        class="cp-container ${this.fullwidth ? 'fullwidth' : ''}"
      >
        <slot></slot>
      </div>
    `;
    }
}
PixelContainer.styles = [StyledContainer];
__decorate([
    property({ type: Boolean })
], PixelContainer.prototype, "fullwidth", void 0);
__decorate([
    property({ attribute: false })
], PixelContainer.prototype, "handleclick", void 0);
customElements.define('pixel-container', PixelContainer);
//# sourceMappingURL=pixel-container.js.map