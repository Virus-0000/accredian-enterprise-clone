interface FooterProps {
  onEnquire?: () => void;
}

export default function Footer({ onEnquire }: FooterProps) {
  return (
<footer className="border-t border-slate-800 bg-slate-900 pt-16 pb-12 text-white">

<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-14 border-b border-slate-800">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex flex-col">
<span className="text-[44px] font-extrabold text-[#1B76FF] leading-none">
                accredian
              </span>
<span className="text-[12px] font-medium text-gray-400 tracking-[0.18em] uppercase">
                credentials that matter
              </span>
            </a>
            <p className="mt-5 text-[15px] text-gray-400 leading-relaxed">
              Empowering organizations to build high-performance teams through expert enterprise learning solutions.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#stats" className="hover:text-white transition">Track Record</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition">Partnerships</a>
              </li>
              <li>
                <a href="#edge" className="hover:text-white transition">Accredian Edge</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Domains */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Domains
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#cat" className="hover:text-white transition">Product & Innovation</a>
              </li>
              <li>
                <a href="#cat" className="hover:text-white transition">Gen-AI Mastery</a>
              </li>
              <li>
                <a href="#cat" className="hover:text-white transition">Leadership Elevation</a>
              </li>
              <li>
                <a href="#cat" className="hover:text-white transition">Tech & Data Insights</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Schedule */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Get Started
            </h4>
            <p className="mt-4 text-sm text-gray-400">
              Ready to transform your enterprise team skills?
            </p>
            <button
              type="button"
              onClick={onEnquire}
className="mt-6 w-full lg:w-64 rounded-2xl bg-[#1B76FF] px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-600"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

