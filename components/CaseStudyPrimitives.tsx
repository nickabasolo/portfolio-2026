
import React from 'react';

interface SectionProps {
  number: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ number, title, id, children }) => (
  <section id={id} className="space-y-6 md:space-y-8 scroll-mt-32">
    <div className="space-y-2">
      <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600">
        {number}. {title}
      </h2>
      <div className="h-0.5 w-12 bg-amber-200" />
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </section>
);

export const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl md:text-3xl font-serif text-stone-900 font-semibold leading-tight">
    {children}
  </h3>
);

export const TextContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-lg md:text-xl text-stone-600 leading-relaxed space-y-6">
    {children}
  </div>
);

export const Quote: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative py-4 pl-8 md:pl-12">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500/30 rounded-full" />
    <p className="text-stone-800 font-serif text-xl md:text-2xl leading-relaxed">
      "{text}"
    </p>
  </div>
);

export const Metrics: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
    {items.map((item, idx) => {
      const parts = item.split(' ');
      const val = parts[0];
      const rest = parts.slice(1).join(' ');
      return (
        <div key={idx} className="bg-stone-900 p-8 rounded-[2.5rem] space-y-2 group hover:bg-stone-800 transition-colors">
          <div className="text-4xl font-serif text-amber-400 group-hover:scale-110 transition-transform origin-left">{val}</div>
          <div className="text-xs uppercase tracking-widest text-stone-400 leading-snug">{rest}</div>
        </div>
      );
    })}
  </div>
);

export const Visual: React.FC<{ label: string; bg?: string; children?: React.ReactNode }> = ({ label, bg = "bg-stone-100", children }) => (
  <div className={`${!children ? 'aspect-[16/9]' : 'py-12'} ${bg} rounded-3xl flex items-center justify-center text-stone-400 text-xs italic border border-stone-200 overflow-hidden relative shadow-inner px-6 md:px-12`}>
    {children || <span>[ {label} ]</span>}
  </div>
);

export const GridList: React.FC<{ items: { title: string; content: string }[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {items.map((item, idx) => (
      <div key={idx} className="space-y-3 p-8 bg-stone-50 rounded-3xl border border-stone-100">
        <h4 className="text-stone-900 text-lg font-bold">{item.title}</h4>
        <p className="text-stone-600 text-sm leading-relaxed">{item.content}</p>
      </div>
    ))}
  </div>
);

export const Table: React.FC<{ 
  headers: string[]; 
  rows: string[][];
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 bg-white border border-stone-200 rounded-3xl">
    <table className="w-full text-left border-collapse min-w-[800px]">
      <thead>
        <tr className="border-b border-stone-200 bg-stone-50/50">
          {headers.map((h, i) => (
            <th key={i} className="py-5 px-6 text-[10px] uppercase tracking-widest font-bold text-amber-700">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-stone-100 last:border-0 align-top hover:bg-stone-50/30 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="py-6 px-6 text-[13px] md:text-sm text-stone-600 leading-relaxed">
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
  <div className="w-full bg-stone-50 rounded-[2.5rem] border border-stone-200 p-8 md:p-12 space-y-8 relative overflow-hidden shadow-inner my-12">
    <div className="flex items-center justify-between">
      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Contextual Attention Map</div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-amber-600">User Attention Curve</span>
        </div>
      </div>
    </div>

    <div className="relative h-[300px] md:h-[350px]">
      {/* Horizontal Reference Lanes */}
      <div className="absolute inset-0 flex flex-col justify-between py-6">
        <div className="border-t border-stone-200 w-full relative">
          <span className="absolute -top-6 left-0 text-[9px] uppercase tracking-[0.15em] font-bold text-stone-400">The Real World</span>
        </div>
        <div className="border-t border-stone-200 border-dashed w-full relative">
          <span className="absolute -top-6 left-0 text-[9px] uppercase tracking-[0.15em] font-bold text-stone-400">Lock Screen</span>
        </div>
        <div className="border-t border-stone-200 w-full relative">
          <span className="absolute -top-6 left-0 text-[9px] uppercase tracking-[0.15em] font-bold text-stone-400">In App</span>
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
          stroke="#f59e0b"
          strokeWidth="3"
          strokeLinecap="round"
          className="drop-shadow-sm"
        />
        
        {/* Interaction Labels */}
        <g className="text-[11px] font-serif italic font-bold fill-stone-900">
          <circle cx="200" cy="175" r="4" fill="#f59e0b" />
          <text x="212" y="170">Get notification</text>

          <circle cx="350" cy="320" r="4" fill="#f59e0b" />
          <text x="362" y="315">See agenda</text>
          
          <text x="600" y="25" className="fill-stone-400 font-sans uppercase tracking-widest text-[9px]">Cooking, Serving, etc.</text>

          <circle cx="900" cy="320" r="4" fill="#f59e0b" />
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
