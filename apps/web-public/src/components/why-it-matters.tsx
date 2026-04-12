const pillars = [
  { icon: "account_balance", label: "National Ledger" },
  { icon: "verified_user", label: "Verified Data" },
  { icon: "gavel", label: "Civic Duty" },
];

export default function WhyItMatters() {
  return (
    <section className="py-32 px-6 bg-surface text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 block">
          Our Civic Mission
        </span>
        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
          Health Data is <span className="italic">Public</span> Property.
        </h2>
        <p className="text-2xl text-on-surface-variant font-light leading-relaxed mb-12">
          In a healthcare system funded by the public, every citizen has the
          right to know if the equipment meant to save their life is functional.
          Silence on failure is a failure of governance. We choose transparency.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  {pillar.icon}
                </span>
              </div>
              <span className="font-bold text-sm">{pillar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
