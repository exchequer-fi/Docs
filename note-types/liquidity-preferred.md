# Liquidity Preferred

## TL;DR

**What is Liquidity Preferred?** Liquidity Preferred is a fixed-term ERC-20 issued by a crypto project that gives buyers a defined downside floor and upside exposure. Buyers deposit a stable asset or another asset chosen by the issuer. The project matches with 2x the value in its own tokens, split between a liquidity pool that funds the protection and an upside reserve. Both are locked onchain for the full term.

**Why does it exist?** Most token buyers are deterred by naked downside. Liquidity Preferred lets projects offer a concrete protected position: if the token falls within the selected floor, the buyer is protected at maturity. This can attract buyers who would otherwise stay on the sidelines while simultaneously building deep, locked DEX liquidity.

**What do holders receive at maturity?** One of two outcomes depending on the token price:

- **Token dropped:** principal value returned in LP tokens, up to the protection floor.
- **Token rose:** principal plus upside paid from the reserve.

**What about yield?** Holders receive no yield during the term. The LP position earns trading fees throughout, and those fees accrue to the project at maturity after protocol fees. This is part of the project's return for underwriting the downside.

## How Liquidity Preferred works

This walkthrough uses the same example values as the original product demo: a $1.00 project token, a $1M total liquidity target, 50% downside protection, 15% assumed APR trading fee yield, and a 12-month term.

### Step 1: Buyer and project deposits

Buyers deposit a designated asset, such as USDC. The project matches with its own tokens worth 2x the buyer deposit.

| Participant | Deposit | Value |
|---|---|---|
| Buyers deposit | $500,000 USDC | $500,000 |
| Project contributes | 1,000,000 tokens at $1.00 | $1,000,000 |
| **Total assets** | | **$1,500,000** |

The project contributes twice the buyer amount. That extra collateral is what funds the holder's floor.

### Step 2: Collateral is split into two tranches

The combined assets are split into two tranches with distinct purposes.

**Tranche A - LP position**

500,000 project tokens and $500,000 USDC are paired into a full range liquidity position on a DEX.

LP position value: $1,000,000. This is the collateral that backs the downside protection.

**Tranche B - Upside reserve**

The remaining 500,000 project tokens are held separately in reserve.

Reserve value: $500,000 at $1.00 per token. These tokens are used to pay upside to holders if the token appreciates.

| Tranche | Contents | Value | Purpose |
|---|---|---|---|
| A - LP position | 500K project tokens and $500K USDC | $1,000,000 | Funds downside protection |
| B - Upside reserve | 500K project tokens | $500,000 | Pays upside at maturity |
| **Total collateral** | | **$1,500,000** | |

### Step 3: Liquidity Preferred tokens are issued

Buyers receive Liquidity Preferred tokens. Each token represents a claim on the protected position at maturity.

The position is backed by:

- **Downside protection** provided through the LP position.
- **Upside exposure** provided through the upside reserve.

The token is the holder's claim on both of these at maturity.

### Step 4: LP position earns trading fees

For the full 12-month term, the LP position earns trading fees on the DEX. This yield accrues to the LP position and is paid to the project at maturity after protocol fees. It is not distributed to Liquidity Preferred holders during the term.

| Metric | Value |
|---|---|
| LP position | $1,000,000 |
| Assumed yield rate | 15% APR, example only |
| Protection level | 50% |
| Term | 12 months |
| **Projected yield** | **About $150,000** |

Holders remain downside protected throughout the term, with upside exposure settled at maturity.

## Early exit before maturity

Liquidity Preferred is designed to be held to maturity. That is when the protection floor applies. Holders who need to exit early can redeem at any time for a 2% fee.

What the holder receives depends on the token price at the time of redemption.

**Token is above the initial price:** The holder receives principal plus upside from the reserve, less the 2% early redemption fee. The upside reserve is available for redemption whenever the token is above the initial price.

**Token is below the initial price:** The holder receives the current market value of the underlying LP position, less the 2% fee. The protection floor does not apply. Downside protection is a maturity-date term only.

In both cases, a 2% fee is deducted from the total redemption proceeds.

## Maturity and redemption

At the end of the term, Liquidity Preferred settles based on the token price at maturity, measured by a 72-hour VWAP to resist manipulation.

Quick overview of outcomes, using the example values:

- **Token flat at $1.00:** Holder gets $500K principal back in LP tokens. Project gets the LP position, trading fee yield, and all 500K reserve tokens.
- **Token up 50% to $1.50:** Holder gets $500K principal plus $250K upside, for $750K total. Project gets the LP position and trading fee yield.
- **Token down 50% to $0.50:** Holder gets $500K principal back in LP tokens. Project gets the reserve tokens, remaining LP value, and trading fee yield.
- **Token down 80% to $0.20:** Protection is capped at the selected floor. Losses beyond that floor pass through to the holder.

