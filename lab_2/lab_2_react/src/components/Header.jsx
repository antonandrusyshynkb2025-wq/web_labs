function Header() {
  return (
    <header className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 text-white shadow-xl border border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-300 uppercase bg-indigo-950/80 border border-indigo-700/50 rounded-full">
            Junior Frontend Developer
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            Андрусишин Антон
          </h1>
          <p className="text-slate-300 max-w-xl text-sm md:text-base leading-relaxed">
            Створюю швидкі та адаптивні вебдодатки на React. Захоплююся сучасним UI/UX та Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:student@example.com"
            className="px-5 py-2.5 rounded-xl font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all duration-200 hover:scale-105"
          >
            Написати
          </a>
          <a
            href="https://github.com/antonandrusyshynkb2025-wq"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl font-medium text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all duration-200 hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;