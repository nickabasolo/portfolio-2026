import React from 'react';
import { Section, TextContent, Quote, Metrics, Visual, GridList, SubSection, Table } from '../../components/CaseStudyPrimitives';
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
  subtitle: 'Empowering shift workers to submit compliant edit suggestions and saving managers hours of manual admin work every week',
  role: 'Senior Product Designer',
  duration: 'Q3 2025',
  company: 'Workstream',
  image: 'assets/case-studies/time-clock-hero.png',
  cardImage: 'assets/case-studies/time clock (5).png',
  tags: ['End-to-end', 'Web', 'Mobile', 'UX Research & Interviews', 'Compliance tech'],
  impact: [
    'Flagged timecards / 58% ↓',
    'Admin hours per week / 1.5 ↓'
  ],
};

// Set to true to show artifact placeholder boxes
const SHOW_PLACEHOLDERS = false;

const TimeClock: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image} navItems={[
      { id: 'the-brief', label: 'The brief' },
      { id: 'research', label: 'What the research revealed' },
      { id: 'real-problem', label: 'The real problem' },
      { id: 'execution', label: 'How we solved it' },
      { id: 'impact', label: 'What changed' },
      { id: 'learnings', label: 'What I learned' },
    ]}>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* ARTIFACT — Hero image (keep existing) */}
      {/* The angled mockup spread works well. Consider adding one more screen showing the shift summary "high score" moment — it's your most original idea and currently invisible at the top of the page. */}

      <CaseStudySummary
        title={summary.title}
        subtitle={summary.subtitle}
        role={summary.role}
        duration={summary.duration}
        company={summary.company}
        problem="Managers were losing 5+ hours a week to admin overhead: manually auditing and correcting flagged timecards that their workers were punching in to the system. They wanted a better timesheet experience."
        solution="On top of improving the manager's experience, I expanded strategy to include the worker's tools as well. Enabling workers to suggest their own corrections prevented them from ever reaching the manager."
        outcome="58% reduction in manual timecard edits and 1.5 hours reclaimed per manager, per week."
      />

      <Section id="the-brief"title="The brief">
        <TextContent>
          <p>Every Sunday night, restaurant managers face the same grind: wading through 40+ flagged timecards — missed breaks, forgotten clock-outs, disputed punches — each one requiring a manual investigation before payroll can close.</p>
          <p>The stakes are real. Inaccurate timecards mean labor law violations and significant fines. The process was unsustainable.</p>
          <p>I'd owned this product since its first line of design. When the brief landed — improve the manager's review dashboard — my instinct was the same as everyone else's: bulk actions, clearer error labels, faster filtering. A better eraser.</p>
        </TextContent>

        {/* ARTIFACT — Real product screenshot (existing) */}
        <img src={getAssetPath('assets/case-studies/Timesheet_before.png')} alt="Timesheet before redesign" className="w-full rounded-2xl" />
      </Section>

      <Section id="research"title="What the research revealed">
        <TextContent>
          <p>After interviewing 5 managers about their Sunday night routine, a pattern emerged that changed everything. Most of their time wasn't spent reviewing flags — it was spent chasing workers to find out what actually happened.</p>
          <p><em>Did you take this break? Did you forget to clock out? When did you actually leave?</em></p>
          <p>The dashboard wasn't the problem. Bad data at the source was the problem. Every error we prevented a worker from making was an error a manager never had to touch.</p>
          <p>I negotiated for additional discovery time by framing it as an ROI calculation, then spent time with 12 workers to understand their experience of the shift. Three intervention points emerged.</p>
        </TextContent>

        {/* ARTIFACT — Research synthesis (placeholder) */}
        {SHOW_PLACEHOLDERS && <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
          Artifact placeholder — Research synthesis / affinity map
        </div>}
      </Section>

      <Section id="real-problem"title="The real problem">
        <TextContent>
          <p>We stopped designing for the manager's dashboard. We started designing for the worker's shift.</p>
        </TextContent>

        <Table
          headers={["Moment", "What we learned", "Design response"]}
          rows={[
            [
              "Clock-in",
              "Workers often didn't know their break schedule for the day",
              "Surface the full shift agenda immediately on clock-in"
            ],
            [
              "Mid-shift",
              "Missed breaks are the #1 cause of labor fines",
              "Lock screen notifications requiring zero app interaction"
            ],
            [
              "Clock-out",
              "Workers knew about their errors but had no structured way to flag them",
              "Let workers request their own corrections"
            ]
          ]}
        />
      </Section>

      <Section id="execution"title="How we solved it">
        <SubSection heading="Visibility at the right moment">
          <TextContent>
            <p>Workers spend 95% of a shift away from their phone. The interface needed to work at the periphery — not demand attention, but be there when it mattered.</p>
            <p><strong>Notifications</strong> handled the lock screen layer: timed reminders before breaks and before clock-out, requiring zero interaction. <strong>The agenda view</strong> handled moments when workers were already in the app — a full timeline of what lay ahead, surfaced immediately on clock-in.</p>
          </TextContent>
        </SubSection>

        {/* ARTIFACT — Side-by-side mockup (placeholder) */}
        {SHOW_PLACEHOLDERS && <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
          Artifact placeholder — Lock screen notification + in-app agenda view (side-by-side)
        </div>}

        <SubSection heading="Edit requests, not edits">
          <TextContent>
            <p>The obvious solution — let workers edit their timecards directly — failed immediately in testing. Managers were wary of giving employees any access to payroll data.</p>
            <p>The fix was linguistic as much as it was visual: reframing "edits" as "suggestions." Workers could flag their own errors; managers retained final approval. The UI updated to match — request states, pending indicators, approval flows.</p>
            <p>A small wording change that completely reframed the trust dynamic.</p>
          </TextContent>
        </SubSection>

        {/* ARTIFACT — Exploration spread (placeholder) */}
        {SHOW_PLACEHOLDERS && <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
          Artifact placeholder — Rejected directions (direct edit, comment thread) vs. final suggestion flow
        </div>}

        {/* ARTIFACT — Final edit request flow (placeholder) */}
        {SHOW_PLACEHOLDERS && <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
          Artifact placeholder — Polished edit request flow
        </div>}

        <SubSection heading="Friction as a feature">
          <TextContent>
            <p>Beta users were making fewer errors — but they still weren't catching the ones that slipped through. The reason: the moment workers clocked out, they were gone.</p>
            <p>Inspired by video game end-screens, I designed the shift summary as a high-score moment rather than a confirmation dialog. Ticking earnings, haptic feedback, a full shift timeline — all designed to create a deliberate pause before the worker pocketed their phone.</p>
            <p>The goal wasn't delight for its own sake. It was to make the worker perform a final data audit when the memory was freshest.</p>
          </TextContent>
        </SubSection>

        {/* ARTIFACT — Screen recording (existing ReviewShift animation) */}
        <Visual label="High-Score Shift Summary UI">
          <ReviewShift />
        </Visual>

        {/* ARTIFACT — Static fallback (placeholder) */}
        {SHOW_PLACEHOLDERS && <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
          Artifact placeholder — Full-screen shift summary mockup (static)
        </div>}

        <SubSection heading="Cleaning up the manager's view">
          <TextContent>
            <p>With fewer errors coming in from upstream, the manager dashboard became a quieter place. The remaining polish: new status chips with specific, actionable microcopy replaced the blunt "flagged" row highlights that made the whole table feel loud.</p>
          </TextContent>
        </SubSection>

        {/* ARTIFACT — Before / after (existing BeforeAfterSlider) */}
        <BeforeAfterSlider
          beforeSrc={getAssetPath('assets/case-studies/Timesheet_before.png')}
          afterSrc={getAssetPath('assets/case-studies/Timesheet_after.png')}
          alt="Timesheet before and after redesign"
        />
      </Section>

      <Section id="impact"title="What changed">
        <Metrics items={[
          '58% reduction in flagged timecards',
          '1.5 hrs of admin time reclaimed per manager, per week',
          '23 worker-initiated corrections per week — errors caught before they ever reached a manager'
        ]} />

        {/* ARTIFACT — Data visualisation (placeholder) */}
        {SHOW_PLACEHOLDERS && <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
          Artifact placeholder — Pre/post timecard volume chart
        </div>}
      </Section>

      <Section id="learnings"title="What I learned">
        <GridList items={[
          {
            title: "Fix the pencil, not the eraser.",
            content: "The biggest ROI came from questioning the brief entirely. The manager dashboard was the eraser — it cleaned up mistakes after the fact. The worker experience was the pencil. Better inputs meant fewer corrections downstream. That reframe only happened because I pushed for more discovery time before committing to a solution."
          },
          {
            title: "Language is a design material.",
            content: "Reframing \"worker edits\" as \"worker suggestions\" wasn't a copywriting tweak — it was the solution. The UI followed the language, not the other way around. In B2B products where trust dynamics are complicated, word choice often does more work than the interface itself."
          },
          {
            title: "Delight earns its place when it has a job.",
            content: "The shift summary looks like a flourish. It was actually a data integrity mechanism. The best argument for delight in enterprise products isn't aesthetic — it's functional."
          }
        ]} />
      </Section>
      </div>
    </CaseStudyLayout>
  );
};

export default TimeClock;
