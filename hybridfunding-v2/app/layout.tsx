import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hybrid Funding — Get Funded. Get Paid. Scale With Confidence.",
  description:
    "Hybrid Funding is built for traders who want a real path to payouts. Clear rules, multiple platforms, and serious funding opportunities across forex, crypto, and futures.",
  keywords: [
    "prop firm",
    "funded trading",
    "forex funding",
    "futures funding",
    "cTrader",
    "Rithmic",
    "trading evaluation",
    "prop trading",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
