# Welcome to Exchequer

## Preferred tokens

Preferred tokens are a crypto-native ownership instrument. They give holders defined terms, code-enforced backing, and exposure to a project's upside through an issued onchain position.

A preferred token can be backed by collateral, cash flow, recourse, supply constraints, or another enforceable structure. The category is broader than downside protection alone. It is a way to create backed ownership for crypto-native assets.

Exchequer currently supports three primitives:

- [Liquidity Preferred](/note-types/liquidity-preferred): buyers deposit USDC or another chosen asset, while the project adds token collateral to create locked DEX liquidity.
- [Funding Preferred](/note-types/funding-preferred): buyers fund a raise and receive a protected, convertible position.
- [Conviction Preferred](/note-types/conviction-preferred): existing holders convert common tokens into a protected position funded by treasury collateral.

Each primitive points the preferred-token structure at a different issuer need: liquidity, fundraising, or holder retention. The same design space can support other preferred-token structures.

## The problem

Common-token issuance gives projects trader capital when they often need owner capital. The difference shows up quickly.

If a project wants to raise money, the standard route is usually an OTC or private token sale at a large discount. The discount is the buyer's payment for taking naked downside. It can also come back as sell pressure when the buyer hedges, sells, or locks in the spread.

Projects also face a holder reflexivity problem. When the token price falls, the people around the project read the same signal at the same time: employees, investors, users, supporters, and contributors. If everyone else may leave, leaving first becomes rational. The token becomes a coordination failure, not just a price chart.

Preferred tokens change what people are holding. The project can define backing, term, protection, conversion, or other claims before issuance. Holders receive an instrument with defined terms.

## Primitives at a glance

| | [Liquidity Preferred](/note-types/liquidity-preferred) | [Funding Preferred](/note-types/funding-preferred) | [Conviction Preferred](/note-types/conviction-preferred) |
|---|---|---|---|
| Use | Build protocol-owned liquidity | Raise capital | Retain an existing holder cohort |
| Who enters | New buyers | Buyers in a raise | Existing holders |
| Holder contribution | USDC or another chosen asset | Cash for the raise | Common tokens already held |
| Maximum protection | Up to 75% | Up to 90% | Up to 90% |
| Floor backing | Full range LP position | Project token collateral | Treasury token collateral |
| Project result | Locked DEX liquidity and fees | Capital upfront | Less sell pressure from the cohort |

## Where to go next

| Goal | Page |
|---|---|
| Build protocol-owned liquidity | [Liquidity Preferred](/note-types/liquidity-preferred) |
| Raise capital with defined buyer protection | [Funding Preferred](/note-types/funding-preferred) |
| Keep holders through an unlock or drawdown | [Conviction Preferred](/note-types/conviction-preferred) |
| Understand Liquidity Preferred collateral and settlement | [Liquidity Preferred mechanics](/protocol-mechanics) |
| Read the research base | [Research and whitepapers](/research/whitepapers) |
