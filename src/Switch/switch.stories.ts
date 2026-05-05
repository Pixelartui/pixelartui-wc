import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelSwitch',
  tags: ['autodocs'],
  component: 'pixel-switch',
  argTypes: {
    switchType: {
      control: 'select',
      options: ['main', 'inline'],
    },
    switchStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'toggle',
    label: 'Toggle',
    switchType: 'main',
  },
  render: (args) =>
    html`<pixel-switch
      name="${args.name}"
      label="${args.label}"
      switch-type="${args.switchType}"
    ></pixel-switch>`,
};

export const SwitchInline: Story = {
  args: {
    name: 'inline-toggle',
    label: 'Inline Toggle',
    switchType: 'inline',
  },
  render: (args) =>
    html`<pixel-switch
      name="${args.name}"
      label="${args.label}"
      switch-type="${args.switchType}"
    ></pixel-switch>`,
};

export const SwitchDefaultChecked: Story = {
  args: {
    name: 'checked-toggle',
    label: 'Checked',
    switchType: 'main',
  },
  render: (args) =>
    html`<pixel-switch
      name="${args.name}"
      label="${args.label}"
      switch-type="${args.switchType}"
      checked
    ></pixel-switch>`,
};

export const SwitchNoLabel: Story = {
  args: {
    name: 'no-label-toggle',
    switchType: 'main',
  },
  render: (args) =>
    html`<pixel-switch
      name="${args.name}"
      switch-type="${args.switchType}"
      no-label
    ></pixel-switch>`,
};

export const SwitchCustomColor: Story = {
  args: {
    name: 'custom-toggle',
    switchType: 'main',
    customColor: '#05EB57',
  },
  render: (args) =>
    html`<pixel-switch
      name="${args.name}"
      switch-type="${args.switchType}"
      custom-color="${args.customColor}"
      no-label
      checked
    ></pixel-switch>`,
};

export const SwitchLightStyle: Story = {
  args: {
    name: 'light-toggle',
    label: 'Light Style',
    switchType: 'main',
    switchStyle: 'light',
    customColor: '#05EB57',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px; color: white;">
        ${story()}
      </div>`,
  ],
  render: (args) =>
    html`<pixel-switch
      name="${args.name}"
      label="${args.label}"
      switch-type="${args.switchType}"
      switch-style="${args.switchStyle}"
      custom-color="${args.customColor}"
      checked
    ></pixel-switch>`,
};
