import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import ProgramsTable from "@/components/resources/ProgramsTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GraduationCap, Briefcase, Compass } from "lucide-react";

interface Program {
  program: string;
  degree: string;
  school: string;
  length: string;
  structure: string;
  link?: string;
}

const programs: Program[] = [{
  program: "Medical Physiology",
  degree: "Master of Health Science (MHSc)",
  school: "University of Toronto",
  length: "12 months",
  structure: "Course-based with paid* internship",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/mhsc-medical-physiology/"
}, {
  program: "Biomedical Discovery and Commercialization",
  degree: "Master of Biomedical Discovery and Commercialization (MBDC)",
  school: "McMaster University",
  length: "12 months",
  structure: "Course-based with paid* internship",
  link: "https://mbdc.mcmaster.ca/"
}, {
  program: "Biomedical Informatics",
  degree: "Master of Biomedical Informatics",
  school: "Queen's University",
  length: "12 months",
  structure: "Course-based with capstone project",
  link: "https://healthsci.queensu.ca/education/graduate-programs/biomedical-informatics"
}, {
  program: "Biomedical Innovation",
  degree: "Master of Biomedical Innovation (MBI)",
  school: "McMaster University",
  length: "12 months",
  structure: "Project-based",
  link: "https://healthsci.mcmaster.ca/mbi"
}, {
  program: "Physiology",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "12 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/physiology/graduate-programs"
}, {
  program: "Bioinformatics",
  degree: "Master of Bioinformatics (MBinf)",
  school: "University of Guelph",
  length: "12-16 months",
  structure: "Course-based with capstone project",
  link: "https://bioinformatics.uoguelph.ca/"
}, {
  program: "AI in Healthcare",
  degree: "Master of Science in Applied Computing (MScAC)",
  school: "University of Toronto",
  length: "16 months",
  structure: "Course-based with paid internship",
  link: "https://mscac.utoronto.ca/"
}, {
  program: "Health Informatics",
  degree: "Master of Health Informatics (MHI)",
  school: "University of Toronto",
  length: "16 months",
  structure: "Course-based with practicum",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/mhi/"
}, {
  program: "Health Systems Research",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "12-18 months",
  structure: "Thesis-based OR Course-based (limited enrolment)",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-health-systems-research/"
}, {
  program: "Clinical Epidemiology & Health Care Research",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "12-24 months",
  structure: "Course-based + Research Internship OR Thesis-based",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-clinical-epi-health-care-research/"
}, {
  program: "Applied Clinical Pharmacology",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "12 OR 24 months",
  structure: "Course-based with practicum OR Course-based",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-applied-clinical-pharmacology/"
}, {
  program: "Pharmacology",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "18-24 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/pharma/graduate-programs"
}, {
  program: "Bioethics",
  degree: "Master of Health Science (MHSc)",
  school: "University of Toronto",
  length: "20 months",
  structure: "Course-based with practicum and capstone",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/mhsc-bioethics/"
}, {
  program: "Health Science",
  degree: "Master of Health Science (MHSc)",
  school: "University of British Columbia",
  length: "21 months (avg)",
  structure: "Course-based with capstone project",
  link: "https://spph.ubc.ca/programs/mhsc/"
}, {
  program: "Medical Science",
  degree: "Master of Science (MSc)",
  school: "McMaster University",
  length: "22-24 months",
  structure: "Thesis-based",
  link: "https://healthsci.mcmaster.ca/gradprog/msc"
}, {
  program: "Medical Science",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "22-24 months",
  structure: "Thesis-based",
  link: "https://medsci.utoronto.ca/graduate-programs"
}, {
  program: "Epidemiology",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/epi-biostat-occh/graduate-programs"
}, {
  program: "Experimental Medicine",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/expmed/graduate"
}, {
  program: "Neuroscience",
  degree: "Master of Science (MSc)",
  school: "Queen's University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://dbms.queensu.ca/graduate/neuroscience"
}, {
  program: "Epidemiology",
  degree: "Master of Science (MSc)",
  school: "Queen's University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://phs.queensu.ca/graduate-programs/msc-epidemiology"
}, {
  program: "Translational Medicine",
  degree: "Master of Science (MSc)",
  school: "Queen's University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://dbms.queensu.ca/graduate/translational-medicine"
}, {
  program: "Experimental Medicine",
  degree: "Master of Science (MSc)",
  school: "University of British Columbia",
  length: "35 months (avg)",
  structure: "Thesis-based",
  link: "https://www.expmed.ubc.ca/"
}];

