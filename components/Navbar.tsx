
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'work', label: 'Work', path: '/' },
    { id: 'about', label: 'About & Contact', path: '/about' },
    { id: 'resume', label: 'Resume', path: '/resume' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-serif font-medium tracking-tight hover:text-amber-600 transition-colors"
        >
          Nick Abasolo
        </Link>

        <div className="hidden md:flex space-x-8">
          {tabs.map((tab) => (
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
        </div>

        <div className="md:hidden">
          <select
            className="bg-transparent text-sm font-medium outline-none"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {tabs.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
