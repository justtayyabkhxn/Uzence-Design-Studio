// src/components/Input/TextInput.tsx
import React from 'react';
import clsx from 'clsx';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  helperText,
  error,
  disabled,
  className,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = Boolean(error);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'w-full px-3 py-2 rounded-lg border shadow-sm outline-none',
          'transition focus:ring-2',
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white dark:bg-gray-800',
          hasError
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 dark:border-gray-600 focus:ring-blue-400',
          className
        )}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={helperText || error ? `${inputId}-desc` : undefined}
        {...props}
      />
      {(helperText || error) && (
        <p
          id={`${inputId}-desc`}
          className={clsx(
            'mt-1 text-sm',
            hasError ? 'text-red-600' : 'text-gray-600 dark:text-gray-500'
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
