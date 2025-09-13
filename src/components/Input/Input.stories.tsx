import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { placeholder: 'Enter text...' },
};



export const EmailValidation: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    return (
      <Input
        type="email"
        label="Email Address"
        placeholder="user@example.com"
        value={value}
        onChange={(val) => setValue(val)}
        error={value.length > 0 && !isValid}
        helperText={!isValid && value ? 'Please enter a valid email address.' : ''}
      />
    );
  },
};

export const PhoneValidation: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const isValid = /^[0-9]*$/.test(value);

    return (
      <Input
        type="tel"
        label="Phone Number"
        placeholder="Enter phone number"
        value={value}
        onChange={(val) => setValue(val)}
        error={value.length > 0 && !isValid}
        helperText={!isValid && value ? 'Only numbers are allowed.' : ''}
      />
    );
  },
};

export const WebsiteValidation: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const isValid = value.startsWith('https://');

    return (
      <Input
        type="url"
        label="Website"
        placeholder="https://example.com"
        value={value}
        onChange={(val) => setValue(val)}
        error={value.length > 0 && !isValid}
        helperText={!isValid && value ? 'Website must start with https://' : ''}
      />
    );
  },
};
