import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GraduationCap, Briefcase, Compass } from "lucide-react";

interface Program {
  program: string;
  degree: string;
  school: string;
  length: string;
  structure: string;
  link?: string; // optional until provided
}

const programs: Program[] = [
  { program: "Medical Physiology", degree: "Master of Health Science (MHSc)", school: "University of Toronto", length: "12 months", structure: "Course-based with paid* internship" },
  { program: "Biomedical Discovery and Commercialization", degree: "Master of Biomedical Discovery and Commercialization (MBDC)", school: "McMaster University", length: "12 months", structure: "Course-based with paid* internship" },
  { program: "Biomedical Informatics", degree: "Master of Biomedical Informatics", school: "Queen’s University", length: "12 months", structure: "Course-based with capstone project" },
  { program: "Biomedical Innovation", degree: "Master of Biomedical Innovation (MBI)", school: "McMaster University", length: "12 months", structure: "Project-based" },
  { program: "Physiology", degree: "Master of Science (MSc)", school: "McGill University", length: "12 months", structure: "Thesis-based" },
  { program: "Bioinformatics", degree: "Master of Bioinformatics (MBinf)", school: "University of Guelph", length: "12-16 months", structure: "Course-based with capstone project" },
  { program: "AI in Healthcare", degree: "Master of Science in Applied Computing (MScAC)", school: "University of Toronto", length: "16 months", structure: "Course-based with paid internship" },
  { program: "Health Informatics", degree: "Master of Health Informatics (MHI)", school: "University of Toronto", length: "16 months", structure: "Course-based with practicum" },
  { program: "Health Systems Research", degree: "Master of Science (MSc)", school: "University of Toronto", length: "12-18 months", structure: "Thesis-based OR Course-based (limited enrolment)" },
  { program: "Clinical Epidemiology & Health Care Research", degree: "Master of Science (MSc)", school: "University of Toronto", length: "12-24 months", structure: "Course-based + Research Internship OR Thesis-based" },
  { program: "Applied Clinical Pharmacology", degree: "Master of Science (MSc)", school: "University of Toronto", length: "12 OR 24 months", structure: "Course-based with practicum OR Course-based" },
  { program: "Pharmacology", degree: "Master of Science (MSc)", school: "McGill University", length: "18-24 months", structure: "Thesis-based" },
  { program: "Bioethics", degree: "Master of Health Science (MHSc)", school: "University of Toronto", length: "20 months", structure: "Course-based with practicum and capstone" },
  { program: "Health Science", degree: "Master of Health Science (MHSc)", school: "University of British Columbia", length: "21 months (avg)", structure: "Course-based with capstone project" },
  { program: "Medical Science", degree: "Master of Science (MSc)", school: "McMaster University", length: "22-24 months", structure: "Thesis-based" },
  { program: "Medical Science", degree: "Master of Science (MSc)", school: "University of Toronto", length: "22-24 months", structure: "Thesis-based" },
  { program: "Epidemiology", degree: "Master of Science (MSc)", school: "McGill University", length: "24 months", structure: "Thesis-based" },
  { program: "Experimental Medicine", degree: "Master of Science (MSc)", school: "McGill University", length: "24 months", structure: "Thesis-based" },
  { program: "Neuroscience", degree: "Master of Science (MSc)", school: "Queen’s University", length: "24 months", structure: "Thesis-based" },
  { program: "Epidemiology", degree: "Master of Science (MSc)", school: "Queen’s University", length: "24 months", structure: "Thesis-based" },
  { program: "Translational Medicine", degree: "Master of Science (MSc)", school: "Queen’s University", length: "24 months", structure: "Thesis-based" },
  { program: "Experimental Medicine", degree: "Master of Science (MSc)", school: "University of British Columbia", length: "35 months (avg)", structure: "Thesis-based" },
];

