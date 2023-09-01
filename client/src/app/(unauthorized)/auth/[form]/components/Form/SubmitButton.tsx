import Button from '../../../../../components/Button';

interface SubmitButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SubmitButton({
  children,
  className,
  ...props
}: SubmitButtonProps) {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
}
