
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/20588af6-973b-46a1-b5c4-4d483ac55a28.png" 
          alt="Medical consultation illustration"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Supporting Tomorrow's Doctors, Today
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Accessible, meaningful mentorship for aspiring medical students, entirely free of charge
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[#007AFF] hover:bg-[#0A84FF] text-white"
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
