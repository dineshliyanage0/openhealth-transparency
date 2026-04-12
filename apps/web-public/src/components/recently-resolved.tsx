const resolved = [
  {
    title: "Jaffna Teaching Hospital — CT Scanner",
    description:
      "Hardware component replaced. Resolved in 4 days after 3 months of downtime.",
    opacity: "",
  },
  {
    title: "Base Hospital Homagama — Dialysis Unit",
    description:
      "Water filtration system restored. Resolved in 2 days after escalation.",
    opacity: "",
  },
  {
    title: "Teaching Hospital Kandy — Portable X-Ray",
    description: "Internal battery replacement. Resolved in 1 week.",
    opacity: "opacity-70",
  },
];

export default function RecentlyResolved() {
  return (
    <section className="py-24 px-6 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex items-center gap-16">
          {/* Left — copy */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">
              Evidence of Action
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Transparency works. When failures are made public, accountability
              follows. Here are the most recently resolved medical equipment
              failures across the island.
            </p>
            <button className="px-6 py-3 bg-tertiary-container text-on-tertiary-container font-bold rounded-xl scale-98 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">verified</span>
              See Success Stories
            </button>
          </div>

          {/* Right — resolved list */}
          <div className="lg:w-2/3 space-y-4">
            {resolved.map((item) => (
              <div
                key={item.title}
                className={`bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 shadow-sm border-l-4 border-tertiary ${item.opacity}`}
              >
                <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                  <span
                    className="material-symbols-outlined text-tertiary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
