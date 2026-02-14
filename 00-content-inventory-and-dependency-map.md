# Content Inventory & Dependency Map

## Current Page Structure (7 pages)

### Page 1: Exchequer Protocol Overview (Home)
**What it tries to explain:** What Exchequer is, what PGTs are, why projects should care, high-level how it works
**Prior knowledge assumed:** LP-derivatives, LP forwards, LP calls/puts, structured-note design, AMM mechanics, emissions, TGE
**Undefined terms used:** "LP-derivatives (LP forwards, LP calls/puts)", "structured-note design", "constant-product AMM", "emissions", "full-range LP"
**Uses specific numbers?** One illustrative scenario but vague (no dollar amounts, just "6-month Power PGT with 50% floor")
**Layer assignment:** Content splits across Layer 1 (intro narrative) and Layer 3 (AMM-agnostic, LP mechanics)
**Key problem:** Paragraph 3 drops "LP-derivatives (LP forwards, LP calls/puts)" with zero prior definition. This is where most readers lose confidence.

### Page 2: Protocol Overview
**What it tries to explain:** Architecture overview
**Prior knowledge assumed:** General crypto/smart contract knowledge
**Undefined terms used:** "Liquidity Notes" (not defined here)
**Uses specific numbers?** No
**Layer assignment:** Layer 3 (technical architecture)
**Key problem:** Extremely sparse placeholder content. Adds almost nothing. "Key Features" and "Architecture" sections are just bullet-point shells.

### Page 3: Downside Protection
**What it tries to explain:** What downside protection means, how it's collateralized, the 75% cap, walkthrough example
**Prior knowledge assumed:** LP tokens, constant-product AMM rebalancing, what "collateral" means in this context
**Undefined terms used:** "cash leg", "token leg", "full-range LP position", "constant-product arbitrage"
**Uses specific numbers?** Yes — walkthrough with 100 USDC + 100 TOKEN. But this is WRONG for PGT — project actually contributes 2x (200 TOKEN total: 100 in LP + 100 in reserve). This page only shows the LP portion.
**Layer assignment:** Splits — the "what it means" belongs in Layer 2 (within PGT context), the collateralization mechanics belong in Layer 3
**Key problem:** Explains downside protection as a standalone concept BEFORE the reader knows what a PGT is in detail. This creates faulty mental models. The walkthrough uses 1:1 ratio which contradicts the actual PGT structure (2x project contribution).

### Page 4: Exchequer Note(s)
**What it tries to explain:** The two note types (PGT and Power PGT) side by side
**Prior knowledge assumed:** Everything from pages 1-3, plus "LP rebalancing", "zero coupon", "participation/cap"
**Undefined terms used:** "participation rate", "upside cap", "prize-linked mechanics", "stake/time weighting"
**Uses specific numbers?** No
**Layer assignment:** Layer 2 (product overview), but duplicates content from the Note Types pages
**Key problem:** This is a duplicate summary that exists between the conceptual pages and the detailed Note Types pages. Readers encounter PGT/Power PGT descriptions here AND on the dedicated pages — creating confusion about which is the "real" explanation.

### Page 5: Redemption
**What it tries to explain:** How settlement works at maturity (72-hour VWAP, three scenarios, rollover)
**Prior knowledge assumed:** Everything from pages 1-4, LP tokens, VWAP
**Undefined terms used:** "72-hour VWAP", "protection schedule"
**Uses specific numbers?** No
**Layer assignment:** Layer 2 (settlement as part of PGT lifecycle) and Layer 3 (VWAP oracle mechanics)
**Key problem:** Settlement is explained before the reader has seen a complete PGT walkthrough with numbers. Abstract without context.

### Page 6: Protected Growth Token (PGT) — Note Types
**What it tries to explain:** Full PGT specification — TL;DR, what it is, who it's for, properties, creation mechanism, payoff logic, numerical walkthrough
**Prior knowledge assumed:** Everything prior, plus "Tranche A / Tranche B", "participation rate", "zero coupon", "IL"
**Undefined terms used:** Some — but this page does the best job of being self-contained
**Uses specific numbers?** Yes — detailed walkthrough with 100 USDC, 200 TOKEN (correctly showing 2x!), four price scenarios
**Layer assignment:** Layer 2 (the core of the PGT deep dive)
**Key problem:** This is actually the BEST page in the docs, but it's buried 6 pages deep. By the time readers get here, they've already built faulty mental models from the earlier pages. Also, the collateral structure note ("per 100 USDC... total on-chain collateral ≈ $300 notional") appears in the TL;DR but conflicts with the 2-tranche system description. The walkthrough correctly shows 200 TOKEN but earlier pages show 100.

