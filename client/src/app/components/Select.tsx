import * as SelectPrimitive from '@radix-ui/react-select';
import { clsx } from 'clsx';
import React from 'react';
import Button from './Button';
import { CaretDown, CaretUp, Check } from '@phosphor-icons/react';

type Data = {
  label: string;
  value: string;
};

type SelectProps = {
  data: Data[];
  onSelect?: (value: string) => void;
  defaultValue?: string;
};

const Select = ({ data, onSelect, defaultValue }: SelectProps) => {
  return (
    <SelectPrimitive.Root defaultValue={defaultValue}>
      <SelectPrimitive.Trigger asChild aria-label="Food">
        <Button className="w-36 justify-between">
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2">
            <CaretDown />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content position="popper">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
          <CaretUp />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
          <SelectPrimitive.Group>
            {data.map((f, i) => (
              <SelectPrimitive.Item
                key={`${f}-${i}`}
                value={f.value}
                className={clsx(
                  'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900',
                  'radix-disabled:opacity-50',
                  'focus:outline-none select-none'
                )}
                onSelect={() => onSelect && onSelect(f.value)}
              >
                <SelectPrimitive.ItemText>{f.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <Check />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
          <CaretDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export { Select };
