import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import React, { ReactNode, useState } from 'react';
import Button from './Button';

type Data = {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
};

interface DropdownMenuProps {
  label: string;
  data: Data[];
}

const DropdownMenu = ({ label, data }: DropdownMenuProps) => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <Button>{label}</Button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={clsx(
              'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
              'w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
              'bg-white dark:bg-gray-800'
            )}
          >
            {data.map(({ label, icon, onClick }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={clsx(
                  'flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                  'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
                )}
                onSelect={onClick}
              >
                {icon}
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  {label}
                </span>
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export { DropdownMenu };
