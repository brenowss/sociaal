import { clsx } from 'clsx';
import React from 'react';

type Props = React.ComponentProps<'button'>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={clsx(
        'inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        // Register all radix states
        'group',
        'radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900',
        'radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900',
        'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
        className
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
export default Button;
