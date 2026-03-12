import React, { useState, useEffect } from 'react';
import { getAssetPath } from '../utils/paths';

interface NavItem {
  id: string;
  label: string;
}

interface CaseStudyLayoutProps {
  image: string;
  children: React.ReactNode;
  isSideProject?: boolean;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { id: 'challenge', label: 'Challenge' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'execution', label: 'Execution' },
  { id: 'impact', label: 'Impact' },
  { id: 'learnings', label: 'Learnings' },
];

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  image,
  children,
  isSideProject = false,
  navItems = defaultNavItems,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);


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
    <article className="flex flex-col items-center bg-brand-bg">
      <div className="w-full px-6 md:px-20 py-12 md:py-32">
        {/* Narrative Content with Sidebar */}
        <div
          className={`relative mx-auto ${
            isSideProject
              ? 'max-w-[860px]'
              : 'grid grid-cols-1 lg:grid-cols-[280px_640px] gap-8 max-w-[1000px]'
          }`}
        >
          {/* Sticky Sidebar (Hidden for side projects) */}
          {!isSideProject && (
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`text-left text-sm font-normal transition-all relative py-1 ${
                        activeSection === item.id
                          ? 'text-stone-900 font-medium'
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
          <div className="space-y-12">
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
