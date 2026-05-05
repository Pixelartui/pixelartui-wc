import {css} from 'lit';

export const StyledModal = css`
  :host {
    display: contents;
  }

  .cp-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-modal-box {
    position: relative;
    background-color: var(--modal-bg, #ffffff);
    border: 3px solid var(--modal-border-color, #1c2924);
    image-rendering: pixelated;
    display: flex;
    flex-direction: column;
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

  .cp-modal-close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: 2px solid var(--modal-border-color, #1c2924);
    color: var(--modal-font-color, #1c2924);
    font-family: 'Pixelify Sans', monospace;
    font-size: 14px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    image-rendering: pixelated;
  }

  .cp-modal-close:hover {
    background-color: var(--modal-hover-bg, #f6f9fc);
  }

  .cp-modal-header {
    padding: 16px 16px 8px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 20px;
    font-weight: bold;
    color: var(--modal-font-color, #1c2924);
    border-bottom: 2px solid var(--modal-border-color, #1c2924);
  }

  .cp-modal-body {
    padding: 16px;
    flex: 1;
    overflow-y: auto;
    color: var(--modal-font-color, #1c2924);
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
  }

  .cp-modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 8px 16px 16px;
    border-top: 2px solid var(--modal-border-color, #1c2924);
  }

  .cp-modal-action-btn {
    padding: 8px 16px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    border: 2px solid var(--modal-border-color, #1c2924);
    cursor: pointer;
    image-rendering: pixelated;
    background-color: var(--modal-btn-bg, #04a1e1);
    color: var(--modal-btn-color, #ffffff);
  }

  .cp-modal-action-btn:hover {
    opacity: 0.9;
  }

  .cp-modal-action-btn.secondary {
    background-color: var(--modal-btn-secondary-bg, #6cd1f3);
  }

  .cp-modal-action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
