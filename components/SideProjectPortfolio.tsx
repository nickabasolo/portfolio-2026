import React from 'react';
import { TextContent, Visual } from './CaseStudyPrimitives';
import { getAssetPath } from '../utils/paths';

const SideProjectPortfolio: React.FC = () => {
    return (
        <div className="space-y-24">
            {/* Featured Blurb */}
            <section className="bg-stone-900 border border-stone-800 p-8 rounded-2xl flex items-start gap-4 mx-auto max-w-3xl">
                <div className="text-amber-500 shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-amber-500 text-sm uppercase tracking-wider">Vibe Coding 101</h3>
                    <p className="text-stone-300 leading-relaxed">
                        This portfolio was "vibe coded"—meaning it was built with intense reliance on AI coding assistants (like Cursor, Claude, and Gemini) to translate design intuition directly into code, bypassing traditional slow implementation cycles.
                    </p>
                </div>
            </section>

            {/* Project Goal */}
            <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-6">The Goal</h2>
                <p className="text-2xl md:text-3xl font-serif text-stone-900 leading-relaxed max-w-4xl">
                    To build a polished, high-fidelity portfolio directly in code, using AI to bridge the gap between product design and frontend engineering.
                </p>
            </section>

            {/* The Vibe */}
            <section className="space-y-12">
                <TextContent>
                    <h2 className="text-3xl font-serif text-stone-900 mb-6">Designing in Code</h2>
                    <p>
                        Typically, I'd start in Figma, laboring over auto-layouts, type scales, and component variants. For this project, I skipped Figma almost entirely. Instead, I established a core "vibe"—a moodboard of tones, typography (a blend of crisp sans and elegant serif), and components—and prompted AI to build the structural scaffolding.
                    </p>
                    <p>
                        This allowed me to see real, interactive prototypes in the browser within minutes, iterating on the actual medium rather than a static representation.
                    </p>
                </TextContent>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-stone-200 py-12">
                    <div className="space-y-2">
                        <div className="text-4xl font-serif text-stone-900">React + Vite</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-stone-500">The Core Engine</div>
                        <p className="text-stone-600 text-sm">A fast, modern stack ensuring the site feels snappy and responsive.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-serif text-stone-900">Tailwind CSS</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-stone-500">Styling System</div>
                        <p className="text-stone-600 text-sm">Utility-first classes allowed me to rapidly test layout and color decisions via prompts.</p>
                    </div>
                </div>
            </section>

            {/* The Workflow */}
            <section className="space-y-8 bg-stone-50 p-8 md:p-12 rounded-[2.5rem]">
                <h2 className="text-3xl font-serif text-stone-900">The AI Workflow</h2>
                <p className="text-lg text-stone-600 max-w-3xl mb-8">
                    The process of "vibe coding" isn't about letting the machine do all the work, but rather acting as an art director to a highly capable technical team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                        <div className="text-amber-600 mb-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        </div>
                        <h3 className="font-bold text-stone-900">1. Natural Language Prompting</h3>
                        <p className="text-sm text-stone-600 leading-relaxed">
                            Describing layout intent ("Make this a bento grid with a masonry feel") rather than writing boilerplate flex/grid CSS.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="text-amber-600 mb-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <h3 className="font-bold text-stone-900">2. Real-time Refactoring</h3>
                        <p className="text-sm text-stone-600 leading-relaxed">
                            Using an LLM agent to instantly refactor large files, split components, or fix routing issues without losing design momentum.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="text-amber-600 mb-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                        </div>
                        <h3 className="font-bold text-stone-900">3. Human Curation</h3>
                        <p className="text-sm text-stone-600 leading-relaxed">
                            Fine-tuning the generated code for precision—adjusting padding values, modifying color opacities, and ensuring accessible contrast ratios.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why this matters */}
            <section className="space-y-8">
                <TextContent>
                    <h2 className="text-3xl font-serif text-stone-900 mb-6">Designer + Developer</h2>
                    <p>
                        Understanding both sides of the product equation makes for better design. By using AI to augment my abilities, I can not only prototype high-fidelity concepts faster, but also communicate more effectively with engineering teams. I understand how components break down, how data moves through an application, and the practical constraints of modern web development.
                    </p>
                </TextContent>
            </section>
        </div>
    );
};

export default SideProjectPortfolio;
