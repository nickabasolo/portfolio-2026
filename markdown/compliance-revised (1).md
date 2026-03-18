# Labour law, made legible: designing a compliance engine for restaurant operators

**Role:** Senior Product Designer
**Company:** Workstream
**Timeline:** TK

---

> 📸 **ARTIFACT — Hero image**
> A side-by-side of the manager-facing rules config UI and the worker-facing output it produces — a break notification, a scheduling warning, or both. The visual contrast between the two — one complex and configurable, one simple and direct — is the thesis of the whole case study. Make it the first thing a reader sees.

---

## The stakes

Labour law violations are expensive, common, and almost always unintentional. Missing a meal break in California costs an employer one hour of the employee's regular pay, per violation. Simply scheduling a minor on a school night in New York carries a civil penalty of up to $10,000 for a first offense. Accidentally letting a worker's hours tip into overtime alone requires the business to pay time-and-a-half or double time just to stay compliant.

Meanwhile, most restaurant managers wanted to focus on things that mattered to them: fostering a healthy team environment, or creating a pleasant guest experience. They were tired and afraid of dealing with legal compliance issues.



As Workstream expanded into the enterprise-level market, we found companies with larger headcounts that were subject to more stringent labour laws than smaller SMB shops; and with locations across the country, they had to stay compliant with a patchwork of municipal and state laws. Meanwhile, our system merely recorded what happened, with no opinion on whether what happened was legal.

We needed a compliance engine: a system that could encode the rules of multiple jurisdictions across breaks, overtime, and minor labour laws, surface them to managers in a way they could actually configure, and translate them into clear, timely guidance for workers — without either user needing to read a policy document.

> 📸 **ARTIFACT — Legacy screenshot**
> The early experience — simple logging, no compliance logic, flagged violations in the timesheet. Let the problem speak before you describe the solution.

---

## Understanding the rules

Before designing anything, we needed to know what we were designing for. I worked with our data team to identify which states our customers operated in, cross-referenced that with state labour law across all three domains, then verified our interpretation with legal and checked with CS for anything they'd heard from customers in the field.

The research surfaced how specific — and how varied — the rules actually were:

**Breaks** aren't just a duration requirement. They carry a window: California mandates a meal break that must begin within five hours of shift start, with exceptions for shifts under six hours and a second break for shifts over ten. Every variable is a design parameter.

**Overtime** rules vary by state in how daily and weekly thresholds interact, and which roles are exempt. The design challenge was less about edge cases and more about making threshold visibility clear during the scheduling process, before overtime was triggered.

**Minor labour laws** had the most interesting complexity. Whether a shift was legal for a minor depended on two variables simultaneously: whether it was a weekday, and whether that weekday was a state holiday. A Friday that's a state holiday doesn't carry the same restrictions as a regular Friday. The system had to reason about both to give the right answer.

Five states covered the majority of our active customer base. We built automatic compliance presets for those five, and a manual rule builder for everyone else.

> 💡 **ARTIFACT — State law research matrix**
> A cleaned-up version of the internal mapping document — states as rows, rule categories and variables as columns. Showing the variability visually across all three domains justifies the design investment without requiring explanation.

---

## For the manager

### Making rules legible

The compliance engine had to serve two very different manager interactions: configuring the rules in settings, and encountering them in context — a warning when scheduling a shift, a flag when reviewing a timesheet.

The configuration UI was the harder problem. The first version used a conventional logic builder — conditions, operators, values. Technically complete and immediately confusing to the people who needed to use it. Managers could describe their rules perfectly in conversation. They just couldn't translate them into conditional logic.

I redesigned the config UI around natural sentence structure. Instead of:

*IF shift_duration > 5 THEN break_required = true AND break_duration >= 30*

The interface read closer to:

*"If a worker's shift is longer than [5 hours], they must take a [30-minute] break, starting within [2 hours] of their shift start."*

The variables were still fully configurable — the bracketed values were editable fields — but the surrounding sentence gave them meaning. Managers could read it back and verify it matched what they intended. The same sentence structure applied consistently across breaks, overtime thresholds, and minor labour rules: different content, same legibility principle.

> 📸 **ARTIFACT — Rules builder evolution**
> The progression from the logic-style builder to the natural language version. Early wireframes or rejected explorations alongside the final. The contrast makes the decision legible without explanation.

