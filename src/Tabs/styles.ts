import {css} from 'lit';

export const StyledTabs = css`
  :host {
    display: block;
    width: 100%;
  }

  .cp-tabs-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-tabs-list {
    display: flex;
    gap: 0;
    border-bottom: 3px solid var(--tabs-border-color, #1c2924);
    align-items: flex-end;
  }

  .cp-tab {
    padding: 8px 16px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    border: 3px solid var(--tabs-border-color, #1c2924);
    border-bottom: 3px solid var(--tabs-border-color, #1c2924);
    background-color: var(--tab-inactive-bg, #f6f9fc);
    color: var(--tabs-text-color, #1c2924);
    cursor: pointer;
    image-rendering: pixelated;
    position: relative;
    clip-path: polygon(
      0 6px,
      3px 6px,
      3px 3px,
      6px 3px,
      6px 0,
      calc(100% - 6px) 0,
      calc(100% - 6px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 6px,
      100% 6px,
      100% 100%,
      0 100%
    );
  }

  .cp-tab:hover {
    background-color: var(--tab-active-bg, #ffffff);
  }

  .cp-tab.active {
    background-color: var(--tab-active-bg, #ffffff);
    border-bottom: none;
    margin-bottom: -3px;
  }

  .cp-tab.disabled {
    background-color: var(--tab-disabled-bg, #ecddf7);
    color: var(--tab-disabled-color, #d7d0d0);
    cursor: not-allowed;
    opacity: 0.5;
  }

  .cp-tab.disabled:hover {
    background-color: var(--tab-disabled-bg, #ecddf7);
  }

  .cp-tab-panel {
    padding: 16px;
    border: 3px solid var(--tabs-border-color, #1c2924);
    border-top: none;
    image-rendering: pixelated;
    color: var(--tabs-text-color, #1c2924);
  }
`;
