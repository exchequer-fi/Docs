# Protected Growth Tokens (PGT)

## TL;DR

**What is a PGT?** A Protected Growth Token (PGT) is a fixed-term token issued by a crypto project that gives buyers a defined downside floor and full upside exposure. Users deposit a stable asset (e.g., USDC); the project matches with 2× the value in its own tokens, split between a liquidity pool (which funds the protection) and an upside reserve. Both are locked on-chain for the full term.

**Why does it exist?** Most token buyers are deterred by downside risk. PGTs let projects offer a concrete guarantee: "even if our token drops 50%, you still get your principal back." This attracts buyers who would otherwise stay on the sidelines, while simultaneously building deep, locked DEX liquidity.

**What do holders receive at maturity?** One of two outcomes depending on the token price:
- **Token dropped:** principal returned in LP tokens (up to the protection floor)
- **Token rose:** principal plus upside paid from the reserve

**What about yield?** Holders receive no yield during the term. The LP position earns trading fees throughout, and all of that yield goes to the project at maturity — it is part of the project's return for insuring the downside.

---

## How a PGT Works (Step by Step)

We'll walk through the full lifecycle using the following example values: a $1.00 project token, $1M total liquidity target, 50% downside protection, 15% assumed APR yield, and a 12-month term.

### Step 1: User & Project Deposits

Users deposit a designated token (e.g., USDC — chosen by the project). The project matches with its own tokens worth **2× the user deposit**.

| Participant | Deposit | Value |
|---|---|---|
| Users deposit | $500,000 USDC | $500,000 |
| Project contributes | 1,000,000 tokens @ $1.00 | $1,000,000 |
| **Total assets** | | **$1,500,000** |

The project contributes twice the user amount — effectively acting as an insurer for its own holders, putting up its own tokens as collateral to guarantee the downside floor.

### Step 2: Collateral Is Split Into Two Tranches

The combined assets are split into two tranches with distinct purposes:

**Tranche A — LP Position (funds the floor)**
500,000 project tokens + $500,000 USDC (the full user deposit) are paired into a full-range liquidity position on a DEX.
> LP Position value: $1,000,000. This is the collateral that backs the downside protection.

**Tranche B — Upside Payout Reserve**
The remaining 500,000 project tokens are held separately in reserve.
> Reserve value: $500,000 (at $1.00/token). These tokens are used to pay upside to users if the token appreciates.

| Tranche | Contents | Value | Purpose |
|---|---|---|---|
| A — LP Position | 500K project tokens + $500K USDC | $1,000,000 | Funds downside protection |
| B — Upside Reserve | 500K project tokens | $500,000 | Pays upside at maturity |
| **Total collateral** | | **$1,500,000** | |

### Step 3: PGTs Are Issued to Users

Users receive a PGT (ERC-20). Each PGT is backed by:

- **Downside protection** provided through the LP Position (2× user principal = $1,000,000)
- **Full upside exposure** provided through the Upside Payout Reserve (500,000 tokens)

The PGT is the user's claim on both of these at maturity.

### Step 4: LP Position Earns Yield

For the full 12-month term, the LP position earns trading fees on the DEX. This yield accrues to the LP position and is paid to the project at maturity — it is not distributed to PGT holders during the term.

| Metric | Value |
|---|---|
| LP Position | $1,000,000 |
| Assumed Yield Rate | 15% APR (example only; actual yield depends on DEX trading volume) |
| Protection Level | 50% |
| Term | 12 months |
| **Projected yield** | **~$150,000** |

Users remain downside protected throughout the term with full upside exposure at maturity.

### Early Exit (Before Maturity)

PGTs are designed to be held to maturity — that's when the protection floor applies. However, users who need to exit early can do so through early redemption at any time, for a 2% fee.

**What the user receives depends on the token price at the time of redemption:**

**Token is above the initial price:** The user receives their principal plus full upside from the reserve — the same upside they would receive at maturity for that price level — minus the 2% early redemption fee. The upside reserve is available for redemption whenever the token is above the initial price.

**Token is below the initial price:** The user receives the current market value of their underlying LP position, minus the 2% fee. The protection floor does not apply — downside protection is a maturity-date guarantee only. If the token has dropped 40% and the user exits early, they receive the current (depreciated) value, not the protected principal.

In both cases, a 2% fee is deducted from the total redemption proceeds.

### Step 5: Maturity & Redemption

At the end of the term, the PGT settles based on the token price at maturity (measured by a 72-hour VWAP to resist manipulation).

**Quick overview of outcomes** (using example values):
- **Token flat ($1.00):** User gets $500K principal back. Project gets LP position + ~$150K yield + all 500K reserve tokens.
- **Token up (+50% → $1.50):** User gets $500K principal + $250K upside = $750K. Project gets LP position + yield (0 reserve tokens remain — all used to pay upside).
- **Token down within floor (-50% → $0.50):** User gets $500K principal back in LP tokens (fully protected). Project gets 500K reserve tokens back + remaining LP + yield.
- **Token down beyond floor (-80% → $0.20):** User gets protected up to the 50% floor; losses beyond that pass through to the user.

---

<iframe src="pgt2-flowchart.html" width="100%" height="900" frameborder="0" style="border:none;border-radius:8px;margin:16px 0;"></iframe>

#### Scenario A: Token price stayed flat ($1.00 → $1.00)

