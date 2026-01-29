
import React from 'react';
import { CaseStudy } from '../types';
import { Section, TextContent, Quote, Metrics, Visual, GridList } from './CaseStudyPrimitives';

interface Props {
  project: CaseStudy;
}

const CaseStudyReadyToWork: React.FC<Props> = ({ project }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-32">
      {/* 01 Challenge */}
      <Section number="01" title="Challenge">
        <TextContent>
          <p>For enterprise labor, "Compliance" is often a reactive fire-drill. Tracking thousands of local certifications across 10,000+ workers was done in static spreadsheets, leading to workers unknowingly performing shifts while legally out of compliance.</p>
        </TextContent>
        <Visual label="Legacy Compliance Spreadsheet: The 'Reactive' Model" />
      </Section>

      {/* 02 Strategy */}
      <Section number="02" title="Strategy">
        <TextContent>
          <p>From Archive to Engine. I proposed reframing document management from a passive storage system into an active gatekeeper that dictates shift eligibility.</p>
        </TextContent>
        <Quote text="If a document is the key to working a shift, the system shouldn't just store the key—it should turn the lock. We moved from 'Document Status' to 'Worker Readiness'." />
      </Section>

      {/* 03 Execution: Readiness Score */}
      <Section number="03" title="Execution: Readiness Score">
        <TextContent>
          <p>We built a "Readiness Score" system that aggregates document expiration, training progress, and local laws into a simple binary status: Ready / Not Ready.</p>
        </TextContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 border border-stone-200 rounded-3xl space-y-4">
            <div className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">Automation</div>
            <p className="text-sm text-stone-600 leading-relaxed">Automated SMS triggers nudge workers to re-certify 30 days before expiration, preventing scheduling gaps.</p>
          </div>
          <div className="p-8 bg-amber-50 border border-amber-100 rounded-3xl space-y-4">
            <div className="text-amber-700 font-bold text-[10px] uppercase tracking-widest">Hard Blocks</div>
            <p className="text-sm text-amber-800 leading-relaxed">The system proactively blocks managers from assigning shifts to non-compliant workers, eliminating legal risk.</p>
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
            title: "Proactive Gatekeeping",
            content: "Enterprise systems should prevent errors from happening rather than just logging them after the fact."
          },
          {
            title: "Abstracting Complexity",
            content: "Users don't need to see the 50 laws governing a shift; they just need to know if the person is 'Ready to Work'."
          }
        ]} />
      </Section>
    </div>
  );
};

export default CaseStudyReadyToWork;
