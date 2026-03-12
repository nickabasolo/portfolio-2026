<!-- Remember to update this file when editing portfolio content -->

# Nick Abasolo — Portfolio Knowledge Base

This document is a structured reference of Nick's portfolio content for use by an AI assistant. Each section is tagged with its source page so the assistant can cite where information came from.

---

## About Nick

[Source: /about]

Nick Abasolo is a Senior Product Designer with 6 years of experience. He is based in Vancouver, BC, and is a dual US and Canadian citizen, authorized to work in both countries. He currently holds the role of Senior Product Designer at Workstream.

Nick's background is rooted in Economics — he studied Political Economics at Simon Fraser University before earning a UX Design diploma from BrainStation. That economic lens, focused on incentives, trade-offs, and systemic logic, carries directly into how he approaches product design today.

In his own words: "I design for humans navigating operational workflows and regulatory compliance in messy, real-world situations; whether they're on their feet, on a call, or just in the middle of life."

Outside work, Nick enjoys "vibecoding" mini-games and small web experiments, is a recent tea enthusiast, a persistent foodie, and a serial language learner.

---

## Contact Information

[Source: /about]

- Email: nicholasabasolo@gmail.com
- Phone: (415) 368-9017
- LinkedIn: linkedin.com/in/nickabasolo
- GitHub: github.com/nickabasolo
- Resume available for download on the About and Resume pages.

---

## Experience & Work History

[Source: /resume]

### Workstream — HR, payroll and compliance SaaS for the hourly workforce

**Senior Product Designer** | Jan 2023 – Present

Nick's most significant and recent role. Key accomplishments include: reducing payroll errors by 58% through a worker-led correction flow that navigated complex regulatory requirements; designing a cross-platform clock-in experience across mobile, tablet, and web that complies with labor laws; architecting a real-time labor cost analysis dashboard that reduced customer labor spend by an average of 7%; and leading research for a new user persona that drove expansion into a greenfield product line generating $1.5M ARR.

### Dialpad — AI SaaS for enterprise communications and telephony

**Product Designer** | Aug 2020 – Dec 2022

Unified disparate telephony, messaging, and video calling products into a single mobile experience. Raised the Dialpad App Store rating from 3.2 to 3.9 stars in six months.

**Associate Product Designer** | Jun 2019 – Jul 2020

Designed end-to-end mobile video calling with AI transcription and action items.

### SFU Health and Counseling — Clinic for medical services and training

**UX Designer** | Mar 2019 – Jun 2019

Developed a mental health training portal for faculty to improve accessibility to health resources.

---

## Education

[Source: /resume]

- Diploma, UX Design — BrainStation
- B.A., Political Economics — Simon Fraser University

---

## Skills & Expertise

[Source: /about, /resume]

**Design Craft** — Focused on high-fidelity execution and scalable systems. Skills include: Systems Design, Interaction Design, Prototyping, Figma, Adobe CC, Information Architecture, Sketching & Wireframing, User Flow Mapping, Design Systems.

**Strategy & Insight** — Applying economic logic to product decision making. Skills include: Behavioral Design, Systems Thinking, Qualitative Research, Product Strategy, Competitive Analysis, Persona Building, Heuristic Evaluation, User Stories.

**Research** — User interviews, usability testing, user stories, competitive analysis, persona building, heuristic evaluation.

**AI & Development** — Leveraging modern LLMs and agentic tools for building. Skills include: Cursor, Gemini & AI Studio, React and React Native prototyping, GitHub, React prototyping with Vite, Webflow, JIRA.

---

## Case Studies

### Case Study 1: Eliminating Payroll Errors at the Source (Time Clock)

[Source: /case-study/time-clock]

**Role:** Senior Product Designer | **Company:** Workstream | **Delivered:** Q3 2025
**Tags:** End-to-end, Web, Mobile, UX Research & Interviews, Compliance tech

**Summary:** Empowering shift workers to submit compliant edit suggestions, saving managers hours of manual admin work every week.

