
import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, MessageSquare, ChartBar, Users, Award } from "lucide-react";

const services = [
  {
    title: "One-on-One Mentorship",
    description: "Get paired with a current medical student for personalized guidance and support.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Application Support",
    description: "Receive guidance on crafting compelling medical school applications.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "Interview Preparation",
    description: "Practice with mock interviews and get feedback from experienced mentors.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
  {
    title: "MCAT Resources",
    description: "Access study tips and strategies for MCAT success.",
    icon: <ChartBar className="h-6 w-6 text-primary" />,
  },
  {
    title: "CASPer Preparation",
    description: "Get ready for the CASPer test with practice scenarios and tips.",
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    title: "Free Resources",
    description: "Access our library of resources and recorded workshops at no cost.",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive support for your medical school journey
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
