# Power Protected Growth Token (Power PGT)

## TL;DR

A Power PGT has the same downside protection floor as a regular PGT (up to 75%), but delivers upside differently: instead of linear participation, gains are split between a **baseline payout to all holders** and a **prize pool distributed by on-chain drawing** across 5 reward tiers. The top tier can pay up to **10,000× the base prize**. Every holder still gets at least the protection floor.

Power PGTs are designed for community campaigns, attention-driven acquisition, and moments where gamified upside converts new users that a standard floor-plus-spot offer wouldn't reach.

---

## How a Power PGT Works

The structure is identical to a regular PGT through the first four steps — user deposits, project matches with 2× tokens, LP position + reserve are created, LP earns yield during the term. The difference is entirely in **how upside is distributed at maturity**.

### Same as PGT:
1. Users deposit USDC. Project matches with tokens (2× user value).
2. Assets split into LP Position (floor) + Upside Reserve.
3. Users receive Power PGT tokens (ERC-20).
4. LP earns yield for the full term.

### Different from PGT — Upside Distribution:

At maturity, if the token went up, the upside is split into two pieces:

**Baseline pro-rata upside** — a share paid equally to every holder, proportional to their holdings. This ensures non-winners still benefit from appreciation beyond just the floor.

**Prize pool** — the remaining share is pooled and distributed by a provably fair on-chain drawing across 5 reward tiers, with multipliers ranging from 2× to 10,000× the base unit prize.

The **issuer configures the split** — anywhere from 100% prize pool (maximum jackpot energy) to 50/50 or any other ratio.

---

## The 5-Tier Reward Structure

When the token appreciates, the prize pool is divided across 5 tiers. Each tier has a multiplier and a number of winners:

| Tier | Name | Multiplier | Example Winners |
|---|---|---|---|
| 1 | Jackpot | 10,000× | 1 |
| 2 | Major | 1,000× | 20 |
| 3 | Large | 100× | 200 |
| 4 | Medium | 10× | 2,500 |
| 5 | Starter | 2× | 12,500 |

The protocol computes a **unit prize** (u) such that all tier payouts sum exactly to the prize pool:

**u = Prize Pool ÷ (sum of all tiers' winners × multipliers)**

Each winner in tier *i* receives: **multiplier × u**

The issuer configures the exact tier structure — multipliers, winner counts, and weighting rules are all adjustable.

---

## Numerical Walkthrough

### Setup

| Parameter | Value |
|---|---|
| Notes sold | 100,000 |
| Price per note | 100 USDC |
| Total notional | $10,000,000 |
| Token start price | $1.00 |
| Token end price | $1.80 (+80%) |
| Protection floor | 50% |
| Participation | 100% |

**Total upside = $10,000,000 × 80% = $8,000,000**

### Option A: 100% Prize Pool (Maximum Jackpot)

All $8,000,000 goes to the prize pool. No baseline payout.

Unit prize = $8,000,000 ÷ 100,000 = **$80**

| Tier | Multiplier | Per Winner | Winners | Tier Total |
|---|---|---|---|---|
| 1 — Jackpot | 10,000× | **$800,000** | 1 | $800,000 |
| 2 — Major | 1,000× | **$80,000** | 20 | $1,600,000 |
| 3 — Large | 100× | **$8,000** | 200 | $1,600,000 |
| 4 — Medium | 10× | **$800** | 2,500 | $2,000,000 |
| 5 — Starter | 2× | **$160** | 12,500 | $2,000,000 |
| | | | **Total** | **$8,000,000** ✓ |

A jackpot winner turns a **$100 note into $800,000** — that's the 10,000× headline, scaled by the 80% rally.

### Option B: 50/50 Split (Everyone Gets Something)

$4,000,000 → prize pool / $4,000,000 → baseline to everyone

**Baseline per note:** $4,000,000 ÷ 100,000 = **$40 per note** (on top of the protection floor)

**Prize pool unit prize:** $4,000,000 ÷ 100,000 = **$40**

| Tier | Multiplier | Per Winner | Winners | Tier Total |
|---|---|---|---|---|
| 1 — Jackpot | 10,000× | **$400,000** | 1 | $400,000 |
| 2 — Major | 1,000× | **$40,000** | 20 | $800,000 |
| 3 — Large | 100× | **$4,000** | 200 | $800,000 |
| 4 — Medium | 10× | **$400** | 2,500 | $1,000,000 |
| 5 — Starter | 2× | **$80** | 12,500 | $1,000,000 |
| | | | **Total** | **$4,000,000** ✓ |

Every non-winner still gets **$100 principal + $40 baseline = $140** on their $100 note. The jackpot winner gets **$400,000 + $40 baseline = $400,040**.

---

## Downside Scenarios (Same as PGT)

The downside protection works identically to a standard PGT:

**Token drops within the protection floor (e.g., -40% with 50% floor):**
Every holder receives LP tokens worth their original principal. Full protection. No prize pool (no upside to distribute).

**Token drops beyond the protection floor (e.g., -60% with 50% floor):**
Protection is capped at 50%. Holders receive LP tokens per the protection schedule and absorb losses beyond the floor.

**Token drops beyond 75% (maximum possible floor):**
Even the highest protection setting can't prevent losses beyond a 75% drop. But holders are still strictly better off than unprotected spot.

---

## When to Use Power PGT vs. PGT

| | PGT | Power PGT |
|---|---|---|
| **Upside delivery** | Linear, proportional | Jackpot-style drawing + optional baseline |
| **Best for** | Conviction holders, funds, larger tickets | Community campaigns, smaller tickets, viral moments |
| **Narrative** | "Floor + clean upside" | "Floor + chance to win big" |
| **Complexity** | Simple | Moderate (prize tiers need explanation) |
| **When to use** | Roadmap milestones, institutional-facing campaigns | Seasonal events, attention-driven growth, reactivating dormant holders |

Projects can alternate between PGT and Power PGT across campaigns based on market conditions and goals.

---

## Configurable Parameters (What Projects Control)

Everything from PGT, plus:

- **Prize pool share (s)** — what percentage of upside goes to the prize pool vs. baseline
- **Reward tiers** — multipliers, number of winners per tier
- **Tier weights** — rules for how winners are selected (e.g., stake-weighted, time-weighted)
- **Randomness source** — provably fair on-chain randomness for the drawing

---

## Formal Payoff Logic

Let **P₀** = reference price, **Pₘ** = 72-hour VWAP at maturity, **s** = prize-pool share.

**If token is up or flat (Pₘ ≥ P₀):**
- Baseline payout per holder: (1 − s) × Participation × Notional × (Pₘ − P₀) / P₀
- Prize pool: s × Participation × Notional × (Pₘ − P₀) / P₀ × TotalNotional
- Prize winners receive TierMultiplier × UnitPrize (capped by pool)

**If token is down, drawdown ≤ protection %:**
Full principal protection in LP tokens. No upside, no prize pool.

**If token is down, drawdown > protection %:**
Capped protection. Losses beyond the floor pass through.

---

## Risks

All PGT risks apply, plus:

- **Prize variability:** Prize outcomes are probabilistic. Expected value equals the configured share of upside, but individual results vary widely. The 10,000× top-tier payout requires a sufficiently large prize pool (driven by total notional × price appreciation).
- **Weighting fairness:** The drawing uses published, auditable rules and provably fair randomness. Users should understand eligibility criteria and weighting before purchasing.

---

## Next

> [Protocol Mechanics — collateralization, settlement, and architecture](/protocol-mechanics)
> [Research & Whitepapers](/research/whitepapers)
