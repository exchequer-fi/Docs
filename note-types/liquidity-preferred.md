# Liquidity Preferred

## Overview

Liquidity Preferred is a fixed-term ERC-20 issued by a project. Buyers deposit USDC or another asset chosen by the issuer. The project adds its own tokens worth 2x the buyer deposit. Half of those project tokens pairs with the buyer deposit in a full range DEX liquidity position. The other half sits in a reserve for upside payouts.

At maturity, the holder settles against a 72-hour VWAP. If the token falls within the selected floor, the holder receives principal value in LP tokens. If the token rises, the holder receives principal plus upside from the reserve. The LP earns trading fees during the term, and those fees accrue to the project, subject to the protocol fee described in [Liquidity Preferred mechanics](/protocol-mechanics).

## Example campaign

These numbers are illustrative: a $1.00 project token, a $1M liquidity target, 50% protection, 15% assumed APR trading fee yield, and a 12-month term.

### 1. Buyer and project deposit

| Participant | Deposit | Value |
|---|---|---|
| Buyers | $500,000 USDC | $500,000 |
| Project | 1,000,000 tokens at $1.00 | $1,000,000 |
| Total assets | | $1,500,000 |

The project contributes twice the buyer amount. That extra collateral is what funds the holder's floor.

### 2. Collateral split

| Tranche | Contents | Value | Use |
|---|---|---|---|
| LP position | 500K project tokens and $500K USDC | $1,000,000 | Backs the floor |
| Upside reserve | 500K project tokens | $500,000 | Pays upside at maturity |
| Total collateral | | $1,500,000 | |

The LP position stays locked for the full term. The reserve is separate and only pays out if the token appreciates.

### 3. Token issuance

Buyers receive Liquidity Preferred tokens representing their protected position. The tokens are ERC-20s, so they can be held or transferred like other onchain positions.

### 4. Trading fee yield

The LP position earns DEX fees while it is locked. Trading fee yield accrues to the project and is received at maturity after the protocol fee.

| Metric | Value |
|---|---|
| LP position | $1,000,000 |
| Assumed yield | 15% APR |
| Protection level | 50% |
| Term | 12 months |
| Example yield | About $150,000 |

### 5. Early exit

Protection applies at maturity. Before maturity, holders can redeem at any time for a 2% fee.

- If the token is above the initial price, the holder receives principal plus reserve upside, less the fee.
- If the token is below the initial price, the holder receives the current market value of the LP position, less the fee.

### 6. Maturity

| Scenario | Token price | Holder receives | Project receives |
|---|---|---|---|
| Flat | $1.00 | $500K principal in LP tokens | 500K reserve tokens, $500K LP value, and trading fee yield |
| Up 50% | $1.50 | $500K principal plus $250K upside | LP position and trading fee yield |
| Down 50% | $0.50 | $500K principal in LP tokens | Reserve tokens, remaining LP value, and trading fee yield |
| Down 80% | $0.20 | Floor protection is capped, so the holder takes the loss beyond the floor | Reserve tokens and any remaining collateral value |

## Terms

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

- Losses beyond the floor pass to the holder.
- Smart contract risk cannot be removed entirely, even after audit.
- AMM depth and slippage affect the LP value received at maturity.
- Early redemption below the initial price forfeits the floor and costs 2%.
- LP trading fee yield depends on actual DEX volume and fees.

## Payoff logic

Let P0 be the reference price at issuance and Pm be the 72-hour VWAP at maturity.

- If Pm >= P0, upside equals Notional x (Pm - P0) / P0 and is paid from the reserve.
- If Pm < P0 and the drawdown is within the selected floor, the holder receives LP tokens worth the original principal.
- If the drawdown exceeds the selected floor, the holder receives the remaining protected value and takes the loss beyond the floor.
- At the maximum setting, losses beyond 75% pass through to the holder.
