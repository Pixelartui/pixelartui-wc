import {css} from 'lit';

export const StyledTooltip = css`
  :host {
    display: inline-flex;
  }

  .cp-tooltip-wrapper {
    position: relative;
    display: inline-flex;
  }

  .cp-tooltip-content {
    position: absolute;
    padding: 8px 12px;
    background-color: var(--tooltip-bg, #1c2924);
    color: var(--tooltip-color, #ffffff);
    font-family: 'Pixelify Sans', monospace;
    font-size: 14px;
    border: 2px solid var(--tooltip-border-color, #000000);
    image-rendering: pixelated;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 1000;
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25);
  }

  .cp-tooltip-content::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  /* Position: top */
  .cp-tooltip-content.top {
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  }

  .cp-tooltip-content.top::after {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--tooltip-bg, #1c2924);
  }

  /* Position: bottom */
  .cp-tooltip-content.bottom {
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  }

  .cp-tooltip-content.bottom::after {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid var(--tooltip-bg, #1c2924);
  }

  /* Position: left */
  .cp-tooltip-content.left {
    right: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  }

  .cp-tooltip-content.left::after {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid var(--tooltip-bg, #1c2924);
  }

  /* Position: right */
  .cp-tooltip-content.right {
    left: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  }

  .cp-tooltip-content.right::after {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid var(--tooltip-bg, #1c2924);
  }

  /* Show on hover/focus */
  .cp-tooltip-wrapper:hover .cp-tooltip-content,
  .cp-tooltip-wrapper:focus-within .cp-tooltip-content {
    opacity: 1;
    visibility: visible;
  }
`;
