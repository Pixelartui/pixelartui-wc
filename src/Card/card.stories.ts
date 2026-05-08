import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelCard',
  tags: ['autodocs'],
  component: 'pixel-card',
  argTypes: {
    cardStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<pixel-card>
      <p>This is a basic card with some content.</p>
    </pixel-card>`,
};

export const WithTitle: Story = {
  render: () =>
    html`<pixel-card cardTitle="Card Title">
      <p>This card has a title and body content.</p>
    </pixel-card>`,
};

export const WithFooter: Story = {
  render: () =>
    html`<pixel-card cardTitle="Card Title" show-footer>
      <p>This card has a title, body, and footer.</p>
      <button slot="footer" style="padding: 4px 8px;">Action</button>
    </pixel-card>`,
};

export const CustomBackground: Story = {
  render: () =>
    html`<pixel-card
      cardTitle="Custom Background"
      background-color="#05EB57"
    >
      <p>This card has a custom background color.</p>
    </pixel-card>`,
};

export const LightStyle: Story = {
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: () =>
    html`<pixel-card cardTitle="Light Style Card" card-style="light">
      <p style="color: white;">Light style card on dark background.</p>
    </pixel-card>`,
};
