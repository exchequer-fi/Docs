# Research & Whitepapers

The Exchequer protocol is built on a series of peer-reviewed papers that establish the mathematical foundations for LP-derivative instruments. These papers introduce the formal frameworks for LP forwards, LP options, and structured notes that underpin PGTs.

---

## Foundational Papers

### 1. Evaluating Liquidity Provision Strategies for Automated Market Makers
When does AMM yield truly beat holding the tokens directly? This paper derives the hurdle rate where expected trading fees offset the drag from impermanent loss.
> [Read on SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4865295)

### 2. The LP Forward Contract: Quantifying Liquidity-Position Risk in DeFi
Introduces the first closed-form hedge for LP position risk. Strips out AMM yield to price the pure "LP spot" exposure via a forward contract — the foundational building block for hedging LP risk.
> [Read on SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4867032)

### 3. Liquidity Position Options: Transforming DeFi with Novel Risk-Management Primitives
Introduces LP calls and puts with put-call parity for liquidity positions (closed-form Black-Scholes pricing after a power-½ transform). Enables impermanent loss caps, volatility trading, and the structured notes that become PGTs.
> [Read on SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4867034)

### 4. A Novel Financial Instrument for DeFi: Liquidity Protection Notes
Packages zero-coupon bonds with LP options (and optional yield) into a note format that funds up to 75% downside protection without inflationary token emissions. This is the paper that most directly describes the PGT mechanism.
> [Read on SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4867036)

---

## Citing This Work

If you reference or adapt these models in your own research, please cite the relevant SSRN paper and link to the Exchequer documentation hub: [docs.exchequer.fi](https://docs.exchequer.fi)

For research collaborations: [exchequer.fi/contact](https://www.exchequer.fi/contact)
