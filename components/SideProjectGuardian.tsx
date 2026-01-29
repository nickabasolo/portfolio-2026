
import React from 'react';
import { TextContent, Visual } from './CaseStudyPrimitives';

const SideProjectGuardian: React.FC = () => {
  return (
    <div className="space-y-12">
      <TextContent>
        <p className="text-2xl font-serif text-stone-900 italic">Finding the connective tissue between disparate datasets.</p>
        <p>Featured in The Guardian’s “The Crunch” series, this data visualization project explores the intersections of climate, conflict, and Canadian politics. The core challenge was one of scale—mapping the industrial impact of Ukrainian drone strikes alongside the organic heat of marine heatwaves in a single, cohesive weekly digest.</p>
      </TextContent>

      <Visual label="Data Visualization Highlights" />

      <TextContent>
        <p>I developed a unified color theory that moved from industrial "conflict" cools to organic "climate" heats, utilizing a scrollytelling approach to let readers focus on one crisis at a time without losing the comparative context. The result was a featured editorial piece that made complex trends inevitable to the eye.</p>
      </TextContent>
      
      <div className="flex justify-center">
        <a 
          href="https://www.theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors border-b border-amber-200 pb-1"
        >
          View on The Guardian website
        </a>
      </div>
    </div>
  );
};

export default SideProjectGuardian;
