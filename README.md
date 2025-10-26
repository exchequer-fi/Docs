# Exchequer Protocol Overview

## Introduction

Exchequer is the issuer standard for a new on-chain asset class: **Exchequer Notes**.   Any ERC-20 project—especially actively traded tokens—can issue a **Protected Growth Token (PGT)** with its native token to give holders a defined outcome: participate in upside while receiving partial principal protection against drawdowns (up to 75%) over a fixed term, with on-chain, auditable collateral and no trusted intermediaries.&#x20;

Think of it as TGE magic without the sell pressure—repeatable, campaign-style issuance that pulls in net-new users and renews attention for mature tokens without re-running emissions.&#x20;

PGTs are built from first-principles LP-derivatives (LP forwards, LP calls/puts) and structured-note design, letting teams replace blunt token incentives with precise, transparent risk transfer.

\
The protocol is implemented as persistent, non-upgradeable smart contracts designed for censorship resistance, security, and self-custody.  Issuance and settlement are fully on-chain and permissionless.

## What is a Protected Growth Token?

A PGT delivers two things over a fixed term:

* **Downside protection:** a predefined floor at maturity (**0–75%** protection).
* **Upside participation:** if the token appreciates, the note tracks upside per the issuance terms.

PGT variants (at a glance):

* **PGT** — downside floor + **spot-like upside with no IL on the upside**, **no coupon** during the term.
* **Power PGT** — downside floor + jackpot-style upside distribution (prize-linked mechanics).  If the underlying collateral token appreciates, a share of the upside is pooled and distributed by an on-chain, provably fair drawing to winning holders at maturity; all other holders still receive the protection floor.&#x20;

_(Details, payoff diagrams, and examples are covered on the Note Types pages.)_



## TGE Magic—Without the Sell Pressure

Run repeatable, time-boxed PGT campaigns to reignite discovery, onboard new cohorts, and reward patient holders—without the long-tail dilution and mercenary behavior typical of launch-era incentives.&#x20;

Each campaign deliberately compounds deep, stable on-chain DEX liquidity for your token as a designed consequence, strengthening price discovery and execution quality while you grow users.

## 1) Why issue Protected Growth Tokens?

#### **Stronger holder alignment than emissions.**

\
PGTs explicitly subsidize downside at maturity, shifting part of price risk from buyers to the project on terms you control (floor, term, participation/cap). That credible protection attracts longer-horizon holders without spraying perpetual rewards. Costs are clear and budgetable.

#### **AMM-native liquidity without rent-seeking.**

\
Issuance collateral compacts into deeper, more stable on-chain DEX liquidity as campaigns run, reducing reliance on opaque, expensive MM/CEX arrangements. Liquidity stays transparent, programmable, and on-chain—and can be improved continuously across campaigns.

#### **New-user acquisition that converts.**

\
Because risk is subsidized, PGTs provide a clear floor + upside offer that appeals to users outside your current community—people who avoid uncushioned spot exposure but will try a defined-outcome note. The Power variant adds lottery-like excitement without compromising principal protection.

#### For established tokens.

• You’ve already paid for liquidity—now turn it into repeatable user acquisition without long-term sell pressure.\
• Run seasonal/quarterly PGT programs to refresh attention, segment cohorts, and bootstrap aligned holders.\
• Choose Growth for spot-equivalent upside or Power for jackpot-style upside to galvanize dormant audiences.\
• Coexist with existing venues and market-makers; issuance is on-chain and permissionless.\
• Replace one-off “events” with a programmable, data-driven funnel: calibrate protection levels by volatility regime and iterate each campaign.

## 2) How Protected Growth Tokens work (high level)

1. **Issue** the note on-chain and raise stablecoins/ETH from buyers.
2. **Post on-chain collateral** to fund the protection floor and specify upside per the note type\
   &#xNAN;_&#x46;or the PGT variant, upside is replicated without IL on the upside (LP may still be part of collateral). For the Power PGT variant, the protocol allocates a defined share of upside accruals into a prize pool throughout the term._
3. **Settle at maturity** using a manipulation-resistant price input (e.g., 72-hour VWAP): holders receive the **protection floor (paid in LP tokens) or the defined upside payoff**, whichever is greater.

#### Established-token scenario (illustrative).

A two-year-old token issues a 6-month Power PGT with a 50% floor to rekindle discovery ahead of a roadmap milestone. Proceeds pair with treasury tokens to collateralize and, as campaigns recur, compound deep, stable on-chain DEX liquidity.&#x20;

Throughout the term, a portion of upside accrual feeds the prize pool. At maturity, every participant receives at least the floor; winners receive additional upside from the pool—no drip emissions, no lingering sell pressure.&#x20;

The team reruns issuance quarterly, alternating between Growth and Power based on market conditions and campaign goals.

## 3) AMM-agnostic by design

PGTs work alongside major constant-product AMMs (e.g., Uniswap, Balancer, Curve). Liquidity depth on the chosen venue is the designed consequence of running PGT programs and can be tuned and compounded per campaign.

***

_(For specifics on redemption, LP-token settlement, ≤75% protection, and the differences between the PGT  and Power PGT variants, see the Note Types and Protection pages.)_
