import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left column — editorial text */}
        <div className="lg:col-span-7">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold tracking-wider uppercase mb-6">
            Critical Infrastructure Alert
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold font-headline tracking-tight leading-[1.1] text-on-surface mb-6">
            Make Broken Hospital Equipment{" "}
            <span className="text-primary">Visible</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            A public platform to report, verify, and track critical medical
            equipment issues in Sri Lankan government hospitals. Join the civic
            effort to restore essential healthcare.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 rounded-xl bg-linear-to-br from-secondary to-secondary-container text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all scale-98 flex items-center gap-2">
              <span className="material-symbols-outlined">emergency</span>
              Report an Issue
            </button>
            <button className="px-8 py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold text-lg hover:bg-outline-variant transition-all scale-98">
              View Active Cases
            </button>
          </div>

          {/* Search bar */}
          <div className="max-w-xl relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined">
              search
            </span>
            <input
              className="w-full pl-12 pr-6 py-4 bg-surface-container-lowest rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant"
              placeholder="Search hospital, district, or equipment"
              type="text"
            />
          </div>
        </div>

        {/* Right column — hero image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-4xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-surface-container-low p-2">
            <div className="relative h-[500px] rounded-[1.8rem] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD04tXsaiuHglmSqpdyW-ECm2rHmLFzBIBCaPkgD53mihXDaAPFMFrITqCYQJLAXm0gWB5yniH_z0sBXEv3eLV5LIpGoFuhppwFvWKuzrPY2exgo8QZWKYQ3HsjVKRbWxHQcTuCq1pPnU_nMphV_E08jv57I70dimMi8f5A7OXDxqulcbaa41lOTmfYrAu55X--ZVJLFGHTu4fkWdABfBIPgXZtrhRO02zTherA9yO3KMTe1pE5EpJ87B3AyThTvuS5c96vQq7UUtTG"
                alt="Hospital corridor with medical machinery"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
