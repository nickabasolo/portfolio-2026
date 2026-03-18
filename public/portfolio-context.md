<!-- Remember to update this file when editing portfolio content -->

# Nick Abasolo — Portfolio Knowledge Base

This document is a structured reference of Nick's portfolio content for use by an AI assistant. Each section is tagged with its source page so the assistant can cite where information came from.

---

## About Nick

[Source: /about]

Nick Abasolo is a Senior Product Designer with 6 years of experience. He is based in Toronto, ON, and is open to relocation. He is a dual US and Canadian citizen, authorized to work in both countries. He currently holds the role of Senior Product Designer at Workstream.

Nick is focused on the operational layer of software — the compliance systems, workflows, and everyday tools that sit between a business's rules and the people carrying them out. For the past three years, he has been at Workstream building a 0-to-1 mobile platform for the hourly workforce. When he joined, the product was an HR tool built for managers on desktop. Workers became his mandate. Together with a UX researcher, he helped establish the hourly worker as a distinct persona with distinct needs, and built the case for a product surface designed around them. What started as an ambiguous brief eventually became a compliance engine covering five US states, a labour cost visualisation tool, a shared-device tablet experience, and a time clock that reduced payroll error reviews by 31%.

Nick's background is in economics and government policy. Economics is the study of human decision-making, which was always what drew him to UX. He loved the field, but wanted to be building things instead of writing papers, so he transitioned into product design about six years ago.

Outside work, Nick is interested in how AI will change both the design process and the products designers build. He has been building small AI-integrated tools on the side. He also recently took up wheel-throwing pottery.

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

Nick's most significant and recent role. Key accomplishments include: reducing payroll errors by 31% through a worker-led correction flow that navigated complex regulatory requirements; designing a cross-platform clock-in experience across mobile, tablet, and web in compliance with complex labor laws; architecting a real-time labor cost analysis dashboard that reduced customer labor spend by an average of 7%; and leading research for a new user persona that drove expansion into a greenfield product line generating $1.5M ARR.

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

**Research & Strategy** — User interviews, usability testing, user stories, competitive analysis, persona building, heuristic evaluation.

**Design Craft** — Information architecture, sketching & wireframing, user flow mapping, prototyping, design systems.

**Software** — Figma, Webflow, JIRA, Adobe CC.

**AI & Development** — GitHub, Cursor, Gemini, React prototyping (Vite).

---

## Case Studies

### Case Study 1: Eliminating Payroll Errors at the Source (Time Clock)

[Source: /case-study/time-clock]

**Role:** Senior Product Designer | **Company:** Workstream | **Delivered:** Q3 2025
**Tags:** End-to-end, Web, Mobile, UX Research & Interviews, Compliance tech

**Summary:** Empowering shift workers to submit compliant edit suggestions, saving managers hours of manual admin work every week.

**Impact:** 31% reduction in flagged timecard review volume; 1.5 hours of admin time reclaimed per manager per week; ~52% of remaining flags resolved through worker-requested edits rather than manual manager review.

**The Problem:** Every week, restaurant managers wade through 40+ flagged punches on the timesheet — missed breaks, forgotten clock-outs, disputed punches — each requiring a manual investigation before payroll can close. Inaccurate timesheets mean inaccurate paychecks and risk labor law violations. The initial brief was to improve the manager's review dashboard.

**The Strategy Shift:** After interviewing 5 managers, Nick discovered that most of their time wasn't spent reviewing flags — it was spent chasing workers to find out what actually happened. The real problem wasn't a bad dashboard; it was bad data at the source. Nick negotiated for additional discovery time by reframing it as an ROI calculation. Focus shifted to the Worker Time Clock experience. After 12 worker interviews, three intervention points emerged:

- Clock-in: Workers didn't know their break schedule → surface the full shift agenda on clock-in.
- Mid-shift: Missed breaks are the #1 cause of labor fines → lock screen notifications requiring zero app interaction.
- Clock-out: Workers knew about their errors but had no structured way to flag them → let workers request their own corrections.

**Key Design Decisions:**

1. Notifications and agenda view — Since workers spend 95% of a shift away from their phone, the interface needed to work at the periphery. Timed lock screen reminders and an in-app shift agenda handled two different interaction layers.

2. Edit requests, not edits — The obvious solution (letting workers edit timecards directly) failed before testing even began because managers were wary of giving employees access to payroll data. The fix was linguistic: reframing "edits" as "suggestions." Workers could flag errors; managers retained final approval. A small wording change that completely reframed the trust dynamic.

3. The shift summary "high score" moment — Beta users were still missing errors at clock-out because they mentally disengaged the moment they finished. Inspired by video game end-screens, Nick designed the shift summary as a high-score moment: ticking earnings, haptic feedback, a full shift timeline — all creating a deliberate pause to prompt a final data audit while the memory was freshest. This was a data integrity mechanism disguised as delight.

4. Timesheet polish (manager side) — With upstream errors reduced, the manager dashboard became quieter. New status chips with specific, actionable microcopy replaced blunt "flagged" row highlights.