> 📸 **ARTIFACT — Final rules config UI**
> The polished natural language builder showing rules across at least two domains — breaks and one other. Annotate the editable fields and the sentence structure. A complex state like California works well here.

---

### The AI decision

Natural language configuration was an obvious candidate for AI — if a manager could just describe what they wanted and have the system interpret it, the config problem largely disappears. We explored this direction and moved away from it.

Two reasons. First, compliance is a high-stakes domain. An AI misinterpreting a rule about break windows or overtime thresholds doesn't produce a slightly wrong recommendation — it produces a labour violation. The cost of an error is concrete and legal. Second, the structured sentence approach solved the legibility problem without introducing unpredictability into a compliance-critical workflow.

The constraints were the point. Managers could see exactly what the system would do — which was what they needed to trust it.

---

### Getting presets shipped

For the five states we supported automatically, I wanted to ship with pre-configured settings — correct compliance out of the box, no configuration required for most customers. My PM was wary. Pre-configured compliance settings felt like a liability claim: if we set the defaults and they turned out to be wrong, were we responsible?

I reframed the proposal: these weren't defaults, they were presets — the same way software ships with a recommended settings profile that users can modify. We weren't guaranteeing compliance. We were giving customers a correct starting point with full control to adjust anything.

That framing resolved the concern. The presets shipped.

> 📸 **ARTIFACT — State preset UI**
> The settings screen showing a preset applied across multiple rule types, with edit controls clearly visible. The key detail: values must look editable, reinforcing the "starting point, not a locked setting" framing.

---

## For the worker

Workers never saw the rules engine. They saw the output of it — and only what was relevant to them, when it was relevant.

Break guidance was the most time-sensitive output. The challenge was communicating not just that a worker needed to take a break, but when — given that labour law mandates a window rather than a fixed time. "Take your break at 2:00pm" ignores the window the law actually allows. "Take your break in the next hour" is too vague to create the right behaviour.

We landed on a progressive urgency model: a gentle reminder early in the break window, escalating to a more prominent notification as the window closed. The language shifted with the urgency — informational early, directive late.

For scheduling, the compliance output surfaced to managers rather than workers: a warning in the scheduler when a shift would trigger an overtime threshold, or when a minor was being scheduled on a school night during restricted hours. The engine checked both the day of the week and the state holiday calendar simultaneously — because a Friday that's a state holiday carries different rules than a regular Friday.

> 📸 **ARTIFACT — Output sequence**
> Two or three states of the break notification showing the urgency progression. Alongside it, a scheduling warning for either overtime or a minor labour law restriction — showing that the engine's output isn't just one thing, but surfaces contextually across the product.

---

## Where they meet

The manager config UI and the worker-facing outputs have nothing visually in common. That's intentional.

The investment was in making the handoff between them invisible — so that what a manager configured in a sentence always appeared to a worker or a scheduler as a simple, timely, contextual instruction. Same underlying rules. Completely different expressions depending on who needed them, when, and why.

> 📸 **ARTIFACT — The pairing**
> The rules config UI next to one of its outputs — a worker notification or a scheduling warning. Full-width, with a caption that names the design principle explicitly: same rule, two expressions.

---

## What I learned

**The interface should speak the user's language, not the system's.**
Managers could describe their compliance rules in conversation. The first version asked them to translate that into logical operators. The natural language redesign removed the translation step. The system got more complex underneath; the experience got simpler on top.

**Constraints build trust in high-stakes domains.**
AI-assisted configuration would have been faster to interact with and harder to verify. In a compliance context where errors have legal consequences, being able to read a rule back and confirm it means exactly what you intended is more valuable than speed. A more constrained approach — where the constraints themselves are the feature — is a design decision, not a technical limitation.

**The same data needs radically different expressions for different users.**
The manager config UI and the worker outputs share nothing visually. That's not a failure of coherence — it's the right outcome. The work was in the invisible handoff: making sure that what a manager set up in settings always surfaced to the right person, in the right form, at the right moment.

**Language resolves stakeholder concerns that interface changes cannot.**
"Preset, not default" was not a product change. It was a reframe that addressed a legitimate concern about liability without changing any underlying behaviour. In complex regulated domains, the words you use to describe a feature often matter as much as the feature itself.