### Page 7: Power Protected Growth Token (Power PGT) — Note Types
**What it tries to explain:** Full Power PGT spec with prize-pool mechanics and reward tiers
**Prior knowledge assumed:** Everything from PGT page, plus probability/lottery concepts
**Undefined terms used:** "unit prize u", tier multiplier notation
**Uses specific numbers?** Yes — detailed walkthrough with 100,000 notes, 100 USDC each, 80% price increase, two options (100% prize pool vs 50/50 split)
**Layer assignment:** Layer 2
**Key problem:** Well-structured but long. The math for reward tiers may overwhelm non-technical readers. Would benefit from a simpler "what you need to know" summary before the full specification.

### Page 8: Whitepapers
**What it tries to explain:** Links to Jan's 4 foundational papers
**Prior knowledge assumed:** Academic finance, Black-Scholes, AMM theory
**Uses specific numbers?** N/A
**Layer assignment:** Layer 4
**Key problem:** None — this is fine as-is.

---

## Dependency Map (what you need to know BEFORE you can understand X)

```
Understanding a PGT (the core goal)
├── What problem it solves (token holder churn, sell pressure) → NO dependencies
├── What the user gets (floor + upside) → NO dependencies  
├── What the project contributes (2x tokens) → needs "LP position" concept
│   ├── LP position = tokens + stablecoins paired on DEX → needs "DEX/AMM" concept
│   │   └── DEX/AMM = automated exchange → general crypto knowledge (assumed)
│   └── Why 2x? Because half goes to LP (floor), half to reserve (upside)
├── How downside protection works → needs LP position concept + price change concept
│   └── LP rebalancing under price drop → needs constant-product AMM understanding
├── How upside works → needs "reserve tranche" concept
│   └── Reserve tokens deliver spot-equivalent gain → needs basic options intuition
└── Settlement at maturity → needs VWAP concept
    └── 72-hour VWAP = average price over 3 days → minimal dependency
```

**Critical finding:** The dependency chain is actually NOT deep. A reader who understands "DEX/AMM" (assumed for the target audience) can understand everything else IF concepts are introduced in the right order:

1. The problem (no dependencies)
2. The solution in plain terms (no dependencies)  
3. What the project puts in (needs only "LP position on a DEX")
4. What the user gets back (needs only step 3)
5. How protection works mechanically (needs steps 3-4)
6. Settlement details (needs steps 3-5)

**The current docs violate this order** by jumping to LP-derivatives, structured notes, and collateral mechanics in paragraph 3 of the introduction.

---

## Contradictions Found

1. **The 2x contribution:** Page 3 (Downside Protection) walkthrough shows 100 USDC + 100 TOKEN (1:1). Page 6 (PGT) correctly shows 100 USDC + 200 TOKEN (1:2). The demo shows $500K USDC + 1,000,000 tokens ($1M value = 2x). These need to be consistent everywhere.

2. **"Exchequer Notes" vs "PGT":** The branding oscillates. Sometimes it's "Exchequer Notes" as the umbrella, sometimes PGT is used as the primary product name. The demo uses "Protected Growth Tokens (PGT)" as the page title. Recommend: lead with PGT everywhere, mention "Exchequer Notes" as the formal asset class name once.

3. **The "Protocol Overview" page:** Contains almost no content and breaks the reading flow. Should be removed or merged.

4. **Duplicate explanations:** PGT/Power PGT are explained on the "Exchequer Note(s)" page AND on their dedicated Note Types pages. Pick one location.

---

## Recommended New Structure

```
SIDEBAR:
├── Welcome to Exchequer          ← Layer 1 (NEW - replaces current overview)
├── Protected Growth Tokens (PGT) ← Layer 2 (rewrite of Note Types > PGT)
├── Power PGT                     ← Layer 2 (rewrite of Note Types > Power PGT)  
├── Protocol Mechanics             ← Layer 3 (consolidates: Downside Protection + Redemption + current Protocol Overview)
└── Research & Whitepapers         ← Layer 4 (unchanged)
```

Pages REMOVED:
- "Protocol Overview" (placeholder, no real content)
- "Exchequer Note(s)" (duplicate of the Note Types pages)
- "Downside Protection" as standalone (merged into Layer 2 PGT context + Layer 3 mechanics)
- "Redemption" as standalone (merged into Layer 2 PGT lifecycle + Layer 3 mechanics)
