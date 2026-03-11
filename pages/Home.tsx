import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';
import { useScrollToTop } from '../hooks/useScrollToTop';

const animationStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes blink {
    0%, 49% {
      opacity: 1;
    }
    50%, 100% {
      opacity: 0;
    }
  }

  .animate-slide-up {
    opacity: 0;
    animation: slideInUp 2s ease-out forwards;
  }

  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 800ms; }
  .delay-300 { animation-delay: 1200ms; }
  .delay-500 { animation-delay: 1500ms; }
  .delay-700 { animation-delay: 2000ms; }

  .typing-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: currentColor;
    margin-left: 2px;
    animation: blink 1s infinite;
  }
`;
import { summary as timeClockSummary } from './case-studies/TimeClock';
import { summary as perfReviewsSummary } from './case-studies/PerformanceReviews';
import { summary as managerDashboardSummary } from './case-studies/ManagerDashboard';
import { summary as guardianDataVizSummary } from './side-projects/GuardianDataViz';
import { summary as timeAuctionSummary } from './side-projects/TimeAuction';
import { summary as portfolioVibeSummary } from './side-projects/PortfolioVibecode';

const CASE_STUDIES = [timeClockSummary, perfReviewsSummary, managerDashboardSummary];
const SIDE_PROJECTS = [guardianDataVizSummary, timeAuctionSummary, portfolioVibeSummary];

const Home: React.FC = () => {
  useScrollToTop();
  // TODO: Uncomment when "Ask me anything" is implemented
  // const [askInput, setAskInput] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    'about my projects',
    'about my design process',
    'about my background',
    'anything...'
  ];

  const prefix = 'Ask me ';

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const fullPhrase = prefix + currentPhrase;
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < fullPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullPhrase.slice(0, displayedText.length + 1));
        }, 50);
      } else {
        // Finished typing, pause for 2 seconds before backspacing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > prefix.length) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
      } else {
        // Finished backspacing to prefix, move to next phrase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentPhraseIndex]);

  // TODO: Uncomment when "Ask me anything" is implemented
  // const handleAskKeyDown = (e: React.KeyboardEvent) => {
  //   if (e.key === 'Enter') {
  //     navigate('/about');
  //   }
  // };

  const isComingSoon = (duration: string) => duration === 'In Progress';

  // Metric labels per project
  const getMetrics = (projectId: string, impact?: string[]) => {
    if (impact && impact.length > 0) {
      return [
        { label: impact[0].split(' / ')[0].toUpperCase(), value: impact[0].split(' / ')[1] || '—' },
        { label: impact[1]?.split(' / ')[0].toUpperCase() || 'METRIC', value: impact[1]?.split(' / ')[1] || '—' }
      ];
    }

    const placeholders: { [key: string]: Array<{ label: string; value: string }> } = {
      'performance-reviews': [
        { label: 'MANAGERS IMPACTED', value: '—' },
        { label: 'COMPLETION RATE', value: '—' }
      ],
      'manager-dashboard': [
        { label: 'TIME SAVED', value: '—' },
        { label: 'FLAGS REDUCED', value: '—' }
      ]
    };

    return placeholders[projectId] || [];
  };

  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: '#FAF9F6' }}>
      <style>{animationStyles}</style>
      {/* Hero Section */}
      <section className="space-y-8 w-full px-16 md:px-[180px] h-[75vh] flex flex-col justify-center">
        <div className="max-w-[640px] space-y-4">
          <div className="animate-slide-up delay-100">
            <h1 className="text-2xl font-serif leading-tight text-stone-900">
              Nick Abasolo
            </h1>
            <div className="text-amber-600 font-medium text-base">
              Senior Product Designer
            </div>
          </div>
          <p className="text-base text-stone-800 font-light leading-snug animate-slide-up delay-200">
            I design for humans navigating operational workflows and regulatory compliance in messy, real-world situations; whether they're on their feet, on a call, or just in the middle of life.
          </p>
        </div>

        {/* TODO: Hook up "Ask me anything" input to backend */}
        {/* <div className="relative w-full max-w-2xl animate-slide-up delay-300">
          <input
            type="text"
            value={askInput}
            onChange={(e) => setAskInput(e.target.value)}
            onKeyDown={handleAskKeyDown}
            className="w-full px-6 py-4 rounded-2xl border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all bg-transparent"
          />
          {askInput === '' && (
            <div className="absolute left-6 top-4 text-stone-400 pointer-events-none">
              {displayedText}
              <span className="typing-cursor text-stone-400"></span>
            </div>
          )}
        </div> */}
      </section>

      {/* Work Section - Case Studies */}
      <section className="space-y-12 w-full max-w-[1080px] mx-auto px-16 md:px-8">
        <div className="flex items-center gap-6">
          <h2 className="text-md text-stone-400">Selected work</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="space-y-24 w-full">
          {CASE_STUDIES.map((project) => {
            const coming = isComingSoon(project.duration);
            const metrics = getMetrics(project.id, project.impact);
            const subtitleText = `${project.company}, ${project.duration}`;
            const routePath = `/case-study/${project.id}`;

            return (
              <div
                key={project.id}
                className={`flex flex-row gap-16 items-center h-[480px] transition-all ${
                  coming ? 'opacity-60' : ''
                }`}
              >
                {/* Text Content - Left */}
                <div className="flex flex-col justify-between flex-[0.40] h-full">
                  {/* Top Section */}
                  <div className="space-y-4">
                    <div className="space-y-0">
                      <h3 className="text-2xl font-serif text-stone-900 leading-tight">
                        {project.title}
                      </h3>
                      <div className="text-sm text-stone-400">
                        {subtitleText}
                      </div>
                    </div>
                    <p className="text-base text-stone-600 leading-tight">
                      {project.subtitle}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-stone-600 px-3 py-1.5 rounded-full bg-stone-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {!coming && metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-6 pt-4">
                        {metrics.map((metric, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="text-[10px] tracking-widest font-bold text-stone-400">
                              {metric.label}
                            </div>
                            <div className="text-2xl font-mono text-stone-900">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Section */}
                  <div>
                    {/* CTA */}
                    {!coming && (
                      <Link
                        to={routePath}
                        className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors group"
                      >
                        Read more{' '}
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    )}
                    {coming && (
                      <span className="text-sm font-medium text-stone-400">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Image - Right */}
                <div className="relative overflow-hidden bg-stone-100 flex-[0.60] h-full rounded-lg">
                  {coming ? (
                    <>
                      <img
                        src={getAssetPath(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-40"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold uppercase tracking-widest text-stone-600 bg-white/80 px-5 py-2.5 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={routePath}
                      className="block w-full h-full overflow-hidden group"
                    >
                      <img
                        src={getAssetPath(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fun Section - Side Projects */}
      <section className="space-y-12 w-full max-w-[1080px] mx-auto px-16 md:px-8 mt-32">
        <div className="flex items-center gap-6">
          <h2 className="text-md text-stone-400">Fun and side projects</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {SIDE_PROJECTS.map((project) => {
            const coming = isComingSoon(project.duration);
            const routePath = `/side-project/${project.id}`;

            return (
              <div
                key={project.id}
                className={`space-y-4 group transition-all ${coming ? 'opacity-60' : ''}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-[4/3] border border-stone-200">
                  {coming ? (
                    <>
                      <img
                        src={getAssetPath(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-40"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-stone-600 bg-white/80 px-4 py-2 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                    </>
                  ) : (
                    <Link to={routePath} className="block w-full h-full">
                      <img
                        src={getAssetPath(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  )}
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <Link
                    to={routePath}
                    className={`font-serif text-xl text-stone-900 ${
                      coming ? 'cursor-default' : 'hover:text-amber-600 transition-colors'
                    } block`}
                  >
                    {project.title}
                  </Link>

                  <div className="text-xs text-stone-400 font-medium uppercase tracking-widest">
                    {project.company}
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
