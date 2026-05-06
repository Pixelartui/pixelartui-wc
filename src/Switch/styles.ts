import {css} from 'lit';

export const StyledSwitch = css`
  :host {
    display: inline-block;
  }

  .cp-switch-container {
    display: flex;
    flex-direction: column;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-switch-container.inline {
    flex-direction: row;
    align-items: center;
  }

  .cp-switch-label {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    color: var(--theme-font-color, #1c2924);
  }

  .cp-switch-wrapper {
    display: flex;
    position: relative;
    width: var(--switch-width, 55px);
    background: var(--switch-bg);
    align-items: center;
  }

  .cp-switch-input {
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

  .cp-switch-knob {
    width: 26px;
    height: 26px;
    transition: margin-left 0.15s ease;
    margin-left: 0;
    pointer-events: none;
  }

  .cp-switch-knob.checked {
    margin-left: 27px;
  }
`;
