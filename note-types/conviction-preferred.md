# Conviction Preferred

## Overview

Conviction Preferred lets a project open a protected conversion window for existing holders. A chosen cohort can convert common tokens they already hold into a protected position. The holder keeps exposure to their own tokens. The treasury posts collateral behind the floor.

This is useful around unlocks, investor cliffs, airdrop cohorts, or any group the project wants to keep through a volatile period. Participation is voluntary.

The position is about holder retention and downside protection.

## Example conversion

These numbers are illustrative: a holder with 1,000 common tokens, a $1.00 reference price, 90% protection, a 3-month cliff, and a 12-month term.

### 1. Project opens a cohort window

The project defines the eligible addresses. The cohort might include ICO buyers, investors, power users, airdrop recipients, or another group the project wants to retain.

### 2. Holder converts common tokens

A participating holder converts existing common tokens into Conviction Preferred. The token price at issuance sets the reference price and floor. In this example, the position starts with 1,000 tokens at $1.00, or $1,000 of reference value.

### 3. Treasury posts collateral

The treasury deposits token collateral sized to the protection level. The collateral multiple is:

N = 1 / (1 - protection)

At 90% protection, the treasury posts 10x coverage. If the token holds or rises, the treasury recovers most or all of that collateral. If the token falls within the protected band, collateral funds the holder's top-up.

### 4. Cliff and exit

Protection starts on day one. Conversion back to common opens when the cliff ends. A forced exit before the cliff forfeits the floor.

After the cliff, the holder can convert back to common at any time.

### 5. Settlement

Settlement uses an oracle price. Since the holder brought their own tokens into the position, the treasury only pays on the downside.

| Scenario | Token price | Holder receives | Treasury outcome |
|---|---|---|---|
| Flat | $1.00 | $1,000 of own token value | Collateral returns |
| Up 50% | $1.50 | 1,000 tokens worth $1,500 | Collateral returns |
| Down 50% | $0.50 | $1,000 total value, made up of $500 token value plus $500 treasury top-up | Uses $500 of collateral |
| Down 95% | $0.05 | Collateral-limited value, greater than $50 spot value | Most collateral is consumed |

## Terms

| Property | Value |
|---|---|
| Purpose | Retain an existing holder cohort |
| Who enters | Eligible existing holders, voluntarily |
| Holder contribution | Common tokens already held |
| Floor backing | Treasury token collateral |
| Reference price | Token price at issuance |
| Protection | Partial drawdown floor, up to 90% |
| Upside | The holder's own tokens appreciate |
| Coupon | None |
| Cliff | Configurable, with protection live from day one |
| Early exit | Forfeits protection before the cliff ends |
| Settlement price | Token price via oracle |
| Token standard | ERC-20 |

## Configurable parameters

Issuers set the eligible cohort, protection level, term, and cliff length. The reference price is fixed at issuance.

## Risks

- Losses beyond the floor reduce the collateral value available to the holder.
- Exiting before the cliff ends forfeits protection.
- Smart contract and oracle risk cannot be removed entirely.
- The treasury bears the downside inside the protected band.
- The position is zero coupon.

## Payoff logic

Let P0 be the price at issuance, Pm be the oracle settlement price, V be the converted token value at P0, and N be 1 / (1 - protection).

- If Pm >= P0, the holder keeps their own token upside and treasury collateral returns.
- If Pm < P0 and the drawdown is within the selected floor, the treasury tops the holder up to principal value V.
- If the drawdown exceeds the selected floor, the holder receives the remaining collateral-limited value.
- If the holder exits before the cliff, the floor is forfeited.
