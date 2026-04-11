export type FAQItem = {
  question: string;
  answer: string;
  category?: "general" | "platforms" | "funding" | "payouts" | "rules";
  showOnHome?: boolean;
};

export const faqItems: FAQItem[] = [
  {
    question: "What is Hybrid Funding?",
    answer:
      "Hybrid Funding is a proprietary trading firm that provides funded accounts to traders who demonstrate skill and discipline through our evaluation programs. We offer multiple funding models — 1-Step, 2-Step, 3-Step, and Instant Funding — across forex, crypto, and futures markets.",
    category: "general",
  },
  {
    question: "What platforms does Hybrid Funding support?",
    answer:
      "We currently support cTrader, Match-Trader, and DXtrade for forex and crypto trading, and Rithmic for futures trading. Each platform offers a different trading experience so you can choose the environment that best fits your style.",
    category: "platforms",
    showOnHome: true,
  },
  {
    question: "Can I trade futures?",
    answer:
      "Yes. Futures trading is available through Rithmic with account sizes ranging from $25K to $150K. Futures evaluations follow a 4-phase structure with a 9% profit target per phase and a 25% consistency requirement.",
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
      "Hybrid Funding supports forex, cryptocurrency, and futures markets. Your available markets depend on the platform you choose — cTrader, Match-Trader, and DXtrade support forex and crypto, while Rithmic is available for futures.",
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
      "We offer four funding paths: 1-Step Challenge (single evaluation phase), 2-Step Challenge (two-phase evaluation with higher drawdown), 3-Step Challenge (three phases with lower per-phase targets), and Instant Funding (no evaluation required).",
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
];

export const homeFAQItems = faqItems.filter((item) => item.showOnHome);
