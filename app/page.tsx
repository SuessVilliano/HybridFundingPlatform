import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { WhyChoose } from "@/components/why-choose";
import { ProgramCards } from "@/components/program-cards";
import { PlatformGrid } from "@/components/platform-grid";
import { HowItWorksPreview } from "@/components/how-it-works-preview";
import { Differentiator } from "@/components/differentiator";
import { FAQPreview } from "@/components/faq-preview";
import { FooterCTA } from "@/components/footer-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChoose />
      <ProgramCards />
      <PlatformGrid />
      <HowItWorksPreview />
      <Differentiator />
      <FAQPreview />
      <FooterCTA />
    </>
  );
}
