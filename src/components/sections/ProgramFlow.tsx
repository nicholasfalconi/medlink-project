
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProgramFlow = () => {
  const resources = [
    { title: "CASPer Test Preparation", description: "Tips, strategies, and sample scenarios for this critical component" },
    { title: "MCAT Guidance", description: "Comprehensive advice on study plans and accessing resources" },
    { title: "Application Help", description: "Step-by-step guides on crafting compelling applications" },
    { title: "Interview Prep", description: "Insights into different interview formats and techniques" },
    { title: "Grad School Applications", description: "Advice on finding the right fit and excelling in applications" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How Does The Program Work?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Connecting aspiring medical students with experienced mentors
          </p>
        </div>
        <div className="prose prose-lg mx-auto text-gray-500 mb-16">
          <p>
            The MedLink Project connects undergraduate students with current medical students who have recently navigated the path to medical school. Through one-on-one mentorship, students receive personalized guidance on applications, interviews, and preparing for a career in medicine.
          </p>
          <p>
            While we work to match students with mentors, we provide comprehensive resources to ensure every participant receives meaningful support in their journey to medical school.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 prose prose-lg mx-auto text-gray-500">
          <p>
            Beyond these resources, we offer a library of recorded virtual events and workshops covering critical topics. Our program meets students wherever they are in their journey, providing the tools, knowledge, and confidence needed to pursue their dreams of becoming medical professionals.
          </p>
        </div>
      </div>
    </section>
  );
};
