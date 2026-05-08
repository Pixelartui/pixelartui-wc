import {css} from 'lit';

export const StyledSlider = css`
  :host {
    display: block;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-slider-container {
    display: flex;
    gap: 8px;
  }

  .cp-slider-container.main {
    flex-direction: column;
    align-items: flex-start;
  }

  .cp-slider-container.inline {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .cp-slider-label {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    color: var(--slider-label-color, #1c2924);
  }

  .cp-slider-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
  }

  .cp-slider-wrapper.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .cp-slider-track {
    position: relative;
    flex: 1;
    height: 8px;
    image-rendering: pixelated;
    box-shadow: inset 0 0 0 2px var(--slider-color, #04a1e1),
      inset 2px 2px 0 0 rgba(0, 0, 0, 0.25);
  }

  .cp-slider-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: var(--slider-color, #04a1e1);
    transition: width 0.1s ease;
  }

  .cp-slider-thumb {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-color: var(--slider-color, #04a1e1);
    border: 2px solid var(--slider-border-color, #000000);
    image-rendering: pixelated;
    pointer-events: none;
    transition: left 0.1s ease;
    box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.25),
      2px 2px 0 0 rgba(0, 0, 0, 0.125);
  }

  .cp-slider-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
  }

  .cp-slider-input:disabled {
    cursor: not-allowed;
  }

  .cp-slider-value {
    min-width: 40px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: var(--slider-label-color, #1c2924);
  }
`;
