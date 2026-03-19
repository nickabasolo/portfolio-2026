import React from 'react';
import { Section, TextContent, GridList, CaseStudyImage } from '../../components/CaseStudyPrimitives';
import { getAssetPath } from '../../utils/paths';
import CaseStudySummary from '../../components/CaseStudySummary';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'portfolio-chatbot',
  kind: 'side-project' as const,
  title: 'Portfolio chatbot: getting hands-on with LLM APIs',
  subtitle: 'A side project to learn how LLM APIs actually work — built on the portfolio itself.',
  description: 'A streaming AI assistant built on Claude Haiku, with a grounded knowledge base, source citations, and rate limiting — deployed as a Vercel serverless function.',
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
      { id: 'why-i-built-it', label: 'Why I built it' },
      { id: 'how-it-works', label: 'How it works' },
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

        <Section id="why-i-built-it" title="Why I built it">
          <TextContent>
            <p>I wanted hands-on experience working with LLM APIs. A chatbot for my own portfolio felt like the right scope — small enough to actually finish, useful enough to ship.</p>
            <p>It also gave me a reason to work through real decisions: which model to use, how to structure a context file, how to handle streaming responses, what good chatbot interaction design actually looks like.</p>
          </TextContent>
        </Section>

        <CaseStudyImage src={getAssetPath('assets/side-projects/PromptDiagram.png')} alt="How information flows from the portfolio to the chatbot" />

        <Section id="how-it-works" title="How it works">
          <TextContent>
            <p>Whenever I update a case sutdy, I also update a markdown file: <strong>portfolio_context.md</strong>. This is a compilation of all my case study content compiled into one structured document with <code>/path</code> anchors throughout. The chatbot references this single document every time it answers a question, and it always includes a link to the <code>/path</code> page where it found that information. </p>
            <p>Keeping everything in a single file makes it cleaner for the chatbot to look through the relevant information, and also keeps the token count low: much lower than the 200K context window that Haiku operates in.</p>
          </TextContent>

          <CaseStudyImage src={getAssetPath('assets/side-projects/tokenizer.png')} alt="Context file visualised in a tokenizer — 3,919 tokens, 19,638 characters" />

          <TextContent>
            <p>Rate limiting (15 requests per hour per IP) and input sanitization keep costs controlled and inputs clean. The system prompt also includes prompt injection protection — the model is explicitly instructed to ignore any user message that tries to change its behavior.</p>
          </TextContent>


        </Section>

        <Section id="what-i-learned" title="What I learned">
          <GridList items={[
            {
              title: "Models, tokens and context windows stop being abstract fast.",
              content: "Running the context file through a tokenizer to verify it fit within Haiku's 200k context window made these concepts tangible. Thinking about context window as a design constraint — not just a spec on a model card — changed how I approach it."
            },
            {
              title: "Context file structure matters.",
              content: "How you organize content for a model to retrieve is its own skill. Clear section labels, consistent /path anchors, avoiding ambiguity — structuring the file so the model could cite specific sources accurately took more iteration than expected."
            },
            {
              title: "Chatbot UX has familiar problems.",
              content: "An open-ended AI input with no guidance produces hesitation. The animated placeholder cycling through example questions reduced that friction. The same interaction design principles that apply elsewhere apply here."
            },
            {
              title: "Citations build trust.",
              content: "Appending source citations as clickable links to actual pages does two things: it shows the visitor where the answer came from, and it directs them to the full case study if they want more. That's a UX pattern worth carrying forward."
            }
          ]} />
        </Section>

      </div>
    </CaseStudyLayout>
  );
};

export default PortfolioChatbot;
