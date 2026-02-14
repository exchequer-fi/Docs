# Exchequer Docs: Content Inventory & Dependency Map

**Audit date:** Feb 15, 2026  
**Source:** docs.exchequer.fi (all 8 pages read in full)  
**V2 Demo cross-referenced:** v2.exchequer.fi (internal tool — PGT tab; screenshots captured for docs, not linked publicly)

---

## Site Map (Reading Order)

| # | Page | Section | Last Updated |
|---|------|---------|-------------|
| 1 | Exchequer Protocol Overview | Home | 3 months ago |
| 2 | Protocol Overview | — | 1 day ago |
| 3 | Downside Protection | Protocol Concepts | 3 months ago |
| 4 | Exchequer Note(s) | Protocol Concepts | 3 months ago |
| 5 | Redemption | Protocol Concepts | 3 months ago |
| 6 | Protected Growth Token (PGT) | Note Types | 3 months ago |
| 7 | Power Protected Growth Token (Power PGT) | Note Types | 3 months ago |
| 8 | Whitepapers | Research | 4 months ago |

---

## Page-by-Page Inventory

### Page 1: Exchequer Protocol Overview (Home)

**What it tries to do:** Introduce Exchequer, explain why projects should care, high-level how-it-works, AMM-agnostic claim.

**Sections:**
- Introduction
- What is a Protected Growth Token?
- TGE Magic—Without the Sell Pressure
- 1) Why issue Protected Growth Tokens?
- 2) How Protected Growth Tokens work (high level)
- 3) AMM-agnostic by design

