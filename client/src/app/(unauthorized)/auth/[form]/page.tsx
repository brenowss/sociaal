import Banner from './ui/Banner';
import Form from './ui/Form';

export type FormType = 'signin' | 'signup';

interface AuthPageProps {
  params: {
    form: FormType;
  };
}

export default function AuthPage({ params }: AuthPageProps) {
  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-2/6">
        <Form form={params.form} />
      </div>
      <Banner />
    </div>
  );
}
