export type AccountSize = {
  size: string;
  price: string;
};

export type Program = {
  id: string;
  name: string;
  slug: string;
  description: string;
  highlight: string;
  profitSplit: string;
  profitSplitPremium: string;
  phases: number | null;
  forexTargets: {
    profitTarget: string;
    maxDrawdown: string;
    dailyLoss?: string;
    leverage: string;
    phase2ProfitTarget?: string;
    phase2MaxDrawdown?: string;
  };
  cryptoTargets?: {
    profitTarget: string;
    maxDrawdown: string;
    dailyLoss?: string;
    leverage: string;
    phase2ProfitTarget?: string;
    phase2MaxDrawdown?: string;
  };
  futuresTargets?: {
    profitTarget: string;
    maxDrawdown: string;
    consistency: string;
    phases: number;
  };
  rules: string[];
  forexPricing: AccountSize[];
  cryptoPricing?: AccountSize[];
  futuresPricing?: AccountSize[];
  instantFundingPricing?: AccountSize[];
  platforms: string[];
};

export const programs: Program[] = [
  {
    id: "one-step",
    name: "1-Step Challenge",
    slug: "one-step",
    description:
      "One evaluation phase to prove your trading skills and get funded.",
    highlight: "Single phase evaluation — fast path to funding",
    profitSplit: "75–80%",
    profitSplitPremium: "90% (with add-on)",
    phases: 1,
    forexTargets: {
      profitTarget: "10%",
      maxDrawdown: "6%",
      leverage: "1:20",
    },
    cryptoTargets: {
      profitTarget: "9%",
      maxDrawdown: "6%",
      leverage: "5:1 BTC/ETH, 2:1 others",
    },
    futuresTargets: {
      profitTarget: "9% per phase",
      maxDrawdown: "5% trailing (EOD)",
      consistency: "Best day ≤ 25% of total profit",
      phases: 4,
    },
    rules: [
      "30-day inactivity limit",
      "No weekend holding (Forex, unless add-on purchased)",
      "Daily reset at 5 PM EST",
    ],
    forexPricing: [
      { size: "$5,000", price: "$48" },
      { size: "$10,000", price: "$88" },
      { size: "$25,000", price: "$228" },
      { size: "$50,000", price: "$428" },
      { size: "$100,000", price: "$888" },
      { size: "$200,000", price: "$1,788" },
      { size: "$250,000", price: "$2,128" },
      { size: "$500,000", price: "$4,888" },
      { size: "$1,000,000", price: "$8,888" },
    ],
    cryptoPricing: [
      { size: "$5,000", price: "$48" },
      { size: "$10,000", price: "$98" },
      { size: "$25,000", price: "$258" },
      { size: "$50,000", price: "$588" },
      { size: "$100,000", price: "$1,088" },
      { size: "$200,000", price: "$2,188" },
    ],
    futuresPricing: [
      { size: "$25,000", price: "$298" },
      { size: "$50,000", price: "$598" },
      { size: "$100,000", price: "$1,098" },
      { size: "$150,000", price: "$1,758" },
    ],
    platforms: ["cTrader", "Match-Trader", "DXtrade", "Rithmic"],
  },
  {
    id: "two-step",
    name: "2-Step Challenge",
    slug: "two-step",
    description:
      "Two-phase evaluation with more room for drawdown and a balanced approach.",
    highlight: "Balanced evaluation with higher drawdown allowance",
    profitSplit: "75–80%",
    profitSplitPremium: "90% (with add-on)",
    phases: 2,
    forexTargets: {
      profitTarget: "10%",
      maxDrawdown: "8%",
      dailyLoss: "4%",
      leverage: "1:30",
      phase2ProfitTarget: "5%",
    },
    cryptoTargets: {
      profitTarget: "6%",
      maxDrawdown: "9%",
      dailyLoss: "3%",
      leverage: "5:1 BTC/ETH, 2:1 others",
      phase2ProfitTarget: "9%",
    },
    rules: [
      "4% daily loss limit",
      "30-day inactivity limit",
      "No weekend holding (Forex, unless add-on purchased)",
      "Daily reset at 5 PM EST",
    ],
    forexPricing: [
      { size: "$5,000", price: "$68" },
      { size: "$10,000", price: "$118" },
      { size: "$25,000", price: "$258" },
      { size: "$50,000", price: "$368" },
      { size: "$100,000", price: "$588" },
      { size: "$200,000", price: "$1,088" },
      { size: "$250,000", price: "$1,288" },
      { size: "$500,000", price: "$2,888" },
      { size: "$1,000,000", price: "$4,888" },
    ],
    cryptoPricing: [
      { size: "$5,000", price: "$38" },
      { size: "$10,000", price: "$88" },
      { size: "$25,000", price: "$218" },
      { size: "$50,000", price: "$438" },
      { size: "$100,000", price: "$908" },
      { size: "$200,000", price: "$2,088" },
    ],
    platforms: ["cTrader", "Match-Trader", "DXtrade"],
  },
  {
    id: "three-step",
    name: "3-Step Challenge",
    slug: "three-step",
    description:
      "Three-phase evaluation with lower targets per phase for a more gradual path.",
    highlight: "Lower per-phase targets — ideal for consistent traders",
    profitSplit: "75–80%",
    profitSplitPremium: "90% (with add-on)",
    phases: 3,
    forexTargets: {
      profitTarget: "5% per phase",
      maxDrawdown: "5%",
      leverage: "1:20",
    },
    rules: [
      "30-day inactivity limit",
      "No weekend holding (Forex, unless add-on purchased)",
      "Daily reset at 5 PM EST",
    ],
    forexPricing: [
      { size: "$5,000", price: "$48" },
      { size: "$10,000", price: "$78" },
      { size: "$25,000", price: "$188" },
      { size: "$50,000", price: "$248" },
      { size: "$100,000", price: "$388" },
      { size: "$200,000", price: "$788" },
      { size: "$250,000", price: "$888" },
      { size: "$500,000", price: "$1,988" },
      { size: "$1,000,000", price: "$3,388" },
    ],
    platforms: ["cTrader", "Match-Trader", "DXtrade"],
  },
  {
    id: "instant-funding",
    name: "Instant Funding",
    slug: "instant-funding",
    description:
      "Skip the evaluation entirely. Get immediate access to a funded account.",
    highlight: "No evaluation — start trading funded immediately",
    profitSplit: "75–80%",
    profitSplitPremium: "90% (with add-on)",
    phases: null,
    forexTargets: {
      profitTarget: "N/A",
      maxDrawdown: "8% trailing",
      dailyLoss: "5%",
      leverage: "1:50",
    },
    rules: [
      "8% trailing max drawdown",
      "5% daily loss limit",
      "KYC required before withdrawal",
      "30-day inactivity limit",
    ],
    forexPricing: [
      { size: "$5,000", price: "$208" },
      { size: "$10,000", price: "$408" },
      { size: "$25,000", price: "$1,188" },
      { size: "$50,000", price: "$2,508" },
      { size: "$100,000", price: "$5,008" },
    ],
    platforms: ["cTrader", "Match-Trader", "DXtrade"],
  },
];

