# Side project case studies

---

# Canada's 2025 election, by riding

**Tools:** Python · Plotly · Figma · Claude in Cursor
**Timeline:** 1–2 days (static) · extended later for interactive version
**Recognition:** Featured in The Guardian

---

> 📸 **ARTIFACT — Hero image**
> The full ternary plot — the published version. It's visually distinctive enough to lead without explanation. Let it land before you describe it.

---

## Why this existed

I've been interested in politics since before I studied economics — I interned with the government for several years and followed Canadian elections closely. The 2025 result had a clear story that I hadn't seen visualised well: voters were consolidating around the two major parties, abandoning third parties at an unusual rate.

I also wanted to test something. Vibe-coding — using AI to write the majority of implementation code while the human steers — was becoming a real workflow in mid-2025. A personal project with a clear goal and a contained dataset felt like the right place to find out what it could actually do.

---

## Finding the right chart

The consolidation story was obvious in the data. Making it visible took longer.

I tried several conventional approaches — bar charts of vote share by party, maps coloured by winning riding — before landing on a ternary plot: a triangular chart that plots three-way vote share simultaneously, with each corner representing 100% for one party. Every riding becomes a single point. Movement between elections becomes a line.

The ternary plot made the consolidation pattern immediate. Points that were scattered across the triangle in 2021 had pulled toward the two dominant corners by 2025. No annotation needed.

> 📸 **ARTIFACT — Exploration comparisons**
> If you have earlier chart attempts (bar charts, choropleth map), show one or two alongside the final ternary plot. The contrast makes the chart choice feel like a decision rather than a default.

---

## How it came together

I used Claude in Cursor to process and clean the Elections Canada dataset, write the Plotly scripts, and iterate on the chart parameters. The design cleanup — typography, colour, layout for publishing — happened in Figma.

Start to first published version: about two days.

A few days after I posted the static image, The Guardian found it and reached out to publish it. Later in the year I rebuilt it as an interactive version — searchable by riding, with hover states and the 2021–2025 movement lines — which is now live on the site.

> 🎥 **ARTIFACT — Interactive demo**
> A short screen recording of the interactive version showing a riding search and hover state. The static image is striking; the interaction is what makes it genuinely useful.

---

## What I learned

Vibe-coding is real but it's not magic. The speed came from not having to write boilerplate — Claude handled the data wrangling and Plotly syntax while I focused on what the chart needed to communicate. The design judgment was still entirely mine: which chart type, which variables to encode, what to show and what to leave out.

The pipeline that emerged — AI for implementation, human for decisions — is one I've carried into other projects since.

---
---

# This portfolio: an AI assistant for multiple audiences

**Tools:** React · Claude Haiku · Vercel · OpenRouter
**Status:** Live at nickabasolo.com

---

> 📸 **ARTIFACT — Screenshot or short recording**
> The chatbot in the portfolio hero, with an example conversation visible. Show it answering something a real visitor would ask — "what kind of design work do you do?" or "have you worked on data visualisation?" — so the value proposition is immediately clear.

---

## The problem

A portfolio serves several different audiences at once. A recruiter wants to quickly assess fit. A hiring manager wants to understand how I think. An engineering manager wants to know if I can work with their team.

The same nav, the same copy, the same order of sections — serves all of them poorly. Someone who wants to know about my process has to read the same introduction as someone who just wants to know what tools I use.

I'd been wanting to explore AI integrations in a hands-on way. A portfolio chatbot felt like a problem worth solving and a useful thing to actually build.

---

## How it works

The architecture is intentionally minimal. No vector database, no embeddings — just a well-structured markdown context file loaded into the system prompt at runtime, with the model strictly instructed to answer only from that file.

The tradeoff was deliberate: a full portfolio fits comfortably in a 200k token context window. Skipping embeddings removed infrastructure complexity with no quality cost at this scale. The model proxies through a Vercel serverless function using SSE streaming, so responses appear word by word rather than after a loading delay.

A few details worth noting: the model appends source citations to every response, which the frontend renders as clickable links to the relevant case study or page. Server-side rate limiting and input sanitisation keep costs controlled and inputs clean.

> 📸 **ARTIFACT — Architecture diagram**
> A simple diagram showing the flow: visitor question → serverless function → Claude Haiku → streamed response with source citations. Keep it light — one page, no jargon. This signals technical fluency without requiring the reader to be technical.

---

## The part that was actually hard

The engineering took a day. Writing the context file took much longer.

Getting the model to answer well required thinking carefully about what each type of visitor actually wants to know — and structuring the content so the model could surface the right detail for the right question. That meant auditing my own portfolio from the perspective of an LLM: what's present, what's missing, what's ambiguous.

It also meant every piece of information in the context file had to be tied to a specific case study or page — so the chatbot's answers were grounded in something a visitor could go read, not just a confident-sounding summary of nothing.

Writing the context file turned out to be as much a design problem as an engineering one.

---

## What I learned

**Grounding is a design decision.** Constraining the model to a specific document — rather than letting it draw on general knowledge — wasn't just a safety measure. It made the responses more useful, more specific, and more trustworthy. Knowing the chatbot can only tell you what's actually in the portfolio changes how you interact with it.

**The blank canvas problem is real.** An open-ended AI input with no guidance produces hesitation. The animated placeholder — cycling through example questions with a typewriter effect — reduced that friction noticeably. Small UX details matter as much in AI interfaces as anywhere else.

**Building it taught me more than reading about it would have.** Managing token constraints, thinking about context window as a design parameter, handling streaming responses — these aren't abstract concepts anymore. That hands-on understanding shapes how I think about AI as a design material, not just a feature to spec.
