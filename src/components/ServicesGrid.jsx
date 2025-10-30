import { CheckCircle, FileText, Building2, BookOpen } from 'lucide-react';

const services = [
  {
    key: 'accounting',
    title: 'Accounting',
    desc: 'Financial statements, tax filing, audits, and expert advisory for growing businesses.',
    points: ['Financial reporting', 'Tax planning & filing', 'Statutory audits'],
    icon: FileText,
  },
  {
    key: 'bookkeeping',
    title: 'Bookkeeping',
    desc: 'Daily records, reconciliations, and MIS reporting to keep your finances organised.',
    points: ['Daily entries', 'Bank reconciliation', 'MIS & dashboards'],
    icon: BookOpen,
  },
  {
    key: 'registration',
    title: 'Registration',
    desc: 'End-to-end support for company registration, GST, MSME, FSSAI and more.',
    points: ['Company incorporation', 'GST & MSME', 'FSSAI, Shops & Establishment'],
    icon: Building2,
  },
  {
    key: 'compliance',
    title: 'Compliance',
    desc: 'ROC filings, tax compliance, and labour law compliance with timely reminders.',
    points: ['ROC & MCA filings', 'Direct & indirect tax', 'Labour law compliance'],
    icon: CheckCircle,
  },
];

export default function ServicesGrid({ compact = false }) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {services.map((s) => (
          <ServiceCard key={s.key} service={s} compact={compact} />)
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service, compact }) {
  const Icon = service.icon;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-50 grid place-items-center text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{service.desc}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {service.points.map((p, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-emerald-600" /> {p}
          </li>
        ))}
      </ul>
      {!compact && (
        <div className="mt-4">
          <button className="text-sm font-medium text-blue-700 hover:text-blue-800">Talk to an Expert →</button>
        </div>
      )}
    </div>
  );
}
