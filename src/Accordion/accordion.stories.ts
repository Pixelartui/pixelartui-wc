import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/PixelAccordion',
  tags: ['autodocs'],
  component: 'pixel-accordion',
  argTypes: {
    accordionStyle: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
};

export default meta;

type Story = StoryObj;

const sampleItems = [
  {title: 'Section 1', content: 'Content for section 1'},
  {title: 'Section 2', content: 'Content for section 2'},
  {title: 'Section 3', content: 'Content for section 3'},
];

export const Default: Story = {
  render: () =>
    html`<pixel-accordion
      .items="${sampleItems}"
    ></pixel-accordion>`,
};

export const DefaultOpen: Story = {
  render: () =>
    html`<pixel-accordion
      .items="${sampleItems}"
      .defaultOpenIndexes="${[0]}"
    ></pixel-accordion>`,
};

export const AllowMultiple: Story = {
  render: () =>
    html`<pixel-accordion
      .items="${sampleItems}"
      allow-multiple
      .defaultOpenIndexes="${[0, 2]}"
    ></pixel-accordion>`,
};

export const WithDisabled: Story = {
  render: () =>
    html`<pixel-accordion
      .items="${[
        {title: 'Section 1', content: 'Content for section 1'},
        {
          title: 'Section 2 (Disabled)',
          content: 'Content for section 2',
          disabled: true,
        },
        {title: 'Section 3', content: 'Content for section 3'},
      ]}"
    ></pixel-accordion>`,
};

export const CustomBackground: Story = {
  render: () =>
    html`<pixel-accordion
      .items="${sampleItems}"
      background-color="#05EB57"
    ></pixel-accordion>`,
};

export const LightStyle: Story = {
  decorators: [
    (story) =>
      html`<div style="background-color: black; padding: 10px;">
        ${story()}
      </div>`,
  ],
  render: () =>
    html`<pixel-accordion
      .items="${[
        {title: 'Section 1', content: 'Content for section 1'},
        {title: 'Section 2', content: 'Content for section 2'},
      ]}"
      accordion-style="light"
    ></pixel-accordion>`,
};
