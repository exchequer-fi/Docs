# Downside Protection

## Introduction

The defining idea of Exchequer Protocol is downside protection:  Instead of compensating users for providing liquidity through token incentives, Exchequer allows projects to reduces risk by **insuring the downside** for liquidity providers.

For many cryptocurrencies, the risks associated with providing liquidity in an AMM liquidity pool are not justified by the trading yields obtained. Consequently, project treasuries often need to:

* **Engage Centralized Market Makers**
* **Conduct Yield Farming Campaigns**

However, token incentives can create a **PvP (Player vs. Player) scenario**, where your profit and loss (PnL) as a liquidity provider is directly impacted by when you sell your tokens. This dynamic often results in a significant portion of liquidity providers incurring losses.

Exchequer Protocol offers a different approach. By providing downside protection, project treasuries insure liquidity providers against price declines of their cryptocurrency over a fixed period. This means:

* **No Token Incentives to Sell:** Eliminating the need to issue additional tokens reduces sell pressure and avoids diluting token value.
* **Elimination of PvP Market Structures:** With downside protection in place, liquidity providers are less likely to lose money, fostering a more cooperative and stable ecosystem.

## LP collateral

To make downside protection both permissionless and trustless, it's essential to have collateral that underwrites the protection. In the Exchequer Protocol, the **liquidity pool itself serves as the collateral**.

**Collateral Composition**

* **Project Treasury Contribution (50%)**
  * The project's treasury contributes its own cryptocurrency to the liquidity pool.
  * This portion is used to insure the downside risk of the asset.
* **User Contribution (50%)**
  * Users contribute stablecoins or ETH to the liquidity pool.
  * This represents the user's stake and potential exposure.

Typically, the liquidity pool is a **uniformly distributed full-range pool**, meaning assets are available across all price ranges within the AMM.

## Mechanism for Trustless Downside Protection

For downside protection to be trustlessly ensured, the **total value of the collateral** must exceed the value of the cryptocurrency contributed by the user. This guarantees that:

* **Sufficient Coverage:** In the event of a price decline, there's enough collateral to provide partial principal protection to the user.
* **Elimination of Counterparty Risk:** Since the collateral is on-chain and locked within the liquidity pool, users don't need to trust a third party to honor the protection.
* **Permissionless Access:** Any user can participate without needing approval from intermediaries.

## Calculating Protection vs Collateral

To illustrate how the Exchequer Protocol provides downside protection, let's walk through an example.

**Initial Setup**

* **User Contribution:** 100 USDC
* **Project Contribution:** 100 TOKEN
* **Initial TOKEN Price:** 1 USDC per TOKEN
* **Liquidity Pool Composition:**
  * 100 USDC (from the user)
  * 100 TOKEN (from the project)
* **Total Pool Value:** 200 USDC

The liquidity pool is a **uniformly distributed full-range pool**, meaning assets are available across all price ranges within the AMM.

**Scenario: TOKEN Price Declines by 75%**

* **New TOKEN Price:** 0.25 USDC per TOKEN
* **Value of TOKEN in Pool:** 200 TOKEN × 0.25 USDC = 50 USDC
* **Value of USDC in Pool:** 50 USDC
* **Total Pool Value:** 50 USDC (from TOKEN) + 50 USDC = **100 USDC**

\*To DIY calculate see ["Impermanent Loss Calculator"](https://dailydefi.org/tools/impermanent-loss-calculator/), understand the maths see, Uniswap V2 documentation on ["Understanding Returns"](https://docs.uniswap.org/contracts/v2/concepts/advanced-topics/understanding-returns).

**Impact on the User**

Under normal circumstances, the user would suffer a loss due to the price decline. However, with the Exchequer Protocol's downside protection:

* **Maximum Downside Protection Offered:** **75%**
* **User's Initial Contribution:** 100 USDC
* **Protected Amount:** Up to 75% price decline

Since the TOKEN price declined by exactly 75%, the protocol ensures that the user can redeem their **full principal of 100 USDC** upon withdrawal.

The liquidity pool's assets act as collateral to secure the user's principal.

## Considerations for Determining the Level of Downside Protection in a Liquidity Note

When configuring a Liquidity Note, one of the critical parameters to define is the **level of downside protection** offered to investors.&#x20;

1. **Risk Appetite of the Project**
   * **Assessment**: Determine the project's willingness to assume financial risk in providing downside protection.
   * **Impact**: Higher downside protection levels increase the project's financial obligations, requiring a robust treasury to cover potential losses.
   * **Example**: A project with a strong treasury may opt for 75% downside protection, while a project with limited reserves might choose a lower protection level, such as 20%.
2. **Market Volatility of the Underlying Token**
   * **Assessment**: Analyze the historical and expected volatility of the underlying token.
   * **Impact**: Higher volatility may necessitate higher downside protection to attract risk-averse investors.
   * **Example**: If the underlying token has exhibited monthly price swings of ±20%, offering 70% downside protection can provide a safety buffer for investors.
3. **Investor Demand and Expectations**
   * **Assessment**: Gauge investor preferences and the competitive landscape of similar cryptocurrencies.
   * **Impact**: Aligning downside protection levels with investor expectations can enhance the attractiveness of the Liquidity Notes.
   * **Example**: If other competitor cryptocurrencies offer 60% downside protection, setting a similar or slightly higher protection level (e.g., 70%) can position the project favorably in the market.
4. **Yield Distribution and Upside Boost Configuration**
   * **Assessment**: Balance downside protection with other features like yield distribution and upside boost.
   * **Impact**: Higher downside protection may mean adjustments to be more conservative in yield distribution or upside boost.
   * **Example**: Offering 70% downside protection might be paired with a 20% upside boost, ensuring that the project's obligations remain manageable while providing attractive returns to investors.
5. **Regulatory and Compliance Factors**
   * **Assessment**: Consider legal and regulatory requirements governing financial instruments and protections in relevant jurisdictions.
   * **Impact**: Compliance with regulations may dictate minimum or maximum levels of protection that can be offered.
   * **Example**: Regulatory guidelines might require a minimum of 50% downside protection, influencing the project's configuration choices.
