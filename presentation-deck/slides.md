---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Nick's Portfolio Presentation
  Generated for 2026 interviews.
drawings:
  persist: false
transition: slide-left
title: Portfolio Presentation
---

# Nick Abasolo
## Product Designer Portfolio Presentation

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space to Begin <carbon:arrow-right class="inline"/>
  </span>
</div>

<!--
SPEAKER NOTES:
- Hi everyone, I'm Nick. Thank you for having me today.
- Today I'll walk you through my design process, focusing on how I approach complex B2B challenges and collaborate with cross-functional teams.
-->

---
layout: intro
---

# Introduction

- **Product Designer**
- Focused on complex B2B workflows, labor tools, and data-rich applications.

<!--
SPEAKER NOTES:
- Briefly introduce your background.
- Mention your core strengths: e.g. "I specialize in taking messy, fragmented workflows and distilling them into intuitive tools for workers and managers."
-->

---
layout: center
---

# Case Study 01
## Time Clock: From Audit to Autonomy

**Role:** Senior Product Designer (Lead UX/UI)  
**Team:** 1 PM, 3 Engineers, 1 User Researcher  
**Timeline:** 4 Months (Discovery to Launch)  

<div class="mt-8 text-left text-sm">
  <p><strong>The Challenge:</strong> Managers were losing 5+ hours/week manually auditing 40+ flagged timecards.</p>
  <p><strong>The Solution:</strong> Enabling hourly workers to suggest their own corrections, preventing errors at the source.</p>
</div>

<!--
SPEAKER NOTES:
- Introduce the project, who you worked with (very important for senior roles to show you can collaborate and lead a pod), and the high-level summary.
- "I was the lead designer on this project, partnering closely with my PM to redefine the scope..."
-->

---
layout: image-right
image: /assets/case-studies/time-clock-hero.png
---

# The Pre-Shift Context

- **The Status Quo:** Sunday nights = timesheet quagmire.
- **The Pain Point:** 40+ error flags (missed breaks, forgotten clocks).
- **The Risk:** Labor law violations and hefty fines.
- **The Reality:** Exhausting manual audits.

<!--
SPEAKER NOTES:
- Set the scene emotionally. Describe the pain of the manager on a Sunday night.
- Don't read the bullets; use them as prompts. 
- "Imagine you're a restaurant manager. It's 10 PM on a Sunday. Instead of resting, you are wading through 40+ error flags..."
-->

---
layout: default
---

# Defining the Problem (and the Metrics)

**Original Ask:** "Improve the manager's review dashboard."

**My Approach:**
- Interviewed 5 managers about their routines.
- Discovered the root cause: endless back-and-forth communication with workers.

**Success Metrics Set:**
1. Reduce number of flagged timecards by 30% (Goal)
2. Decrease manager time spent on audits.

<!--
SPEAKER NOTES:
- As a senior designer, show that you didn't just 'take orders'.
- "The initial brief was to build a better eraser for the manager. But after my discovery phase, I realized we needed a better pencil for the worker."
-->

---
layout: center
---

# The "Messy Middle" & Ideation

*[PLACEHOLDER: Insert image of whiteboard sketches, sticky notes, or low-fi wireframes showing alternative approaches]*

