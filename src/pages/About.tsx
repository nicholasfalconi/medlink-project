
import { Navigation } from "@/components/layout/Navigation";
import { About as AboutSection } from "@/components/sections/About";
import { ProgramFlow } from "@/components/sections/ProgramFlow";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutSection />
      <ProgramFlow />
      <Footer />
    </div>
  );
};

export default About;
