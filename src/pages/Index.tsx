
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, MessageSquare, ChartBar, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src="/lovable-uploads/f2b3323c-afa7-4803-8c54-e898263fe3af.png" alt="MedLink Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
                <Button variant="default" size="sm">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About The MedLink Project
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our mission is to make medical school mentorship accessible to all
            </p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-500">
            <p className="mb-6">
              The MedLink Project was founded with a single goal in mind: to break down barriers and provide accessible, meaningful mentorship for aspiring medical students. As medical students ourselves, we understand how overwhelming the journey to medical school can be.
            </p>
            <p className="mb-6">
              From navigating applications to preparing for interviews, the process is not only complex but also costly. Many existing mentorship programs come with steep price tags, putting them out of reach for students who could benefit from them the most.
            </p>
            <p>
              That's why we created The MedLink Project—to address these gaps and create a supportive community for students. We designed the program with accessibility and inclusivity at its core.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find answers to common questions about The MedLink Project
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-500">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Program</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">MCAT Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CASPer Prep</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 The MedLink Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

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

const faqs = [
  {
    question: "What is The MedLink Project?",
    answer: "The MedLink Project is a free mentorship initiative created by medical students to guide and support undergraduate students aspiring to pursue medicine.",
  },
  {
    question: "How do I apply for mentorship?",
    answer: "You can apply through our online application form. We'll match you with a mentor based on availability and compatibility.",
  },
  {
    question: "Is the program really free?",
    answer: "Yes! The MedLink Project is completely free. We believe mentorship should be accessible to all, regardless of financial background.",
  },
  {
    question: "What support do mentors provide?",
    answer: "Mentors offer guidance on applications, interviews, MCAT preparation, and general advice about medical school and student life.",
  },
];

export default Index;
