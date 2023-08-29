import clsx from 'clsx';

interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function FormGroup({
  children,
  className,
  ...props
}: FormGroupProps) {
  return (
    <div
      className={clsx('flex flex-col justify-center gap-2', className)}
      {...props}
    >
      {children}
    </div>
  );
}
