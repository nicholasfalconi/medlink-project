
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const mentorExpectations = [
  "Provide Guidance",
  "Foster a Supportive Environment",
  "Be Professional and Reliable",
  "Set Boundaries",
];

const menteeExpectations = [
  "Be Clear About Your Goals",
  "Stay Engaged and Open-Minded",
  "Be Respectful of Your Mentor's Time",
  "Leverage Available Resources",
];

export const Roles = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* For Mentors */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">For Mentors</h2>
            <Card className="p-6 mb-6">
              <h3 className="font-semibold mb-4">What We Expect</h3>
              <ul className="space-y-3">
                {mentorExpectations.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <div>
              <h3 className="font-semibold mb-2">Make a Difference</h3>
              <p className="text-gray-600">
                Share your knowledge and experience to help aspiring medical students navigate their journey. Your guidance can make a significant impact on someone's future in medicine.
              </p>
            </div>
          </div>

          {/* For Mentees */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">For Mentees</h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Get Support</h3>
              <p className="text-gray-600">
                Receive personalized guidance from current medical students who understand your journey. Our mentors are here to help you navigate the path to medical school.
              </p>
            </div>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">What We Expect</h3>
              <ul className="space-y-3">
                {menteeExpectations.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
