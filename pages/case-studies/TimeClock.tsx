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

const TimeClock: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image}>
      <div className="space-y-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* ARTIFACT — Hero image (keep existing) */}
      {/* The angled mockup spread works well. Consider adding one more screen showing the shift summary "high score" moment — it's your most original idea and currently invisible at the top of the page. */}

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
          <p>Every Sunday night, restaurant managers face the same grind: wading through 40+ flagged timecards — missed breaks, forgotten clock-outs, disputed punches — each one requiring a manual investigation before submitting to payroll.</p>
          <p>The stakes are real. Inaccurate timecards mean labor law violations, thousands of dollars in fees, and ultimately an unfair and inaccurate paycheque for their team. The timesheet is critical, and the current process unsustainable.</p>
        </TextContent>

        {/* ARTIFACT — Real product screenshot */}
        {/* Use your existing legacy timesheet screenshot (PII redacted) here. One image. Let it breathe. The visual chaos of the old UI makes the case better than any copy can. */}
        <img src={getAssetPath('assets/case-studies/Timesheet_before.png')} alt="Timesheet before redesign" className="w-full rounded-2xl" />
      </Section>

      <Section id="strategy" number="02" title="Strategy">
        <TextContent>
          <p>The initial brief was to improve the manager's review dashboard. My first instinct was the same: bulk actions, clearer error labels, faster filtering.</p>
          <p>But after interviewing 5 managers about their Sunday routine, a pattern emerged: most of their time wasn't spent reviewing flags — it was spent chasing workers to find out what actually happened.</p>
          <p><strong>The real problem wasn't a bad dashboard. It was bad data at the source.</strong></p>
          <p>I negotiated for additional discovery time by reframing it as an ROI calculation: every error we prevented a worker from making was an error a manager never had to touch. We shifted focus entirely to the Worker Time Clock experience.</p>
          <p>After 12 interviews with workers, three intervention points emerged:</p>
        </TextContent>

        <Table
          headers={["Touchpoint", "Insight", "Design Response"]}
          rows={[
            [
              "Clock-in",
              "Workers often didn't know their break schedule",
              "Surface the full shift agenda on clock-in"
            ],
            [
              "Mid-shift",
              "Missed breaks are the #1 cause of labor fines",
              "Lock screen notifications requiring zero app interaction"
            ],
            [
              "Clock-out",
              "Workers knew about their errors — but had no way to flag them",
              "Let workers request their own corrections"
            ]
          ]}
        />

        {/* ARTIFACT — Process / research artifact */}
        {/* [placeholder artifact] */}
      </Section>

      <Section id="execution" number="03" title="Execution">
        <SubHeading>Giving workers visibility into their shift</SubHeading>
        <TextContent>
          <p>Workers spend 95% of a shift away from their phone. So the interface needed to work at the periphery, not demand attention.</p>
          <p><strong>Notifications</strong> handled the lock screen layer — timed reminders before breaks and before clock-out, requiring zero interaction. <strong>The agenda view</strong> handled moments when workers were already in the app: a full timeline of what lay ahead, surfaced immediately on clock-in.</p>
        </TextContent>

        {/* ARTIFACT — Side-by-side mockup */}
        {/* PLACEHOLDER FOR NOW. Show the notification (lock screen) alongside the in-app agenda view. Frame it as "two layers of the same system" — it makes the design logic legible at a glance. If you have a before/after of the clock-in screen, this is a good place for it. */}

        <SubHeading>Letting workers fix their own mistakes</SubHeading>
        <TextContent>
          <p>The obvious solution — let workers edit their timecards directly — failed immediately in testing. Managers were wary of giving employees any access to payroll data.</p>
          <p>The fix was linguistic as much as it was visual: <strong>reframing "edits" as "suggestions."</strong> A small wording change that completely reframed the trust dynamic. Workers could flag their own errors; managers retained final approval. The UI updated to match — request states, pending indicators, approval flows.</p>
        </TextContent>

        {/* ARTIFACT — Exploration / iteration spread */}
        {/* PLACEHOLDER. This is where your process assets earn their place. Show 2-3 rejected directions (direct edit, comment thread, etc.) alongside the final suggestion flow. The contrast makes the decision feel earned. Even rough wireframes work here — you don't need polished screens. */}

        {/* ARTIFACT — Final mockup: Edit request flow */}
        {/* PLACEHOLDER. The polished request screen. Annotate the key decision: the language ("suggest" not "edit") and how the UI reinforces the manager's sense of control. */}

        <SubHeading>Friction as a feature: the shift summary</SubHeading>
        <TextContent>
          <p>Beta users were making fewer errors — but they still weren't catching the ones that slipped through. The reason: the moment workers clocked out, they were mentally disengaged as well.</p>
          <p>Inspired by video game end-screens, I designed the shift summary as a high-score moment rather than a confirmation dialog. Ticking earnings, haptic feedback, a full shift timeline — all designed to create a deliberate pause before the worker pocketed their phone.</p>
          <p><strong>The goal wasn't delight for its own sake. It was to make the worker perform a final data audit when the memory was freshest.</strong></p>
        </TextContent>

        {/* ARTIFACT — Video / prototype recording */}
        {/* Keep the current animation module */}
        <Visual label="High-Score Shift Summary UI">
          <ReviewShift />
        </Visual>

        <SubHeading>Timesheet polish (manager side)</SubHeading>
        <TextContent>
          <p>With the worker experience reducing upstream errors, the manager dashboard became a much quieter place. The remaining polish focused on clarity: new status chips with specific, actionable microcopy replaced the blunt "flagged" row highlights that made the whole table feel loud.</p>
        </TextContent>

        {/* ARTIFACT — Before / after */}
        {/* Current sliding module */}
        <BeforeAfterSlider
          beforeSrc={getAssetPath('assets/case-studies/Timesheet_before.png')}
          afterSrc={getAssetPath('assets/case-studies/Timesheet_after.png')}
          alt="Timesheet before and after redesign"
        />
      </Section>

      <Section id="impact" number="04" title="Impact">
        <TextContent>
          <p>One month post-launch, the results validated the upstream strategy.</p>
        </TextContent>

        <Metrics items={[
          '58% reduction in flagged timecards',
          '1.5 hrs of admin time reclaimed per manager, per week',
          '23 worker-initiated corrections per week — errors caught before they ever reached a manager'
        ]} />

        {/* ARTIFACT — Data visualization */}
        {/* If you have pre/post timecard volume data, even a simple bar or line chart here adds credibility and visual variety. Alternatively, three large stat callouts (as you currently have) work fine — just give them more vertical space and connect each one back to the design decision that drove it in a single line of caption text. */}
      </Section>

      <Section id="learnings" number="05" title="Learnings">
        <GridList items={[
          {
            title: "Fix the pencil, not the eraser.",
            content: "The biggest ROI came from questioning the brief entirely. The manager dashboard was the eraser — it cleaned up mistakes after the fact. The worker experience was the pencil. Better inputs meant fewer corrections downstream. That reframe only happened because I pushed for more discovery time before committing to a solution."
          },
          {
            title: "Language is a design material.",
            content: "Reframing \"worker edits\" as \"worker suggestions\" wasn't a copywriting tweak — it was the solution. The UI followed the language, not the other way around. In B2B products where trust dynamics are complicated (employees, managers, legal compliance all in the same system), word choice often does more work than the interface itself."
          },
          {
            title: "Delight earns its place when it has a job.",
            content: "The shift summary \"high score\" moment looks like a flourish. It was actually a data integrity mechanism. Hiring managers sometimes push back on delight in enterprise products — this project gave me a concrete argument for why it belongs."
          }
        ]} />
      </Section>
      </div>
    </CaseStudyLayout>
  );
};

export default TimeClock;
