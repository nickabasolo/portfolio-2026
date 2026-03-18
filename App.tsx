
import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TimeClock from './pages/case-studies/TimeClock';
import LaborCost from './pages/case-studies/LaborCost';
import BreakRules from './pages/case-studies/BreakRules';
import GuardianDataViz from './pages/side-projects/ThirdParties';
import TernaryPlotTool from './pages/side-projects/TernaryPlotTool';
import TimeAuction from './pages/side-projects/TimeAuction';
import PortfolioChatbot from './pages/side-projects/PortfolioChatbot';
import About from './pages/About';
import GridMockup from './pages/GridMockup';
import PageTransition from './components/PageTransition';

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
    <div className="min-h-screen flex flex-col bg-brand-bg selection:bg-amber-200 selection:text-amber-900">
      <Navbar activeTab={getActiveTab()} setActiveTab={handleTabChange} />

      <main className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition routeKey="/"><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition routeKey="/about"><About /></PageTransition>} />
<Route path="/case-study/time-clock" element={<PageTransition routeKey="/case-study/time-clock"><TimeClock /></PageTransition>} />
            <Route path="/case-study/labor-cost" element={<PageTransition routeKey="/case-study/labor-cost"><LaborCost /></PageTransition>} />
            <Route path="/case-study/break-rules" element={<PageTransition routeKey="/case-study/break-rules"><BreakRules /></PageTransition>} />
            <Route path="/third-parties" element={<Navigate to="/side-project/third-parties/tool" replace />} />
            <Route path="/side-project/third-parties" element={<Navigate to="/side-project/third-parties/case-study" replace />} />
            <Route path="/side-project/third-parties/case-study" element={<PageTransition routeKey="/side-project/third-parties/case-study"><GuardianDataViz /></PageTransition>} />
            <Route path="/side-project/third-parties/tool" element={<PageTransition routeKey="/side-project/third-parties/tool"><TernaryPlotTool /></PageTransition>} />
            <Route path="/side-project/time-auction" element={<PageTransition routeKey="/side-project/time-auction"><TimeAuction /></PageTransition>} />
            <Route path="/side-project/portfolio-chatbot" element={<PageTransition routeKey="/side-project/portfolio-chatbot"><PortfolioChatbot /></PageTransition>} />
            <Route path="/mockup" element={<PageTransition routeKey="/mockup"><GridMockup /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="py-24 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-8">
          {location.pathname !== '/about' && (
            <button
              onClick={() => handleTabChange('about')}
              className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-amber-600 transition-all shadow-xl shadow-stone-900/10 group"
            >
              Contact
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          )}
          <div className="text-stone-400 text-sm text-center">
            Designed in Figma and built in Cursor with Claude AI
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
};

export default App;
