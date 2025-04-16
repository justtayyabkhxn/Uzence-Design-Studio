// src/components/Typography/Typography.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Reusable Typography component supporting variants like H1–H6, Paragraph, Caption, and Helper Text.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="h1" as="h1">Heading 1</Typography>
      <Typography variant="h2" as="h2">Heading 2</Typography>
      <Typography variant="h3" as="h3">Heading 3</Typography>
      <Typography variant="h4" as="h4">Heading 4</Typography>
    </div>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <Typography variant="paragraph">
      This is a paragraph with default text size and line height.
    </Typography>
  ),
};

export const CaptionAndHelper: Story = {
  render: () => (
    <>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="helper">Helper Text</Typography>
    </>
  ),
};
