import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, MapPin, CheckSquare, CheckCircle2, Award } from 'lucide-react';

const Experience = () => {
  const internshipAchievements = [
    "Supported regional cooperation administration processes, streamlining inter-agency correspondence.",
    "Drafted, reviewed, and cataloged official government letters and legal document drafts.",
    "Coordinated logistics, agendas, and material preparation for high-level government meetings.",
    "Prepared presentation materials, official meeting minutes, and participant attendance reports.",
    "Maintained and archived legal cooperation documents and regional collaboration records."
  ];

  const orgHighlights = [
    "Organized internal HR programs and talent engagement initiatives.",
    "Coordinated cross-functional events and gatherings for 50+ active members.",
    "Facilitated structured training activities and development sessions.",
    "Managed member documentation, attendance records, and organizational database."
  ];

  // Shared date+location badge component
  const MetaBadge = ({ date, location }) => (
    <div className="flex flex-col md:items-end gap-1 text-stone-500 font-semibold text-xs shrink-0 bg-stone-50/80 p-3 rounded-2xl border border-stone-100/50">
      <span className="flex items-center gap-1.5 text-stone-700">
        <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
        {date}
      </span>
      <span className="flex items-center gap-1.5 mt-1 text-stone-500">
        <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-400" />
        {location}
      </span>
    </div>
  );

  return (
    <section className="py-10 max-w-7xl mx-auto" id="experience">

      {/* ─── WORK EXPERIENCE ─── */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Work Experience
        </h2>
        <div className="w-12 h-1 bg-rose-600/30 rounded-full mt-4"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-stone-100/60 shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-1">
                Internship
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                Administrative Staff Intern
              </h3>
              <h4 className="text-sm sm:text-base font-semibold text-rose-600 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
                Sekretariat Daerah Kabupaten Kotawaringin Timur
              </h4>
            </div>
            <MetaBadge date="Oct 2021 – Nov 2021" location="Kotawaringin Timur, Indonesia" />
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-rose-500" />
              Key Contributions &amp; Achievements
            </h5>
            <ul className="space-y-3.5">
              {internshipAchievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-3 text-stone-600 font-medium text-sm leading-relaxed"
                >
                  <div className="p-1 bg-rose-50 rounded-lg text-rose-600 shrink-0 mt-0.5 shadow-sm border border-rose-100/30">
                    <CheckSquare className="w-3.5 h-3.5" />
                  </div>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ─── ORGANIZATIONAL EXPERIENCE ─── */}
      <div className="flex flex-col items-center text-center mt-16 mb-12" id="organizational">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Organizational Experience
        </h2>
        <div className="w-12 h-1 bg-rose-600/30 rounded-full mt-4"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 border border-stone-100/50 shadow-md relative overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-rose-50/40 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-48 h-48 rounded-full bg-amber-50/30 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-stone-100 pb-6 mb-8">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                HR Department
              </span>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                Human Resources Coordinator
              </h3>
              <h4 className="text-base font-semibold text-rose-600">
                UKM Saman Giri Gayo
              </h4>
            </div>
            <MetaBadge date="Nov 2019 – Dec 2020" location="Surabaya, Indonesia" />
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Key Responsibilities &amp; Highlights
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orgHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3.5 p-4 bg-stone-50/40 hover:bg-stone-50 rounded-2xl border border-stone-100/40 transition-colors duration-300"
                >
                  <div className="p-1.5 bg-white rounded-lg shadow-sm border border-stone-100 text-rose-500 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Experience;
