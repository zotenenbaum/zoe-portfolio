export default function Footer() {
  return (
    <footer className="py-12 text-center text-sm opacity-70">
      © {new Date().getFullYear()} Zoe Tenenbaum • Built with Next.js + Tailwind
      {/* tiny gold dot = future easter egg anchor */}
      <span className="bg-gold ml-2 inline-block h-2 w-2 rounded-full align-middle" aria-hidden />
    </footer>
  );
}
