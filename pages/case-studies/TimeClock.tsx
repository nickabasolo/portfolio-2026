import React from 'react';
import { Section, TextContent, Metrics, Visual, GridList, SubSection, Table } from '../../components/CaseStudyPrimitives';
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
    <CaseStudyLayout image={summary.image} navItems={[
      { id: 'the-brief', label: 'The ask' },
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

      <Section id="the-brief"title="The ask">
        <TextContent>
          <p>Every week, restaurant managers wade through 40+ flagged punches on the timesheet — missed breaks, forgotten clock-outs, disputed punches — each one requiring a manual investigation before payroll can close.</p>
          <p>The stakes are real: the timesheet is the record of truth for their payroll, where the average restaurant typically pays out $4,500 to employees each week. Inaccurate timesheets mean inaccurate payroll cheques — not including labor law violations and significant fines.</p>
          <p>So a timesheet riddled with flagged errors and compliance warnings was typically understood as difficult but necessary. That's why when we first started this project, the ask was simply to improve the manager's review flow. My instinct was the same as everyone else's: bulk actions, clearer error labels, faster filtering.</p>
        </TextContent>

        {/* ARTIFACT — Real product screenshot (existing) */}
        <figure className="space-y-2">
          <img src={getAssetPath('assets/case-studies/Timesheet_before.png')} alt="Timesheet before redesign" className="w-full rounded-2xl" />
          <figcaption className="text-xs text-neutral-400 dark:text-neutral-500">Real customer view — PII redacted</figcaption>
        </figure>
      </Section>

      <Section id="research"title="What the research revealed">
        <TextContent>
          <p>After interviewing 5 managers about their Sunday night routine, I noticed a pattern. Most of their time wasn't spent reviewing flags, but chasing down workers to find out what actually happened.</p>
          <p><em>Did you take this break? Did you forget to clock out? When did you actually leave?</em></p>
          <p>Sure, managers had their own problems with the dashboard; but most of their frustration actually stemmed from bad data at the source. Every error we solved upstream during the worker's shift was an error we saved the manager from dealing with. Even if we saved just one error per worker, that would save the manager of a typical restaurant 30 errors a week — or over 100 for the larger franchise stores.</p>
        </TextContent>

        <figure className="space-y-2">
          <img src={getAssetPath('assets/case-studies/gm round.png')} alt="Affinity map from manager and worker interviews" className="w-full rounded-2xl" />
          <figcaption className="text-xs text-neutral-400 dark:text-neutral-500">Research synthesis — themes across 17 interviews with managers and shift workers</figcaption>
        </figure>
      </Section>

      <Section id="real-problem"title="The real problem">
        <TextContent>
          <p>I negotiated for additional discovery time by framing it as an ROI calculation, then spent time with 12 workers to understand their experience of the shift. By mapping out the shift journey, I found three likely points where an intervention could have high-impact on reducing errors:</p>
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
            <p>Workers spend 95% of a shift away from their phone. Unlike desk workers, their attention is much further away from a screen and the digital experience, so the interface needed to integrate alongside their real-world work. <strong>Notifications</strong> handled the lock screen layer: timed reminders before breaks and before clock-out, requiring zero interaction.</p>
            <p>For the 5% of time when they are engaging with the app, we surface an <strong>agenda view</strong>. This is especially important at the moment of clock-in, which gives them a view into what the day will look like.</p>
          </TextContent>
        </SubSection>

        <img src={getAssetPath('assets/case-studies/timeclock-agenda and notif.png')} alt="Lock screen notification and in-app agenda view" className="w-full rounded-2xl" />

        <SubSection heading="Edit requests, not edits">
          <TextContent>
            <p>The obvious solution — let workers edit their timecards directly — failed immediately before we even tested. When I approached managers asking to test this solution, they were entirely against the idea of giving employees any edit-level access to payroll data.</p>
            <p>Even though the edit flow would require manager approval, this mental aversion from managers would be a barrier to adoption. I tried various other ways to present this workflow, and what landed was reframing "edits" as "suggestions."</p>
            <p>Workers could flag their own errors; managers retained final approval. The UI updated to match — request states, pending indicators, approval flows. Even though the underlying flow stayed the same, the wording and the way we presented it reframed the trust dynamic.</p>
          </TextContent>
        </SubSection>

<img src={getAssetPath('assets/case-studies/timeclock-requestedit.png')} alt="Edit request flow" className="w-full rounded-2xl" />

        <SubSection heading="Friction as a feature">
          <TextContent>
            <p>Once we got the feature into beta, we saw a modest reduction in errors, but I didn't see high levels of engagement with the edit request feature. It seemed like the moment workers clocked out, they were gone: physically and mentally.</p>
            <p>Inspired by video game end-screens, I designed the shift summary as a high-score moment rather than a confirmation dialog. Ticking earnings and haptic feedback were designed to create a deliberate pause before the worker pocketed their phone.</p>
            <p>The goal wasn't delight for its own sake — although it helped, given that this should also be a celebratory moment. But moreover, it was to make the worker perform a final data audit when the memory was freshest.</p>
          </TextContent>
        </SubSection>

        {/* ARTIFACT — Screen recording (existing ReviewShift animation) */}
        <Visual label="High-Score Shift Summary UI">
          <ReviewShift />
        </Visual>


<SubSection heading="Cleaning up the manager's view">
          <TextContent>
            <p>With fewer errors coming in from upstream, the manager dashboard became a quieter place. The remaining polish: new status chips with short, clear microcopy replaced the blunt "flagged" row highlights that made the whole table feel loud.</p>
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
        <TextContent>
          <p>After rollout in late September, the average weekly review volume per location dropped from a steady baseline of ~37 to ~25, representing a 32% reduction in total flags. More significantly, the nature of that work shifted: by December, roughly half of remaining flags were being resolved through system-suggested edits rather than manual manager review. The result was a measurable transfer of cognitive load from operators to the system, while preserving human approval for every final decision.</p>
        </TextContent>

        <Metrics items={[
          'Avg. weekly flags (pre) / ~37',
          'Avg. weekly flags (post) / ~25',
          'Reduction in review volume / 32%',
          'Worker-requested edits / ~52%',
        ]} />

        <figure className="space-y-3">
          <div className="flex items-center gap-5 px-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: '#F5C08A' }} />
              <span className="text-xs text-stone-500">Total flags (manager review)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: '#8FD5C8' }} />
              <span className="text-xs text-stone-500">Worker-requested edits</span>
            </div>
          </div>
          <img src={getAssetPath('assets/case-studies/time clock flagged reduction chart.png')} alt="Pre/post flagged timecard reduction chart" className="w-full rounded-2xl" />
          <figcaption className="text-xs text-neutral-400 dark:text-neutral-500">Timecards with flagged errors, H2 2025 — before and after the design intervention</figcaption>
        </figure>
      </Section>

      <Section id="learnings"title="What I learned">
        <GridList items={[
          {
            title: "Tracing the source of the problem.",
            content: "The biggest impact came from questioning the initial ask entirely. The manager dashboard was the most visible problem, especially because our team had higher personal contact with manager users than worker users. But better inputs meant fewer corrections downstream. That reframe only happened because I pushed for more discovery time before committing to a solution."
          },
          {
            title: "Language is a design material.",
            content: "Reframing \"worker edits\" as \"worker suggestions\" wasn't a copywriting tweak — it was the solution. The UI followed the language, not the other way around. In B2B products where trust dynamics are complicated, word choice can often help shape the interface."
          },
          {
            title: "Delight earns its place when it has a job.",
            content: "The high-score inspired shift summary looks like a fun delight moment. It is also actually a data integrity mechanism. The best argument for delight in enterprise products isn't aesthetic — it's functional."
          }
        ]} />
      </Section>
      </div>
    </CaseStudyLayout>
  );
};

export default TimeClock;
