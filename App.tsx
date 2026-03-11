
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TimeClock from './pages/case-studies/TimeClock';
import PerformanceReviews from './pages/case-studies/PerformanceReviews';
import ManagerDashboard from './pages/case-studies/ManagerDashboard';
import GuardianDataViz from './pages/side-projects/GuardianDataViz';
import TimeAuction from './pages/side-projects/TimeAuction';
import PortfolioChatbot from './pages/side-projects/PortfolioChatbot';
import About from './pages/About';
import Resume from './pages/Resume';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab from current path
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/about') return 'about';
    if (path === '/resume') return 'resume';
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
      case 'resume':
        navigate('/resume');
        break;
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900">
      <Navbar activeTab={getActiveTab()} setActiveTab={handleTabChange} />

      <main className="flex-1 w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-study/time-clock" element={<TimeClock />} />
          <Route path="/case-study/performance-reviews" element={<PerformanceReviews />} />
          <Route path="/case-study/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/side-project/guardian-data-viz" element={<GuardianDataViz />} />
          <Route path="/side-project/time-auction" element={<TimeAuction />} />
          <Route path="/side-project/portfolio-chatbot" element={<PortfolioChatbot />} />
        </Routes>
      </main>

      <footer className="py-24 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-8">
          <button
            onClick={() => handleTabChange('about')}
            className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-amber-600 transition-all shadow-xl shadow-stone-900/10 group"
          >
            Contact
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <div className="text-stone-400 text-sm text-center">
            Designed in Figma and built in Cursor with Claude AI
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
