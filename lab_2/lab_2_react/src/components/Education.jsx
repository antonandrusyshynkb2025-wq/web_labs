function Education() {
  const educationList = [
    {
      degree: "Бакалавр: Кібербезпека та захист інформації",
      institution: "Національний університет \"Львівська політехніка\"",
      years: "2026 — 2026",
      details: "Вивчення алгоритмів, вебтехнологій, архітектури програмного забезпечення."
    },
    {
      degree: "Курс «Frontend Розробка з React»",
      years: "2026",
      details: "Робота з компонентами, станом, пропсами та Tailwind CSS."
    }
  ];

  return (
    <section className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-slate-100 transition-all duration-200 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
        <div className="w-3 h-7 bg-emerald-500 rounded-full"></div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Освіта</h2>
      </div>

      <div className="space-y-4">
        {educationList.map((edu, idx) => (
          <div 
            key={idx} 
            className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50/30 hover:scale-[1.01]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
              <h3 className="text-base font-semibold text-slate-900">{edu.degree}</h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md self-start sm:self-auto">
                {edu.years}
              </span>
            </div>
            <p className="text-sm font-medium text-emerald-700 mb-2">{edu.institution}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;