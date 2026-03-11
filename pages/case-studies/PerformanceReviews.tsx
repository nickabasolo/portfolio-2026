import React from 'react';
import { Section, TextContent } from '../../components/CaseStudyPrimitives';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'performance-reviews',
  kind: 'case-study' as const,
  title: 'Performance reviews for high-turnover industries',
  subtitle: 'Using AI to build high-fidelity prototypes to test complex, multi-user performance review cycles',
  role: 'Senior Product Designer',
  duration: 'In Progress',
  company: 'Workstream',
  image: 'assets/case-studies/performance-reviews-hero.png',
  tags: ['Performance Management', 'Multi-user Flows', 'B2B'],
  impact: [],
};

const PerformanceReviews: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image}>
      <div className="space-y-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CaseStudySummary
        role={summary.role}
        duration={summary.duration}
        company={summary.company}
        problem="Traditional reviews in high-turnover industries are often skipped or handled poorly due to administrative complexity."
        solution="A guided, low-friction flow that simplifies feedback loops for both managers and workers."
        outcome="In development."
      />

      <Section id="challenge" number="01" title="Challenge">
        <TextContent>
          <p>Traditional reviews in high-turnover industries are often skipped or handled poorly due to administrative complexity.</p>
          <p>This case study is currently in development. More details coming soon.</p>
        </TextContent>
      </Section>
      </div>
    </CaseStudyLayout>
  );
};

export default PerformanceReviews;
