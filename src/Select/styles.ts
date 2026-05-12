import {css} from 'lit';

export const StyledSelect = css`
  :host {
    display: inline-block;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-select-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .cp-select-container.inline {
    flex-direction: row;
    align-items: center;
  }

  .cp-select-container.disabled {
    cursor: not-allowed;
  }

  .cp-select-label {
    padding: 5px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    color: var(--select-font-color, #1c2924);
  }

  .cp-select-container.inline .cp-select-label {
    padding: 10px 5px;
  }

  .cp-select-wrapper {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .cp-select-display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    min-width: 150px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    background-color: var(--select-bg, #ffffff);
    color: var(--select-font-color, #1c2924);
  }

  .cp-select-display.disabled {
    background-color: var(--select-disabled-bg, #ecddf7);
    color: var(--select-disabled-color, #d7d0d0);
    cursor: not-allowed;
  }

  .cp-select-display-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cp-select-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.4s ease;
    margin-left: 8px;
  }

  .cp-select-icon.open {
    transform: rotate(180deg);
  }

  .cp-select-icon-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cp-select-icon-pixel {
    width: 3px;
    height: 3px;
    background-color: var(--select-icon-color, #1c2924);
  }

  .cp-select-icon-pixel.disabled {
    background-color: var(--select-disabled-bg, #ecddf7);
  }

  .cp-select-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .cp-select-dropdown.open {
    display: block;
  }

  .cp-select-options {
    display: flex;
    flex-direction: column;
    border: 3px solid var(--select-border-color, #1c2924);
    border-top: none;
    background-color: var(--select-bg, #ffffff);
    image-rendering: pixelated;
  }

  .cp-select-option {
    padding: 8px 12px;
    cursor: pointer;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    color: var(--select-font-color, #1c2924);
    background-color: var(--select-bg, #ffffff);
  }

  .cp-select-option:hover {
    background-color: var(--select-hover-bg, #f6f9fc);
  }

  .cp-select-option.selected {
    background-color: var(--select-selected-bg, #e0f0ff);
  }
`;
