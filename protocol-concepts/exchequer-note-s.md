# Exchequer Note(s)

Exchequer supports two note types. Both are ERC-20s with on-chain, transparent collateral and a downside protection floor at maturity.  They differ in how upside is delivered. \
\
Any already-launched token can issue these Exchequer Notes to run repeatable acquisition campaigns—think TGE magic without the sell pressure—while compounding deep, stable on-chain DEX liquidity as a designed consequence.

## 1) Protected Growth Token (PGT)

A PGT delivers a **protection floor (max 75%)** plus spot-equivalent **upside** during the term.  Returns (if any) are realized at **settlement** via the defined participation.

#### Creation Mechanism

1. **Issue Notes** — Project sells PGT to buyers (ERC-20).
2. **Collateralize & Replicate** — Proceeds and treasury assets are posted on-chain to (a) **fund the floor**, and (b) **replicate spot-like upside** (no LP rebalancing).
3. **LP** — Project forms project-owned LP as part of the collateral plan.
4. **Settle** — At maturity, buyers receive **the floor or the specified upside payoff**, whichever is greater.

#### Features

* **Partial downside protection (≤75% drawdown floor)** settling in LP tokens.
* **No yield (zero coupon)**; simple buyer outcome at settlement.
* **No IL on the upside**—tracks token appreciation per participation/cap terms.
* **AMM-agnostic**; works alongside any major DEX without requiring emissions.
* **Issuer levers:** term, floor level, participation rate, optional upside cap.

**Typical fit:** **New-user acquisition** and conviction holders who want **clean “floor + upside”** instead of yield; ideal when minimizing complexity and **avoiding IL** is paramount.

## 2) Power Protected Growth Token (Power PGT)

A Power PGT delivers a protection floor (max 75%) plus jackpot-style upside distribution using prize-linked mechanics. If the token appreciates, a defined share of upside accrual is pooled and distributed to winners by an on-chain, provably fair drawing at settlement; all holders receive at least the protection floor.

#### Creation Mechanism

1. **Issue Notes** — Project sells Power PGT to buyers (ERC-20).
2. **Form LP** — Proceeds and treasury assets are posted on-chain to (a) fund the floor, and (b) define the upside accrual that feeds a prize pool per program rules.
3. **Prize Pool Accrual** — Throughout the term, the protocol allocates a specified share of upside accrual into the on-chain prize pool.
4. **Settle** — At maturity, every holder receives at least the floor; the prize pool is distributed to winners via a transparent, on-chain drawing..

#### Features

* Partial downside protection (≤75% drawdown floor) settling in LP tokens.
* Jackpot-style upside distribution adds event energy without long-tail emissions.
* Designed to galvanize dormant audiences while compounding stable on-chain DEX liquidity across campaigns.
* Transparent, permissionless construction (no CEX/MM retainers or token loans).
* Issuer levers: term, floor level, prize-pool share, weighting rules, participation/cap.

**Typical fit:** User-acquisition campaigns, roadmap moments, or seasonal programs where gamified upside with principal protection converts new cohorts.
