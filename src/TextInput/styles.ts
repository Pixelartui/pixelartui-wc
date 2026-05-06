import {css} from 'lit';

export const StyledTextInput = css`
  :host {
    display: inline-block;
  }

  :host([fullwidth]) {
    display: block;
  }

  .cp-textinput-wrapper {
    display: flex;
    flex-direction: column;
  }

  .cp-textinput-wrapper.inline {
    flex-direction: row;
    align-items: center;
  }

  .cp-textinput-label {
    display: flex;
    align-items: center;
    padding: 5px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    color: var(--theme-font-color, #1c2924);
  }

  .cp-textinput-input {
    width: 100%;
    height: 100%;
    font-family: 'Pixelify Sans', monospace;
    font-size: var(--input-font-size, 20px);
    border: none;
    background: var(--input-bg, #ffffff);
    color: var(--input-font-color, #1c2924);
    padding: 4px 8px;
    box-sizing: border-box;
    outline: none;
  }

  .cp-textinput-input:disabled {
    cursor: not-allowed;
    background: var(--input-disabled-bg);
  }

  .cp-textinput-input::placeholder {
    color: var(--input-placeholder-color, #999);
    font-style: italic;
  }

  .cp-textinput-helper {
    font-family: 'Pixelify Sans', monospace;
    font-size: 14px;
    padding: 4px 5px;
    color: var(--helper-text-color, #ff0000);
  }
`;
