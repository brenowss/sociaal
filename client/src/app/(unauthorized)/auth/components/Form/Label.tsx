import * as RLabel from '@radix-ui/react-label';
import clsx from 'clsx';

interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  id: string;
  children: React.ReactNode;
}

export default function Label({
  id,
  children,
  className,
  ...props
}: LabelProps) {
  return (
    <RLabel.Root
      className={clsx('text-md font-medium text-zinc-700', className)}
      htmlFor={id}
      {...props}
    >
      {children}
    </RLabel.Root>
  );
}
