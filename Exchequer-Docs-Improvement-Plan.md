# Exchequer Documentation: Analysis & Improvement Plan

## Context

This plan is derived from the standup conversation between G and Daniel, incorporating feedback from BD prospects (notably Alex from Awesome, a derivatives trader who still couldn't get the full picture), and a review of the current docs at docs.exchequer.fi.

---

## Part 1: The Core Problem

Daniel stated it clearly: *"We've had a bunch of people take a look at the docs over time and there has never been an instance where when we talk to them after they looked at the docs where they understood it."*

The issue is **not size** — the volume of content is roughly right. The issues are:

1. **Order** — concepts are introduced before the reader has enough context to understand them
2. **Clarity** — language assumes familiarity the reader doesn't have yet
3. **Structure** — the docs are organized around the *primitive* (downside protection, LP mechanics) rather than around the *user experience* (what does a project actually get?)
4. **Missing context** — terms get dropped without definition; the walkthrough example doesn't even show the project contributing 2x the user amount (the exact thing Alex flagged)
5. **Faulty mental models** — explaining downside protection independently of the PGT risks readers building an incomplete/wrong understanding of how the product actually works

---

## Part 1B: The V2 Demo Already Solves Most of This

The interactive demo at **V2.exchequer.fi** (an internal tool, not to be linked publicly) is dramatically clearer than the docs. It succeeds where the docs fail because it:

1. **Shows the 2x contribution explicitly** — "User Deposits: US$500,000 USDC / Project Matches: 1,000,000 tokens" is right there at the top of the flowchart. No ambiguity.
2. **Uses a visual flowchart** that walks through the entire PGT lifecycle in order: Deposits → LP Position Created + Upside Payout Reserve → PGTs Issued → LP Earns Yield → Settlement (User redeems / Project redeems). This is exactly the progressive logic the docs are missing.
3. **Provides a live payoff chart** (PGT2 vs Standard LP vs Token Holding) that makes the value proposition immediately visual.
4. **Has a Project Dashboard view** that frames everything from the project's perspective: total onchain liquidity secured, project costs (tokens locked + principal protection cost), and final balances at maturity for both Note Issuer and Note Holder.
5. **Makes the mechanics interactive** — sliders for yield, downside protection %, ending token price, and tenor let the user build intuition by playing with scenarios rather than reading abstract explanations.

The demo also covers multiple product types (PYT, PGT, Power PYT, Power PGT, Power Drop, For Investors) — each with the same clear structure.

**The key takeaway:** The demo's flowchart and dashboard should be the *backbone* of the docs, not a separate resource people might never find. The documentation restructure should be built around mirroring and extending what the demo already does well.

---

## Part 2: The Agreed Framework — Four Concentric Circles

Both G and Daniel agreed the documentation should be restructured into four progressive layers of depth. A reader should be able to stop at any layer and have a coherent understanding at that level of detail.

### Layer 1: Quick Start (The "What & Why")
**Audience:** Project founders, BD leads, biz dev — first-time visitors  
**Goal:** In under 2 minutes, they know what Exchequer does, why they should care, and what the product is  
**Tone:** Project-focused, narrative-driven, zero assumed context  

What this layer must cover:
- What is Exchequer? (one sentence)
- What is the problem for projects? (token holder churn, mercenary liquidity, sell pressure)
- What is a PGT? (defined outcome: downside floor + upside — in plain language)
- Token holder protection narrative (this is the chance to plant the "earliness as a service" positioning)
- How a project uses it (campaign-style issuance, not a one-time thing)
- A single, concrete scenario with real numbers (e.g., "Project X issues a 6-month PGT with 50% floor...")
- **Screenshots from the internal demo** showing the flowchart and project dashboard — gives readers a visual walkthrough without needing access to the tool

What this layer must **NOT** do:
- Mention LP mechanics, collateral structures, or AMM design
- Use undefined terms like "LP forwards," "structured note," or "LP calls/puts"
- Reference the white paper

### Layer 2: Product Deep Dive (The PGT & Power PGT)
**Audience:** People who read Layer 1 and want to understand the product  
**Goal:** Full understanding of PGT and Power PGT — how they work, what the project commits, what the user gets  
**Key principle:** Always explain downside protection *in the context of the PGT*, never as an independent concept  

What this layer must cover:
- PGT step-by-step walkthrough with specific numbers (including the 2x project contribution) — **structured to mirror the V2 demo flowchart**: Deposits → LP Position + Upside Reserve → PGTs Issued → Yield Period → Settlement
- The walkthrough numbers should use the same defaults as the demo ($1 starting price, $1M total liquidity, 50% downside protection, 15% assumed yield, 12-month tenor) so readers can follow along interactively
- **Embedded or linked payoff chart** from the demo (PGT vs Standard LP vs Token Holding) — this is the single most powerful visual for communicating the value prop
- **Project Dashboard framing** — mirroring the demo's project-cost view: what does the project commit (tokens locked in LP + principal protection cost), what do they get (onchain liquidity secured for N months), what are the final balances at maturity
- Power PGT explanation with prize pool mechanics
- What happens at maturity — settlement mechanics in plain terms, using the demo's "User redeems" / "Project redeems" framing with the actual dollar figures
- Comparison table: PGT vs Power PGT
- Campaign design: how to think about floor levels, terms, and repeat issuance
- **Screenshot callouts throughout** — at each step, include an annotated screenshot from the internal demo showing the corresponding flowchart state, so readers can visually follow the lifecycle

### Layer 3: Protocol Mechanics (The "How")
**Audience:** Technical evaluators, DeFi-native readers who want to understand the machinery  
**Goal:** Understand collateralization, LP position mechanics, settlement, and AMM interaction  

What this layer covers:
- How downside protection is collateralized (the LP position mechanics)
- AMM-agnostic design
- Settlement: VWAP oracle, LP token redemption
- On-chain architecture: persistent, non-upgradeable contracts
- Censorship resistance and self-custody properties

### Layer 4: Research & Formal Specification
**Audience:** Quants, researchers, serious technical due diligence  
**Goal:** Mathematical frameworks, proofs, formal specifications  

What this layer covers:
- Links to Jan's whitepapers
- LP-derivative first principles
- Risk distribution mathematical framework
- Formal payoff specifications

---

## Part 3: Analysis Methodology

Here's the step-by-step process to audit the existing docs and execute the restructure:

### Step 1: Content Inventory
Go through every page on docs.exchequer.fi and catalog:
- What concept does this page try to explain?
- What prior knowledge does it assume?
- What terms does it use that haven't been defined yet at that point in the reading order?
- Does it use specific numbers/examples or is it abstract?

Current page structure to audit:
- Exchequer Protocol Overview (home)
- Protocol Overview
- Protocol Concepts → Downside Protection
- Protocol Concepts → Exchequer Note(s)
- Protocol Concepts → Redemption
- Note Types → Protected Growth Token (PGT)
- Note Types → Power Protected Growth Token (Power PGT)
- Research → Whitepapers

### Step 2: Dependency Mapping
For each concept introduced, map what the reader needs to already know to understand it. This reveals where the order breaks down. For example:
- The current intro mentions "LP-derivatives (LP forwards, LP calls/puts)" — but this is never explained before that point
- "Post on-chain collateral" appears in the high-level how-it-works, but what collateral means in this context isn't clear yet
- The walkthrough shows buyer deposits 100 USDC, project contributes 100 tokens — but in reality the project contributes 2x; this creates a faulty mental model

### Step 3: "Fresh Eyes" Read-Through
Read the entire docs from start to finish pretending you have zero context. For each paragraph, mark:
- ✅ I understand this based on what I've read so far
- ⚠️ I can sort of follow but I'm making assumptions
- ❌ I'm lost / this requires knowledge I don't have yet

This is exactly what Daniel recommended: "put myself in a headspace where I get rid of all the context and I read through everything in the docs from start to finish."

### Step 4: Remap Content to the Four Layers
Take all existing content and assign each piece to one of the four layers. Some content will need to be:
- **Rewritten** (e.g., the introduction — needs to be project-focused, narrative-driven)
- **Relocated** (e.g., downside protection as a standalone concept → moves to Layer 3)
- **Expanded** (e.g., walkthrough examples that show the full PGT flow including project 2x contribution)
- **Added** (e.g., a PGT step-by-step visual/diagram, adapted from the demo)
- **Removed/Consolidated** (e.g., references to LP notes or previous product iterations)

### Step 5: Rewrite the Introduction
Both G and Daniel agreed this should be done independently and then compared. The introduction is the highest-impact page because every BD prospect reads it first.

The introduction must:
- Be written for **projects** as the primary audience
- Lead with the narrative (token holder protection, the problem with current token economics)
- Introduce PGT with zero assumed context
- Use a concrete numbered scenario
- Not reference any term that hasn't been defined

### Step 6: Integrate V2 Demo Content into Docs
Daniel suggested diagrams. The demo already has exactly what's needed — the question is how aggressively to integrate it. Three approaches (not mutually exclusive):

**Option A: Embed the demo directly (iframe)**
- Embed the PGT planner directly into the Layer 2 documentation page
- Pros: readers can interact without leaving the docs; always in sync with latest demo version
- Cons: GitBook may not support iframes well; loading performance; mobile experience
- Verdict: Test this first — if it works in GitBook, it's the best option

**Option B: Static screenshots + deep links**
- Take annotated screenshots of key demo states (flowchart at default values, flowchart when token drops 50%, payoff chart) and embed as images in the docs
- Pros: works in any doc format; fast loading; guaranteed rendering
- Cons: can go stale if demo UI changes; less interactive

**Option C: Recreate the flowchart as a doc-native diagram**
- Rebuild the demo's flowchart (Deposits → LP + Reserve → PGTs → Yield → Settlement) as a static diagram using the same structure and numbers
- Pros: fully controlled; renders perfectly; can be styled to match docs
- Cons: maintenance overhead; duplicated effort; loses interactivity

**Recommended approach:** Start with **Option B** as the baseline (fast, reliable, already available), attempt **Option A** as an enhancement, and use **Option C** only for the Layer 1 Quick Start where a simplified static version is better than a full interactive tool.

Visual priorities adapted from the demo:
1. **PGT lifecycle flowchart** — the demo's flowchart view is the gold standard. Capture it at default values with annotations.
2. **Payoff profile chart** (PGT vs Standard LP vs Token Holding) — this is the chart that makes the value prop click visually
3. **Project cost breakdown** — the demo's Project Dashboard view showing costs vs outcome
4. **Scenario comparison** — screenshots at different ending token prices ($0.50, $1.00, $1.50) showing how settlement differs

---

## Part 4: UI/UX Bugs to Fix (from Daniel's review)

These are low-hanging fruit fixes on the docs site itself:

1. **Sidebar navigation** — clicking a section collapses the previous one and jumps to top; should expand in place without closing others
2. **Scroll tracking** — the sidebar active section indicator gets stuck at item #2 and doesn't track properly to later sections (only updates if the heading is at the very top of viewport)
3. **Title contrast** — section titles are too dark against the background; hard to read
4. **Background inconsistency** — some areas are pure black, others are not; creates a disjointed feel
5. **Sidebar text overflow** — long section titles get cut off and run too close to the container border; needs padding/truncation

---

## Part 5: Priority & Execution Order

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| 1 | Content inventory + dependency mapping of current docs | Foundation for everything else | Low |
| 2 | Rewrite the Introduction (both G and Daniel do independent drafts, then compare) | Highest-traffic page; sets first impression for every BD prospect | Medium |
| 3 | Restructure into four-layer hierarchy | Fixes the core order/context problem | Medium |
| **4** | **Capture screenshots from internal demo and embed in docs: flowchart steps, payoff chart, project dashboard, redemption scenarios** | **Immediately makes Layer 2 dramatically clearer; leverages work already done** | **Low-Medium** |
| 5 | Add numbered walkthrough examples with correct figures (including 2x), using demo's default values for consistency | Fixes the specific Alex feedback + prevents faulty mental models | Medium |
| 6 | Fix UI bugs (sidebar, contrast, overflow) | Quick wins that improve reading experience | Low |
| 7 | Review all terminology — ensure nothing is used before it's defined | Prevents confusion compound effect | Low |

---

## Part 6: Success Criteria

After the restructure, the docs should pass this test: **A project founder with general DeFi knowledge but no Exchequer context should be able to read the first two layers and accurately explain to someone else what a PGT is, how their project would use it, and what it costs them (including the 2x contribution).**

If they can do that without a follow-up call to clarify, the docs are working.

**Secondary success criterion:** The docs should be self-contained. A reader should never feel like they're missing context or need an external tool to understand the product. The embedded screenshots from the demo should provide all the visual explanation needed within the documentation itself.
