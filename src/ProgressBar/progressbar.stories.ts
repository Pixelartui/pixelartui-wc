import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelProgressBar',
  tags: ['autodocs'],
  component: 'pixel-progress-bar',
  argTypes: {
    progressBarStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) =>
    html`<pixel-progress-bar value="${args.value}"></pixel-progress-bar>`,
};

export const WithLabel: Story = {
  args: {
    value: 65,
    label: 'Loading...',
  },
  render: (args) =>
    html`<pixel-progress-bar
      value="${args.value}"
      label="${args.label}"
    ></pixel-progress-bar>`,
};

export const ShowValue: Story = {
  args: {
    value: 75,
    label: 'Upload Progress',
  },
  render: (args) =>
    html`<pixel-progress-bar
      value="${args.value}"
      label="${args.label}"
      show-value
    ></pixel-progress-bar>`,
};

export const Complete: Story = {
  args: {
    value: 100,
    label: 'Complete',
  },
  render: (args) =>
    html`<pixel-progress-bar
      value="${args.value}"
      label="${args.label}"
      show-value
    ></pixel-progress-bar>`,
};

export const Empty: Story = {
  args: {
    value: 0,
    label: 'Not started',
  },
  render: (args) =>
    html`<pixel-progress-bar
      value="${args.value}"
      label="${args.label}"
      show-value
    ></pixel-progress-bar>`,
};

export const CustomMax: Story = {
  args: {
    value: 3,
    max: 5,
    label: 'Step 3 of 5',
  },
  render: (args) =>
    html`<pixel-progress-bar
      value="${args.value}"
      max="${args.max}"
      label="${args.label}"
      show-value
    ></pixel-progress-bar>`,
};

export const CustomColors: Story = {
  args: {
    value: 60,
    label: 'Custom Colors',
  },
  render: (args) =>
    html`<pixel-progress-bar
      value="${args.value}"
      label="${args.label}"
      background-color="#1a1a2e"
      fill-color="#05EB57"
      show-value
    ></pixel-progress-bar>`,
};

export const LightStyle: Story = {
  args: {
    value: 40,
    label: 'Light Style',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-progress-bar
      value="${args.value}"
      label="${args.label}"
      progress-bar-style="light"
      show-value
    ></pixel-progress-bar>`,
};
