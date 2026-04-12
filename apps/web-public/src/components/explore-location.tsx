import Image from "next/image";

const provinces = [
  { name: "Central", count: "12" },
  { name: "Southern", count: "09" },
  { name: "Northern", count: "15" },
  { name: "Eastern", count: "07" },
  { name: "Uva", count: "04" },
  { name: "Sabaragamuwa", count: "06" },
];

export default function ExploreLocation() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight mb-12">
          Explore by Location
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Western — featured tile */}
          <div className="col-span-2 row-span-2 bg-primary text-white p-8 rounded-4xl flex flex-col justify-between group cursor-pointer overflow-hidden relative min-h-50">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd9KC8AQyYRP5u_lBDb2hEHuk0msofFm9zLNrZVBpuadD4-L1TXXGK681fHLDwjm-j0M31T2KbSU66trd7-Ron0-k8NGAgF4xOPp6GKg_E7cw7Dcw6afDIl-uLT1tmg2ksHCFGztOzB2rJsbz2WMMTb4SYpbJ5a3Asx4FtWViBpOzbLbK_qURHCLey0CAupxh30vj3Y1zm88HAOplEo-Y5nwwKjfEkXwtR0PHQ8W9CmNYb2DulVqHynJRfxvPCUmAPWXp7llw5LHim"
              alt="Colombo city skyline"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2">Western</h3>
              <p className="text-primary-fixed-dim font-bold">24 Active Reports</p>
            </div>
            <div className="relative z-10 text-right">
              <span className="material-symbols-outlined text-4xl opacity-50">
                map
              </span>
            </div>
          </div>

          {/* Individual province tiles */}
          {provinces.map((province) => (
            <div
              key={province.name}
              className="bg-surface-container-high p-6 rounded-4xl flex flex-col justify-between hover:bg-surface-container-highest transition-colors cursor-pointer"
            >
              <h3 className="font-bold">{province.name}</h3>
              <p className="text-secondary font-black text-xl">{province.count}</p>
            </div>
          ))}

          {/* North Western — wide tile */}
          <div className="col-span-2 bg-surface-container-high p-6 rounded-4xl flex items-center justify-between hover:bg-surface-container-highest transition-colors cursor-pointer">
            <div>
              <h3 className="font-bold">North Western</h3>
              <p className="text-on-surface-variant text-sm">8 cases unresolved</p>
            </div>
            <span className="text-secondary font-black text-2xl">08</span>
          </div>
        </div>
      </div>
    </section>
  );
}
