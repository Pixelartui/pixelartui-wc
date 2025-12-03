import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {PixelBox} from './pixel-box';
import './pixel-box';
import {html} from 'lit';

const meta = {
  title: 'Components/PixelBox',
  tags: ['autodocs'],
  component: 'pixel-box',
} satisfies Meta<PixelBox>;

export default meta;

type Story = StoryObj<PixelBox>;

export const Default: Story = {
  args: {
    innerText: 'This is a box',
  },
};

export const BoxRound: Story = {
  args: {
    ...Default.args,
    round: true,
  },
};

export const BoxCustomSize: Story = {
  args: {
    ...Default.args,
    round: true,
    width: '300',
    height: '100',
  },
};

export const BoxFullwidth: Story = {
  args: {
    ...Default.args,
    fullwidth: true,
  },
};

export const BoxCustomColor: Story = {
  args: {
    ...Default.args,
    customColor: '#26ec4f',
  },
};

export const BoxError: Story = {
  args: {
    ...Default.args,
    error: true,
  },
};

export const BoxDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const BoxStyles: Story = {
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 5px; color: white;">
        ${story()}
      </div>`,
  ],
  args: {
    ...Default.args,
    boxStyle: 'light',
  },
};
