# Protected Growth Tokens (PGT)

## TL;DR

A PGT is a fixed-term ERC-20 token with a downside floor (up to 75% protection) and spot-equivalent upside. No yield during the term — all value settles at maturity. Upside is delivered from a reserved token tranche (not from LP rebalancing), so there's no impermanent loss on the upside for holders.

---

## How a PGT Works (Step by Step)

We'll walk through the full lifecycle using the following example values: a $1.00 project token, $1M total liquidity, 50% downside protection, 15% assumed yield, and a 12-month term.

### Step 1: User & Project Deposits

Users deposit a designated token (e.g., ETH or a stablecoin — chosen by the project). The project matches with its own tokens worth **2× the user deposit**.

| Participant | Deposit | Value |
|---|---|---|
| Users deposit | $500,000 (in the designated deposit token) | $500,000 |
| Project contributes | 1,000,000 tokens @ $1.00 | $1,000,000 |
| **Total raised** | | **$1,500,000 in assets** |

The project contributes twice the user amount. This is the core economic mechanism — the project is subsidizing the downside with its own tokens.

![PGT Flowchart — User & Project Deposits](/.gitbook/assets/pgt-flowchart-deposits.png)
*The deposit step: users provide the designated deposit token, the project matches with 2× the value in its own tokens.*

### Step 2: Collateral Is Split Into Two Pieces

The combined assets are split into two tranches with distinct jobs:

**Tranche A — LP Position (funds the floor)**
500,000 project tokens + $500,000 of the deposit token are paired into a full-range liquidity position on a DEX.
> LP Position value: $1,000,000
> This is the collateral that backs the downside protection.

**Tranche B — Upside Payout Reserve**
The remaining 500,000 tokens are held separately in reserve.
> Reserve value: $500,000 (at $1.00/token)
> These tokens are used to pay upside if the token appreciates. Because they're held off-LP, there's no impermanent loss on the upside.

| Tranche | Contents | Value | Purpose |
|---|---|---|---|
| A — LP Position | 500K project tokens + 500K deposit tokens | $1,000,000 | Funds downside protection |
| B — Upside Reserve | 500K tokens | $500,000 | Pays upside at maturity |
| **Total collateral** | | **$1,500,000** | |

![PGT Flowchart — LP Position + Upside Reserve](/.gitbook/assets/pgt-flowchart-collateral-split.png)
*Collateral splits into two pieces: the LP position (green, funds the floor) and the upside reserve (purple, pays appreciation).*

### Step 3: PGTs Are Issued to Users

Users receive PGT tokens (ERC-20). Each PGT is backed by:

- **Downside protection** provided through the LP Position (2× user principal = $1,000,000)
- **Upside exposure** provided through the Upside Payout Reserve (500,000 tokens)

The PGT is the user's claim on both of these at maturity.

![PGT Flowchart — PGTs Issued](/.gitbook/assets/pgt-flowchart-issued.png)
*PGTs are backed by both the LP position (downside protection) and the upside reserve (upside exposure).*

### Step 4: LP Position Earns Yield

For the full 12-month term, the LP position earns trading fees on the DEX. At 15% APR:

| Metric | Value |
|---|---|
| LP Position | $1,000,000 |
| Yield Rate | 15% APR |
| Protection Level | 50% |
| Term | 12 months |
| **Projected yield** | **$150,000** |

Users remain downside protected throughout the term with full upside exposure. The yield accrues to the LP position and benefits the project at redemption.

![PGT Flowchart — LP Yield Period](/.gitbook/assets/pgt-flowchart-yield.png)
*During the term, the LP position earns trading fees while users remain protected.*

### Step 5: Maturity & Redemption

At the end of the 12-month term, the PGT settles based on the token price at maturity (measured by a 72-hour volume-weighted average price to resist manipulation).

Three scenarios:

---

#### Scenario A: Token price stayed flat ($1.00 → $1.00)

