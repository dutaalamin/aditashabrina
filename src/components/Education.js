import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const coursework = [
    "Office Management & Archives",
    "Public Sector Organization",
    "Human Resource Development",
    "Public Relations & Communications",
    "Administrative Law",
    "Public Service Management"
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto" id="education">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Education History
        </h2>
        <div className="w-12 h-1 bg-rose-600/30 rounded-full mt-4"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 border border-stone-100/50 shadow-md relative overflow-hidden"
        >
          {/* Subtle Pink/Rose Glow Background */}
          <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-rose-100/30 blur-2xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-rose-500 to-rose-400 text-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg shadow-rose-200/50">
              <GraduationCap className="w-10 h-10 md:w-12 md:h-12" />
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 border-b border-stone-100 pb-5">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    Universitas Pembangunan Nasional Veteran Jawa Timur
                  </h3>
                  <p className="text-base font-semibold text-rose-600 mt-1">
                    Bachelor of Public Administration
                  </p>
                </div>
                <div className="inline-flex flex-col items-center md:items-end gap-1.5 shrink-0">
                  <div className="flex items-center gap-1 bg-rose-50 border border-rose-100 text-rose-700 font-extrabold text-sm px-3.5 py-1.5 rounded-xl">
                    <Star className="w-4 h-4 fill-rose-600 text-rose-600" />
                    <span>GPA: 3.45 / 4.00</span>
                  </div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-1">
                    Class of 2022
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center justify-center md:justify-start gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                  Key Coursework & Competence Areas
                </h4>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {coursework.map((course, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-semibold px-3 py-1.5 bg-stone-50 border border-stone-100/60 text-stone-600 rounded-xl hover:bg-rose-50 hover:text-rose-700 hover:border-rose-100 transition-all cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
