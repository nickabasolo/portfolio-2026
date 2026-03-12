# Labour cost: designing for a metric that runs a restaurant

**Role:** Senior Product Designer
**Company:** Workstream
**Timeline:** TK
**Status:** Planning view shipped · Mobile reactive view in beta

---

> 📸 **ARTIFACT — Hero image**
> A clean full-width shot of the final desktop planning view showing the bullet chart. If you can show the metric toggle with all three options visible, include it. This is a data visualisation case study — the hero should communicate that immediately.

---

## The invisible metric

Labour cost is the most controllable variable in a restaurant's finances. Owners and general managers watch it obsessively — but most of them were doing it with a number scrawled on a whiteboard, a rule of thumb from the owner, or nothing at all.

The data to do better already existed in Workstream: scheduled hours, clocked time, wage rates, projected revenue. The problem was that none of it was surfaced in a way a manager could actually use.

There was also a significant gap in how different managers thought about the metric. Owners worked in raw dollars. Experienced GMs worked in SPLH — sales per labour hour, the industry-standard ratio of revenue to labour spend. Designing one tool that served both without patronising either was the core challenge.

> 📸 **ARTIFACT — Context image**
> A photo from a customer visit or contextual research session — a manager on their phone, a busy kitchen mid-service. Sets the scene better than copy.

---

## Looking for a way in

The brief was to visualise labour cost data on the desktop scheduling view. I started where most designers start: bar charts for spend by day, line graphs for trends over time, pie charts for labour as a proportion of costs.

I brought early explorations to design critique and shared them informally with colleagues. The feedback was polite but the signal was weak — nobody could confidently say what the charts were communicating.

**A benefit of building for restaurants: there's an immediate audience one floor down.**

Before setting up formal research, I walked downstairs to the coffee shop in our office building and showed three chart types to the baristas on shift. Simple question: *tell me what you think I'm trying to communicate.* The bar and line charts produced hesitation and hedged answers. Nobody was exactly wrong — they just weren't sure.

That same week, logging my lunch in a macronutrient tracking app, I noticed the chart it used to show my protein target: a horizontal bar with a goal marker, a current value, and a clear visual gap between them. Target. Actual. Delta. The same mental model a restaurant manager already uses for their job.

I brought a bullet chart version back to critique. It got traction with the design team and my tech lead. My PM was skeptical — an unconventional chart type on a business-critical dashboard felt like a risk he wasn't ready to take on informal signal alone.

So I ran the research properly.

---

## The experiment

I recruited 6 general managers from our most engaged customers and ran a structured comprehension test. Each participant saw all three chart types in randomised order. For each one, a single question: *what do you think I'm communicating with this chart?*

The bar and line charts produced inconsistent answers. Participants could extract fragments — "this bar is taller than that one" — but struggled to connect what they were seeing to a decision they'd actually make.

The bullet chart was different. Participants across the range of sophistication levels were able to articulate not just what the chart showed, but what they'd do about it.

That data brought my PM on board.

> 📸 **ARTIFACT — Three charts side by side**
> The bar chart, line graph, and bullet chart together. Even rough Figma explorations. A caption with the comprehension result for each (e.g. "4/6 participants could not explain the intended meaning") makes it concrete without needing a formal report.

> 💡 **ARTIFACT — Research artifact**
> Your session guide or a one-page summary of the comprehension test. If you have a direct quote from a participant who immediately understood the bullet chart, pull it as a blockquote.

---

## The insight

The bullet chart worked because it matched the mental model managers already had — not because it was a better chart in the abstract. They already thought in terms of target, actual, and gap. The bar and line charts asked them to construct that model from data. The bullet chart just showed it to them.

With the chart type settled, I addressed the sophistication gap with a simple metric toggle: labour hours, labour dollars, and SPLH. The choice of metric communicates intent and filters the experience to the right level of complexity. There was some internal pushback on including SPLH given how technical it is — but it's the metric experienced operators actually use, and removing it would have meant designing below the ceiling our best customers needed.

> 📸 **ARTIFACT — Metric toggle UI**
> Close-up of the toggle showing all three options. Annotate the SPLH option — note that it's industry standard and why you included it despite internal pushback. A design decision worth making visible.

> 📸 **ARTIFACT — Full desktop planning view**
> The complete interface in context, ideally shown alongside the schedule it relates to. Communicates that this is a planning tool, not a reporting dashboard.

---

## What shipped

The desktop planning view launched to our active customer base. Managers could see their labour cost benchmarked against their target — across whichever metric they'd chosen — contextualised within the weekly schedule they were building.

It was designed for a deliberate, forward-looking mode: a GM sitting down on Sunday to plan next week's staffing, not someone reacting in the moment.

> 📊 **ARTIFACT — Usage or retention data**
> Pre/post data on manager engagement with the labour cost view, or customer quotes about how it changed their scheduling process. Even a quote from a GM about the bullet chart would work here.

*[Placeholder — add engagement metrics or customer quotes post-launch.]*

---

## The harder problem still ahead

Once the planning view was live, a gap became clear. The tool told managers their labour cost was trending wrong. It didn't tell them what to do about it — and by the time they were back at their desk to check the dashboard, the moment to act had often passed.

A manager mid-service doesn't have time to open a laptop. They need a nudge on their phone that tells them specifically what to do, right now, given everything the system already knows.

My vision for the mobile reactive view wasn't another chart. It was a recommendation engine built on top of an existing lightweight manager dashboard — showing who was clocked in, who was on break, when shifts were ending — enriched with live labour cost and revenue data and translated into direct actions:

*"Revenue is tracking high — consider calling in one more cashier within the next two hours."*

*"Sales are below projection — NAME is approaching overtime. Letting them go early saves $40 and keeps you compliant."*

Contextual, specific, and compliance-aware. Not a number to interpret — a decision, already made.

This view is in beta. The planning view solved insight. The mobile view is where action lives — and that's the harder, more important problem.

> 📸 **ARTIFACT — Mobile reactive view mockup**
> A rough wireframe or low-fidelity mockup of the recommendation-first mobile view. Show the contrast with the desktop view: numbers and chart on one side, no chart and a direct recommendation on the other. The difference in approach is the point.

---

## What I learned

**Comprehension is not the same as familiarity.**
Bar charts and line graphs are everywhere. That familiarity doesn't mean people can read them in every context. The bullet chart was less familiar but more immediately legible because it matched how managers already thought about their job. Start with the mental model, not the chart type that looks most professional.

**Cross-domain borrowing is a research method.**
The insight didn't come from a design sprint or a competitive audit. It came from noticing a solution in a completely different context and asking whether the underlying logic transferred. Staying curious outside your domain is part of the work.

**Internal skepticism is a quality filter.**
My PM's reluctance to ship an unconventional chart type without evidence forced a more rigorous research process than I would have run on my own. The comprehension study made the decision defensible and the outcome cleaner. Pushback from a thoughtful stakeholder often produces better work.

**Shipping insight revealed the harder problem.**
The planning view was a meaningful improvement. But watching managers use it made clear that the real challenge wasn't visualisation — it was closing the loop between knowing something is wrong and knowing what to do about it, in the moment, on a phone, mid-service. I'd start there next time.
