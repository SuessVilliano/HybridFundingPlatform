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
