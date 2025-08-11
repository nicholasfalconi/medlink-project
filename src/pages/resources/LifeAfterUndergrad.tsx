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
          <header className="mt-6 mb-8 text-center">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">Planning guide</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2">Planning for Life after undergrad</h1>
            <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
              Applying to medical school is challenging. If you don't get in right away, there are strong paths forward—graduate school, paid work, or a gap year. Here's how to choose with intention.
            </p>

            {/* In-page nav */}
            <nav className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="#overview" className="px-4 py-2 rounded-full border bg-card text-foreground hover:bg-muted/30 transition">Overview</a>
              <a href="#paths" className="px-4 py-2 rounded-full border bg-card text-foreground hover:bg-muted/30 transition">Three Paths</a>
              <a href="#programs" className="px-4 py-2 rounded-full border bg-card text-foreground hover:bg-muted/30 transition">Programs</a>
            </nav>
          </header>

          {/* Overview + Tips */}
          <section id="overview" className="mb-12">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <article className="rounded-xl border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground">What typically happens after graduating</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  After graduation, the sudden freedom can feel liberating but often leads to a lack of structure. Some people become paralyzed by endless possibilities while others overcommit. The goal is to find a healthy middle ground: reflect on your goals—improving MCAT scores, pursuing research, or earning income—and scaffold your time with realistic tasks and timelines.
                </p>
              </article>
              <aside className="rounded-xl border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">Tips to structure unstructured time</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  <li>Write a 90-day plan with weekly checkpoints.</li>
                  <li>Pick 2–3 priorities (e.g., MCAT, job search, research) and protect time for them.</li>
                  <li>Schedule accountability (study groups, mentors, or regular check-ins).</li>
                </ul>
              </aside>
            </div>
          </section>

          {/* Three Paths */}
          <section id="paths" className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground text-center mb-6">Three common paths</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="rounded-xl border bg-card p-6">
                <GraduationCap className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground">Graduate school</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Master's Programs: 1–3 years (research or course-based)</li>
                  <li>PhD: 3–7 years (typically 4–5)</li>
                </ul>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Considerations</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Exit opportunities and supervisor fit</li>
                    <li>Funding/stipend and cost of living</li>
                  </ul>
                </div>
              </article>

              <article className="rounded-xl border bg-card p-6">
                <Briefcase className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground">Paid Work</h3>
                <p className="mt-3 text-sm text-muted-foreground">Great for income and real-world experience.</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Competitive market—polish resume and cover letters</li>
                  <li>Expect patience and persistence to land roles</li>
                </ul>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Common employers</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Advocacy organizations (e.g., mental health, health equity)</li>
                    <li>Biotech and pharma (sales, QC, R&D)</li>
                    <li>Consulting</li>
                  </ul>
                </div>
              </article>

              <article className="rounded-xl border bg-card p-6">
                <Compass className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground">Gap Year</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Flexibility to explore interests</li>
                  <li>Balance freedom with purpose</li>
                  <li>Volunteering to build skills and connections</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Programs table */}
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
