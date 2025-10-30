import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">B</div>
            <span className="font-semibold text-slate-900 tracking-tight">BizServe</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-sm">
            We deliver simple, transparent, and reliable accounting and compliance solutions for ambitious businesses across India.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://wa.me/911234567890"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-blue-700"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ['Home', 'home'],
              ['Services', 'services'],
              ['About', 'about'],
              ['Terms', 'terms'],
              ['Contact', 'contact'],
            ].map(([label, key]) => (
              <li key={key}>
                <button onClick={() => onNavigate(key)} className="hover:text-blue-700 text-slate-700">
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@bizserve.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 12345 67890</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} BizServe Consulting. All rights reserved.
      </div>
    </footer>
  );
}