**Key Explorations:**
- Idea 1: Auto-resolving flags (Discarded: Legal compliance risks)
- Idea 2: Manager bulk actions (Discarded: Didn't solve the root communication issue)
- Idea 3: Worker-facing edits (Chosen direction)

<!--
SPEAKER NOTES:
- This slide is crucial. Interviewers want to see how you think, not just the final shiny UI.
- Explain *why* you discarded certain ideas. What were the trade-offs?
- "My PM and I debated auto-resolving these flags, but after consulting with legal, the compliance risk was too high..."
-->

---
layout: default
---

# The Strategy: Worker Touchpoints

I negotiated for engineering resources to shift focus to the Worker's App across three touchpoints:

1. **Clock-in:** Visibility of the schedule.
2. **Mid-shift:** Addressing cognitive load.
3. **Clock-out:** Enabling ad-hoc corrections.

*[PLACEHOLDER: Insert a Journey Map or flow diagram here]*

<!--
SPEAKER NOTES:
- "I reframed the ROI to my PM: Every error prevented by the worker is one the manager never sees."
-->

---
layout: default
---

# Execution: Visibility & Cognitive Load

**Designing for Real Life:**
Restaurant workers spend 95% of their shift *not* looking at their phones.

- **Progressive Disclosure:** Agenda surfaces only during active interaction (clock-in).
- **Zero-interaction UI:** Leveraged Live Activities (iOS) and Push Notifications for break countdowns on the lock screen.

*[PLACEHOLDER: Insert high-fidelity mockups of the Lock Screen notifications vs Agenda]*

<!--
SPEAKER NOTES:
- Focus on the *rationale* behind the UI. Why didn't you build a complex dashboard for the worker? Because they don't have time to look at it.
-->

---
layout: default
---

# Execution: Worker Suggestions

**The Hurdle:** Managers were terrified of giving edit access to employees (payroll manipulation).

**The Design Solution:** Framing and Language.
- Changed "Worker Edits" to "Worker Suggestions."
- Ensures the manager retains final approval.
- Bridged the trust gap through UX copywriting.

*[PLACEHOLDER: Insert UI showing the "Suggestion" flow vs "Approval" flow]*

<!--
SPEAKER NOTES:
- Highlight your cross-functional impact. Mention how you tested this with users and iterated on the terminology based on manager pushback.
-->

---
layout: default
---

# Execution: Delightful Friction

**Observation:** Workers rushed through the end-of-shift flow, meaning they ignored errors until later.

**Solution:** The "High-Score" Summary.
- Inspired by video games (ticking earnings, haptic feedback).
- Created a "speed bump" that increased dwell time.
- Encouraged a final data audit when the memory was freshest.

*[PLACEHOLDER: Insert GIF/Video of the haptic ticking and high-score UI]*

<!--
SPEAKER NOTES:
- "I realized we actually needed to slow the user down. Delight wasn't just decorative here; it was a functional requirement to improve data accuracy."
-->

---
layout: center
---

# The Impact

One month post-launch results (Exceeded targets):

- **58%** Reduction in flagged timecards *(Target was 30%)*
- **1.5** admin hours/week reclaimed on average per manager
- **23** voluntary corrections/week per worker on average

<!--
SPEAKER NOTES:
- Tie it back to the business numbers. Be proud of the metrics.
-->

---
layout: default
---

# Key Learnings & Retrospective

- **Solving the cause, not the symptom:** Questioning the brief unlocked the real ROI.
- **Cross-functional Collaboration:** Getting engineering buy-in for Live Activities was tough but necessary for the "real life" use case.
- **What I would do differently:** *[PLACEHOLDER: Add a reflection here. e.g., "I would have brought legal in earlier during discovery..."]*

<!--
SPEAKER NOTES:
- Self-awareness is a key senior trait.
- Always have a "what I'd do differently" answer ready.
-->

---
layout: center
---

# Side Project 01
## Canada's 2025 Election Data Visualization

**Role:** Data Designer  
**Featured in:** The Guardian *(June 2025)*  

<div class="mt-8 text-left text-sm max-w-3xl">
  <p><strong>The Hypothesis:</strong> The 2025 election was defined by a shift away from minor third parties.</p>
</div>

<!--
SPEAKER NOTES:
- Side projects show your passion and breadth.
- "I want to briefly touch on a passion project that was recently picked up by the Guardian..."
-->

---
layout: image-right
image: /assets/side-projects/guardian-data-viz-chart.png
---

# The Chart & Workflow

- **The Visualization:** A ternary plot tracking the vote share of 343 districts.
- **The Finding:** Support for third parties fell by 19 points; 92% of ridings affected.
- **AI-Augmented Toolkit:** 
  - Used Cursor/LLMs to write Python data normalization scripts.
  - Exported Plotly SVGs to Figma for final typographic hierarchy and aesthetic polish.

<!--
SPEAKER NOTES:
- Emphasize how you lean into new tools (AI/Cursor) to expand your capabilities.
- "This project proves my ability to formulate a data hypothesis and translate raw CSVs into an intuitive, high-impact story."
-->

---
layout: center
---

# Thank You

**Nick Abasolo**  
Product Designer

*[PLACEHOLDER: Contact Info / Q&A]*

<!--
SPEAKER NOTES:
- Open the floor to questions.
-->
