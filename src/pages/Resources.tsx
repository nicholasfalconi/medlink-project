
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Stethoscope } from "lucide-react";

const blogPosts = [
  {
    title: "Trying to Do It All: A Real Guide for Undergrads Navigating Pre-Med Life",
    author: "Ervis Musa",
    date: "April 3, 2026",
    description: "Managing time, expectations, and yourself while navigating the pre-med journey. From study habits to building applications to staying healthy - a real look at what undergrad life looks like.",
    icon: Stethoscope,
    link: "/resources/pre-med-guide",
  },
  {
    title: "MCAT Prep Guide",
    author: "Braeden Hill",
    date: "March 1, 2026",
    description: "A practical guide to structuring MCAT prep around your real life. Includes study schedules, resource recommendations, and the framework used to score a 518 while working full-time.",
    icon: BookOpen,
    link: "/resources/mcat-prep",
  },
  {
    title: "Planning for Life After Undergrad",
    author: "Adam Levitan",
    date: "January 25, 2026",
    description: "Graduating from undergrad can feel like stepping off a treadmill. Explore three common paths premeds take after graduation - gap years, grad school, or career building - plus a curated list of Canadian programs.",
    icon: GraduationCap,
    link: "/resources/life-after-undergrad",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All <span className="text-[#007AFF]">Blogs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights and guides from the MedLink team to support your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.link}
                to={post.link}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <post.icon className="h-8 w-8 text-[#007AFF] mb-4" />
                <h2 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#007AFF] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#007AFF] font-medium mb-1">
                  By {post.author}
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  {post.date}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;
