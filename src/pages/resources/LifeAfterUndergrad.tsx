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
  { program: "Biomedical Informatics", degree: "Master of Biomedical Informatics", school: "Queen's University", length: "12 months", structure: "Course-based with capstone project" },
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
  { program: "Neuroscience", degree: "Master of Science (MSc)", school: "Queen's University", length: "24 months", structure: "Thesis-based" },
  { program: "Epidemiology", degree: "Master of Science (MSc)", school: "Queen's University", length: "24 months", structure: "Thesis-based" },
  { program: "Translational Medicine", degree: "Master of Science (MSc)", school: "Queen's University", length: "24 months", structure: "Thesis-based" },
  { program: "Experimental Medicine", degree: "Master of Science (MSc)", school: "University of British Columbia", length: "35 months (avg)", structure: "Thesis-based" },
];

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
    headline: "Life after undergrad",
    description: "Options after graduation: grad school, paid work, or gap year—plus curated program list.",
    author: { "@type": "Organization", name: "The MedLink Project" },
  };

  return (
    <div className="min-h-screen bg-white">
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

          {/* Title */}
          <header className="mt-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">Life after undergrad</h1>
          </header>

          {/* 1) Intro section (first, no card background) */}
          <section className="mt-8 mb-10">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm md:text-base leading-7 text-muted-foreground">
                Applying to medical school is challenging, and facing rejection can leave you uncertain about next steps, whether that's exploring gap years, graduate programs, or alternative career paths in healthcare and industry.
              </p>
              <p className="mt-4 text-sm md:text-base leading-7 text-muted-foreground">
                After graduation, the sudden freedom can feel liberating but often leads to a lack of structure, causing some people to become paralyzed by endless possibilities while others overcommit and spread themselves too thin. We advise students to find the sweet spot by reflecting on their goals—whether improving MCAT scores, pursuing research, or earning income—and scaffold their unstructured time with realistic tasks and timelines to stay accountable.
              </p>
              <p className="mt-4 text-sm md:text-base leading-7 text-muted-foreground">
                We've identified three common paths that premeds tend to take after graduation if they don't get into medical school.
              </p>
            </div>
          </section>

          {/* 2) Cards for the three paths */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Graduate school */}
              <article className="rounded-xl border bg-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Graduate school</h2>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Master's Programs: 1–3 years</li>
                  <li>Research/thesis-based (usually 2+ years)</li>
                  <li>Course based (usually 1–2 years)</li>
                  <li>PhD: 3–7 years, typically 4 or 5</li>
                </ul>
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground">Other important considerations</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Exit opportunities</li>
                    <li>Does a supervisor need to be identified before applying?</li>
                    <li>Do students get paid a stipend? What will the cost of living be?</li>
                  </ul>
                </div>
              </article>

              {/* Paid Work */}
              <article className="rounded-xl border bg-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Paid Work</h2>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Good for those looking to make money and those who have spent enough time in the classroom</li>
                  <li>Very competitive—prepare your resume and practice writing cover letters; landing a good position takes patience and persistence</li>
                </ul>
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground">Important considerations</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Reflect on your values: upward mobility, workplace culture, and work–life balance</li>
                  </ul>
                  <p className="text-sm font-medium text-foreground mt-3">Common Employers</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Advocacy industry (mental health advocacy organizations, health equity companies)</li>
                    <li>Biotechnology and pharmaceutical companies (entry-level roles include sales, quality control, and R&D)</li>
                    <li>Consulting</li>
                  </ul>
                </div>
              </article>

              {/* Gap Year */}
              <article className="rounded-xl border bg-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Gap Year</h2>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Good for people looking to improvise while finding the right job or graduate program</li>
                  <li>It can feel unsettling to improvise and not be working towards a greater purpose—optimistically, you get time to focus on yourself</li>
                  <li>Explore your interests however your heart desires</li>
                  <li>Volunteering: contribute to a cause greater than yourself, learn skills, build connections, and discover new career paths</li>
                </ul>
              </article>
            </div>
          </section>

          {/* 3) Curated programs table */}
          <section id="programs" className="mb-12 bg-white">
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
