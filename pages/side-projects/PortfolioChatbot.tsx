import React from 'react';
import { Section, TextContent, GridList } from '../../components/CaseStudyPrimitives';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'portfolio-chatbot',
  kind: 'side-project' as const,
  title: 'This portfolio: an AI assistant for multiple audiences',
  subtitle: 'A streaming AI assistant that serves different visitors differently — without them having to navigate for it.',
  description: 'An intentional use of AI embedded in the portfolio hero — powered by Claude Haiku, with streaming responses, source citations, and a grounded knowledge base.',
  image: 'assets/side-projects/AI.png',
  category: 'AI / Product',
  role: 'Designer / Developer',
  duration: '2025',
  company: 'Personal Project',
  tags: ['AI', 'LLM', 'React', 'Serverless'],
};

const PortfolioChatbot: React.FC = () => {
  useScrollToTop();
  return (
    <CaseStudyLayout image={summary.image} isSideProject navItems={[
      { id: 'the-problem', label: 'The problem' },
      { id: 'how-it-works', label: 'How it works' },
      { id: 'the-part-that-was-hard', label: 'The part that was actually hard' },
      { id: 'what-i-learned', label: 'What I learned' },
    ]}>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <CaseStudySummary
          title={summary.title}
          subtitle={summary.subtitle}
          role={summary.role}
          duration={summary.duration}
          company={summary.company}
        />

        {/* ARTIFACT — Screenshot or short recording */}
        <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
          Artifact placeholder — The chatbot in the portfolio hero, with an example conversation visible
        </div>

        <Section id="the-problem" title="The problem">
          <TextContent>
            <p>A portfolio serves several different audiences at once. A recruiter wants to quickly assess fit. A hiring manager wants to understand how I think. An engineering manager wants to know if I can work with their team.</p>
            <p>The same nav, the same copy, the same order of sections — serves all of them poorly. Someone who wants to know about my process has to read the same introduction as someone who just wants to know what tools I use.</p>
            <p>I'd been wanting to explore AI integrations in a hands-on way. A portfolio chatbot felt like a problem worth solving and a useful thing to actually build.</p>
          </TextContent>
        </Section>

        <Section id="how-it-works" title="How it works">
          <TextContent>
            <p>The architecture is intentionally minimal. No vector database, no embeddings — just a well-structured markdown context file loaded into the system prompt at runtime, with the model strictly instructed to answer only from that file.</p>
            <p>The tradeoff was deliberate: a full portfolio fits comfortably in a 200k token context window. Skipping embeddings removed infrastructure complexity with no quality cost at this scale. The model proxies through a Vercel serverless function using SSE streaming, so responses appear word by word rather than after a loading delay.</p>
            <p>A few details worth noting: the model appends source citations to every response, which the frontend renders as clickable links to the relevant case study or page. Server-side rate limiting and input sanitisation keep costs controlled and inputs clean.</p>
          </TextContent>

          {/* ARTIFACT — Architecture diagram */}
          <div className="w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center p-16 text-neutral-400 dark:text-neutral-500 text-sm">
            Artifact placeholder — Architecture diagram: visitor question → serverless function → Claude Haiku → streamed response with source citations
          </div>
        </Section>

        <Section id="the-part-that-was-hard" title="The part that was actually hard">
          <TextContent>
            <p>The engineering took a day. Writing the context file took much longer.</p>
            <p>Getting the model to answer well required thinking carefully about what each type of visitor actually wants to know — and structuring the content so the model could surface the right detail for the right question. That meant auditing my own portfolio from the perspective of an LLM: what's present, what's missing, what's ambiguous.</p>
            <p>It also meant every piece of information in the context file had to be tied to a specific case study or page — so the chatbot's answers were grounded in something a visitor could go read, not just a confident-sounding summary of nothing.</p>
            <p>Writing the context file turned out to be as much a design problem as an engineering one.</p>
          </TextContent>
        </Section>

        <Section id="what-i-learned" title="What I learned">
          <GridList items={[
            {
              title: "Grounding is a design decision.",
              content: "Constraining the model to a specific document — rather than letting it draw on general knowledge — wasn't just a safety measure. It made the responses more useful, more specific, and more trustworthy. Knowing the chatbot can only tell you what's actually in the portfolio changes how you interact with it."
            },
            {
              title: "The blank canvas problem is real.",
              content: "An open-ended AI input with no guidance produces hesitation. The animated placeholder — cycling through example questions with a typewriter effect — reduced that friction noticeably. Small UX details matter as much in AI interfaces as anywhere else."
            },
            {
              title: "Building it taught me more than reading about it would have.",
              content: "Managing token constraints, thinking about context window as a design parameter, handling streaming responses — these aren't abstract concepts anymore. That hands-on understanding shapes how I think about AI as a design material, not just a feature to spec."
            }
          ]} />
        </Section>

      </div>
    </CaseStudyLayout>
  );
};

export default PortfolioChatbot;
