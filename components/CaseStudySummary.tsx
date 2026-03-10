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
    <section className="mb-16">
      <div className="bg-white border border-stone-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-y-8 lg:border-r border-stone-100 pr-4">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700">Role</div>
              <div className="text-stone-800 font-medium text-lg">{role}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700">Timeline</div>
              <div className="text-stone-800 font-medium text-lg">{duration}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700">Company</div>
              <div className="text-stone-800 font-medium text-lg">{company}</div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-3">
                <div className="text-stone-900 font-bold text-sm">The Challenge</div>
                <p className="text-stone-600 text-sm leading-relaxed">{problem}</p>
              </div>
              <div className="space-y-3">
                <div className="text-stone-900 font-bold text-sm">The Solution</div>
                <p className="text-stone-600 text-sm leading-relaxed">{solution}</p>
              </div>
              <div className="space-y-3">
                <div className="text-stone-900 font-bold text-sm">The Outcome</div>
                <p className="text-stone-800 font-bold text-sm leading-relaxed">{outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySummary;
