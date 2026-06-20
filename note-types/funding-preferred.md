# Funding Preferred

## Overview

Funding Preferred lets a project raise cash by issuing a protected, convertible ERC-20 position. Buyers fund the raise upfront. The project receives the cash proceeds and posts project tokens as collateral behind the buyer's floor.

The buyer has downside protection up to the selected floor, with a maximum of 90%. After the vesting cliff, the buyer can convert into common tokens at the entitlement fixed on issuance. The position is zero coupon.

## Example raise

These numbers are illustrative: a $1.00 token issued at par, a $1,000 buyer ticket, 50% protection, and a 6-month vesting cliff.

### 1. Buyer funds the raise

| Participant | Contribution | Value |
|---|---|---|
| Buyer | Cash | $1,000 to the project |
| Project | Token collateral | 2,000 tokens at $1.00, escrowed |

### 2. Project posts collateral

The collateral multiple is:

N = 1 / (1 - protection)

| Protection | Collateral multiple |
|---|---|
| 50% | 2x |
| 75% | 4x |
| 90% | 10x |

At 50% protection, the project escrows 2,000 tokens for a $1,000 ticket. At the floor price, that collateral is worth the buyer's original principal.

### 3. Token issuance

The buyer receives Funding Preferred tokens. The position includes a protected floor backed by escrowed collateral and a conversion right into common tokens.

In this example, the entitlement is $1,000 / $1.00, or 1,000 common tokens. The buyer is protected during vesting. Conversion opens when the cliff ends.

### 4. Return profile

The buyer's return comes from protected principal and the conversion right.

### 5. Project call right

The project can call the position at any time by paying a call premium. The premium starts high and decays linearly from issuance to the cliff date. For example, a 20% premium at issuance could decay to 0% at the 6-month cliff. When the project calls, it chooses whether to settle in cash or collateral.

### 6. Buyer early exit

A buyer can exit before resolution, but early exit forfeits the floor and costs a 2% fee. The buyer receives the current market value of the 1,000-token entitlement, less the fee.

### 7. Settlement

Settlement uses an oracle price for the common token. When the token is at or above the issue price, conversion is usually the better outcome. When the token is below the issue price, the buyer can hold the floor.

| Scenario | Token price | Buyer action | Buyer receives | Project outcome |
|---|---|---|---|---|
| Flat | $1.00 | Convert | 1,000 tokens worth $1,000 | Keeps $1,000 cash and recovers 1,000 collateral tokens |
| Up 50% | $1.50 | Convert | 1,000 tokens worth $1,500 | Keeps $1,000 cash and recovers 1,000 collateral tokens |
| Down 50% | $0.50 | Hold floor | $1,000 principal, settled in cash or collateral | Collateral is exactly enough at the floor price |
| Down 95% | $0.05 | Hold | Collateral value of $100 | All collateral is consumed |

## Terms

| Property | Value |
|---|---|
| Purpose | Raise capital through a protected convertible position |
| Buyer contribution | Cash for the raise |
| Floor backing | Project tokens escrowed as collateral |
| Collateral multiple | 1 / (1 - protection) |
| Protection | Partial drawdown floor, up to 90% |
| Upside | Conversion into common tokens after the cliff |
| Coupon | None |
| Vesting cliff | Configurable |
| Project call | Any time, with a decaying call premium |
| Settlement price | Common token price via oracle |
| Token standard | ERC-20 |
| Buyer early exit | Any time, market value settlement, 2% fee |

## Configurable parameters

Issuers set the issue price, protection level, vesting cliff, call premium schedule, and term. The protection level determines the collateral multiple.

## Risks

- Losses beyond the floor reduce the collateral value available to the buyer.
- The project may call the position before the buyer chooses to convert.
- Smart contract and oracle risk cannot be removed entirely.
- The buyer converts only after the vesting cliff ends.
- Early exit forfeits protection and costs 2%.
- The position is zero coupon.

## Payoff logic

Let P0 be the issue price, Pm be the oracle settlement price, F be the cash funded, and N be 1 / (1 - protection).

- If Pm >= P0, the buyer converts into F x (Pm / P0) of common token value.
- If Pm < P0 and the drawdown is within the selected floor, the buyer receives full principal F, settled in cash or collateral at the project's choice.
- If the drawdown exceeds the selected floor, the buyer receives collateral value equal to N x (Pm / P0) x F.
- If the project calls, it pays the call premium and settles the position.
- If the buyer exits early, the buyer receives F x (Pm / P0), less 2%.
