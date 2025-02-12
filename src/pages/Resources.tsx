
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Mail } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="flex-1 section-padding bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <Clock className="h-8 w-8 text-[#007AFF]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources <span className="text-[#007AFF]">Coming Soon</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              We're working hard to create comprehensive resources to support your medical school journey. Stay tuned for updates!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <BookOpen className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Study Materials</h3>
                <p className="text-gray-600">MCAT preparation guides, practice questions, and study strategies</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <BookOpen className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Application Tips</h3>
                <p className="text-gray-600">Personal statement guides, interview preparation, and application timelines</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <BookOpen className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Career Insights</h3>
                <p className="text-gray-600">Medical specialties overview and career planning resources</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto">
              <Mail className="h-8 w-8 text-[#007AFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Get Notified</h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when our resources section launches
              </p>
              <div className="flex gap-4 max-w-sm mx-auto">
                <Button 
                  size="lg"
                  className="bg-[#007AFF] hover:bg-[#0A84FF] text-white flex-1"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;
