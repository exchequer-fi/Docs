# Exchequer Protocol Overview

## Introduction

The Exchequer protocol is a peer-to-peer system designed for cryptocurrencies ([ERC-20 Tokens](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)) to build liquidity on any AMM (e.g. [Uniswap](https://app.uniswap.org/), [Balancer,](https://app.balancer.fi/#/) [Curve](https://curve.fi/#/ethereum/swap), etc...).  The protocol is implemented as a set of persistent, non-upgradeable smart contracts; designed to prioritize censorship resistance, security, self-custody, and to function without any trusted intermediaries.

## How does the Exchequer protocol compare to traditional crypto liquidity building?

The core characteristic of an Automated Market Maker (AMM) is that buyers and sellers trade directly with a liquidity pool. The deeper the liquidity pool, the less slippage traders experience during transactions. Therefore, building deep liquidity on an AMM is crucial for any cryptocurrency.

After the popularization of Automated Market Makers (AMMs) by Uniswap, **token incentives** became a common strategy for building liquidity pools. These incentives are used in two primary ways:

### **1. On-Chain Yield farming**

\
Cryptocurrencies can build liquidity directly on-chain by asking users to deposit assets into liquidity pools.  In return, users receive token rewards from the project's treasury, a method known as **yield farming**.

Exchequer Protocol takes a different approach. Instead of offering token incentives, project treasuries  **insures the downside price risk** of their cryptocurrency for a fixed period. This means that if the price of the project's cryptocurrency declines, liquidity providers receive either full or partial principal protection.

### **2. Off-Chain Market Makers**

\
Traditionally, cryptocurrencies have engaged **centralized market makers** to build liquidity on AMMs or centralized exchanges (CEXs). Projects pay for these market-making services using tokens from their treasuries. Market makers often sell these tokens to make a profit.

The **Exchequer Protocol** offers a different approach. Its permissionless and immutable design allows cryptocurrencies to build liquidity transparently on-chain without intermediaries. This eliminates the need to issue token incentives or rely on centralized entities.
