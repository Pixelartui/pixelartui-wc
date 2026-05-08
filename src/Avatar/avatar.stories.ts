import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelAvatar',
  tags: ['autodocs'],
  component: 'pixel-avatar',
  argTypes: {
    avatarSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    avatarStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const WithInitials: Story = {
  args: {
    initials: 'AB',
    alt: 'Alice Bob',
  },
  render: (args) =>
    html`<pixel-avatar
      initials="${args.initials}"
      alt="${args.alt}"
    ></pixel-avatar>`,
};

export const Small: Story = {
  args: {
    initials: 'SM',
    alt: 'Small Avatar',
    avatarSize: 'small',
  },
  render: (args) =>
    html`<pixel-avatar
      initials="${args.initials}"
      alt="${args.alt}"
      avatar-size="${args.avatarSize}"
    ></pixel-avatar>`,
};

export const Large: Story = {
  args: {
    initials: 'LG',
    alt: 'Large Avatar',
    avatarSize: 'large',
  },
  render: (args) =>
    html`<pixel-avatar
      initials="${args.initials}"
      alt="${args.alt}"
      avatar-size="${args.avatarSize}"
    ></pixel-avatar>`,
};

export const DefaultFallback: Story = {
  args: {
    alt: 'Default Avatar',
  },
  render: (args) =>
    html`<pixel-avatar alt="${args.alt}"></pixel-avatar>`,
};

export const CustomBackground: Story = {
  args: {
    initials: 'CB',
    alt: 'Custom Background',
  },
  render: (args) =>
    html`<pixel-avatar
      initials="${args.initials}"
      alt="${args.alt}"
      background-color="#05EB57"
    ></pixel-avatar>`,
};

export const LightStyle: Story = {
  args: {
    initials: 'LS',
    alt: 'Light Style Avatar',
    avatarStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-avatar
      initials="${args.initials}"
      alt="${args.alt}"
      avatar-style="${args.avatarStyle}"
    ></pixel-avatar>`,
};
