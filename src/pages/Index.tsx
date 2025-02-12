
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-semibold">MedLink</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
                <a href="#pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
                <Button variant="default" size="sm">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary-foreground bg-primary rounded-full uppercase">
            Healthcare Simplified
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transform Your</span>
            <span className="block text-primary">Medical Practice</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
            Streamline your healthcare practice with our innovative platform. Connect with patients, manage appointments, and grow your practice.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Powerful features to help you manage and grow your practice
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by healthcare professionals
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              See what our customers have to say about us
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200" />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-500">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose the plan that's right for you
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="p-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-500">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full" variant={plan.recommended ? "default" : "outline"}>
                    Get Started
                  </Button>
                </div>
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
              <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 MedLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "Patient Management",
    description: "Efficiently manage patient records and appointments in one place.",
    icon: <div className="h-6 w-6 text-primary" />,
  },
  {
    title: "Online Booking",
    description: "Allow patients to book appointments online 24/7.",
    icon: <div className="h-6 w-6 text-primary" />,
  },
  {
    title: "Secure Messaging",
    description: "Communicate securely with patients and staff.",
    icon: <div className="h-6 w-6 text-primary" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Track your practice's performance with detailed analytics.",
    icon: <div className="h-6 w-6 text-primary" />,
  },
  {
    title: "Billing Integration",
    description: "Streamline your billing process with integrated payment solutions.",
    icon: <div className="h-6 w-6 text-primary" />,
  },
  {
    title: "Mobile Access",
    description: "Access your practice data from anywhere on any device.",
    icon: <div className="h-6 w-6 text-primary" />,
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Family Physician",
    content: "MedLink has transformed how I run my practice. The patient management system is intuitive and has saved me countless hours.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Pediatrician",
    content: "The online booking system has reduced no-shows by 50%. My patients love how easy it is to schedule appointments.",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Dermatologist",
    content: "The analytics dashboard helps me make data-driven decisions to improve my practice. Highly recommended!",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: 49,
    features: [
      "Up to 100 patients",
      "Basic appointment scheduling",
      "Patient portal",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: 99,
    features: [
      "Up to 500 patients",
      "Advanced scheduling",
      "Custom branding",
      "Priority support",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: 199,
    features: [
      "Unlimited patients",
      "Advanced analytics",
      "API access",
      "24/7 phone support",
    ],
  },
];

export default Index;
