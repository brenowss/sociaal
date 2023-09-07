'use client';

import { Eye, EyeSlash } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useState } from 'react';

interface FormInputProps extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  defaultValue?: string;
  placeholder?: string;
  callback?: (value: string) => void;
  canHideShow?: boolean;
}

export default function Input({
  id,
  defaultValue,
  placeholder,
  callback,
  canHideShow,
  className,
  ...props
}: FormInputProps) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="relative">
      <input
        className={clsx(
          'bg-transparent shadow-zinc-600 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-md leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black]',
          className
        )}
        type={canHideShow && isHidden ? 'password' : 'text'}
        autoCorrect="off"
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => callback && callback(e.target.value)}
        {...props}
      />
      {canHideShow && (
        <button
          type="button"
          className="absolute right-1 top-1/2 -translate-x-1/2"
          onClick={() => setIsHidden((prevState) => !prevState)}
        >
          {isHidden ? <Eye /> : <EyeSlash />}
        </button>
      )}
    </div>
  );
}
