'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import ScrollProgress from './ScrollProgress';

const links = [
  { href: '#intro', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#personality', label: 'Personality' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="bg-pearl/80 dark:bg-navy/70 fixed inset-x-0 top-0 z-50 border-b border-blue-100/60 backdrop-blur dark:border-blue-900/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#intro" className="font-display text-xl tracking-tight">
          <span className="text-gold">Zoe</span> Tenenbaum
        </a>
        <div className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="opacity-80 hover:opacity-100">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
      <ScrollProgress />
      <div className="from-gold h-0.5 w-[var(--scroll)] bg-gradient-to-r to-blue-100" />
      <style jsx global>{`
        :root {
          --scroll: 0%;
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const bar = document.querySelector('[style*="--scroll"]')?.parentElement?.lastElementChild;
          const update = () => { 
            const h = document.documentElement; 
            const s = (h.scrollTop)/(h.scrollHeight - h.clientHeight) * 100; 
            document.documentElement.style.setProperty('--scroll', s+'%');
          };
          document.addEventListener('scroll', update, { passive: true }); update();
        `,
        }}
      />
    </header>
  );
}
