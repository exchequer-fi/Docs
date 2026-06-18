# Research and whitepapers

These papers are the research base for Exchequer's LP instruments and protected token structures. They cover LP yield, LP risk, LP options, and protected-note construction.

## Papers

1. Evaluating Liquidity Provision Strategies for Automated Market Makers

   Derives the hurdle rate where expected trading fees offset impermanent loss. In the paper's framing, LP tokens carry a -sigma^2/8 convexity drag, so an LP must clear y > sigma^2/8 to outperform holding.

   SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4865295

2. The LP Forward Contract: Quantifying Liquidity-Position Risk in DeFi

   Separates LP yield from price exposure so impermanent loss can be priced as an explicit premium through Black-Scholes. The paper decomposes an LP position into a price risk leg and a yield leg.

   SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4867032

3. Liquidity Position Options: Transforming DeFi with Novel Risk-Management Primitives

   Defines LP calls and puts with put-call parity after a power 1/2 transform. This gives the framework for impermanent loss caps, volatility exposure, and LP-linked structured notes.

   SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4867034

4. A Novel Financial Instrument for DeFi: Liquidity Protection Notes

   Packages a zero coupon bond with LP options into a note that funds downside protection through structured collateral.

   SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4867036

## How they connect

The first paper asks when LPing beats holding. The second prices LP risk. The third turns that risk into options. The fourth packages those pieces into a protected note.

Liquidity Preferred follows that path through a full range LP position and an upside reserve.

## Citation

If you reference or adapt these models, cite the relevant SSRN paper and link docs.exchequer.fi. For research collaborations, use exchequer.fi/contact.
