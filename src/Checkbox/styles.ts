import {css} from 'lit';

export const StyledCheckbox = css`
  :host {
    display: inline-block;
  }

  .cp-checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-checkbox-container.inline {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .cp-checkbox-label {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    color: var(--theme-font-color, #1c2924);
  }

  .cp-checkbox-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .cp-checkbox-wrapper.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .cp-checkbox-input {
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

  .cp-checkbox-input:disabled {
    cursor: not-allowed;
  }

  .cp-checkmark {
    width: 12px;
    height: 8px;
    border-left: 3px solid var(--checkmark-color);
    border-bottom: 3px solid var(--checkmark-color);
    transform: rotate(-45deg) translateY(-2px);
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  .cp-checkmark.checked {
    opacity: 1;
  }
`;
