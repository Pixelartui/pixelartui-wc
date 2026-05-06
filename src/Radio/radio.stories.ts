import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelRadio',
  tags: ['autodocs'],
  component: 'pixel-radio',
  argTypes: {
    radioType: {
      control: 'select',
      options: ['main', 'inline'],
    },
    radioStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'option',
    label: 'Select this option',
    value: 'option1',
    radioType: 'main',
  },
  render: (args) =>
    html`<pixel-radio
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      radio-type="${args.radioType}"
    ></pixel-radio>`,
};

export const RadioInline: Story = {
  args: {
    name: 'option',
    label: 'Select this option',
    value: 'option1',
    radioType: 'inline',
  },
  render: (args) =>
    html`<pixel-radio
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      radio-type="${args.radioType}"
    ></pixel-radio>`,
};

export const RadioDefaultChecked: Story = {
  args: {
    name: 'option',
    label: 'Selected',
    value: 'option1',
    radioType: 'main',
  },
  render: (args) =>
    html`<pixel-radio
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      radio-type="${args.radioType}"
      checked
    ></pixel-radio>`,
};

export const RadioNoLabel: Story = {
  args: {
    name: 'option',
    value: 'option1',
    radioType: 'main',
  },
  render: (args) =>
    html`<pixel-radio
      name="${args.name}"
      value="${args.value}"
      radio-type="${args.radioType}"
      no-label
    ></pixel-radio>`,
};

export const RadioDisabled: Story = {
  args: {
    name: 'option',
    label: 'Disabled',
    value: 'option1',
    radioType: 'main',
  },
  render: (args) =>
    html`<pixel-radio
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      radio-type="${args.radioType}"
      disabled
    ></pixel-radio>`,
};

export const RadioCustomColor: Story = {
  args: {
    name: 'option',
    label: 'Custom color',
    value: 'option1',
    radioType: 'main',
    customColor: '#05EB57',
  },
  render: (args) =>
    html`<pixel-radio
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      radio-type="${args.radioType}"
      custom-color="${args.customColor}"
      checked
    ></pixel-radio>`,
};

export const RadioLightStyle: Story = {
  args: {
    name: 'option',
    label: 'Light style',
    value: 'option1',
    radioType: 'main',
    radioStyle: 'light',
    customColor: '#05EB57',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px; color: white;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-radio
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      radio-type="${args.radioType}"
      radio-style="${args.radioStyle}"
      custom-color="${args.customColor}"
      checked
    ></pixel-radio>`,
};
