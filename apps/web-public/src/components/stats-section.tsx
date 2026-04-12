const stats = [
  { value: "142", color: "text-secondary", label: "Active Reports Awaiting Verification" },
  { value: "89", color: "text-on-surface", label: "Verified Critical Failures" },
  { value: "56", color: "text-primary", label: "High Priority Unresolved" },
  { value: "31", color: "text-tertiary", label: "Resolved This Week" },
  { value: "12d", color: "text-outline", label: "Avg Time to Resolve" },
];

export default function StatsSection() {
  return (
    <section className="bg-surface-container-low py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className={`text-4xl lg:text-5xl font-black ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="font-label text-sm text-on-surface-variant leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
