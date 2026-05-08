import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelPagination',
  tags: ['autodocs'],
  component: 'pixel-pagination',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<pixel-pagination total-pages="10"></pixel-pagination>`,
};

export const WithDefaultPage: Story = {
  render: () =>
    html`<pixel-pagination
      total-pages="10"
      default-page="5"
    ></pixel-pagination>`,
};

export const FewPages: Story = {
  render: () =>
    html`<pixel-pagination total-pages="3"></pixel-pagination>`,
};

export const ManyPages: Story = {
  render: () =>
    html`<pixel-pagination total-pages="50"></pixel-pagination>`,
};

export const CustomBackgroundColor: Story = {
  render: () =>
    html`<pixel-pagination
      total-pages="10"
      background-color="#10B981"
    ></pixel-pagination>`,
};