const LifeAfterUndergrad = () => {
  useEffect(() => {
    document.title = "Life after undergrad | MedLink Resources";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Guidance for life after undergrad: gap years, grad school paths, paid work options, and curated Canadian programs.');
    document.head.appendChild(meta);
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', window.location.href);
    document.head.appendChild(canonical);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Planning for Life after undergrad",
    description: "Options after graduation: grad school, paid work, or gap year - plus curated program list.",
    author: {
      "@type": "Person",
      name: "Adam Levitan"
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section className="relative bg-background overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/50 blur-3xl" />
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[960px] h-28 text-primary/10" viewBox="0 0 960 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80 C 200 20, 400 140, 640 60 C 760 20, 860 100, 960 60" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4 relative">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Life After Undergrad</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <header className="mt-6 text-center animate-fade-in">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">Planning for Life after undergrad</h1>
                <p className="mt-3 text-sm text-muted-foreground">Written by Adam Levitan &middot; January 25, 2026</p>
              </header>

              <section className="mt-8 mb-10">
                <div className="max-w-4xl mx-auto prose prose-sm md:prose-base text-muted-foreground">
                  <p>
                    Graduating from undergrad can feel like stepping off a treadmill that's been running at full speed. For years, your life was probably structured around assignments, exams, and the next milestone. Then suddenly, it's over. You've crossed the stage, shook the Dean's hand, received your degree, and now you're left wondering what to do next.
                  </p>
                  <p className="mt-4">
                    For students hoping to get into medical school, this phase can be even more complicated. Applications are stressful enough, but rejection, or even uncertainty while waiting, can leave you asking: Now what?
                  </p>
                  <p className="mt-4">
                    The truth is, there's no single "right" path after undergrad. But there are common experiences many premeds share, so I wrote this blog to help review some of the more common paths.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-muted/50">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-semibold text-foreground mb-2">The Challenge of Too Much Freedom</h2>
              <div className="max-w-4xl prose prose-sm md:prose-base text-muted-foreground mb-8">
                <p>
                  It may sound odd at first, but it's normal to feel disoriented after you finish your undergraduate degree. No more assignments, no more waking up for class, it's up to you to organize your time. This may cause some people to feel paralyzed by the endless possibilities. Others go the opposite direction and try to do everything, working full time, volunteering, shadowing, researching, retaking the MCAT - all at once.
                </p>
                <p className="mt-4">
                  Neither extreme is sustainable. The sweet spot lies somewhere in between: reflecting on your personal goals and building a realistic structure around them. Ask yourself:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li>Do I really need to improve my MCAT score?</li>
                  <li>Do I want to earn an income before medical school?</li>
                  <li>Do I even want to go to medical school?</li>
                  <li>What specific parts of my application could use improvement?</li>
                </ul>
                <p className="mt-4">
                  Once you've clarified your priorities, you can scaffold your time with achievable goals and timelines. Think of it as replacing the structure undergrad once gave you with one you design for yourself.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mb-6">Three Common Paths After Graduation</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-0">
                <article className="rounded-xl border bg-card p-6 animate-fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">The Gap-Year Explorer</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These students use the time to travel, work, or try something new. Sometimes it's about earning money, other times it's about gaining perspective. Gap years can be a powerful way to recharge, mature, and return to applications with fresh energy.
                  </p>
                </article>

                <article className="rounded-xl border bg-card p-6 animate-fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">The Graduate Student</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Some pursue master's or post-baccalaureate programs, often with a research or health science focus. These degrees can strengthen academic records, provide valuable research experience, and expand career options - whether or not medical school works out.
                  </p>
                </article>

                <article className="rounded-xl border bg-card p-6 animate-fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">The Career Builder</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Others find roles in healthcare, public health, or industry. Positions as research coordinators, medical scribes, or health policy analysts can offer hands-on exposure to medicine while building transferable skills and income stability.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Moving Forward</h2>
              <div className="prose prose-sm md:prose-base text-muted-foreground">
                <p>
                  If you're standing at this crossroads, remember: rejection or delay doesn't mean the door to medicine is closed. Many physicians took detours before finding their way into medical school. What matters is that you use this time intentionally - whether that means doubling down on your application, exploring other fields, or simply giving yourself space to grow.
                </p>
                <p className="mt-4">
                  Life after undergrad isn't a race. It's a transition, and like any transition, it can be messy, exciting, frustrating, and full of possibility. Wherever you land, you're still moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-muted/50">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-semibold text-foreground text-center">Curated Canadian programs</h2>
              <p className="text-sm text-muted-foreground mt-2 text-center">Note: This guide is not comprehensive; always perform your own research. *Most internships are paid.</p>

              <ProgramsTable programs={programs} />

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLd),
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LifeAfterUndergrad;
