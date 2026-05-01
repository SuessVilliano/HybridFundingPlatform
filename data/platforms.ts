export type Platform = {
  id: string;
  name: string;
  description: string;
  goodFor: string;
  marketType: string;
  whyItMatters: string;
  comingSoon?: boolean;
  comingSoonNote?: string;
};

export const platforms: Platform[] = [
  {
    id: "ctrader",
    name: "cTrader",
    description:
      "Clean interface and strong execution environment for many forex-focused traders.",
    goodFor: "Forex traders who value advanced charting and fast execution",
    marketType: "Forex, Crypto",
    whyItMatters:
      "Industry-leading execution speed with professional-grade tools and an intuitive interface.",
  },
  {
    id: "match-trader",
    name: "Match-Trader",
    description:
      "Accessible, browser-friendly environment for traders who want a flexible modern setup.",
    goodFor: "Traders who prefer a browser-based, no-download experience",
    marketType: "Forex, Crypto",
    whyItMatters:
      "Trade from any device with a modern, lightweight interface that doesn't compromise on features.",
  },
  {
    id: "dxtrade",
    name: "DXtrade",
    description:
      "A streamlined platform option for traders who prefer a straightforward experience.",
    goodFor: "Traders looking for simplicity and ease of use",
    marketType: "Forex, Crypto",
    whyItMatters:
      "Minimal learning curve with all the essential tools you need to execute your strategy.",
  },
  {
    id: "rithmic",
    name: "Rithmic",
    description:
      "Professional-grade futures connectivity for serious futures traders.",
    goodFor: "Dedicated futures traders who need institutional-level data feeds",
    marketType: "Futures",
    whyItMatters:
      "Ultra-low latency execution and direct market access trusted by professional futures traders worldwide.",
  },
  {
    id: "tradovate",
    name: "Tradovate",
    description:
      "Tradovate support is coming soon for futures traders. In the meantime, you can start trading futures today on Rithmic.",
    goodFor: "Futures traders who prefer Tradovate's cloud-based environment",
    marketType: "Futures",
    whyItMatters:
      "Commission-free, cloud-native futures execution — arriving soon on Hybrid Funding alongside Rithmic.",
    comingSoon: true,
    comingSoonNote: "Tradovate support coming soon",
  },
  {
    id: "gooeypro",
    name: "GooeyPro",
    description:
      "Purpose-built equities trading platform powering our Single Session Equities program with Nasdaq-sourced liquidity.",
    goodFor: "Day traders trading S&P 100 equities within a single U.S. session",
    marketType: "Equities",
    whyItMatters:
      "Direct Nasdaq pricing, fast execution, and the only platform available for Hybrid Funding's Single Session Equities program.",
  },
];

export const platformObjectionHandler =
  "Your edge is not just the platform. It's the rules, discipline, execution, and payout path.";
