'use client';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded-xl border border-blue-100 px-3 py-1.5 hover:bg-blue-50/50 dark:border-blue-800 dark:hover:bg-blue-900/40"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
