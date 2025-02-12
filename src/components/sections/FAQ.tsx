
import { Card } from "@/components/ui/card";

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

export const FAQ = () => {
  return (
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
  );
};
