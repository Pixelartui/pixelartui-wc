import {css} from 'lit';

export const StyledAvatar = css`
  :host {
    display: inline-block;
  }

  .cp-avatar-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--avatar-border-color, #1c2924);
    background-color: var(--avatar-bg, #04a1e1);
    image-rendering: pixelated;
    font-family: 'Pixelify Sans', monospace;
    overflow: hidden;
  }

  .cp-avatar-container.small {
    width: 32px;
    height: 32px;
  }

  .cp-avatar-container.medium {
    width: 48px;
    height: 48px;
  }

  .cp-avatar-container.large {
    width: 64px;
    height: 64px;
  }

  .cp-avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: pixelated;
  }

  .cp-avatar-initials {
    font-weight: bold;
    color: var(--avatar-text-color, #ffffff);
    text-transform: uppercase;
    user-select: none;
  }

  .cp-avatar-initials.small {
    font-size: 14px;
  }

  .cp-avatar-initials.medium {
    font-size: 18px;
  }

  .cp-avatar-initials.large {
    font-size: 24px;
  }
`;
