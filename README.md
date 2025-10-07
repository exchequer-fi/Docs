# Exchequer Protocol Overview

## Introduction

Exchequer is the issuer standard for a new on-chain asset class: **Downside-Protected Notes (D-Pros)**.

Any ERC-20 project can issue D-Pros with its token to give holders a defined outcome: **participate in upside while receiving partial principal protection against drawdowns (up to 75%) over a fixed term**, with on-chain, auditable collateral and no trusted intermediaries. D-Pros are built from first-principles LP-derivatives (LP forwards, LP calls/puts) and structured-note design, letting projects replace blunt token incentives with precise, transparent risk transfer.

The protocol is implemented as persistent, non-upgradeable smart contracts designed for censorship resistance, security, and self-custody. Issuance and settlement are fully on-chain and permissionless.

## What is a Downside-Protected Note?

A D-Pro delivers two things over a fixed term:

* **Downside protection:** a predefined floor at maturity (**0–75%** protection).
* **Upside participation:** if the token appreciates, the note tracks upside per the issuance terms.

**Two flavors (at a glance):**

* **Yield D-Pro** — downside floor + **trading-fee yield during the term**; upside sourced via LP exposure.
* **Growth D-Pro** — downside floor + **spot-like upside with no IL on the upside**, **no coupon** during the term.

_(Details, payoff diagrams, and examples are covered on the Note Types pages.)_

## 1) Why issue D-Pros?

**Stronger holder alignment than emissions.**\
D-Pros explicitly **subsidize downside** at maturity, shifting part of price risk from buyers to the project on terms you control (floor, term, participation/cap). That credible protection attracts longer-horizon holders without spraying perpetual rewards. Costs are clear and budgetable.

**AMM-native liquidity without rent-seeking.**\
Issuance collateral **deepens on-chain DEX liquidity** as a by-product, reducing reliance on opaque, expensive MM/CEX arrangements. Liquidity stays transparent, programmable, and on-chain.

**New-user acquisition that converts.**\
Because risk is subsidized, D-Pros provide a clear **floor + upside** offer that appeals to users outside your current community—people who avoid uncushioned spot exposure but will try a defined-outcome note.

## 2) How D-Pros work (high level)

1. **Issue** the note on-chain and raise stablecoins/ETH from buyers.
2. **Post on-chain collateral** to fund the protection floor and specify upside per the note type\
   &#xNAN;_(for Yield D-Pros this includes a project-owned LP position; for Growth D-Pros, upside is replicated without IL on the upside; LP may still be part of collateral)._
3. **Settle at maturity** using a manipulation-resistant price input (e.g., 72-hour VWAP): holders receive the **protection floor (paid in LP tokens) or the defined upside payoff**, whichever is greater.

## 3) AMM-agnostic by design

D-Pros work alongside major constant-product AMMs (e.g., Uniswap, Balancer, Curve). Liquidity depth on the chosen venue is a **by-product of issuance**, not the product itself.

***

_(For specifics on redemption, LP-token settlement, ≤75% protection, and the differences between Yield D-Pro and Growth D-Pro, see the Note Types and Downside Protection pages.)_
