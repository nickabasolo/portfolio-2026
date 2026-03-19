import React from 'react';
import { Section, SubSection, TextContent, GridList } from '../../components/CaseStudyPrimitives';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'break-rules',
  kind: 'case-study' as const,
  title: 'A labour law compliance engine, built and tested with AI',
  subtitle: 'Labour law violations cost restaurants thousands per offence. I designed a compliance engine across three domains and five states, and used AI to prototype the logic in code when Figma couldn\'t capture it.',
  role: 'Senior Product Designer',
  duration: 'In Progress',
  company: 'Workstream',
  image: 'assets/case-studies/manager-dashboard-hero.png',
  cardImage: 'assets/case-studies/Break rules.png',
  tags: ['End-to-end', 'Web', 'Mobile', 'Systems design', 'Compliance tech', 'AI-assisted prototyping'],
  impact: [
    '89% / new customers using compliant defaults',
    '5 / states covered',
  ],
};

const BreakRules: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image} navItems={[
      { id: 'the-stakes', label: 'The stakes' },
      { id: 'understanding-rules', label: 'Understanding the rules' },
      { id: 'for-the-manager', label: 'For the manager' },
      { id: 'for-the-worker', label: 'For the worker' },
      { id: 'where-they-meet', label: 'Where they meet' },
      { id: 'learnings', label: 'What I learned' },
    ]}>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <CaseStudySummary
          title={summary.title}
          subtitle={summary.subtitle}
          role={summary.role}
          duration={summary.duration}
          company={summary.company}
          problem="Customers were receiving labor law violations they didn't know they were committing. Workstream recorded what happened — but had no opinion on whether it was legal."
          solution="A compliance layer built for two radically different users: a natural language rules builder for managers, and a progressive urgency notification system for workers."
          outcome="Compliance engine shipped across three domains and five states, with AI used to prototype and validate the rule logic end-to-end."
        />

        <Section id="the-stakes" title="The stakes">
          <TextContent>
            <p>Missing a meal break in California can cost an employer one hour of the employee's regular pay — per violation. Multiply that across 30 workers over a month and it becomes a significant liability. The rules vary by state, sometimes by city, and they're specific enough to surprise even experienced operators: not just how long a break must be, but when within a shift it must start.</p>
            <p>Most restaurant managers weren't thinking about any of this. They were running a kitchen.</p>
            <p>Workstream's early break logging was simple: workers logged when they took a break, managers reviewed the timesheet. But as we expanded into payroll — where an inaccurate timesheet has direct financial and legal consequences — that simplicity became a liability. Customers were getting flagged for violations they didn't know they were committing. The system recorded what happened. It had no opinion on whether what happened was legal.</p>
            <p>We needed a compliance layer. The question was how to build one that a non-technical manager could actually configure — and that a worker in a loud kitchen could actually follow.</p>
          </TextContent>

          {/* ARTIFACT — Legacy screenshot (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Early break logging UI / redacted timesheet showing flagged violations
          </div>
        </Section>

        <Section id="understanding-rules" title="Understanding the rules">
          <TextContent>
            <p>Before designing anything, we needed to know what we were designing for. I worked with our data team to identify which states our customers actually operated in, cross-referenced that with state labor law, then verified our interpretation with legal and checked with CS for anything they'd been hearing in the field.</p>
            <p>Two things emerged from the research. First, labor law is more specific than most people expect. It's not just "workers get a 30-minute break." It's: workers must receive a 30-minute unpaid meal break that begins no later than five hours into the shift, with specific exceptions for shifts under six hours, and a second break for shifts over ten. Every variable in that sentence is a design parameter.</p>
            <p>Second, five states covered the majority of our active customer base. We built automatic compliance presets for those five, and a manual rule builder for everyone else.</p>
          </TextContent>

          {/* ARTIFACT — State law research matrix (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — State law research matrix (states × break variables)
          </div>
        </Section>

        <Section id="for-the-manager" title="For the manager">
          <SubSection heading="Making rules legible">
            <TextContent>
              <p>The first version of the rules config UI used a conventional logic builder — the kind of interface a developer might design for a developer. Conditions, operators, values. Technically complete and immediately confusing to the people who needed to use it.</p>
              <p>The insight was that managers could describe their rules perfectly in conversation. They just couldn't translate them into conditional logic. The interface needed to meet them in their own language.</p>
              <p>I redesigned the config UI around natural sentence structure. Instead of:</p>
              <p><em>IF shift_duration &gt; 5 THEN break_required = true AND break_duration &gt;= 30</em></p>
              <p>The interface read closer to:</p>
              <p><em>"If a worker's shift is longer than [5 hours], they must take a [30-minute] break, starting within [2 hours] of their shift start."</em></p>
              <p>The variables were still fully configurable — the bracketed values were editable fields — but the surrounding sentence gave them meaning. Managers could read it back and verify it matched what they intended.</p>
            </TextContent>
          </SubSection>

          {/* ARTIFACT — Rules builder evolution (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Logic-style builder vs. natural language version (progression)
          </div>

          {/* ARTIFACT — Final rules config UI (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Polished natural language rules builder (California example)
          </div>

          <SubSection heading="The AI decision">
            <TextContent>
              <p>Natural language configuration was an obvious candidate for AI — if a manager could just describe what they wanted and have the system interpret it, the config problem largely disappears. We explored this direction and moved away from it.</p>
              <p>Two reasons. First, compliance is a high-stakes domain. An AI misinterpreting a rule about break windows doesn't produce a slightly wrong recommendation — it produces a labor violation. The cost of an error is concrete and legal. Second, the structured sentence approach solved the legibility problem without introducing unpredictability into a compliance-critical workflow.</p>
              <p>The constraints were the point. Managers could see exactly what the system would do — which was what they needed to trust it.</p>
            </TextContent>
          </SubSection>

          <SubSection heading="Getting presets shipped">
            <TextContent>
              <p>For the five states we supported automatically, I wanted to ship with pre-configured settings — correct compliance out of the box, no configuration required for most customers. My PM was wary. Pre-configured compliance settings felt like a liability claim: if we set the defaults and they turned out to be wrong, were we responsible?</p>
              <p>I reframed the proposal: these weren't defaults, they were presets — the same way software ships with a recommended settings profile that users can modify. We weren't guaranteeing compliance. We were giving customers a correct starting point with full control to adjust anything.</p>
              <p>That framing resolved the concern. The presets shipped.</p>
            </TextContent>
          </SubSection>

          {/* ARTIFACT — State preset UI (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — State preset settings screen with visible edit controls
          </div>
        </Section>

        <Section id="for-the-worker" title="For the worker">
          <TextContent>
            <p>Workers never saw the rules engine. They saw the output of it.</p>
            <p>The challenge was communicating not just that a worker needed to take a break, but when — given that labor law often mandates a window rather than a fixed time. A worker doesn't need to know that California law requires a meal break to begin within five hours of shift start. They need to know: <em>your break needs to start in the next 45 minutes.</em></p>
            <p>This sounds simple. In practice it required a careful design decision: the notification had to communicate urgency without causing anxiety, and had to be specific enough to be actionable without being prescriptive about the exact minute. "Take your break in the next hour" is too vague. "Take your break at 2:00pm" ignores the window the law actually allows.</p>
            <p>We landed on a progressive urgency model: a gentle reminder early in the break window, escalating to a more prominent notification as the window closed. The language shifted with the urgency — informational early, directive late.</p>
          </TextContent>

          {/* ARTIFACT — Break notification sequence (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Break notification sequence (early window → mid → closing urgency)
          </div>
        </Section>

        <Section id="where-they-meet" title="Where they meet">
          <TextContent>
            <p>The manager config UI and the worker break notification have nothing visually in common. That's intentional.</p>
            <p>Trying to make a single interface serve both users would have meant compromising both. The investment was in making the handoff between them invisible — so that what a manager configured in a sentence always appeared to a worker as a simple, timely instruction. Same underlying rule. Two completely different expressions.</p>
          </TextContent>

          {/* ARTIFACT — The pairing (placeholder) */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Rules config UI paired with the worker notification it produces (full-width)
          </div>
        </Section>

        <Section id="learnings" title="What I learned">
          <GridList items={[
            {
              title: "The interface should speak the user's language, not the system's.",
              content: "Managers could describe their compliance rules in conversation. The first version asked them to translate that into logical operators. The natural language redesign removed the translation step. The system got more complex underneath; the experience got simpler on top."
            },
            {
              title: "Constraints build trust in high-stakes domains.",
              content: "AI-assisted configuration would have been faster to interact with and harder to verify. In a compliance context where errors have legal consequences, being able to read a rule back and confirm it means exactly what you intended is more valuable than speed. A more constrained approach where the constraints themselves are the feature is a design decision, not a technical limitation."
            },
            {
              title: "Designing for two radically different users on the same data requires radical separation.",
              content: "The manager and worker interfaces share nothing visually. That's not a failure of design coherence — it's the right outcome. The work was in the invisible handoff between them."
            },
            {
              title: "Language resolves stakeholder concerns that interface changes cannot.",
              content: "\"Preset, not default\" was not a product change. It was a reframe that addressed a legitimate concern about liability without changing any underlying behaviour. In complex regulated domains, the words you use to describe a feature often matter as much as the feature itself."
            }
          ]} />
        </Section>

      </div>
    </CaseStudyLayout>
  );
};

export default BreakRules;
