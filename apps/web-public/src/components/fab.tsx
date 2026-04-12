export default function FAB() {
  return (
    <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-linear-to-br from-secondary to-secondary-container text-white shadow-2xl flex items-center justify-center scale-98 hover:scale-105 transition-all z-40 lg:hidden">
      <span className="material-symbols-outlined text-3xl">add_alert</span>
    </button>
  );
}
