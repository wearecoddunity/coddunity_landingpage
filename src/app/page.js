import Navbar from "@/components/common/header/Navbar";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
// import TechnicalImplementation from "@/components/TechnicalImplementation";
import BusinessGrowth from "@/components/Track";
import { HeroSection } from "@/components/Hero.section";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-background text-primary">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <Features />
      {/* <TechnicalImplementation /> */}
      <BusinessGrowth />
      <Footer />
    </div>
  );
}
