'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle'; 

const links = [
  { href: '#intro', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#extra', label: 'Extra' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="navbar">
      <nav className="navbar__inner container">
        <a className="brand">
          <span className="brand__navy"> Zoe Tenenbaum - Website Under Construction </span>
        </a>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
