import {css} from 'lit';

export const StyledButton = css`
  :host {
    display: inline-block;
  }

  :host([fullwidth]) {
    display: block;
  }

  .cp-button {
    cursor: pointer;
    font-family: 'Pixelify Sans', monospace;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--button-bg);
    color: var(--button-font-color);
    font-size: var(--button-font-size, 24px);
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }

  .cp-button:hover:not(.disabled) {
    background: var(--button-bg-hover);
  }

  .cp-button.disabled {
    cursor: not-allowed;
  }

  .cp-button-size-small {
    --button-font-size: 20px;
  }

  .cp-button-size-medium {
    --button-font-size: 24px;
  }

  .cp-button-size-large {
    --button-font-size: 28px;
  }
`;
