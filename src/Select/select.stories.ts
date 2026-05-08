import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';
import {SelectOption} from './types';

const meta: Meta = {
  title: 'Components/PixelSelect',
  tags: ['autodocs'],
  component: 'pixel-select',
};

export default meta;

type Story = StoryObj;

const defaultOptions: SelectOption[] = [
  {label: 'Option 1', value: 'opt1'},
  {label: 'Option 2', value: 'opt2'},
  {label: 'Option 3', value: 'opt3'},
];

export const Default: Story = {
  render: () =>
    html`<pixel-select
      .options="${defaultOptions}"
      display="Select an option"
      select-name="demo"
      select-label="Choose"
    ></pixel-select>`,
};

export const NoLabel: Story = {
  render: () =>
    html`<pixel-select
      .options="${defaultOptions}"
      display="Select an option"
      select-name="nolabel"
      no-label
    ></pixel-select>`,
};

export const InlineType: Story = {
  render: () =>
    html`<pixel-select
      .options="${defaultOptions}"
      display="Pick one"
      select-name="inline"
      select-label="Category"
      select-type="inline"
    ></pixel-select>`,
};

export const Disabled: Story = {
  render: () =>
    html`<pixel-select
      .options="${defaultOptions}"
      display="Disabled"
      select-name="disabled"
      select-label="Disabled Select"
      disabled
    ></pixel-select>`,
};

export const CustomBackgroundColor: Story = {
  render: () =>
    html`<pixel-select
      .options="${defaultOptions}"
      display="Custom Color"
      select-name="custom"
      select-label="Themed"
      background-color="#E0F7FA"
    ></pixel-select>`,
};

export const ManyOptions: Story = {
  render: () => {
    const options: SelectOption[] = [
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
      {label: 'Cherry', value: 'cherry'},
      {label: 'Date', value: 'date'},
      {label: 'Elderberry', value: 'elderberry'},
      {label: 'Fig', value: 'fig'},
    ];
    return html`<pixel-select
      .options="${options}"
      display="Pick a fruit"
      select-name="fruits"
      select-label="Fruits"
    ></pixel-select>`;
  },
};
