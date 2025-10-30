import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-24 md:pb-24 relative">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Your Trusted Partner in Accounting, Compliance & Business Growth
            </h1>
            <p className="mt-4 text-slate-700 md:text-lg">
              We help businesses stay compliant, financially organised, and ready to scale.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={onPrimary} className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-700 transition-colors">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={onSecondary} className="inline-flex items-center justify-center gap-2 rounded-md bg-white border border-slate-200 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">
                Explore Services
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature icon={<Shield className="h-5 w-5 text-blue-600" />} title="Transparent" desc="Clear pricing & honest advice" />
              <Feature icon={<Clock className="h-5 w-5 text-blue-600" />} title="On-time" desc="Fast turnaround & SLAs" />
              <Feature icon={<Star className="h-5 w-5 text-blue-600" />} title="Expert Support" desc="Certified professionals" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-full bg-blue-50 grid place-items-center">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </div>
  );
}
