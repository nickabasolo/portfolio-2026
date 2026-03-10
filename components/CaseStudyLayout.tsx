import React, { useState, useEffect } from 'react';
import { getAssetPath } from '../utils/paths';

interface CaseStudyLayoutProps {
  image: string;
  children: React.ReactNode;
  isSideProject?: boolean;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  image,
  children,
  isSideProject = false,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navItems = [
    { id: 'challenge', label: '01 Challenge' },
    { id: 'strategy', label: '02 Strategy' },
    { id: 'execution', label: '03 Execution' },
    { id: 'impact', label: '04 Impact' },
    { id: 'learnings', label: '05 Learnings' },
  ];

  // IntersectionObserver for sticky sidebar nav
  useEffect(() => {
    if (isSideProject) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isSideProject]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article className="pt-12 pb-32">
      {/* Hero Image */}
      <div className="rounded-[2.5rem] overflow-hidden mb-24 bg-stone-100 shadow-2xl shadow-stone-200/50 border border-stone-200">
        <img
          src={getAssetPath(image)}
          alt="Project hero"
          className="w-full object-cover max-h-[700px]"
        />
      </div>

      {/* Narrative Content with Sidebar */}
      <div
        className={`relative ${
          isSideProject
            ? 'max-w-3xl mx-auto'
            : 'grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16'
        }`}
      >
        {/* Sticky Sidebar (Hidden for side projects) */}
        {!isSideProject && (
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-8">
                Navigation
              </div>
              <nav className="flex flex-col space-y-4 border-l border-stone-100">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left pl-4 text-xs font-bold uppercase tracking-widest transition-all relative py-1 ${
                      activeSection === item.id
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
        <div className={!isSideProject ? 'max-w-3xl' : 'space-y-12'}>
          {children}
        </div>
      </div>
    </article>
  );
};

export default CaseStudyLayout;