**User receives:**
- $500,000 in LP tokens (their principal back, fully protected)
- No upside (price didn't go up)

**Project receives:**
- 500,000 reserved tokens back (unused — no upside was due)
- Remaining LP position: $500,000 (total LP $1M minus user's $500K)
- LP yield: +$150,000
- **Project total: $1,150,000** (vs. $1,000,000 committed → net gain of $150K)

![PGT Redemption — Flat Price](/.gitbook/assets/pgt-redemption-flat.png)
*At $1.00 (no change): user gets principal back, project gets LP + yield.*

---

#### Scenario B: Token price went up ($1.00 → $1.50, +50%)

**User receives:**
- Upside payout from the reserve (their $500K principal participates in the +50% move)
- $500,000 principal + $250,000 upside = **$750,000 total value**

**Project receives:**
- Remaining reserve tokens (after paying user upside)
- LP position + yield
- Net outcome depends on participation rate and cap settings

![PGT Redemption — Price Up](/.gitbook/assets/pgt-redemption-up.png)
*At $1.50 (+50%): user receives upside from the reserve on top of principal.*

---

#### Scenario C: Token price dropped ($1.00 → $0.50, -50%)

**User receives:**
- $500,000 in LP tokens — **full principal protected** (the drop is within the 50% protection floor)
- The LP tokens may have rebalanced (more project tokens, less of the deposit token) but their market value equals the user's original principal

**Project receives:**
- 500,000 reserved tokens back (no upside was due)
- Remaining LP position (reduced in value due to the token drop)
- LP yield: +$150,000
- The project absorbs the downside — this is the protection working as designed

![PGT Redemption — Price Down (Protected)](/.gitbook/assets/pgt-redemption-down-protected.png)
*At $0.50 (-50%): user's principal is fully protected — they receive $500K in LP tokens.*

---

#### Scenario D: Token dropped beyond the protection floor ($1.00 → $0.20, -80%)

If the token drops more than the protection percentage (50% in this example), the user begins to take losses beyond the floor. They still receive LP tokens and are strictly better off than holding unprotected spot, but they're no longer fully principal-protected.

With 75% protection (the maximum setting), the user would be fully protected against drops of up to 75%.

---

## The Payoff Chart

The payoff chart below compares three strategies across all possible token prices at maturity:

1. **PGT** — the floor creates a kinked payoff: protected on the downside, linear participation on the upside
2. **Standard LP** — the classic AMM curve with impermanent loss drag
3. **Token Holding** — pure spot exposure with no protection

The PGT line is above the Standard LP line on the upside (because upside comes from the reserve, not LP rebalancing) and above both lines on the downside (because of the protection floor).

![PGT Payoff Profile at Maturity](/.gitbook/assets/pgt-payoff-chart.png)
*The PGT payoff (blue) is protected on the downside and tracks upside without impermanent loss — outperforming both a standard LP position and pure token holding across most scenarios.*

---

## What It Costs the Project

From the project's perspective, here's the full cost picture (using the example values above):

| Item | Amount | Notes |
|---|---|---|
| Tokens committed | 1,000,000 tokens | Locked for 12 months |
| Deposit tokens required from project | $0 | Users provide the deposit token side |
| Principal protection cost | $0 (if price stays flat or goes up) | Cost materializes only if the token drops |
| LP yield earned | +$150,000 | At 15% APR on the $1M LP position |

**If the token stays flat:** Project gets back $1,150,000 ($1M principal + $150K yield). Net gain: +$150K for 12 months of deep on-chain liquidity.

**If the token goes up:** Project returns some reserve tokens as upside to users but benefits from appreciation on remaining tokens and LP position.

**If the token drops 50%:** Users are made whole. The project's LP position has declined in value (this is the cost of the protection). But the project still earns yield on the LP during the term.

![PGT Project Dashboard](/.gitbook/assets/pgt-project-dashboard.png)
*The project dashboard view: total onchain liquidity secured, project costs (tokens locked + protection cost), and final balances at maturity.*

---

## Key Properties

| Property | Value |
|---|---|
| Term | Fixed maturity (typically 3–12 months) |
| Protection | Partial, up to 75% drawdown floor |
| Upside | Spot-equivalent, from reserved token tranche (no IL on upside) |
| Yield during term | None for the user (zero coupon); LP yield accrues to the position |
| Settlement asset | Floor: LP tokens. Upside: tokens from reserve |
| Price at maturity | 72-hour VWAP (volume-weighted average price) |
| Collateral | Fully on-chain, auditable, escrowed in protocol contracts |
| Token standard | ERC-20 |

---

## Configurable Parameters (What Projects Control)

When issuing a PGT campaign, the project sets:

- **Term** — maturity date (e.g., 6 months, 12 months)
- **Protection floor** — how much downside protection, up to 75%
- **Upside participation** — how much of the token appreciation users get (e.g., 100%, 125%)
- **Optional upside cap** — maximum upside per PGT
- **AMM/pool selection** — which DEX and pool for the LP position
- **Rollover offer** — optional new series at or before maturity

---

## Who PGTs Are For

**For projects/issuers:**
Best for clean, easy-to-explain "floor + upside" campaigns. Predictable cost. Ideal around roadmap moments where clarity beats spectacle. Each campaign compounds deep, stable on-chain DEX liquidity.

**For buyers/holders:**
Best for conviction holders, funds, and cautious allocators who want defined exposure — upside participation with a stated worst case. Suitable for larger tickets and users who prefer a simple, auditable payoff over lottery mechanics.

---

## Formal Payoff Logic

For readers who want the precise math:

Let **P₀** = reference price at issuance, **Pₘ** = 72-hour VWAP at maturity.

**If token is up or flat (Pₘ ≥ P₀):**
User receives spot-equivalent upside from the reserve at the participation rate.
Upside = Participation × Notional × (Pₘ − P₀) / P₀
Delivered in tokens from Tranche B.

**If token is down, drawdown ≤ protection % (e.g., ≤50%):**
User receives LP tokens worth original principal (full principal protection).
No upside is due. Reserve tokens are released back to the project.

**If token is down, drawdown > protection % (e.g., >50% with 50% floor):**
Protection is capped at the floor. User receives LP tokens per the protection schedule.
Loss beyond the floor is borne by the user, but outcome is strictly better than unprotected spot.

**If token is down, drawdown > 75% (maximum possible floor):**
Even with the highest protection setting, losses beyond 75% pass through to the user.

---

## Risks

- **Residual tail risk:** Losses beyond the protection floor are borne by the holder.
- **Smart-contract risk:** Contracts are immutable and audited, but risk is never zero.
- **Liquidity/slippage:** AMM pool depth affects the realized value when burning LP tokens at redemption.
- **LP yield is not guaranteed:** The assumed yield depends on actual DEX trading volume and fees.

---

## Next

> [Power PGT — jackpot-style upside variant](/note-types/power-protected-growth-token-power-pgt)
> [Protocol Mechanics — collateralization, settlement, and architecture](/protocol-mechanics)
