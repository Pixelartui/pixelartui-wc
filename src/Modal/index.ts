import {LitElement, html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledModal} from './styles';
import {ActionButtons, ModalStyle} from './types';

import {theme} from '../Theme';
import {adjust} from '../helper';

export class PixelModal extends LitElement {
  @property({type: Boolean})
  open = false;

  @property({type: String})
  header = '';

  @property({type: String})
  name = '';

  @property({type: String, attribute: 'modal-style'})
  modalStyle: ModalStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @property({type: String})
  width = '400px';

  @property({type: String})
  height = '400px';

  @property({type: Boolean})
  disabled = false;

  @property({type: Object, attribute: 'action-buttons'})
  actionButtons: ActionButtons | null = null;

  static override styles = [StyledModal];

  private handleClose() {
    this.dispatchEvent(
      new CustomEvent('modal-close', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleLeftClick() {
    this.dispatchEvent(
      new CustomEvent('modal-action-left', {
        bubbles: true,
        composed: true,
      })
    );
    this.handleClose();
  }

  private handleRightClick() {
    this.dispatchEvent(
      new CustomEvent('modal-action-right', {
        bubbles: true,
        composed: true,
      })
    );
    this.handleClose();
  }

  private handleBackdropClick(e: Event) {
    if ((e.target as HTMLElement).classList.contains('cp-modal-backdrop')) {
      this.handleClose();
    }
  }

  override render() {
    if (!this.open) return nothing;

    const borderColor =
      this.modalStyle === 'dark'
        ? theme.general.color.dark
        : theme.general.color.white;

    const bgColor = this.backgroundColor || theme.general.color.white;
    const btnBg = this.backgroundColor || theme.general.color.primary;

    const containerStyles = styleMap({
      '--modal-bg': bgColor,
      '--modal-border-color': borderColor,
      '--modal-font-color': theme.general.color.font,
      '--modal-hover-bg': theme.general.color.light,
      '--modal-btn-bg': btnBg,
      '--modal-btn-color': theme.general.color.fontLight,
      '--modal-btn-secondary-bg': adjust(btnBg, 40),
    });

    return html`
      <div
        class="cp-modal-backdrop"
        style="${containerStyles}"
        @click="${this.handleBackdropClick}"
        role="dialog"
        aria-modal="true"
        aria-label="${this.header || this.name || 'Modal'}"
      >
        <div
          class="cp-modal-box"
          style="width: ${this.width}; height: ${this.height};"
        >
          <button
            class="cp-modal-close"
            @click="${this.handleClose}"
            aria-label="Close modal"
          >
            X
          </button>
          ${this.header
            ? html`<div class="cp-modal-header">${this.header}</div>`
            : nothing}
          <div class="cp-modal-body">
            <slot></slot>
          </div>
          ${this.actionButtons
            ? html`
                <div class="cp-modal-actions">
                  <button
                    class="cp-modal-action-btn"
                    @click="${this.handleLeftClick}"
                  >
                    ${this.actionButtons.left}
                  </button>
                  <button
                    class="cp-modal-action-btn secondary"
                    @click="${this.handleRightClick}"
                    ?disabled="${this.disabled}"
                  >
                    ${this.actionButtons.right}
                  </button>
                </div>
              `
            : nothing}
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-modal', PixelModal);
