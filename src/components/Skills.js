import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, FolderOpen, BarChart3, Calendar, Keyboard,
  Grid, FileSpreadsheet, Play, Mail, 
  MessageSquare, Lightbulb, Search, Clock, Users, RefreshCw,
  Globe, Check
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Administrative Excellence",
      icon: <FileText className="w-5 h-5 text-rose-600" />,
      skills: [
        { name: "Document Management", icon: <FileText className="w-4 h-4" /> },
        { name: "Filing & Records Management", icon: <FolderOpen className="w-4 h-4" /> },
        { name: "Administrative Reporting", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Office Coordination", icon: <Calendar className="w-4 h-4" /> },
        { name: "Data Entry", icon: <Keyboard className="w-4 h-4" /> }
      ]
    },
    {
      title: "Microsoft Office & Productivity",
      icon: <Grid className="w-5 h-5 text-rose-600" />,
      skills: [
        { name: "Microsoft Excel", icon: <FileSpreadsheet className="w-4 h-4 text-emerald-600" /> },
        { name: "Microsoft Word", icon: <FileText className="w-4 h-4 text-blue-600" /> },
        { name: "Microsoft PowerPoint", icon: <Play className="w-4 h-4 text-orange-600" /> },
        { name: "Google Sheets", icon: <Grid className="w-4 h-4 text-emerald-500" /> },
        { name: "Google Docs", icon: <FileText className="w-4 h-4 text-blue-500" /> },
        { name: "Outlook", icon: <Mail className="w-4 h-4 text-sky-600" /> }
      ]
    },
    {
      title: "Professional Skills",
      icon: <Users className="w-5 h-5 text-rose-600" />,
      skills: [
        { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
        { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" /> },
        { name: "Attention to Detail", icon: <Search className="w-4 h-4" /> },
        { name: "Time Management", icon: <Clock className="w-4 h-4" /> },
        { name: "Team Collaboration", icon: <Users className="w-4 h-4" /> },
        { name: "Adaptability", icon: <RefreshCw className="w-4 h-4" /> }
      ]
    },
    {
      title: "Languages",
      icon: <Globe className="w-5 h-5 text-rose-600" />,
      skills: [
        { name: "Indonesian (Native)", details: "Fluent spoken & written" },
        { name: "English (Conversational)", details: "Professional working capacity" }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-10 max-w-7xl mx-auto" id="skills">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Professional Skill Set
        </h2>
        <div className="w-12 h-1 bg-rose-600/30 rounded-full mt-4"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8"
      >
        {categories.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            variants={cardVariants}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-stone-100 shadow-sm flex flex-col h-full"
          >
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-6">
              <div className="p-2 bg-rose-50 rounded-xl">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 tracking-tight">
                {category.title}
              </h3>
            </div>

            <div className="flex-1">
              {category.title === "Languages" ? (
                <div className="space-y-4">
                  {category.skills.map((lang, idx) => (
                    <div key={idx} className="flex flex-col p-4 bg-stone-50/55 border border-stone-100/50 rounded-xl hover:border-rose-200 transition-colors">
                      <span className="text-sm font-bold text-stone-800 flex items-center gap-2">
                        <Check className="w-4 h-4 text-rose-600" />
                        {lang.name}
                      </span>
                      <span className="text-xs text-stone-500 ml-6 font-medium mt-1">
                        {lang.details}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-stone-50/45 hover:bg-stone-50 rounded-xl border border-stone-100/30 hover:border-rose-100/70 transition-all group duration-300"
                    >
                      <div className="p-1.5 bg-white rounded-lg shadow-sm border border-stone-100 text-stone-400 group-hover:text-rose-600 group-hover:border-rose-100 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-stone-700 group-hover:text-stone-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
