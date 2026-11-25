function Experience() {
  const experiences = [
    {
      role: "React / Frontend Trainee",
      company: "Навчальні проєкти",
      period: "2026 — Теперішній час",
      desc: "Розробка SPA на React, робота з хуками, маршрутизація та адаптивна верстка з Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "JavaScript", "Vite"]
    },
    {
      role: "HTML/CSS Верстальник",
      company: "Практикум",
      desc: "Семантична верстка, робота з Flexbox, CSS Grid та медіазапитами.",
      tags: ["HTML5", "CSS3", "Figma", "Git"]
    }
  ];

  return (
    <section className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-slate-100 transition-all duration-200 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
        <div className="w-3 h-7 bg-indigo-600 rounded-full"></div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Досвід роботи</h2>
      </div>

      <div className="space-y-4">
        {experiences.map((item, index) => (
          <div 
            key={index} 
            className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/30 hover:scale-[1.01]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
              <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-md self-start sm:self-auto">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 mb-2">{item.company}</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;