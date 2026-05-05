import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelSlider',
  tags: ['autodocs'],
  component: 'pixel-slider',
  argTypes: {
    sliderType: {
      control: 'select',
      options: ['main', 'inline'],
    },
    sliderStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'volume',
    label: 'Volume',
    sliderType: 'main',
    value: 50,
  },
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      label="${args.label}"
      slider-type="${args.sliderType}"
      value="${args.value}"
    ></pixel-slider>`,
};

export const Inline: Story = {
  args: {
    name: 'volume',
    label: 'Volume',
    sliderType: 'inline',
    value: 50,
  },
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      label="${args.label}"
      slider-type="${args.sliderType}"
      value="${args.value}"
    ></pixel-slider>`,
};

export const CustomRange: Story = {
  args: {
    name: 'temperature',
    label: 'Temperature',
    sliderType: 'main',
    min: 0,
    max: 50,
    step: 5,
    value: 25,
  },
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      label="${args.label}"
      slider-type="${args.sliderType}"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      value="${args.value}"
    ></pixel-slider>`,
};

export const NoLabel: Story = {
  args: {
    name: 'volume',
    sliderType: 'main',
    value: 50,
  },
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      slider-type="${args.sliderType}"
      value="${args.value}"
      no-label
    ></pixel-slider>`,
};

export const HideValue: Story = {
  args: {
    name: 'volume',
    label: 'Volume',
    sliderType: 'main',
    value: 50,
  },
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      label="${args.label}"
      slider-type="${args.sliderType}"
      value="${args.value}"
      .showValue="${false}"
    ></pixel-slider>`,
};

export const Disabled: Story = {
  args: {
    name: 'volume',
    label: 'Volume',
    sliderType: 'main',
    value: 50,
  },
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      label="${args.label}"
      slider-type="${args.sliderType}"
      value="${args.value}"
      disabled
    ></pixel-slider>`,
};

export const CustomBackground: Story = {
  args: {
    name: 'volume',
    label: 'Volume',
    sliderType: 'main',
    value: 60,
  },
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      label="${args.label}"
      slider-type="${args.sliderType}"
      value="${args.value}"
      background-color="#05EB57"
    ></pixel-slider>`,
};

export const LightStyle: Story = {
  args: {
    name: 'volume',
    label: 'Volume',
    sliderType: 'main',
    sliderStyle: 'light',
    value: 40,
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-slider
      name="${args.name}"
      label="${args.label}"
      slider-type="${args.sliderType}"
      slider-style="${args.sliderStyle}"
      value="${args.value}"
    ></pixel-slider>`,
};
