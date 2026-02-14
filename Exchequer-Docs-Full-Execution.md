# Exchequer Documentation: Full Execution Package

---

# PART A: CONTENT INVENTORY & FRESH-EYES AUDIT

## Page 1: Exchequer Protocol Overview (Home)
**URL:** docs.exchequer.fi/
**Purpose:** First page every visitor lands on. Sets the stage for everything.

### Content Summary
- Introduction: defines Exchequer Notes, PGT, downside protection, campaign-style issuance
- "What is a PGT?" section: floor + upside, PGT vs Power PGT at a glance
- "TGE Magic Without the Sell Pressure" section
- "Why issue PGTs?" section (4 subsections: holder alignment, AMM-native liquidity, new-user acquisition, established tokens)
- "How PGTs work (high level)" — 3-step issue/collateralize/settle
- "AMM-agnostic by design"

### Fresh-Eyes Audit (✅ / ⚠️ / ❌)

| Paragraph | Verdict | Issue |
|-----------|---------|-------|
| Opening sentence ("issuer standard for a new on-chain asset class: Exchequer Notes") | ⚠️ | "Issuer standard" is jargon. "On-chain asset class" is vague. A project founder's reaction: "OK but what does it DO for me?" |
| "Any ERC-20 project can issue a Protected Growth Token (PGT)..." | ⚠️ | Defines PGT outcomes but in one dense sentence. "Partial principal protection against drawdowns (up to 75%)" — protection against drawdowns or protection of up to 75%? Ambiguous. |
| "Think of it as TGE magic without the sell pressure" | ✅ | Good hook. But only works if reader knows what TGE is. |
| "PGTs are built from first-principles LP-derivatives (LP forwards, LP calls/puts) and structured-note design" | ❌ | LP forwards, LP calls/puts, structured-note design — none of these have been defined. Reader has no idea what this means. This is paragraph 3 of the entire docs. |
| "persistent, non-upgradeable smart contracts designed for censorship resistance" | ⚠️ | Fine for DeFi-native reader, but this is page 1 — we're supposed to be selling the concept, not the architecture. |
| "What is a PGT?" section | ⚠️ | Defines PGT and Power PGT but abstractly. No numbers. "Spot-like upside with no IL on the upside" — assumes reader knows what IL is. |
| "TGE Magic" section | ✅ | Good framing. "Repeatable, time-boxed PGT campaigns" is clear. |
| "Why issue PGTs?" — 4 reasons | ⚠️ | Good reasons but written in marketing-speak rather than plain language. "Costs are clear and budgetable" — what costs? Hasn't been explained yet. |
| "How PGTs work (high level)" — 3 steps | ❌ | "Post on-chain collateral to fund the protection floor and specify upside per the note type" — what collateral? How much? What does "specify upside" mean? This is supposed to be the high-level explanation and it's still abstract. |
| Established-token scenario | ⚠️ | A narrative scenario but with zero numbers. "Issues a 6-month Power PGT with a 50% floor" — 50% floor of what? What does the project actually commit? How much does a user put in? What do they get back? |
| "AMM-agnostic by design" | ⚠️ | Fine but premature on page 1. Reader doesn't understand the product yet, so telling them it's AMM-agnostic is meaningless. |

### Key Problems
1. **Leads with jargon** — LP-derivatives, structured-note design, LP forwards/calls/puts all appear before any concrete explanation
2. **No numbers anywhere** — the scenario is narrative-only, never shows a single dollar figure
3. **Written for Exchequer team, not for prospects** — reads like a pitch deck for people who already get it
4. **Buries the value prop** — "your project puts in X, users put in Y, at the end users get Z" is never stated plainly

---

## Page 2: Protocol Overview
**URL:** docs.exchequer.fi/protocol-overview
**Purpose:** Supposed to be a protocol architecture overview

### Content Summary
- One-sentence intro: "peer-to-peer system designed for cryptocurrency projects to build liquidity"
- Key Features: 4 bullet points (Liquidity Notes, Flexible Offerings, Redemption Options, Protocol Security)
- Architecture: 3 bullet points (Smart Contracts, APIs, User Interfaces)

### Fresh-Eyes Audit

| Content | Verdict | Issue |
|---------|---------|-------|
| Entire page | ❌ | This is clearly placeholder content. "Smart Contracts: Core protocol logic implemented on-chain" tells the reader nothing. "APIs: Interfaces for integration with external systems" is generic filler. |

