import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelBadge',
  tags: ['autodocs'],
  component: 'pixel-badge',
  argTypes: {
    badgeSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'info'],
    },
    badgeStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    text: 'Primary',
    variant: 'primary',
    badgeSize: 'medium',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
    ></pixel-badge>`,
};

export const Success: Story = {
  args: {
    text: 'Success',
    variant: 'success',
    badgeSize: 'medium',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
    ></pixel-badge>`,
};

export const Error: Story = {
  args: {
    text: 'Error',
    variant: 'error',
    badgeSize: 'medium',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
    ></pixel-badge>`,
};

export const Warning: Story = {
  args: {
    text: 'Warning',
    variant: 'warning',
    badgeSize: 'medium',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
    ></pixel-badge>`,
};

export const Info: Story = {
  args: {
    text: 'Info',
    variant: 'info',
    badgeSize: 'medium',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
    ></pixel-badge>`,
};

export const Small: Story = {
  args: {
    text: 'Small Badge',
    variant: 'primary',
    badgeSize: 'small',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
    ></pixel-badge>`,
};

export const Large: Story = {
  args: {
    text: 'Large Badge',
    variant: 'primary',
    badgeSize: 'large',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
    ></pixel-badge>`,
};

export const Dismissible: Story = {
  args: {
    text: 'Dismissible',
    variant: 'primary',
    badgeSize: 'medium',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
      dismissible
    ></pixel-badge>`,
};

export const DismissibleSuccess: Story = {
  args: {
    text: 'Success',
    variant: 'success',
    badgeSize: 'medium',
  },
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
      dismissible
    ></pixel-badge>`,
};

export const LightStyle: Story = {
  args: {
    text: 'Light Badge',
    variant: 'primary',
    badgeSize: 'medium',
    badgeStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
      badge-style="${args.badgeStyle}"
    ></pixel-badge>`,
};

export const DismissibleLightStyle: Story = {
  args: {
    text: 'Light',
    variant: 'info',
    badgeSize: 'medium',
    badgeStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-badge
      text="${args.text}"
      variant="${args.variant}"
      badge-size="${args.badgeSize}"
      badge-style="${args.badgeStyle}"
      dismissible
    ></pixel-badge>`,
};
