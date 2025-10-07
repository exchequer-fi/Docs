# Redemption

Downside-Protected Notes (D-Pros) — both **Yield D-Pros** and **Growth D-Pros** — have a **fixed maturity date**. Protection is **not perpetual**; it applies at settlement on that date. Fixed terms let issuers align notes with launches, listings, and treasury timelines while keeping risk and cost bounded.

### Redemption Mechanism

When a D-Pro reaches maturity, settlement uses a manipulation-resistant price:

**Price measure:** the **72-hour VWAP** of the project token immediately **prior** to the maturity timestamp.

Given that price, redemption follows this logic:

#### A) Market up or flat (no drawdown)

* **Yield** D-Pr&#x6F;**:** Holder redeems the **LP position** (LP tokens), including any accrued trading fees per terms.
* **Growth** D-Pr&#x6F;**:** Holder receives the **defined upside payoff** (spot-like participation per the note’s participation/cap).

#### B) Market down, drawdown **≤ 75%**

* **Full principal protection.** The holder redeems **LP tokens whose current market value equals their original principal** (protection pays in LP).
* Applies identically to **Yield D-Pros** and **Growth D-Pros**.

#### C) Market down, drawdown **> 75%**

* **Protection is capped.** The holder redeems **LP tokens per the protection schedule**, which absorbs losses up to the 75% floor.
* Any loss **beyond** 75% is borne by the holder; however, the redeemed LP value remains **strictly better** than being unprotected over the same move.

> **Settlement asset:** The protection leg **always settles in LP tokens** backed by the on-chain collateral. Holders can instantly withdraw LP to constituents if they prefer spot assets.

***

### Rollover / Extension (Optional)

Issuers may offer a **rollover** into a new series with a new maturity and parameters (floor up to 75%, participation/cap, term):

* **Accept rollover:** The old note is burned; a new note is issued with the updated terms.
* **Decline rollover:** Redeem under the default mechanics above (72-hour VWAP, settlement as specified).

***

#### Post-Redemption Choices (for both note types)

* **Retain LP Position:** Continue holding LP tokens to stay in the pool.
* **Withdraw Underlying Assets:** Burn LP to receive the constituent tokens and exit the position.

This structure keeps settlement **permissionless, auditable, and predictable**, while making the downside floor and settlement asset crystal clear to holders.
