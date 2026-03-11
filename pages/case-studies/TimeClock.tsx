import React from 'react';
import { Section, TextContent, Quote, Metrics, Visual, GridList, SubHeading, Table, JourneyMap } from '../../components/CaseStudyPrimitives';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { getAssetPath } from '../../utils/paths';
import ReviewShift from '../../components/ReviewShift';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'time-clock',
  kind: 'case-study' as const,
  title: 'Eliminating payroll errors at the source',
  subtitle: 'Empowering shift workers to submit compliant edit suggestions',
  role: 'Senior Product Designer',
  duration: 'Q3 2025',
  company: 'Workstream',
  image: 'assets/case-studies/time-clock-hero.png',
  tags: ['End-to-end', 'Web', 'Mobile', 'UX Research & Interviews', 'Compliance tech'],
  impact: [
    'Error Reduction / 58%',
    'Hours Saved / 1.5+'
  ],
};

const TimeClock: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image}>
      <div className="space-y-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CaseStudySummary
        role={summary.role}
        duration={summary.duration}
        company={summary.company}
        problem="Managers were losing 5+ hours a week to admin overhead: manually auditing and correcting flagged timecards that their workers were punching in to the system. They wanted a better timesheet experience."
        solution="On top of improving the manager's experience, I expanded strategy to include the worker's tools as well. Enabling workers to suggest their own corrections prevented them from ever reaching the manager."
        outcome="58% reduction in manual timecard edits and 1.5 hours reclaimed per manager, per week."
      />

      <Section id="challenge" number="01" title="Challenge">
        <TextContent>
          <p>The worker clock-in is the most critical touchpoint in the labor lifecycle. Every single shift begins with a worker tapping into Workstream to start their day.</p>
          <p>The problem: flagged timecards. When Workstream's system detected irregularities (missed clock-out, schedule conflicts, punch violations), it would flag them for manager review. Managers were losing 5+ hours a week to admin overhead: manually auditing and correcting flagged timecards that their workers were punching in to the system.</p>
        </TextContent>
        <img src={getAssetPath('assets/case-studies/Timesheet_before.png')} alt="Timesheet before redesign" className="w-full rounded-2xl" />
      </Section>

      <Section id="strategy" number="02" title="Strategy">
        <TextContent>
          <p>I could have designed a "better manager dashboard" — adding filtering, better visibility, bulk-edit tools. That would have sped up their Sunday night admin work by maybe 30%.</p>
          <p>Instead, I pivoted the strategy entirely: what if I prevented the problem at the source?</p>
          <p>By introducing worker-side editing and a gamified clock-out experience, I could encourage workers to suggest their own corrections before they ever reached the manager. The system would move compliance resolution from the manager's Sunday night to the worker's daily exit.</p>
        </TextContent>

        <SubHeading>Three Critical Touchpoints</SubHeading>
        <Table
          headers={["Touchpoint", "The Research Insight", "Design Strategy", "Business ROI"]}
          rows={[
            [
              "Clock-In",
              "Workers need schedule visibility before they start their shift.",
              "Display the day's expected hours and any outstanding requests upfront.",
              "Reduce schedule-related flags by 23%"
            ],
            [
              "Mid-Shift",
              "Workers often forget they missed lunch; a gentle reminder helps.",
              "Low-friction notification for unmet break requirements.",
              "Increase compliance rate by 18%"
            ],
            [
              "Clock-Out",
              "Gamification + transparency turns tedious admin into a delightful ritual.",
              "High-score summary UI with framed corrections as 'suggestions', not 'fixes'.",
              "58% reduction in flagged timecards"
            ]
          ]}
        />
      </Section>

      <Section id="execution" number="03" title="Execution">
        <SubHeading>Before & After: The Clock-Out Experience</SubHeading>
        <BeforeAfterSlider
          beforeSrc={getAssetPath('assets/case-studies/time-clock-before.png')}
          afterSrc={getAssetPath('assets/case-studies/time-clock-after.png')}
          alt="Clock-out experience before and after"
        />

        <SubHeading>High-Score Shift Summary</SubHeading>
        <TextContent>
          <p>The breakthrough moment: reframing corrections as "suggestions" rather than "fixes." When a worker sees a discrepancy between their logged time and their schedule, instead of a stern error message, they see a "High-Score Shift Summary" — a celebratory card showing their hours, tips, and pay, with optional corrections framed as suggestions to earn back compliance.</p>
        </TextContent>
        <Visual label="High-Score Shift Summary UI">
          <ReviewShift />
        </Visual>

        <SubHeading>Manager Dashboard Polish</SubHeading>
        <TextContent>
          <p>On the manager's side, the changes were quieter but crucial. The flagged timecard list became a feed of "worker-suggested corrections" — pre-filled with the worker's suggestion. Managers could now approve, adjust, or reject with a single tap. What previously took 8 minutes per card now took 20 seconds.</p>
        </TextContent>
      </Section>

      <Section id="impact" number="04" title="Impact">
        <Metrics items={[
          '58% Reduction in flagged timecards',
          '1.5 admin hours/week reclaimed on average',
          '23 corrections/week per worker on average'
        ]} />

        <TextContent>
          <p>The metrics tell the story: fewer flags, less manager overhead, and workers taking ownership of their own payroll. But the real impact was cultural — by shifting responsibility to the worker, we also shifted accountability. Workers understood their time better, managers had fewer surprises, and payroll ran smoother.</p>
        </TextContent>
      </Section>

      <Section id="learnings" number="05" title="Learnings">
        <GridList items={[
          {
            title: "Solving the cause, not the symptom",
            content: "A better manager dashboard would have optimized an inherently broken process. Instead, we redesigned the system to prevent the problem at the source."
          },
          {
            title: "Using 'framing' as a design solution",
            content: "The same information (correction needed) presented as an error vs. a suggestion had wildly different engagement. Language and context matter as much as pixels and buttons."
          },
          {
            title: "Delight as 'meaningful friction'",
            content: "Gamification isn't about making work fun—it's about introducing intentional moments that make workers pause and pay attention to details that matter."
          },
          {
            title: "Designing for real life",
            content: "This project succeeded because we spent time on the floor—watching how workers actually clock in, observing when they forget breaks, seeing what questions they ask. Proximity to the problem is irreplaceable."
          }
        ]} />
      </Section>
      </div>
    </CaseStudyLayout>
  );
};

export default TimeClock;
