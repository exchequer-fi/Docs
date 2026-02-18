# Protocol Mechanics

This page covers how Exchequer works under the hood — collateralization, settlement, smart contract architecture, and the AMM design. You should read the [PGT](/note-types/protected-growth-token-pgt) page first to understand the product before diving into mechanics.

---

## How Downside Protection Is Collateralized

The protection floor isn't a promise — it's backed by on-chain collateral that's visible and auditable from the moment of issuance.

### The collateral structure

When a PGT is issued, two types of collateral are escrowed on-chain:

**Tranche A — LP Position (funds the floor)**
User deposit tokens and project tokens are paired into a full-range liquidity position on a DEX. This LP position is held in protocol contracts for the full term. At maturity, LP tokens from this position are used to pay the protection floor to users.

**Tranche B — Upside Payout Reserve (funds the upside)**
An additional batch of project tokens is held off-LP in reserve. These tokens are used to deliver upside to users at maturity if the token appreciates. Holding them off-LP means the upside isn't subject to AMM rebalancing (no impermanent loss on the upside).

### Why the project contributes 2×

For every dollar users deposit, the project contributes $2 worth of its own tokens. This is because:

- $1 of tokens goes into the LP alongside the user's $1 deposit (Tranche A)
- $1 of tokens goes into the upside reserve (Tranche B)

This 2:1 ratio is what makes the math work — the LP position is large enough to fund the floor, and the reserve is large enough to pay full spot-equivalent upside.

### The 75% protection cap

"75% protection" is the maximum floor any issuer can set. Here's what it means in practice:

**Drawdown ≤ protection level:** User's principal is fully protected. At maturity, they redeem LP tokens whose market value equals their original deposit.

**Drawdown > protection level but ≤ 75%:** If the issuer set a lower floor (e.g., 50%), the user begins taking losses between 50% and 75%. With a 75% floor, they'd still be fully protected.

**Drawdown > 75%:** Even at the maximum setting, losses beyond 75% pass through to the user. The redeemed LP tokens are still worth more than unprotected spot over the same move, but full principal recovery isn't guaranteed.

Protection doesn't create free money — it reassigns tail risk from the buyer to the issuer, with the cap stated up front.

### How LP rebalancing creates the floor

This is the mechanism that makes the protection work. In a constant-product AMM (like Uniswap):

When the token price drops, the LP position automatically rebalances — accumulating more project tokens and releasing the deposit token. The total value of the LP position declines less than the token price because of this rebalancing effect.

For moderate drops (within the protection floor), the LP position retains enough value to cover the user's original principal. The project effectively absorbs the loss through the decline in value of its contributed tokens.

For severe drops (beyond the floor), the LP's cushioning effect isn't sufficient to fully cover the principal, and the user begins taking losses.

---

## Settlement at Maturity

### Price determination: 72-hour VWAP

At maturity, the settlement price is determined by the **72-hour volume-weighted average price (VWAP)** of the project token immediately before the maturity timestamp. Using a 72-hour window (rather than a spot price) makes the settlement resistant to short-term price manipulation.

### Settlement logic

**Token up or flat:**
User receives spot-equivalent upside from the reserve (Tranche B). Upside is delivered in tokens.

**Token down, within the protection floor:**
Full principal protection. User redeems LP tokens from Tranche A worth their original deposit. No upside is due — reserve tokens are released back to the project.

**Token down, beyond the protection floor:**
Protection is capped. User redeems LP tokens per the protection schedule. Losses beyond the floor are borne by the user.

### Settlement assets

The protection floor always settles in **LP tokens**. Users receive LP tokens from the escrowed position, which they can:

- **Hold** — continue earning trading fees as an LP
- **Burn** — withdraw the underlying constituent tokens (project token + deposit token) from the LP position

Upside settles in **project tokens** from the reserve tranche.

### Rollover (optional)

Issuers can offer a rollover into a new series before or at maturity:

- **Accept rollover:** The old note is burned and a new note is issued with updated terms (new floor, term, participation).
- **Decline rollover:** Redeem under the standard settlement mechanics above.

---

## Smart Contract Architecture

### Persistent, non-upgradeable contracts

Exchequer's smart contracts are deployed as persistent, non-upgradeable code. There are no admin keys, proxy patterns, or upgrade mechanisms. Once deployed, the contract logic cannot be changed.

This design prioritizes:

- **Censorship resistance** — no party can freeze, modify, or interfere with notes after issuance
- **Self-custody** — users hold their PGT tokens directly; no intermediary custody
- **Auditability** — all collateral, parameters, and settlement logic is visible on-chain

### Permissionless issuance and settlement

Any ERC-20 project can issue PGTs without permission from Exchequer. Settlement is automatic at maturity based on the on-chain VWAP oracle. No human intervention is required at any point in the lifecycle.

---

## AMM-Agnostic Design

PGTs work alongside any major constant-product AMM — Uniswap, Balancer, Curve, Camelot, and others. The protocol is not tied to a specific DEX.

The LP position created during issuance is placed on the issuer's chosen venue. Liquidity depth on that venue is a designed consequence of running PGT programs — each campaign adds to the pool, and repeated issuance compounds depth over time.

Issuers can select different AMMs or pools across campaigns based on their liquidity strategy.

---

## On-Chain Collateral Visibility

All collateral is viewable on-chain at all times:

- LP position address and value
- Reserve token balance
- Note terms (floor, participation, cap, maturity date)
- Settlement parameters (VWAP oracle configuration)

There is no off-chain component, no counterparty, and no trust assumption beyond the smart contract code itself.

---

## Next

> [Research & Whitepapers — academic foundations](/research/whitepapers)
> [Back to PGT overview](/note-types/protected-growth-token-pgt)
