import {css} from 'lit';

export const StyledBadge = css`
  :host {
    display: inline-block;
  }

  .cp-badge-wrapper {
    display: inline-flex;
    align-items: center;
  }

  .cp-badge-wrapper.small {
    gap: 4px;
  }

  .cp-badge-wrapper.medium {
    gap: 6px;
  }

  .cp-badge-wrapper.large {
    gap: 8px;
  }

  .cp-badge-text {
    font-family: 'Pixelify Sans', monospace;
    font-weight: 600;
    color: var(--badge-text-color, inherit);
  }

  .cp-badge-text.small {
    font-size: 10px;
    padding: 2px 6px;
  }

  .cp-badge-text.medium {
    font-size: 12px;
    padding: 3px 8px;
  }

  .cp-badge-text.large {
    font-size: 14px;
    padding: 4px 10px;
  }

  .cp-badge-dismiss {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    line-height: 1;
    color: inherit;
    opacity: 0.7;
    font-family: 'Pixelify Sans', monospace;
  }

  .cp-badge-dismiss:hover {
    opacity: 1;
  }

  .cp-badge-dismiss:active {
    transform: scale(0.95);
  }

  .cp-badge-dismiss.small {
    font-size: 12px;
  }

  .cp-badge-dismiss.medium {
    font-size: 14px;
  }

  .cp-badge-dismiss.large {
    font-size: 16px;
  }
`;
