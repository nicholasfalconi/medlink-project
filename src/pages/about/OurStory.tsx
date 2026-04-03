import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero / Intro */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The <span className="text-[#007AFF]">MedLink</span> Project: Our Story
            </h1>
          </div>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              MedLink began with a simple belief: aspiring doctors deserve accessible, meaningful mentorship - not a paywall. This is the story of how a group of students turned late-night messages, honest conversations, and a community-first mindset into a program that has grown far beyond what we imagined.
            </p>
          </div>
        </div>
      </section>

      {/* The question that started it all */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The question that started it all:</h2>
            <p>
              In first year of medical school, I started getting messages from other undergrads - classmates, friends of friends, students a year behind me, asking how to navigate the path ahead. They weren't asking for secrets. They were asking for clarity.
            </p>
            <ul className="list-none space-y-2 pl-0 italic text-gray-600">
              <li>"What courses should I take?"</li>
              <li>"How did you choose experiences?"</li>
              <li>"What do you wish you knew earlier?"</li>
              <li>"How do I even start?"</li>
            </ul>
            <p>
              The questions were familiar because they were the same ones I had once asked, often quietly, often unsure of who to turn to.
            </p>
            <p>
              Then something happened that stopped me in my tracks: people started offering me money.
            </p>
            <p>
              At first, I genuinely didn't understand it. Why were people trying to pay for what felt like simple advice - conversations I would've had anyway? I wasn't an expert. I was just a student who had taken a few steps down the road they were standing at the beginning of.
            </p>
            <p>
              But the more it happened, the clearer the truth became: this wasn't just "help." It was a market.
            </p>
          </div>
        </div>
      </section>

      {/* The market we didn't want to build */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The market we didn't want to build</h2>
            <p>
              Medical and pre-med pathways are complicated by design: timelines, prerequisites, testing, extracurricular expectations, personal statements, interviews, and constant uncertainty about what "counts." That complexity creates demand, especially among students who don't have doctors in the family, who don't know the unwritten rules, or who are navigating everything for the first time. And where there's demand, there's inevitably supply, often for profit.
            </p>
            <p>
              Admissions consulting has expanded into a visible industry, offering application editing, interview coaching, and packaged "guidance," sometimes at rates that can quickly reach hundreds, with stories of students spending thousands of dollars. This raises uncomfortable questions about what this industry does to equity - who benefits, who gets left behind, and whether some services oversell insight into admissions while capitalizing on applicant anxiety. That was the moment Medlink's values began to crystallize.
            </p>
            <p>
              If the way forward depends on access to expensive advice, then the path isn't just competitive - it's unequal before it even begins. I didn't want to contribute to that.
            </p>
          </div>
        </div>
      </section>

      {/* A peer-to-peer experiment at Queen's */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A peer-to-peer experiment at Queen's</h2>
            <p>
              So instead of accepting money, I reached out to a few medical student friends - students who, like me, still clearly remembered what it felt like to start from uncertainty.
            </p>
            <p>
              At the time, the majority of students reaching out to me were from my undergraduate program: the Bachelor of Health Sciences at Queen's University. That naturally became our starting point. We launched what would become the MedLink Project as a small, informal pilot - connecting Queen's Health Sciences students with medical student peer mentors to see just how much interest there truly was.
            </p>
            <p>
              What we found was immediate and overwhelming.
            </p>
            <p>
              We began with something simple and intentional: honest conversations, shared experiences, and a commitment to offering guidance the way we wished we had received it - without gatekeeping, and without a price tag.
            </p>
            <p>
              The response was far greater than we anticipated. Within a short time, it became clear that our small team of five could not meet the demand. Students weren't just looking for advice, they were looking for connection, reassurance, and someone who understood exactly where they were coming from.
            </p>
            <p>
              So we grew.
            </p>
            <p>
              As we brought on more mentors, we were able to expand beyond Queen's. What started as a focused pilot quickly evolved into something much larger: a mentorship network reaching students across Canada.
            </p>
            <p>
              And it worked, not because we had all the answers, but because we had something many students lacked: proximity. We had just gone through what they were going through. We remembered what mattered, what was confusing, and what support could have made all the difference.
            </p>
            <p>
              Before long, we had supported dozens of students. When that number passed 200, it became undeniable - this was no longer just a group of friends helping out.
            </p>
            <p className="font-semibold text-gray-900">
              This was something real.
            </p>
            <p>
              So we built Medlink around a simple community ethic:
            </p>
            <p className="font-semibold text-[#007AFF] text-xl">
              If we don't support one another, who will support us?
            </p>
            <p>
              And just as important: people deserve the support you wish you'd had, delivered at the moment it would have mattered most - not years later, not after they've already fallen behind, and not only if they can afford it.
            </p>
          </div>
        </div>
      </section>

      {/* What Medlink has become */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Medlink has become</h2>
            <p>
              Medlink's early days were informal - messages, introductions, and simple reassurances. But over time, it evolved into an organized mentorship initiative with a clear purpose: support aspiring medical students through guidance that is accessible and free. And internally, where we see the day-to-day reality of who's reaching out and why, our community has now grown to over 300 mentees (as of April 2026).
            </p>
            <p>
              That number matters, not as a headline, but because each "mentee" is a person who asked for help instead of giving up in silence.
            </p>
          </div>
        </div>
      </section>

      {/* An ask from our community */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">An ask from our community</h2>
            <p>
              We are in desperate need of mentors.
            </p>
            <p>
              If you're reading this and you've made it even a few steps further down this road, if you've learned lessons you wish someone had told you earlier, then you can change someone else's trajectory with a conversation that costs you an hour, but can save them months of confusion.
            </p>
            <p>
              So here is our ask directly: please support Medlink by signing up to mentor.
            </p>

            <div className="mt-8 text-center">
              <Link
                to="/services/mentors"
                className="inline-block bg-[#007AFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Sign Up to Mentor
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="font-semibold text-gray-900">Ervis Musa (he/him)</p>
              <p className="text-gray-600">Founder of MedLink Project</p>
              <p className="text-gray-600">University of Ottawa MD2027</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