**Impact:** 58% reduction in flagged timecards; 1.5 hours of admin time reclaimed per manager per week; 23 worker-initiated corrections per week caught before reaching a manager.

**The Problem:** Every Sunday night, restaurant managers were wading through 40+ flagged timecards — missed breaks, forgotten clock-outs, disputed punches — each requiring manual investigation before payroll submission. Inaccurate timecards risked labor law violations, costly fees, and incorrect paychecks. The initial brief was to improve the manager's review dashboard.

**The Strategy Shift:** After interviewing 5 managers, Nick discovered that most of their time wasn't spent reviewing flags — it was spent chasing workers to find out what actually happened. The real problem wasn't a bad dashboard; it was bad data at the source. Nick negotiated for additional discovery time by reframing it as an ROI calculation: every error prevented at the worker level was one a manager never had to touch. Focus shifted to the Worker Time Clock experience. After 12 worker interviews, three intervention points emerged:

- Clock-in: Workers didn't know their break schedule → surface the full shift agenda on clock-in.
- Mid-shift: Missed breaks are the #1 cause of labor fines → lock screen notifications requiring zero app interaction.
- Clock-out: Workers knew about their errors but had no way to flag them → let workers request their own corrections.

**Key Design Decisions:**

1. Notifications and agenda view — Since workers spend 95% of a shift away from their phone, the interface needed to work at the periphery. Timed lock screen reminders and an in-app shift agenda handled two different interaction layers.

2. Suggestions, not edits — The obvious solution (letting workers edit timecards directly) failed in testing because managers were wary of giving employees access to payroll data. The fix was linguistic: reframing "edits" as "suggestions." Workers could flag errors; managers retained final approval. A small wording change that completely reframed the trust dynamic.

3. The shift summary "high score" moment — Beta users were still missing errors at clock-out because they mentally disengaged the moment they finished. Inspired by video game end-screens, Nick designed the shift summary as a high-score moment: ticking earnings, haptic feedback, a full shift timeline — all creating a deliberate pause to prompt a final data audit while the memory was freshest. This was a data integrity mechanism disguised as delight.

4. Timesheet polish (manager side) — With upstream errors reduced, the manager dashboard became quieter. New status chips with specific, actionable microcopy replaced blunt "flagged" row highlights.

**Learnings:**
- Fix the pencil, not the eraser: The biggest ROI came from questioning the brief. The manager dashboard was the eraser; the worker experience was the pencil.
- Language is a design material: Reframing "worker edits" as "worker suggestions" wasn't a copywriting tweak — it was the solution. In B2B products with complex trust dynamics, word choice often does more work than the interface itself.
- Delight earns its place when it has a job: The shift summary "high score" moment was actually a data integrity mechanism, providing a concrete argument for why delight belongs in enterprise products.

---

### Case Study 2: Performance Reviews for High-Turnover Industries

[Source: /case-study/labor-cost]

**Role:** Senior Product Designer | **Company:** Workstream | **Status:** In Progress

Traditional reviews in high-turnover industries like restaurants are often skipped or handled poorly due to administrative complexity. Nick is designing a guided, low-friction flow that simplifies feedback loops for both managers and workers, helping teams give consistent and unbiased feedback. Full case study coming soon.

---

### Case Study 3: The Command Center for Frontline Managers (Manager Dashboard)

[Source: /case-study/break-rules]

**Role:** Senior Product Designer | **Company:** Workstream | **Status:** In Progress

Fragmented labor data across multiple tools makes it impossible for managers to see operational health in real-time. The solution is a unified cockpit that surfaces exceptions and critical staffing gaps automatically — consolidating labor data into a single view so managers can spot staffing issues and fix operational delays before they impact the bottom line. Full case study coming soon.

---

## Side Projects

### Side Project 1: Visualizing Canada's 2025 Election Data

[Source: /side-project/guardian-data-viz]