### Key Problems
1. **This page should not exist in its current state.** It's either placeholder or needs to be completely rewritten.
2. A reader coming from page 1 expects to learn more — instead they get less.

---

## Page 3: Downside Protection
**URL:** docs.exchequer.fi/protocol-concepts/downside-protection
**Purpose:** Explains what downside protection means and how it's collateralized

### Content Summary
- What "downside protection" means
- How protection is collateralized (matched deposits → LP → escrow → settle)
- The 75% protection cap explained
- Walkthrough example with numbers
- Choosing a protection level (issuer guidance)

### Fresh-Eyes Audit

| Section | Verdict | Issue |
|---------|---------|-------|
| Opening: "Instead of paying emissions to tempt mercenary liquidity..." | ✅ | Good framing. Connects to a problem the reader knows. |
| "Partial protection only, up to 75% drawdown" | ⚠️ | Clear but raises a question: 75% of what? Protection percentage vs drawdown percentage is confusing. Does 75% protection mean you're protected against a 75% drop? Yes, but this isn't immediately obvious. |
| "Settlement asset is LP tokens" | ⚠️ | Stated clearly but a reader unfamiliar with LP tokens will be confused. What does it mean to receive LP tokens? Can I just get my money back? |
| Collateralization section | ⚠️ | Good mechanically but this is the FIRST place the matched deposits are explained. Should have appeared much earlier. |
| 75% protection cap | ✅ | Well explained. Three scenarios (≤75%, >75%) are clear. |
| **Walkthrough example** | ❌ | **"Buyer deposits 100 USDC. Project contributes 100 TOKEN at $1.00 each."** This shows a 1:1 ratio. But the actual PGT structure requires the project to contribute 2x the user amount (as shown in the demo and the PGT detail page). This is the EXACT thing Alex flagged. The walkthrough creates a faulty mental model. |
| Choosing a protection level | ✅ | Useful issuer guidance. |

### Key Problems
1. **The walkthrough is wrong.** Shows 1:1 contribution ratio when PGT actually requires 2:1 (project:user). This was the #1 BD feedback issue.
2. **Downside protection is explained as a standalone concept** before the reader understands what a PGT is or how the full product works. This means the reader builds a mental model of just the protection mechanism, then has to retrofit the full PGT structure on top of it. Bad learning order.
3. **Settlement in LP tokens** is stated but never truly explained for someone who doesn't know what LP tokens are.

---

## Page 4: Exchequer Note(s)
**URL:** docs.exchequer.fi/protocol-concepts/exchequer-note-s
**Purpose:** Overview of the two note types (PGT and Power PGT)

### Content Summary
- PGT: floor + spot-equivalent upside, creation mechanism, features
- Power PGT: floor + prize-linked upside, creation mechanism, features

### Fresh-Eyes Audit

| Section | Verdict | Issue |
|---------|---------|-------|
| Opening paragraph | ⚠️ | Repeats "think TGE magic without the sell pressure" again. Third time seeing this phrase. |
| PGT Creation Mechanism | ⚠️ | "Collateralize & Replicate — Proceeds and treasury assets are posted on-chain to (a) fund the floor, and (b) replicate spot-like upside (no LP rebalancing)" — "replicate spot-like upside" is unclear. What does replication mean here? |
| PGT Features list | ⚠️ | Dense. "No IL on the upside—tracks token appreciation per participation/cap terms" — assumes reader knows IL. |
| Power PGT Creation Mechanism | ✅ | Clearer than PGT because prize pool is a more intuitive concept. |
| Power PGT Features list | ⚠️ | Same density issues as PGT. |

### Key Problems
1. **This page overlaps heavily** with the PGT and Power PGT detail pages. Reader will read much of the same content twice.
2. **No numbers or examples** — everything is abstract.
3. **"Replicate spot-like upside" is never unpacked** in a way a non-quant would understand.

---

## Page 5: Redemption
**URL:** docs.exchequer.fi/protocol-concepts/redemption
**Purpose:** Explains what happens at maturity

### Content Summary
- Fixed maturity, 72-hour VWAP
- Three scenarios: market up/flat, market down ≤75%, market down >75%
- Rollover/extension option
- Post-redemption choices

