import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';
import {PixelData} from './types';

const meta: Meta = {
  title: 'Components/PixelPixelator',
  tags: ['autodocs'],
  component: 'pixel-pixelator',
};

export default meta;

type Story = StoryObj;

const samplePixels: PixelData = {
  0: {color: '#ff0000'},
  1: {color: '#00ff00'},
  2: {color: '#0000ff'},
  3: {color: '#ffff00'},
  4: {color: '#ff00ff'},
  5: {color: '#00ffff'},
  6: {color: '#ff8800'},
  7: {color: '#8800ff'},
  8: {color: '#0088ff'},
};

export const Default: Story = {
  render: () =>
    html`<pixel-pixelator
      pixel-per-row="3"
      pixel-per-col="3"
      pixel-size="20"
      .pixels="${samplePixels}"
    ></pixel-pixelator>`,
};

export const WithGrid: Story = {
  render: () =>
    html`<pixel-pixelator
      pixel-per-row="5"
      pixel-per-col="5"
      pixel-size="15"
      showgrid
      .pixels="${samplePixels}"
    ></pixel-pixelator>`,
};

export const LargeCanvas: Story = {
  render: () =>
    html`<pixel-pixelator
      pixel-per-row="10"
      pixel-per-col="10"
      pixel-size="10"
      showgrid
    ></pixel-pixelator>`,
};

export const SmallPixels: Story = {
  render: () =>
    html`<pixel-pixelator
      pixel-per-row="8"
      pixel-per-col="8"
      pixel-size="5"
      .pixels="${samplePixels}"
    ></pixel-pixelator>`,
};
