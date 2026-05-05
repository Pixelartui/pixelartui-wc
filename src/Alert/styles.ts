import {css} from 'lit';

export const StyledAlert = css`
  :host {
    display: block;
    width: 100%;
  }

  .cp-alert-inner {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 16px;
    width: 100%;
    background-color: var(--alert-bg, transparent);
    image-rendering: pixelated;
    font-family: 'Pixelify Sans', monospace;
    box-sizing: border-box;
  }

  .cp-alert-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .cp-alert-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--alert-variant-color, #3b82f6);
  }

  .cp-alert-message {
    font-size: 14px;
    color: var(--alert-message-color, #1c2924);
  }

  .cp-alert-dismiss {
    background: none;
    border: none;
    padding: 0;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: var(--alert-variant-color, #3b82f6);
    line-height: 1;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-alert-dismiss:hover {
    opacity: 0.7;
  }
`;
