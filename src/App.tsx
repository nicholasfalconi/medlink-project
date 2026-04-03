
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import OurStory from "./pages/about/OurStory";
import MeetTheTeam from "./pages/about/MeetTheTeam";
import NotFound from "./pages/NotFound";
import ServicesMentors from "./pages/services/Mentors";
import ServicesMentees from "./pages/services/Mentees";
import Resources from "./pages/Resources";
import LifeAfterUndergrad from "./pages/resources/LifeAfterUndergrad";
import McatPrep from "./pages/resources/McatPrep";
import PreMedGuide from "./pages/resources/PreMedGuide";

const queryClient = new QueryClient();

// Get the base URL from the environment or use default for GitHub Pages
const baseUrl = import.meta.env.MODE === 'production' ? '/medlink-project/' : '/';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={baseUrl}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/team" element={<MeetTheTeam />} />
          <Route path="/services/mentors" element={<ServicesMentors />} />
          <Route path="/services/mentees" element={<ServicesMentees />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/life-after-undergrad" element={<LifeAfterUndergrad />} />
          <Route path="/resources/mcat-prep" element={<McatPrep />} />
          <Route path="/resources/pre-med-guide" element={<PreMedGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