const LifeAfterUndergrad = () => {
  useEffect(() => {
    document.title = "Planning for Life after Undergrad | MedLink Resources";
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
    description: "Options after graduation: grad school, paid work, or gap year—plus curated program list.",
    author: { "@type": "Organization", name: "The MedLink Project" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      <main className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
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

          {/* Hero */}
          <header className="mt-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">Planning for Life after undergrad</h1>
            <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
              Unsure what’s next? Choose a path that fits your goals—graduate school, paid work, or a gap year—and structure your time with intention.
            </p>
          </header>

          {/* Fork in the Road */}
          <section aria-label="Fork in the road" className="relative mt-10 mb-14">
            <div className="relative max-w-5xl mx-auto pt-16">
              {/* Fork lines (desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2">
                <div className="h-10 w-px bg-border mx-auto" />
                <div className="h-3 w-3 rounded-full bg-background border border-border mx-auto" />
                <div className="mt-2 h-px bg-border w-[820px] -ml-[410px]" />
                <div className="flex justify-between w-[820px] -ml-[410px]">
                  {[0,1,2].map((i) => (
                    <div key={i} className="-mt-2 h-3 w-3 rounded-full bg-background border border-border" />
                  ))}
                </div>
              </div>

              {/* Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <a href="#grad-school" className="rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                  <GraduationCap className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground">Graduate school</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Master’s 1–3 years (course or research). PhD 3–7 years.</p>
                </a>
                <a href="#paid-work" className="rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                  <Briefcase className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground">Paid Work</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Build income and experience; refine resume and cover letters.</p>
                </a>
                <a href="#gap-year" className="rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                  <Compass className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-foreground">Gap Year</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Explore interests, volunteer, and invest in personal growth.</p>
                </a>
              </div>
            </div>
          </section>

          {/* Overview + Tips */}
          <section id="overview" className="mb-12">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <article className="rounded-xl border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground">Finding structure after graduation</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Freedom without a plan can lead to paralysis or overcommitment. Pick 2–3 priorities—MCAT improvement, research, income—and scaffold your time with realistic tasks and timelines.
                </p>
              </article>
              <aside className="rounded-xl border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">Quick tips</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  <li>Create a 90-day plan with weekly checkpoints.</li>
                  <li>Batch similar tasks (applications, studying, outreach).</li>
                  <li>Set accountability with mentors or peers.</li>
                </ul>
              </aside>
            </div>
          </section>

          {/* Path details */}
          <section id="grad-school" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground">Graduate school</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Master’s Programs: 1–3 years (research or course-based)</li>
              <li>PhD: 3–7 years (typically 4–5)</li>
            </ul>
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Considerations</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Exit opportunities and supervisor fit</li>
                <li>Funding/stipend and cost of living</li>
              </ul>
            </div>
          </section>

          <section id="paid-work" className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground">Paid Work</h2>
            <p className="mt-3 text-sm text-muted-foreground">Great for income and real-world experience.</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Competitive market—polish resume and cover letters</li>
              <li>Expect patience and persistence to land roles</li>
            </ul>
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Common employers</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Advocacy organizations (e.g., mental health, health equity)</li>
                <li>Biotech and pharma (sales, QC, R&amp;D)</li>
                <li>Consulting</li>
              </ul>
            </div>
          </section>

          <section id="gap-year" className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground">Gap Year</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Flexibility to explore interests</li>
              <li>Balance freedom with purpose</li>
              <li>Volunteering to build skills and connections</li>
            </ul>
          </section>

          {/* Programs table (kept) */}
          <section id="programs" className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground text-center">Curated Canadian programs</h2>
            <p className="text-sm text-muted-foreground mt-2 text-center">Note: This guide is not comprehensive; always perform your own research. *Most internships are paid.</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 pr-4">Program</th>
                    <th className="py-3 pr-4">Degree</th>
                    <th className="py-3 pr-4">School</th>
                    <th className="py-3 pr-4">Length</th>
                    <th className="py-3 pr-4">Structure</th>
                    <th className="py-3 pr-4">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((p, i) => (
                    <tr key={i} className="border-b hover:bg-muted/30">
                      <td className="py-3 pr-4 text-foreground">{p.program}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{p.degree}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{p.school}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{p.length}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{p.structure}</td>
                      <td className="py-3 pr-4">
                        {p.link ? (
                          <a className="text-primary underline" href={p.link} target="_blank" rel="noopener noreferrer">Visit</a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LifeAfterUndergrad;
