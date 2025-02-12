
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/20588af6-973b-46a1-b5c4-4d483ac55a28.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-left">
            Supporting Tomorrow's Doctors, Today
          </h1>
          <p className="mt-6 text-xl text-gray-200 text-left">
            Accessible, meaningful mentorship for aspiring medical students, entirely free of charge
          </p>
          <div className="mt-10 flex gap-4">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
