export type FAQItem = {
  question: string;
  answer: string;
  category?: "general" | "platforms" | "funding" | "payouts" | "rules" | "equities";
  showOnHome?: boolean;
};

export const faqItems: FAQItem[] = [
  {
    question: "What is Hybrid Funding?",
    answer:
      "Hybrid Funding is a proprietary trading firm that provides funded accounts to traders who demonstrate skill and discipline through our evaluation programs. We offer multiple funding models — 1-Step, 2-Step, 3-Step, Instant Funding, and Single Session Equities — across forex, crypto, futures, and S&P 100 equities markets.",
    category: "general",
  },
  {
    question: "What platforms does Hybrid Funding support?",
    answer:
      "We currently support cTrader, Match-Trader, and DXtrade for forex and crypto, Rithmic for futures, and GooeyPro for Single Session Equities. Tradovate support is coming soon for futures traders.",
    category: "platforms",
    showOnHome: true,
  },
  {
    question: "Can I trade futures?",
    answer:
      "Yes. Futures trading is available today through Rithmic with account sizes ranging from $25K to $150K. Futures evaluations follow a 4-phase structure with a 9% profit target per phase and a 25% consistency requirement. Tradovate support is coming soon for traders who prefer that environment.",
    category: "platforms",
    showOnHome: true,
  },
  {
    question: "Can I trade equities?",
    answer:
      "Yes. Our Single Session Equities program is now live on the GooeyPro platform. Trade S&P 100 equity products with 2:1 leverage during the regular U.S. session (09:30 ET – 15:55 ET). All positions must be closed by 15:55 ET — no overnight holding.",
    category: "platforms",
    showOnHome: true,
  },
  {
    question: "Is Tradovate supported?",
    answer:
      "Tradovate support is coming soon. It is on our roadmap as we continue expanding platform options. In the meantime, futures traders can get started immediately using Rithmic.",
    category: "platforms",
    showOnHome: true,
  },
  {
    question: "What markets can I trade?",
    answer:
      "Hybrid Funding supports forex, cryptocurrency, futures, and U.S. equities (S&P 100). Your available markets depend on the platform you choose — cTrader, Match-Trader, and DXtrade support forex and crypto, Rithmic is available for futures (with Tradovate coming soon), and GooeyPro powers our Single Session Equities program.",
    category: "general",
  },
  {
    question: "How do payouts work?",
    answer:
      "After generating profit in your funded account, you can request your first withdrawal at any time. Subsequent withdrawals are available every 30 days with a minimum of $100 or 1% of your starting balance (whichever is greater). Payouts are processed within 1–3 business days.",
    category: "payouts",
    showOnHome: true,
  },
  {
    question: "Which funding model is best for me?",
    answer:
      "It depends on your trading style. The 1-Step Challenge is the fastest path with a single evaluation phase. The 2-Step offers more drawdown room with a balanced approach. The 3-Step has lower per-phase targets for consistent traders. Instant Funding skips evaluation entirely for traders who want immediate access.",
    category: "funding",
    showOnHome: true,
  },
  {
    question: "How quickly can I get started?",
    answer:
      "You can start your evaluation immediately after purchase. For Instant Funding accounts, you gain access right away. Funded accounts are delivered within 24–48 business hours after verification.",
    category: "funding",
    showOnHome: true,
  },
  {
    question: "What funding models do you offer?",
    answer:
      "We offer five funding paths: 1-Step Challenge (single evaluation phase), 2-Step Challenge (two-phase evaluation with higher drawdown), 3-Step Challenge (three phases with lower per-phase targets), Instant Funding (no evaluation required), and Single Session Equities (intraday day trading on GooeyPro).",
    category: "funding",
  },
  {
    question: "Are there one-time fees or recurring fees?",
    answer:
      "All challenge and program fees are one-time entry fees. There are no monthly subscriptions or recurring charges. You pay once to start your evaluation or funded account.",
    category: "funding",
  },
  {
    question: "What happens if I break a rule?",
    answer:
      "Breaching a hard rule — such as exceeding maximum drawdown, daily loss limits, or the 30-day inactivity threshold — results in account termination. Soft rules may trigger warnings. We recommend reviewing the specific rules for your chosen program before starting.",
    category: "rules",
  },
  {
    question: "How do I choose the right program?",
    answer:
      "Consider your experience level, risk tolerance, and trading style. Aggressive traders may prefer the 1-Step for speed. Balanced traders often choose the 2-Step for extra drawdown room. Consistent traders benefit from the 3-Step's lower targets. If you want to skip evaluation, Instant Funding gets you trading immediately.",
    category: "funding",
  },
  {
    question: "How does Rithmic work for futures?",
    answer:
      "Rithmic provides professional-grade futures connectivity with ultra-low latency execution. Futures evaluations have a 4-phase structure with 9% profit targets, 5% trailing max drawdown (EOD basis), and a 25% consistency requirement. After completing all phases, you receive a live funded account with 90% profit share.",
    category: "platforms",
  },
  {
    question: "Is Tradovate coming?",
    answer:
      "Yes, Tradovate support is planned and on our roadmap. We are expanding platform options to give futures traders more choices. Currently, futures trading is fully supported via Rithmic.",
    category: "platforms",
  },

  // Single Session Equities
  {
    question: "What is Single Session Equities trading?",
    answer:
      "Single Session Equities trading is designed for traders who intend to open and close all positions within the same trading session. Positions may not be carried beyond 15:55 ET.",
    category: "equities",
  },
  {
    question: "Do I have to close all equities positions before the session ends?",
    answer:
      "Yes. It is the responsibility of the trader to ensure that all positions are closed before 15:55 ET.",
    category: "equities",
  },
  {
    question: "What happens if I still have an equities position open at 15:55 ET?",
    answer:
      "The platform will attempt to automatically close any open positions at 15:55 ET. However, it is the trader's responsibility to ensure all positions are closed on or before this time. If a position remains open past that cutoff, it will be treated as a violation of the Prohibited Practices and result in a hard breach.",
    category: "equities",
  },
  {
    question: "What products can I trade in Single Session Equities?",
    answer:
      "You may trade any S&P 100 equity products made available on the platform for this program.",
    category: "equities",
  },
  {
    question: "What platform is available for Equities trading?",
    answer:
      "Equities trading is available via the GooeyPro trading platform only.",
    category: "equities",
  },
  {
    question: "What leverage is available for Equities?",
    answer:
      "Equities trading is offered with 2:1 leverage.",
    category: "equities",
  },
  {
    question: "How is a trading session defined for Equities?",
    answer:
      "For Equities trading, the permitted Trading Session is 09:30 ET through 15:55 ET only. Although U.S. equities may trade during Pre-Market, Regular Market, and Extended Hours sessions, trading outside of this permitted window is not allowed. All Single Session Equities positions must be fully closed by 15:55 ET.",
    category: "equities",
  },
  {
    question: "What commissions apply to Equities?",
    answer:
      "Commissions are $0.02 per share per side, subject to a minimum commission of $0.50 per transaction.",
    category: "equities",
  },
  {
    question: "Where do equities liquidity, pricing, and execution come from?",
    answer:
      "Liquidity, pricing, and execution are sourced and provided directly from Nasdaq.",
    category: "equities",
  },
  {
    question: "What is the Equities Profit Target (Evaluation phase)?",
    answer:
      "You must achieve 10% returns in the Evaluation phase to progress to the Funded phase (assuming the minimum profitable trading days requirement is also met).",
    category: "equities",
  },
  {
    question: "What is the Equities Max Drawdown?",
    answer:
      "The Max Drawdown is a 3.0% Maximum Trailing Drawdown based on closed balance only, not equity. It begins 3.0% below your starting balance and trails upward as your closed balance reaches new highs. Once the account reaches a 3.0% return, the Max Drawdown stops trailing and is permanently locked at the starting balance. A violation of the Max Drawdown is considered a hard breach. Example: On a $100,000 account, the starting Max Drawdown threshold is $97,000. If your closed balance increases to $102,000, that becomes your new high-water mark and your Max Drawdown threshold moves up to $99,000. If your closed balance then increases to $103,000, the Max Drawdown threshold locks at your starting balance of $100,000 and no longer trails upward.",
    category: "equities",
  },
  {
    question: "What is the Daily Loss Limit for Equities?",
    answer:
      "The Daily Loss Limit is the maximum amount an account may lose on a single trading day. A violation is considered a hard breach and the account will be terminated. The Daily Loss Limit follows an intraday trailing drawdown. The level trails the greater of the daily balance high-water mark and the daily equity high-water mark. Example: On a $100,000 account with a 2.5% Daily Loss Limit, the starting breach level for the day is $97,500. If during the day equity reaches $102,000 and balance reaches $101,000, the higher value of $102,000 becomes the daily high-water mark. The new breach threshold becomes $99,450, which is 2.5% below $102,000. If equity falls below that amount during the day, the account breaches. If the day ends with both balance and equity at $101,000, then the next day begins with a new breach threshold of $98,475, which is 2.5% below $101,000.",
    category: "equities",
  },
  {
    question: "What is the Daily Profit Cap for Equities (Evaluation phase only)?",
    answer:
      "The Daily Profit Cap applies during the Evaluation phase. A violation of this limit is considered a daily pause. If exceeded, any open trades will be closed, all open orders will be cancelled, and the account will be disabled for the remainder of the current session. The account will be re-enabled on the next trading day. This is calculated as a fixed value (2.5%) from the day's starting equity. Example: On a $100,000 account with a 2.5% Daily Profit Cap, assume the day begins with equity of $102,000. The profit cap for that day is $104,500. If account equity exceeds that amount, positions are closed and the account is paused for the rest of the day. If the account settles at $104,600 after liquidation, the account may trade again the next trading day after 17:00 ET, and the new daily cap is then based on the new day's starting equity.",
    category: "equities",
  },
  {
    question: "What is the Equities Consistency Rule (Funded phase only)?",
    answer:
      "Funded equities phases are subject to a 25% consistency requirement. This means that no more than 25% of total profits may be generated on a single trading day to qualify for a payout. Optional add-ons are available at checkout to allow for a higher consistency limit (33% or 50%).",
    category: "equities",
  },
  {
    question: "What are the minimum profitable trading day requirements for Equities?",
    answer:
      "To proceed to the next phase or become eligible for a payout, you must generate at least 0.50% profit per day over three separate trading days in both the Evaluation and Funded phases, in addition to meeting all other applicable requirements.",
    category: "equities",
  },
  {
    question: "What is the minimum hold time for equities positions?",
    answer:
      "All trades must be held for at least 1 minute. Any trade that is held for less than this time frame will be deemed a violation and any profits generated from this trade will be forfeited.",
    category: "equities",
  },
  {
    question: "What is the Equities Profit Split (Funded phase only)?",
    answer:
      "Funded equities accounts are eligible for an 80/20 profit split on gains. This means the trader receives 80% of eligible profits, and the remaining 20% is retained by the firm. A 90% profit share upgrade is available as an optional add-on.",
    category: "equities",
  },
  {
    question: "What is the Payout Protector add-on?",
    answer:
      "Payout Protector is an optional point-of-sale add-on available for an additional 25% cost. It protects a trader's eligible profit share in a Funded account in the event of a hard breach.",
    category: "equities",
  },
  {
    question: "How often can I request an Equities payout?",
    answer:
      "The first payout may be requested after 14 days in the Funded phase. After that, payouts may be requested every 14 days, provided all applicable payout conditions and program rules have been satisfied.",
    category: "equities",
  },
  {
    question: "What is Lock Upon Payout for Equities?",
    answer:
      "Lock Upon Payout is enabled by default on all plans. This means that once a payout is processed, your Max Drawdown is permanently locked at the original starting balance. Traders may elect to purchase an add-on at checkout for an additional 25% of the plan price to disable this feature. Example: If a trader has a $100,000 account and grows the balance to $110,000, once a payout is processed the Max Drawdown becomes permanently locked at $100,000. From that point forward, the account balance may not fall below $100,000. If it does, the account will be considered breached.",
    category: "equities",
  },
  {
    question: "Is there a minimum withdrawal amount for Equities?",
    answer:
      "Yes. The minimum withdrawal amount is $100 when requesting a payout through the platform.",
    category: "equities",
  },
];

export const homeFAQItems = faqItems.filter((item) => item.showOnHome);
