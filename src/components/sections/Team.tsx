import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface TeamMember {
  name: string;
  role?: string;
  bio: string;
  image?: string;
  initials?: string;
  responsibilities?: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Ervis Musa",
    role: "Project Coordinator",
    bio: "Ervis is a medical student at the University of Ottawa. He completed his Bachelor of Health Sciences at Queen's University with a certificate in Disability and Physical Activity (DIPA). He values mentorship for its ability to turn experience into direction—something he benefited from himself and now aims to offer others. Don't pay for your mentorship! Outside of MedLink, he's currently training for a marathon.",
    image: "/lovable-uploads/f572a4c6-8aa5-4252-9310-71e2e36e6781.png",
    initials: "EM",
    responsibilities: [
      "Oversees the overall direction of the project",
      "Manages partnerships, team structure, and long-term planning",
      "Supports all team members",
    ],
  },
  {
    name: "Matey Juric",
    role: "Mentorship Team Lead",
    bio: "Matey is a medical student at the University of Ottawa. He completed a degree in Biological Sciences at Drexel University in Philadelphia prior to medical school. He's passionate about mentorship because of the lifelong connections it fosters and believes there's nothing more fulfilling than helping someone work toward their goals.",
    image: "/lovable-uploads/41742e0a-3782-490f-8609-be96532f4fbd.png",
    initials: "MJ",
    responsibilities: [
      "Handles mentor-mentee matching",
      "Recruits and onboards medical student mentors",
      "Gathers feedback to improve the mentorship experience",
    ],
  },
  {
    name: "Alec Weller",
    role: "Undergraduate Outreach Lead",
    bio: "Alec is a medical student at the University of Ottawa. Outside of school, he enjoys playing soccer and staying active through sports. He values mentorship as a way to give students clarity and confidence when navigating a confusing and competitive path, and he's committed to making that journey feel more approachable for others.",
    image: "/lovable-uploads/ba8e00af-8c59-45e1-b795-26fe6d2cf17c.png",
    initials: "AW",
    responsibilities: [
      "Connects with undergrad student groups and classrooms",
      "Manages mentee sign-ups and short-term help requests",
      "Ensures undergrad participants feel supported and engaged",
    ],
  },
  {
    name: "Braeden Hill",
    role: "Events & Programming Lead",
    bio: "Braeden is a medical student at the University of Toronto. Outside of his academic pursuits, he enjoys going to the gym, running, and playing sports. For him, mentorship is about sharing experience and encouragement during one of the most stressful and uncertain parts of a student's journey.",
    image: "/lovable-uploads/6e05aacf-2940-422e-9e80-da3f2bccb15b.png",
    initials: "BH",
    responsibilities: [
      "Plans and runs workshops, panels, and live sessions",
      "Coordinates logistics and content for MedLink events",
      "Works closely with the outreach lead to promote events",
    ],
  },
  {
    name: "Adam Levitan",
    role: "Inclusion & Access Lead",
    bio: "Adam is currently pursuing his Master's at the University of Toronto's Institute of Medical Science, with an undergraduate background in biology from Queen's University. Adam enjoys the reciprocal learning that comes with mentor-mentee relationships and is especially passionate about providing mentorship free of cost, the way all mentorship should be.",
    image: "/lovable-uploads/9e284c90-1db3-405f-a48b-8abbbfe5af2c.png",
    initials: "AL",
    responsibilities: [
      "Ensures all content and mentorship are inclusive and accessible",
      "Helps support students and is responsible for email inquiries",
    ],
  },
  {
    name: "Nicholas Falconi",
    role: "Website & Tech Lead",
    bio: "Nick holds a degree in Computer Science with a specialization in Biomedical Computing from Queen's University. He built and maintains the MedLink website and supports the team with digital systems and infrastructure. He values mentorship for its ability to demystify complex paths and open doors that others might not know existed.",
    initials: "NF",
    responsibilities: [
      "Built and maintains the MedLink website",
      "Manages tech infrastructure, forms, and email systems",
      "Supports the team with digital tools, troubleshooting, and platform updates",
    ],
  },
];

export const Team = () => {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const toggle = (idx: number) =>
    setOpenMap((m) => ({ ...m, [idx]: !m[idx] }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The MedLink Project",
    url: "https://www.themedlinkproject.com/",
    member: teamMembers.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
    })),
  };

  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The people behind The MedLink Project who make mentorship accessible and meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, idx) => (
            <Card
              key={idx}
              className="border bg-card focus-visible:ring-2 focus-visible:ring-primary/40 outline-none cursor-pointer"
              role="button"
              tabIndex={0}
              aria-expanded={!!openMap[idx]}
              onClick={() => toggle(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(idx);
                }
              }}
            >
              <CardHeader className="flex flex-col items-center gap-4 text-center">
                <Avatar className="h-24 w-24">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={`${member.name} - ${member.role ?? "Team member"} headshot`} />
                  ) : (
                    <AvatarFallback className="bg-secondary text-foreground">
                      {member.initials ?? member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="flex items-center gap-2">
                  <div>
                    <CardTitle className="text-lg text-foreground">{member.name}</CardTitle>
                    {member.role && (
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${openMap[idx] ? "rotate-180" : "rotate-0"}`}
                    aria-hidden="true"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{member.bio}</p>
                {member.responsibilities && member.responsibilities.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-foreground">Role responsibilities</p>
                    <ul className={`mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground ${openMap[idx] ? "block" : "hidden"}`}>
                      {member.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-12 md:mt-16" aria-labelledby="team-roles-heading">
          <h3 id="team-roles-heading" className="text-2xl font-semibold mb-4 text-foreground">Team Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((m) => (
              <article key={m.name} className="rounded-lg border bg-card p-6">
                <h4 className="text-base font-semibold text-foreground">
                  {m.role} <span className="text-muted-foreground">({m.name})</span>
                </h4>
                {m.responsibilities && (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {m.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};
