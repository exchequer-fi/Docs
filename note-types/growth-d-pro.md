# Growth D-Pro

## **Summary (TL;DR)**

* Fixed-term ERC-20 note with a downside floor (max 75% drawdown) and spot-equivalent upside participation.
* **No coupon/yield** during the term; all value settles at maturity.
* **No impermanent loss on the upside** — upside is delivered from a **reserved token tranche**, not from LP rebalancing.
* **Protection settles in LP tokens** at maturity using a **72‑hour VWAP** to determine settlement amounts.
* **Collateral structure:** per 100 USDC of notes sold, the issuer
  * pairs **100 USDC + 100 TOKEN** in LP to fund the floor, and
  * holds an **additional 100 TOKEN in reserve** to pay spot-equivalent upside.\
    → Total on-chain collateral at issue ≈ **$300 notional** (at par), of which **$200** sits in LP and **$100** is a token reserve.

***

## What it is

A Growth D-Pro gives buyers a defined principal floor at maturity (capped at a 75% drawdown) and **linear, spot-equivalent** upside without the rebalancing drag of AMM LPs. Issuance and collateralization are entirely on-chain, with transparent parameters and auditable collateral.

## Who it’s for

* Users who want a simple **“floor + linear upside”** payoff rather than mid-term yield.
* Projects that want to deepen on-chain DEX liquidity without opaque MM/CEX deals — while keeping upside payments outside LP to avoid IL.

***

## Key Properties

* **Term:** Fixed maturity (e.g., 3–12 months).
* **Protection:** Partial principal protection up to a 75% drawdown. If the token is down ≤ 75% vs reference at maturity, the holder redeems LP worth original principal; losses beyond 75% are borne by the holder (see Payoff Logic).
* **Upside:** **Spot-equivalent** (issuer-set participation, e.g., 100%, 125%) with optional cap; **funded from the reserved token tranche** (not via LP).
* **Yield:** None during the term (zero coupon).
* **Settlement assets:**
  * **Floor** pays in LP tokens backed by on-chain collateral (holder may withdraw to constituents).
  * **Upside** is delivered from the **reserved TOKEN** based on the 72-hour VWAP.
* **Price measure:** 72-hour VWAP ending at the maturity timestamp to reduce manipulation risk.
* **Collateral structure:** Two token tranches from treasury: **(A) LP tranche** to pair with buyer USDC, **(B) Reserve tranche** to fund upside.

***

## Creation Mechanism

1. **Issue Notes (ERC-20).** Project publishes terms and sells Growth D-Pro to buyers.
2. **Form LP for the floor (Tranche A).** Pair buyer **USDC 1:1 with TOKEN** to create project-owned LP that funds the floor.
3. **Set aside a reserved token tranche for upside (Tranche B).** Hold an **equal-sized TOKEN batch** off-LP to deliver **spot-equivalent upside** at maturity (participation per terms). This avoids upside IL because the upside isn’t sourced from a rebalancing LP.
4. **On-chain escrow.** LP and reserve tokens are locked in protocol contracts, fully auditable.
5. **Settle at maturity.** Redemption follows the Payoff Logic using the 72-hour VWAP.

***

## Configurable Parameters (Issuer “knobs”)

* Term (maturity date/time)
* Protection floor (up to the 75% drawdown limit)
* Upside participation (e.g., 100%, 125%) and optional cap
* AMM/pool selection for LP tranche
* **Reserve sizing policy** (default: reserve TOKEN sized for 100% participation)
* Optional rollover offer at or prior to maturity

***

## Payoff Logic at Maturity

Let **P₀** be the reference price (VWAP at issuance or specified reference) and **Pₘ** the 72-hour VWAP immediately prior to maturity.

**A) Drawdown ≤ 75% (Pₘ ≥ 0.25·P₀)**

* **Floor:** Holder redeems **LP worth original principal** (paid in LP).
* **Upside:** If **Pₘ ≥ P₀**, deliver **spot-equivalent upside** from the reserved TOKEN per participation and any cap; if **Pₘ < P₀**, no upside is due.

**B) Drawdown > 75% (Pₘ < 0.25·P₀)**

* **Floor is capped.** Holder redeems LP per the protection schedule and absorbs losses beyond the 75% floor. Outcome remains strictly better than unprotected spot for the same move.
* Reserve tokens were earmarked for upside; if none is due, they are released per terms after settlement.

> The floor reallocates tail risk from buyer to issuer and is funded by on-chain collateral. Upside is delivered from a **non-LP reserve**, so the buyer’s upside is linear and **not subject to IL**.

***

## Numerical Walkthrough (Illustrative)

**Setup**

* Buyer deposits **100 USDC**.
* Project posts **200 TOKEN at $1.00** from treasury, split into:
  * **Tranche A (100 TOKEN)** → paired with **100 USDC** to form LP for the floor.
  * **Tranche B (100 TOKEN)** → held **in reserve** to pay upside.
* **Total initial collateral ≈ $300** (LP ≈ $200 + reserve ≈ $100).

**Case 1 — 75% drawdown (TOKEN = $0.25 at maturity)**\
Constant-product rebalancing ⇒ LP ≈ **200 TOKEN + 50 USDC** (≈ **$100** total).

* **Redemption:** Holder receives **LP worth $100** → full principal back (in LP).
* **Upside:** None (Pₘ < P₀). Reserve is unused and released per terms.

**Case 2 — 50% drawdown (TOKEN = $0.50)**\
LP value ≈ **$141.4**.

* **Redemption:** **Full principal back in LP ($100)** (drawdown ≤ 75%).
* **Upside:** None (Pₘ < P₀). Reserve is unused and released per terms.

**Case 3 — 90% drawdown (TOKEN = $0.10)**\
LP value ≈ **$63.2**.

* **Redemption:** Holder receives LP per schedule; loss beyond the 75% floor is borne by holder.
* **Upside:** None. Reserve unused; released per terms.

**Case 4 — 50% up (TOKEN = $1.50)**

* **Floor:** Not needed.
* **Upside (100% participation, uncapped):** Spot-equivalent payoff on 100 USDC is **$150**.
  * Deliver **$50 of upside** from the reserve at $1.50 ⇒ **33.33 TOKEN** from Tranche B.
  * Holder’s net economic outcome matches **linear spot** without taking IL on the upside.

_(Exact amounts depend on pool, fee tier, and final VWAP; participation/caps alter the reserve usage.)_

## Redemption & Rollover

* **Price input:** 72-hour VWAP immediately prior to maturity.
* **Settlement assets:**
  * **Floor:** LP tokens backed by collateral (holder may burn LP for constituents).
  * **Upside:** Delivered from the **reserved TOKEN** (or cash-settled per terms).
* **Rollover (optional):** Issuer can offer a new series; holders may roll or redeem.

## Risks & Considerations

* **Residual tail risk:** Losses beyond the 75% floor are borne by the holder.
* **IL avoidance applies to upside only:** The upside is reserve-funded; the LP tranche is exclusively for the floor.
* **Smart-contract risk:** Contracts are immutable/audited, but risk ≠ 0.
* **Liquidity & slippage:** AMM/pool depth affects realized unwind when burning LP.
