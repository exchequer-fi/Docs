# Power Protected Growth Token (Power PGT)

## **Summary (TL;DR)**

* Fixed-term ERC-20 Exchequer Note with a downside floor (max 75% drawdown) and prize-linked upside.
* At maturity, upside (if any) is split between (i) a baseline pro-rata upside paid to all holders and (ii) a configurable prize pool distributed by a provably fair on-chain drawing across 5 reward tiers.
* Top tier can pay up to a 10,000× tier multiplier of the unit prize (see Reward Tiers); every holder still receives at least the protection floor.
* Protection settles in LP tokens at maturity using a 72-hour VWAP to determine settlement amounts.
* Designed for already-launched tokens to run repeatable, time-boxed campaigns—think TGE magic without the sell pressure—while compounding deep, stable on-chain DEX liquidity as a deliberate, cumulative outcome.

***

### What it is

A Power PGT gives buyers a defined principal floor at maturity (capped at a 75% drawdown) and converts upside into two pieces: a baseline pro-rata upside for all holders and a jackpot-style prize pool paid to randomly selected winners across 5 tiers, with the highest tier using a 10,000× multiplier of the series’ unit prize.&#x20;

Issuance, collateralization, and drawings are on-chain and auditable. For established tokens, Power PGTs add event energy and net-new user acquisition without perpetual emissions, while each campaign deepens and stabilizes on-chain DEX liquidity.

#### **Who it’s for**

* **Issuers (projects & treasuries)**:&#x20;
  * Best when the goal is event energy and net-new user acquisition
  * Galvanize dormant audiences while keeping a capped, budgetable risk profile. Each cycle still compounds deep, stable on-chain DEX liquidity.
* **Buyers (allocators & users):**&#x20;
  * Participants who value a clear floor plus lottery-like upside.&#x20;
  * Great for community campaigns, smaller tickets, and attention-driven cohorts that respond to jackpots—while still protecting principal at maturity.

***

### Key Properties

* **Term:** Fixed maturity date (e.g., 3–12 months). Protection applies **only at maturity**.
* **Protection:** Partial, up to **75% drawdown**. If the token is down **≤ 75%** at maturity, the holder redeems **LP tokens worth the original principal**. If the drawdown **exceeds 75%**, the holder bears losses beyond the floor but is still **strictly better off than unprotected spot** over the same move.
* **Upside:** Split at maturity:
  * Baseline pro-rata upside to all holders, and
  * Prize pool upside distributed by on-chain drawing across 5 reward tiers (top tier uses a 10,000× multiplier of the unit prize).
* **Settlement asset:**&#x20;
  * Floor pays in LP tokens backed by on-chain collateral (holder may withdraw to constituents).
  * Baseline upside and prize payouts settle in TOKEN.
* **Price measure:** **72‑hour VWAP** ending at the maturity timestamp to reduce manipulation risk.
* **Collateral structure:** Two token tranches from treasury: **(A) LP tranche** to pair with buyer USDC, **(B) Reserve tranche** to fund upside.
* **Liquidity outcome:** Each note adds to deep, stable on-chain DEX liquidity as a designed, cumulative consequence of the collateral plan.

***

### Creation Mechanism

1. **Issue Notes (ERC‑20).** Project publishes terms and sells Power PGT to buyers.
2. **Form LP** for the floor. Pair buyer stablecoins/ETH with treasury tokens to create project-owned LP that funds the floor (on-chain escrow).
3. **Define upside split.** Specify the prize-pool shares (0–100%) of upside accrual and the baseline share (1−s); set reward tiers, multipliers, winner counts, and weighting rules.
4. **Post Collateral.** LP tokens are escrowed on‑chain to **back the floor**.
5. **Accrue Rewards during the term.** As price appreciation accumulates relative to the reference, the protocol accounts for baseline upside and allocates s·(upside) to the prize pool per the published rules.
6. **Settle at Maturity.** Use the 72-hour VWAP to determine drawdown (for floor) and realized upside (for baseline + prize pool). Run the on-chain drawing and pay winners; all holders receive at least the floor.

***

### Configurable Parameters (Issuer “knobs”)

* **Term** (date/time)
* **Protection floor** (any value **up to** the 75% drawdown limit)
* **Upside split: prize-pool share s and baseline share (1−s)**
* **Reward tiers: multipliers, number of winners per tier, tier weights**
* **Participation/cap rules for total upside accrual**
* AMM/pool selection for LP tranche

***

### Payoff Logic at Maturity

Let P₀ be the reference price (at issuance or per terms) and Pₘ the 72-hour VWAP immediately prior to maturity.

**A) Token up or flat (Pm ≥ P0)**

1. Baseline pro-rata upside: Each holder receives (1−s) × UpsideParticipation × Notional × max(0, (Pₘ−P₀)/P₀), allocated pro-rata.
2. Prize pool: s × UpsideParticipation × Notional × max(0, (Pₘ−P₀)/P₀) × (TotalNotional) funds the pool. The on-chain drawing assigns winners across 5 tiers and pays each winner TierMultiplier × UnitPrize (see Reward Tiers; total paid is capped by the pool).
3. Floor is not used (token did not draw down beyond the floor).

