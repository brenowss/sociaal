'use client';

import './globals.css';
import { Outfit } from 'next/font/google';
import Providers from './providers';

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(children);
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