**Learnings:**
- Tracing the source of the problem: The biggest ROI came from questioning the initial ask. The manager dashboard was the most visible problem, but fixing inputs upstream meant fewer corrections downstream.
- Language is a design material: Reframing "worker edits" as "worker suggestions" wasn't a copywriting tweak — it was the solution. In B2B products with complex trust dynamics, word choice often does more work than the interface itself.
- Delight earns its place when it has a job: The shift summary "high score" moment was actually a data integrity mechanism, providing a concrete argument for why delight belongs in enterprise products.

---

### Case Study 2: Labour Cost — Designing for a Metric That Runs a Restaurant

[Source: /case-study/labor-cost]

**Role:** Senior Product Designer | **Company:** Workstream | **Status:** In Progress (Q4 2024)
**Tags:** Data visualisation, Dashboard design, Mobile, UX Research

**Summary:** Helping managers make staffing decisions in the moment — starting with a better chart, ending with a mobile recommendation engine.

**Impact:** Desktop planning view shipped. Mobile reactive view in beta.

**The Problem:** Labour cost is the most controllable variable in a restaurant's finances. The data existed in Workstream (scheduled hours, clocked time, wage rates, projected revenue) but none of it was surfaced in a way a manager could actually use. There was also a significant gap in how different managers thought about the metric — owners worked in raw dollars, experienced GMs worked in SPLH (sales per labour hour, the industry-standard ratio of revenue to labour spend).

**The Insight:** Initial explorations used bar charts and line graphs. Informal testing with restaurant workers showed weak comprehension — people could extract fragments but couldn't connect what they were seeing to a decision they'd make. Nick noticed a bullet chart in a nutrition tracking app — target, actual, delta — the same mental model a restaurant manager already uses. A formal comprehension study with 6 GMs confirmed the bullet chart was the only chart type where participants could articulate not just what was shown, but what they'd do about it.

**What Shipped:** A bullet chart-based desktop planning view with a metric toggle spanning labour hours, dollars, and SPLH. Designed for a deliberate, forward-looking mode — a GM planning next week's staffing. The harder problem: the planning view told managers their labour cost was wrong but didn't say what to do mid-service. The mobile reactive view (in beta) is a recommendation engine — showing who's clocked in, shift end times, and live labour data, translated into direct actions: "Revenue is tracking high — consider calling in one more cashier within the next two hours."

**Learnings:**
- Comprehension is not the same as familiarity: Bar charts are everywhere, but familiarity doesn't mean legibility in every context. Start with the mental model, not the most professional-looking chart type.
- Cross-domain borrowing is a research method: The insight came from noticing a solution in a completely different context (a nutrition app) and asking whether the underlying logic transferred.
- Shipping insight revealed the harder problem: The planning view was a meaningful improvement, but watching managers use it made clear the real challenge was closing the loop between knowing something is wrong and knowing what to do about it — in the moment, on a phone, mid-service.

---

### Case Study 3: Break Rules — Designing a Compliance System for People Who Aren't Lawyers

[Source: /case-study/break-rules]

**Role:** Senior Product Designer | **Company:** Workstream | **Status:** In Progress (Q2 2025)
**Tags:** End-to-end, Web, Mobile, Compliance tech, Systems design

**Summary:** Translating complex, state-by-state labor law into a rules engine managers could configure — and notifications workers could actually act on.

**Impact:** Compliance presets shipped for five US states. Worker break notifications in production.

**The Problem:** Customers were receiving labor law violations they didn't know they were committing. Missing a meal break in California can cost an employer one hour of the employee's regular pay per violation — multiplied across 30 workers over a month, it becomes a significant liability. The rules vary by state and are specific: not just how long a break must be, but when within a shift it must start. Workstream recorded what happened; it had no opinion on whether what happened was legal.

**For the Manager — Natural Language Rules Builder:** The first version used a conventional logic builder (conditions, operators, values) — immediately confusing. Managers could describe their rules in conversation but couldn't translate them into conditional logic. Nick redesigned the config UI around natural sentence structure with editable fields embedded in readable sentences: "If a worker's shift is longer than [5 hours], they must take a [30-minute] break, starting within [2 hours] of their shift start." Managers could read it back and verify it matched their intent.

**The AI Decision:** Natural language configuration via AI was explored and rejected. In a compliance context where errors have legal consequences, being able to read a rule back and confirm it means exactly what you intended is more valuable than speed. A constrained approach where the constraints build trust was the right call.

**Compliance Presets:** For the five states covering the majority of the customer base, Nick pushed for pre-configured settings — correct compliance out of the box. His PM was wary of liability. Nick reframed: these weren't defaults, they were presets — like a recommended settings profile users can modify. That framing resolved the concern and the presets shipped.

**For the Worker — Progressive Urgency Notifications:** Workers never saw the rules engine — they saw the output of it. The challenge was communicating not just that a break was needed, but when — given that labor law often mandates a window. The solution was a progressive urgency model: a gentle reminder early in the break window, escalating to a more prominent notification as the window closed, with language shifting from informational to directive.

