type CasePriority = "critical" | "high";

interface Case {
  priority: CasePriority;
  daysUnresolved: number;
  equipment: string;
  hospital: string;
  district: string;
  issue: string;
  status: string;
  statusColor: string;
  borderColor: string;
}

const cases: Case[] = [
  {
    priority: "critical",
    daysUnresolved: 5,
    equipment: "MRI Scanner",
    hospital: "Colombo National Hospital",
    district: "Colombo",
    issue: "Main Power Grid Failure",
    status: "ESCALATED",
    statusColor: "text-secondary",
    borderColor: "border-secondary",
  },
  {
    priority: "critical",
    daysUnresolved: 2,
    equipment: "Ventilator Unit (ICU)",
    hospital: "Teaching Hospital Karapitiya",
    district: "Galle",
    issue: "Sensor Calibration Fault",
    status: "VERIFIED",
    statusColor: "text-secondary",
    borderColor: "border-secondary",
  },
  {
    priority: "high",
    daysUnresolved: 12,
    equipment: "X-Ray Machine",
    hospital: "Base Hospital Mullaitivu",
    district: "Mullaitivu",
    issue: "Imaging Plate Damaged",
    status: "UNDER REVIEW",
    statusColor: "text-primary",
    borderColor: "border-primary",
  },
];

function PriorityChip({ priority }: { priority: CasePriority }) {
  if (priority === "critical") {
    return (
      <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-black uppercase rounded-full">
        Critical Failure
      </span>
    );
  }
  return (
    <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-black uppercase rounded-full">
      High Priority
    </span>
  );
}

function StatusDot({ color }: { color: string }) {
  const bgMap: Record<string, string> = {
    "text-secondary": "bg-secondary",
    "text-primary": "bg-primary",
  };
  return <span className={`w-2 h-2 rounded-full ${bgMap[color] ?? "bg-outline"}`} />;
}

export default function ActiveCases() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">
              Active Urgent Cases
            </h2>
            <p className="text-on-surface-variant">
              Real-time ledger of verified equipment failures across Sri Lanka.
            </p>
          </div>
          <a
            className="text-primary font-bold hover:underline flex items-center gap-1"
            href="#"
          >
            View Full Ledger{" "}
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.equipment + c.hospital}
              className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 ${c.borderColor} hover:shadow-md transition-all scale-102`}
            >
              <div className="flex justify-between items-start mb-4">
                <PriorityChip priority={c.priority} />
                <span className="text-outline text-xs font-semibold">
                  {c.daysUnresolved} days unresolved
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{c.equipment}</h3>
              <p className="text-on-surface-variant font-medium mb-4">
                {c.hospital}
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-outline text-lg">
                    location_on
                  </span>
                  <span className="text-on-surface font-semibold">
                    District: {c.district}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-outline text-lg">
                    error
                  </span>
                  <span className="text-on-surface font-semibold">
                    Issue: {c.issue}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <span
                  className={`inline-flex items-center gap-1.5 ${c.statusColor} font-bold text-xs`}
                >
                  <StatusDot color={c.statusColor} />
                  {c.status}
                </span>
                <button className="text-primary text-xs font-bold hover:underline">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
