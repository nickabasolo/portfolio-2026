import React from 'react';
import { TextContent } from '../../components/CaseStudyPrimitives';
import CaseStudyLayout from '../../components/CaseStudyLayout';

import { useScrollToTop } from '../../hooks/useScrollToTop';

export const summary = {
  id: 'portfolio-chatbot',
  kind: 'side-project' as const,
  title: 'Ask me anything: embedding AI in my portfolio',
  subtitle: 'A streaming AI assistant that serves different audiences differently — without them having to navigate for it.',
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
    <CaseStudyLayout image={summary.image} isSideProject>
      <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* The Idea */}
        <section className="space-y-8">
          <TextContent>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">The idea</h2>
            <p>
              A portfolio serves lots of different audiences at the same time. A recruiter wants to quickly assess fit. A potential collaborator wants to understand how I think. An engineering manager wants to know if I can work with their team. The same nav, the same copy, the same order of sections — serves all of them poorly.
            </p>
            <p>
              At the same time, LLM-based AI is finally in a place where it can be genuinely useful for problems like this. I wanted to challenge myself to use AI in a way that felt meaningfully helpful, as well as learn more about AI integrations in the process. The portfolio chatbot was the result.
            </p>
          </TextContent>
        </section>

        {/* How it works */}
        <section className="space-y-8">
          <h2 className="text-3xl font-serif text-stone-900">How It Works</h2>
          <p className="text-lg text-stone-600">
            The architecture is intentionally minimal — no vector database, no embeddings. Just a well-structured Markdown context file and a tight system prompt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-3">
              <div className="text-amber-600 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900">1. Grounded Context</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                A <code className="text-xs bg-stone-200 px-1 py-0.5 rounded">portfolio-context.md</code> file serves as the knowledge base — loaded at cold start into the system prompt. The model is strictly instructed to answer only from this file, preventing hallucination.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-amber-600 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900">2. Streaming Response</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                The Vercel serverless function proxies to Claude Haiku via OpenRouter using SSE streaming, so words appear as they're generated — no loading spinner, no waiting for a complete response.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-amber-600 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900">3. Source Citations</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                The model is prompted to append <code className="text-xs bg-stone-200 px-1 py-0.5 rounded">[Source: /path]</code> tags to every response. The frontend strips these and renders them as clickable pill links to the relevant case study or page.
              </p>
            </div>
          </div>
        </section>

        {/* Design decisions */}
        <section className="space-y-12">
          <TextContent>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">Details Worth Noting</h2>
          </TextContent>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-stone-200 py-12">
            <div className="space-y-2">
              <div className="text-sm font-bold uppercase tracking-widest text-stone-500">Model Choice</div>
              <div className="text-2xl font-serif text-stone-900">Claude Haiku</div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Fast, cheap, and more than capable for retrieval-style Q&A. The system prompt does the heavy lifting — the model just needs to accurately paraphrase grounded context.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold uppercase tracking-widest text-stone-500">No Vector DB</div>
              <div className="text-2xl font-serif text-stone-900">Context Window as RAG</div>
              <p className="text-stone-600 text-sm leading-relaxed">
                A full portfolio fits comfortably in a 200k token context window. Skipping embeddings removes infrastructure complexity with zero quality tradeoff at this scale.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold uppercase tracking-widest text-stone-500">Safety</div>
              <div className="text-2xl font-serif text-stone-900">Rate Limiting + Sanitation</div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Server-side rate limiting (15 req/hr per IP) plus client-side localStorage tracking (10 message soft cap) keeps costs controlled. Input is stripped of control characters before reaching the model.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold uppercase tracking-widest text-stone-500">UX Detail</div>
              <div className="text-2xl font-serif text-stone-900">Animated Placeholder</div>
              <p className="text-stone-600 text-sm leading-relaxed">
                The input cycles through example prompts ("Ask me about my design process...") with a typewriter effect, reducing the blank-canvas paralysis that kills engagement with open-ended AI inputs.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="space-y-8">
          <TextContent>
            <h2 className="text-3xl font-serif text-stone-900 mb-6">What I Learned</h2>
            <p>
              The hardest part wasn't the engineering — it was writing the context file. Getting the model to answer well required thinking carefully about what each type of visitor actually wants to know, and structuring the Markdown so the model could surface the right detail for the right question.
            </p>
            <p>
              Plus, making sure each piece of information in the context file was directly tied to a specific case study or page in the portfolio was important for reassuring users that the bot's knowledge was grounded in real content, not just hallucinated. It also meant I got to audit my own portfolio from the perspective of an LLM, which revealed some gaps and areas for improvement in how I present information.
            </p>
            <p>
              Finally, embedding an AI assistant directly in the portfolio hero was a fun way for me to learn more about calling APIs for AI models, managing token and context window constraints, and making something cool in today's AI-powered world.
            </p>
          </TextContent>
        </section>

      </div>
    </CaseStudyLayout>
  );
};

export default PortfolioChatbot;
