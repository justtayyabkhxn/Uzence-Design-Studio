// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button variant="primary">Primary Button</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary Button</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost Button</Button>,
};

export const Sizes: Story = {
  render: () => (
    <div className="space-x-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => <Button isLoading>Loading...</Button>,
};

export const Disabled: Story = {
  render: () => <Button disabled>Disabled</Button>,
};
