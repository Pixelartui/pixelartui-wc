import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';

const meta: Meta = {
  title: 'Components/PixelContainer',
  component: 'pixel-container',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    innerText: 'This is a Container',
  },
};
