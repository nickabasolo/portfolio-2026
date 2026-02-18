
import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, SIDE_PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="space-y-10 flex-1">
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
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:nick@example.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-amber-600 transition-all shadow-lg shadow-stone-900/10 group"
                >
                  Contact me
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="/portfolio-2026/resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-stone-900 rounded-full font-medium border-2 border-stone-300 hover:border-amber-600 hover:text-amber-600 transition-all group"
                >
                  Download resume
                  <svg className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Headshot */}
          <div className="shrink-0">
            <img
              src="assets/about/headshot.png"
              alt="Nick Abasolo"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl shadow-stone-900/10"
            />
          </div>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section>
        <div className="mb-12 border-b border-stone-200 pb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
          {/* Main Case Study - Time Clock (Project 0) */}
          <Link
            to="/case-study/time-clock"
            className="md:col-span-8 md:row-span-2 group cursor-pointer relative overflow-hidden rounded-3xl bg-stone-900 flex flex-col justify-end p-8 md:p-12 transition-all hover:shadow-2xl hover:shadow-amber-500/10"
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
          </Link>

          {/* Performance Reviews - Coming Soon (Project 1) */}
          <div
            className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-3xl bg-white flex flex-col p-8 border border-stone-200 group"
          >
            <div className="flex-1 overflow-hidden rounded-2xl mb-6 shadow-sm relative">
              <img
                src={CASE_STUDIES[1].image}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-bold text-stone-900 px-5 py-2.5 bg-white/90 backdrop-blur rounded-full shadow-lg group-hover:scale-110 transition-transform">Coming Soon</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif text-stone-900 leading-tight">{CASE_STUDIES[1].title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{CASE_STUDIES[1].subtitle}</p>
            </div>
          </div>

          {/* Manager Dashboard - Coming Soon (Project 2) */}
          <div
            className="md:col-span-12 relative overflow-hidden rounded-3xl bg-white border border-stone-200 p-8 flex flex-col md:flex-row gap-8 items-center group"
          >
            <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden bg-stone-100 relative">
              <img
                src={CASE_STUDIES[2].image}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-bold text-stone-900 px-5 py-2.5 bg-white/90 backdrop-blur rounded-full shadow-lg group-hover:scale-110 transition-transform">Coming Soon</span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-serif text-stone-900">{CASE_STUDIES[2].title}</h3>
                <p className="text-stone-500 text-sm md:text-base max-w-2xl">{CASE_STUDIES[2].subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section>
        <div className="mb-12 mt-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">Side projects</h2>
          <p className="text-stone-500 max-w-2xl text-lg font-light">Creative coding, data visualization, and curiosities built outside my 9-to-5.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIDE_PROJECTS.map((project) => {
            const isComingSoon = project.duration === 'In Progress';

            return isComingSoon ? (
              <div key={project.id} className="group space-y-6">
                <div
                  className="aspect-[4/3] bg-stone-100 rounded-3xl overflow-hidden relative border border-stone-200 shadow-sm"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest font-bold text-stone-900 px-5 py-2.5 bg-white/90 backdrop-blur rounded-full shadow-lg group-hover:scale-110 transition-transform">Coming Soon</span>
                  </div>
                </div>
                <div className="space-y-2 px-2">
                  <span className="font-serif text-2xl text-stone-900">
                    {project.title}
                  </span>
                  <p className="text-stone-500 leading-relaxed text-sm">{project.description}</p>
                </div>
              </div>
            ) : (
              <div key={project.id} className="group space-y-6">
                <Link
                  to={`/side-project/${project.id}`}
                  className="aspect-[4/3] bg-stone-100 rounded-3xl overflow-hidden relative border border-stone-200 shadow-sm cursor-pointer block"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-stone-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl">
                      View Project
                    </span>
                  </div>
                </Link>
                <div className="space-y-2 px-2">
                  <Link
                    to={`/side-project/${project.id}`}
                    className="font-serif text-2xl text-stone-900 hover:text-amber-600 transition-colors block"
                  >
                    {project.title}
                  </Link>
                  {project.id === 'guardian-data-viz' && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      Featured in The Guardian
                    </span>
                  )}
                  <p className="text-stone-500 leading-relaxed text-sm">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
