# Liquidity Preferred mechanics

This page covers Liquidity Preferred collateral, LP rebalancing, settlement, fees, and contract design.

## Collateral structure

Liquidity Preferred uses two collateral buckets.

| Bucket | Contents | Role |
|---|---|---|
| LP position | Buyer deposit plus project tokens in a full range AMM position | Funds the downside floor |
| Upside reserve | Project tokens held outside the LP | Pays upside if the token appreciates |

The buyer deposits USDC or another asset selected by the issuer. The project contributes its own tokens. Part of those tokens pairs with the buyer deposit in the LP position. The rest sits in the reserve.

The LP position keeps value inside the structure when price falls. The reserve pays upside when the token appreciates.

## Why the LP position funds the floor

In a constant product AMM, the LP position rebalances as price changes. When the project token falls, the LP accumulates more project tokens and releases more of the deposit asset. The LP value still falls, but inside the protected band it falls more slowly than a naked spot position.

That rebalancing effect is what funds the floor. If the token drawdown stays inside the selected protection level, the LP position can cover the holder's principal value at maturity. If the drawdown goes beyond the floor, the holder takes the loss past that protected band.

## Protection level

The issuer sets the protection level before launch. In these docs, Liquidity Preferred is modeled with protection up to 75%.

| Protection | Meaning at maturity |
|---|---|
| Token flat or up | Holder keeps upside through the reserve |
| Token down inside the floor | Holder receives principal value in LP tokens |
| Token down beyond the floor | Holder receives the remaining protected value and takes the excess loss |

The floor is a term of the issued position and is backed by collateral already committed to the structure.

## Maturity settlement

Liquidity Preferred settles at maturity against a 72-hour VWAP of the underlying token.

| Scenario | Settlement |
|---|---|
| Price is flat or up | Holder receives principal plus upside from the reserve |
| Price is down inside the floor | Holder receives principal value in LP tokens |
| Price is down beyond the floor | Holder receives the remaining LP-backed value |

The project receives the remaining LP position, unused reserve tokens, and trading fee yield after holder settlement and protocol fees.

## Early redemption

Protection applies at maturity. Before maturity, a holder can redeem early for a 2% fee.

| Price at early redemption | Holder receives |
|---|---|
| Above initial price | Principal plus reserve upside, less the fee |
| Below initial price | Current LP market value, less the fee |

Early redemptions below the initial price settle at current LP market value. Of the 2% early-redemption fee, 80% goes to the project and 20% goes to Exchequer.

## Trading fee yield

The LP position earns DEX trading fees while it is locked. Trading fee yield accrues to the project, with Exchequer taking 10% of LP trading fees.

| Fee source | Split |
|---|---|
| LP trading fees | 90% project, 10% Exchequer |
| Early redemption fee | 80% project, 20% Exchequer |

For example, if a campaign earns $150K in LP trading fees, $135K goes to the project and $15K goes to Exchequer.

## AMM support

Liquidity Preferred is designed for major constant product AMMs, including Uniswap, Balancer, Curve, and Camelot. The issuer chooses the venue. The LP position is full range so it can support liquidity across the price path instead of only around the current tick.

## Contract design

Contracts are immutable after deployment. They use no admin keys, proxies, or upgrade mechanisms. Once deployed, the logic cannot change.

Any ERC-20 project can issue through the protocol, subject to safety and liquidity prerequisites. Settlement is automatic at maturity through the configured oracle and contract terms.

Contracts undergo independent third party audits before mainnet deployment. Audit reports are published in full.

## Onchain visibility

Collateral is visible onchain at all times. For Liquidity Preferred, this includes the LP position address, reserve balances, position terms, maturity, protection floor, and oracle settings.
