import {css} from 'lit';

export const StyledChatPrompt = css`
  :host {
    display: block;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-chat-prompt-container {
    display: flex;
    width: 100%;
  }

  .cp-chat-prompt-inner {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    width: 100%;
    padding: 8px;
    border: 3px solid var(--chat-border-color, #1c2924);
    background-color: var(--chat-bg, #ffffff);
    image-rendering: pixelated;
    clip-path: polygon(
      0 6px,
      3px 6px,
      3px 3px,
      6px 3px,
      6px 0,
      calc(100% - 6px) 0,
      calc(100% - 6px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 6px,
      100% 6px,
      100% calc(100% - 6px),
      calc(100% - 3px) calc(100% - 6px),
      calc(100% - 3px) calc(100% - 3px),
      calc(100% - 6px) calc(100% - 3px),
      calc(100% - 6px) 100%,
      6px 100%,
      6px calc(100% - 3px),
      3px calc(100% - 3px),
      3px calc(100% - 6px),
      0 calc(100% - 6px)
    );
  }

  .cp-chat-prompt-textarea {
    flex: 1;
    border: none;
    outline: none;
    resize: none;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    color: var(--chat-font-color, #1c2924);
    background: transparent;
    min-height: 24px;
    max-height: 120px;
    overflow-y: auto;
  }

  .cp-chat-prompt-textarea::placeholder {
    color: var(--chat-placeholder-color, #d7d0d0);
  }

  .cp-chat-prompt-textarea:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .cp-chat-prompt-send {
    padding: 4px 12px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    border: 2px solid var(--chat-border-color, #1c2924);
    background-color: var(--chat-btn-bg, #04a1e1);
    color: var(--chat-btn-color, #ffffff);
    cursor: pointer;
    image-rendering: pixelated;
    white-space: nowrap;
  }

  .cp-chat-prompt-send:hover:not(:disabled) {
    opacity: 0.9;
  }

  .cp-chat-prompt-send:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
