'use client';

import { ThemeProvider } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  console.log('providers loaded');
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
