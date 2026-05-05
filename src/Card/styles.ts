import {css} from 'lit';

export const StyledCard = css`
  :host {
    display: block;
  }

  .cp-card-container {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--card-border-color, #1c2924);
    background-color: var(--card-bg, #ffffff);
    image-rendering: pixelated;
    font-family: 'Pixelify Sans', monospace;
    overflow: hidden;
  }

  .cp-card-header {
    padding: 12px 16px;
    font-size: 18px;
    font-weight: bold;
    color: var(--card-text-color, #1c2924);
    border-bottom: 2px solid var(--card-border-color, #1c2924);
  }

  .cp-card-body {
    padding: 16px;
    flex: 1;
    color: var(--card-text-color, #1c2924);
  }

  .cp-card-footer {
    padding: 12px 16px;
    border-top: 2px solid var(--card-border-color, #1c2924);
    color: var(--card-text-color, #1c2924);
  }
`;
