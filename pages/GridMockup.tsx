import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MOCKUP — Platform card + case study grid layout
 * Visit /mockup to preview. Not linked from anywhere else.
 *
 * Proposes replacing the vertical alternating-row layout with a
 * CSS grid: platform card on the left spanning full height,
 * three case study cards stacked on the right.
 */

const CASE_STUDIES = [
  {
    id: 'time-clock',
    label: 'TIME CLOCK',
    title: 'From audit to autonomy',
    subtitle: 'Redesigning the worker shift experience to eliminate the errors managers had to clean up.',
    metrics: [{ label: 'FLAGS REDUCED', value: '58%' }, { label: 'ADMIN TIME SAVED', value: '1.5 hrs/wk' }],
    tags: ['Mobile', 'Worker-facing', 'Compliance'],
    path: '/case-study/time-clock',
  },
  {
    id: 'labour-cost',
    label: 'LABOUR COST',
    title: 'Designing for a metric that runs a restaurant',
    subtitle: 'A data visualisation tool that meets managers in the mental model they already use.',
    metrics: [],
    tags: ['Data viz', 'Desktop', 'Manager-facing'],
    path: '/case-study/performance-reviews',
  },
  {
    id: 'break-rules',
    label: 'COMPLIANCE',
    title: 'Break rules for people who aren\'t lawyers',
    subtitle: 'A compliance engine that translates labor law into natural language — for managers and workers alike.',
    metrics: [],
    tags: ['Systems design', 'Mobile + Desktop', 'Compliance'],
    path: '/case-study/manager-dashboard',
  },
];

const GridMockup: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Page label */}
      <div className="w-full max-w-[1080px] mx-auto px-6 md:px-8 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Layout mockup — not live
          </span>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <h2 className="text-md text-stone-400">Selected work</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
      </div>

      {/* THE GRID */}
      <div className="w-full max-w-[1080px] mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6 md:items-stretch">

          {/* LEFT — Platform context card */}
          <div className="flex flex-col justify-between bg-stone-900 text-white rounded-2xl p-8 md:p-10 min-h-[340px]">
            <div className="space-y-5">
              <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">
                The system
              </div>
              <h3 className="text-2xl font-serif leading-snug">
                Three years, one platform
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                These three case studies are windows into a single product I built from scratch — a mobile platform for the hourly workforce at Workstream.
              </p>
              <p className="text-sm text-stone-300 leading-relaxed">
                When I joined, workers didn't have a defined place in the product at all. Over three years I helped establish the hourly worker as a distinct persona and built the operational layer between a restaurant's business rules and the people carrying them out.
              </p>
              <p className="text-sm text-stone-400 leading-relaxed">
                Each case study zooms into a specific problem inside that system. This card is the view from outside it.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-700 space-y-2">
              <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">Scope</div>
              <div className="flex flex-wrap gap-2">
                {['0→1 platform', 'Worker mobile', 'Manager desktop', 'Compliance', 'Data viz'].map(tag => (
                  <span key={tag} className="text-xs text-stone-400 border border-stone-700 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase pt-2">Team</div>
              <div className="text-xs text-stone-400">PM · UX researcher · PMM · CSMs · Tech lead · ~8 engineers</div>
            </div>
          </div>

          {/* RIGHT — Three case study cards stacked */}
          <div className="flex flex-col gap-4 md:gap-5">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.id}
                to={cs.path}
                className="group flex flex-col md:flex-row gap-5 bg-white border border-stone-100 rounded-2xl p-6 hover:border-amber-200 hover:shadow-sm transition-all"
              >
                {/* Text */}
                <div className="flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold tracking-[0.18em] text-stone-400 uppercase">
                      {cs.label}
                    </div>
                    <h4 className="text-lg font-serif text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
                      {cs.title}
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {cs.subtitle}
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {cs.metrics.length > 0 && (
                      <div className="flex gap-6 shrink-0 ml-4">
                        {cs.metrics.map(m => (
                          <div key={m.label} className="text-right">
                            <div className="text-[9px] font-bold tracking-widest text-stone-400 uppercase">{m.label}</div>
                            <div className="text-lg font-mono text-stone-900">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center text-stone-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0 self-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10h12M10 4l6 6-6 6"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* Note */}
      <div className="w-full max-w-[1080px] mx-auto px-6 md:px-8 pb-12 text-xs text-stone-400 space-y-1">
        <div className="font-medium text-stone-500">Notes on this mockup</div>
        <ul className="list-disc list-inside space-y-1">
          <li>Platform card uses dark bg to visually distinguish it from the clickable case study cards — no hover state.</li>
          <li>Case study cards are compact horizontally, trading the large images for faster scanning. Images could be added as a right-side thumbnail if you want them.</li>
          <li>On mobile the layout stacks: platform card first, then the three case study cards below.</li>
          <li>The "Selected work" section heading stays exactly as-is.</li>
        </ul>
      </div>
    </div>
  );
};

export default GridMockup;
