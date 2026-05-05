import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelAlert',
  tags: ['autodocs'],
  component: 'pixel-alert',
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    alertStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Info: Story = {
  args: {
    message: 'This is an informational alert.',
    variant: 'info',
  },
  render: (args) =>
    html`<pixel-alert
      message="${args.message}"
      variant="${args.variant}"
    ></pixel-alert>`,
};

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    variant: 'success',
  },
  render: (args) =>
    html`<pixel-alert
      message="${args.message}"
      variant="${args.variant}"
    ></pixel-alert>`,
};

export const Warning: Story = {
  args: {
    message: 'Please review before proceeding.',
    variant: 'warning',
  },
  render: (args) =>
    html`<pixel-alert
      message="${args.message}"
      variant="${args.variant}"
    ></pixel-alert>`,
};

export const Error: Story = {
  args: {
    message: 'Something went wrong. Please try again.',
    variant: 'error',
  },
  render: (args) =>
    html`<pixel-alert
      message="${args.message}"
      variant="${args.variant}"
    ></pixel-alert>`,
};

export const WithTitle: Story = {
  args: {
    title: 'Heads up!',
    message: 'This alert has a title and a message.',
    variant: 'info',
  },
  render: (args) =>
    html`<pixel-alert
      title="${args.title}"
      message="${args.message}"
      variant="${args.variant}"
    ></pixel-alert>`,
};

export const Dismissible: Story = {
  args: {
    message: 'You can dismiss this alert.',
    variant: 'success',
  },
  render: (args) =>
    html`<pixel-alert
      message="${args.message}"
      variant="${args.variant}"
      dismissible
    ></pixel-alert>`,
};

export const LightStyle: Story = {
  args: {
    message: 'Light style alert on dark background.',
    variant: 'info',
    alertStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-alert
      message="${args.message}"
      variant="${args.variant}"
      alert-style="${args.alertStyle}"
    ></pixel-alert>`,
};
