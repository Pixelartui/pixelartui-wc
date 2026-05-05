import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelPixel',
  tags: ['autodocs'],
  component: 'pixel-pixel',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<pixel-pixel></pixel-pixel>`,
};

export const LargePixel: Story = {
  render: () =>
    html`<pixel-pixel width="20px" height="20px"></pixel-pixel>`,
};

export const ColoredPixel: Story = {
  render: () =>
    html`<pixel-pixel
      width="10px"
      height="10px"
      background-color="#ff0000"
    ></pixel-pixel>`,
};

export const PixelGrid: Story = {
  render: () => html`
    <div style="display: flex; gap: 1px;">
      <pixel-pixel width="10px" height="10px" background-color="#ff0000"></pixel-pixel>
      <pixel-pixel width="10px" height="10px" background-color="#00ff00"></pixel-pixel>
      <pixel-pixel width="10px" height="10px" background-color="#0000ff"></pixel-pixel>
      <pixel-pixel width="10px" height="10px" background-color="#ffff00"></pixel-pixel>
    </div>
  `,
};
