
export const About = () => {
  return (
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
  );
};
