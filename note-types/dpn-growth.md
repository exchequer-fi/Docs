# DPN-Growth

## **Summary (TL;DR)**

* Fixed‑term ERC‑20 note with a **downside floor (max 75% drawdown)** and **spot‑like upside participation**.
* **No coupon/yield** during the term; all value settles at maturity.
* **No impermanent loss on the upside** — upside is replicated, not held as an LP.
* **Protection settles in LP tokens** at maturity using a **72‑hour VWAP** to determine settlement amounts.

***

## What it is

A DPN‑Growth gives buyers a **defined floor** on principal at maturity (capped at a 75% drawdown) **and** participation in upside without the rebalancing drag typical of AMM LPs. It is issued and collateralized entirely on‑chain, with transparent parameters and auditable collateral.

**Who it’s for**

* New or cautious users who want a **simple “floor + upside”** profile rather than yield.
* Projects that want to **deepen on‑chain DEX liquidity** without opaque MM/CEX deals.

***

## Key Properties

* **Term:** Fixed maturity date (e.g., 3–12 months).
* **Protection:** Partial, **up to 75% drawdown**. If the token is down **≤ 75%** at maturity, holder redeems **LP tokens worth original principal**; **> 75%** drawdown is uncapped for the residual portion (see Payoff Logic).
* **Upside:** **Spot‑like participation** per an issuer‑set participation rate and optional cap; **no IL on the upside**.
* **Yield:** **None** during the term (zero coupon).
* **Settlement asset:** Protection pays out in **LP tokens** backed by on‑chain collateral; holders can keep LP or withdraw to constituents.
* **Price measure:** **72‑hour VWAP** ending at the maturity timestamp to reduce price‑manipulation risk.

***

## Creation Mechanism

1. **Issue Notes (ERC‑20).** The project publishes terms and sells DPN‑Growth notes to buyers.
2. **Collateralize & Replicate.** Issuer combines proceeds with treasury assets to:
   * (a) **Fund the downside floor** (up to 75%) via escrowed LP collateral; and
   * (b) **Replicate spot‑like upside** _without_ relying on LP exposure for the upside leg.
3. **LP formation.** Project form project‑owned LP as part of the collateral stack; any yield remains in collateral and is **not** paid as a coupon.
4. **On‑chain escrow.** Collateral (including LP tokens) is locked in protocol contracts and auditable by anyone.
5. **Settle at maturity.** Redemption follows the **Payoff Logic** below using the 72‑hour VWAP.

***

## Configurable Parameters (Issuer “knobs”)

* **Term** (date/time)
* **Protection floor** (any value up to the 75% drawdown limit)
* **Upside participation** (e.g., 100%, 125%); **optional cap**
* **AMM/pool selection** for LP collateral
* **Rollover offer** (optional) at or prior to maturity

***

## Payoff Logic at Maturity

Let _P0_ be the VWAP at issuance (or the reference notional used) and _Pm_ the **72‑hour VWAP** immediately prior to maturity.

**A) Drawdown ≤ 75%**

* Holder redeems **LP tokens worth the original principal** (full principal back, paid in LP). If upside conditions also apply (e.g., Pm ≥ P0), the upside payoff is delivered per terms; otherwise the floor applies.

**B) Drawdown > 75%**

* Protection is **capped**. Holder redeems **LP tokens per the protection schedule**, absorbing losses beyond 75%. The outcome remains **strictly better than unprotected spot** over the same move.

**C) Token up or flat**

* Holder receives the **defined upside payoff** based on participation (and any cap). No coupon is paid for the term.

> Protection reallocates tail risk from buyer to issuer. It is funded by on‑chain collateral and **does not** create free money.

***

## Numerical Walkthrough

**Setup:**

* Buyer deposits **100 USDC**.
* Project posts **100 TOKEN** at $1.00 and forms collateral including a full‑range LP.
* Total initial collateral ≈ **$200**.

**Case 1 — 75% drawdown:** TOKEN = **$0.25** at maturity.

* Constant‑product rebalancing implies LP ≈ **200 TOKEN + 50 USDC** (≈ **$100** total).
* **Redemption:** Buyer receives **LP tokens worth $100** → **full principal back** in LP.

**Case 2 — 50% drawdown:** TOKEN = **$0.50**.

* LP value ≈ **$141.4**. Protection **≤ 75%** ⇒ **full principal** back in LP (**$100**), plus upside leg per terms if applicable.

**Case 3 — 90% drawdown:** TOKEN = **$0.10**.

* LP value ≈ **$63.2**.
* **Redemption:** Buyer receives LP per schedule; loss beyond 75% is borne by holder. Outcome is still better than unprotected spot.

_(Illustrative only; exact amounts depend on pool, fee tier, and final VWAP.)_

***

## Redemption & Rollover

* **Price input:** **72‑hour VWAP** immediately prior to maturity.
* **Settlement asset:** LP tokens backed by collateral (holder may burn LP for constituents).
* **Rollover (optional):** Issuer can offer a new series with fresh terms; holders may accept the rollover or redeem.

***

## Risks & Considerations

* **Residual tail risk:** Losses **beyond** the 75% floor are borne by the holder.
* **LP‑token settlement:** Payout is in LP; market value is determined by the AMM state at maturity (using VWAP). Holders can immediately withdraw to spot.
* **Smart‑contract risk:** Contracts are immutable and audited, but risk cannot be reduced to zero.
* **Liquidity & slippage:** AMM/pool choice and depth affect realized unwind when burning LP.

***
