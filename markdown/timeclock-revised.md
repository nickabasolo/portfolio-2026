# Time Clock: From Audit to Autonomy

**Role:** Senior Product Designer
**Company:** Workstream
**Timeline:** 4 months
**Outcome:** 58% reduction in flagged timecards · 1.5 admin hours/week reclaimed per manager

---

> 📸 **ARTIFACT — Hero image**
> The angled mockup spread works well. Consider adding the shift summary "high score" screen — it's your most original idea and currently invisible at the top of the page.

---

## The brief

Every Sunday night, restaurant managers face the same grind: wading through 40+ flagged timecards — missed breaks, forgotten clock-outs, disputed punches — each one requiring a manual investigation before payroll can close.

The stakes are real. Inaccurate timecards mean labor law violations and significant fines. The process was unsustainable.

I'd owned this product since its first line of design. When the brief landed — improve the manager's review dashboard — my instinct was the same as everyone else's: bulk actions, clearer error labels, faster filtering. A better eraser.

> 📸 **ARTIFACT — Real product screenshot**
> The legacy timesheet with 40+ flags visible. One image, let it breathe. The visual chaos makes the case better than any copy.

---

## What the research revealed

After interviewing 5 managers about their Sunday night routine, a pattern emerged that changed everything. Most of their time wasn't spent reviewing flags — it was spent chasing workers to find out what actually happened.

*Did you take this break? Did you forget to clock out? When did you actually leave?*

The dashboard wasn't the problem. Bad data at the source was the problem. Every error we prevented a worker from making was an error a manager never had to touch.

I negotiated for additional discovery time by framing it as an ROI calculation, then spent time with 12 workers to understand their experience of the shift. Three intervention points emerged.

> 💡 **ARTIFACT — Research synthesis**
> A cleaned-up affinity map or research summary. If you have a vivid interview quote that captures the manager's Sunday night frustration, pull it as a blockquote. This is where the strategic pivot needs to feel earned, not asserted.

---

## The real problem

We stopped designing for the manager's dashboard. We started designing for the worker's shift.

| Moment | What we learned | Design response |
|--------|----------------|-----------------|
| Clock-in | Workers often didn't know their break schedule for the day | Surface the full shift agenda immediately on clock-in |
| Mid-shift | Missed breaks are the #1 cause of labor fines | Lock screen notifications requiring zero app interaction |
| Clock-out | Workers knew about their errors but had no structured way to flag them | Let workers request their own corrections |

---

## How we solved it

### Visibility at the right moment

Workers spend 95% of a shift away from their phone. The interface needed to work at the periphery — not demand attention, but be there when it mattered.

**Notifications** handled the lock screen layer: timed reminders before breaks and before clock-out, requiring zero interaction. **The agenda view** handled moments when workers were already in the app — a full timeline of what lay ahead, surfaced immediately on clock-in.

> 📸 **ARTIFACT — Side-by-side mockup**
> The lock screen notification alongside the in-app agenda view. Frame it as two layers of the same system. A before/after of the clock-in screen works well here too.

---

### Edit requests, not edits

The obvious solution — let workers edit their timecards directly — failed immediately in testing. Managers were wary of giving employees any access to payroll data.

The fix was linguistic as much as it was visual: reframing "edits" as "suggestions." Workers could flag their own errors; managers retained final approval. The UI updated to match — request states, pending indicators, approval flows.

A small wording change that completely reframed the trust dynamic.

> 📸 **ARTIFACT — Exploration spread**
> Two or three rejected directions (direct edit, comment thread) alongside the final suggestion flow. The contrast makes the decision feel earned. Rough wireframes work here.

> 📸 **ARTIFACT — Final edit request flow**
> The polished request screen. Annotate the language choice: "suggest" not "edit," and how the UI reinforces the manager's sense of control.

---

### Friction as a feature

Beta users were making fewer errors — but they still weren't catching the ones that slipped through. The reason: the moment workers clocked out, they were gone.

Inspired by video game end-screens, I designed the shift summary as a high-score moment rather than a confirmation dialog. Ticking earnings, haptic feedback, a full shift timeline — all designed to create a deliberate pause before the worker pocketed their phone.

The goal wasn't delight for its own sake. It was to make the worker perform a final data audit when the memory was freshest.

> 🎥 **ARTIFACT — Screen recording**
> A 5-10 second clip of the ticking earnings animation and haptic feedback. This is your strongest candidate for video — it doesn't read in a still. If you do one video in the case study, make it this one.

> 📸 **ARTIFACT — Static fallback**
> Full-screen mockup of the summary state showing the timeline, ticking earnings, and a flagged item with "request edit" visible.

---

### Cleaning up the manager's view

With fewer errors coming in from upstream, the manager dashboard became a quieter place. The remaining polish: new status chips with specific, actionable microcopy replaced the blunt "flagged" row highlights that made the whole table feel loud.

> 📸 **ARTIFACT — Before / after**
> A tight before/after of the flagged row treatment. Two columns, one caption each. Keep it small — this is a supporting beat.

---

## What changed

**58%** reduction in flagged timecards
**1.5 hrs** of admin time reclaimed per manager, per week
**23** worker-initiated corrections per week — errors caught before they ever reached a manager

> 📊 **ARTIFACT — Data visualisation**
> If you have pre/post timecard volume data, a simple chart adds credibility and visual variety. Otherwise the three stat callouts work — give each one a single caption line connecting it back to the specific design decision that drove it.

---

## What I learned

**Fix the pencil, not the eraser.**
The biggest ROI came from questioning the brief entirely. The manager dashboard was the eraser — it cleaned up mistakes after the fact. The worker experience was the pencil. Better inputs meant fewer corrections downstream. That reframe only happened because I pushed for more discovery time before committing to a solution.

**Language is a design material.**
Reframing "worker edits" as "worker suggestions" wasn't a copywriting tweak — it was the solution. The UI followed the language, not the other way around. In B2B products where trust dynamics are complicated, word choice often does more work than the interface itself.

**Delight earns its place when it has a job.**
The shift summary looks like a flourish. It was actually a data integrity mechanism. The best argument for delight in enterprise products isn't aesthetic — it's functional.
