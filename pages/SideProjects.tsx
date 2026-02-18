
import React from 'react';
import { Link } from 'react-router-dom';
import { SIDE_PROJECTS } from '../constants';
import { getAssetPath } from '../utils/paths';

const SideProjects: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="max-w-2xl mb-16 space-y-4">
        <h1 className="text-5xl font-serif">Side Projects</h1>
        <p className="text-stone-500 text-lg">Experiments, explorations, and work outside the 9-to-5 that keep me inspired and learning.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SIDE_PROJECTS.map((project) => (
          <div key={project.id} className="group space-y-6">
            <Link
              to={`/side-project/${project.id}`}
              className="aspect-[4/3] bg-stone-100 rounded-3xl overflow-hidden relative border border-stone-200 shadow-sm cursor-pointer block"
            >
              <img src={getAssetPath(project.image)} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-[0.15em] text-stone-600 border border-stone-100 shadow-sm">
                  {project.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-stone-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl">
                  Read Story
                </span>
              </div>
            </Link>
            <div className="space-y-3 px-2">
              <div className="flex items-center justify-between">
                <Link
                  to={`/side-project/${project.id}`}
                  className="font-serif text-2xl text-stone-900 hover:text-amber-600 transition-colors"
                >
                  {project.title}
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-amber-600 transition-colors"
                    title="External Link"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-stone-500 leading-relaxed">{project.description}</p>
              <Link
                to={`/side-project/${project.id}`}
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors pt-2"
              >
                View Case Study <span className="ml-1 text-lg">›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Playground / Dribbble-like grid section */}
      <section className="mt-40">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 whitespace-nowrap">The Lab / Experiments</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="aspect-square bg-stone-100 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-stone-200 group">
              <img src={`https://picsum.photos/seed/lab-${i}/600/600`} alt="Lab Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SideProjects;
