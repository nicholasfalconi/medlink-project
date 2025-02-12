
import { Navigation } from "@/components/layout/Navigation";
import { About as AboutSection } from "@/components/sections/About";
import { ProgramFlow } from "@/components/sections/ProgramFlow";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutSection />
      <ProgramFlow />
    </div>
  );
};

export default About;