**Role:** Data Designer | **Company:** The Guardian (Featured) | **Duration:** 2 Weeks
**Tags:** Data Viz, Climate, Editorial

**Summary:** A data visualization project testing the hypothesis that the 2025 Canadian election defined a shift away from minor third parties toward Canada's two major parties. Featured by The Guardian in their "The Crunch" series in June 2025. View at: theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties

**The Chart:** Nick used a ternary plot to track the vote share of all 343 electoral districts from 2021 to 2025. The data confirmed that voters abandoned third parties (NDP, Greens, Bloc Québécois) to consolidate behind the Liberals and Conservatives. Key findings: third-party support fell by an average of 19 points; the Liberals picked up 11 points and Conservatives 8 points; in 317 of 343 ridings (92%), the political periphery collapsed. A ternary plot was chosen over a bar or line chart because it visualizes the relationship between three competing variables simultaneously and makes the movement of voters over time legible at a glance.

**The Workflow:** Nick used an AI-augmented workflow across three stages: (1) Data normalization — using Elections Canada redistribution data to transpose 2021 results onto 2025's new riding boundaries for a true apples-to-apples comparison. (2) AI-assisted development — using Cursor and ChatGPT to write Python scripts that processed the dataset and generated the initial Plotly visualization, handling high-level data engineering without a traditional software engineering background. (3) Figma refinement — exporting the raw plot to Figma to apply a professional design system, optimizing typography, color hierarchy, and line weights so the "downward drift" was legible at a glance.

This project demonstrates Nick's ability to formulate a hypothesis and find the data to prove it, translate complex datasets into intuitive high-impact visuals, and adopt emerging AI tools to expand his technical capabilities.

---

### Side Project 2: Time Auction — A Multiplayer Party Game

[Source: /side-project/time-auction]

**Role:** Vibe Coder | **Company:** Personal Project | **Status:** In Progress
**Tags:** Game Design, AI-Assisted, Web App

A real-time multiplayer party game where players bid their time in real-time auctions, inspired by Netflix's The Devil's Plan. Built using Cursor AI with Node.js and Socket.IO. Full write-up coming soon.

---

### Side Project 3: This Portfolio — AI-Assisted Development

[Source: /side-project/portfolio-vibe-code]

**Role:** Designer / Developer | **Company:** Personal Project | **Status:** In Progress
**Tags:** React, Tailwind, AI-Assisted

Nick's portfolio itself is a side project, built using React, Vite, Tailwind CSS, and AI assistance through Cursor and Claude to translate design vision directly into production code — bypassing traditional slow implementation cycles.

The goal was to build a polished, high-fidelity portfolio directly in code, using AI to bridge the gap between product design and frontend engineering. Rather than starting in Figma, Nick established a core "vibe" — a moodboard of tones, typography (a blend of crisp sans and elegant serif), and components — and prompted AI to build the structural scaffolding. This allowed him to see real, interactive prototypes in the browser within minutes.

The AI workflow had three phases: (1) Natural language prompting — describing layout intent rather than writing boilerplate CSS; (2) Real-time refactoring — using an LLM agent to instantly refactor files, split components, or fix routing without losing design momentum; (3) Human curation — fine-tuning generated code for precision, adjusting padding, color opacities, and accessible contrast ratios.

Nick describes "vibe coding" not as letting the machine do all the work, but acting as an art director to a highly capable technical team. Understanding both sides of the product equation — design and development — makes for better design and more effective collaboration with engineering teams.

---

## Summary for the Chatbot

Nick Abasolo is a Senior Product Designer with 6 years of experience, currently at Workstream (a B2B SaaS company serving the hourly workforce). His work sits at the intersection of complex operational workflows, regulatory compliance, and the real-world constraints faced by shift workers and their managers. He brings an economics background to his design practice, applying systems thinking and behavioral logic to product decisions. He is comfortable leading research, expanding the scope of a brief when the data calls for it, and building high-fidelity work using AI-augmented development tools. He is based in Vancouver, BC, and is authorized to work in both the US and Canada.
