# Upside Boost

Upside Boost is a feature that allows a cryptocurrency project to provide Liquidity Note holders with additional upside potential beyond what they would normally receive from the underlying LP collateral. While downside protection addresses the risk of the cryptocurrency's price decreasing, Upside Boost focuses on rewarding holders when the price of the project's cryptocurrency increases.

By incorporating Upside Boost into Liquidity Notes, projects can offer investors enhanced returns during positive market movements.

## LP collateral

To make upside boost both permissionless and trustless, it's essential to have collateral that underwrites the upside boost. In the Exchequer Protocol, the **liquidity pool itself serves as the collateral**.

**Collateral Composition**

* **Project Treasury Contribution (50%)**
  * The project's treasury contributes its own cryptocurrency to the liquidity pool.
  * This portion is used to boost the upside potential of the asset.
* **User Contribution (50%)**
  * Users contribute stablecoins or ETH to the liquidity pool.
  * This represents the user's stake and potential upside.

Typically, the liquidity pool is a **uniformly distributed full-range pool**, meaning assets are available across all price ranges within the AMM.



## Mechanism

When the price of the project's cryptocurrency increases, the **Upside Boost** feature allows Liquidity Note holders to receive additional gains beyond the standard appreciation of the underlying LP collateral. The upside is calculated based on the collateral itself, and the Upside Boost can be configured to provide up to **200% of the potential upside**.

**Example Scenario**

* **Initial Conditions**:
  * **Price Increase**: The price of the project's cryptocurrency rises by **30%**.
  * **LP Token Appreciation**: Due to the liquidity pool return dynamics, the underlying LP tokens appreciate by approximately **14%**. \*

\*To DIY calculate see ["Impermanent Loss Calculator"](https://dailydefi.org/tools/impermanent-loss-calculator/), understand the maths see, Uniswap V2 documentation on ["Understanding Returns"](https://docs.uniswap.org/contracts/v2/concepts/advanced-topics/understanding-returns).

* **Without Upside Boost**:
  * The Liquidity Note holder would receive a **14%** return upon redemption, corresponding to the appreciation of the LP collateral.
* **With Upside Boost**:
  * The project decides to enhance the holder's returns by sharing a portion of its gains from the LP collateral.
  * Since the project's share of the collateral is **50%**, it can boost the holder's upside by up to **200%**.
  * **Enhanced Return**: The holder's return is increased from **14%** to **28%**.

## Considerations for Determining the Level of Upside Boost in a Liquidity Note

When configuring a Liquidity Note, determining the appropriate **level of Upside Boost** is essential for balancing investor incentives with the project's financial sustainability. The Upside Boost feature enhances the potential returns for Liquidity Note holders when the price of the underlying token appreciates.

1. **Desired Incentive for Investors**
   * **Assessment**: Determine how much additional return is necessary to attract and retain investors.
   * **Impact**: Higher Upside Boost levels make the Liquidity Note more attractive by offering greater potential rewards, potentially increasing demand and participation.
   * **Example**: Offering a 200% Upside Boost can significantly enhance investor returns, making the Liquidity Note more competitive in the market.
2. **Balancing with Downside Protection and Yield Distribution**
   * **Assessment**: Ensure that the Upside Boost level complements other features such as downside protection and yield distribution without overextending the project’s financial obligations.
   * **Impact**: A higher Upside Boost may necessitate adjustments in downside protection levels or yield distribution to maintain overall financial balance.
   * **Example**: If a project offers a 150% Upside Boost, it may opt for a moderate downside protection level (e.g., 20%) and a balanced yield distribution (e.g., 80%) to ensure sustainability.
3. **Market Volatility and Token Performance**
   * **Assessment**: Analyze the historical and projected volatility of the underlying token to gauge realistic Upside Boost levels.
   * **Impact**: In highly volatile markets, higher Upside Boost levels can offer substantial rewards during price surges.
   * **Example**: For a cryptocurrency with an average annual price appreciation of it's LP collateral of 10%, a 200% Upside Boost would provide a 10% additional return, aligning incentives with expected market performance.
4. **Competitive Landscape**
   * **Assessment**: Compare Upside Boost levels offered by similar financial instruments in the market.
   * **Impact**: Setting Upside Boost levels in line with or slightly above competitors can enhance the Liquidity Note’s attractiveness.
   * **Example**: If comparable Liquidity Notes offer up to a 150% Upside Boost, setting a similar or slightly higher level (e.g., 160%) can position the project favorably.
5. **Regulatory and Compliance Factors**
   * **Assessment**: Ensure that Upside Boost configurations comply with relevant financial regulations and standards in applicable jurisdictions.
   * **Impact**: Regulatory constraints may limit the maximum feasible Upside Boost level or require specific disclosures.
   * **Example**: Certain jurisdictions might impose caps on additional returns provided through Upside Boost, influencing the project to set a compliant level (e.g., capping Upside Boost at 120%).
6. **Long-Term Sustainability**
   * **Assessment**: Consider the long-term implications of the chosen Upside Boost level on the project’s financial health and ability to fulfill obligations over multiple Liquidity Note cycles.
   * **Impact**: Ensuring that Upside Boost levels are sustainable prevents potential financial strain and maintains investor trust.
   * **Example**: Setting an Upside Boost level of 100% ensures that the project can consistently honor its obligations without depleting its treasury, even during extended periods of token appreciation.