### Fresh-Eyes Audit

| Section | Verdict | Issue |
|---------|---------|-------|
| Opening | ✅ | Clear that protection applies at maturity, not perpetually. |
| 72-hour VWAP explanation | ⚠️ | "Manipulation-resistant price" is good framing but "VWAP" is undefined for non-traders. |
| Scenario A (market up) | ⚠️ | PGT vs Power PGT outcomes described but abstractly. "Defined upside payoff (spot-equivalent participation per the note's participation/cap)" is a mouthful. |
| Scenario B (market down ≤75%) | ✅ | Clear. |
| Scenario C (market down >75%) | ✅ | Clear. "Strictly better off than being unprotected" is a good framing. |
| Rollover | ✅ | Clean explanation. |

### Key Problems
1. **Good content in the wrong place.** By this point the reader has been through 4 pages and still hasn't seen a complete end-to-end example with real numbers.
2. **VWAP** is used without definition.

---

## Page 6: Protected Growth Token (PGT) — Detail
**URL:** docs.exchequer.fi/note-types/protected-growth-token-pgt
**Purpose:** Deep dive on PGT mechanics

### Content Summary
- TL;DR summary
- What it is, who it's for
- Key properties
- Creation mechanism (Tranche A for floor, Tranche B for upside)
- Configurable parameters
- Payoff logic (mathematical)
- Numerical walkthrough (4 cases)
- Redemption & rollover
- Risks

### Fresh-Eyes Audit

| Section | Verdict | Issue |
|---------|---------|-------|
| TL;DR | ⚠️ | Dense but useful. "Per 100 USDC of notes sold, the issuer pairs 100 USDC + 100 TOKEN in LP to fund the floor, and holds an additional 100 TOKEN in reserve" — **THIS is the first time the 2:1 ratio is clearly stated.** But it's buried in a TL;DR on page 6 of 7. |
| What it is | ⚠️ | Repeats TGE magic phrase again (4th time). |
| Who it's for | ✅ | Good segmentation of issuers vs buyers. |
| Key Properties | ⚠️ | Very dense. Mixes properties with jargon (participation/cap, zero coupon, tranche). |
| Creation Mechanism | ✅ | **This is actually well-structured.** Tranche A (LP for floor) and Tranche B (reserve for upside) is clear. This should be much earlier in the docs. |
| Payoff Logic (mathematical) | ⚠️ | Uses P₀, Pₘ notation. Fine for quants, inaccessible for BD prospects. |
| **Numerical Walkthrough** | ✅ | **Best content in the entire docs.** Four concrete cases with real numbers. Shows setup ($100 USDC buyer, $200 TOKEN from project split into two tranches). This is what every reader needs to see — but it's the second-to-last page. |
| Risks | ✅ | Appropriate caveats. |

### Key Problems
1. **The best content is in the worst position.** The numerical walkthrough is exactly what should be on page 1 or 2, but it's buried on page 6.
2. **The 2:1 contribution ratio** (project contributes 2x user amount) is finally clear here, but only in the TL;DR and walkthrough. Every previous page either omitted it or showed 1:1.
3. **Significant overlap** with pages 3 and 4.

---

## Page 7: Power Protected Growth Token (Power PGT) — Detail
**URL:** docs.exchequer.fi/note-types/power-protected-growth-token-power-pgt
**Purpose:** Deep dive on Power PGT mechanics

### Content Summary
- TL;DR, what it is, who it's for
- Key properties, creation mechanism
- Payoff logic
- Reward tiers (5-tier structure, 10,000× top multiplier)
- Numerical walkthrough (Option A: 100% prize pool, Option B: 50/50 split)
- Risks

### Fresh-Eyes Audit

| Section | Verdict | Issue |
|---------|---------|-------|
| TL;DR | ⚠️ | Dense but informative. Prize-linked mechanics are inherently more exciting and easier to grasp. |
| Reward Tiers | ✅ | Very well explained. The unit prize formula and tier table are clear. |
| **Numerical Walkthrough** | ✅ | **Excellent.** Two concrete options (100% prize pool vs 50/50) with exact dollar amounts per tier. "A jackpot winner turns a 100 USDC note into 800,000 USDC" — this is the kind of line that sells the product. |

### Key Problems
1. Same positioning issue — great content buried deep in the docs.
2. The walkthrough here is actually more compelling than the PGT walkthrough because the numbers are dramatic. This could be killer marketing content if surfaced earlier.

