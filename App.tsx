
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab from current path
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/about') return 'about';
    return 'work';
  };

  const handleTabChange = (tab: string) => {
    switch (tab) {
      case 'work':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900">
      <Navbar activeTab={getActiveTab()} setActiveTab={handleTabChange} />

      <main className="flex-1 max-w-6xl mx-auto px-6 w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study/:projectId" element={<CaseStudyDetail />} />
          <Route path="/side-project/:projectId" element={<CaseStudyDetail />} />
        </Routes>
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
