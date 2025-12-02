import {css} from 'lit';

export const StyledBox = css`
  .cp-box-wrapper {
    display: flex;
  }

  .fullwidth {
    width: 100%;
  }

  .cp-box-side-wrapper {
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .cp-box-side-first {
    display: flex;
    width: 3px;
    background: var(--theme-color-black);
    height: calc(100% - 12px);
  }

  .cp-box-side-round-first {
    display: flex;
    width: 3px;
    background: var(--theme-color-black);
    height: calc(100% - 18px);
  }

  .cp-box-side-second {
    display: flex;
    width: 3px;
    box-sizing: border-box;
    height: calc(100% - 6px);
    border-top: 3px solid var(--theme-color-black);
    border-bottom: 3px solid var(--theme-color-black);
  }

  .cp-box-side-round-second {
    display: flex;
    width: 3px;
    box-sizing: border-box;
    height: calc(100% - 12px);
    border-top: 3px solid var(--theme-color-black);
    border-bottom: 3px solid var(--theme-color-black);
  }

  .cp-box-side-second-inner-left {
    display: flex;
    width: 100%;
    border-bottom: 3px solid var(--theme-color-tertiary);
    background: var(--theme-color-secondary);
  }

  .cp-box-side-second-inner-right {
    display: flex;
    width: 100%;
    border-top: 3px solid var(--theme-color-secondary);
    background: var(--theme-color-tertiary);
  }

  .cp-box-outer {
    display: flex;
    border-top: 3px solid var(--theme-color-black);
    border-bottom: 3px solid var(--theme-color-black);
    width: 100%;
  }

  .cp-box-content-inner {
    display: flex;
    border-top: 3px solid var(--theme-color-secondary);
    border-bottom: 3px solid var(--theme-color-tertiary);
    width: 100%;
  }

  .cp-box-side-second-inner-left {
    display: flex;
    width: 100%;
    border-bottom: 3px solid var(--theme-color-tertiary);
    background: var(--theme-color-secondary);
  }

  .cp-box-side-round-third {
    display: flex;
    width: 3px;
    box-sizing: border-box;
    height: calc(100% - 6px);
    border-top: 3px solid var(--theme-color-black);
    border-bottom: 3px solid var(--theme-color-black);
  }

  .cp-box-side-round-third-inner-left {
    display: flex;
    width: 100%;
    border-bottom: 3px solid var(--theme-color-tertiary);
    border-top: 3px solid var(--theme-color-secondary);
    background: transparent;
  }
`;
