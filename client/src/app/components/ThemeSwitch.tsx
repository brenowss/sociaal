'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        'my-0 relative h-6 w-12 rounded-full transition-all duration-500 ease-in-out cursor-pointer',
        {
          'bg-sky-500': theme === 'light',
          'bg-sky-950': theme === 'dark',
        }
      )}
      onClick={handleTheme}
    >
      <div
        className={clsx(
          'absolute block rounded-full transition-all duration-300 ease-in-out h-3 w-3 transform -rotate-[75] top-1/2 -translate-y-1/2',
          {
            'bg-yellow-400 rotate-0 shadow-sun left-7': theme === 'light',
            'bg-sky-950 rotate-12 shadow-moon left-1': theme === 'dark',
          }
        )}
      />
    </div>
  );
}
