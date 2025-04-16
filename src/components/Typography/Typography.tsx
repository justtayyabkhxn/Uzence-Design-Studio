// src/components/Typography/Typography.tsx
import React, { JSX } from 'react';
import clsx from 'clsx';

type Variant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'paragraph' | 'caption' | 'helper';

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  weight?: 'bold' | 'semibold' | 'normal' | 'light';
  className?: string;
  children: React.ReactNode;
}

const baseStyles = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  paragraph: 'text-base font-normal',
  caption: 'text-sm text-gray-600',
  helper: 'text-xs text-gray-500',
};

export const Typography = ({
  as: Tag = 'p',
  variant = 'paragraph',
  weight,
  className,
  children,
}: TypographyProps) => {
  return (
    <Tag className={clsx(baseStyles[variant], className)}>
      {children}
    </Tag>
  );
};
