import React from 'react';
import { Section, TextContent } from '../../components/CaseStudyPrimitives';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'manager-dashboard',
  kind: 'case-study' as const,
  title: 'The command center for frontline managers',
  subtitle: 'Consolidating fragmented labor data into a single view so managers can spot staffing issues and fix operational delays before they impact the bottom line',
  role: 'Senior Product Designer',
  duration: 'In Progress',
  company: 'Workstream',
  image: 'assets/case-studies/manager-dashboard-hero.png',
  tags: ['Data Visualization', 'Dashboard Design', 'Enterprise'],
  impact: [],
};

const ManagerDashboard: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image}>
      <div className="space-y-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CaseStudySummary
        role={summary.role}
        duration={summary.duration}
        company={summary.company}
        problem="Fragmented labor data across multiple tools makes it impossible for managers to see operational health in real-time."
        solution="A unified cockpit that surface exceptions and critical staffing gaps automatically."
        outcome="In development."
      />

      <Section id="challenge" number="01" title="Challenge">
        <TextContent>
          <p>Fragmented labor data across multiple tools makes it impossible for managers to see operational health in real-time.</p>
          <p>This case study is currently in development. More details coming soon.</p>
        </TextContent>
      </Section>
      </div>
    </CaseStudyLayout>
  );
};

export default ManagerDashboard;
