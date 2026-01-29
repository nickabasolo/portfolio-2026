
import React from 'react';
import { CASE_STUDIES } from '../constants';

interface HomeProps {
  onProjectClick: (id: string) => void;
  onAboutClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onProjectClick, onAboutClick }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 space-y-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight text-stone-900">
          Hello! I'm <span className="italic text-amber-600">Nick Abasolo</span>.
        </h1>
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed max-w-2xl">
              Former economic analyst, part-time AI dabbler, full-time tea enthusiast.
            </p>
            <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed max-w-2xl">
              I also design products at Workstream, where I craft multimodal experiences for the restaurant workforce. 
            </p>
          </div>
          <button 
            onClick={onAboutClick}
            className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-amber-600 transition-all shadow-lg shadow-stone-900/10 group"
          >
            Learn more about me
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section>
        <div className="flex items-center justify-between mb-12 border-b border-stone-200 pb-4">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400">Selected Works</h2>
          <span className="text-xs text-stone-400">2024 — 2026</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
          {/* Main Case Study - Time Clock (Project 0) */}
          <div 
            className="md:col-span-8 md:row-span-2 group cursor-pointer relative overflow-hidden rounded-3xl bg-stone-900 flex flex-col justify-end p-8 md:p-12 transition-all hover:shadow-2xl hover:shadow-amber-500/10"
            onClick={() => onProjectClick('time-clock')}
          >
            <img 
              src={CASE_STUDIES[0].image} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              alt={CASE_STUDIES[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl md:text-5xl font-serif text-white">{CASE_STUDIES[0].title}</h3>
              <p className="text-stone-300 text-sm md:text-base max-w-md">{CASE_STUDIES[0].subtitle}</p>
            </div>
          </div>

          {/* Performance Reviews - Coming Soon (Project 1) */}
          <div 
            className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-3xl bg-white flex flex-col p-8 border border-stone-200"
          >
             <div className="flex-1 overflow-hidden rounded-2xl mb-6 shadow-sm grayscale opacity-60">
                <img 
                  src={CASE_STUDIES[1].image} 
                  className="w-full h-full object-cover"
                  alt=""
                />
             </div>
             <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-stone-900 px-2.5 py-1 bg-stone-100 rounded-full">Coming Soon</span>
                </div>
                <h3 className="text-2xl font-serif text-stone-900 leading-tight">{CASE_STUDIES[1].title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{CASE_STUDIES[1].subtitle}</p>
             </div>
          </div>

          {/* Manager Dashboard - Coming Soon (Project 2) */}
          <div 
            className="md:col-span-12 relative overflow-hidden rounded-3xl bg-white border border-stone-200 p-8 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden bg-stone-100 grayscale opacity-60">
              <img 
                src={CASE_STUDIES[2].image} 
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="flex-1 space-y-4">
               <div className="flex items-center">
                 <span className="text-[9px] uppercase tracking-widest font-bold text-stone-900 px-2.5 py-1 bg-stone-100 rounded-full">Coming Soon</span>
               </div>
               <div className="space-y-2">
                 <h3 className="text-2xl md:text-3xl font-serif text-stone-900">{CASE_STUDIES[2].title}</h3>
                 <p className="text-stone-500 text-sm md:text-base max-w-2xl">{CASE_STUDIES[2].subtitle}</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