export const addOns = [
  {
    name: "Weekend Hold",
    cost: "+10% of challenge fee",
    description: "Allows weekend position holding for Forex accounts.",
  },
  {
    name: "90% Profit Split",
    cost: "+20% of challenge fee",
    description: "Increases your profit share from standard to 90%.",
  },
];

export const futuresContractLimits = [
  { size: "$25K", standard: 1, micro: 15 },
  { size: "$50K", standard: 3, micro: 30 },
  { size: "$100K", standard: 6, micro: 60 },
  { size: "$150K", standard: 9, micro: 90 },
];

export const futuresPayouts = [
  {
    size: "$25K",
    fee: "$298",
    phase1: "$500",
    phase2: "$750",
    phase3: "$750",
    phase4: "$1,500",
  },
  {
    size: "$50K",
    fee: "$598",
    phase1: "$1,000",
    phase2: "$1,500",
    phase3: "$1,500",
    phase4: "$3,000",
  },
  {
    size: "$100K",
    fee: "$1,098",
    phase1: "$1,500",
    phase2: "$2,250",
    phase3: "$2,250",
    phase4: "$4,500",
  },
  {
    size: "$150K",
    fee: "$1,758",
    phase1: "$3,000",
    phase2: "$4,500",
    phase3: "$4,500",
    phase4: "$9,000",
  },
];

