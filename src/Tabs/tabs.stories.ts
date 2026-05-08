import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';
import {TabItem} from './types';

const meta: Meta = {
  title: 'Components/PixelTabs',
  tags: ['autodocs'],
  component: 'pixel-tabs',
};

export default meta;

type Story = StoryObj;

const defaultTabs: TabItem[] = [
  {label: 'Tab 1', content: 'Content for Tab 1'},
  {label: 'Tab 2', content: 'Content for Tab 2'},
  {label: 'Tab 3', content: 'Content for Tab 3'},
];

export const Default: Story = {
  render: () =>
    html`<pixel-tabs .tabs="${defaultTabs}"></pixel-tabs>`,
};

export const WithDefaultActiveIndex: Story = {
  render: () =>
    html`<pixel-tabs
      .tabs="${defaultTabs}"
      default-active-index="1"
    ></pixel-tabs>`,
};

export const WithDisabledTab: Story = {
  render: () => {
    const tabs: TabItem[] = [
      {label: 'Active', content: 'This tab is active'},
      {label: 'Disabled', content: 'You cannot see this', disabled: true},
      {label: 'Another', content: 'Another tab content'},
    ];
    return html`<pixel-tabs .tabs="${tabs}"></pixel-tabs>`;
  },
};

export const CustomBackgroundColor: Story = {
  render: () =>
    html`<pixel-tabs
      .tabs="${defaultTabs}"
      background-color="#E0F7FA"
    ></pixel-tabs>`,
};

export const ManyTabs: Story = {
  render: () => {
    const tabs: TabItem[] = [
      {label: 'Home', content: 'Welcome home!'},
      {label: 'Profile', content: 'Your profile details'},
      {label: 'Settings', content: 'Application settings'},
      {label: 'Messages', content: 'Your messages'},
      {label: 'Help', content: 'Need help?'},
    ];
    return html`<pixel-tabs .tabs="${tabs}"></pixel-tabs>`;
  },
};
