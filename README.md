# Exchequer Protocol Overview

## Introduction

Exchequer is the issuer standard for a new on-chain asset class: **Downside Protected Notes (DPNs)**.\
\
Any ERC-20 project can issue DPNs with its token to give holders a defined outcome: **participate in upside while receiving partial principal protection against drawdowns over a fixed term**, with on-chain, auditable collateral and no trusted intermediaries. DPNs are built from first-principles LP-derivatives (LP forwards, LP calls/puts) plus a zero-coupon bond and a yield stream, letting projects replace blunt token incentives with precise, transparent risk transfer.



The protocol is implemented as persistent, non-upgradeable smart contracts designed for censorship resistance, security, and self-custody. Issuance and settlement are fully on-chain and permissionless.

## What is a Downside Protected Note?

A **Downside-Protected Note** delivers two things over a fixed term:

* **Downside protection:** a predefined floor (e.g., 0–75% principal protection) at maturity.
* **Upside participation:** if the token appreciates, the note tracks upside per the issuance terms.

### **1.** Why issue DPNs?

\
**Stronger holder alignment than emissions.**\
DPNs explicitly **subsidize downside** at maturity, shifting part of the price risk from buyers to the project on terms you control (floor, term, participation/cap). That credible protection attracts **longer-horizon, conviction holders** without spraying perpetual token rewards or renting mercenary TVL. Costs are transparent and budgetable up front, rather than open-ended emissions.

**AMM-native liquidity without rent-seeking.**\
Issuance collateral deepen **on-chain DEX liquidity** as a by-product, reducing reliance on expensive, opaque arrangements with centralized market makers and CEXs. You keep liquidity **transparent, programmable, and on-chain**, while avoiding token loans, retainers, and hidden inventory risk.

**New-user acquisition that actually converts.**\
Because the **risk is subsidized**, DPNs are **highly FOMO-inducing** compared with vanilla token buys. They give newcomers a clear floor plus upside participation, making it far easier to onboard users **outside your current community,** people who won’t touch uncushioned spot exposure but will try a defined-outcome note with protection.

### **2.** How DPNs work (high level)

1. **Issue** the note on-chain and raise stablecoins/ETH from buyers.
2. **Create project-owned liquidity** by pairing proceeds with treasury tokens, up to a 1:1 match, to form an AMM LP position without slippage.
3. **Collateralize** the note with the resulting LP tokens, calibrated to the chosen protection level.
4. **Settle** at maturity: noteholders receive par (to the protection threshold) plus any defined upside per terms.

### 3. AMM-agnostic by design

DPNs work alongside any constant-product AMM (e.g., Uniswap, Balancer, Curve, etc...).  Liquidity depth on the chosen venue is a **by-product** of issuance, not the product itself.
