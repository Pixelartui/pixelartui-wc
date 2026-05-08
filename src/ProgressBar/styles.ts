import {css} from 'lit';

export const StyledProgressBar = css`
  :host {
    display: block;
    width: 100%;
  }

  .cp-progress-bar-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-progress-bar-label {
    font-size: 14px;
    font-weight: bold;
    color: var(--progress-bar-label-color, #1c2924);
  }

  .cp-progress-bar-track {
    position: relative;
    width: 100%;
    height: 24px;
    background-color: var(--progress-bar-bg, #f6f9fc);
    border: 2px solid var(--progress-bar-border-color, #1c2924);
    image-rendering: pixelated;
    overflow: hidden;
    box-sizing: border-box;
  }

  .cp-progress-bar-fill {
    height: 100%;
    background-color: var(--progress-bar-fill-color, #04a1e1);
    transition: width 0.2s ease;
    image-rendering: pixelated;
  }

  .cp-progress-bar-value {
    font-size: 12px;
    color: var(--progress-bar-value-color, #1c2924);
    text-align: right;
  }
`;
