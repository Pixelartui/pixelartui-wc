import {css} from 'lit';

export const StyledPagination = css`
  :host {
    display: inline-block;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-pagination-container {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .cp-pagination-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 4px 8px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    border: 3px solid var(--pagination-border-color, #1c2924);
    background-color: var(--pagination-bg, #ffffff);
    color: var(--pagination-font-color, #1c2924);
    cursor: pointer;
    image-rendering: pixelated;
  }

  .cp-pagination-btn:hover:not(:disabled) {
    background-color: var(--pagination-hover-bg, #f6f9fc);
  }

  .cp-pagination-btn.active {
    background-color: var(--pagination-active-bg, #04a1e1);
    color: var(--pagination-active-color, #ffffff);
  }

  .cp-pagination-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .cp-pagination-ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    color: var(--pagination-font-color, #1c2924);
  }
`;
