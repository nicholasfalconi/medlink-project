import { useEffect, useRef } from "react";

const testimonials = [
  "I genuinely didn't know where to start with the whole medical school process. Having someone just a few steps ahead of me made everything feel so much more manageable.",
  "As a first-generation student, I didn't have anyone in my life who understood this path. [Mentor] helped me feel intimidated.",
  "I used to feel like everyone else had some secret roadmap. [Mentor] taught me most people are figuring it out as they go, and give me real steps I can take to figuring out my path.",
  "I was overwhelmed trying to balance grades, extracurriculars, and just life in general. Talking to someone who had actually been through it helped me prioritize me.",
  "This experience made medicine feel accessible. Now actually it feels like something I can actually work toward.",
  "My mentor was very nice and honest. This is a great program.",
  "I was always comparing myself to others and feeling behind. [Mentor] helped me prioritize things that matter to me!!!!!!",
  "Coming from a smaller university who graduated 15 years ago, I feel like I didn't have the same exposure as others. This program helped me understand what the application process looks like from someone who was successful going through it.",
  "I didn't realize how much stress I was carrying. I had such a good experience with [mentor], I recommend [mentor] to everybody!",
  "I had so many questions I felt embarrassed to ask at big pre-med events. This gave me a space where I could ask anything.",
  "The MedLink connected me with someone of a similar situation as me, and it was very helpful.",
  "This mentorship helped me rebuild my confidence.",
  "I was really lost before being connected with a medical student. I don't have anybody to shadow and I just wanted to know what being a medical student is like.",
  "I was surprised this program was even real. I didn't expect to get connected with a mentor. I was so surprised it was actually free, especially when a lot of others charge for this type of thing.",
  "Knowing that even medical students once felt just as lost as I do now was very reassuring.",
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (container.scrollWidth > 0 && scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(scroll); };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
          What Our <span className="text-[#007AFF]">Mentees</span> Say
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Real feedback from students in the MedLink community
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {doubled.map((text, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[340px] bg-white rounded-xl shadow-sm border p-6 flex flex-col"
          >
            <div className="text-[#007AFF] text-3xl font-serif leading-none mb-3">"</div>
            <p className="text-sm text-gray-700 leading-relaxed flex-1">
              {text}
            </p>
            <div className="mt-4 text-xs text-gray-400">MedLink Mentee</div>
          </div>
        ))}
      </div>
    </section>
  );
};
