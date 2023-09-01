import { Check } from '@phosphor-icons/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { clsx } from 'clsx';
import React from 'react';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  label: string;
  defaultChecked?: boolean;
  onCheckedChange: (value: boolean) => void;
}

export default function Checkbox({
  id,
  label,
  defaultChecked = false,
  onCheckedChange,
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <CheckboxPrimitive.Root
        id={id}
        defaultChecked={defaultChecked}
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded ring-1 ring-slate-700'
        )}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="h-4 w-4 self-center text-zinc-800 animate-fade-in" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Label
        htmlFor={id}
        className="select-none text-sm font-medium text-zinc-800"
      >
        {label}
      </LabelPrimitive.Label>
    </div>
  );
}
