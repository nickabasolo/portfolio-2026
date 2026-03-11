import React from 'react';

interface CaseStudySummaryProps {
  role: string;
  duration: string;
  company: string;
  problem: string;
  solution: string;
  outcome: string;
}

const CaseStudySummary: React.FC<CaseStudySummaryProps> = ({
  role,
  duration,
  company,
  problem,
  solution,
  outcome,
}) => {
  return (
    <section className="mb-20 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-y-6 lg:border-r border-stone-200 pr-6">
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Role</div>
            <div className="text-stone-800 font-medium text-base">{role}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Timeline</div>
            <div className="text-stone-800 font-medium text-base">{duration}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Company</div>
            <div className="text-stone-800 font-medium text-base">{company}</div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-stone-900 font-medium text-sm">The Challenge</div>
              <p className="text-stone-700 text-sm leading-relaxed">{problem}</p>
            </div>
            <div className="space-y-2">
              <div className="text-stone-900 font-medium text-sm">The Solution</div>
              <p className="text-stone-700 text-sm leading-relaxed">{solution}</p>
            </div>
            <div className="space-y-2">
              <div className="text-stone-900 font-medium text-sm">The Outcome</div>
              <p className="text-stone-800 font-medium text-sm leading-relaxed">{outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySummary;
