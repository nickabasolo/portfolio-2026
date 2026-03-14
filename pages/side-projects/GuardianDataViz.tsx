import React from 'react';
import { Section, TextContent, GridList } from '../../components/CaseStudyPrimitives';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'guardian-data-viz',
  kind: 'side-project' as const,
  title: "Canada's 2025 election, by riding",
  subtitle: 'A ternary plot showing how voters consolidated around the two major parties — published by The Guardian.',
  description: 'A data visualization project using Python to analyze and visualize the 2025 Canadian election data.',
  link: 'https://www.theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties',
  image: 'assets/side-projects/ternary.png',
  category: 'Data Visualization',
  role: 'Data Designer',
  duration: '1–2 days (static) · extended for interactive',
  company: 'Featured in The Guardian',
  tags: ['Data Viz', 'Python', 'Plotly', 'Editorial'],
};

const GuardianDataViz: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image} isSideProject navItems={[
      { id: 'why-this-existed', label: 'Why I made this' },
      { id: 'finding-the-right-chart', label: 'Finding the right chart' },
      { id: 'how-it-came-together', label: 'How it came together' },
      { id: 'what-i-learned', label: 'What I learned' },
    ]}>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <CaseStudySummary
          title={summary.title}
          subtitle={<>A ternary plot showing how voters consolidated around the two major parties — <a href="https://www.theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-stone-700 transition-colors">published by The Guardian</a>.</>}
          role={summary.role}
          duration={summary.duration}
          company={summary.company}
        />

        <Section id="why-this-existed" title="Why I made this">
          <TextContent>
            <p>I've been interested in politics since before I studied economics — I interned with the government for several years and followed Canadian elections closely. The 2025 result had a clear story that I hadn't seen visualised well: voters were consolidating around the two major parties, abandoning third parties at an unusual rate.</p>
            <p>I also wanted to test something. Vibe-coding — using AI to write the majority of implementation code while the human steers — was becoming a real workflow in mid-2025. A personal project with a clear goal and a contained dataset felt like the right place to find out what it could actually do.</p>
          </TextContent>
        </Section>

        <Section id="finding-the-right-chart" title="Finding the right visualisation">
          <TextContent>
            <p>The consolidation story was obvious in the data. Making it visible took longer.</p>
            <p>I tried several conventional approaches — bar charts of vote share by party, maps coloured by winning riding — before landing on a ternary plot: a triangular chart that plots three-way vote share simultaneously, with each corner representing 100% for one party. Every riding becomes a single point. Movement between elections becomes a line.</p>
            <p>The ternary plot made the consolidation pattern immediate. Points that were scattered across the triangle in 2021 had pulled toward the two dominant corners by 2025. No annotation needed.</p>
          </TextContent>

          {/* ARTIFACT — Exploration comparisons */}
        </Section>

        <Section id="how-it-came-together" title="How it came together">
          <TextContent>
            <p>I used Claude in Cursor to process and clean the Elections Canada dataset, write the Plotly scripts, and iterate on the chart parameters. The design cleanup — typography, colour, layout for publishing — happened in Figma.</p>
            <p>Start to first published version: about two days.</p>
            <p>A few days after I posted the static image, The Guardian found it and reached out to publish it. Later in the year I rebuilt it as an interactive version — searchable by riding, with hover states and the 2021–2025 movement lines — which is now live on the site.</p>
          </TextContent>

          {/* ARTIFACT — Interactive demo */}
        </Section>

        <Section id="what-i-learned" title="What I learned">
          <GridList items={[
            {
              title: "Vibe-coding is real but it's not magic.",
              content: "The speed came from not having to write boilerplate — Claude handled the data wrangling and Plotly syntax while I focused on what the chart needed to communicate. The design judgment was still entirely mine: which chart type, which variables to encode, what to show and what to leave out."
            },
            {
              title: "The pipeline that emerged is one I've carried forward.",
              content: "AI for implementation, human for decisions. It's a division of labour that holds up across projects — and one I now reach for deliberately rather than experimentally."
            }
          ]} />
        </Section>

        {/* Interactive tool card */}
        <a
          href="/side-project/guardian-data-viz/tool"
          className="block p-6 bg-amber-50 border border-amber-200 rounded-2xl hover:bg-amber-100 transition-colors group max-w-[480px] mx-auto"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="font-serif text-xl text-stone-900 mb-1">Explore the data by riding</div>
              <p className="text-sm text-amber-800/70">Search any riding, see the 2021–2025 movement, and explore the full dataset.</p>
            </div>
            <span className="text-amber-400 group-hover:text-amber-600 transition-colors text-xl ml-6 shrink-0">→</span>
          </div>
        </a>

      </div>
    </CaseStudyLayout>
  );
};

export default GuardianDataViz;
