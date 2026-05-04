import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelTextInput',
  tags: ['autodocs'],
  component: 'pixel-text-input',
  argTypes: {
    inputType: {
      control: 'select',
      options: ['main', 'inline'],
    },
    inputStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    inputName: 'username',
    textLabel: 'Username',
    placeholder: 'Enter username...',
    inputType: 'main',
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      input-type="${args.inputType}"
    ></pixel-text-input>`,
};

export const InlineType: Story = {
  args: {
    inputName: 'email',
    textLabel: 'Email',
    placeholder: 'Enter email...',
    inputType: 'inline',
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      input-type="${args.inputType}"
    ></pixel-text-input>`,
};

export const WithError: Story = {
  args: {
    inputName: 'password',
    textLabel: 'Password',
    placeholder: 'Enter password...',
    helperText: 'Password is required',
    error: true,
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      helper-text="${args.helperText}"
      error
    ></pixel-text-input>`,
};

export const Disabled: Story = {
  args: {
    inputName: 'disabled-input',
    textLabel: 'Disabled Input',
    placeholder: 'Cannot type here...',
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      disabled
    ></pixel-text-input>`,
};

export const NoLabel: Story = {
  args: {
    inputName: 'no-label',
    placeholder: 'No label input...',
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      placeholder="${args.placeholder}"
      no-label
    ></pixel-text-input>`,
};

export const CustomColor: Story = {
  args: {
    inputName: 'custom',
    textLabel: 'Custom Color',
    placeholder: 'Custom color input...',
    customColor: '#05EB57',
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      custom-color="${args.customColor}"
    ></pixel-text-input>`,
};

export const Fullwidth: Story = {
  args: {
    inputName: 'fullwidth',
    textLabel: 'Full Width Input',
    placeholder: 'Full width...',
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      fullwidth
    ></pixel-text-input>`,
};

export const WithHelperText: Story = {
  args: {
    inputName: 'helper',
    textLabel: 'With Helper',
    placeholder: 'Enter value...',
    helperText: 'This field is optional',
  },
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      helper-text="${args.helperText}"
    ></pixel-text-input>`,
};

export const LightStyle: Story = {
  args: {
    inputName: 'light',
    textLabel: 'Light Style',
    placeholder: 'Light input...',
    inputStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px; color: white;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-text-input
      input-name="${args.inputName}"
      text-label="${args.textLabel}"
      placeholder="${args.placeholder}"
      input-style="${args.inputStyle}"
    ></pixel-text-input>`,
};
