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
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isSideProject, navItems]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article className="flex flex-col items-center" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="w-full px-16 md:px-[180px] py-20">
        {/* Narrative Content with Sidebar */}
        <div
          className={`relative ${
            isSideProject
              ? 'max-w-4xl mx-auto'
              : 'grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16 max-w-4xl'
          }`}
        >
          {/* Sticky Sidebar (Hidden for side projects) */}
          {!isSideProject && (
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <div className="text-md text-stone-400 mb-8">
                  Navigation
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`text-left text-xs font-bold uppercase tracking-widest transition-all relative py-1 ${
                        activeSection === item.id
                          ? 'text-amber-600'
                          : 'text-stone-400 hover:text-stone-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Narrative Body - Centered */}
          <div className={!isSideProject ? 'max-w-3xl space-y-12' : 'space-y-12'}>
            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
              <img
                src={getAssetPath(image)}
                alt="Project hero"
                className="w-full object-cover max-h-[600px]"
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyLayout;
