
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';
import SideProjects from './pages/SideProjects';
import About from './pages/About';
import { CASE_STUDIES, SIDE_PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = [...CASE_STUDIES, ...SIDE_PROJECTS].find(p => p.id === selectedProjectId);

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo(0, 0);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedProjectId(null);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedProjectId && selectedProject) {
      return (
        <CaseStudyDetail 
          project={selectedProject} 
          onBack={() => setSelectedProjectId(null)}
          onNextProject={handleProjectSelect}
        />
      );
    }

    switch (activeTab) {
      case 'work':
        return (
          <Home 
            onProjectClick={handleProjectSelect} 
            onAboutClick={() => handleTabChange('about')} 
          />
        );
      case 'side-projects':
        return <SideProjects onProjectClick={handleProjectSelect} />;
      case 'about':
        return <About />;
      default:
        return <Home onProjectClick={handleProjectSelect} onAboutClick={() => handleTabChange('about')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      
      <main className="flex-1 max-w-6xl mx-auto px-6 w-full relative">
        {renderContent()}
      </main>

      <footer className="py-24 border-t border-stone-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-8">
          <div className="text-stone-900 font-medium text-lg text-center">
            Nick Abasolo, <span className="text-stone-400 font-normal italic">Product Designer</span>
          </div>
          <button 
            onClick={() => handleTabChange('about')}
            className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-amber-600 transition-all shadow-xl shadow-stone-900/10 group"
          >
            Get in touch
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <div className="text-stone-400 text-sm text-center mt-8">
            Built with <span className="text-stone-500">AI Studio</span> using <span className="text-amber-600">Gemini 3</span> & <span className="text-stone-500">Cursor</span> using <span className="text-purple-500">Claude Opus 4.5</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
