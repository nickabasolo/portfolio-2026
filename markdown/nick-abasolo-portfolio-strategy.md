**Nick Abasolo**

Portfolio Strategy Document

*Complete project inventory, case study briefs, and surface-specific
framing guide*

**01. Positioning & Headline**

Your current headline is good but undersells the through-line. Here is
what your three years at Workstream actually demonstrate:

+-----------------------------------------------------------------------+
| **Recommended headline**                                              |
|                                                                       |
| I build products for the messy middle of work --- the operational     |
| complexity that sits between a manager's decisions and the people     |
| carrying them out.                                                    |
+-----------------------------------------------------------------------+

This works because it is specific without being narrow. Restaurant
software, logistics, healthcare, fintech --- all have this layer. Your
headline now signals transferability without abandoning the depth that
makes your work credible.

*Alternative if you want to lean harder into the system-design angle:*

+-----------------------------------------------------------------------+
| **Alternative headline**                                              |
|                                                                       |
| I design the layer between business logic and human behaviour ---     |
| compliance systems, operational workflows, and the everyday           |
| experiences of the people inside them.                                |
+-----------------------------------------------------------------------+

Your sub-headline (currently: "I design intuitive experiences for people
navigating operational workflows and regulatory complexity") is solid.
Keep it or tighten to: "Senior Product Designer specialising in
operational software for the hourly workforce."

**02. The Meta-Narrative (Not a Case Study)**

This is the story that connects everything. It lives on your About page
and in your verbal intro on calls --- not as a written case study. Use
it to contextualise your case studies, not replace them.

+-----------------------------------------------------------------------+
| **The arc in one paragraph**                                          |
|                                                                       |
| Three years ago Workstream was a hiring and onboarding product. I was |
| handed a blank canvas and a vague mandate: build a mobile experience  |
| for hourly workers. It took a year of honest dead ends --- onboarding |
| docs nobody re-opened, a paycheck viewer used twice a month ---       |
| before I found the right anchor. Time and scheduling was stickier     |
| because it was daily for workers and mission-critical for the         |
| business: an accurate timesheet is the foundation of an accurate      |
| payroll, and payroll was the company's growth motion. Once I          |
| understood why it worked, I went deep. What started as an             |
| off-the-shelf calendar and a basic clock-in shipped in four weeks     |
| became a compliance engine covering five US states, a shared-device   |
| tablet experience, a labour cost visualisation tool, and eventually   |
| the case study you're reading now.                                    |
+-----------------------------------------------------------------------+

This narrative does several things at once: it signals product judgment
(finding the right anchor use case), strategic awareness (connecting the
product to the business motion), and persistence without making the dead
ends sound like failures. One detail worth weaving in: you also
partnered with UXR early on to formally define the worker as a third
persona --- distinct from the owners and GMs who were Workstream's
existing focus. This is worth a sentence in the About meta-narrative
because it reframes your contribution from "I built features for
workers" to "I established that workers deserved a distinct design
strategy in the first place."

**03. Raw Project Inventory**

Everything you built, annotated with narrative potential. Use this as
your source of truth when writing case studies or preparing for
interviews.

**3.1 Time and Scheduling --- 0→1 (Year 1)**

  --------------------- -------------------------------------------------
  What shipped          Off-the-shelf calendar grid, basic weekly
                        schedule view, simple clock-in/out with break
                        logging, timesheet table feeding payroll

  Timeline              4 weeks from discovery to ship

  Why it mattered       Daily habit for workers, critical operational
                        need for restaurants, direct input to payroll
                        which was the company's sales growth motion

  Narrative potential   Medium --- the speed and constraint are
                        interesting, but the design itself was largely
                        conventional. Best used as the origin story
                        inside a broader platform narrative, not a
                        standalone case study.

  Best surface          Verbal context on calls and in presentations. One
                        paragraph on About page.
  --------------------- -------------------------------------------------

**3.2 Compliance Rules Engine**

  --------------------- -------------------------------------------------
  What shipped          Configurable break rules engine covering 5 US
                        states. Variables included break length,
                        start/end windows, roles, and shift duration.
                        Manager-facing config UI and worker-facing break
                        experience.

  Research process      Mapped state labor laws with data team and CS.
                        Identified top 5 customer states. Built admin
                        config for unsupported states.

  The hard problem      Making a multi-variable compliance system legible
                        to a non-technical manager, then making the
                        output of that system simple enough for a
                        low-literacy worker in a loud kitchen.

  Narrative potential   High --- unglamorous, high-stakes, technically
                        complex. The tension between regulatory
                        complexity and human simplicity is distinctive
                        and transferable.

  Missing piece         Do you have a strong before/after or a specific
                        moment where the design got it wrong first? That
                        would anchor the story.

  Best surface          Full case study (Case Study 2). Also strong
                        verbal material for a hiring manager who works on
                        regulated industries.
  --------------------- -------------------------------------------------

**3.3 Labour Cost Analysis**

  --------------------- -------------------------------------------------
  What shipped          Desktop planning view with bullet chart
                        visualisation. Metric benchmark toggle (dollar
                        vs. percentage) to serve both unsophisticated and
                        sophisticated users.

  What is in beta       Mobile reactive view for day-of adjustments as
                        projected revenue diverges from actuals.

  The key insight       Conventional charts (bar, line, pie) failed
                        comprehension testing --- users could not explain
                        back what they meant. Bullet chart borrowed from
                        a fitness/nutrition app solved it immediately.
                        Cross-domain solution to a domain-specific
                        problem.

  The sophistication    Owners think in dollars (don't spend more than
  gap                   \$10k). GMs think in percentages (keep labour
                        under 12% of projected revenue). One toggle, two
                        mental models.

  Honest gap            The mobile reactive view never shipped. The
                        planning view solves insight but not action. This
                        is worth naming in the case study as a learning.

  Narrative potential   High --- your strongest signal of data-informed
                        design thinking. Cross-domain borrowing,
                        comprehension testing, designing for a
                        business-critical metric. Most different from the
                        Time Clock study.

  Best surface          Full case study (Case Study 3).
  --------------------- -------------------------------------------------

**3.4 Time Clock --- Worker Autonomy (the rewrite)**

  --------------------- -------------------------------------------------
  What shipped          Shift agenda on clock-in, push notifications
                        mid-shift, live activities, worker edit request
                        flow (framed as suggestions), shift summary with
                        ticking earnings and haptic feedback, timesheet
                        status chips

  The core narrative    Reframing the problem from manager dashboard to
                        worker experience. Preventing errors at source
                        rather than cleaning them up after. Edit vs.
                        suggestion as a language/trust solution.

  Status                Case study written and live on portfolio. Rewrite
                        document produced.

  Best surface          Lead case study on portfolio and in all interview
                        contexts.
  --------------------- -------------------------------------------------

**3.5 Shared Device / Tablet Companion App**

  --------------------- -------------------------------------------------
  What shipped          Tablet clock-in app with PIN and selfie auth.
                        Shift agenda displayed in large type on clock-in.
                        Tablet home screen showing workers who needed to
                        act (break, clock-out). QR code to download
                        mobile app.

  What was descoped     Anonymous browser session with no PII --- just
                        notifications and agenda --- as a bridge before
                        app download. Would have been a more elegant
                        solution to the shared-device notification gap.

  The design problem    Personal device: authenticated, persistent,
                        notifiable. Shared device: anonymous, stateless,
                        no push notifications. Had to redesign what
                        identity and context mean when you don't know who
                        is holding the device.

  Narrative potential   Medium --- interesting design problem but thin
                        execution story because the most elegant solution
                        was descoped. Better as a supporting section
                        inside a platform overview or presentation.

  Best surface          Presentation round: a slide or two showing the
                        personal vs. shared device problem and the
                        solution. Demonstrates systems thinking and
                        constraint-driven design.
  --------------------- -------------------------------------------------

**3.6 Performance / Notes / Writeups (Beta)**

  --------------------- -------------------------------------------------
  What shipped          Partial: general logbook (too broad, low
                        adoption). Writeup forms tied to employee
                        profiles (better traction, still in beta).

  The original problem  Restaurants run on paper. Physical logbooks for
                        GM-to-GM knowledge transfer. Paper trails for HR
                        events. Multi-location owners with no visibility
                        across sites.

  Your opinion          General logbook was too open-ended. Writeups
                        worked better because they were tied to HR
                        workflows the platform already owned. The right
                        path is structured forms tied to employee
                        profiles, not a freeform notes tool.

  Narrative potential   Medium --- useful as a vision/strategy piece
                        showing how you think about product direction
                        beyond execution. Not a full case study without
                        shipped outcomes.

  Best surface          A short "vision piece" on portfolio (later
                        priority). Verbal material in hiring manager and
                        panel interviews to show product thinking.
  --------------------- -------------------------------------------------

**3.7 Side Projects**

  --------------------- -------------------------------------------------
  Election data         Featured in The Guardian. Strongest signal of
  visualisation         range. Keep prominent on portfolio.

  Time Auction party    Shows playful, consumer-facing design thinking.
  game                  Demonstrates range from B2B operational to
                        real-time multiplayer.

  This Portfolio        Smart inclusion. Signals contemporary fluency
  (AI-assisted)         without being obnoxious.

  Role of side projects These are your range signal. They tell the story
                        your main case studies can't: that you can think
                        outside operational software.
  --------------------- -------------------------------------------------

**04. Recommended Portfolio Structure**

**Homepage / Hero**

Headline (new, from Section 1). Sub-headline (role + specialisation).
Photo. Two CTAs: Contact + Resume. Keep existing structure --- it works.

**Selected Works --- Recommended Order**

  ------------------ ----------------------------------------------------
  **Position**       **Case Study**

  1 (large, hero)    Time Clock: From Audit to Autonomy

  2                  Labour Cost Analysis: Designing for a
                     Business-Critical Metric

  3                  Compliance Rules Engine: Making State Law Legible
                     (title TBD)
  ------------------ ----------------------------------------------------

This ordering matters. Time Clock leads because it has the strongest
narrative. Labour Cost follows because it's the most different --- data
visualisation, business metrics, desktop, manager-facing. Compliance
third because it completes the picture of system depth. Together the
three cover: worker-facing mobile, manager-facing data, and system
configuration.

**Side Projects**

Keep the current three. Add the performance/writeup vision piece here
when ready, framed as "Unshipped: a vision piece."

**About Page**

Add the meta-narrative paragraph from Section 2. This is where the
three-year arc lives. Currently your about page likely just lists your
role --- this context transforms how a hiring manager reads your case
studies.

**05. Case Study Briefs**

**Case Study 1: Time Clock --- From Audit to Autonomy**

**STATUS**

Written. Rewrite document produced separately. Minor structural updates
recommended based on broader platform context now established.

**ONE CHANGE TO CONSIDER**

Add a single line early in the Challenge section that establishes you
built this product from scratch. Example: "This was a product I'd owned
from its first line of design --- which is partly why I had the
conviction to question the brief." This makes the strategic reframe more
impressive, not less.

**EVERYTHING ELSE**

See the full rewrite document. The structure, beats, and artifact
placements are all there.

**Case Study 2: Labour Cost Analysis**

**WORKING TITLE**

Labour Cost: Designing for a Metric That Runs a Restaurant

**THE NARRATIVE IN ONE SENTENCE**

I was asked to visualise a business-critical metric for restaurant
managers --- discovered that conventional charts failed comprehension
testing entirely --- and solved it by borrowing a visualisation pattern
from a fitness app.

**RECOMMENDED STRUCTURE**

  ------------------ ----------------------------------------------------
  **Section**        **Content**

  Challenge          Restaurant managers make staffing decisions on gut
                     feel or rudimentary rules of thumb. The metric that
                     should guide them --- labour cost as a percentage of
                     revenue --- existed in the data but was invisible in
                     the product. Add: wide sophistication gap between
                     owners (dollars) and GMs (percentages).

  Strategy           Two distinct modes: planning (desktop, deliberate,
                     forward-looking) and reactive (mobile,
                     in-the-moment, day-of divergence). These require
                     different designs. Scope: focus the planning view
                     first.

  The comprehension  This is your centrepiece section. Tested bar charts,
  problem            line graphs, pie charts. All failed --- users could
                     not explain back what the chart meant when asked.
                     Show the failed charts. This is where the bullet
                     chart insight lands.

  The cross-domain   Bullet chart borrowed from a macronutrient tracking
  solution           app. Explain why it works: target, current, gap ---
                     the same mental model a manager already uses for
                     their job. Show before/after comprehension testing
                     result.

  The sophistication One metric choice that filters the whole experience.
  toggle             Simple but doing a lot of work. Annotate the
                     decision.

  What shipped vs.   Desktop planning view shipped. Mobile reactive view
  what's next        in beta. Name the gap honestly: insight without
                     action. Share your vision for the reactive view ---
                     this shows product thinking beyond execution.

  Impact             Any usage or retention data from the planning view.
                     Customer quotes if available.

  Learnings          Comprehension is not the same as familiarity.
                     Cross-domain borrowing. Naming the unfinished
                     problem.
  ------------------ ----------------------------------------------------

**KEY ARTIFACTS NEEDED**

-   Screenshots of the failed chart explorations (bar, line, pie) ---
    even rough wireframes

-   The bullet chart final design with annotation explaining the mental
    model

-   Before/after or a quote from a comprehension test showing the moment
    it clicked

-   The metric toggle UI with annotation

-   A mockup or sketch of the mobile reactive view vision (even if
    unshipped)

**Case Study 3: Compliance Rules Engine**

**WORKING TITLE**

Break Rules: Designing a Compliance System for People Who Aren't Lawyers

**THE NARRATIVE IN ONE SENTENCE**

I had to translate the labor laws of five US states into a configurable
system a non-technical manager could set up --- and then make the output
of that system simple enough for a worker to follow in a loud kitchen
without thinking.

**WHY THIS CASE STUDY IS WORTH WRITING**

This is your most technically complex and least glamorous project ---
which makes it distinctive. Most designers avoid writing about
compliance work. The fact that you went deep on it, did the research,
and had to solve the legibility problem at both ends (admin config and
worker experience) shows a kind of design maturity that is hard to fake.

**RECOMMENDED STRUCTURE**

  ------------------ ----------------------------------------------------
  **Section**        **Content**

  Challenge          Labor law violations are expensive. Missed breaks
                     are the #1 source of fines. The rules are different
                     in every state. Most managers don't know what the
                     rules are. Most workers just want to know what to
                     do.

  Research           How you mapped state law. Working with the data team
                     and CS. How you chose the 5 states. What made this
                     hard: the rules aren't just different --- they are
                     structured differently (some by role, some by shift
                     length, some by time of day).

  The two-sided      Manager side: a rules config UI that is flexible
  design problem     enough for lawyers but legible enough for a GM.
                     Worker side: break guidance that requires zero
                     interpretation. These are the same underlying data,
                     rendered completely differently for each user.

  Manager config UI  How you made a multi-variable rules engine
                     navigable. What you tried first, what failed, what
                     you settled on.

  Worker experience  How the rules engine outputs into the Time Clock
                     experience. The notification layer. The agenda view.
                     This connects directly to the Time Clock case study
                     --- briefly acknowledge the link rather than
                     repeating it.

  Impact             Reduction in compliance violations if you have data.
                     Customer quotes about the configuration experience.

  Learnings          Designing for two radically different users
                     consuming the same data. When to abstract complexity
                     vs. expose it. The difference between a system that
                     is technically correct and one that is humanly
                     usable.
  ------------------ ----------------------------------------------------

**KEY ARTIFACTS NEEDED**

-   State law research artifact --- even a cleaned-up mapping document
    or matrix

-   The rules config UI --- ideally showing a complex state like
    California

-   Explorations of the config UI --- what you tried before the final
    version

-   The worker-facing break guidance --- how the rules output into a
    simple human instruction

-   A before/after of a worker's break experience with and without the
    rules engine

**06. Surface-Specific Framing Guide**

The same work, framed differently for each context. This is not about
saying different things --- it is about knowing which details to lead
with and which to hold back.

**Portfolio Website**

**GOAL**

Get a hiring manager to request a screen. You have 5-8 minutes of
attention.

**WHAT TO SHOW**

Three complete case studies. Side projects for range. Meta-narrative on
About. No placeholders.

**TONE**

Confident, specific, results-oriented. Lead every case study with the
outcome, not the process.

**WHAT TO HOLD BACK**

Deep process detail, rejected explorations, lengthy reflections. Save
those for the presentation round.

**Recruiter Screen**

**GOAL**

Get moved to the hiring manager. Recruiters are evaluating: seniority
signals, communication clarity, role fit, red flags.

**YOUR TALKING POINTS**

-   Three years building a mobile platform for hourly workers from 0 to
    1

-   Owned the full stack: worker-facing mobile, manager-facing desktop,
    compliance systems, data visualisation

-   Led discovery, not just execution --- negotiated to expand scope
    when research revealed the wrong brief

-   Strong business outcomes: 58% reduction in flagged timecards, 1.5
    hours admin time reclaimed per manager

**THE META-NARRATIVE IN 30 SECONDS**

\"I spent three years building the operational layer of an HR platform
for restaurants --- everything from the time clock a dishwasher uses at
6am to the compliance engine that keeps their employer out of a labour
lawsuit. The interesting part was finding out that most of the design
problems weren\'t really UI problems --- they were about trust,
legibility, and understanding why a busy person would or wouldn\'t
change their behaviour.\"

**WHAT NOT TO DO**

Do not walk through a case study in detail. Name the projects, tease the
narrative, and let the portfolio do the work. The recruiter's job is to
qualify you, not to evaluate your craft.

**Hiring Manager Screen**

**GOAL**

Demonstrate strategic thinking and design judgment. Get to the panel.
Hiring managers are evaluating: can this person solve problems I care
about, do they push back intelligently, do they understand the business.

**LEAD WITH**

The Time Clock case study. Walk the narrative: wrong brief → research →
reframe → ROI argument → solution. Spend the most time on the strategy
section, not the execution.

**HAVE READY BUT DON'T LEAD WITH**

Labour cost analysis (shows data thinking), compliance engine (shows
system depth), the platform arc (shows ownership and seniority).

**QUESTIONS TO PREPARE FOR**

-   \"Tell me about a time you pushed back on a brief.\" --- Time Clock
    strategy section is your answer.

-   \"How do you design for non-technical users?\" --- Compliance rules
    engine + worker time clock.

-   \"How do you think about design and business outcomes?\" --- Labour
    cost analysis + payroll motion context.

-   \"What's the hardest design problem you've worked on?\" --- Your
    choice, but compliance or labour cost are stronger than Time Clock
    for this question.

```{=html}
<!-- -->
```
-   \"Tell me about a time you influenced product strategy beyond your
    immediate scope.\" --- This is your strongest seniority signal and
    currently the least visible in your portfolio. Answer: you
    identified that workers were an underserved and underdefined persona
    at Workstream, partnered with UXR to define them formally, and built
    the strategic case for a worker-centred product surface. That
    framing eventually propagated across the org as other teams formed
    around the worker experience. This is a company-level contribution,
    not a feature contribution.

**THE QUESTION TO ASK THEM**

\"What's the operational or compliance complexity in your product that's
hardest to make legible to end users?\" --- This signals that you think
at the system level and positions your experience as directly relevant.

**Panel / Presentation Round**

**GOAL**

Show depth, process, and collaboration. The panel has already decided
you might be right --- they're now evaluating fit, taste, and how you
think out loud.

**RECOMMENDED DECK STRUCTURE**

  -------------- ---------------------------------------------------------
  **Slide(s)**   **Content**

  1              Title + who you are. One sentence positioning.

  2              The platform arc. 3 years, one diagram showing the
                 product stack you built.

  3-4            Time Clock --- full case study with process. Include
                 rejected directions, research artifacts, the edit vs.
                 suggestion moment.

  5-6            Labour cost --- focus on the comprehension testing and
                 the cross-domain insight. Show the failed charts. Show
                 the bullet chart. Show the unshipped mobile vision.

  7-8            Compliance rules engine. The two-sided design problem.
                 Show the config UI and the worker experience side by
                 side.

  9              The shared-device problem --- one slide. The descoped
                 anonymous session idea. Shows constraint-driven thinking.

  10             What's next / your point of view on the product space.
                 Optional but memorable.
  -------------- ---------------------------------------------------------

**TONE FOR PRESENTATION**

Talk about what was hard and what you got wrong first. Panels are
evaluating judgment and honesty, not polish. The most memorable
presentations include at least one moment of genuine self-critique.

**07. Vision Piece (Later Priority)**

When you're ready, a short vision piece on your portfolio would be
distinctive. Most designers don't include them. It shows you have
opinions about where the product space is going, not just what you've
already built.

**POSSIBLE ANGLE**

\"The restaurant manager has two variable costs and almost no decision
support. Here's what I'd build if I were starting from scratch today.\"
Frame it around the reactive labour cost problem you never got to ship,
and connect it to the AI tools you've already built. This bridges your
Workstream depth with your AI interest without feeling forced.

**FORMAT**

Short. 400-600 words. One or two mockups or sketches. Framed explicitly
as a personal design opinion, not a case study. A label like "Thinking
out loud" or "Unshipped" works well.

**WHEN TO ADD IT**

After the three core case studies are complete. It's the difference
between a strong portfolio and a memorable one.

**08. Remaining Gaps**

  ---------------------- ------------------------------------------------
  **Gap**                **How to address it**

  No complete case       Priority one. Labour cost and compliance engine
  studies besides Time   first.
  Clock                  

  Cross-functional       ⚠ PRIORITY NOTE: This is the most likely reason
  tension not visible    for the hiring manager dropoff. None of the
                         three case studies currently show how you
                         navigate disagreement with a PM, push back on
                         engineering constraints, or operate inside a
                         messy multi-stakeholder environment. This is not
                         a missing case study --- it is a missing
                         dimension inside the ones you are already
                         writing. As you draft Labour Cost and
                         Compliance, actively look for a moment of
                         organisational friction: a scope disagreement, a
                         descope you fought against, a stakeholder who
                         resisted your direction. Even one well-told
                         moment of this kind closes the gap
                         significantly. Note: the worker persona work
                         (partnering with UXR to define workers as a
                         formal persona) partially addresses this gap ---
                         it shows you operating at a strategic level
                         across functions. Make sure this is visible in
                         at least one case study and on the About page.

  Data-informed          The comprehension testing in labour cost
  iteration not shown    partially fills this. Ask yourself: did
                         analytics ever surface surprising behaviour that
                         changed a design decision?

  AI work not in         The grocery price tool and scheduling compliance
  portfolio              work are real. Consider a brief side project
                         entry once core case studies are done.

  About page likely thin Add the meta-narrative. This is a 30-minute fix
                         with high ROI.
  ---------------------- ------------------------------------------------

*End of document*
