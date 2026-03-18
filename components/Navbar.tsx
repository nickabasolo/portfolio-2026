
import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navTabs = [
    { id: 'work', label: 'Work', path: '/' },
    { id: 'about', label: 'About & Contact', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md w-full">
      <div className="px-6 md:px-16 lg:px-[180px] h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-serif font-medium tracking-tight hover:text-amber-600 transition-colors"
        >
          Nick Abasolo
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navTabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`text-sm font-medium transition-all relative py-1 ${activeTab === tab.id
                ? 'text-stone-900'
                : 'text-stone-500 hover:text-stone-800'
                }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full" />
              )}
            </Link>
          ))}
          <a
            href={getAssetPath('assets/about/Resume - Nick Abasolo (2026).pdf')}
            download
            className="text-sm font-medium text-stone-500 hover:text-stone-800 transition-all flex items-center gap-1.5"
          >
            Resume
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
          </a>
        </div>

        <div className="md:hidden">
          <select
            className="bg-transparent text-sm font-medium outline-none"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {navTabs.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
            <option value="resume">Resume ↓</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
