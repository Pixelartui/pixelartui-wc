import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelTooltip',
  tags: ['autodocs'],
  component: 'pixel-tooltip',
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    tooltipStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Top: Story = {
  args: {
    text: 'This is a tooltip',
    position: 'top',
  },
  render: (args) =>
    html`<div style="padding: 60px;">
      <pixel-tooltip text="${args.text}" position="${args.position}">
        <button style="padding: 8px 16px;">Hover me</button>
      </pixel-tooltip>
    </div>`,
};

export const Bottom: Story = {
  args: {
    text: 'Bottom tooltip',
    position: 'bottom',
  },
  render: (args) =>
    html`<div style="padding: 60px;">
      <pixel-tooltip text="${args.text}" position="${args.position}">
        <button style="padding: 8px 16px;">Hover me</button>
      </pixel-tooltip>
    </div>`,
};

export const Left: Story = {
  args: {
    text: 'Left tooltip',
    position: 'left',
  },
  render: (args) =>
    html`<div style="padding: 60px; padding-left: 200px;">
      <pixel-tooltip text="${args.text}" position="${args.position}">
        <button style="padding: 8px 16px;">Hover me</button>
      </pixel-tooltip>
    </div>`,
};

export const Right: Story = {
  args: {
    text: 'Right tooltip',
    position: 'right',
  },
  render: (args) =>
    html`<div style="padding: 60px;">
      <pixel-tooltip text="${args.text}" position="${args.position}">
        <button style="padding: 8px 16px;">Hover me</button>
      </pixel-tooltip>
    </div>`,
};

export const CustomBackground: Story = {
  args: {
    text: 'Custom color tooltip',
    position: 'top',
  },
  render: (args) =>
    html`<div style="padding: 60px;">
      <pixel-tooltip
        text="${args.text}"
        position="${args.position}"
        background-color="#05EB57"
      >
        <button style="padding: 8px 16px;">Hover me</button>
      </pixel-tooltip>
    </div>`,
};

export const LightStyle: Story = {
  args: {
    text: 'Light tooltip',
    position: 'top',
    tooltipStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 60px;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-tooltip
      text="${args.text}"
      position="${args.position}"
      tooltip-style="${args.tooltipStyle}"
    >
      <button style="padding: 8px 16px; color: white;">Hover me</button>
    </pixel-tooltip>`,
};
