import Nav from "@/components/nav";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ActiveCases from "@/components/active-cases";
import HowItWorks from "@/components/how-it-works";
import ExploreLocation from "@/components/explore-location";
import RecentlyResolved from "@/components/recently-resolved";
import WhyItMatters from "@/components/why-it-matters";
import SiteFooter from "@/components/site-footer";
import FAB from "@/components/fab";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <HeroSection />
        <StatsSection />
        <ActiveCases />
        <HowItWorks />
        <ExploreLocation />
        <RecentlyResolved />
        <WhyItMatters />
      </main>
      <SiteFooter />
      <FAB />
    </>
  );
}
