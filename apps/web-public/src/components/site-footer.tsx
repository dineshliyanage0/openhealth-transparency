export default function SiteFooter() {
  return (
    <footer className="bg-slate-100 w-full pt-12 pb-8 tonal-shift">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="font-bold text-slate-900 text-xl block mb-4">
            OpenHealth Transparency
          </span>
          <p className="text-sm text-slate-600 mb-6 max-w-sm">
            A civic ledger initiative dedicated to public healthcare
            accountability and data transparency across Sri Lanka&apos;s
            hospital network.
          </p>
          <p className="text-xs text-slate-600">
            © 2024 OpenHealth Transparency Sri Lanka. A Civic Ledger Initiative.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Resources
            </h5>
            <a
              className="block text-slate-500 hover:text-blue-500 text-sm underline decoration-blue-500/30 transition-opacity"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="block text-slate-500 hover:text-blue-500 text-sm underline decoration-blue-500/30 transition-opacity"
              href="#"
            >
              Methodology
            </a>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Connect
            </h5>
            <a
              className="block text-slate-500 hover:text-blue-500 text-sm underline decoration-blue-500/30 transition-opacity"
              href="#"
            >
              Data API
            </a>
            <a
              className="block text-slate-500 hover:text-blue-500 text-sm underline decoration-blue-500/30 transition-opacity"
              href="#"
            >
              Contact Auditor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
