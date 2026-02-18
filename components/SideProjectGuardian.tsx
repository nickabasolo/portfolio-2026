
import React from 'react';
import { TextContent, Visual } from './CaseStudyPrimitives';

const SideProjectGuardian: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Featured Blurb */}
      <section className="bg-amber-50 border border-amber-100 p-8 rounded-2xl flex items-start gap-4 mx-auto max-w-3xl">
        <div className="text-amber-600 shrink-0 mt-1">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wider">Featured in The Guardian</h3>
          <p className="text-amber-800 leading-relaxed">
            This project was featured by The Guardian for their "The Crunch" series, which highlights innovative data storytelling from around the world. It was published in June 2025.
          </p>
          <a
            href="https://www.theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-amber-900 border border-amber-900/20 px-4 py-2 rounded-full hover:bg-amber-900 hover:text-white transition-colors"
          >
            Read in The Guardian <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      {/* Project Goal */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-6">Project Goal</h2>
        <p className="text-2xl md:text-3xl font-serif text-stone-900 leading-relaxed max-w-4xl">
          To test the hypothesis that the 2025 Canadian election was defined by a shift away from minor third parties towards Canada’s two major parties.
        </p>
      </section>

      {/* The Chart */}
      <section className="space-y-12">
        <TextContent>
          <h2 className="text-3xl font-serif text-stone-900 mb-6">The Chart</h2>
          <p>
            Canada’s parliament has had a long history of many different political parties – until recently, when its two major parties dominated the 2025 election. I used a ternary plot to track the vote share of all 343 electoral districts from 2021 to 2025.
          </p>
          <p>
            It was clear that voters abandoned third parties (NDP, Greens, Bloc Quebecois) to consolidate behind the two major centrist parties, the Liberals and Conservatives.
          </p>
        </TextContent>

        <Visual
          label="Ternary Plot: 2021 vs 2025 Vote Share"
          caption="A ternary plot visualizing the movement of 343 electoral districts."
        >
          <img
            src="assets/side-projects/guardian-data-viz-chart.png"
            alt="Ternary plot showing third-party collapse in Canadian 2025 election"
            className="w-full h-auto object-contain rounded-lg"
          />
        </Visual>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-stone-200 py-12">
          <div className="space-y-2">
            <div className="text-4xl font-serif text-stone-900">-19 pts</div>
            <div className="text-sm font-bold uppercase tracking-widest text-stone-500">Third-party collapse</div>
            <p className="text-stone-600 text-sm">Support fell by an average of 19 points.</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif text-stone-900">+11 / +8</div>
            <div className="text-sm font-bold uppercase tracking-widest text-stone-500">Dual-Pole Growth</div>
            <p className="text-stone-600 text-sm">The Liberals picked up 11 points and Conservatives 8 points.</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif text-stone-900">92%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-stone-500">Of Ridings Affected</div>
            <p className="text-stone-600 text-sm">In 317 of 343 ridings, the political periphery collapsed.</p>
          </div>
        </div>

        <TextContent>
          <p>
            In 92% of ridings (317 of 343), the political periphery collapsed, narrowing the Canadian competitive field to its most binary state in years.
          </p>
        </TextContent>
      </section>

      {/* The Format */}
      <section className="space-y-8 bg-stone-50 p-8 md:p-12 rounded-[2.5rem]">
        <h2 className="text-3xl font-serif text-stone-900">The Format</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">Why a ternary plot?</h3>
            <p className="text-stone-600 leading-relaxed">
              While a bar chart or line chart usually compares two variables, I chose a ternary plot because it visualizes the relationship between three competing variables in a way other charts cannot.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">Visualizing Movement</h3>
            <p className="text-stone-600 leading-relaxed">
              It also let me represent the movement of the points over time: showing the difference between 2021 and 2025 helps visualize the momentum of millions of voters moving away from the top vertex (Third Parties) toward the base (Liberal/Conservative).
            </p>
          </div>
        </div>
      </section>

      {/* The Workflow */}
      <section className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-900">The Workflow: Design + AI</h2>
        <p className="text-lg text-stone-600 max-w-3xl">
          As a designer, I used this project to bridge the gap between complex data and clear storytelling by leveraging an AI-augmented workflow:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="space-y-3 bg-white border border-stone-200 p-6 rounded-2xl">
            <div className="text-amber-600 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="font-bold text-stone-900">Data Normalization</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              I used Elections Canada redistribution data to transpose 2021 results onto 2025's new riding boundaries, ensuring a true "apples-to-apples" comparison.
            </p>
          </div>

          <div className="space-y-3 bg-white border border-stone-200 p-6 rounded-2xl shadow-sm shadow-amber-500/10">
            <div className="text-amber-600 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h3 className="font-bold text-stone-900">AI-Assisted Development</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              I used Cursor and ChatGPT to write the Python scripts needed to process the dataset and generate the initial Plotly visualization. This allowed me to handle high-level data engineering without a background in software engineering.
            </p>
          </div>

          <div className="space-y-3 bg-white border border-stone-200 p-6 rounded-2xl">
            <div className="text-amber-600 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <h3 className="font-bold text-stone-900">Figma Refinement</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              I exported the raw plot to Figma to apply a professional design system—optimizing typography, color hierarchy, and line weights to ensure the "downward drift" was legible at a glance.
            </p>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-stone-900 text-stone-400 p-8 md:p-12 rounded-[2.5rem] space-y-8">
        <h2 className="text-3xl font-serif text-white">Why this matters for your team</h2>
        <p>From user-facing dashboards to presenting internal metrics, product design heavily relies on data. This project demonstrates my ability to:</p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-amber-500 mr-3 mt-1">✓</span>
            <span>Formulate a hypothesis and find the data to prove it.</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-3 mt-1">✓</span>
            <span>Translate complex datasets into intuitive, high-impact visuals.</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-3 mt-1">✓</span>
            <span>Adopt emerging AI tools (Cursor/LLMs) to expand my technical capabilities and accelerate my design process.</span>
          </li>
        </ul>
      </section>

      <div className="flex justify-center pt-8">
        <a
          href="https://www.theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors border-b border-amber-200 pb-1"
        >
          View on The Guardian website
        </a>
      </div>
    </div>
  );
};

export default SideProjectGuardian;
