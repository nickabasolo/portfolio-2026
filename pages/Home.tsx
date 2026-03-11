import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getAssetPath } from '../utils/paths';
import { useScrollToTop } from '../hooks/useScrollToTop';

const CHAT_LIMIT = 10;
const CHAT_COUNT_KEY = 'portfolio-chat-count';

// Map source paths to friendly labels
const SOURCE_LABELS: Record<string, string> = {
  '/about': 'About me',
  '/resume': 'Resume',
  '/case-study/time-clock': 'Time Clock case study',
  '/case-study/performance-reviews': 'Performance Reviews',
  '/case-study/manager-dashboard': 'Manager Dashboard',
  '/side-project/guardian-data-viz': 'Guardian Data Viz',
  '/side-project/time-auction': 'Time Auction',
  '/side-project/portfolio-vibe-code': 'Portfolio Vibecode',
};

function parseCitations(text: string): { cleanText: string; citations: { path: string; label: string }[] } {
  const citations: { path: string; label: string }[] = [];
  const cleanText = text.replace(/\[Source:\s*([^\]]+)\]/g, (_, path) => {
    const trimmed = path.trim();
    if (!citations.some(c => c.path === trimmed)) {
      citations.push({ path: trimmed, label: SOURCE_LABELS[trimmed] || trimmed });
    }
    return '';
  }).trim();
  return { cleanText, citations };
}

function getChatCount(): number {
  try {
    return parseInt(localStorage.getItem(CHAT_COUNT_KEY) || '0', 10);
  } catch {
    return 0;
  }
}

