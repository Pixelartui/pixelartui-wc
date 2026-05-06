import {css} from 'lit';

export const StyledRadio = css`
  :host {
    display: inline-block;
  }

  .cp-radio-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-radio-container.inline {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .cp-radio-label {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    color: var(--theme-font-color, #1c2924);
  }

  .cp-radio-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .cp-radio-wrapper.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .cp-radio-input {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    margin: 0;
    cursor: pointer;
  }

  .cp-radio-input:disabled {
    cursor: not-allowed;
  }

  .cp-radio-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--dot-color);
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  .cp-radio-dot.checked {
    opacity: 1;
  }
`;
