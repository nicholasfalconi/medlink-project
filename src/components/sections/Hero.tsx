
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/20588af6-973b-46a1-b5c4-4d483ac55a28.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Accessible, meaningful mentorship for aspiring medical students, entirely free of charge
          </h1>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" variant="default">
              Become a Mentor
            </Button>
            <Button size="lg" variant="secondary">
              Become a Mentee
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
