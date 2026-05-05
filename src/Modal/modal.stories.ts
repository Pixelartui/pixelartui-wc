import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelModal',
  tags: ['autodocs'],
  component: 'pixel-modal',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<pixel-modal open header="Modal Title" name="demo">
      <p>This is the modal body content.</p>
    </pixel-modal>`,
};

export const WithActionButtons: Story = {
  render: () =>
    html`<pixel-modal
      open
      header="Confirm Action"
      name="confirm"
      .actionButtons=${{left: 'Cancel', right: 'Confirm'}}
    >
      <p>Are you sure you want to proceed?</p>
    </pixel-modal>`,
};

export const CustomSize: Story = {
  render: () =>
    html`<pixel-modal
      open
      header="Large Modal"
      name="large"
      width="600px"
      height="500px"
    >
      <p>This is a larger modal with custom dimensions.</p>
    </pixel-modal>`,
};

export const CustomBackgroundColor: Story = {
  render: () =>
    html`<pixel-modal
      open
      header="Themed Modal"
      name="themed"
      background-color="#E0F7FA"
    >
      <p>Modal with custom background color.</p>
    </pixel-modal>`,
};

export const NoHeader: Story = {
  render: () =>
    html`<pixel-modal open name="noheader">
      <p>This modal has no header.</p>
    </pixel-modal>`,
};
