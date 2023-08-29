import Banner from './ui/Banner';
import Form from './ui/Form';

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-2/6">
        <Form />
      </div>
      <Banner />
    </div>
  );
}
