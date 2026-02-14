# Terminology Audit

## Terms and Where They're First Defined in the New Structure

| Term | First Defined | Page | Notes |
|---|---|---|---|
| PGT / Protected Growth Token | Paragraph 1 | Welcome | Plain language: "gives holders downside protection and upside exposure" |
| Downside protection / floor | "The Problem" section | Welcome | Explained as "subsidize the downside risk" before any mechanics |
| Protection percentage (up to 75%) | Step 1 | Welcome | "You choose: how much downside protection (up to 75%)" |
| 2× project contribution | Step 2 | Welcome | "The project contributes its own tokens — specifically, 2× the user's deposit value" |
| LP / Liquidity Pool | Step 2 | Welcome | "Half goes into a liquidity pool (which funds the downside protection)" |
| Reserve / Upside Payout Reserve | Step 2 | Welcome | "The other half is set aside as a reserve to pay upside" |
| LP tokens | Step 4 (settlement) | Welcome | "they get back their principal in LP tokens" |
| Maturity / Term | Step 1 | Welcome | "how long the term lasts" |
| Power PGT | "Two Product Types" section | Welcome | "jackpot-style upside" — no mechanics yet |
| Tranche A / Tranche B | Step 2 heading | PGT Deep Dive | First detailed explanation with dollar amounts |
| Full-range position | Step 2 table | PGT Deep Dive | Mentioned in context of LP creation |
| 72-hour VWAP | Step 5 intro | PGT Deep Dive | "measured by a 72-hour volume-weighted average price to resist manipulation" |
| Participation rate | Key Properties table | PGT Deep Dive | "how much of the token appreciation users get" |
| Upside cap | Key Properties table | PGT Deep Dive | "maximum upside per PGT" |
| Zero coupon | Key Properties table | PGT Deep Dive | "No yield during term" — explained in plain terms |
| Unit prize (u) | 5-Tier section | Power PGT Deep Dive | Full formula provided |
| Tier multiplier | 5-Tier section | Power PGT Deep Dive | Table with examples |
| Prize-pool share (s) | Upside Distribution section | Power PGT Deep Dive | "issuer configures the split" |
| Constant-product AMM | LP rebalancing section | Protocol Mechanics | Only used in Layer 3, with explanation |
| Impermanent loss (IL) | LP rebalancing section | Protocol Mechanics | Only in Layer 3, explained as "rebalancing drag" |
| LP-derivatives | N/A | Whitepapers only | Removed from intro entirely — only in research context |
| LP forwards | N/A | Whitepapers only | Removed from intro entirely |
| LP calls/puts | N/A | Whitepapers only | Removed from intro entirely |
| Structured-note design | N/A | Whitepapers only | Removed from intro entirely |
| Rollover | Settlement section | PGT Deep Dive | Brief mention; detailed in Protocol Mechanics |

## Terms REMOVED from Early Pages (Previously Causing Confusion)

These terms appeared in the current docs' introduction or early pages without definition. In the new structure, they've been either:
- Moved to Layer 3/4 where readers have context, or
- Replaced with plain language

| Removed Term | Was In | Replaced With |
|---|---|---|
| "LP-derivatives (LP forwards, LP calls/puts)" | Intro paragraph 3 | Removed entirely from intro. Only in Whitepapers. |
| "structured-note design" | Intro paragraph 3 | Removed from intro. Referenced in Whitepapers. |
| "cash leg" / "token leg" | Downside Protection page | "Users deposit USDC. Project contributes tokens." |
| "constant-product arbitrage" | Downside Protection walkthrough | "The LP position automatically rebalances" (Layer 3 only) |
| "full-range LP position" | Multiple early pages | "liquidity position on a DEX" in intro; "full-range" in PGT Deep Dive |
| "emissions" | Intro, multiple pages | "token rewards" or "inflationary incentives" where needed; mostly just removed |
| "Exchequer Notes" as primary term | Current intro | "Protected Growth Tokens (PGTs)" is the lead term everywhere |
| "risk-transfer contract" | Downside Protection page | Removed — too abstract for early pages |

## Key Consistency Rules

1. **Always "PGT" first, "Exchequer Note" second.** PGT is the product name people will remember. "Exchequer Notes" is the formal asset class — mention it once in the intro, then use PGT everywhere.

2. **Always show the 2× contribution.** Never describe a PGT without mentioning that the project contributes 2× the user amount. This was the #1 BD confusion point.

3. **Always explain protection IN CONTEXT of PGT.** Never as a standalone concept. The current standalone "Downside Protection" page caused readers to build mental models before they understood the full product.

4. **LP tokens as settlement asset — always explain what the user can DO with them.** Don't just say "settles in LP tokens" — add "which can be held or burned for the underlying tokens."

5. **72-hour VWAP — always include "to resist manipulation."** The reason matters more than the mechanism for most readers.