**Learnings:**
- The interface should speak the user's language, not the system's: The natural language redesign removed the translation step between how managers think and how the system works.
- Constraints build trust in high-stakes domains: A more constrained approach where constraints themselves are the feature — not a limitation.
- Designing for two radically different users on the same data requires radical separation: The manager config UI and worker notification share nothing visually. The investment was in making the handoff between them invisible.
- Language resolves stakeholder concerns that interface changes cannot: "Preset, not default" was a reframe that addressed a legitimate liability concern without changing any underlying behaviour.

---

## Side Projects

### Side Project 1: Canada's 2025 Election, by Riding

[Source: /side-project/third-parties]

**Role:** Data, design and development | **Company:** Side project | **Duration:** 2 days
**Tags:** Data Viz, Python, Plotly, Editorial

**Summary:** A ternary plot showing how voters consolidated around the two major parties across all 343 electoral districts — published by The Guardian. An interactive version is also live on the portfolio, searchable by riding with hover states and 2021–2025 movement lines. View the published piece at: theguardian.com/news/2025/jun/13/the-crunch-how-ukraine-drones-hit-russia-marine-heatwaves-and-the-collapse-of-canadas-third-parties

**Why Nick made it:** He'd been following Canadian politics closely (he interned with government for several years) and the 2025 result had a clear story that hadn't been visualised well: voters were consolidating around the two major parties at an unusual rate. He also wanted to test vibe-coding — using AI for the majority of implementation while steering the design decisions himself — with a contained, real-world dataset.

**Finding the right chart:** Nick tried bar charts and maps before landing on a ternary plot: a triangular chart that plots three-way vote share simultaneously, with each corner representing 100% for one party. Every riding becomes a single point; movement between elections becomes a line. The ternary plot made the consolidation pattern immediate — points scattered across the triangle in 2021 had pulled toward the two dominant corners by 2025. No annotation needed.

**How it came together:** Claude in Cursor processed and cleaned the Elections Canada dataset, wrote the Plotly scripts, and iterated on chart parameters. Design cleanup happened in Figma. Start to first published version: about two days. A few days after posting the static image, The Guardian found it and reached out to publish it. Nick later rebuilt it as an interactive version, now live on the portfolio.

**Learnings:**
- Vibe-coding is real but not magic: The speed came from not writing boilerplate. The design judgment — which chart type, which variables to encode — was still entirely Nick's.
- The pipeline is one he's carried forward: AI for implementation, human for decisions. A division of labour he now reaches for deliberately.

---

### Side Project 2: Portfolio Chatbot — AI Assistant

[Source: /side-project/portfolio-chatbot]

**Role:** Designer / Developer | **Company:** Personal Project | **Year:** 2025
**Tags:** AI, LLM, React, Serverless

**Summary:** A streaming AI assistant embedded in the portfolio hero that serves different visitors differently — without them having to navigate for it. Powered by Claude Haiku via OpenRouter, with streaming responses, source citations, and a grounded knowledge base.

**The problem it solves:** A portfolio serves several audiences at once — recruiter, hiring manager, engineering manager. The same nav and copy serves all of them poorly. The chatbot lets each visitor get to what they care about without reading through content meant for someone else.

**Architecture:** Intentionally minimal — no vector database, no embeddings. A well-structured markdown context file loaded into the system prompt at runtime, with the model strictly instructed to answer only from that file. A full portfolio fits comfortably in a 200k token context window, so skipping embeddings removed infrastructure complexity with no quality cost. The model proxies through a Vercel serverless function using SSE streaming, so responses appear word by word. Every response includes source citations that the frontend renders as clickable links to the relevant page. Server-side rate limiting and input sanitisation keep costs controlled.

**The hard part:** The engineering took a day. Writing the context file took much longer. Getting the model to answer well required auditing the portfolio from the perspective of an LLM — what's present, what's missing, what's ambiguous — and structuring content so the model could surface the right detail for the right question. Writing the context file was as much a design problem as an engineering one.

**Learnings:**
- Grounding is a design decision: Constraining the model to a specific document made responses more useful, specific, and trustworthy.
- The blank canvas problem is real: An animated placeholder cycling through example questions reduced the hesitation of facing an open input field.
- Building it taught more than reading about it: Managing token constraints, thinking about context window as a design parameter, handling streaming — these are no longer abstract concepts.

---

## Summary for the Chatbot

Nick Abasolo is a Senior Product Designer with 6 years of experience, currently at Workstream (a B2B SaaS company serving the hourly workforce). His work sits at the intersection of complex operational workflows, regulatory compliance, and the real-world constraints faced by shift workers and their managers. He brings an economics background to his design practice, applying systems thinking and behavioral logic to product decisions. He is comfortable leading research, expanding the scope of a brief when the data calls for it, and building high-fidelity work using AI-augmented development tools. He is based in Toronto, ON, and is authorized to work in both the US and Canada.
