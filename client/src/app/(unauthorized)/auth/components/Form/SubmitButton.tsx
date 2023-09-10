import Button from '../../../../components/Button';

interface SubmitButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function SubmitButton({
  children,
  className,
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <Button className={className} disabled={disabled} {...props}>
      {children}
    </Button>
  );
}
