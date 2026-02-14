# Implementation Guide: How to Apply This in GitBook

## New Sidebar Structure

Replace the current sidebar with:

```
Welcome to Exchequer              ← 01-welcome-to-exchequer.md
PRODUCTS
  Protected Growth Tokens (PGT)   ← 02-pgt-deep-dive.md
  Power PGT                       ← 03-power-pgt-deep-dive.md
TECHNICAL
  Protocol Mechanics              ← 04-protocol-mechanics.md
RESEARCH
  Whitepapers                     ← 05-whitepapers.md
```

## Pages to DELETE

| Current Page | Action | Reason |
|---|---|---|
| Exchequer Protocol Overview | **Replace** with `01-welcome-to-exchequer.md` | Complete rewrite |
| Protocol Overview | **Delete** | Placeholder content, no value |
| Downside Protection | **Delete** | Content merged into PGT Deep Dive (Layer 2) + Protocol Mechanics (Layer 3) |
| Exchequer Note(s) | **Delete** | Duplicate of the Note Types pages |
| Redemption | **Delete** | Content merged into PGT Deep Dive + Protocol Mechanics |
| Protected Growth Token (PGT) | **Replace** with `02-pgt-deep-dive.md` | Complete rewrite |
| Power Protected Growth Token | **Replace** with `03-power-pgt-deep-dive.md` | Complete rewrite |
| Whitepapers | **Replace** with `05-whitepapers.md` | Light polish |

**Net change:** 8 pages → 5 pages. Fewer pages, better organized, no duplicates.

## Step-by-Step GitBook Implementation

### 1. Back up current docs
Before making changes, export the current GitBook space as a backup.

### 2. Create the new page structure
In GitBook:
- Edit the home page → paste content from `01-welcome-to-exchequer.md`
- Create a "Products" group in the sidebar
- Under Products, create "Protected Growth Tokens (PGT)" → paste `02-pgt-deep-dive.md`
- Under Products, create "Power PGT" → paste `03-power-pgt-deep-dive.md`
- Create a "Technical" group
- Under Technical, create "Protocol Mechanics" → paste `04-protocol-mechanics.md`
- Keep the "Research" group
- Replace Whitepapers content with `05-whitepapers.md`

### 3. Delete old pages
Remove: Protocol Overview, Downside Protection, Exchequer Note(s), Redemption

### 4. Update internal links
The new docs reference these paths — verify they match your GitBook slugs:
- `/note-types/protected-growth-token-pgt`
- `/note-types/power-protected-growth-token-power-pgt`
- `/protocol-mechanics`
- `/research/whitepapers`

### 5. Add demo callouts
Each Layer 2 page includes blockquote callouts like:
> **In the demo:** This is the "Users are issued PGTs" box showing both backing components.

These work as-is in GitBook markdown. For extra visibility, you could convert them to GitBook "hint" blocks (info style).

## Screenshot Assets to Capture

The PGT Deep Dive page references 8 screenshots from the internal demo tool. These need to be captured from v2.exchequer.fi and uploaded to GitBook's asset storage (`.gitbook/assets/`).

### Required Screenshots

| Filename | What to Capture | Demo State |
|---|---|---|
| `pgt-flowchart-deposits.png` | Top of flowchart: "User & Project Deposits" box showing $500K USDC + 1M tokens | PGT tab → Flowchart → default values |
| `pgt-flowchart-collateral-split.png` | LP Position Created ($1M, green border) + Upside Payout Reserve (500K tokens, purple border) | Same view, scrolled slightly down |
| `pgt-flowchart-issued.png` | "Users are issued PGTs" box with backing details | Same view, scrolled to middle |
| `pgt-flowchart-yield.png` | "LP Position Earns Yield for 12 Months" section | Same view, scrolled further |
| `pgt-redemption-flat.png` | Maturity & Redemption boxes with token at $1.00 | Ending Token Price slider → $1.00 |
| `pgt-redemption-up.png` | Maturity & Redemption boxes with token at $1.50 | Ending Token Price slider → $1.50 |
| `pgt-redemption-down-protected.png` | Maturity & Redemption boxes with token at $0.50 | Ending Token Price slider → $0.50 |
| `pgt-payoff-chart.png` | "PGT2 Payoff Profile at Maturity" chart (PGT vs Standard LP vs Token Holding) | Project Dashboard tab → scroll to payoff chart |
| `pgt-project-dashboard.png` | Project Dashboard top section: total liquidity, costs, final balances | Project Dashboard tab → top of results |

### How to Capture

1. Open the internal demo (v2.exchequer.fi) in a browser
2. Select the PGT tab
3. Keep default values ($1 token, $1M liquidity, 50% protection, 15% yield, 12 months)
4. For each screenshot: navigate to the right view/scroll position, adjust the price slider if needed, and capture the relevant section
5. Crop to show only the relevant UI section (not the full page with parameters panel)
6. Upload to GitBook under `.gitbook/assets/` with the filenames above

**Important:** Do NOT link to v2.exchequer.fi anywhere in the public docs. The demo is an internal tool for in-person walkthroughs only. Screenshots are the public-facing representation.

## UI/UX Bugs to Fix (from the standup)

These are separate from the content restructure but should be addressed:

1. **Sidebar collapse behavior** — clicking a section shouldn't collapse others or jump to top
2. **Scroll tracking** — sidebar active indicator gets stuck at item #2
3. **Title contrast** — too dark against the dark background
4. **Background inconsistency** — pure black vs. not-black areas
5. **Sidebar text overflow** — long titles cut off, need padding

These are GitBook theme/CSS issues. Check if your GitBook plan supports custom CSS, or if these are fixable via theme settings.
