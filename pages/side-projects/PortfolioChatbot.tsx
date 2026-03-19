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

        <Section id="how-it-works" title="How it works">
          <TextContent>
            <p>A Vercel serverless function receives the user's message, sanitizes it, and proxies it to Claude Haiku via OpenRouter with SSE streaming — so responses appear word by word rather than after a loading delay.</p>
            <p>The model's knowledge is constrained to a single markdown file: <strong>portfolio_context.md</strong> — all my case study content compiled into one structured document with <code>/path</code> anchors throughout. That file loads into the system prompt at runtime, alongside a grounding instruction that tells the model to answer only from the context and to always append a source citation for every claim. I keep the context file updated whenever a case study changes.</p>
            <p>Rate limiting (15 requests per hour per IP) and input sanitization keep costs controlled and inputs clean. The system prompt also includes prompt injection protection — the model is explicitly instructed to ignore any user message that tries to change its behavior.</p>
          </TextContent>

          <CaseStudyImage src={getAssetPath('assets/side-projects/tokenizer.png')} alt="Context file visualised in a tokenizer — 3,919 tokens, 19,638 characters" />

          {/* Prompt architecture diagram */}
          <div className="w-full rounded-2xl border border-stone-200 overflow-hidden">

            {/* Label */}
            <div className="px-5 py-2.5 bg-stone-100 border-b border-stone-200">
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest">Prompt architecture</span>
            </div>

            <div className="p-6 bg-stone-50">
              <svg viewBox="0 0 565 640" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}} fontFamily="inherit">
                <defs>
                  <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <polygon points="0 0, 7 3.5, 0 7" fill="#c4b8a8"/>
                  </marker>
                </defs>

                {/* ── TOP ROW: Source pages ── */}
                {/* Subtle group label */}
                <text x="282" y="12" textAnchor="middle" fill="#c4b8a8" fontSize="9" fontWeight="500" letterSpacing="0.08em">SOURCE PAGES</text>

                <rect x="10" y="20" width="160" height="68" rx="8" fill="white" stroke="#e7e5e0" strokeWidth="1"/>
                <text x="90" y="46" textAnchor="middle" fill="#57534e" fontSize="11" fontWeight="500">Time Clock</text>
                <text x="90" y="62" textAnchor="middle" fill="#a8a29e" fontSize="9.5">case study</text>

                <rect x="193" y="20" width="160" height="68" rx="8" fill="white" stroke="#e7e5e0" strokeWidth="1"/>
                <text x="273" y="46" textAnchor="middle" fill="#57534e" fontSize="11" fontWeight="500">Compliance Engine</text>
                <text x="273" y="62" textAnchor="middle" fill="#a8a29e" fontSize="9.5">case study</text>

                <rect x="376" y="20" width="168" height="68" rx="8" fill="white" stroke="#e7e5e0" strokeWidth="1"/>
                <text x="460" y="46" textAnchor="middle" fill="#57534e" fontSize="11" fontWeight="500">Labour Cost, About</text>
                <text x="460" y="62" textAnchor="middle" fill="#a8a29e" fontSize="9.5">& other pages</text>

                {/* MERGE 1 → portfolio_context.md */}
                <line x1="90" y1="88" x2="90" y2="116" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="273" y1="88" x2="273" y2="116" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="460" y1="88" x2="460" y2="116" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="90" y1="116" x2="460" y2="116" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="90" y1="116" x2="90" y2="165" stroke="#d6d3d1" strokeWidth="1" markerEnd="url(#arrowhead)"/>

                {/* ── MIDDLE ROW: System prompt inputs ── */}
                <text x="282" y="180" textAnchor="middle" fill="#c4b8a8" fontSize="9" fontWeight="500" letterSpacing="0.08em">SYSTEM PROMPT</text>

                {/* portfolio_context.md */}
                <rect x="10" y="188" width="160" height="88" rx="8" fill="white" stroke="#e7e5e0" strokeWidth="1"/>
                <text x="90" y="210" textAnchor="middle" fill="#57534e" fontSize="10" fontWeight="600">portfolio_context.md</text>
                <text x="90" y="228" textAnchor="middle" fill="#a8a29e" fontSize="9.5">All pages compiled into</text>
                <text x="90" y="243" textAnchor="middle" fill="#a8a29e" fontSize="9.5">one structured file, with</text>
                <text x="90" y="258" textAnchor="middle" fill="#a8a29e" fontSize="9.5">/path anchors throughout</text>

                {/* Grounding instruction — dashed border */}
                <rect x="188" y="188" width="170" height="108" rx="8" fill="white" stroke="#c4b8a8" strokeWidth="1" strokeDasharray="4 3"/>
                <text x="273" y="210" textAnchor="middle" fill="#57534e" fontSize="10" fontWeight="600">Grounding instruction</text>
                <text x="273" y="230" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">"Only answer from the context</text>
                <text x="273" y="246" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">above. Never invent details.</text>
                <text x="273" y="262" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">Always append [Source: /path]</text>
                <text x="273" y="278" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">for every claim."</text>

                {/* User input */}
                <rect x="372" y="188" width="172" height="88" rx="8" fill="white" stroke="#e7e5e0" strokeWidth="1"/>
                <text x="458" y="210" textAnchor="middle" fill="#57534e" fontSize="10" fontWeight="600">User input</text>
                <text x="458" y="230" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">"Does Nick have experience</text>
                <text x="458" y="246" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">designing compliance</text>
                <text x="458" y="262" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">solutions?"</text>

                {/* MERGE 2 → Claude API */}
                {/* context.md bottom: 276, grounding bottom: 296, user input bottom: 276 */}
                <line x1="90" y1="276" x2="90" y2="338" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="273" y1="296" x2="273" y2="338" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="458" y1="276" x2="458" y2="338" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="90" y1="338" x2="458" y2="338" stroke="#d6d3d1" strokeWidth="1"/>
                <line x1="458" y1="338" x2="458" y2="372" stroke="#d6d3d1" strokeWidth="1" markerEnd="url(#arrowhead)"/>

                {/* ── CLAUDE API ── */}
                <rect x="362" y="378" width="192" height="72" rx="8" fill="#fefce8" stroke="#fde68a" strokeWidth="1"/>
                <text x="458" y="402" textAnchor="middle" fill="#57534e" fontSize="12" fontWeight="600">Claude API</text>
                <text x="458" y="420" textAnchor="middle" fill="#78716c" fontSize="9.5">Haiku · 200k context window</text>
                <text x="458" y="436" textAnchor="middle" fill="#78716c" fontSize="9.5">SSE streaming response</text>

                {/* Arrow → Model response */}
                <line x1="458" y1="450" x2="458" y2="482" stroke="#d6d3d1" strokeWidth="1" markerEnd="url(#arrowhead)"/>

                {/* ── MODEL RESPONSE ── */}
                <rect x="348" y="488" width="210" height="142" rx="8" fill="white" stroke="#e7e5e0" strokeWidth="1"/>
                <text x="453" y="510" textAnchor="middle" fill="#57534e" fontSize="10" fontWeight="600">Model response</text>
                {/* Divider */}
                <line x1="368" y1="518" x2="538" y2="518" stroke="#f5f5f4" strokeWidth="1"/>
                <text x="453" y="537" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">"Yes — Nick designed a</text>
                <text x="453" y="553" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">compliance engine covering</text>
                <text x="453" y="569" textAnchor="middle" fill="#78716c" fontSize="9.5" fontStyle="italic">five US states..."</text>
                {/* Citation pill */}
                <rect x="366" y="583" width="174" height="20" rx="10" fill="white" stroke="#e7e5e0" strokeWidth="1"/>
                <text x="453" y="597" textAnchor="middle" fill="#d97706" fontSize="9">↗  Compliance case study</text>
                {/* Source annotation */}
                <text x="453" y="620" textAnchor="middle" fill="#c4b8a8" fontSize="8.5">[Source: /case-study/break-rules]</text>

              </svg>
            </div>
          </div>
        </Section>

        <Section id="what-i-learned" title="What I learned">
          <GridList items={[
            {
              title: "Model selection is a real decision.",
              content: "I tested Sonnet and Haiku before settling on Haiku. Working through that tradeoff — capability vs. cost vs. response quality for this specific use case — made model selection feel concrete rather than theoretical."
            },
            {
              title: "Tokens and context windows stop being abstract fast.",
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
