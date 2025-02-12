
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForMentors } from "@/components/sections/ForMentors";
import { ForMentees } from "@/components/sections/ForMentees";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Journey />
      <HowItWorks />
      <ForMentors />
      <ForMentees />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
