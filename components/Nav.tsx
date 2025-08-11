import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const links = [
    { href: '#intro', label: 'Intro' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#personality', label: 'Personality' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-pearl/70 backdrop-blur dark:border-pearl/10 dark:bg-pearl/5">
      <nav className="container-page flex h-14 items-center justify-between">
        <Link
          href="#intro"
          className="gold-underline font-heading text-lg text-navy dark:text-pearl"
        >
          Zoe Tenenbaum
        </Link>
        <div className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-navy/80 transition-colors hover:text-navy dark:text-pearl/80 dark:hover:text-pearl"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
      {/* scroll progress bar */}
      <div
        className="h-0.5 origin-left scale-x-[var(--scroll)] bg-gold/70"
        style={
          {
            // This CSS var will be updated by a tiny script in Phase 5
          }
        }
      />
    </header>
  );
}
