import clsx from 'clsx';

interface FormInputProps extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  defaultValue?: string;
  placeholder?: string;
  callback?: (value: string) => void;
}

export default function Input({
  id,
  defaultValue,
  placeholder,
  callback,
  className,
  ...props
}: FormInputProps) {
  return (
    <input
      className={clsx(
        'bg-transparent shadow-zinc-800 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black]',
        className
      )}
      type="text"
      autoCorrect="off"
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e) => callback && callback(e.target.value)}
      {...props}
    />
  );
}
