import { experiencesData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A timeline of my professional roles, engineering contributions, and team leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-slate-800">
          {experiencesData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/30 z-10">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Content Box */}
                <div className="w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-0.5">{item.role}</h3>
                  <div className="text-sm font-semibold text-indigo-400">{item.company}</div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
