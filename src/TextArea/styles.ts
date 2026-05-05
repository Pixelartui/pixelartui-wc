import {css} from 'lit';

export const StyledTextArea = css`
  :host {
    display: inline-block;
  }

  :host([fullwidth]) {
    display: block;
  }

  .cp-textarea-container {
    display: flex;
    flex-direction: column;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-textarea-container.fullwidth {
    width: 100%;
  }

  .cp-textarea-wrapper {
    display: flex;
    flex-direction: column;
  }

  .cp-textarea-wrapper.inline {
    flex-direction: row;
  }

  .cp-textarea-label {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    color: var(--theme-font-color, #1c2924);
  }

  .cp-textarea-input {
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    border: none;
    background: var(--textarea-bg, #ffffff);
    color: var(--textarea-font-color, #1c2924);
    padding: 8px;
    box-sizing: border-box;
    outline: none;
    resize: vertical;
    width: var(--textarea-width, 500px);
    height: var(--textarea-height, 500px);
  }

  .cp-textarea-input.fullwidth {
    width: 100%;
  }

  .cp-textarea-input:disabled {
    cursor: not-allowed;
    background: var(--textarea-disabled-bg);
  }

  .cp-textarea-input::placeholder {
    color: var(--textarea-placeholder-color, #999);
    font-style: italic;
  }

  .cp-textarea-helper {
    font-family: 'Pixelify Sans', monospace;
    font-size: 14px;
    padding: 4px 5px;
    color: var(--helper-text-color, #ff0000);
  }
`;
