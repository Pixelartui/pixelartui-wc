import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelBreadcrumb',
  tags: ['autodocs'],
  component: 'pixel-breadcrumb',
  argTypes: {
    breadcrumbStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<pixel-breadcrumb
      .items="${[
        {label: 'Home', href: '/'},
        {label: 'Products', href: '/products'},
        {label: 'Current Page'},
      ]}"
    ></pixel-breadcrumb>`,
};

export const CustomSeparator: Story = {
  render: () =>
    html`<pixel-breadcrumb
      .items="${[
        {label: 'Home', href: '/'},
        {label: 'Docs', href: '/docs'},
        {label: 'API'},
      ]}"
      separator="/"
    ></pixel-breadcrumb>`,
};

export const TwoItems: Story = {
  render: () =>
    html`<pixel-breadcrumb
      .items="${[{label: 'Home', href: '/'}, {label: 'About'}]}"
    ></pixel-breadcrumb>`,
};

export const WithButtons: Story = {
  render: () =>
    html`<pixel-breadcrumb
      .items="${[
        {label: 'Home'},
        {label: 'Category'},
        {label: 'Current Page'},
      ]}"
    ></pixel-breadcrumb>`,
};

export const LightStyle: Story = {
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: () =>
    html`<pixel-breadcrumb
      .items="${[
        {label: 'Home', href: '/'},
        {label: 'Settings', href: '/settings'},
        {label: 'Profile'},
      ]}"
      breadcrumb-style="light"
    ></pixel-breadcrumb>`,
};
