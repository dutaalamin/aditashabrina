import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import ditaPhoto from '../images/dita.jpeg';

const CV_URL = process.env.PUBLIC_URL + '/CV - Adita Nurshabrina.pdf';

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-28 lg:py-0 bg-[#fcfbfa] overflow-hidden" id="home">
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-rose-50/60 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-50/40 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Column — Content */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          
          {/* Name — big display typography in solid pink */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="font-black leading-[0.95] tracking-tight text-pink-400 text-[clamp(3rem,8vw,5.5rem)]">
              Adita<br />Nurshabrina
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-stone-500 text-base sm:text-lg max-w-md leading-relaxed mb-10 font-medium mx-auto lg:mx-0"
          >
            Detail-oriented professional with expertise in document management, office coordination, and operational support — turning complexity into clarity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 no-print"
          >
            <button
              onClick={() => handleScroll('experience')}
              className="px-8 py-4 bg-stone-900 hover:bg-rose-950 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-stone-200/60 active:scale-95 hover:-translate-y-0.5"
            >
              View Experience
            </button>
            <a
              href={CV_URL}
              download="CV - Adita Nurshabrina.pdf"
              className="px-8 py-4 bg-white border-2 border-rose-200 hover:border-rose-400 hover:text-rose-700 text-stone-700 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-sm hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              MY CV
            </a>
          </motion.div>
        </div>

        {/* Right Column — Clean Circular Portrait */}
        <div className="w-full lg:w-[42%] flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative select-none"
          >
            {/* Main Image Container — Circular, borderless, clean */}
            <div className="w-60 h-60 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg bg-stone-100">
              <img
                src={ditaPhoto}
                alt="Adita Nurshabrina"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator — bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-30 no-print">
        <ArrowDown className="w-3.5 h-3.5 text-stone-400 animate-bounce" />
        <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">Scroll</span>
      </div>

    </section>
  );
};

export default Hero;
