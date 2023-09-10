interface ErrorMessageProps {
  error?: string;
}

export default function ErrorMessage({
  error = 'O campo é obrigatório!',
}: ErrorMessageProps) {
  return <div className="text-red-400 text-sm">{error}</div>;
}
