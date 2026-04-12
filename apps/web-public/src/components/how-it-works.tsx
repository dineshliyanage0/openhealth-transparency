const steps = [
  {
    icon: "campaign",
    iconColor: "text-primary",
    borderColor: "border-primary",
    title: "Report",
    description: "Citizen identifies a failure and submits evidence.",
  },
  {
    icon: "fact_check",
    iconColor: "text-primary",
    borderColor: "border-primary",
    title: "Review",
    description: "Local community and health professionals verify the claim.",
  },
  {
    icon: "visibility",
    iconColor: "text-primary",
    borderColor: "border-primary",
    title: "Public Visibility",
    description: "The case is entered into the national ledger for all to see.",
  },
  {
    icon: "task_alt",
    iconColor: "text-tertiary",
    borderColor: "border-tertiary",
    title: "Resolution",
    description: "Officials act to fix equipment and update the record.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
          The Accountability Workflow
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Ensuring every report leads to action through transparent verification
          and public pressure.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {/* Connector line — desktop only */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-outline-variant/30" />

        {steps.map((step) => (
          <div
            key={step.title}
            className="relative flex flex-col items-center text-center"
          >
            <div
              className={`w-24 h-24 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-lg border-4 ${step.borderColor} z-10 mb-6`}
            >
              <span
                className={`material-symbols-outlined ${step.iconColor} text-4xl`}
              >
                {step.icon}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
