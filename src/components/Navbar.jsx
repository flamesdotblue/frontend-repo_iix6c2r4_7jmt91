import { useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About' },
    { key: 'terms', label: 'Terms' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">B</div>
            <span className="font-semibold text-slate-900 tracking-tight">BizServe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  active === item.key ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-left px-2 py-2 rounded-md hover:bg-slate-50 ${
                  active === item.key ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+911234567890"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
