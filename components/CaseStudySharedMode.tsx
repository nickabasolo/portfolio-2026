
import React from 'react';
import { CaseStudy } from '../types';
import { Section, TextContent, Quote, Metrics, Visual, GridList } from './CaseStudyPrimitives';

interface Props {
  project: CaseStudy;
}

const CaseStudySharedMode: React.FC<Props> = ({ project }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-32">
      {/* 01 Challenge */}
      <Section number="01" title="Challenge">
        <TextContent>
          <p>In a high-pressure kitchen, an iPad isn't a personal device—it's a shared appliance. The previous interface was cluttered and lacked hierarchy, making it impossible for managers to see at a glance who was on break or where staffing gaps existed.</p>
          <p>The device is often operated with greasy hands, under harsh overhead lighting, and by dozens of workers in 3-second intervals.</p>
        </TextContent>
        <Visual label="Kitchen Environment Context: High Contrast Needs" />
      </Section>

      {/* 02 Strategy */}
      <Section number="02" title="Strategy">
        <TextContent>
          <p>Ambient Awareness. We moved away from a "list of names" to a "grid of status." The goal was to make the shop's operational status legible from 10 feet away.</p>
        </TextContent>
        <Quote text="We treated the tablet as a dashboard for the room, not just a tool for the individual. If a manager can't understand the shop's health in one glance, the UX has failed." />
      </Section>

      {/* 03 Execution: Zone Layout */}
      <Section number="03" title="Execution: Zone Layout">
        <TextContent>
          <p>I introduced a "Zone-Based" layout that utilizes high-contrast status cues. Amber for 'Ending Soon', Red for 'Late', and Green for 'On Shift'. This created an ambient display that required zero cognitive load to interpret.</p>
        </TextContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-stone-100 rounded-3xl space-y-4">
            <div className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">Cognitive Load</div>
            <p className="text-sm text-stone-600 leading-relaxed">Reduced decision density by hiding non-essential worker details until a specific profile is tapped.</p>
          </div>
          <div className="p-8 bg-stone-900 text-stone-300 rounded-3xl space-y-4">
            <div className="text-amber-400 font-bold text-[10px] uppercase tracking-widest">Tap Reduction</div>
            <p className="text-sm leading-relaxed">Primary transitions (Break Start/End) were moved to the top level, reducing a 5-tap flow to just 2.</p>
          </div>
        </div>
      </Section>

      {/* 04 Impact */}
      <Section number="04" title="Impact">
        <Metrics items={project.impact} />
      </Section>

      {/* 05 Learnings */}
      <Section number="05" title="Learnings">
        <GridList items={[
          {
            title: "Design for Distance",
            content: "UI elements must be sized and contrasted for the '10-foot rule' when designing for shared physical environments."
          },
          {
            title: "Ambient over Active",
            content: "In high-pressure roles, users don't want to 'interact' with software; they want to absorb information passively."
          }
        ]} />
      </Section>
    </div>
  );
};

export default CaseStudySharedMode;
