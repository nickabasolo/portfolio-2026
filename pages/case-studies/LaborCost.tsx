import React from 'react';
import { Section, TextContent, GridList } from '../../components/CaseStudyPrimitives';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'labor-cost',
  kind: 'case-study' as const,
  title: 'Labour cost: designing for a metric that runs a restaurant',
  subtitle: 'Helping managers make staffing decisions in the moment — starting with a better chart, ending with a mobile recommendation engine',
  role: 'Senior Product Designer',
  duration: 'In Progress', // TODO: restore to 'Q4 2024' when ready to publish
  company: 'Workstream',
  image: 'assets/case-studies/performance-reviews-hero.png',
  cardImage: 'assets/case-studies/Labor cost.png',
  tags: ['Data visualisation', 'Dashboard design', 'Mobile', 'UX Research'],
  impact: [
    'Planning view / shipped',
    'Mobile reactive view / in beta',
  ],
};

const LaborCost: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image} navItems={[
      { id: 'invisible-metric', label: 'The invisible metric' },
      { id: 'way-in', label: 'Looking for a way in' },
      { id: 'experiment', label: 'The experiment' },
      { id: 'insight', label: 'The insight' },
      { id: 'what-shipped', label: 'What shipped' },
      { id: 'harder-problem', label: 'The harder problem still ahead' },
      { id: 'learnings', label: 'What I learned' },
    ]}>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800">
          <span className="shrink-0">✦</span>
          <span>This write-up is still in progress — the work is real, the full case study is coming.</span>
        </div>

        <CaseStudySummary
          title={summary.title}
          subtitle={summary.subtitle}
          role={summary.role}
          duration={summary.duration}
          company={summary.company}
          problem="Labour cost data already existed in Workstream — but none of it was surfaced in a way a manager could actually use. Different managers thought about the metric in completely different ways."
          solution="A bullet chart-based planning view with a metric toggle spanning labour hours, dollars, and SPLH — plus a mobile recommendation engine for in-service decisions."
          outcome="Desktop planning view shipped. Mobile reactive view in beta."
        />

        <Section id="invisible-metric" title="The invisible metric">
          <TextContent>
            <p>Labour cost is the most controllable variable in a restaurant's finances. Owners and general managers watch it obsessively — but most of them were doing it with a number scrawled on a whiteboard, a rule of thumb from the owner, or nothing at all.</p>
            <p>The data to do better already existed in Workstream: scheduled hours, clocked time, wage rates, projected revenue. The problem was that none of it was surfaced in a way a manager could actually use.</p>
            <p>There was also a significant gap in how different managers thought about the metric. Owners worked in raw dollars. Experienced GMs worked in SPLH — sales per labour hour, the industry-standard ratio of revenue to labour spend. Designing one tool that served both without patronising either was the core challenge.</p>
          </TextContent>

          {/* ARTIFACT — Context image (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Contextual photo from customer visit (manager on phone, busy kitchen)
          </div>
        </Section>

        <Section id="way-in" title="Looking for a way in">
          <TextContent>
            <p>The brief was to visualise labour cost data on the desktop scheduling view. I started where most designers start: bar charts for spend by day, line graphs for trends over time, pie charts for labour as a proportion of costs.</p>
            <p>I brought early explorations to design critique and shared them informally with colleagues. The feedback was polite but the signal was weak — nobody could confidently say what the charts were communicating.</p>
            <p><strong>A benefit of building for restaurants: there's an immediate audience one floor down.</strong></p>
            <p>Before setting up formal research, I walked downstairs to the coffee shop in our office building and showed three chart types to the baristas on shift. Simple question: <em>tell me what you think I'm trying to communicate.</em> The bar and line charts produced hesitation and hedged answers. Nobody was exactly wrong — they just weren't sure.</p>
            <p>That same week, logging my lunch in a macronutrient tracking app, I noticed the chart it used to show my protein target: a horizontal bar with a goal marker, a current value, and a clear visual gap between them. Target. Actual. Delta. The same mental model a restaurant manager already uses for their job.</p>
            <p>I brought a bullet chart version back to critique. It got traction with the design team and my tech lead. My PM was skeptical — an unconventional chart type on a business-critical dashboard felt like a risk he wasn't ready to take on informal signal alone.</p>
            <p>So I ran the research properly.</p>
          </TextContent>
        </Section>

        <Section id="experiment" title="The experiment">
          <TextContent>
            <p>I recruited 6 general managers from our most engaged customers and ran a structured comprehension test. Each participant saw all three chart types in randomised order. For each one, a single question: <em>what do you think I'm communicating with this chart?</em></p>
            <p>The bar and line charts produced inconsistent answers. Participants could extract fragments — "this bar is taller than that one" — but struggled to connect what they were seeing to a decision they'd actually make.</p>
            <p>The bullet chart was different. Participants across the range of sophistication levels were able to articulate not just what the chart showed, but what they'd do about it.</p>
            <p>That data brought my PM on board.</p>
          </TextContent>

          {/* ARTIFACT — Three charts side by side (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Bar chart, line graph, and bullet chart side by side with comprehension results
          </div>

          {/* ARTIFACT — Research artifact (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Session guide or comprehension test summary
          </div>
        </Section>

        <Section id="insight" title="The insight">
          <TextContent>
            <p>The bullet chart worked because it matched the mental model managers already had — not because it was a better chart in the abstract. They already thought in terms of target, actual, and gap. The bar and line charts asked them to construct that model from data. The bullet chart just showed it to them.</p>
            <p>With the chart type settled, I addressed the sophistication gap with a simple metric toggle: labour hours, labour dollars, and SPLH. The choice of metric communicates intent and filters the experience to the right level of complexity. There was some internal pushback on including SPLH given how technical it is — but it's the metric experienced operators actually use, and removing it would have meant designing below the ceiling our best customers needed.</p>
          </TextContent>

          {/* ARTIFACT — Metric toggle UI (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Metric toggle close-up (hours / dollars / SPLH)
          </div>

          {/* ARTIFACT — Full desktop planning view (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Full desktop planning view in context alongside the schedule
          </div>
        </Section>

        <Section id="what-shipped" title="What shipped">
          <TextContent>
            <p>The desktop planning view launched to our active customer base. Managers could see their labour cost benchmarked against their target — across whichever metric they'd chosen — contextualised within the weekly schedule they were building.</p>
            <p>It was designed for a deliberate, forward-looking mode: a GM sitting down on Sunday to plan next week's staffing, not someone reacting in the moment.</p>
          </TextContent>

          {/* ARTIFACT — Usage or retention data (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Engagement metrics or customer quotes post-launch
          </div>
        </Section>

        <Section id="harder-problem" title="The harder problem still ahead">
          <TextContent>
            <p>Once the planning view was live, a gap became clear. The tool told managers their labour cost was trending wrong. It didn't tell them what to do about it — and by the time they were back at their desk to check the dashboard, the moment to act had often passed.</p>
            <p>A manager mid-service doesn't have time to open a laptop. They need a nudge on their phone that tells them specifically what to do, right now, given everything the system already knows.</p>
            <p>My vision for the mobile reactive view wasn't another chart. It was a recommendation engine built on top of an existing lightweight manager dashboard — showing who was clocked in, who was on break, when shifts were ending — enriched with live labour cost and revenue data and translated into direct actions:</p>
            <p><em>"Revenue is tracking high — consider calling in one more cashier within the next two hours."</em></p>
            <p><em>"Sales are below projection — NAME is approaching overtime. Letting them go early saves $40 and keeps you compliant."</em></p>
            <p>Contextual, specific, and compliance-aware. Not a number to interpret — a decision, already made.</p>
            <p>This view is in beta. The planning view solved insight. The mobile view is where action lives — and that's the harder, more important problem.</p>
          </TextContent>

          {/* ARTIFACT — Mobile reactive view mockup (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Mobile reactive view wireframe (desktop numbers vs. mobile recommendation)
          </div>
        </Section>

        <Section id="learnings" title="What I learned">
          <GridList items={[
            {
              title: "Comprehension is not the same as familiarity.",
              content: "Bar charts and line graphs are everywhere. That familiarity doesn't mean people can read them in every context. The bullet chart was less familiar but more immediately legible because it matched how managers already thought about their job. Start with the mental model, not the chart type that looks most professional."
            },
            {
              title: "Cross-domain borrowing is a research method.",
              content: "The insight didn't come from a design sprint or a competitive audit. It came from noticing a solution in a completely different context and asking whether the underlying logic transferred. Staying curious outside your domain is part of the work."
            },
            {
              title: "Internal skepticism is a quality filter.",
              content: "My PM's reluctance to ship an unconventional chart type without evidence forced a more rigorous research process than I would have run on my own. The comprehension study made the decision defensible and the outcome cleaner. Pushback from a thoughtful stakeholder often produces better work."
            },
            {
              title: "Shipping insight revealed the harder problem.",
              content: "The planning view was a meaningful improvement. But watching managers use it made clear that the real challenge wasn't visualisation — it was closing the loop between knowing something is wrong and knowing what to do about it, in the moment, on a phone, mid-service. I'd start there next time."
            }
          ]} />
        </Section>

      </div>
    </CaseStudyLayout>
  );
};

export default LaborCost;