**Undefined terms dropped in first 3 paragraphs:**
- "Exchequer Notes" (what's a Note? why is it called that?)
- "LP-derivatives" (undefined)
- "LP forwards" (undefined)
- "LP calls/puts" (undefined)
- "structured-note design" (undefined)
- "campaign-style issuance" (concept not yet explained)

**Uses specific numbers?** No. The "established-token scenario" is entirely narrative — no dollar amounts, no percentages worked through. Just "a 6-month Power PGT with a 50% floor" described abstractly.

**Fresh-eyes verdict:**
- ✅ "Exchequer is the issuer standard for a new on-chain asset class" — OK, I get the ambition
- ✅ "participate in upside while receiving partial principal protection against drawdowns" — core value prop lands
- ⚠️ "LP-derivatives (LP forwards, LP calls/puts) and structured-note design" — I don't know what any of this means and it's sentence 3
- ⚠️ "Think of it as TGE magic without the sell pressure" — catchy but only meaningful if I know what TGE problems look like
- ⚠️ "Post on-chain collateral to fund the protection floor" — what collateral? posted by whom?
- ❌ The "high level" how-it-works still uses "collateralize," "replicate," "upside accruals" without grounding them in anything concrete
- ❌ No numbers anywhere. I leave this page with vibes, not understanding.

**Key issue:** This page is marketing copy masquerading as documentation. Good energy, wrong job. The "why" is strong but the "what, specifically" is missing.

---

### Page 2: Protocol Overview

**What it tries to do:** Provide a technical architecture overview.

**Full content (this is everything):**
> "The Exchequer protocol is a peer-to-peer system designed for cryptocurrency projects to build liquidity."  
> Key Features: Liquidity Notes, Flexible Offerings, Redemption Options, Protocol Security  
> Architecture: Smart Contracts, APIs, User Interfaces

**Undefined terms:** "Liquidity Notes" (is this different from Exchequer Notes?), everything in the bullet lists.

**Uses specific numbers?** No.

**Fresh-eyes verdict:**
- ❌ This is a placeholder page. It tells me nothing I didn't already know.
- ❌ "Liquidity Notes" appears here but nowhere else in the docs — is this an old name? A different product? Confusing.
- ❌ The bullet lists are generic enough to describe any DeFi protocol.

**Key issue:** This page actively hurts comprehension because it's in the reading path but adds zero information. It's a wasted click that breaks momentum between the home page and the actual content.

---

### Page 3: Downside Protection (Protocol Concepts)

**What it tries to do:** Explain downside protection as a standalone concept.

**Sections:**
- What "downside protection" means (in Exchequer)
- How the protection is collateralized (trustless by construction)
- The 75% protection cap (the important bit)
- Walkthrough example
- Choosing a protection level (issuer guidance)

**Undefined terms on first encounter:**
- "cash leg" / "token leg" (TradFi jargon, no definition)
- "full-range LP position" (what range? what LP?)
- "supplemental assets the issuer specifies" (what assets? why?)
- "protection schedule" (never defined)

**Uses specific numbers?** Yes — the walkthrough:
> Buyer deposits 100 USDC. Project contributes 100 TOKEN at $1.00 each.  
> A full-range LP is minted with 100 USDC + 100 TOKEN (total $200).

**🚨 CRITICAL BUG: This walkthrough uses a 1:1 ratio (100 USDC : 100 TOKEN).**

The PGT page (page 6) and the V2 demo both show the project contributing **2x** the user amount:
- PGT page: "Buyer deposits 100 USDC. Project posts 200 TOKEN"
- V2 demo: "User Deposits: US$500,000 USDC / Project Matches: 1,000,000 tokens" (at $1 = $1M in tokens vs $500K from user)

**This is a direct factual contradiction between pages, and the reader encounters the WRONG number first.** This is almost certainly what confused Alex.

**Fresh-eyes verdict:**
- ⚠️ Explaining downside protection BEFORE I understand PGT means I'm building a mental model of "project matches 1:1, I get LP tokens back if price drops." This is incomplete and wrong.
- ✅ The 75% cap explanation is actually clear
- ✅ The walkthrough math checks out (for the wrong ratio)
- ❌ "Settlement asset is LP tokens" — I don't yet understand why this matters or what I'd do with LP tokens
- ❌ "protection schedule" referenced but never defined

**Key issue:** This page MUST NOT come before the PGT explanation. Downside protection only makes sense in context. Also, the walkthrough numbers are wrong/misleading.

---

### Page 4: Exchequer Note(s) (Protocol Concepts)

**What it tries to do:** Overview both note types (PGT and Power PGT) with creation mechanisms and features.

**Content quality:** Decent comparative overview. Introduces both products side by side with "Who it's for" framing.

**Undefined terms:**
- "LP rebalancing" (assumed knowledge)
- "zero coupon" (TradFi term, not explained)
- "spot-equivalent upside" (what does "spot-equivalent" mean here?)
- "participation/cap" (what's a participation rate? what's a cap?)

**Uses specific numbers?** No. All abstract.

**Fresh-eyes verdict:**
- ⚠️ This is a *second* explanation of PGT and Power PGT (the home page already introduced them). Some wording is nearly identical, some is new. Which is canonical?
- ⚠️ "No impermanent loss on the upside" — I don't know what IL is or why this matters yet
- ✅ Creation mechanism steps are in logical order
- ❌ Still no numbers. I'm 4 pages in and haven't seen a single worked example of the core product.

**Key issue:** Redundancy with the home page creates confusion about where the "real" explanation lives. This page doesn't add enough beyond the home page to justify its existence as a separate stop in the reading path.

---

### Page 5: Redemption (Protocol Concepts)

**What it tries to do:** Explain what happens at maturity — the three settlement scenarios (up/flat, down ≤75%, down >75%).

**Content quality:** Actually good. Clear A/B/C structure. Rollover explanation is useful.

**Undefined terms:**
- "72-hour VWAP" (defined in-line — good)
- "burn LP for constituents" (jargon)

**Uses specific numbers?** No.

**Fresh-eyes verdict:**
- ⚠️ Makes much more sense if you've already read the PGT page, but you haven't — this comes BEFORE the PGT deep dive in the sidebar order
- ✅ The three-scenario structure (up, down ≤75%, down >75%) is clean
- ✅ Rollover section is a useful addition
- ⚠️ "settlement in LP tokens backed by on-chain collateral" — I still don't have a concrete picture of what this looks like in practice

**Key issue:** Ordering problem. This should come AFTER the PGT/Power PGT pages, not before. You're explaining the ending before the reader knows the beginning.

---

### Page 6: Protected Growth Token — PGT (Note Types)

**What it tries to do:** Full deep dive on PGT — mechanics, collateral structure, payoff logic, numerical walkthrough.

**Content quality:** This is the best page in the entire docs. By far.

**What it gets right:**
- TL;DR at the top with the key facts
- **Correct collateral ratio: "per 100 USDC of notes sold, the issuer pairs 100 USDC + 100 TOKEN in LP to fund the floor, and holds an additional 100 TOKEN in reserve to pay spot-equivalent upside. → Total on-chain collateral at issue ≈ $300 notional"**
- Tranche A / Tranche B split is clearly explained
- 4 numerical scenarios (75% down, 50% down, 90% down, 50% up) with actual math
- Payoff logic with formulas
- Configurable parameters listed
- Risks section

**Undefined terms:**
- "Tranche A" / "Tranche B" (introduced here without prior setup — fine if this were earlier)
- "constant-product rebalancing" (AMM knowledge assumed)
- "fee tier" (Uniswap-specific)

**Fresh-eyes verdict:**
- ✅ The numerical walkthrough is excellent. If I'd read this first, I'd understand PGT.
- ✅ The 4 scenarios cover the range of outcomes clearly
- ✅ Tranche A/B framing is intuitive once explained
- ⚠️ Dense. A lot of content. Would benefit from a visual (the demo's flowchart would be perfect here)
- ❌ This page is the 6TH page a reader encounters. By the time they get here, they've already built a wrong mental model from the Downside Protection page's 1:1 walkthrough.

**Key issue:** This is the page that should anchor the reader's understanding, but it's buried too deep. The correct numbers and mechanics are here — they're just in the wrong place in the reading order.

---

### Page 7: Power Protected Growth Token — Power PGT (Note Types)

**What it tries to do:** Full deep dive on Power PGT — prize-linked mechanics, 5-tier reward structure, two detailed numerical walkthroughs.

**Content quality:** Very thorough. The two Options (100% prize pool vs 50/50 split) are well worked.

**What it gets right:**
- 5-tier reward structure with concrete multipliers and winner counts
- Two complete numerical walkthroughs with sanity checks
- Unit prize formula is clearly stated
- "Key takeaway" summaries after each option

**Undefined terms:**
- "provably fair on-chain drawing" (how? VRF? Not specified)
- "stake/time weighting" (mentioned in risks but not explained in main text)

**Fresh-eyes verdict:**
- ✅ Numbers are clear and check out
- ✅ The Option A vs Option B framing is smart — shows the issuer trade-off
- ⚠️ Very long page. The tier math is detailed but might overwhelm someone who just wants to understand the concept
- ⚠️ Assumes full understanding of PGT (collateral, settlement, LP tokens) — which is correct if PGT is read first

**Key issue:** Content is good. Main problem is the reader has to survive 5 confusing pages before getting here.

---

### Page 8: Whitepapers (Research)

**What it tries to do:** Link to Jan's 4 SSRN papers.

**Content quality:** Fine for what it is. "Why read" blurbs are a nice touch.

**Fresh-eyes verdict:**
- ✅ Clean, simple, does what it needs to
- ✅ "Why read" summaries help the reader know which paper they need
- No issues.

---

## Dependency Map

This shows what knowledge each page REQUIRES vs what the reader has ACTUALLY been given at that point in the reading order.

### Page 1 (Home) — First page
| Concept Used | Defined Before This Point? | Where It's Actually Defined |
|---|---|---|
| Exchequer Notes | ❌ No | Page 4 (partially), never fully |
| Protected Growth Token (PGT) | ❌ Just named, not explained | Page 6 |
| LP-derivatives, LP forwards, LP calls/puts | ❌ No | Page 8 (whitepapers only) |
| Structured-note design | ❌ No | Never defined in docs |
| Campaign-style issuance | ❌ No | Implied throughout, never defined |
| On-chain collateral | ❌ No | Page 3 (partially) |
| Power PGT / prize-linked | ❌ Just named | Page 7 |

### Page 2 (Protocol Overview) — Dead page
| Concept Used | Defined Before This Point? | Where It's Actually Defined |
|---|---|---|
| Liquidity Notes | ❌ No — appears ONLY here | Never (ghost term) |

### Page 3 (Downside Protection)
| Concept Used | Defined Before This Point? | Where It's Actually Defined |
|---|---|---|
| PGT | ⚠️ Named on Page 1, not explained | Page 6 |
| Cash leg / token leg | ❌ No | Never defined |
| Full-range LP position | ❌ No | Never defined |
| Protection schedule | ❌ No | Never defined |
| LP tokens (as settlement asset) | ❌ Mentioned but not grounded | Page 5, Page 6 |
| **1:1 collateral ratio** | **🚨 SHOWN HERE — CONTRADICTS PAGE 6** | **Page 6 shows 1:2** |

### Page 4 (Exchequer Notes)
| Concept Used | Defined Before This Point? | Where It's Actually Defined |
|---|---|---|
| LP rebalancing / IL | ❌ No | Never defined in docs |
| Zero coupon | ❌ No | Never defined |
| Spot-equivalent upside | ❌ No | Page 6 (implied by tranche B) |
| Participation / cap | ❌ No | Page 6 (listed as knobs) |

### Page 5 (Redemption)
| Concept Used | Defined Before This Point? | Where It's Actually Defined |
|---|---|---|
| 72-hour VWAP | ✅ Defined in-line | — |
| PGT settlement mechanics | ❌ Reader hasn't read PGT deep dive yet | Page 6 |
| LP token redemption | ⚠️ Mentioned on Page 3 | Fully explained Page 6 |

### Page 6 (PGT) — Best page, buried deepest
| Concept Used | Defined Before This Point? | Where It's Actually Defined |
|---|---|---|
| Tranche A / Tranche B | ❌ Introduced here | — (this is the definition) |
| Constant-product rebalancing | ❌ Assumed AMM knowledge | External |
| All collateral mechanics | ✅ Self-contained on this page | — |

### Page 7 (Power PGT)
| Concept Used | Defined Before This Point? | Where It's Actually Defined |
|---|---|---|
| PGT collateral structure | ✅ Page 6 | — |
| Provably fair drawing | ❌ Mechanism not specified | Never |
| Unit prize formula | ✅ Defined here | — |

---

## Top Findings (Ranked by Severity)

### 🔴 Critical

**1. Factual contradiction: 1:1 vs 2:1 collateral ratio**
- Page 3 (Downside Protection) walkthrough: 100 USDC + 100 TOKEN (1:1)
- Page 6 (PGT): 100 USDC + 200 TOKEN (1:2, split into Tranche A + B)
- V2 Demo: $500K user + $1M project tokens (1:2)
- The reader encounters the WRONG number first. This is almost certainly what confused Alex.
- **Fix:** Remove standalone walkthrough from Page 3 entirely. All walkthroughs should live on the PGT page using the correct 2:1 ratio.

**2. Downside protection explained before PGT creates faulty mental model**
- Reader thinks "project matches 1:1 and I get LP tokens back" before understanding that the product actually involves 2x contribution (Tranche A for protection + Tranche B for upside)
- **Fix:** Merge downside protection INTO the PGT explanation. Never explain it in isolation.

**3. Best content buried deepest**
- Page 6 (PGT) has the clearest explanation, correct numbers, and worked examples
- It's the 6th of 7 content pages
- **Fix:** PGT deep dive needs to be accessible within the first 2 clicks maximum.

### 🟡 Major

**4. Front-loaded jargon**
- First 3 sentences of the entire docs contain: LP-derivatives, LP forwards, LP calls/puts, structured-note design
- None of these are defined anywhere in the docs (only in whitepapers)
- **Fix:** Remove from intro entirely. These belong in Layer 3/4 only.

**5. Protocol Overview is a dead page**
- Contains almost no content. Introduces a ghost term ("Liquidity Notes") that appears nowhere else
- Breaks reading momentum between the home page and actual content
- **Fix:** Delete or merge into home page. It shouldn't exist as a separate page.

**6. No worked example until page 3 (and it's wrong), no correct example until page 6**
- The home page is entirely abstract. Page 2 is empty. Page 3 has a wrong example.
- A project founder reading top-to-bottom won't see correct numbers until page 6.
- **Fix:** Put a correct, simple worked example in Layer 1 (the first thing they read).

### 🟢 Minor

**7. Redundancy between pages**
- PGT is introduced on the home page, re-introduced on the Exchequer Notes page, then fully explained on the PGT page. Some wording is near-identical across all three.
- **Fix:** Each layer should add NEW information, not re-explain the same thing differently.

**8. Missing term definitions**
- "cash leg" / "token leg", "full-range LP position", "protection schedule", "zero coupon", "spot-equivalent upside", "participation/cap", "constant-product rebalancing" — all used without definition
- **Fix:** Either define on first use or replace with plain language.

**9. No visuals anywhere**
- Not a single diagram, flowchart, chart, or image in the entire docs
- The V2 demo has all of these (flowchart, payoff chart, project dashboard)
- **Fix:** Add demo screenshots/embeds as described in the improvement plan.

**10. Power PGT "provably fair drawing" mechanism not specified**
- Page 7 references this multiple times but never explains HOW the randomness works (VRF? Chainlink? Custom?)
- **Fix:** Add a brief explanation or mark as "details TBD pre-launch"

---

## Recommended New Reading Order

Based on this audit, here's how the content should be restructured:

**Layer 1 — Quick Start (new page, doesn't exist yet)**
→ What Exchequer does, why projects care, PGT in one paragraph, one worked example with correct 2:1 numbers, link to demo

**Layer 2a — PGT Deep Dive (currently Page 6 — promote to position 2)**
→ This page is already good. Needs: demo integration, remove jargon, add flowchart visuals

**Layer 2b — Power PGT (currently Page 7 — keep after PGT)**
→ Already good. Depends on PGT understanding.

**Layer 3a — How Protection Works (currently Page 3 — demote, rewrite)**
→ Merge into PGT context. Remove standalone walkthrough. Focus on collateral mechanics for technical readers.

**Layer 3b — Settlement & Redemption (currently Page 5 — keep, move after PGT/Power PGT)**
→ Good content in the wrong position. Move after product pages.

**Layer 4 — Whitepapers (currently Page 8 — keep)**
→ No changes needed.

**DELETE: Protocol Overview (Page 2)**
→ No useful content. Ghost term "Liquidity Notes" shouldn't exist.

**REWRITE: Home page (Page 1)**
→ Becomes Layer 1 Quick Start. Drop all jargon. Add numbers. Lead with project narrative.

**MERGE: Exchequer Notes overview (Page 4)**
→ Fold into the Quick Start as a brief "two products" overview, or remove entirely since PGT and Power PGT pages are comprehensive.
