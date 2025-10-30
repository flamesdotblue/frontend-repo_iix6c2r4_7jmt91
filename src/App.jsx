import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Footer from './components/Footer';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const titles = {
      home: 'BizServe — Accounting, Registration & Compliance',
      services: 'Services — Accounting, Bookkeeping, Registration, Compliance',
      about: 'About Us — BizServe',
      terms: 'Terms & Conditions — BizServe',
      contact: 'Contact — BizServe',
    };
    document.title = titles[active] || 'BizServe';
  }, [active]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar active={active} onNavigate={setActive} />

      {active === 'home' && (
        <>
          <Hero onPrimary={() => setActive('contact')} onSecondary={() => setActive('services')} />

          <section className="mx-auto max-w-6xl px-4 pt-4 pb-10">
            <h2 className="text-xl font-semibold mb-4">Our Key Services</h2>
            <ServicesGrid />
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-10">
            <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-semibold">Why Choose Us</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  <li>• Certified experts with multi-industry experience</li>
                  <li>• Transparent pricing and zero hidden fees</li>
                  <li>• SLA-driven, on-time delivery</li>
                  <li>• Dedicated support and proactive reminders</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <blockquote className="text-sm md:text-base">
                  “The team ensures our compliance is always up-to-date. Professional, responsive, and reliable.”
                </blockquote>
                <div className="mt-3 text-xs text-slate-300">— Founder, Retail Startup</div>
              </div>
            </div>
          </section>
        </>
      )}

      {active === 'services' && (
        <main className="mx-auto max-w-6xl px-4 py-12">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="mt-2 text-slate-600">Clear, detailed, and tailored to your business goals.</p>
          </header>
          <div className="space-y-10">
            <ServiceDetail
              title="Accounting Services"
              desc="Financial statements, tax filing, and audits to keep you compliant and investor-ready."
              benefits={[
                'Accurate financial reporting',
                'Tax planning & filing',
                'Internal & statutory audits',
                'CFO advisory for growth',
              ]}
            />
            <ServiceDetail
              title="Bookkeeping"
              desc="Daily recording, reconciliations, and MIS dashboards that keep your finances organised."
              benefits={[
                'Daily entries & ledgers',
                'Bank & payment reconciliation',
                'Vendor/customer ageing',
                'MIS and performance dashboards',
              ]}
            />
            <ServiceDetail
              title="Government Registration"
              desc="Hassle-free registrations: Company, GST, MSME, FSSAI, Shops & Establishment, and more."
              benefits={['Company incorporation', 'GST registration', 'MSME & UDYAM', 'FSSAI licensing']}
            />
            <ServiceDetail
              title="Compliance Support"
              desc="End-to-end ROC, tax, and labour law compliance with timely reminders and filings."
              benefits={['ROC/MCA filings', 'Direct & indirect tax', 'Payroll & labour compliance', 'Secretarial support']}
            />
          </div>
        </main>
      )}

      {active === 'about' && (
        <main className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">
            We are a team of finance and compliance professionals committed to accuracy, transparency, and client success. With years of experience across startups and SMEs, we simplify complexity and deliver dependable outcomes.
          </p>
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Our Approach — Simple, Transparent, Reliable</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Understand your business and goals</li>
              <li>• Design a tailored process with clear milestones</li>
              <li>• Communicate proactively with no surprises</li>
              <li>• Deliver on time, every time</li>
            </ul>
          </div>
        </main>
      )}

      {active === 'terms' && (
        <main className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <div className="mt-4 space-y-4 text-sm text-slate-700">
            <p>Services are provided on a best-effort, professional basis. Timelines depend on client inputs and government processing times.</p>
            <p>Data Usage & Confidentiality: We maintain strict confidentiality and use your data solely to deliver services as agreed.</p>
            <p>Payments & Refunds: Fees are due as per proposal milestones. Refunds are not applicable for completed professional hours or government fees.</p>
            <p>Client Responsibilities: Provide accurate, timely information and documents required for filings.</p>
            <p className="italic">Disclaimer: All services comply with applicable Indian laws and government regulations.</p>
          </div>
        </main>
      )}

      {active === 'contact' && (
        <main className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-slate-600">Speak to an expert. We usually reply within a few hours.</p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form).entries());
                console.log('Lead Form Submission', data);
                alert('Thank you! Your request has been received. We will contact you shortly.');
                form.reset();
              }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" required />
                <div>
                  <label className="text-sm font-medium text-slate-700">Service Interested</label>
                  <select name="service" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Accounting</option>
                    <option>Bookkeeping</option>
                    <option>Registration</option>
                    <option>Compliance</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us a bit about your requirement" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-blue-700">Submit</button>
              <div className="mt-3 text-xs text-slate-500">By submitting, you agree to our Terms & Privacy.</div>
            </form>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold">Visit Us</h3>
                <div className="mt-3 aspect-video w-full overflow-hidden rounded-md">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1161009997!2d72.7410999625733!3d19.082197839590276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63cdb2b5fb3%3A0x8b1a3e56e8b2f6e1!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold">Get in touch</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@bizserve.com</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 12345 67890</li>
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <a href="https://wa.me/911234567890" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-emerald-700">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-blue-700">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
                <div className="mt-3 text-xs text-slate-500">Mon–Fri: 9:30 AM – 6:30 PM IST</div>
              </div>
            </div>
          </div>
        </main>
      )}

      <Footer onNavigate={setActive} />
    </div>
  );
}

function Field({ label, name, type = 'text', required = false }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function ServiceDetail({ title, desc, benefits }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
      <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
        {benefits.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <div className="mt-4">
        <button className="text-sm font-medium text-blue-700 hover:text-blue-800" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Talk to an Expert →
        </button>
      </div>
    </section>
  );
}
