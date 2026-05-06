import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelButton',
  tags: ['autodocs'],
  component: 'pixel-button',
  argTypes: {
    buttonSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    buttonType: {
      control: 'select',
      options: ['main', 'outline'],
    },
    buttonStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    text: 'Click Me',
    buttonSize: 'medium',
    buttonType: 'main',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-size="${args.buttonSize}"
      button-type="${args.buttonType}"
    ></pixel-button>`,
};

export const ButtonOutline: Story = {
  args: {
    text: 'Outline',
    buttonSize: 'medium',
    buttonType: 'outline',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-size="${args.buttonSize}"
      button-type="${args.buttonType}"
    ></pixel-button>`,
};

export const ButtonSmall: Story = {
  args: {
    text: 'Small',
    buttonSize: 'small',
    buttonType: 'main',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-size="${args.buttonSize}"
      button-type="${args.buttonType}"
    ></pixel-button>`,
};

export const ButtonLarge: Story = {
  args: {
    text: 'Large',
    buttonSize: 'large',
    buttonType: 'main',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-size="${args.buttonSize}"
      button-type="${args.buttonType}"
    ></pixel-button>`,
};

export const ButtonFullwidth: Story = {
  args: {
    text: 'Full Width',
    buttonType: 'main',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-type="${args.buttonType}"
      fullwidth
    ></pixel-button>`,
};

export const ButtonRound: Story = {
  args: {
    text: 'Round',
    buttonType: 'main',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-type="${args.buttonType}"
      round
    ></pixel-button>`,
};

export const ButtonDisabled: Story = {
  args: {
    text: 'Disabled',
    buttonType: 'main',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-type="${args.buttonType}"
      disabled
    ></pixel-button>`,
};

export const ButtonCustomColor: Story = {
  args: {
    text: 'Custom',
    buttonType: 'main',
    customColor: '#05EB57',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-type="${args.buttonType}"
      custom-color="${args.customColor}"
    ></pixel-button>`,
};

export const ButtonLightStyle: Story = {
  args: {
    text: 'Light',
    buttonType: 'main',
    buttonStyle: 'light',
  },
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">${story()}</div>`,
  ],
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-type="${args.buttonType}"
      button-style="${args.buttonStyle}"
    ></pixel-button>`,
};

export const ButtonCustomSize: Story = {
  args: {
    text: 'Custom Size',
    buttonType: 'main',
    width: '150',
    height: '80',
  },
  render: (args) =>
    html`<pixel-button
      text="${args.text}"
      button-type="${args.buttonType}"
      width="${args.width}"
      height="${args.height}"
    ></pixel-button>`,
};
