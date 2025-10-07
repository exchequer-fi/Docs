# Yield D-Pro

## **Summary (TL;DR)**

* Fixed‑term ERC‑20 note backed by **on‑chain LP collateral**.
* **Partial downside protection up to a 75% drawdown**, paid **in LP tokens** at maturity using a **72‑hour VWAP** reference price.
* Buyers earn **trading‑fee yield during the term.**
* Upside comes via **LP exposure** and therefore can **underperform spot in strong rallies** due to impermanent loss (IL).

***

### What it is

Yield D-Pro gives buyers a **floor at maturity** and **yield during the term** by anchoring the note to a project‑owned LP position. It is issued and collateralized entirely on‑chain, with transparent parameters and auditable collateral. The protection leg pays out **in LP tokens** from the collateral stack.

**Who it’s for**

* Users who want **yield + protection** rather than pure spot exposure.
* Projects that want to **deepen on‑chain DEX liquidity** without opaque MM/CEX deals.

***

### Key Properties

* **Term:** Fixed maturity date (e.g., 3–12 months). Protection applies **only at maturity**.
* **Protection:** Partial, up to **75% drawdown**. If the token is down **≤ 75%** at maturity, the holder redeems **LP tokens worth the original principal**. If the drawdown **exceeds 75%**, the holder bears losses beyond the floor but is still **strictly better off than unprotected spot** over the same move.
* **Yield:** **Trading‑fee yield** from the LP position during the term, distributed either **streamed** or **accounted at settlement** (issuer‑defined). APR is variable and depends on pool activity, fee tier, and routing.
* **Upside:** Delivered via LP exposure; may **underperform spot** in strong uptrends due to IL, but can perform competitively in choppy/high‑volume regimes where fees are material.
* **Settlement asset:** Protection pays out in **LP tokens**; holders can keep LP or **withdraw to constituents** instantly by burning LP.
* **Price measure:** **72‑hour VWAP** ending at the maturity timestamp to reduce manipulation risk.

***

### Creation Mechanism

1. **Issue Notes (ERC‑20).** Project publishes terms and sells Yield D-Pro to buyers.
2. **Form LP.** Proceeds are **paired with treasury tokens** to mint a **project‑owned, full‑range LP position** (AMM/pool/fee‑tier disclosed).
3. **Post Collateral.** LP tokens are escrowed on‑chain to **back the floor**.
4. **Accrue Trading Fees.** LP trading fees accrue per the note’s distribution method (streamed vs. on‑settlement accounting).
5. **Settle at Maturity.** Redemption follows the **Payoff Logic** below using the 72‑hour VWAP.

***

### Configurable Parameters (Issuer “knobs”)

* **Term** (date/time)
* **Protection floor** (any value **up to** the 75% drawdown limit)
* **AMM/pool/fee‑tier** and routing disclosure
* **Yield distribution method** (streaming vs. on‑settlement)
* **Optional hedging policy** (if any)
* **Rollover offer** (optional) at or prior to maturity

***

### Payoff Logic at Maturity

Let _Pm_ be the **72‑hour VWAP** immediately prior to maturity and _P0_ the initial reference price.

**A) Token up or flat (Pm ≥ P0)**

* Holder redeems the **LP position** (LP tokens) per terms, including any accounted trading fees.
* Value reflects LP composition at maturity and may be **different from spot HODL** due to IL.

\*\*B) Token down, drawdown **≤ 75%**

* **Full principal protection.** Holder redeems **LP tokens worth the original principal** (paid in LP), regardless of the exact LP value.

\*\*C) Token down, drawdown **> 75%**

* **Protection capped.** Holder redeems **LP tokens per the protection schedule**; any loss beyond the 75% floor is borne by the holder. Outcome remains **strictly better than unprotected spot** over the same move.

> Protection reassigns tail risk from buyer to issuer and is funded by the escrowed LP collateral. It does not create free money.

***

### Numerical Walkthrough (illustrative)

**Setup:**

* Buyer deposits **100 USDC**; project contributes **100 TOKEN** at $1.00.
* Full‑range LP is minted with **100 USDC + 100 TOKEN** (≈ $200 initial collateral).

**Case 1 — 75% drawdown:** TOKEN = **$0.25** at maturity.

* Constant‑product rebalancing implies LP ≈ **200 TOKEN + 50 USDC** (≈ **$100** total).
* **Redemption:** Holder receives **LP tokens worth $100** → **full principal back** in LP.

**Case 2 — 50% drawdown:** TOKEN = **$0.50** at maturity.

* LP ≈ **141.42 TOKEN + 70.71 USDC** (≈ **$141.42** total, before fees).
* **Redemption:** Floor applies; holder receives **LP tokens worth $100** (full principal). Any streamed fees already paid during term are additive to realized outcome.

**Case 3 — 90% drawdown:** TOKEN = **$0.10** at maturity.

* LP ≈ **316.23 TOKEN + 31.62 USDC** (≈ **$63.24** total).
* **Redemption:** Holder receives LP per the protection schedule (value < $100). Loss beyond 75% is borne by holder, but still better than unprotected spot.

_(Figures exclude fees; exact amounts depend on pool depth, fee tier, and final VWAP.)_

***

### Redemption & Rollover

* **Price input:** **72‑hour VWAP** immediately prior to maturity.
* **Settlement asset:** LP tokens backed by collateral (holder may burn LP for constituents on‑chain).
* **Rollover (optional):** Issuer may offer a new series with revised terms; holders can accept rollover or redeem.

***

### Risks & Considerations

* **Impermanent loss (upside leg):** LP exposure can underperform spot in strong rallies.
* **Residual tail risk:** Losses **beyond** the 75% floor are borne by the holder.
* **Liquidity & slippage:** Realized unwind depends on AMM depth/fees at redemption.
* **Smart‑contract risk:** Contracts are immutable and audited, but risk cannot be eliminated.**impermanent loss** in strong one‑way rallies compared to buy‑and‑hold spot.

