# Protection Status

The protection status of a Liquidity Note is represented by three color-coded indicators that reflect the current price of the underlying token relative to the issue price and the safety margin:

1. **Green Status**
   * **Condition**: The underlying token's price is **above the issue price**.
   * **Implication**: The investment is performing positively, and the Liquidity Note holder is benefiting from any potential upside. No downside protection is active since the token price has not declined below the issue price.
2. **Yellow Status**
   * **Condition**: The underlying token's price is **below the issue price** but **above the safety margin**.
   * **Implication**: The downside protection is **active**. The investor is fully protected against the price decline within this range, and their investment value remains unaffected by the decrease in the token's price up to the safety margin.
3. **Red Status**
   * **Condition**: The underlying token's price is **below the safety margin**.
   * **Implication**: The investor begins to incur losses, but they are still partially protected compared to holding the underlying token directly. The downside protection mitigates the losses, making them less severe than they would be without the Liquidity Note.



## **Example Scenario**

Assume the following:

* **Issue Price**: $100
* **Safety Margin**: $75 (25% below the issue price)

1. **Token Price at $105 (Green Status)**
   * **Status**: Green
   * **Investor Impact**: Investment is performing well. The investor benefits from any price appreciation above the issue price.
2. **Token Price at $85 (Yellow Status)**
   * **Status**: Yellow
   * **Investor Impact**: Downside protection is active. The investor does not incur any loss despite the token price being below the issue price.
3. **Token Price at $65 (Red Status)**
   * **Status**: Red
   * **Investor Impact**: The price is below the safety margin. The investor starts to experience losses but is still partially protected. The losses are less severe than if the investor held the underlying token directly.
