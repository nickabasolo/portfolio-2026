# Break rules: designing a compliance system for people who aren't lawyers

**Role:** Senior Product Designer
**Company:** Workstream
**Timeline:** TK

---

> 📸 **ARTIFACT — Hero image**
> A side-by-side of the manager-facing rules config UI and the worker-facing break notification. The visual contrast between the two — one complex and configurable, one simple and direct — is the thesis of the whole case study. Make it the first thing a reader sees.

---

## The stakes

Missing a meal break in California can cost an employer one hour of the employee's regular pay — per violation. Multiply that across 30 workers over a month and it becomes a significant liability. The rules vary by state, sometimes by city, and they're specific enough to surprise even experienced operators: not just how long a break must be, but when within a shift it must start.

Most restaurant managers weren't thinking about any of this. They were running a kitchen.

Workstream's early break logging was simple: workers logged when they took a break, managers reviewed the timesheet. But as we expanded into payroll — where an inaccurate timesheet has direct financial and legal consequences — that simplicity became a liability. Customers were getting flagged for violations they didn't know they were committing. The system recorded what happened. It had no opinion on whether what happened was legal.

We needed a compliance layer. The question was how to build one that a non-technical manager could actually configure — and that a worker in a loud kitchen could actually follow.

> 📸 **ARTIFACT — Legacy screenshot**
> The early break logging experience — simple, unguided, no compliance logic. A redacted timesheet showing flagged violations works well here. Let the problem speak before you describe the solution.

---

## Understanding the rules

Before designing anything, we needed to know what we were designing for. I worked with our data team to identify which states our customers actually operated in, cross-referenced that with state labor law, then verified our interpretation with legal and checked with CS for anything they'd been hearing in the field.

Two things emerged from the research. First, labor law is more specific than most people expect. It's not just "workers get a 30-minute break." It's: workers must receive a 30-minute unpaid meal break that begins no later than five hours into the shift, with specific exceptions for shifts under six hours, and a second break for shifts over ten. Every variable in that sentence is a design parameter.

Second, five states covered the majority of our active customer base. We built automatic compliance presets for those five, and a manual rule builder for everyone else.

> 💡 **ARTIFACT — State law research matrix**
> A cleaned-up version of the internal mapping document — states as rows, break variables as columns. Showing the variability visually justifies the design investment without requiring explanation.

---

## For the manager

### Making rules legible

The first version of the rules config UI used a conventional logic builder — the kind of interface a developer might design for a developer. Conditions, operators, values. Technically complete and immediately confusing to the people who needed to use it.

The insight was that managers could describe their rules perfectly in conversation. They just couldn't translate them into conditional logic. The interface needed to meet them in their own language.

I redesigned the config UI around natural sentence structure. Instead of:

*IF shift_duration > 5 THEN break_required = true AND break_duration >= 30*

The interface read closer to:

*"If a worker's shift is longer than [5 hours], they must take a [30-minute] break, starting within [2 hours] of their shift start."*

The variables were still fully configurable — the bracketed values were editable fields — but the surrounding sentence gave them meaning. Managers could read it back and verify it matched what they intended.

> 📸 **ARTIFACT — Rules builder evolution**
> The progression from the logic-style builder to the natural language version. Early wireframes or rejected explorations alongside the final. The contrast makes the decision legible without explanation.

> 📸 **ARTIFACT — Final rules config UI**
> The polished natural language builder for a complex state like California. Annotate the key decision: why sentences rather than operators, and how the editable fields work within the sentence structure.

---

### The AI decision

Natural language configuration was an obvious candidate for AI — if a manager could just describe what they wanted and have the system interpret it, the config problem largely disappears. We explored this direction and moved away from it.

Two reasons. First, compliance is a high-stakes domain. An AI misinterpreting a rule about break windows doesn't produce a slightly wrong recommendation — it produces a labor violation. The cost of an error is concrete and legal. Second, the structured sentence approach solved the legibility problem without introducing unpredictability into a compliance-critical workflow.

The constraints were the point. Managers could see exactly what the system would do — which was what they needed to trust it.

---

### Getting presets shipped

For the five states we supported automatically, I wanted to ship with pre-configured settings — correct compliance out of the box, no configuration required for most customers. My PM was wary. Pre-configured compliance settings felt like a liability claim: if we set the defaults and they turned out to be wrong, were we responsible?

I reframed the proposal: these weren't defaults, they were presets — the same way software ships with a recommended settings profile that users can modify. We weren't guaranteeing compliance. We were giving customers a correct starting point with full control to adjust anything.

That framing resolved the concern. The presets shipped.

> 📸 **ARTIFACT — State preset UI**
> The settings screen showing a preset applied, with edit controls clearly visible. The key detail: the values must look editable, reinforcing the "starting point, not a locked setting" framing.

---

## For the worker

Workers never saw the rules engine. They saw the output of it.

The challenge was communicating not just that a worker needed to take a break, but when — given that labor law often mandates a window rather than a fixed time. A worker doesn't need to know that California law requires a meal break to begin within five hours of shift start. They need to know: *your break needs to start in the next 45 minutes.*

This sounds simple. In practice it required a careful design decision: the notification had to communicate urgency without causing anxiety, and had to be specific enough to be actionable without being prescriptive about the exact minute. "Take your break in the next hour" is too vague. "Take your break at 2:00pm" ignores the window the law actually allows.

We landed on a progressive urgency model: a gentle reminder early in the break window, escalating to a more prominent notification as the window closed. The language shifted with the urgency — informational early, directive late.

> 📸 **ARTIFACT — Break notification sequence**
> Two or three states of the notification: early window (gentle, informational), mid-window (clear prompt), closing window (urgent, directive). Show how the language and visual weight shift. This is a small detail with a lot of craft in it — give it room.

---

## Where they meet

The manager config UI and the worker break notification have nothing visually in common. That's intentional.

Trying to make a single interface serve both users would have meant compromising both. The investment was in making the handoff between them invisible — so that what a manager configured in a sentence always appeared to a worker as a simple, timely instruction. Same underlying rule. Two completely different expressions.

> 📸 **ARTIFACT — The pairing**
> The rules config UI next to the worker-facing notification it produces. This is the visual thesis of the case study — it deserves a full-width treatment with a caption that names the design principle explicitly.

---

## What I learned

**The interface should speak the user's language, not the system's.**
Managers could describe their compliance rules in conversation. The first version asked them to translate that into logical operators. The natural language redesign removed the translation step. The system got more complex underneath; the experience got simpler on top.

**Constraints build trust in high-stakes domains.**
AI-assisted configuration would have been faster to interact with and harder to verify. In a compliance context where errors have legal consequences, being able to read a rule back and confirm it means exactly what you intended is more valuable than speed. A more constrained approach where the constraints themselves are the feature is a design decision, not a technical limitation.

**Designing for two radically different users on the same data requires radical separation.**
The manager and worker interfaces share nothing visually. That's not a failure of design coherence — it's the right outcome. The work was in the invisible handoff between them.

**Language resolves stakeholder concerns that interface changes cannot.**
"Preset, not default" was not a product change. It was a reframe that addressed a legitimate concern about liability without changing any underlying behaviour. In complex regulated domains, the words you use to describe a feature often matter as much as the feature itself.