---

## Page 8: Whitepapers
**URL:** docs.exchequer.fi/research/whitepapers
**Purpose:** Links to Jan's academic papers

### Fresh-Eyes Audit
| Content | Verdict | Issue |
|---------|---------|-------|
| Entire page | ✅ | Does exactly what it should. Clean links with one-line summaries. No issues. |

---

# PART B: DEPENDENCY MAP

## Concepts and Where They First Appear vs Where They're Defined

| Concept | First Used | First Defined | Gap |
|---------|-----------|---------------|-----|
| Exchequer Notes | Page 1, sentence 1 | Page 1 (implicitly = PGTs) | Small — but "Notes" suggests more products than exist |
| PGT | Page 1, sentence 2 | Page 1 (abstract), Page 6 (concrete) | **Huge.** 5 pages between first mention and first clear explanation with numbers. |
| Downside protection | Page 1, sentence 2 | Page 3 | 2 pages gap. Also defined as standalone concept before PGT structure is clear. |
| LP-derivatives, LP forwards, LP calls/puts | Page 1, paragraph 3 | **Never defined in docs** (only in whitepapers) | ❌ Critical gap. Used on page 1, never explained. |
| Structured-note design | Page 1, paragraph 3 | **Never defined** | ❌ |
| TGE | Page 1 ("TGE magic") | **Never defined** | Assumes crypto knowledge |
| IL (Impermanent Loss) | Page 1 ("no IL on upside") | **Never defined** | ❌ |
| LP tokens | Page 3 (settlement asset) | Page 3 (partial) | ⚠️ Described functionally but never truly explained for non-DeFi readers |
| Collateral / matched deposits | Page 1 ("post on-chain collateral") | Page 3 | 2 pages gap |
| 2x project contribution | **Never on pages 1-5** | Page 6 TL;DR | ❌ **The most important commercial fact is absent from the first 5 pages** |
| Tranche A / Tranche B | Never before page 6 | Page 6 | OK — this is appropriate for the detail page |
| VWAP | Page 5 | **Never defined** | ⚠️ Technically not critical but "72-hour VWAP" should be glossed |
| Prize pool / reward tiers | Page 1 (briefly) | Page 7 | OK — appropriate depth progression |
| Participation rate / cap | Pages 1, 4, 6 | Page 6 (partially) | ⚠️ Used repeatedly before being explained |
| Zero coupon | Page 6 | **Never defined** | Assumes TradFi knowledge |

## Critical Dependency Failures (things that break comprehension)

1. **LP-derivatives mentioned on page 1, never explained.** Reader either skips it (loses trust) or gets confused (loses interest).
2. **2x contribution ratio absent from first 5 pages.** The single most important fact for a project evaluating Exchequer — "what does it cost me?" — is not answered until page 6.
3. **Downside protection explained before PGT structure.** Reader builds an incomplete mental model that they then have to retrofit.
4. **No complete end-to-end example until page 6.** First 5 pages are all abstract.

---

# PART C: TERMINOLOGY AUDIT

## Terms Used Before Definition (in reading order)

| Term | First Appears | Status | Action |
|------|--------------|--------|--------|
| Exchequer Notes | Page 1, line 1 | Implicitly defined | OK — add explicit one-liner |
| ERC-20 | Page 1, line 2 | Assumed knowledge | Add tooltip/gloss |
| Principal protection | Page 1, line 2 | Assumed knowledge | Define inline |
| Drawdown | Page 1, line 2 | Assumed knowledge | Define inline |
| TGE | Page 1 | Never defined | Define: "Token Generation Event — a project's initial token launch" |
| LP-derivatives | Page 1, para 3 | Never defined | **Remove from intro entirely.** Move to Layer 3/4. |
| LP forwards | Page 1, para 3 | Never defined | **Remove from intro.** |
| LP calls/puts | Page 1, para 3 | Never defined | **Remove from intro.** |
| Structured-note design | Page 1, para 3 | Never defined | **Remove from intro.** |
| Censorship resistance | Page 1 | Assumed knowledge | OK for DeFi audience |
| IL / Impermanent Loss | Page 1 | Never defined | Define on first use or remove from early pages |
| Spot-equivalent upside | Pages 1, 4, 6 | Never clearly defined | Needs plain-language gloss: "your upside tracks the token price 1:1" |
| LP tokens | Page 3 | Partially defined | Add: "LP tokens represent your share of a liquidity pool — they can be sold or held" |
| Collateral | Pages 1, 3 | Partially defined | Define in context |
| VWAP | Page 5 | Never defined | Add: "Volume-Weighted Average Price — the average trading price weighted by volume, harder to manipulate than a spot price" |
| Participation rate | Pages 1, 4, 6 | Never clearly defined | Add: "the percentage of the token's price increase that gets passed to the PGT holder (e.g., 100% = you get all the upside)" |
| Zero coupon | Page 6 | Never defined | Add: "no interest or yield payments during the term — all value is delivered at maturity" |
| Tranche | Page 6 | Never defined | Add: "a portion or slice of the total collateral set aside for a specific purpose" |

