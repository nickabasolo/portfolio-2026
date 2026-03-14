import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const TernaryPlotTool: React.FC = () => {
  useScrollToTop();
  return (
    <div className="w-full animate-in fade-in duration-700 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-8 space-y-2">
        <h1 className="text-3xl font-serif text-stone-900">Canada's 2025 Election</h1>
        <p className="text-stone-500 max-w-xl">
          A ternary plot showing how all 343 electoral districts shifted their vote between 2021 and 2025.
          Hover a dot or search for your riding to explore the data.
        </p>
        <p style={{ fontSize: '10px', color: '#aaa', letterSpacing: '0.02em' }}>
          Source: Elections Canada official dataset &nbsp;·&nbsp; Data processed in Python &amp; Plotly, design refined in Figma
        </p>
      </div>
      <iframe
        src="/ternary_plot.html"
        title="Ternary Plot: 2021 vs 2025 Canadian Election Vote Share"
        className="w-full border-0"
        style={{ height: '840px' }}
      />
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Link
          to="/side-project/guardian-data-viz"
          className="flex items-center justify-between gap-6 bg-white border border-stone-200 rounded-2xl px-8 py-6 hover:border-amber-300 hover:shadow-sm transition-all group max-w-[480px]"
        >
          <div className="space-y-1">
            <p className="text-lg font-serif text-stone-900">Want to know how this was made?</p>
            <p className="text-sm text-stone-500">Read the full case study — data normalization, AI-assisted development, and Figma refinement.</p>
          </div>
          <span className="text-xl text-stone-400 shrink-0 group-hover:translate-x-1 group-hover:text-amber-600 transition-all">→</span>
        </Link>
      </div>
    </div>
  );
};

export default TernaryPlotTool;
