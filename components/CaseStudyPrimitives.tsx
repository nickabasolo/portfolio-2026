
import React from 'react';

interface SectionProps {
  number?: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ number, title, id, children }) => (
  <section id={id} className="scroll-mt-32">
    <div className="mb-3">
      <h2 className="font-serif text-2xl font-normal text-stone-900 leading-[32px]">
        {number ? `${number}. ${title}` : title}
      </h2>
    </div>
    {/* 24px between subsections within a section */}
    <div className="space-y-6">
      {children}
    </div>
  </section>
);

export const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-semibold text-stone-900 leading-[24px] mb-2">
    {children}
  </h3>
);

export const SubSection: React.FC<{ heading: string; children: React.ReactNode }> = ({ heading, children }) => (
  <div>
    <SubHeading>{heading}</SubHeading>
    {children}
  </div>
);

export const TextContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-base font-normal text-stone-700 leading-[19px] space-y-4">
    {children}
  </div>
);

export const Quote: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative py-4 pl-8 md:pl-10">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-600 rounded-full" />
    <p className="text-stone-800 font-serif text-lg md:text-xl leading-relaxed">
      "{text}"
    </p>
  </div>
);

export const Metrics: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
    {items.map((item, idx) => {
      const [label, val] = item.split(' / ');
      return (
        <div key={idx} className="py-2 space-y-1">
          <div className="text-3xl font-mono text-stone-900">{val}</div>
          <div className="text-xs text-stone-400 leading-snug">{label}</div>
        </div>
      );
    })}
  </div>
);

export const Visual: React.FC<{ label: string; bg?: string; children?: React.ReactNode }> = ({ label, bg = "bg-stone-50", children }) => (
  <div className={`${!children ? 'aspect-[16/9] text-stone-400 text-xs italic' : 'py-10'} ${bg} rounded-lg flex items-center justify-center border border-stone-200 overflow-hidden relative px-6 md:px-10`}>
    {children || <span>[ {label} ]</span>}
  </div>
);

export const GridList: React.FC<{ items: { title: string; content: string }[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((item, idx) => (
      <div key={idx} className="space-y-2 p-6 bg-stone-50 rounded-lg border border-stone-200">
        <h4 className="text-stone-900 text-base font-medium">{item.title}</h4>
        <p className="text-stone-600 text-sm leading-relaxed">{item.content}</p>
      </div>
    ))}
  </div>
);

export const Table: React.FC<{
  headers: string[];
  rows: string[][];
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto bg-stone-50 border border-stone-200 rounded-lg">
    <table className="w-full text-left border-collapse min-w-[800px]">
      <thead>
        <tr className="border-b border-stone-200">
          {headers.map((h, i) => (
            <th key={i} className="py-4 px-5 text-[10px] uppercase tracking-widest font-bold text-stone-400">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-stone-200 last:border-0 align-top hover:bg-stone-100/50 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="py-4 px-5 text-[13px] md:text-sm text-stone-700 leading-relaxed">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const JourneyMap: React.FC = () => (
  <div className="w-full bg-stone-50 rounded-lg border border-stone-200 p-8 md:p-10 space-y-8 relative overflow-hidden my-8">
    <div className="flex items-center justify-between">
      <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Contextual Attention Map</div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-stone-600">User Attention</span>
      </div>
    </div>

    <div className="relative h-[300px] md:h-[350px]">
      {/* Horizontal Reference Lanes */}
      <div className="absolute inset-0 flex flex-col justify-between py-6">
        <div className="border-t border-stone-200 w-full relative">
          <span className="absolute -top-6 left-0 text-[9px] uppercase tracking-widest font-bold text-stone-400">The Real World</span>
        </div>
        <div className="border-t border-stone-200 border-dashed w-full relative">
          <span className="absolute -top-6 left-0 text-[9px] uppercase tracking-widest font-bold text-stone-400">Lock Screen</span>
        </div>
        <div className="border-t border-stone-200 w-full relative">
          <span className="absolute -top-6 left-0 text-[9px] uppercase tracking-widest font-bold text-stone-400">In App</span>
        </div>
      </div>

      {/* SVG Path Curve */}
      <svg viewBox="0 0 1000 350" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path
          d="M 0,30
             C 100,30 150,175 200,175
             C 250,175 300,320 350,320
             C 400,320 450,30 550,30
             L 750,30
             C 800,30 850,320 900,320
             L 1000,320"
          fill="none"
          stroke="#b45309"
          strokeWidth="3"
          strokeLinecap="round"
          className="drop-shadow-sm"
        />

        {/* Interaction Labels */}
        <g className="text-[11px] font-serif italic font-bold fill-stone-900">
          <circle cx="200" cy="175" r="4" fill="#b45309" />
          <text x="212" y="170">Get notification</text>

          <circle cx="350" cy="320" r="4" fill="#b45309" />
          <text x="362" y="315">See agenda</text>

          <text x="600" y="25" className="fill-stone-400 font-sans uppercase tracking-widest text-[9px]">Cooking, Serving, etc.</text>

          <circle cx="900" cy="320" r="4" fill="#b45309" />
          <text x="820" y="310">Audit summary</text>
        </g>
      </svg>
    </div>

    <div className="pt-6 border-t border-stone-200 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-stone-400">
      <span>Shift Start</span>
      <span className="text-stone-300">— — — — — —</span>
      <span>Shift End</span>
    </div>
  </div>
);
