import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelCheckbox',
  tags: ['autodocs'],
  component: 'pixel-checkbox',
  argTypes: {
    checkboxType: {
      control: 'select',
      options: ['main', 'inline'],
    },
    checkboxStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'agreement',
    label: 'I agree to the terms',
    checkboxType: 'main',
  },
  render: (args) =>
    html`<pixel-checkbox
      name="${args.name}"
      label="${args.label}"
      checkbox-type="${args.checkboxType}"
    ></pixel-checkbox>`,
};

export const CheckboxInline: Story = {
  args: {
    name: 'agreement',
    label: 'I agree to the terms',
    checkboxType: 'inline',
  },
  render: (args) =>
    html`<pixel-checkbox
      name="${args.name}"
      label="${args.label}"
      checkbox-type="${args.checkboxType}"
    ></pixel-checkbox>`,
};

export const CheckboxDefaultChecked: Story = {
  args: {
    name: 'agreement',
    label: 'I agree to the terms',
    checkboxType: 'main',
  },
  render: (args) =>
    html`<pixel-checkbox
      name="${args.name}"
      label="${args.label}"
      checkbox-type="${args.checkboxType}"
      checked
    ></pixel-checkbox>`,
};

export const CheckboxNoLabel: Story = {
  args: {
    name: 'agreement',
    checkboxType: 'main',
  },
  render: (args) =>
    html`<pixel-checkbox
      name="${args.name}"
      checkbox-type="${args.checkboxType}"
      no-label
    ></pixel-checkbox>`,
};

export const CheckboxDisabled: Story = {
  args: {
    name: 'agreement',
    label: 'I agree to the terms',
    checkboxType: 'main',
  },
  render: (args) =>
    html`<pixel-checkbox
      name="${args.name}"
      label="${args.label}"
      checkbox-type="${args.checkboxType}"
      disabled
    ></pixel-checkbox>`,
};

export const CheckboxCustomColor: Story = {
  args: {
    name: 'agreement',
    label: 'I agree to the terms',
    checkboxType: 'main',
    customColor: '#05EB57',
  },
  render: (args) =>
    html`<pixel-checkbox
      name="${args.name}"
      label="${args.label}"
      checkbox-type="${args.checkboxType}"
      custom-color="${args.customColor}"
      checked
    ></pixel-checkbox>`,
};

export const CheckboxLightStyle: Story = {
  args: {
    name: 'agreement',
    label: 'I agree to the terms',
    checkboxType: 'main',
    checkboxStyle: 'light',
    customColor: '#05EB57',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px; color: white;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-checkbox
      name="${args.name}"
      label="${args.label}"
      checkbox-type="${args.checkboxType}"
      checkbox-style="${args.checkboxStyle}"
      custom-color="${args.customColor}"
      checked
    ></pixel-checkbox>`,
};
