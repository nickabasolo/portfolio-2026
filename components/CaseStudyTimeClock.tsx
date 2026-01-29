
import React from 'react';
import { CaseStudy } from '../types';
import { Section, TextContent, Quote, Metrics, Visual, GridList, SubHeading, Table, JourneyMap } from './CaseStudyPrimitives';

interface Props {
  project: CaseStudy;
}

const CaseStudyTimeClock: React.FC<Props> = ({ project }) => {
  return (
    <div className="space-y-32">
      {/* 01 Challenge */}
      <Section id="challenge" number="01" title="Challenge">
        <TextContent>
          <p>For a restaurant manager, Sunday night often means wading into the quagmire of timesheets: the record of time punches that workers log when clocking in and out of a shift. And while workers try to log their time accurately, the reality of a busy kitchen means nothing ever goes perfectly.</p>
          <p>The timesheet was constantly flooded with error flags like missed breaks and forgotten clock-outs. Each flag represented a manual investigation for the manager: inaccurate timecards lead to labor law violations and hefty fines.</p>
          <p>The manual process of investigating these 40+ flags per week was exhausting and unsustainable.</p>
        </TextContent>
        <Visual label="Legacy Timesheet Audit: 40+ Flags" />
      </Section>

      {/* 02 Strategy */}
      <Section id="strategy" number="02" title="Strategy">
        <TextContent>
          <p>The original ask was purely palliative: "Improve the manager’s review dashboard." My initial ideas with my PM focused on making it less painful with bulk actions, clearer error labels, and faster filtering.</p>
          <p>However, after interviewing 5 managers about their Sunday night routine, I realized we were treating the symptom, not the disease. A lot of the time spent was going back and forth with 30+ employees over what happened: Did you take this break? Did you forget to clock out? When did you actually leave the store?</p>
          <p>I negotiated for additional discovery time and engineering resources by framing the problem as an ROI calculation: Every error we prevented the worker from making, was an error the manager never had to touch.</p>
          <p>We shifted our focus from the manager's dashboard to the Worker's Time Clock experience. After 12 exploratory interviews with workers, I identified three key touchpoints for a design intervention:</p>
        </TextContent>
        
        <div className="space-y-12">
          <Table 
            headers={["Touchpoint", "The Research Insight", "Design Strategy", "Business ROI"]}
            rows={[
              [
                "Clock-in",
                "Visibility: Workers were often unaware of their specific schedule or required break windows for the day.",
                "Exposed agenda: Surface break times and compliance requirements immediately upon clock-in.",
                "Reduces errors caused by simple lack of information or scheduling confusion."
              ],
              [
                "Mid-shift",
                "Cognitive Load: Workers lose track of time. Missed breaks are the #1 cause of legal labor fines.",
                "Useful interruptions: Leverage notifications to bring break countdowns to the lock screen, requiring zero app interaction.",
                "Eliminates expensive \"missed break\" penalties and the manual audits they trigger."
              ],
              [
                "Clock-out",
                "Ad-hoc corrections: Workers typically know when they forgot to log a break or clock out, but resort to ad-hoc verbal or text messages that the manager needs to sift through days later.",
                "Edit requests: Empower workers to request their own edits to the agenda.",
                "Ensures data integrity at the source, preventing \"Timecard Detective\" work for managers later."
              ]
            ]}
          />

          <JourneyMap />
        </div>
      </Section>

      {/* 03 Execution */}
      <Section id="execution" number="03" title="Execution">
        <div className="space-y-16">
          <div className="space-y-6">
            <SubHeading>Giving workers visibility into their schedule</SubHeading>
            <TextContent>
              <p>Workers often committed errors simply because they didn't know what their schedule was for the shift. The challenge was exposing the right information to the user at the right time. The nature of restaurant work is that they’ll spend 95% of the time not looking at their phone, and instead doing something in the real world. This meant we needed a system of progressive disclosure to help the user know what to do.</p>
            </TextContent>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-stone-900 text-stone-300 rounded-3xl space-y-4">
                <div className="text-amber-400 font-bold text-[10px] uppercase tracking-widest">Notifications</div>
                <p className="text-sm leading-relaxed">Since workers are rarely looking at their phones mid-shift, I utilized a robust notification system to push critical updates. For newer iOS users, we implemented Live Activities to pin shift status and break countdowns. However, acknowledging that many users rely on older hardware or Android, we ensured the experience was centered around high-signal, actionable push notifications that provide a "glanceable" source of truth without requiring an app unlock.</p>
              </div>
              <div className="p-8 bg-white border border-stone-200 rounded-3xl space-y-4">
                <div className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">Agenda View</div>
                <p className="text-sm text-stone-600 leading-relaxed">Once they’re interacting with the app – whether that’s to clock in or take a break – we have a little more of the user’s attention. This was the appropriate place to include a fuller agenda, with more context on what lies ahead.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <SubHeading>Giving workers freedom to suggest edits</SubHeading>
            <TextContent>
              <p>Errors are inevitable in a chaotic kitchen, but the legacy system offered the worker no way to fix them. I explored a range of solutions, ranging from simple commenting to full direct editing.</p>
              <p>But in initial user tests, managers were terrified of giving edit access to employees. They feared that allowing workers to touch the timecard would lead to unchecked payroll manipulation.</p>
            </TextContent>
            
            <Visual label="The Edit Request Workflow" bg="bg-stone-50">
              <img 
                src="Review shift.png" 
                alt="Edit Request Flow" 
                className="w-full h-auto object-contain max-h-[700px] rounded-lg shadow-lg" 
              />
            </Visual>

            <TextContent>
              <p>However, I still believed that allowing workers to edit the errors was beneficial for both parties: saving managers time while giving workers freedom to correct their mistakes.</p>
            </TextContent>
            <Quote text="I found success when I framed the worker's input as a 'suggestion' rather than an 'edit.' This built trust with the manager that every suggestion was still under their control with final approval." />
          </div>

          <div className="space-y-6">
            <SubHeading>Introducing delightful friction</SubHeading>
            <TextContent>
              <p>The final problem: the workers in the beta program didn’t seem that inclined to make the edits.</p>
              <p>It was confusing for us at first, until we watched some users heading out after their shift. There was nothing they wanted more than to clock out and go home, and there was nothing in the app that made them want to linger a second more than they needed to.</p>
              <p>Inspired by video game end-screens, I designed a shift summary page to be more like high-score celebration. The "ticking" earnings and haptic feedback served a strategic purpose: they acted as a speed bump. I didn't want workers to clock out and immediately pocket their phones. By making the summary engaging, I increased "dwell time" on the page, encouraging workers to poke around and verify that their hours and earnings were accurate before walking away.</p>
              <p>The "delight" factor ensured that the worker performed a final audit of the shift data when the memory was freshest.</p>
            </TextContent>
            <Visual label="High-Score Shift Summary UI" bg="bg-stone-900" />
          </div>
        </div>
      </Section>

      {/* 04 Impact */}
      <Section id="impact" number="04" title="Impact">
        <TextContent>
          <p>By narrowing the "Accuracy Gap" at the source, we fundamentally changed the operational health of our customers' businesses.</p>
        </TextContent>
        <Metrics items={[
          '70% Reduction in flagged timecards',
          '4.5 Hours/Week Reclaimed per manager',
          'Increased Pay Transparency Workers reported higher trust'
        ]} />
      </Section>

      {/* 05 Learnings */}
      <Section id="learnings" number="05" title="Learnings">
        <GridList items={[
          {
            title: "Solving the cause, not the symptom",
            content: "The most significant ROI came from questioning the initial brief. Instead of building a better 'eraser' (the manager dashboard), we built a better 'pencil' (the worker experience)."
          },
          {
            title: "Using “framing” as a design solution",
            content: "UX is as much about language as it is about interface. Reframing 'Worker Edits' as 'Worker Suggestions,' and updating the UI to match that expectation, was the key to bridging the trust gap with skeptical managers."
          },
          {
            title: "Delight as 'meaningful friction'",
            content: "This project proved that delight can be a functional requirement. By intentionally slowing the user down with the “high-score summary”, we ensured they performed a final data audit when their memory was freshest."
          },
          {
            title: "Designing for real life",
            content: "In a place like a busy kitchen, the most valuable UX often happens outside the app. Leveraging Live Activities to provide 'glanceable' truth on the lock screen was more impactful than any in-app navigation."
          }
        ]} />
      </Section>
    </div>
  );
};

export default CaseStudyTimeClock;
