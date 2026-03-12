import React from 'react';

interface CaseStudySummaryProps {
  title?: string;
  subtitle?: string;
  role: string;
  duration: string;
  company: string;
  problem?: string;
  solution?: string;
  outcome?: string;
}

const CaseStudySummary: React.FC<CaseStudySummaryProps> = ({
  title,
  subtitle,
  role,
  duration,
  company,
}) => {
  return (
    <section className="mb-20 space-y-8">
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && <h1 className="font-serif text-4xl font-normal text-stone-900 leading-[44px]">{title}</h1>}
          {subtitle && <p className="text-base font-normal text-stone-500 leading-[19px]">{subtitle}</p>}
        </div>
      )}
      <div className="flex gap-12">
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
    </section>
  );
};

export default CaseStudySummary;
