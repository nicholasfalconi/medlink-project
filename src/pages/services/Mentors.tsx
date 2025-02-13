
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Roles } from "@/components/sections/Roles";

const ServicesMentors = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Become a <span className="text-[#007AFF]">Mentor</span>
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Share your knowledge and experience to help aspiring medical students navigate their journey
          </p>
        </div>
      </section>
      <Roles type="mentor" />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <iframe
            src="https://forms.gle/G6juVwc4hcTDV3aU9"
            className="w-full h-[800px] border-0"
            title="Mentor Application Form"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesMentors;
