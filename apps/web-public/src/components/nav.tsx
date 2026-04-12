export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl shadow-sm tonal-shift">
      <div className="max-w-full mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-extrabold text-blue-900 tracking-tighter">
            OHT
          </span>
          <div className="hidden md:flex gap-6">
            <a
              className="text-slate-600 hover:text-blue-600 font-bold border-b-2 border-blue-700 pb-1"
              href="#"
            >
              Reports
            </a>
            <a
              className="text-slate-600 hover:text-blue-600 transition-colors"
              href="#"
            >
              Explore
            </a>
            <a
              className="text-slate-600 hover:text-blue-600 transition-colors"
              href="#"
            >
              Impact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-xl bg-slate-200/50 hover:bg-slate-200 text-on-surface font-semibold transition-all scale-98">
            Citizen Login
          </button>
          <button className="px-5 py-2 rounded-xl bg-linear-to-br from-primary to-primary-container text-white font-bold transition-all scale-98">
            Report Issue
          </button>
        </div>
      </div>
    </nav>
  );
}