B) Token down, drawdown **≤ 75%**

* **Full principal protection.** Holder redeems **LP tokens worth the original principal** (paid in LP), regardless of the exact LP value.

C) Token down, drawdown **> 75%**

* **Protection capped.** Holder redeems **LP tokens per the protection schedule**; any loss beyond the 75% floor is borne by the holder. Outcome remains **strictly better than unprotected spot** over the same move.

> Protection reassigns tail risk from buyer to issuer and is funded by the escrowed LP collateral. It does not create free money.

***

### Reward Tiers (5-tier structure with 10,000× top multiplier)

Tier multipliers scale a “unit prize” u so that the sum of all tier payouts does not exceed the prize pool. Let nᵢ be the number of winners and mᵢ the multiplier for tier i. The protocol computes:

u = PrizePool / (Σᵢ nᵢ·mᵢ)

Each winner in tier i receives payout = mᵢ · u (paid in the series’ payout asset).\
Example multipliers and counts (illustrative; issuers configure these):

• Tier 1 — Jackpot: m₁ = 10,000×, n₁ = 1\
• Tier 2 — Major: m₂ = 1,000×, n₂ = 5\
• Tier 3 — Large: m₃ = 100×, n₃ = 50\
• Tier 4 — Medium: m₄ = 10×, n₄ = 200\
• Tier 5 — Starter: m₅ = 2×, n₅ = 500

### Numerical Walkthrough (illustrative)

#### Setup

* Notes sold: **100,000**
* Price per note: **100 USDC**
* Token starts at **$1.00** and ends at **$1.80** at maturity (**+80%**)
* Participation: **100%**
* Floor: **50%** (you’re protected against drawdowns up to 75%)
* Five reward tiers (more than one winner at every tier):
  * Tier 1 (Jackpot): **1** winner × **10,000×**
  * Tier 2 (Major): **20** winners × **1,000×**
  * Tier 3 (Large): **200** winners × **100×**
  * Tier 4 (Medium): **2,500** winners × **10×**
  * Tier 5 (Starter): **12,500** winners × **2×**

Total upside created by the rally

* Total notional = 100,000 notes × 100 USDC = **10,000,000 USDC**
* Upside from price move = **10,000,000 × 80% = 8,000,000 USDC**

#### Option A — 100% prize pool (no baseline payout)

All of the **8,000,000 USDC** goes to the prize pool.

* Because the tier multipliers and winner counts add up neatly, the **base prize** works out to **80 USDC**.
* Each tier pays a multiple of that base prize:

Per-winner prizes

* **Tier 1:** 10,000 × 80 = **800,000 USDC** (1 winner)
* **Tier 2:** 1,000 × 80 = **80,000 USDC** (20 winners)
* **Tier 3:** 100 × 80 = **8,000 USDC** (200 winners)
* **Tier 4:** 10 × 80 = **800 USDC** (2,500 winners)
* **Tier 5:** 2 × 80 = **160 USDC** (12,500 winners)

Sanity check: those payouts add up to the full **8,000,000 USDC** pool.\
Key takeaway: a jackpot winner turns a **100 USDC** note into **800,000 USDC** (that’s the **10,000×** headline, scaled by the **+80%** rally).

#### Option B — 50% prize pool, 50% baseline (everyone gets something)

Split the **8,000,000 USDC** upside evenly:

* **4,000,000 USDC** → prize pool
* **4,000,000 USDC** → baseline paid to **everyone**

Baseline (everyone):

* 4,000,000 / 100,000 notes = **40 USDC per note**

Prize pool:

* New **base prize** is **40 USDC** (half of Option A because the pool is half as big)

Per-winner prizes

* **Tier 1:** 10,000 × 40 = **400,000 USDC** (1 winner)
* **Tier 2:** 1,000 × 40 = **40,000 USDC** (20 winners)
* **Tier 3:** 100 × 40 = **4,000 USDC** (200 winners)
* **Tier 4:** 10 × 40 = **400 USDC** (2,500 winners)
* **Tier 5:** 2 × 40 = **80 USDC** (12,500 winners)

Sanity check: those prizes total **4,000,000 USDC**, and the other **4,000,000 USDC** is the **40 USDC** baseline to every note.\
Key takeaway: the jackpot still maps cleanly to the **10,000×** headline scaled by the **+80%** rally and **50%** pool share → **400,000 USDC** on a 100 USDC note, while non-winners still collect the **40 USDC** baseline.

***

### Risks & Considerations

* Residual tail risk: Losses beyond the 75% floor are borne by the holder.
* Prize variability: Prize outcomes are stochastic; expected value equals the configured share s of upside, but individual results vary. Realizing the full 10,000× top-tier payout requires a sufficiently large prize pool as shown above.
* Weighting & fairness: Drawing uses published, auditable rules (e.g., stake/time weighting) and a provably fair randomness source; ensure users understand eligibility criteria.
* Smart-contract risk: Contracts are immutable/audited, but risk ≠ 0.
* Liquidity & slippage: AMM/pool depth affects realized unwind when burning LP.

