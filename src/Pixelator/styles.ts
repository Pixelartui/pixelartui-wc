import {css} from 'lit';

export const StyledPixelator = css`
  :host {
    display: inline-block;
  }

  .cp-pixelator-container {
    position: relative;
    image-rendering: pixelated;
  }

  .cp-pixelator-grid-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
  }

  .cp-pixelator-grid {
    box-sizing: border-box;
  }

  .cp-pixelator-grid.light {
    background-color: rgba(200, 200, 200, 0.3);
  }

  .cp-pixelator-grid.dark {
    background-color: rgba(150, 150, 150, 0.3);
  }

  .cp-pixelator-pixel-wrapper {
    position: relative;
    display: grid;
  }

  .cp-pixelator-pixel {
    box-sizing: border-box;
  }
`;
