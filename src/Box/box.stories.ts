import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelBox',
  tags: ['autodocs'],
  component: 'pixel-box',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    innerText: 'This is a PixelBox',
  },
};

export const PixelBoxCustomSize: Story = {
  args: {
    ...Default.args,
    width: '200',
    height: '80',
  },
  render: (args) =>
    html`<pixel-box width="${args.width}" height="${args.height}"
      >${args.innerText}</pixel-box
    >`,
};

// export const PixelBoxFullwidth: Story = {
//   args: {
//     ...Default.args,
//     fullwidth: true,
//   },
//   render: (args) =>
//     html`<pixel-box ${args.fullwidth ? {fullwidth: true} : ''}
//       >${args.innerText}</pixel-box
//     >`,
// };

// export const PixelBoxRound: Story = {
//   args: {
//     ...Default.args,
//     round: true,
//   },
//   render: (args) =>
//     html`<pixel-box ${args.round ? 'round' : ''}>${args.innerText}</pixel-box>`,
// };

// export const PixelBoxError: Story = {
//   args: {
//     ...Default.args,
//     error: true,
//   },
//   render: (args) =>
//     html`<pixel-box ${args.error ? 'error' : ''}>${args.innerText}</pixel-box>`,
// };

// export const PixelBoxDisabled: Story = {
//   args: {
//     ...Default.args,
//     disabled: true,
//   },
//   render: (args) =>
//     html`<pixel-box ${args.disabled ? 'disabled' : ''}
//       >${args.innerText}</pixel-box
//     >`,
// };

export const PixelBoxStyles: Story = {
  args: {
    ...Default.args,
    boxStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 5px; color: white;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-box boxStyle="${args.boxStyle}">${args.innerText}</pixel-box>`,
};

export const PixelBoxCustomColor: Story = {
  args: {
    ...Default.args,
    customColor: '#1AC736',
  },
  render: (args) =>
    html`<pixel-box customColor="${args.customColor}"
      >${args.innerText}</pixel-box
    >`,
};