**User receives:**
- $500,000 in LP tokens (their full principal, returned at maturity)
- No upside (price didn't move)

**Project receives:**
- All 500,000 reserved tokens returned (no upside needed to be paid to the user)
- Remaining LP position: $500,000
- LP yield: +$150,000
- **Project total: $1,150,000** (vs. $1,000,000 committed — net gain of $150K)

---

#### Scenario B: Token price went up ($1.00 → $1.50, +50%)

**User receives:**
- $500,000 principal
- $250,000 upside from the reserve (their principal × 50% gain)
- **User total: $750,000**

**Project receives:**
- 0 reserve tokens (all 500,000 used to pay user upside)
- LP position + yield: ~$650,000 (LP rebalances upward; yield ~$150K)
- **Project total: ~$650,000** (project committed $1M, benefiting from the appreciation on LP position)

---

#### Scenario C: Token price dropped within floor ($1.00 → $0.50, -50%)

**User receives:**
- $500,000 in LP tokens — **full principal protected** (the drop is exactly at the 50% floor)
- No upside needed to be paid to the user

**Project receives:**
- All 500,000 reserved tokens returned
- Remaining LP position (reduced in value due to the token drop)
- LP yield: +$150,000
- The project absorbs the downside — this is the protection working as intended

---

#### Scenario D: Token dropped beyond the protection floor ($1.00 → $0.20, -80%)

**User receives:**
- LP tokens up to the 50% protection floor — partial protection, capped at the floor
- Losses beyond -50% pass through to the user
- The user is still better off than holding unprotected spot

**Project receives:**
- All 500,000 reserve tokens returned (no upside was paid)
- Nothing from the LP position — it has been entirely consumed paying out the downside protection to users, and was still not enough to cover the full loss beyond the floor

This is the worst case for the project: the LP collateral is fully depleted by the protection payouts, the reserve tokens are returned but worth very little at $0.20, and the protection cap is breached.

---

## Outcome Summary (Example Values)

| Scenario | Token Price | User Receives | Project Receives |
|---|---|---|---|
| Flat | $1.00 | $500K principal in LP tokens | 500K reserve tokens + $500K LP + $150K yield |
| Up +50% | $1.50 | $500K + $250K upside = $750K | 0 reserve tokens + LP position + yield |
| Down -50% (at floor) | $0.50 | $500K principal in LP tokens | 500K reserve tokens + reduced LP + $150K yield |
| Down -80% (beyond floor) | $0.20 | Protected to floor; partial loss on remainder | 500K reserve tokens (worth little at $0.20) + nothing from LP (fully consumed by protection payouts) |

*All figures based on the example scenario: $500K user deposit, 1M project tokens at $1.00, 50% protection, 15% assumed APR, 12-month term.*

<iframe src="pgt2-payoff-chart.html" width="100%" height="520" frameborder="0" style="border:none;border-radius:8px;margin:16px 0;"></iframe>

---

## Key Properties

| Property | Value |
|---|---|
| Term | Fixed maturity (typically 3–12 months) |
| Protection | Partial, up to 75% drawdown floor |
| Upside | Full spot-equivalent exposure, from reserved token tranche |
| Yield during term | None for the holder (zero coupon); LP yield accrues to the project at maturity |
| Settlement asset | Floor: LP tokens. Upside: tokens from reserve |
| Price at maturity | 72-hour VWAP (volume-weighted average price) |
| Collateral | Fully on-chain, auditable, escrowed in protocol contracts |
| Token standard | ERC-20 |
| Early redemption | Available at any time. 2% fee. If token is above initial price: principal + full upside. If token is below initial price: current market value (no floor). |

---

## Configurable Parameters (What Projects Control)

When issuing a PGT campaign, the project sets:

- **Term** — maturity date (e.g., 6 months, 12 months)
- **Protection floor** — how much downside protection, up to 75%
- **AMM/pool selection** — which DEX and pool for the LP position

---

## Risks

- **Residual tail risk:** Losses beyond the protection floor are borne by the holder.
- **Smart-contract risk:** Contracts are immutable and audited, but risk is never zero. Do not put in more than you can afford to lose.
- **Liquidity/slippage:** AMM pool depth affects the realized value of the LP tokens received at maturity. LP tokens are not automatically burned on redemption — the user controls when and how they exit the position.
- **Early redemption risk:** Exiting before maturity when the token is below the initial price forfeits the downside protection. The user receives the current market value of their position minus a 2% fee — which may be less than their original principal. The protection floor only applies at maturity. If the token is above the initial price, the user receives full upside minus the fee.
- **LP yield is not guaranteed:** The assumed yield depends on actual DEX trading volume and fees. Figures used in examples are illustrative only.

---

## Formal Payoff Logic

For readers who want the precise math:

Let **P₀** = reference price at issuance, **Pₘ** = 72-hour VWAP at maturity.

**If token is up or flat (Pₘ ≥ P₀):**
User receives spot-equivalent upside from the reserve.
Upside = Notional × (Pₘ − P₀) / P₀
Delivered in tokens from Tranche B. All reserve tokens are used to satisfy upside; the project receives none.

**If token is down, drawdown ≤ protection % (e.g., ≤50%):**
User receives LP tokens worth original principal (full principal protection).
No upside is due. All reserve tokens are released back to the project.

**If token is down, drawdown > protection % (e.g., >50% with 50% floor):**
Protection is capped at the floor. User receives LP tokens per the protection schedule.
Loss beyond the floor is borne by the user, but outcome is strictly better than unprotected spot.

**If token is down, drawdown > 75% (maximum possible floor):**
Even with the highest protection setting, losses beyond 75% pass through to the user.
