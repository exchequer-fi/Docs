# Downside Protection

## What “downside protection” means (in Exchequer)

Instead of paying emissions to tempt mercenary liquidity, Exchequer lets a project **subsidize risk** for buyers of its Downside-Protected Notes (D-Pros). The project posts on-chain collateral so that, **at maturity**, buyers have a **capped worst-case** outcome.

* **Partial protection only, up to 75% drawdown.** The highest setting any issuer can choose is **75% protection**.
* **Settlement asset is LP tokens.** When protection pays, the buyer **receives LP tokens** from the collateral stack. These LP tokens are immediately sellable or holdable by the buyer.

In practice, this turns yield-spray PvP into an explicit, transparent **risk-transfer contract** between a project and its community.

***

## How the protection is collateralized (trustless by construction)

1. **Matched deposits form collateral.**
   * Buyers bring stablecoins/ETH (the “cash leg”).
   * The project contributes its own tokens (the “token leg”).
   * Together they mint a **project-owned, full-range LP position** (plus any supplemental assets the issuer specifies).
2. **LP tokens are escrowed as protection.**\
   The LP position is held on-chain to underwrite the protection.
3. **At maturity, the note settles.**
   * If the market performed well, buyers receive the **upside payoff** defined by the note type.
   * If the market fell, buyers receive **LP tokens per the protection schedule**, capping their loss up to the chosen level (max 75%).

This design is **permissionless**, **auditable**, and removes counterparty risk: the collateral is visible and bound to the note’s terms.

***

## The 75% protection cap (the important bit)

“75% protection” means the note is structured so that **if the token is down 75% at maturity, the buyer redeems LP tokens whose then-market value equals their original principal** (i.e., full principal back, paid in LP).

**If the drawdown is ≤ 75%.** The buyer’s **principal is fully protected**. At maturity they redeem **LP tokens worth their original principal**.

**If the drawdown is > 75%.** Protection is **capped** at the 75% floor. The buyer begins to take losses beyond that point, **but still redeems LP tokens per the schedule and is strictly better off than being unprotected** over the same market move.

> Protection never creates free money; it **reassigns** tail risk from the buyer to the issuer, with the cap clearly stated up front.

***

## Walkthrough example (numbers you can sanity-check)

**Initial:**

* Buyer deposits **100 USDC**.
* Project contributes **100 TOKEN** at **$1.00** each.
* A full-range LP is minted with **100 USDC + 100 TOKEN** (total $200).

**Market at maturity:** token price is **$0.25** (a **75% drop**).

* Constant-product arbitrage rebalances the pool to about **200 TOKEN + 50 USDC**.
* Total LP value ≈ **$100**.

**Protection outcome:** With **75% protection**, the buyer can redeem **LP tokens worth $100**, i.e., **their full principal**, paid **in LP tokens**. (If the drop were worse than 75%, the redeemed LP would be worth less than $100.

***

## Choosing a protection level (issuer guidance)

* **Treasury capacity vs. acquisition goals.** Higher protection (toward 75%) attracts more cautious users but consumes more treasury risk budget.
* **Token volatility.** More volatile assets typically warrant higher protection to convert fence-sitters.
* **Target audience.** Yield D-Pros appeals to yield seekers; Growth D-Pros appeals to newcomers wanting a **simple “floor + upside”** story.

Keep it explicit on your docs and launch post: **protection percentage (≤75%), settlement in LP tokens, term, and payoff style (Yield vs. Growth).** Clarity here is what converts strangers into holders.
