# Time Clock: From Audit to Autonomy

**Role:** Senior Product Designer
**Company:** Workstream
**Timeline:** 4 months
**Outcome:** 58% reduction in flagged timecards · 1.5 admin hours/week reclaimed per manager

---

> 📸 **ARTIFACT — Hero image**
> The angled mockup spread works well. Consider adding the shift summary "high score" screen — it's your most original idea and currently invisible at the top of the page.

---

## The ask

Every week, restaurant managers wade through 40+ flagged punches on the timesheet — missed breaks, forgotten clock-outs, disputed punches — each one requiring a manual investigation before payroll can close.

The stakes are real: the timesheet is the record of truth for their payroll, where the average restaurant typically pays out $4,500 to employees each week. Inaccurate timesheets mean inaccurate payroll cheques -- not including labor law violations and significant fines.

So a timesheet riddled with flagged errors and compliance warnings was typically understood as difficult but necessary. That's why when we first started this project, the ask was simply to improve the manager's review flow. My instinct was the same as everyone else's: bulk actions, clearer error labels, faster filtering.

> 📸 **ARTIFACT — Real product screenshot**
>

---

## What the research revealed

After interviewing 5 managers about their Sunday night routine, I noticed a pattern. Most of their time wasn't spent reviewing flags, but chasing down workers to find out what actually happened.

*Did you take this break? Did you forget to clock out? When did you actually leave?*

Sure, managers had their own problems with the dashboard; but most of their frustration actually stemmed from bad data at the source. Every error we solved upstream during the worker's shift was an error we saved the manager from dealing with. Even if we saved just one error per worker, that would save the manager of a typical restaurant 30 errors a week -- or over 100 for the larger franchise stores.

> 💡 **ARTIFACT — Research synthesis**
> Affinity map

---

## The real problem

I negotiated for additional discovery time by framing it as an ROI calculation, then spent time with 12 workers to understand their experience of the shift. By mapping out the shift journey, I found three likely points where an intervention could have high-impact on reducing errors:

| Moment    | What we learned                                                        | Design response                                          |
| --------- | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| Clock-in  | Workers often didn't know their break schedule for the day             | Surface the full shift agenda immediately on clock-in    |
| Mid-shift | Missed breaks are the #1 cause of labor fines                          | Lock screen notifications requiring zero app interaction |
| Clock-out | Workers knew about their errors but had no structured way to flag them | Let workers request their own corrections                |

---

## How we solved it

### Visibility at the right moment

Workers spend 95% of a shift away from their phone. Unlike desk workers, their attention is much further away from a screen and the digital experience, so the interface needed to integrate alongside their real-world work. **Notifications** handled the lock screen layer: timed reminders before breaks and before clock-out, requiring zero interaction.

For the 5% of time when they are engaging with the app, we surface an **agenda view**. This is especially important at the moment of clock-in, which gives them a view into what the day will look like. 

> 📸 **ARTIFACT — Side-by-side mockup**
> The lock screen notification alongside the in-app agenda view. Frame it as two layers of the same system. A before/after of the clock-in screen works well here too.

---

### Edit requests, not edits

The obvious solution — let workers edit their timecards directly — failed immediately before we even tested. When I approached managers asking to test this solution, they were entirely against the idea of giving employees any edit-level access to payroll data.

Even though the edit flow would require manager approval, this mental aversion from managers would be a barrier to adoption I tried various other ways to present this workflow, and what landed was reframing "edits" as "suggestions." 

Workers could flag their own errors; managers retained final approval. The UI updated to match — request states, pending indicators, approval flows. Even though the underlying flow stayed the same, the wording and the way we presented it reframed the trust dynamic.

> 📸 **ARTIFACT — Exploration spread**
> Two or three rejected directions (direct edit, comment thread) alongside the final suggestion flow of the polished request screen.

---

### Friction as a feature

Once we got the feature into beta, we saw a modest reduction in errors, but I didn't see high levels of engagement with the edit request feature. It seemed like the moment workers clocked out, they were gone: physically and mentally.

Inspired by video game end-screens, I designed the shift summary as a high-score moment rather than a confirmation dialog. Ticking earnings and haptic feedback were designed to create a deliberate pause before the worker pocketed their phone.

The goal wasn't delight for its own sake -- although it helped, given that this should also be a celebratory moment. But moreover, it was to make the worker perform a final data audit when the memory was freshest.

> 🎥 **ARTIFACT — Screen recording**
> A 5-10 second clip of the ticking earnings animation and haptic feedback. This is your strongest candidate for video — it doesn't read in a still. If you do one video in the case study, make it this one.

---

### Cleaning up the manager's view

With fewer errors coming in from upstream, the manager dashboard became a quieter place. The remaining polish: new status chips with short, clear micropy replaced the blunt "flagged" row highlights that made the whole table feel loud.

> 📸 **ARTIFACT — Before / after**
> A tight before/after of the flagged row treatment. Two columns, one caption each. Keep it small — this is a supporting beat.

---

## What changed

After rollout in late September, the average weekly review volume per location dropped from a steady baseline of ~37 to ~25, representing a 32% reduction in total flags. More significantly, the nature of that work shifted: by December, roughly half of remaining flags were being resolved through system-suggested edits rather than manual manager review. The result was a measurable transfer of cognitive load from operators to the system, while preserving human approval for every final decision.

Avg. weekly flags (pre)

~37

Avg. weekly flags (post)

~25

Reduction in review volume

32%

Flags resolved by system

~52%

> 📊 **ARTIFACT — Data visualisation**
> If you have pre/post timecard volume data, a simple chart adds credibility and visual variety. Otherwise the three stat callouts work — give each one a single caption line connecting it back to the specific design decision that drove it.

---

## What I learned

**Tracing the source of the problem.**
The biggest impact came from questioning the initial ask entirely. The manager dashboard was the most visible problem, especially because our team had higher personal contact with manager users than worker users. But better inputs meant fewer corrections downstream. That reframe only happened because I pushed for more discovery time before committing to a solution.

**Language is a design material.**
Reframing "worker edits" as "worker suggestions" wasn't a copywriting tweak — it was the solution. The UI followed the language, not the other way around. In B2B products where trust dynamics are complicated, word choice can often help shape the interface.

**Delight earns its place when it has a job.**
The high-score inspired shift summary looks like a fun delight moment. It is also actually a data integrity mechanism. The best argument for delight in enterprise products isn't aesthetic — it's functional.