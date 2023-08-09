import Image from 'next/image';
import { useAppSelector } from '../redux/store';

export default function Home() {
  const user = useAppSelector((state) => state.authReducer.value.user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{user}</h1>
    </main>
  );
}