<iframe src="/pgt2-flowchart.html" width="100%" height="900" frameborder="0" style="border:none;border-radius:8px;margin:16px 0;"></iframe>

### Scenario A: Token price stayed flat, $1.00 to $1.00

**Holder receives:**

- $500,000 in LP tokens, returning full principal at maturity.
- No upside, because the token price did not move.

**Project receives:**

- All 500,000 reserved tokens returned.
- Remaining LP position: $500,000.
- LP trading fee yield: about $150,000 in this example.
- Project total: about $1,150,000 versus $1,000,000 committed, before protocol fees.

### Scenario B: Token price went up, $1.00 to $1.50

**Holder receives:**

- $500,000 principal.
- $250,000 upside from the reserve.
- Holder total: $750,000.

**Project receives:**

- LP position and trading fee yield.
- No reserve tokens remain if the full reserve is used to pay holder upside.

### Scenario C: Token price dropped within the floor, $1.00 to $0.50

**Holder receives:**

- $500,000 in LP tokens.
- Full principal protection because the drop is inside the selected 50% floor.

**Project receives:**

- All 500,000 reserved tokens returned.
- Remaining LP position after holder settlement.
- LP trading fee yield.
- The project absorbs the downside inside the floor. That is the protection working as designed.

### Scenario D: Token price dropped beyond the floor, $1.00 to $0.20

**Holder receives:**

- LP-backed value up to the selected protection floor.
- Losses beyond the 50% floor pass through to the holder.
- The holder is still better protected than an unprotected spot position inside the protected band.

**Project receives:**

- All reserve tokens returned, though they are worth much less at $0.20.
- Any remaining collateral value after settlement.

This is the worst case for the project. The LP collateral is consumed by protection payouts, the reserve tokens are returned at a lower value, and the protection cap is breached.

## Outcome summary

| Scenario | Token price | Holder receives | Project receives |
|---|---|---|---|
| Flat | $1.00 | $500K principal in LP tokens | 500K reserve tokens, $500K LP value, and trading fee yield |
| Up 50% | $1.50 | $500K principal plus $250K upside | LP position and trading fee yield |
| Down 50% | $0.50 | $500K principal in LP tokens | Reserve tokens, remaining LP value, and trading fee yield |
| Down 80% | $0.20 | Floor protection is capped, so the holder takes the loss beyond the floor | Reserve tokens and any remaining collateral value |

All figures use the example scenario: $500K buyer deposit, 1M project tokens at $1.00, 50% protection, 15% assumed APR trading fee yield, and a 12-month term.

<iframe src="/pgt2-payoff-chart.html" width="100%" height="520" frameborder="0" style="border:none;border-radius:8px;margin:16px 0;"></iframe>

## Key properties

| Property | Value |
|---|---|
| Term | Fixed maturity, typically 3 to 12 months |
| Protection | Partial drawdown floor, up to 75% |
| Upside | Paid from the reserve tranche |
| Yield during term | None for the holder |
| Settlement asset | LP tokens for the floor, reserve tokens for upside |
| Maturity price | 72-hour VWAP |
| Collateral | Onchain and escrowed |
| Token standard | ERC-20 |
| Early redemption | Any time, 2% fee, with no floor below the initial price |

## Configurable parameters

Issuers set the maturity date, the protection floor up to 75%, and the AMM or pool used for the LP position.

## Risks

- **Residual tail risk:** Losses beyond the protection floor are borne by the holder.
- **Smart contract risk:** Contracts are immutable and audited, but risk is never zero.
- **Liquidity and slippage:** AMM pool depth affects the realized value of the LP tokens received at maturity.
- **Early redemption risk:** Exiting before maturity when the token is below the initial price forfeits the downside protection. The holder receives current market value minus a 2% fee, which may be less than original principal.
- **LP trading fee yield is not guaranteed:** The assumed yield depends on actual DEX trading volume and fees. Figures used in examples are illustrative only.

## Formal payoff logic

Let P0 be the reference price at issuance and Pm be the 72-hour VWAP at maturity.

**If the token is up or flat, Pm >= P0:**

The holder receives principal plus upside from the reserve.

Upside = Notional x (Pm - P0) / P0.

**If the token is down and the drawdown is inside the protection floor:**

The holder receives LP tokens worth original principal. No upside is due. Unused reserve tokens are released back to the project.

**If the token is down and the drawdown exceeds the protection floor:**

Protection is capped at the floor. The holder receives the remaining protected value and takes the loss beyond the floor.

**If the token is down beyond the maximum 75% protection setting:**

Even at the highest protection setting, losses beyond 75% pass through to the holder.