---

# PART D: CONTENT REMAP TO FOUR LAYERS

## What Goes Where

### Layer 1: Quick Start (NEW — does not exist yet)
**Source material:** None. Must be written from scratch.
**Must include:**
- What Exchequer does (one sentence, project-focused)
- The problem it solves (token holder churn, mercenary liquidity)
- What a PGT is (plain language, no jargon)
- A concrete numbered example using demo defaults
- Link to V2 demo
- What it costs the project (the 2x contribution, stated plainly)

### Layer 2: Product Deep Dive (NEW — reconstructed from existing content)
**Source material:** Best parts of pages 6 and 7 (numerical walkthroughs), demo flowchart structure
**Must include:**
- PGT step-by-step walkthrough mirroring demo flowchart
- Power PGT explanation with prize tiers
- Payoff comparison chart (from demo)
- Project cost breakdown (from demo's Project Dashboard)
- Settlement explanation in plain terms
- PGT vs Power PGT comparison

### Layer 3: Protocol Mechanics (RESTRUCTURED from existing pages 3-5)
**Source material:** Downside Protection page, Redemption page, Creation Mechanism sections from pages 6-7
**Keep:** Collateralization mechanics, VWAP settlement, matched deposits, LP escrow
**Move here:** All content about LP mechanics, AMM-agnostic design, Tranche A/B structure
**Remove:** Duplicate explanations of PGT/Power PGT (already in Layer 2)

### Layer 4: Research (KEEP AS-IS)
**Source material:** Whitepapers page
**Action:** No changes needed. Add a bridge sentence from Layer 3 pointing here.

### Pages to Remove/Merge
- **Protocol Overview** (page 2): Delete entirely. Pure placeholder content.
- **Exchequer Note(s)** (page 4): Merge useful content into Layer 2. This page overlaps too heavily with the detail pages.

---

# PART E: DRAFT CONTENT — LAYER 1 (QUICK START)

---

## Exchequer: Protected Growth Tokens for Your Community

### What Is Exchequer?

Exchequer lets crypto projects issue Protected Growth Tokens (PGTs) — tokens that give holders downside protection and upside exposure over a fixed term. Think of it as a way to offer your community a better deal than raw token exposure: "buy our token, and even if the price drops, you're protected up to a certain level."

### The Problem Exchequer Solves

If you've launched a token, you know the pattern: you attract holders, the price dips, they sell, liquidity drains, and you're left trying to re-attract users with emissions that dilute your token further. It's a cycle that burns treasury and breeds mercenary behavior.

PGTs break this cycle. Instead of spraying rewards and hoping people stick around, you offer a defined deal: downside protection funded by your treasury, paired with real upside if the token performs. Holders get a reason to stay. You get committed users and deeper on-chain liquidity — without perpetual emissions.

### What Is a PGT?

A PGT is a token you issue to your community with two built-in properties over a fixed term (e.g., 6 or 12 months):

**A floor:** If your token's price drops, PGT holders are protected. You choose the level — up to 75% protection. If you set a 50% floor and your token drops 50% or less by maturity, holders get their full principal back.

**Upside:** If your token's price goes up, PGT holders participate in that upside. Their return tracks the token price.

At the end of the term, the PGT settles automatically on-chain. No intermediaries, no trust required.

### How It Works — A Concrete Example

Let's say your token is trading at $1.00 and you want to raise $500,000 in on-chain liquidity with a 12-month PGT offering 50% downside protection.

**What happens at launch:**

→ Users deposit **$500,000 USDC** to buy PGTs.

→ Your project contributes **1,000,000 of your tokens** (worth $1,000,000 at $1/token).

→ Together, this creates a **$1,000,000 LP position** on a DEX, plus a **500,000 token reserve** set aside to pay upside at maturity.

→ Users receive PGTs representing their position.

**Your project's cost:** 1,000,000 tokens locked for 12 months. No USDC cost. No emissions. The tokens go into productive LP that generates trading fees.

**What happens at maturity (three scenarios):**

**Scenario 1 — Token price stayed at $1.00 (flat)**
Users get their $500,000 back (in LP tokens they can sell or hold). Your project gets its LP position back plus 12 months of trading fees earned. Net cost to you: zero (you got your tokens back plus yield).

**Scenario 2 — Token dropped to $0.50 (50% drawdown)**
Protection kicks in. Users still get their full $500,000 back (in LP tokens) because the drop is within the 50% protection level. Your project absorbs the difference — but you've retained those holders for 12 months and built deep liquidity.

**Scenario 3 — Token rose to $1.50 (50% gain)**
Users get their $500,000 principal plus upside — their PGT is now worth $750,000. The upside is paid from the reserved tokens. Your project keeps the LP position and earned fees.

> **Note:** The figures below use the same defaults as our internal demo tool: $1 token, $1M liquidity, 50% protection, 15% yield, 12 months.

### What Does It Cost the Project?

Your project contributes **tokens, not cash.** For every dollar users put in, your project matches with approximately 2x in tokens. These tokens go into two places:

1. **LP position** (paired with user USDC to create on-chain liquidity)
2. **Upside reserve** (set aside to pay holders if the token price goes up)

The tokens are locked for the term (e.g., 12 months). At maturity, any unused reserve tokens are returned to your treasury.

The LP position earns DEX trading fees throughout the term — so in a flat or up market, your net cost can be zero or even positive.

### PGT vs Power PGT

Exchequer offers two variants:

**PGT** — Floor + spot-equivalent upside. Simple and clean. If the token goes up 50%, your PGT is worth 50% more. Best for: conviction holders, larger positions, simple narrative.

**Power PGT** — Floor + prize-linked upside. If the token goes up, the upside is pooled and distributed as prizes across 5 tiers, with a top prize up to 10,000× the base unit. Every holder still gets at least the floor. Best for: community campaigns, gamified acquisition, generating excitement.

### Who Uses Exchequer?

Any project with a live ERC-20 token and treasury tokens to allocate. Exchequer is designed for:

- **Projects that have already launched** and want to re-energize holder acquisition without more emissions
- **Projects approaching milestones** (listings, protocol upgrades, partnerships) who want to convert attention into committed holders
- **Any team tired of paying for liquidity** through opaque market-maker deals or CEX listing fees

PGTs are issued as repeatable campaigns — run one quarterly, seasonally, or around specific milestones. Each campaign deepens your on-chain liquidity as a built-in side effect.

---

# PART F: DRAFT CONTENT — LAYER 2 (PRODUCT DEEP DIVE)

---

## How PGTs Work: Step by Step

This section walks through the complete PGT lifecycle using standard example figures ($1 token, $1M total liquidity, 50% downside protection, 15% assumed yield, 12-month term).

### Step 1: Deposits

The process starts with two deposits:

**Users** deposit stablecoins (USDC). In our example: **$500,000 USDC**.

**The project** deposits its own tokens. In our example: **1,000,000 tokens at $1.00 each** (worth $1,000,000).

This is the key ratio: the project contributes roughly **2× the user deposit in token value.** This is what funds both the downside protection and the upside exposure.

### Step 2: Collateral Structure

The combined deposits are split into two components:

**LP Position — $1,000,000**
500,000 tokens + $500,000 USDC are paired into a full-range liquidity position on a DEX (e.g., Uniswap, Camelot). This LP position serves two purposes:
- It underwrites the downside protection (if the token drops, the LP tokens are what users redeem)
- It generates trading fees for the project throughout the term

**Upside Payout Reserve — 500,000 tokens**
The remaining 500,000 tokens are held in reserve, separate from the LP. These are used to pay upside to PGT holders if the token price increases. By keeping upside separate from the LP, PGT holders avoid impermanent loss on their gains — their upside tracks the token price directly.

### Step 3: PGTs Are Issued

Users receive PGTs — ERC-20 tokens representing their position. Each PGT has defined terms:
- **Term:** e.g., 12 months (maturity date: Feb 15, 2027)
- **Protection level:** e.g., 50% (users are protected against drops up to 50%)
- **Starting reference price:** $1.00

The PGTs are transferable and can be held, traded, or used in DeFi during the term.

### Step 4: The LP Position Earns Yield

Throughout the 12-month term, the LP position earns trading fees from DEX activity. In our example, we assume a 15% APR yield.

On a $1,000,000 LP position at 15% APR for 12 months, that's **$150,000 in yield.**

This yield accrues to the project (the Note Issuer), not to PGT holders. It's one of the economic benefits of running a PGT campaign — the project earns real yield on the liquidity it's providing.

### Step 5: Settlement at Maturity

At the maturity date, the PGT settles automatically using a **72-hour volume-weighted average price (VWAP)** — the average trading price of the token over the prior 72 hours, weighted by trading volume. This makes the settlement price resistant to manipulation.

Based on that final price, three things can happen:

---

#### Scenario A: Token Price Flat ($1.00 → $1.00)

**User outcome:** Receives $500,000 in LP tokens (full principal back). Can sell these immediately or hold for continued LP exposure.

**Project outcome:**
- Gets the LP position back (after user redemption): $500,000
- Plus LP yield earned: $150,000
- Total project walkaway: **$1,150,000**
- The 500,000 reserve tokens were unused (no upside to pay) and are returned to treasury.
- **Net cost to project: effectively zero** (got tokens back + earned $150K yield)

---

#### Scenario B: Token Price Dropped 50% ($1.00 → $0.50)

**User outcome:** The 50% drop is within the 50% protection level. User gets **full principal back** — $500,000 in LP tokens. Protection works as promised.

**Project outcome:** The LP position has lost value due to the price drop and impermanent loss. The project absorbs this loss — that's the cost of providing protection. But the project retained those users for 12 months and built deep liquidity during that time.

---

#### Scenario C: Token Price Rose 50% ($1.00 → $1.50)

**User outcome:** Gets principal back plus upside. With 100% participation, the user's position is now worth **$750,000** ($500,000 principal + $250,000 upside). The upside is paid from the reserved tokens.

**Project outcome:**
- LP position has appreciated
- Yield earned during term
- Reserve tokens partially used to pay upside, remainder returned to treasury

---

### The Payoff Chart

The payoff chart below compares three strategies across all possible token prices at maturity:

- **PGT** (blue line): Flat below the protection floor, then rises linearly with the token price. The floor creates a visible "kink" — below it, the user is protected; above it, they participate fully.
- **Standard LP** (gray line): Follows the typical AMM curve — underperforms both holding and PGT in most scenarios due to impermanent loss.
- **Token Holding** (black line): Linear from zero — full upside but also full downside.

The PGT line is strictly better than Standard LP across the entire range, and better than Token Holding for any price below the starting price.

---

## How Power PGTs Work

Power PGTs share the same downside protection structure as regular PGTs. The difference is how upside is delivered.

Instead of each holder receiving proportional upside, the upside is split into:

**Baseline pro-rata share:** A portion of the upside paid equally to all holders.

**Prize pool:** The remaining upside is pooled and distributed by an on-chain drawing across 5 reward tiers.

### The 5 Reward Tiers

| Tier | Multiplier | Description |
|------|-----------|-------------|
| Tier 1 — Jackpot | 10,000× | 1 winner (or few) |
| Tier 2 — Major | 1,000× | ~5-20 winners |
| Tier 3 — Large | 100× | ~50-200 winners |
| Tier 4 — Medium | 10× | ~200-2,500 winners |
| Tier 5 — Starter | 2× | ~500-12,500 winners |

The multipliers are applied to a "unit prize" calculated by dividing the total prize pool by the sum of all (multiplier × winner count) values. This guarantees the prize pool is fully distributed with no remainder.

### Power PGT Example

100,000 notes sold at $100 each. Token goes from $1.00 to $1.80 (+80%).

Total upside generated: $10,000,000 × 80% = **$8,000,000**

**If 100% goes to prize pool:**
- Unit prize = $80
- Tier 1 (Jackpot): 1 winner gets 10,000 × $80 = **$800,000**
- Tier 2: 20 winners get 1,000 × $80 = **$80,000 each**
- Tier 3: 200 winners get 100 × $80 = **$8,000 each**
- Tier 4: 2,500 winners get 10 × $80 = **$800 each**
- Tier 5: 12,500 winners get 2 × $80 = **$160 each**

A $100 note could turn into $800,000. And every single non-winning holder still gets their $100 back at minimum (the floor).

**If 50/50 split (baseline + prize pool):**
- Every holder gets a $40 baseline (their share of $4M)
- Prize pool is $4M — same tier structure, half the prizes
- Jackpot winner: $400,000 on a $100 note
- Non-winners still get $100 + $40 = $140

### When to Use PGT vs Power PGT

| | PGT | Power PGT |
|---|-----|-----------|
| **Upside delivery** | Proportional to each holder | Prize pool + optional baseline |
| **Best for** | Conviction holders, larger tickets, institutions | Community campaigns, viral acquisition, smaller tickets |
| **Narrative** | "Floor + growth" — simple and clean | "Floor + lottery" — exciting and shareable |
| **Complexity** | Lower | Higher (tiers, drawing, baseline split) |
| **Marketing hook** | "Protected exposure to [TOKEN]" | "Win up to 10,000× with principal protection" |

---

## The Project Dashboard View

The Project Dashboard view frames everything from the project's perspective. Here's what it shows for a standard PGT with $1M total liquidity and a flat token price:

**Total onchain liquidity secured:** $1,000,000 for 12 months

**Project costs:**
- 1,000,000 tokens locked in LP for 12 months
- $0 paid as principal protection (token didn't drop)

**Final balances at maturity:**
- Note Issuer (project): $1,150,000 total walkaway (principal $1,000,000 + yield $150,000)
- Note Holder (user): $500,000 total walkaway (principal $500,000 + yield $0)

This framing is critical for BD conversations: the project sees exactly what it commits, what it costs in different scenarios, and what it gets back.

---

## Settlement Mechanics

All PGTs settle at a fixed maturity date using a **72-hour VWAP** (volume-weighted average price) of the token. This means the settlement price is the average trading price over the prior 72 hours, weighted by volume — making it much harder to manipulate than a single spot price.

**Settlement assets:**
- **Downside protection** pays out in LP tokens. These LP tokens represent a share of the liquidity pool and can be immediately sold (burned for the underlying tokens + stablecoins) or held.
- **Upside** pays out from the reserved token tranche.

**After settlement, users can:**
1. Hold the LP tokens (continue earning trading fees)
2. Burn the LP tokens to receive the underlying assets (tokens + stablecoins)

**Rollover option:** Projects can offer holders the option to roll into a new PGT series with fresh terms (new maturity, potentially different protection level). Holders who decline simply redeem under the standard mechanics.

---

# PART G: DEMO INTEGRATION NOTES

## Screenshots to Capture from Internal Demo (V2, PGT tab)

1. **Flowchart view at default values** ($1 token, $1M liquidity, 50% protection, 15% yield, 12 months, flat price)
   - Shows: Deposits → LP + Reserve → PGTs Issued → Yield → Settlement
   - Use for: Layer 2, Step-by-step walkthrough section

2. **Project Dashboard at default values** (flat price)
   - Shows: Total liquidity secured, project costs, final balances
   - Use for: Layer 2, Project Dashboard section

3. **Flowchart with token at $0.50** (50% drop)
   - Shows: Protection paying out, user getting principal back
   - Use for: Layer 2, Scenario B

4. **Flowchart with token at $1.50** (50% gain)
   - Shows: Upside being paid from reserve
   - Use for: Layer 2, Scenario C

5. **Payoff chart** (PGT vs Standard LP vs Token Holding)
   - Shows: The value prop visually
   - Use for: Layer 1 (simplified) and Layer 2 (detailed)

## Embedding Strategy

**For GitBook:** Embed screenshots from the internal demo tool (do not link to v2.exchequer.fi publicly).

**Fallback:** Static screenshots with prominent "Try the interactive demo →" link buttons.

**Consistency rule:** All numerical examples in the docs should use the same defaults as the demo ($1 starting price, $1M total liquidity, 50% downside protection, 15% assumed yield, 12 months) so readers can cross-reference.
