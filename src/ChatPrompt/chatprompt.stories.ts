import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelChatPrompt',
  tags: ['autodocs'],
  component: 'pixel-chat-prompt',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<pixel-chat-prompt input-name="chat"></pixel-chat-prompt>`,
};

export const CustomPlaceholder: Story = {
  render: () =>
    html`<pixel-chat-prompt
      input-name="chat"
      placeholder="Ask me anything..."
    ></pixel-chat-prompt>`,
};

export const Disabled: Story = {
  render: () =>
    html`<pixel-chat-prompt
      input-name="chat"
      disabled
    ></pixel-chat-prompt>`,
};

export const CustomBackgroundColor: Story = {
  render: () =>
    html`<pixel-chat-prompt
      input-name="chat"
      background-color="#E0F7FA"
    ></pixel-chat-prompt>`,
};
