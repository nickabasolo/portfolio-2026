
import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { CaseStudy, SideProject } from '../types';
import { CASE_STUDIES, SIDE_PROJECTS } from '../constants';
import { getAssetPath } from '../utils/paths';
import CaseStudyTimeClock from '../components/CaseStudyTimeClock';
import SideProjectGuardian from '../components/SideProjectGuardian';
import SideProjectPoetry from '../components/SideProjectPoetry';

const CaseStudyDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Determine if this is a side project based on URL path
  const isSideProjectRoute = location.pathname.startsWith('/side-project');

  // Find the project from either array
  const project = isSideProjectRoute
    ? SIDE_PROJECTS.find(p => p.id === projectId)
    : CASE_STUDIES.find(p => p.id === projectId) || SIDE_PROJECTS.find(p => p.id === projectId);

  const isSideProject = project ? 'category' in project : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useEffect(() => {
    if (isSideProject || !project) return;

    const sections = ['challenge', 'strategy', 'execution', 'impact', 'learnings'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projectId, isSideProject, project]);

  const navItems = [
    { id: 'challenge', label: '01 Challenge' },
    { id: 'strategy', label: '02 Strategy' },
    { id: 'execution', label: '03 Execution' },
    { id: 'impact', label: '04 Impact' },
    { id: 'learnings', label: '05 Learnings' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle project not found
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-serif text-stone-900 mb-4">Project not found</h1>
        <Link to="/" className="text-amber-600 hover:text-amber-700">← Back to Home</Link>
      </div>
    );
  }

  const allProjects = [...CASE_STUDIES, ...SIDE_PROJECTS];
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const nextProjectPath = 'category' in nextProject
    ? `/side-project/${nextProject.id}`
    : `/case-study/${nextProject.id}`;

  const backPath = isSideProject ? '/side-projects' : '/';

  const renderProjectNarrative = () => {
    switch (project.id) {
      case 'time-clock':
        return <CaseStudyTimeClock project={project as CaseStudy} />;
      case 'guardian-data-viz':
        return <SideProjectGuardian />;
      case 'time-auction':
        return <SideProjectPoetry />;
      default:
        return (
          <div className="max-w-3xl py-20 text-center text-stone-400 italic">
            Narrative for this project is currently being drafted.
          </div>
        );
    }
  };

  return (
    <article className="pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link
        to={backPath}
        className="mt-12 mb-12 text-sm font-medium text-stone-400 hover:text-amber-600 transition-colors flex items-center group"
      >
        <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Works
      </Link>

      {/* Shared Hero Header */}
      <header className="space-y-8 mb-12">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-600">
            {isSideProject ? 'Side Project' : 'Case Study'}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight text-stone-900 max-w-5xl">
          {project.title}
        </h1>
      </header>

      {/* Executive Summary for Case Studies only */}
      {!isSideProject && project.summary && (
        <section className="mb-16">
          <div className="bg-white border border-stone-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-y-8 lg:border-r border-stone-100 pr-4">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700">Role</div>
                  <div className="text-stone-800 font-medium text-lg">{project.role}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700">Timeline</div>
                  <div className="text-stone-800 font-medium text-lg">{project.duration}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700">Company</div>
                  <div className="text-stone-800 font-medium text-lg">{project.company}</div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="space-y-3">
                    <div className="text-stone-900 font-bold text-sm">The Challenge</div>
                    <p className="text-stone-600 text-sm leading-relaxed">{project.summary.problem}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-stone-900 font-bold text-sm">The Solution</div>
                    <p className="text-stone-600 text-sm leading-relaxed">{project.summary.solution}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-stone-900 font-bold text-sm">The Outcome</div>
                    <p className="text-stone-800 font-bold text-sm leading-relaxed">{project.summary.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Hero Image */}
      <div className="rounded-[2.5rem] overflow-hidden mb-24 bg-stone-100 shadow-2xl shadow-stone-200/50 border border-stone-200">
        <img src={getAssetPath(project.image)} alt={project.title} className="w-full object-cover max-h-[700px]" />
      </div>

      {/* Narrative Content */}
      <div className={`relative ${isSideProject ? 'max-w-3xl mx-auto' : 'grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16'}`}>
        {/* Sticky Sidebar (Hidden for side projects) */}
        {!isSideProject && (
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-8">Navigation</div>
              <nav className="flex flex-col space-y-4 border-l border-stone-100">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left pl-4 text-xs font-bold uppercase tracking-widest transition-all relative py-1 ${activeSection === item.id
                      ? 'text-amber-600'
                      : 'text-stone-400 hover:text-stone-600'
                      }`}
                  >
                    {activeSection === item.id && (
                      <span className="absolute left-[-1.5px] top-0 bottom-0 w-[2px] bg-amber-500 rounded-full" />
                    )}
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Narrative Body */}
        <div className={!isSideProject ? "max-w-3xl" : "space-y-12"}>
          {renderProjectNarrative()}
        </div>
      </div>

      {/* Next Project CTA */}
      <footer className="mt-48 pt-16 border-t border-stone-200">
        <div className="space-y-8">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Up Next</div>
          <Link
            to={nextProjectPath}
            className="w-full group relative overflow-hidden rounded-[2.5rem] bg-stone-900 p-12 md:p-20 text-left transition-all hover:shadow-2xl hover:shadow-amber-500/20 block"
          >
            <img
              src={getAssetPath(nextProject.image)}
              className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 group-hover:opacity-50 group-hover:grayscale-0 transition-all duration-1000"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent" />

            <div className="relative z-10 space-y-4 max-w-xl">
              <h3 className="text-4xl md:text-6xl font-serif text-white group-hover:text-amber-400 transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed line-clamp-2">
                {(nextProject as any).subtitle || (nextProject as any).description}
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center text-white text-sm font-medium">
                  {('category' in nextProject) ? 'View Experiment' : 'Read Case Study'}
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default CaseStudyDetail;
