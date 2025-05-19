# Safety Margin

The **safety margin** is a specific price of the underlying cryptocurrency that determines how the downside protection mechanism applies.

## **Mechanics**

* **Full Protection Above the Safety Margin**: As long as the token's price remains above the safety margin, any decrease in price does not affect the investor's principal. The Liquidity Note absorbs all losses up to this point.
* **Partial Protection Below the Safety Margin**: If the token's price falls below the safety margin, the investor starts to experience losses. However, due to the partial protection provided by the Liquidity Note, these losses are less severe than they would be if the investor held the cryptocurrency directly.

## **Example Scenario**

1. **Initial Conditions**
   * **Token Price at Issuance**: The token is priced at **$1** when the Liquidity Note is issued.
   * **Downside Protection Level**: The Liquidity Note offers protection for the first **50%** of price decline.
     * **Safety Margin Price**: **$0.50** (which is 50% below the initial price).
2. **Price Movements and Impact on the Investor**
   * **Price Drops to $0.90**
     * **Outcome**: Price is above the safety margin ($0.90 > $0.50).
     * **Investor's Loss**: **$0**. The investor is fully protected and does not incur any loss.
   * **Price Drops to $0.50**
     * **Outcome**: Price equals the safety margin ($0.50 = $0.50).
     * **Investor's Loss**: **$0**. The investor remains fully protected.
   * **Price Drops to $0.25**
     * **Outcome**: Price is below the safety margin ($0.25 < $0.50).
     * **Investor's Loss**: The investor incurs a loss of approximately **$0.30** (vs a $0.75 loss without protection).
