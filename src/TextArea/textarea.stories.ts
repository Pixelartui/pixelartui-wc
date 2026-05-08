import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelTextArea',
  tags: ['autodocs'],
  component: 'pixel-text-area',
  argTypes: {
    textareaType: {
      control: 'select',
      options: ['main', 'inline'],
    },
    textareaStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    helperText: 'Enter your notes here',
    textareaType: 'main',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      helper-text="${args.helperText}"
      textarea-type="${args.textareaType}"
    ></pixel-text-area>`,
};

export const TextAreaInline: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    helperText: 'Enter your notes',
    textareaType: 'inline',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      helper-text="${args.helperText}"
      textarea-type="${args.textareaType}"
    ></pixel-text-area>`,
};

export const CustomSize: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    helperText: 'Custom size',
    textareaType: 'main',
    width: '650px',
    height: '250px',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      helper-text="${args.helperText}"
      textarea-type="${args.textareaType}"
      width="${args.width}"
      height="${args.height}"
    ></pixel-text-area>`,
};

export const Fullwidth: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    helperText: 'Full width textarea',
    textareaType: 'main',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      helper-text="${args.helperText}"
      textarea-type="${args.textareaType}"
      fullwidth
    ></pixel-text-area>`,
};

export const WithPlaceholder: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    textareaType: 'main',
    placeholder: 'Write here...',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      textarea-type="${args.textareaType}"
      placeholder="${args.placeholder}"
    ></pixel-text-area>`,
};

export const NoLabel: Story = {
  args: {
    inputName: 'note',
    textareaType: 'main',
    placeholder: 'No label...',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      textarea-type="${args.textareaType}"
      placeholder="${args.placeholder}"
      no-label
    ></pixel-text-area>`,
};

export const WithError: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    helperText: 'This field is required',
    textareaType: 'main',
    placeholder: 'Write here...',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      helper-text="${args.helperText}"
      textarea-type="${args.textareaType}"
      placeholder="${args.placeholder}"
      error
    ></pixel-text-area>`,
};

export const Disabled: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    textareaType: 'main',
    placeholder: 'Cannot edit...',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      textarea-type="${args.textareaType}"
      placeholder="${args.placeholder}"
      disabled
    ></pixel-text-area>`,
};

export const CustomColor: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    textareaType: 'main',
    placeholder: 'Custom color...',
    customColor: '#b13737',
  },
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      textarea-type="${args.textareaType}"
      placeholder="${args.placeholder}"
      custom-color="${args.customColor}"
    ></pixel-text-area>`,
};

export const LightStyle: Story = {
  args: {
    inputName: 'note',
    label: 'Note',
    textareaType: 'main',
    textareaStyle: 'light',
    placeholder: 'Light style...',
    customColor: '#b13737',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px; color: white;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-text-area
      input-name="${args.inputName}"
      label="${args.label}"
      textarea-type="${args.textareaType}"
      textarea-style="${args.textareaStyle}"
      placeholder="${args.placeholder}"
      custom-color="${args.customColor}"
    ></pixel-text-area>`,
};
