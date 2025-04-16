// src/components/Input/TextInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Input/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => <TextInput label="Name" placeholder="Enter your name" />,
};

export const WithHelperText: Story = {
  render: () => (
    <TextInput label="Username" helperText="This will be visible to others." />
  ),
};

export const WithError: Story = {
  render: () => (
    <TextInput label="Email" error="Please enter a valid email address." />
  ),
};

export const Disabled: Story = {
  render: () => <TextInput label="Disabled" disabled value="Can't edit" />,
};
