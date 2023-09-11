'use client';

import { Rubik } from 'next/font/google';
import Providers from '../providers';
import Navbar from '../components/Navbar';

const rubik = Rubik({ subsets: ['latin'] });

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="p-8">{children}</main>
    </div>
  );
}
