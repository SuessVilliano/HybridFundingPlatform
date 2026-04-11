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
      "Support coming soon. We are expanding platform options while traders can start now on our currently supported environments.",
    goodFor: "Futures traders who prefer Tradovate's cloud-based environment",
    marketType: "Futures",
    whyItMatters:
      "Commission-free futures trading with a modern cloud-native platform — on the roadmap for Hybrid Funding.",
    comingSoon: true,
    comingSoonNote: "Tradovate support coming soon",
  },
];

export const platformObjectionHandler =
  "Your edge is not just the platform. It's the rules, discipline, execution, and payout path.";
