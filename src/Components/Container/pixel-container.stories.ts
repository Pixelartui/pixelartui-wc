import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {fn} from 'storybook/test';
import {PixelContainer} from './pixel-container';
import './pixel-container';

const meta = {
  title: 'Components/PixelContainer',
  tags: ['autodocs'],
  component: 'pixel-container',
} satisfies Meta<PixelContainer>;

export default meta;

type Story = StoryObj<PixelContainer>;

export const Default: Story = {
  args: {
    innerText: 'This is a container',
    handleclick: fn(),
  },
};
