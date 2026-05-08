import {css} from 'lit';

export const StyledBreadcrumb = css`
  :host {
    display: block;
  }

  .cp-breadcrumb-container {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
  }

  .cp-breadcrumb-item {
    color: var(--breadcrumb-color, #04a1e1);
  }

  .cp-breadcrumb-item.last {
    color: var(--breadcrumb-text-color, #1c2924);
    font-weight: bold;
  }

  .cp-breadcrumb-link {
    color: var(--breadcrumb-color, #04a1e1);
    text-decoration: none;
    cursor: pointer;
    image-rendering: pixelated;
  }

  .cp-breadcrumb-link:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  .cp-breadcrumb-button {
    background: none;
    border: none;
    padding: 0;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    color: var(--breadcrumb-color, #04a1e1);
    cursor: pointer;
  }

  .cp-breadcrumb-button:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  .cp-breadcrumb-separator {
    color: var(--breadcrumb-text-color, #1c2924);
    user-select: none;
  }
`;
