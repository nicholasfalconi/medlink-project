
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full uppercase">
              Free Mentorship Program
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Supporting Tomorrow's Doctors, Today
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Breaking down barriers and providing accessible, meaningful mentorship for aspiring medical students.
            </p>
            <div className="mt-10 flex gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/20588af6-973b-46a1-b5c4-4d483ac55a28.png" 
              alt="Medical Mentorship"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
