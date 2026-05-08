import {LitElement, html} from 'lit';
import {property, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledChatPrompt} from './styles';
import {ChatPromptStyle} from './types';

import {theme} from '../Theme';

export class PixelChatPrompt extends LitElement {
  @property({type: String, attribute: 'input-name'})
  inputName = '';

  @property({type: String})
  placeholder = 'Type a message...';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @property({type: Boolean})
  disabled = false;

  @property({type: String, attribute: 'chat-prompt-style'})
  chatPromptStyle: ChatPromptStyle = 'dark';

  @state()
  private internalValue = '';

  static override styles = [StyledChatPrompt];

  private handleInput(e: Event) {
    this.internalValue = (e.target as HTMLTextAreaElement).value;
    this.dispatchEvent(
      new CustomEvent('chat-input', {
        bubbles: true,
        composed: true,
        detail: {value: this.internalValue},
      })
    );
  }

  private handleSend() {
    if (this.disabled || !this.internalValue.trim()) return;
    this.dispatchEvent(
      new CustomEvent('chat-send', {
        bubbles: true,
        composed: true,
        detail: {value: this.internalValue.trim()},
      })
    );
    this.internalValue = '';
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.handleSend();
    }
  }

  override render() {
    const borderColor =
      this.chatPromptStyle === 'dark'
        ? theme.general.color.dark
        : theme.general.color.white;

    const containerStyles = styleMap({
      '--chat-bg': this.backgroundColor || theme.general.color.white,
      '--chat-border-color': borderColor,
      '--chat-font-color': theme.general.color.font,
      '--chat-placeholder-color': theme.general.color.fontDisabled,
      '--chat-btn-bg': theme.general.color.primary,
      '--chat-btn-color': theme.general.color.fontLight,
    });

    return html`
      <div class="cp-chat-prompt-container" style="${containerStyles}">
        <div class="cp-chat-prompt-inner">
          <textarea
            class="cp-chat-prompt-textarea"
            name="${this.inputName}"
            .value="${this.internalValue}"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            rows="1"
            @input="${this.handleInput}"
            @keydown="${this.handleKeyDown}"
          ></textarea>
          <button
            class="cp-chat-prompt-send"
            ?disabled="${this.disabled}"
            @click="${this.handleSend}"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-chat-prompt', PixelChatPrompt);