function incrementChatCount(): number {
  const count = getChatCount() + 1;
  try {
    localStorage.setItem(CHAT_COUNT_KEY, String(count));
  } catch {}
  return count;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  citations?: { path: string; label: string }[];
}

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

  @keyframes dotPulse {
    0%, 80%, 100% { opacity: 0.3; }
    40% { opacity: 1; }
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

  .dot-pulse span {
    animation: dotPulse 1.4s infinite ease-in-out both;
  }
  .dot-pulse span:nth-child(1) { animation-delay: 0s; }
  .dot-pulse span:nth-child(2) { animation-delay: 0.2s; }
  .dot-pulse span:nth-child(3) { animation-delay: 0.4s; }

  .chat-scroll::-webkit-scrollbar {
    width: 4px;
  }
  .chat-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .chat-scroll::-webkit-scrollbar-thumb {
    background: #d6d3cd;
    border-radius: 99px;
  }
  .chat-scroll::-webkit-scrollbar-thumb:hover {
    background: #a8a39a;
  }
  .chat-scroll {
    scrollbar-width: thin;
    scrollbar-color: #d6d3cd transparent;
  }

  .chat-markdown p { margin: 0 0 0.4em 0; }
  .chat-markdown p:last-child { margin-bottom: 0; }
  .chat-markdown strong { font-weight: 600; color: #44403c; }
  .chat-markdown ul { margin: 0.25em 0 0.4em 1.2em; padding: 0; list-style: disc; }
  .chat-markdown li { margin-bottom: 0.15em; }
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
  const [askInput, setAskInput] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(() => getChatCount() >= CHAT_LIMIT);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const phrases = [
    'about my projects',
    'about my design process',
    'about my background',
    'anything...'
  ];

  const prefix = 'Ask me ';

  // Auto-scroll container to bottom when messages change
  useEffect(() => {
    if (messages.length === 0) return;
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  // Placeholder typing animation
  useEffect(() => {
    // Stop placeholder animation once chat has started
    if (messages.length > 0) return;

    const currentPhrase = phrases[currentPhraseIndex];
    const fullPhrase = prefix + currentPhrase;
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < fullPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullPhrase.slice(0, displayedText.length + 1));
        }, 50);
      } else {
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
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentPhraseIndex, messages.length]);

  const sendMessage = async () => {
    const trimmed = askInput.trim();
    if (!trimmed || isLoading) return;

    if (getChatCount() >= CHAT_LIMIT) {
      setRateLimited(true);
      return;
    }

    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setAskInput('');
    setIsLoading(true);
    incrementChatCount();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      if (response.status === 429) {
        setRateLimited(true);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "You've sent quite a few questions! Nick is happy to chat with you directly!",
          citations: [{ path: '/about', label: 'About me' }],
        }]);
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again in a moment.',
        }]);
        setIsLoading(false);
        return;
      }

      // Stream the response
      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader');

      const decoder = new TextDecoder();
      let buffer = '';
      let fullContent = '';

      // Add empty assistant message to stream into
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                fullContent += parsed.content;
                const { cleanText, citations } = parseCitations(fullContent);
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: 'assistant',
                    content: cleanText,
                    citations: citations.length > 0 ? citations : undefined,
                  };
                  return updated;
                });
              }
            } catch {}
          }
        }
      }

      // Final parse to catch any remaining citations
      const { cleanText, citations } = parseCitations(fullContent);
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: cleanText,
          citations: citations.length > 0 ? citations : undefined,
        };
        return updated;
      });
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again in a moment.',
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAskKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

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
      {/* Hero Section — three fixed zones: hero text | scrollable messages | input */}
      <section className="w-full px-6 md:px-16 lg:px-[180px] h-[75vh] flex flex-col justify-center">

        {/* Zone 1: Hero text — shrink-0, always visible at top when chat is active */}
        <div className="max-w-[640px] space-y-4 shrink-0 py-8">
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

        {/* Zone 2: Scrollable messages — only appears and takes space when there are messages */}
        {messages.length > 0 && (
          <div className="relative flex-1 min-h-0 w-full max-w-2xl">
            {/* Gradient fade — top */}
            <div className="absolute top-0 left-0 right-0 h-8 pointer-events-none z-10" style={{ background: 'linear-gradient(to bottom, #FAF9F6, transparent)' }} />
            <div
              ref={messagesContainerRef}
              className="h-full overflow-y-auto min-h-0 py-10 chat-scroll"
            >
            <div className="space-y-5">
              {messages.map((msg, i) => (
                <div key={i}>
                  {msg.role === 'user' ? (
                    <div className="flex justify-end">
                      <div
                        className="px-4 py-3 rounded-2xl text-sm text-stone-600 leading-relaxed"
                        style={{ backgroundColor: '#EDE8D0', maxWidth: 400 }}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ) : (
                    <div style={{ maxWidth: 560 }}>
                      <div className="text-sm text-stone-500 leading-relaxed chat-markdown">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                      {msg.citations && msg.citations.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {msg.citations.map((cite, j) => (
                            <Link
                              key={j}
                              to={cite.path}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-amber-600 transition-colors border border-stone-200 rounded-full px-3 py-1"
                            >
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6.5 11.5L3 11.5C2.17 11.5 1.5 10.83 1.5 10V3C1.5 2.17 2.17 1.5 3 1.5H10C10.83 1.5 11.5 2.17 11.5 3V6.5" />
                                <path d="M8.5 7.5L14.5 1.5" />
                                <path d="M10.5 1.5H14.5V5.5" />
                              </svg>
                              {cite.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div style={{ maxWidth: 560 }}>
                  <div className="dot-pulse text-stone-400 text-lg">
                    <span>.</span><span>.</span><span>.</span>
                  </div>
                </div>
              )}
            </div>
            </div>
            {/* Gradient fade — bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none z-10" style={{ background: 'linear-gradient(to top, #FAF9F6, transparent)' }} />
          </div>
        )}

        {/* Zone 3: Input — shrink-0, always visible at bottom when chat is active */}
        <div className="shrink-0 w-full max-w-2xl pb-8 animate-slide-up delay-300">
          {rateLimited ? (
            <div className="text-sm text-stone-500 text-center py-4">
              You've used all your questions for now.{' '}
              <Link to="/about" className="text-amber-600 hover:text-amber-700 underline">
                Nick is happy to chat with you directly!
              </Link>
            </div>
          ) : (
            <div className="relative w-full">
              <input
                type="text"
                value={askInput}
                onChange={(e) => setAskInput(e.target.value)}
                onKeyDown={handleAskKeyDown}
                disabled={isLoading}
                className="w-full px-6 py-4 pr-14 rounded-2xl border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all bg-transparent disabled:opacity-50"
              />
              {askInput === '' && !isLoading && messages.length === 0 && (
                <div className="absolute left-6 top-4 text-stone-400 pointer-events-none">
                  {displayedText}
                  <span className="typing-cursor text-stone-400"></span>
                </div>
              )}
              {askInput === '' && messages.length > 0 && !isLoading && (
                <div className="absolute left-6 top-4 text-stone-400 pointer-events-none">
                  Ask a follow-up...
                </div>
              )}
              <button
                onClick={sendMessage}
                disabled={!askInput.trim() || isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-stone-900 text-white disabled:opacity-30 transition-opacity hover:bg-stone-800"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12V4" />
                  <path d="M4 8L8 4L12 8" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Work Section - Case Studies */}
      <section className="space-y-12 w-full max-w-[1080px] mx-auto px-6 md:px-8">
        <div className="flex items-center gap-6">
          <h2 className="text-md text-stone-400">Selected work</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="space-y-16 md:space-y-24 w-full">
          {CASE_STUDIES.map((project) => {
            const coming = isComingSoon(project.duration);
            const metrics = getMetrics(project.id, project.impact);
            const subtitleText = `${project.company}, ${project.duration}`;
            const routePath = `/case-study/${project.id}`;
            const cardImage = (project as any).cardImage || project.image;

            return (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center md:h-[480px] transition-all ${
                  coming ? 'opacity-60' : ''
                }`}
              >
                {/* Text Content - Left */}
                <div className="flex flex-col justify-between md:flex-[0.40] w-full md:h-full order-2 md:order-1">
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
                <div className="relative overflow-hidden bg-stone-100 md:flex-[0.60] w-full aspect-[16/10] md:aspect-auto md:h-full rounded-lg order-1 md:order-2">
                  {coming ? (
                    <>
                      <img
                        src={getAssetPath(cardImage)}
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
                        src={getAssetPath(cardImage)}
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
      <section className="space-y-12 w-full max-w-[1080px] mx-auto px-6 md:px-8 mt-16 md:mt-32">
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
