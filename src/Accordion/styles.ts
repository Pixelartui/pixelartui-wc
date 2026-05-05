import {css} from 'lit';

export const StyledAccordion = css`
  :host {
    display: block;
  }

  .cp-accordion-container {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--accordion-border-color, #1c2924);
    font-family: 'Pixelify Sans', monospace;
    image-rendering: pixelated;
    overflow: hidden;
  }

  .cp-accordion-item:not(:last-child) {
    border-bottom: 2px solid var(--accordion-border-color, #1c2924);
  }

  .cp-accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    border: none;
    background-color: var(--accordion-bg, #ffffff);
    color: var(--accordion-header-color, #1c2924);
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
  }

  .cp-accordion-header:hover {
    opacity: 0.8;
  }

  .cp-accordion-header.disabled {
    color: var(--accordion-disabled-color, #d7d0d0);
    cursor: not-allowed;
  }

  .cp-accordion-header.disabled:hover {
    opacity: 1;
  }

  .cp-accordion-icon {
    font-size: 14px;
    transition: transform 0.2s ease;
  }

  .cp-accordion-icon.open {
    transform: rotate(180deg);
  }

  .cp-accordion-panel {
    display: none;
    padding: 12px 16px;
    color: var(--accordion-panel-color, #1c2924);
    border-top: 1px solid var(--accordion-panel-border, #ecddf7);
  }

  .cp-accordion-panel.open {
    display: block;
  }
`;