export const withdrawalRules = {
  firstWithdrawal: "Anytime after profit generation",
  frequency: "Every 30 days",
  minimum: "Greater of $100 or 1% of starting balance",
  processing: "1–3 business days",
  postWithdrawal: "Max drawdown locks at starting balance",
};

export type EquitiesPricing = {
  size: string;
  price: string;
};

export const equitiesProgram = {
  id: "equities",
  name: "Single Session Equities",
  slug: "equities",
  description:
    "A single-session day trading program built for traders who open and close all positions within the same U.S. equities session.",
  highlight: "S&P 100 day trading on GooeyPro — built for disciplined intraday traders",
  profitSplit: "80%",
  profitSplitPremium: "90% (with add-on)",
  market: "S&P 100 Equities",
  platform: "GooeyPro",
  liquidity: "Nasdaq",
  leverage: "2:1",
  session: "09:30 ET – 15:55 ET",
  hardCloseTime: "15:55 ET",
  commissions: "$0.02 / share / side, $0.50 minimum per transaction",
  targets: {
    profitTarget: "10% (Evaluation phase)",
    maxDrawdown: "3.0% trailing (closed balance only — hard breach)",
    dailyLossLimit: "2.5% trailing intraday (hard breach)",
    dailyProfitCap: "2.5% (Evaluation only — soft breach)",
    consistencyScore: "25% (Funded phase only)",
    minProfitableDays: "3 days @ 0.50% — Eval & Funded",
    minHoldTime: "1 minute",
    overnightHolding: "No — all positions must be closed by 15:55 ET",
  },
  payouts: {
    profitSplit: "80/20",
    frequency: "First payout after 14 days, then every 14 days",
    minimumWithdrawal: "$100",
    lockUponPayout: "Enabled by default — waiver available as add-on",
    payoutOnBreach: "No, unless add-on purchased",
  },
  rules: [
    "All positions closed by 15:55 ET",
    "S&P 100 equity products only",
    "2:1 leverage",
    "GooeyPro platform only",
    "Min 1-minute hold time",
    "Min 3 profitable trading days @ 0.50%",
  ],
  pricing: [
    { size: "$5,000", price: "$48" },
    { size: "$10,000", price: "$88" },
    { size: "$25,000", price: "$228" },
  ] as EquitiesPricing[],
  planRules: [
    { rule: "Profit Target (10%)", values: { "$5,000": "$500", "$10,000": "$1,000", "$25,000": "$2,500" } },
    { rule: "Daily Drawdown (2.5% Trailing, Intraday)", values: { "$5,000": "$125", "$10,000": "$250", "$25,000": "$625" } },
    { rule: "Daily Profit Cap (2.5% Eval Only — Soft Breach)", values: { "$5,000": "$125", "$10,000": "$250", "$25,000": "$625" } },
    { rule: "Max Drawdown (3.0% Trailing — Hard Breach)", values: { "$5,000": "$150", "$10,000": "$300", "$25,000": "$750" } },
  ],
};

export const equitiesAddOns = [
  {
    name: "90% Profit Share Upgrade",
    cost: "+15% of plan price",
    description: "Increases your funded profit share from 80% to 90%.",
  },
  {
    name: "33% Consistency Threshold",
    cost: "+20% of plan price",
    description: "Raises the funded consistency cap from 25% to 33% of total profits per day.",
  },
  {
    name: "50% Consistency Threshold",
    cost: "+35% of plan price",
    description: "Raises the funded consistency cap from 25% to 50% of total profits per day.",
  },
  {
    name: "Payout-on-Breach (Payout Protector)",
    cost: "+25% of plan price",
    description: "Protects your eligible profit share in a Funded account if a hard breach occurs.",
  },
  {
    name: "Lock-Upon-Payout Waiver",
    cost: "+25% of plan price",
    description: "Disables the post-payout Max Drawdown lock so trailing continues from your high-water mark.",
  },
];
